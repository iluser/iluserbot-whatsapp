const { create, ev, Client } = require('@open-wa/wa-automate')
const welcome = require('./lib/welcome')
//const left = require('./lib/left')
const cron = require('node-cron')
const color = require('./lib/color')
const fs = require('fs')
const headless = false
// const msgHndlr = require ('./iluser')
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
        //iluser.onAnyMessage((fn) => messageLog(fn.fromMe, fn.type))
        // Force it to keep the current session
        iluser.onStateChanged((state) => {
            console.log('[Client State]', state)
            if (state === 'CONFLICT' || state === 'UNLAUNCHED') iluser.forceRefocus()
        })
        // listening on message
        iluser.onMessage((async (message) => {

        iluser.getAmountOfLoadedMessages() // Cut message Cache if cache more than 3K
            .then((msg) => {
                if (msg >= 700) {
                    console.log('[CLIENT]', color(`Loaded Message Reach ${msg}, cuting message cache...`, 'yellow'))
                    iluser.cutMsgCache()
                }
            })
        // msgHndlr(iluser, message)
        // Message Handler (Loaded from recent cache)
        require('./iluser.js')(iluser, message)
    }))
           

        iluser.onGlobalParticipantsChanged((async (heuh) => {
            await welcome(iluser, heuh) 
            left(iluser, heuh)  
            }))

        iluser.onAddedToGroup(async (chat) => {
            if(isWhite(chat.id)) return iluser.sendText(chat.id, `Halo aku iluser_BOT, Ketik ${prefix}menu Untuk Melihat List Command Ku...`)
            if(mtcState === false){
                const groups = await iluser.getAllGroups()
                // BOT group count less than
                if(groups.length > groupLimit){
                    await iluser.sendText(chat.id, `Maaf, Batas group yang dapat iluser_BOT tampung *${groupLimit}* dan sudah penuh`).then(async () =>{
                        iluser.leaveGroup(chat.id)
                        iluser.deleteChat(chat.id)
                    })
                }else{
                    if(chat.groupMetadata.participants.length < memberLimit){
                        await iluser.sendText(chat.id, `Maaf, BOT keluar jika member group tidak melebihi ${memberLimit} orang`).then(async () =>{
                            iluser.leaveGroup(chat.id)
                            iluser.deleteChat(chat.id)
                        })
                    }else{
                        if(!chat.isReadOnly) iluser.sendText(chat.id, `Halo aku iluser_BOT, Ketik ${prefix}menu Untuk Melihat List Command Ku...`)
                    }
                }
            }else{
                await iluser.sendText(chat.id, 'iluser_BOT sedang maintenance, coba lain hari').then(async () => {
                        iluser.leaveGroup(chat.id)
                        iluser.deleteChat(chat.id)
                })
            }
        })

        // listening on Incoming Call
        iluser.onIncomingCall(( async (call) => {
            await iluser.sendText(call.peerJid, 'Maaf, saya tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!')
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
  // executablePath: execPath,
  useChrome: true,
  killProcessOnBrowserClose: false,
  throwErrorOnTosBlock: true,
  chromiumArgs: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--aggressive-cache-discard',
    '--disable-cache',
    '--disable-application-cache',
    '--disable-offline-load-stale-cache',
    '--disk-cache-size=0'
  ]
}

let options1 = {
  sessionId: 'iluser',
  headless: headless,
  qrRefreshS: 20,
  qrTimeout: 0,
  authTimeout: 0,
  autoRefresh: true,
  restartOnCrash: start,
  cacheEnabled: false,
  // executablePath: execPath,
  useChrome: true,
  killProcessOnBrowserClose: false,
  throwErrorOnTosBlock: true,
  chromiumArgs: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--aggressive-cache-discard',
    '--disable-cache',
    '--disable-application-cache',
    '--disable-offline-load-stale-cache',
    '--disk-cache-size=0'
  ]
} 
//if (!headless) options['defaultViewport'] = null

create(options)
    .then((iluser) => {start(iluser)})
    .catch((error) => console.log(error))

create(options1)
    .then((iluser) => {start(iluser)})
    .catch((error) => console.log(error)) 
