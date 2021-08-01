const { create, Client } = require('@open-wa/wa-automate')
var getDB = require('./db');
const cron = require('node-cron')
const color = require('./lib/color')
const fs = require('fs')
const ilwan = require('./iluser.js')
const headless = true
const figlet = require('figlet')
const lolcatjs = require('lolcatjs')
const { default: PQueue } = require("p-queue");
const settings = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
const premium = JSON.parse(fs.readFileSync('./lib/database/premium.json'))
const setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
const isWhite = (chatId) => premium.includes(chatId) ? true : false

let { 
    limitCount,
    memberLimit, 
    groupLimit,
    mtc: mtcState,
    banChats,
    prefix,
    restartState: isRestart
    } = setting

    const queue = new PQueue({ 
      concurrency: 4,
      timeout: 7000, 
      throwOnTimeout: true 
    })
queue.on('next', () => {
    if (queue.size > 0 || queue.pending > 0) console.log(color('[==>>]', 'red'), `In-process: ${queue.pending} In-queue: ${queue.size}`)
})

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

const start = async (iluser = new Client()) => {
  try {
        console.log('------------------------------------------------')
        lolcatjs.fromString(color(figlet.textSync('iluser_BOT', { horizontalLayout: 'full' })))
        console.log('------------------------------------------------')
        lolcatjs.fromString('[DEV] ILUSER')
        lolcatjs.fromString('[SERVER] Server Started!')
        iluser.sendText('6283142933894@c.us','BOT started!!!');
        
        // process unread message
    iluser.getAllUnreadMessages().then(unreadMessages => {
      unreadMessages.forEach(message => {
          setTimeout(
              async function () {
                  if (!message.isGroupMsg) await queue.add(() => ilwan(iluser, message)).catch(err => {
                      console.log((err.name === 'TimeoutError') ? `${color('[==>>]', 'red')} Error task process timeout!` : err)
                      if (queue.isPaused) queue.start()
                  })
              }, 1000)
      })
  })
        // ketika seseorang mengirim pesan
        iluser.onMessage(async message => {
          iluser.setPresence(true)
          iluser.getAmountOfLoadedMessages() // menghapus pesan cache jika sudah 3000 pesan.
                .then((msg) => {
                    if (msg >= 3000) {
                        console.log('[CLNT]', color(`Loaded Message Reach ${msg}, cuting message cache...`, 'yellow'))
                        iluser.cutMsgCache()
                    }
                })
            await queue.add(() => ilwan(iluser, message)).catch(err => {
                console.log((err.name === 'TimeoutError') ? `${color('[==>>]', 'red')} Error task process timeout!` : err)
                if (queue.isPaused) queue.start()
            })

            if (queue.isPaused) queue.start()
        }).catch(err => {
            console.log(err)
        })

    // Force it to keep the current session
    iluser.onStateChanged((state) => {
      console.log('[ILUSER STATE]', state)
      if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') iluser.forceRefocus().then(() => queue.start())
  }).catch((err) => {
    console.log(err)
})
  
    
    iluser.onGlobalParticipantsChanged(async change => {
        console.log(change)
        const host = await iluser.getHostNumber() + '@c.us'
    try{
      const info = await iluser.getChatById(change.chat)
      const hasByProperty = Object.prototype.hasOwnProperty.call(change, 'by')
      console.log(`${change.action} => ${info.name}`);
      if (change.action == 'add' && hasByProperty && change.who !== host) {
        const msg = await getDB.msg_add(change.chat);
        const who = change.who;
        var target = who.match(/\d+/g);
        if (msg == undefined) {
          return
        }else if (msg.msg_add.length == 0) {
          iluser.sendTextWithMentions(change.chat, `Hii @${target}\nSelamat datang di *${info.name}*, Silahkan untuk memperkenalkan diri.\n\nKetik ${prefix}menu untuk menggunakan bot`);
        }else{
          const get_db = decodeURIComponent(msg.msg_add);
          iluser.sendText(change.chat, `${get_db}\n\n\nBy _*iluser_BOT*_ | t.me/iluser_BOT`);
        }
      }else if (change.action == 'remove') {
        const msg = await getDB.msg_kick(change.chat);
        const who = change.who;
        var target = who.match(/\d+/g);
        if (msg == undefined) {
          return
        }else if (msg.msg_kick.length == 0) {
          iluser.sendTextWithMentions(change.chat, `Yahaha @${target} telah wisuda`);
        }else{
          const get_db = decodeURIComponent(msg.msg_kick);
          iluser.sendText(change.chat, `${get_db}\n\n\nBy _*iluser_BOT*_ | t.me/iluser_BOT`);
        }
      }
    }catch(err){console.log(err)}
  })

iluser.onAddedToGroup(async chat => {
            if(isWhite(chat.id)) return iluser.sendText(chat.id, `  *INFO*
Ketik ${prefix}menu untuk melihat list command ya..

*NOTE!!!*
Dilarang VC/Telepon!!
Jika melanggar maka akan di BLOK

Jika ada masalah, kontak admin :
ILWAN : http://wa.me/6283142933894

*DONASI*
DANA/Gopay: 083142933894
Pulsa: 082340779017
OVO: 085333935211
PAYPAL : https://www.paypal.me/ilwanxyz`)
            if(mtcState === false){
                const groups = await iluser.getAllGroups()
                // BOT group count less than
                if(groups.length > groupLimit){
                      iluser.sendText(chat.id, `Maaf, Batas group yang dapat iluser_BOT tampung *${groupLimit}* dan sudah penuh`).then(async () =>{
                        console.log(`ADDED TO GROUP | Batas grup terlampaui [ ${groupLimit} ] `)
                        iluser.leaveGroup(chat.id)
                    })
                }else{
                    if(chat.groupMetadata.participants.length < memberLimit){
                        await iluser.sendText(chat.id, `Maaf, BOT keluar jika member group tidak melebihi ${memberLimit} orang`).then(async() =>{ await iluser.leaveGroup(chat.id)})
                        console.log(`ADDED TO GROUP | Member kurang dari [ ${memberLimit} ] `)  
                    }else{
                        if(!chat.isReadOnly) iluser.sendText(chat.id, `*INFO*
Ketik ${prefix}menu untuk melihat list command ya..

*NOTE!!!*
Dilarang VC/Telepon!!
Jika melanggar maka akan di BLOK

Jika ada masalah, kontak admin :
ILWAN : http://wa.me/6283142933894

*DONASI*
DANA/Gopay: 083142933894
Pulsa: 082340779017
OVO: 085333935211
PAYPAL: https://www.paypal.me/ilwanxyz`)
                          console.log(`ADDED TO GROUP | Sukses bergabung `)
                    }
                }
            }else{
                await iluser.sendText(chat.id, 'iluser_BOT sedang maintenance, coba lain hari').then(async () => {
                        iluser.leaveGroup(chat.id)
                })
            }
        })

        // listening on Incoming Call
        iluser.onIncomingCall( async call => {
            iluser.sendText(call.peerJid, 'MELANGGAR RULES!!\n\n*Telepon/VC*')
            .then(() => iluser.contactBlock(call.peerJid))
        })
      } catch (err) {
        console.log(color('[ERR>]', 'red'), err)
      }
    }

// /**
//  * Uncache if there is file change
//  * @param {string} module Module name or path
//  * @param {function} cb <optional> 
//  */

// function nocache(module, cb = () => { }) {
//     console.log('Module', `'${module}'`, 'is now being watched for changes')
//     fs.watchFile(require.resolve(module), async () => {
//         await uncache(require.resolve(module))
//         cb(module)
//     })
// }

// /**
//  * Uncache a module
//  * @param {string} module Module name or path
//  */
// function uncache(module = '.') {
//     return new Promise((resolve, reject) => {
//         try {
//             delete require.cache[require.resolve(module)]
//             resolve()
//         } catch (e) {
//             reject(e)
//         }
//     })
// }

let options = {
  sessionId: 'ilwan',
  headless: headless,
  qrRefreshS: 20,
  qrTimeout: 60,
  authTimeout: 60,
  autoRefresh: true,
  restartOnCrash: start,
  blockAssets: true,
	blockCrashLogs: true,
  bypassCSP: true,
  cacheEnabled: false,
  disableSpins: true,
  //licenseKey: '76E8C5E5-CEE3478F-9F435776-BE83B5EE',
  //executablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
  //stickerServerEndpoint: false,
  killProcessOnBrowserClose: true,
  throwErrorOnTosBlock: false,
  useChrome: true,
  chromiumArgs: [
    '--aggressive-cache-discard',
    '--disable-cache',
    '--disable-application-cache',
    '--disable-offline-load-stale-cache',
    '--disk-cache-size=0',
    '--disable-gl-drawing-for-tests',
    '--disable-2d-canvas-clip-aa',
    '--disable-2d-canvas-image-chromium',
    '--disable-3d-apis',
    '--disable-accelerated-2d-canvas',
    '--disable-accelerated-jpeg-decoding',
    '--disable-accelerated-mjpeg-decode',
    '--disable-accelerated-video-decode',
    '--disable-app-list-dismiss-on-blur',
    '--disable-audio-output',
    '--disable-background-timer-throttling',
    '--disable-backgrounding-occluded-windows',
    '--disable-breakpad',
    '--disable-canvas-aa',
    '--disable-client-side-phishing-detection',
    '--disable-component-extensions-with-background-pages',
    '--disable-composited-antialiasing',
    '--disable-default-apps',
    '--disable-dev-shm-usage',
    '--disable-extensions',
    '--disable-features=TranslateUI,BlinkGenPropertyTrees',
    '--disable-field-trial-config',
    '--disable-fine-grained-time-zone-detection',
    '--disable-geolocation',
    '--disable-gl-extensions',
    '--disable-gpu',
    '--disable-gpu-early-init',
    '--disable-gpu-sandbox',
    '--disable-gpu-watchdog',
    '--disable-histogram-customizer',
    '--disable-in-process-stack-traces',
    '--disable-infobars',
    '--disable-ipc-flooding-protection',
    '--disable-notifications',
    '--disable-renderer-backgrounding',
    '--disable-session-crashed-bubble',
    '--disable-setuid-sandbox',
    '--disable-site-isolation-trials',
    '--disable-software-rasterizer',
    '--disable-sync',
    '--disable-threaded-animation',
    '--disable-threaded-scrolling',
    '--disable-translate',
    '--disable-webgl',
    '--disable-webgl2',
    '--enable-features=NetworkService',
    '--force-color-profile=srgb',
    '--hide-scrollbars',
    '--ignore-certifcate-errors',
    '--ignore-certifcate-errors-spki-list',
    '--ignore-certificate-errors',
    '--ignore-certificate-errors-spki-list',
    '--ignore-gpu-blacklist',
    '--ignore-ssl-errors',
    '--log-level=3',
    '--metrics-recording-only',
    '--mute-audio',
    '--no-crash-upload',
    '--no-default-browser-check',
    '--no-experiments',
    '--no-first-run',
    '--no-sandbox',
    '--no-zygote',
    '--renderer-process-limit=1',
    '--safebrowsing-disable-auto-update',
    '--silent-debugger-extension-api',
    '--single-process',
    '--unhandled-rejections=strict',
    '--window-position=0,0'
  ]
}

create(options)
    .then(async(iluser) => {start(iluser)})
    .catch((error) => console.log(error))
