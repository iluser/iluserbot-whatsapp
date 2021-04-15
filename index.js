const { create, ev, Client } = require('@open-wa/wa-automate')
var getDB = require('./db');
const cron = require('node-cron')
const color = require('./lib/color')
const fs = require('fs')
const headless = false
const figlet = require('figlet')
const lolcatjs = require('lolcatjs')
//const options = require('./options')

require('./iluser.js')
nocache('./iluser.js', module => console.log(`'${module}' Updated!`))
require('./lib/help.js')
nocache('./lib/help.js', module => console.log(`'${module}' Updated!`))
require('./lib/database/setting.json')
nocache('./lib/database/setting.json', module => console.log(`'${module}' Updated!`))
require('./lib/database/premium.json')
nocache('./lib/database/premium.json', module => console.log(`'${module}' Updated!`))

const settings = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
const adminNumber = JSON.parse(fs.readFileSync('./lib/database/admin.json'))
const setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
const isWhite = (chatId) => adminNumber.includes(chatId) ? true : false

let { 
    limitCount,
    memberLimit, 
    groupLimit,
    mtc: mtcState,
    banChats,
    prefix,
    restartState: isRestart
    } = setting

function restartAwal(iluser){
    setting.restartState = false
    isRestart = false
    iluser.sendText(setting.restartId, 'Restart Succesfull!')
    setting.restartId = 'undefined'
    //fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null,2));
}

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

const start = async (iluser = new Client()) => {
        console.log('------------------------------------------------')
        lolcatjs.fromString(color(figlet.textSync('iluser_BOT', { horizontalLayout: 'full' })))
        console.log('------------------------------------------------')
        lolcatjs.fromString('[DEV] ILUSER')
        lolcatjs.fromString('[SERVER] Server Started!')
        iluser.sendText('6283142933894@c.us','BOT started!!!');
        //iluser.onAnyMessage((fn) => messageLog(fn.fromMe, fn.type))
        // Force it to keep the current session
        iluser.onStateChanged((state) => {
            console.log('[ILUSER STATE]', state)
            iluser.sendText('6283142933894@c.us', 'BOT STATE '+ state)
            if (state === 'CONFLICT' || state === 'UNLAUNCHED') iluser.forceRefocus()
        })
        // listening on message
        iluser.onMessage((async (message) => {

        iluser.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 700) {
                    console.log('[ILUSER STATE]', color(`Loaded Message Reach ${msg}, cuting message cache...`, 'yellow'))
                    iluser.sendText('6283142933894@c.us', `cuting *${msg}* message cache...`)
                    iluser.cutMsgCache()
                }
            })
        require('./iluser.js')(iluser, message)
    }))

  /*  const allChatz = await iluser.getAllChats(withNewMessageOnly = false)
    const allGroups = await iluser.getAllGroups()
    for (let change of allGroups) { */
    iluser.onGlobalParticipantsChanged(async(change) => {
        console.log(change)
        //welcome(iluser, change)
    try{
      const info = await iluser.getChatById(change.chat)
      console.log(`${change.action} => ${info.name}`);
      if (change.action == 'add') {
        const msg = await getDB.msg_add(change.chat);
        const who = change.who;
        var target = who.match(/\d+/g);
        if (msg == undefined) {
          return
        }else if (msg.msg_add.length == 0) {
          iluser.sendTextWithMentions(change.chat, `Hii @${target}\nSelamat datang di *${info.name}*, Silahkan untuk memperkenalkan diri.\n\nKetik ${prefix}menu untuk menggunakan bot`);
        }else{
          const get_db = decodeURIComponent(msg.msg_add);
          iluser.sendText(change.chat, get_db);
        }
      }else if (change.action == 'remove') {
        const msg = await getDB.msg_kick(change.chat);
        const who = change.who;
        var target = who.match(/\d+/g);
        if (msg == undefined) {
          return
        }else if (msg.msg_kick.length == 0) {
          iluser.sendTextWithMentions(change.chat, `@${target} telah wisuda`);
        }else{
          const get_db = decodeURIComponent(msg.msg_kick);
          iluser.sendText(change.chat, get_db);
        }
      }
    }catch(err){console.log(err)}
  })

iluser.onAddedToGroup(async (chat) => {
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
                        iluser.sendText(chat.id, `Maaf, BOT keluar jika member group tidak melebihi ${memberLimit} orang`).then(async() =>{ iluser.leaveGroup(chat.id)})
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
        iluser.onIncomingCall(( async (call) => {
            iluser.sendText(call.peerJid, 'MELANGGAR RULES!!\n\n*Telepon/VC*')
            .then(() => iluser.contactBlock(call.peerJid))
        }))
      }
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

let options = {
  sessionId: 'ilwan',
  headless: headless,
  qrRefreshS: 20,
  qrTimeout: 0,
  authTimeout: 0,
  autoRefresh: true,
  restartOnCrash: start,
  cacheEnabled: false,
  licenseKey: '76E8C5E5-CEE3478F-9F435776-BE83B5EE',
  //executablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
  useChrome: true,
  //stickerServerEndpoint: false,
  killProcessOnBrowserClose: false,
  throwErrorOnTosBlock: true,
  chromiumArgs: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--aggressive-cache-discard',
    '--disable-cache',
    '--disable-application-cache',
    '--disable-offline-load-stale-cache',
    '--disk-cache-size=0',
    '--disable-gl-drawing-for-tests'
  ]
}

let options1 = {
  sessionId: 'ilwan2',
  headless: headless,
  qrRefreshS: 20,
  qrTimeout: 0,
  authTimeout: 0,
  autoRefresh: true,
  restartOnCrash: start,
  cacheEnabled: false,
  licenseKey: '76E8C5E5-CEE3478F-9F435776-BE83B5EE',
  //executablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
  useChrome: true,
  //stickerServerEndpoint: false,
  killProcessOnBrowserClose: false,
  throwErrorOnTosBlock: true,
  chromiumArgs: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--aggressive-cache-discard',
    '--disable-cache',
    '--disable-application-cache',
    '--disable-offline-load-stale-cache',
    '--disk-cache-size=0',
    '--disable-gl-drawing-for-tests'
  ]
}

create(options)
    .then(async(iluser) => {start(iluser)})
    .catch((error) => console.log(error))

create(options1)
    .then(async(iluser) => {start(iluser)})
    .catch((error) => console.log(error))
