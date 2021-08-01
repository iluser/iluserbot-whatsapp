const { create, Client } = require('@open-wa/wa-automate')
var getDB = require('./db');
const color = require('./lib/color')
const fs = require('fs')
const { recache, getModuleName, createReadFileSync } = require('./utils')
//const HandleMsg = require('./iluser.js')
const options = require('./options.js')
const figlet = require('figlet')
const lolcatjs = require('lolcatjs')
const {  spawn } = require('child_process')
const { default: PQueue } = require("p-queue");
const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
const appRoot = require('app-root-path')

let { reCacheModule, HandleMsg } = recache(appRoot + '/iluser.js', module => {
  HandleMsg = require(module).HandleMsg
  reCacheModule = require(module).reCacheModule
  console.log(color('[WATCH]', 'orange'), color(`=> '${getModuleName(module)}'`, 'yellow'), 'Updated!')
})
recache(appRoot + '/lib/help.js', module => {
  reCacheModule('help = _data', require(module))
  console.log(color('[WATCH]', 'orange'), color(`=> '${getModuleName(module)}'`, 'yellow'), 'Updated!')
})
let { 
  prefix,
  ownerNumber
  } = setting

const queue = new PQueue({ 
      concurrency: 5,
      timeout: 3000, 
      throwOnTimeout: true 
    })

queue.on('next', () => {
    if (queue.size > 0 || queue.pending > 0) console.log(color('[==>>]', 'red'), `In-process: ${queue.pending} In-queue: ${queue.size}`)
})

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

const start = async (iluser = new Client()) => {
  try {
        console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
        console.log(color(figlet.textSync('  ILUSER BOT', { font: 'Ghost', horizontalLayout: 'default' })))
        console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
        lolcatjs.fromString('[DEV] ILUSER')
        lolcatjs.fromString('[SERVER] Server Started!')
        iluser.sendText('6283142933894@c.us','BOT started!!!');
        
        // process unread message
        iluser.getAllUnreadMessages().then(async unreadMessages => {
             for (let message of unreadMessages) {
                 if (!message.isGroupMsg) await queue.add(() => HandleMsg(message, iluser)).catch(err => {
                     console.log((err.name === 'TimeoutError') ? `${color('[==>>]', 'red')} Error task process timeout!` : err)
                     if (queue.isPaused) queue.start()
                 })
             }
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
            await queue.add(() => HandleMsg(iluser, message)).catch(err => {
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
      if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED' || state === 'OPENING') iluser.forceRefocus().then(() => queue.start())
  }).catch((err) => {
    console.log(err)
})
  
    
    iluser.onGlobalParticipantsChanged(async change => {
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
          // const nama = get_db.split('{nama}').join(`@${target}`);
          // const pesan = nama.split('{grup}').join(info.name);
          // console.log(pesan);
          iluser.sendText(change.chat, `${get_db}`);
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
          // const nama = get_db.split('{nama}').join(`@${target}`);
          // const pesan = nama.split('{grup}').join(info.name);
          // console.log(pesan);
          iluser.sendText(change.chat, `${get_db}`);
        }
      }
    }catch(err){console.log(err)}
  })

      iluser.onIncomingCall(async call => {
          // ketika seseorang menelpon nomor bot
          if (!call.isGroup || !call.participants.length > 1) {
              console.log(color('[==>>]', 'red'), `Someone is calling bot, lol~ id: ${call.peerJid}`)
              iluser.sendText(call.peerJid, `MELANGGAR RULES!`)
              setTimeout(() => {
                iluser.contactBlock(call.peerJid)
              }, 3000)
          }
      })

      iluser.getPage().on('error', () => {
        iluser.sendText(ownerNumber, `⌛ Page Error! Server bot akan direstart!`)
        spawn('restart.cmd')
    })

      } catch (err) {
        console.log(color('[ERR>]', 'red'), err)
      }
    }

    // create(options)
    // .then(async(iluser) => {start(iluser)})
    // .catch((error) => console.log(error))
    create(options(true, start))
    .then(iluser => {start(iluser)})
    .catch(err => new Error(err))
