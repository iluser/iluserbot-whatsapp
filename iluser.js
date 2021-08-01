require('dotenv').config()
const { recache, getModuleName } = require('./utils')
const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
var ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
ffmpeg.setFfmpegPath(ffmpegPath);
var getDB = require('./db');
const { ind } = require('./text/lang/')
const axios = require('axios')
const moment = require('moment-timezone')
const os = require('os')
const get = require('got')
const ms = require('parse-ms')
const toMs = require('ms')
const acrcloud = require("acrcloud")
const acr = new acrcloud({ 
    host: "identify-eu-west-1.acrcloud.com", 
    access_key: "a7982a1f271fc390f3a69cb5bac04498", 
    access_secret: "QPbD6UOnfawRtUiH88lzKx7edUaX20I0erUWCoCW"
})
const isPorn = require('is-porn')
const apiNSF = ['c3257b42f47544d08b8609974227ac1f','e281f93d62384681af55a66d967c0883','dc0cac2b46564d5ebbf6bda7eabcc7f2','04389571abcb4d66a1ecf3e1ac28b9a8','efb87b31fe13461ba2c1844311b204d6','72a8fa429c0744aeafdd2517eb7ad55b']
const apiNSFW = apiNSF[Math.floor(Math.random() * apiNSF.length)]
const NSFAI = require('nsfai')
const noPorn = new NSFAI(apiNSFW)
//const convertapi = require('convertapi')
const convertapi = require('convertapi')('bnWtM4CFccvCXmmL')
const cheerio = require("cheerio");
const translatte = require('translatte')
const translate = require('./lib/translate.js')
const { stdout, send } = require('process')
const Math_js = require('mathjs');
const bent = require('bent')
const request = require('request')
const ZODIAK = require('./api/zodiak.js')
const PIN = require('./api/pin.js')
const h2p = require('html2plaintext');
const { exec, spawn } = require('child_process')
const BRAINLY = require(`./api/brainly.js`);
const TikTokScraper = require('tiktok-scraper')
const meme = require('./lib/meme')
const color = require('./lib/color')
const execc = require('await-exec')
const webp = require('webp-converter')
const Exif = require('./utils/exif')
const exif = new Exif()
const Takestick = require('./utils/takestick')
const takestick = new Takestick()
const cekResi = require('./lib/cekResi')
const images = require('./lib/images')
const nsfww = require('./lib/nsfww')
const canvas = require('canvacord')
var util = require('util')
var Jimp = require('jimp');
const fetch = require('node-fetch')
const { default: Waifu2x } = require("waifu2x");
const ytsearch = require('yt-search')
const youtubedl = require('youtube-dl-exec')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const print = (msg) => {
	return console.log(msg)
}
const { getUser, getPost, searchUser } = require('./lib/Insta')
const urlShortener = require('./lib/shortener')
const premium = require('./lib/premium.js')
const getLocationData = require('./utils/location')
const { createWorker } = require('tesseract.js');
const worker = createWorker();
const wav = require('node-wav')
const path = require('path')
const Utils = require('web-audio-api/build/utils')
const sharp = require('sharp')
const { Readable, Writable } = require('stream')
const { sizeFormatter } = require('human-readable')
const format = sizeFormatter({
    std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})
const { IgApiClient } = require('instagram-private-api');
const ig = new IgApiClient();
const IgMediaID = require('instagram-id-to-url-segment');
const sendJSON = (msg) => sendText(JSON.stringify(msg, null, 2))
// LOAD FILE
let truth = JSON.parse(fs.readFileSync('./lib/database/truth.json'))
let dare = JSON.parse(fs.readFileSync('./lib/database/dare.json'))
let banned = JSON.parse(fs.readFileSync('./lib/database/banned.json'))
let limit = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
let gruplimit = JSON.parse(fs.readFileSync('./lib/database/gruplimit.json'))
let muted = JSON.parse(fs.readFileSync('./lib/database/muted.json'))
let _premium = JSON.parse(fs.readFileSync('./lib/database/premium.json'))
let taxax = JSON.parse(fs.readFileSync('./lib/database/bacotdb.json'))
const pilot = JSON.parse(fs.readFileSync('./lib/database/pilot.json'))
let vnlist = JSON.parse(fs.readFileSync('./lib/database/vn.json'))
const bacot = require('./lib/database/bacotdb.json')
let tiktok_user = JSON.parse(fs.readFileSync('./lib/database/usertt.json'))
let switch_command = JSON.parse(fs.readFileSync('./command.json'))
//let tiktok_user = ('reemarmartin,vienbabinaaa,heart_juzmin,chikakiku,akuansellma,slzanblaa,sherylllvly,bbycky,ngelsk,salmanagibs').split(',')
const process = require('process');
//NEW MODULE
const facebookTools = require("facebook-tools");
const ytdl = require('ytdl-core');
const thiccysapi = require('textmaker-thiccy');
// PROTECT
let antilink = JSON.parse(fs.readFileSync('./lib/database/antilink.json'))
let _antinsfw = JSON.parse(fs.readFileSync('./lib/database/antiporn.json'))

const { 
    liriklagu, 
    lyric,
    quotemaker, 
    randNominal, 
    getStickerMaker, 
    gasNulis, 
    genUniqueId, 
    generate, 
    gasNulisFolio, 
    getRandomText, 
    processTime, 
    GetAccesToken, 
    getGuestToken, 
    getAktivate, 
    getBase64, 
    base64MimeType} = require('./lib/functions')
const { 
    help, 
    snk, 
    info, 
    donatee, 
    readme, 
    listChannel, 
    menu0, 
    menu1, 
    menu2, 
    menu3, 
    menu4, 
    menu5, 
    menu6, 
    menu7, 
    menu8, 
    menu9, 
    menu10, 
    menu11, 
    menu12, 
    menu13, 
    menu14, 
    menu15, 
    menu16, 
    menu17, menu18,
    rules, 
    own,
    piloot,
    bahasalist, 
    premfitur 
    } = require('./lib/help')

const {
    tiktokk,
    facebook,} = require('./lib/downloader')

const { 
    uploadImages, 
    custom    } = require('./lib/fetcher')

//let setting = JSON.parse(fs.readFileSync('./settings/setting.json'));
let { 
    gruplimitCount,
    limitCount,
    memberLimit, 
    groupLimit,
    banChats,
    lolkey,
    vhtearkey,
    mtc: mtcState,
    // ownerNumber,
    prefix,
    } = JSON.parse(fs.readFileSync('./settings/setting.json'));

var timeStart = Date.now() / 1000
moment.tz.setDefault('Asia/Jakarta').locale('id')

let reCacheModule = (funcs, _data) => {
    eval(funcs)
}

const HandleMsg = async (iluser, message) => {

    const config = {
        igusername: 'botwa_testing',
        igpassword: 'Anjay123',
      }
    const mess = {
        wait: 'Processing...',
        iklan: `\n\nIkuti saya di instagram.com/il.userr `,
        iklann: `Support bot dengan cara subscribe https://youtube.com/iluser`,
        nonaktif: `Fitur ini dinonaktifkan oleh admin grup`,
        blockk: '```Kamu telah di blokir karena melanggar #rules bot.!```\n\n\nUntuk unblock silahkan hubungi developer bot.',
        bann: '```Kamu telah di banned dari pengguna bot.```',
        nopremium: `⛔ *AKSES DI TOLAK* ⛔\n\nSilahkan menjadi user premium jika ingin menggunakan fitur ini. cek info premium di *${prefix}premium*`,
        nonadmin: `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`,
        botnonadmin: `⛔ *AKSES DI TOLAK* ⛔\n\nJadikan bot sebagai admin untuk bisa mengakses fitur ini`,
        nongroup: `⛔ *AKSES DI TOLAK* ⛔\n\nFitur ini hanya bisa di akses di dalam grup chat`,
        error: {
            St: '[ ❗ ERROR ] Tidak ada media',
            Ti: '[ ❗ ERROR ] Tidak ada stiker yang di balas',
            Qm: '[ ❗ ERROR ] Tema yang kamu pilih tidak tersedia!',
            Yt3: '[ ❗ ERROR ] Tidak dapat meng konversi ke mp3!',
            Yt4: '[ ❗ ERROR ] Error di sebabkan oleh sistem.',
            Ig: '[ ❗ ERROR ] Akun private atau link tidak valid',
            Ki: '[ ❗ ERROR ] Bot tidak bisa mengeluarkan Admin grup',
            Sp: '[ ❗ ERROR ] Bot tidak bisa mengeluarkan Admin',
            Ow: '[ ❗ ERROR ] Bot tidak bisa mengeluarkan Owner',
            Bk: '[ ❗ ERROR ] Bot tidak bisa memblokir Owner',
            Ad: '[ ❗ ERROR ] Tidak dapat menambahkan target, aku di private atau sering keluar',
            Iv: '[ ❗ ERROR ] Link yang anda kirim tidak valid!',
            norm: 'Terjadi kesalahan saat memproses data'
        }
    }

    try {
        let { body, type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList, filehash } = message
        var { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName
        const botNumber = await iluser.getHostNumber()
        const blockNumber = await iluser.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await iluser.getGroupAdmins(groupId) : ''
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        if (type === 'chat') var chats = body
        else var chats = (type === 'image' || type === 'video') ? caption : ''
        
        const regex = /(^\/|^!|^\$|^%|^&|^\+|^\.|^,|^<|^>|^-)(?=\w+)/g

        if (type === 'chat' && body.replace(regex, prefix).startsWith(prefix)) body = body.replace(regex, prefix)
        else body = ((type === 'image' && caption || type === 'video' && caption) && caption.replace(regex, prefix).startsWith(prefix)) ? caption.replace(regex, prefix) : ''
        body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
        const commands = caption || body || ''
        const command = commands.toLowerCase().split(' ')[0] || ''
        const args =  commands.split(' ')
        
        // const command = body.trim().replace(prefix, '').split(/\s/).shift().toLowerCase()
        // const arg = body.trim().substring(body.indexOf(' ') + 1)
        // const arg1 = arg.trim().substring(arg.indexOf(' ') + 1)
        // const args = body.trim().split(/\s/).slice(1)

        // const contentBody = commands.slice(args[0].length+1)
        // const emptyContent = !contentBody
        
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const SN = GenerateSerialNumber("000000000000")
        const isPremium = premium.checkPremiumUser(sender.id, _premium)
        const pendaftar = JSON.parse(fs.readFileSync('./lib/database/user.json'))
        const user = sender.id
        
        const GroupLinkDetector = antilink.includes(chatId)
        const tms = (Date.now() / 1000) - (timeStart);
        const cts = waktu(tms)
        const serial = sender.id
        const pengirim = sender.id
        const isBanned = banned.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
        const url = args.length !== 0 ? args[0] : ''
        const prf = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?@#$%^&\\©^.]/.test(commands) ? commands.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?@#$%^&\\©^.]/gi) : '-'
        const isAntiNsfw = isGroupMsg ? _antinsfw.includes(groupId) : false
        const isCmd = command.startsWith(prefix)
        const isPrf = command.startsWith(prf)
        const ownerNumber = '6283142933894@c.us'
        const isOwner = ownerNumber.includes(pengirim)
        const isPilot = pilot.includes(sender.id)
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedSticker = quotedMsg && quotedMsg.type === 'sticker'
        const isQuotedAudio = quotedMsg && quotedMsg.type === 'audio'
        const isQuotedVoice = quotedMsg && quotedMsg.type === 'ptt'
        const isQuotedFile = quotedMsg && quotedMsg.type === 'document'
        const isQuotedDocs = quotedMsg && (quotedMsg.type === 'document' || quotedMsg.type === 'docx' || quotedMsg.type === 'doc' || quotedMsg.type === 'ppt' || quotedMsg.type === 'pptx' || quotedMsg.type === 'xlsx' || quotedMsg.type === 'xls')
        const isImage = type === 'image'
        const isAudio = type === 'audio'
        const isVoice = type === 'ptt'
        const isSticker = type === 'sticker'
        const croppedChats = (chats?.length > 40) ? chats?.substring(0, 40) + '...' : chats
        const lvpc = Math.floor(Math.random() * 100) + 1
		const lvrq = 100 - lvpc

        /* #region Helper Functions */
        const Print = async (pesan) => {
            const Rapi =  JSON.stringify(pesan, null, 4)
            return await iluser.sendText(from, Rapi)
        }

        const sendText = async (txt) => {
            return await iluser.sendText(from, txt)
                .catch(e => {
                    console.log(e)
                })
        }

        const reply = async (txt, qId = id) => {
            return await iluser.reply(from, txt, qId)
                .catch(e => {
                    console.log(e)
                })
        }

        const printError = async (e, sendToOwner = true) => {
            reply(mess.error.norm)
            let errMsg = `${e.name} ${e.message}`
            let cropErr = errMsg.length > 999 ? errMsg.substr(0, 100) + '...' : errMsg
            console.log(color('[ERR>]', 'red'), "{ " + croppedChats + " }\n", e)
            if (sendToOwner) await iluser.sendText(ownerNumber, `{ ${chats} }\n${cropErr}`)
            return null
        }

        const sendFFU = async (url, capt = '') => {
            if (!capt) capt = ''
            return await iluser.sendFileFromUrl(from, url, '', capt, id)
                .catch(e => { return printError(e) })
        }

        const sendImg= async (url, capt = '') => {
              if (!capt) capt = ''
              return await iluser.sendImage(from, url, '', capt, id)
                  .catch(e => { return printError(e) })
          }

        const sendSFU = async (url, sendWait = true) => {
            return await iluser.sendStickerfromUrl(from, url, null, stickerMetadata).then((r) => (!r && r != undefined)
                ? sendText('Maaf, link yang kamu kirim tidak memuat gambar.')
                : sendText('')).then(() => console.log(color('[LOGS]', 'grey'), `Sticker Processed for ${processTime(t, moment())} Seconds`))
        }

        const sendJSON = (txt) => sendText(JSON.stringify(txt, null, 2))

        const sendJFU = async (url) => {
            try {
                let { data } = await get(url)
                return data && sendJSON(data)
            } catch (e) {
                sendText(e.toString())
            }
        }

        // ANTI ANTIAN
        if (isGroupMsg && GroupLinkDetector && isBotGroupAdmins && !isGroupAdmins && !isOwner && !isPilot && (type === 'chat' || type === 'image' || type === 'video')){
            let msg = ''
            if (type === 'image' && caption || type === 'video' && caption) msg = caption
            else msg = message.body
            if (msg?.match(/chat\.whatsapp\.com/gi) !== null) {
                console.log(color('[LOGS]', 'grey'), `Group link detected, kicking sender from ${name || formattedTitle}`)
                await reply(`${pushname} dikeluarkan karena mengirim link grup!`)
                setTimeout(async () => {
                    await iluser.removeParticipant(groupId, pengirim)
                }, 2000)
            }
        }

        if (isGroupMsg && isBotGroupAdmins && !isGroupAdmins && !isOwner){
            if (chats?.length > 19000){
                await reply(`*LONG TEXT DETECTED*\n\nTarget mengirim pesan lebih dari 35000 huruf. Akan di wisuda dalam 2 detik!`)
                await sleep(2000)
                await iluser.removeParticipant(groupId, sender.id)
            }
        }

        /* #region Avoid Bug */
        // Avoid order/vcard type msg (bug troli/slayer) gatau work apa kgk 
        if (type === 'order' || quotedMsg?.type === 'order' || type === 'vcard' || quotedMsg?.type === 'vcard') {
            let _whenGroup = ''
            if (isGroupMsg) _whenGroup = `in ${color(name || formattedTitle)}`
            console.log(color('[ORDR]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(croppedChats, 'grey'), 'from', color(pushname), _whenGroup)
            return iluser.deleteMessage(from, id, true)
        }

        // Avoid large body
        if (chats?.length > 1000) {
            let _whenGroup = ''
            if (isGroupMsg) _whenGroup = `in ${color(name || formattedTitle)}`
            console.log(color('[LARG]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(croppedChats, 'grey'), 'from', color(pushname), _whenGroup)
            return iluser.deleteMessage(from, id, true)
        }
        /* #endregion */
        
        if (isGroupMsg && isAntiNsfw && !isGroupAdmins && isBotGroupAdmins && !isOwner) {
        const isUrl = (url) => {
        return url?.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi))
        }
            if (isUrl(chats)) {
                const classify = new URL(isUrl(chats))
                console.log(color('[FILTER]', 'yellow'), 'Checking link...', classify.hostname)
                isPorn(classify.hostname, async (err, status) => {
                    if (err) return console.error(err)
                    if (status) {
                        console.log(color('[FILTER]', 'red'), color('The link is classified as NSFW!', 'yellow'))
                        await reply(`Link mengandung unsur pornografi!\nSekarang di wisuda dalam 2 detik!`)
                        iluser.removeParticipant(groupId, sender.id)
                    } else {
                        console.log(('[NEUTRAL]'), color('The link is safe!'))
                    }
                })
            }
        }
        
    
        if (isGroupMsg && isAntiNsfw && !isOwner && !isGroupAdmins && isBotGroupAdmins && isMedia) {
            if (mimetype === 'image') {
                const dataMediaa = await decryptMedia(message)
                const mediaType = `${dataMediaa.toString('base64')}`
                noPorn.predict(mediaType)
                .then(async(res) => {
                const { confidence } = res
                const nilaipersen = ((confidence / 1.000000) * 100).toFixed(1) + '%'
                    if (!res.sfw) {
                    reply(`*PORN DETECTOR*\n\nGambar ini mengandung unsur pornografi!\n*Keyakinan: ${nilaipersen}/100%*!\n\nTarget akan di kick dalam 2 detik!`)
                    .then(() => {
                        sleep(2000)
                        iluser.removeParticipant(groupId, sender.id)
                        console.log(color('[FILTER]', 'red'), color(`${sender.id} telah di-kick karena mengirimkan foto 18+`, 'green'))
                    })
                }
            })
          } else if (mimetype === 'video/mp4') {
                const dataMediaa = await decryptMedia(message)
                const inPorn = './temp/video/DetectingPorn.mp4'
                const outPorn = './temp/video/outPorn.png'
                fs.writeFile(inPorn, dataMediaa, err => {
                    if (err) return console.log(err)
                        execc(`ffmpeg -ss 1 -i ${inPorn} -vframes 1 -filter:v 'yadif',scale=1280:720' ${outPorn}`, async function() {
                        fs.readFile(outPorn, { encoding: 'base64' }, async (err, base64) => {
                    if (err) return console.log(err)
                        noPorn.predict(base64)
                        .then(async(res) => {
                            const { confidence } = res
                            const nilaipersen = ((confidence / 1.000000) * 100).toFixed(1) + '%'
                            console.log(res)
                     if (!res.sfw) {
                            reply(`*PORN DETECTOR*\n\nVideo ini mengandung unsur pornografi!\n*Keyakinan: ${nilaipersen}/100%*!\n\nTarget akan di kick dalam 3 detik!`)
                            .then(() => {
                            sleep(3000)
                            iluser.removeParticipant(groupId, sender.id)
                            console.log(color('[FILTER]', 'red'), color(`${sender.id} telah di-kick karena mengirimkan video 18+`, 'green'))
                            fs.unlinkSync(inPorn)
                            fs.unlinkSync(outPorn)
                            })
                        } else if (res.sfw) {
                            fs.unlinkSync(inPorn)
                            fs.unlinkSync(outPorn)
                           }
                        })
                    })
                })
            })
        }
    }
        function waktu(seconds) {
            seconds = Number(seconds);
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor(seconds % (3600 * 24) / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            var s = Math.floor(seconds % 60);
            var dDisplay = d > 0 ? d + (d == 1 ? " Hari, ":" Hari, ") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " Jam, ":" Jam, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " Menit, ":" Menit, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " Detik, ":" Detik ") : "";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        }

        const tutor = 'https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg'
        const errorurl = 'https://i.postimg.cc/BZhY3p8D/3819552.jpg'
        const ppdepresi = 'https://i.postimg.cc/4dZ0n8tT/fbee5949acdf18495777f89f64fa12ca.jpg'
        const logoo = 'https://i.postimg.cc/NM6T0tJ6/logo.png'

        const isMuted = (chatId) => {
          if(muted.includes(chatId)){
            return false
        }else{
            return true
            }
        }

        function banChat () {
            if(banChats == true) {
            return false
        }else{
            return true
            }
        }       

        function isGruplimit(id) {
            if (isOwner) {
                return false;
            }
            let found = false;
            for (let i of gruplimit) {
                if (i.id === id) {
                    let limitsa = i.gruplimit;
                    if (limitsa >= gruplimitCount) {
                        found = true;
                        iluser.reply(from, 'Command join bot anda sudah mencapai batas', id)
                        return true;
                    } else {
                        gruplimit
                        found = true;
                        return false;
                    }
                }
            }
            if (found === false) {
                let obj = {
                    id: `${id}`,
                    gruplimit: 1
                };
                gruplimit.push(obj);
                fs.writeFileSync('./lib/database/gruplimit.json', JSON.stringify(gruplimit));
                return false;
            }
        }

        function GruplimitAdd(id) {
            if (isOwner) {
                return;
            }
            var found = false;
            Object.keys(gruplimit).forEach((i) => {
                if (gruplimit[i].id == id) {
                    found = i
                }
            })
            if (found !== false) {
                gruplimit[found].gruplimit += 1;
                fs.writeFileSync('./lib/database/gruplimit.json', JSON.stringify(gruplimit));
            }
        }

        function isLimit(id){
                    if (isPremium) {return false;}
                    let found = false;
                    for (let i of limit){
                        if(i.id === id){
                            let limits = i.limit;
                            if (limits >= limitCount) {
                                found = true;
                                iluser.reply(message.from, `Limit penggunaan bot kamu untuk hari ini sudah habis. Pergunakanlah dengan bijak dan sesuai kebutuhanmu\n\nIngin akses bot dengan unlimited limit?\nSilahkan upgrade jadi user premium. Cek fitur premium di ${prefix}premfitur`, message.id)
                                console.log(color('LIMIT | penggunaan command bot habis', 'olive'))
                                return true;
                            }else{
                                limit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, limit:1};
                        limit.push(obj);
                        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                        return false;
                    }  
                }
        function limitAdd (id) {
                    if (isPremium) {return;}
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += 1;
                        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                    }
                }
        
                // END HELPER FUNCTION

        // Serial Number Generator
        function GenerateRandomNumber(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Generates a random alphanumberic character
        function GenerateRandomChar() {
            var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
            var randomNumber = GenerateRandomNumber(0,chars.length - 1);
            return chars[randomNumber];
        }
        // Generates a Serial Number, based on a certain mask
        function GenerateSerialNumber(mask){
            var serialNumber = "";
            if(mask != null){
                for(var i=0; i < mask.length; i++){
                    var maskChar = mask[i];
                    serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                }
            }
            return serialNumber;
        }
        var nmr = sender.id
        var obj = pendaftar.some((val) => {
            return val.id === nmr
        })

        function monospace(string) {
            return '```' + string + '```'
        }
        function isReg(obj){
            if (obj === true){
                return false
            } else {     
                return iluser.reply(message.from, `Hii ${pushname}.,\n\nKamu belum terverifikasi sebagai pengguna iluser_BOT.\nUntuk verifikasi, silahkan ketik ${prefix}verif\n\nFollow me on instagram:\nhttps://www.instagram.com/il.userr`, message.id) //if user is not registered
            }
        }

        const numberValidation = (number) => {
            let inputNomor =  number
            let hasilNomor = '';
            if(inputNomor.startsWith("0")){
                if(inputNomor.startsWith("0")) hasilNomor = inputNomor.replace("0", "62");
                else hasilNomor = inputNomor
            }
            else hasilNomor = inputNomor.replace("+", "")
            while(hasilNomor.match("-")) hasilNomor = hasilNomor.replace("-", "")
            while(hasilNomor.match(" ")) hasilNomor = hasilNomor.replace(" ", "")
            for(let i = 0; i < 4; i++){
                hasilNomor = hasilNomor.replace("(", "")
                hasilNomor = hasilNomor.replace(")", "")
            }
            let userId = hasilNomor+"@c.us";
            return userId
        }

const stickerPackID = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2";
const googleLink = "https://t.me/ilusser_bot";
const appleLink = "https://t.me/ilusser_bot";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function createExif(packname, author) {
  const json = {
    "sticker-pack-id": stickerPackID,
    "sticker-pack-name": packname,
    "sticker-pack-publisher": author,
    "android-app-store-link": googleLink,
    "ios-app-store-link": appleLink
  };

  let length = JSON.stringify(json).length;
  const f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
  const code = [
    0x00,
    0x00,
    0x16,
    0x00,
    0x00,
    0x00
  ];
  if (length > 256) {
    length = length - 256;
    code.unshift(0x01);
  } else {
    code.unshift(0x00);
  }
  const fff = Buffer.from(code);
  const ffff = Buffer.from(JSON.stringify(json));

  if (length < 16) {
    length = length.toString(16);
    length = "0" + length;
  } else {
    length = length.toString(16);
  }

  const ff = Buffer.from(length, "hex");
  const buffer = Buffer.concat([f, ff, fff, ffff]);
  fs.writeFileSync('./image/p.exif', buffer, function (err) {
        if (err)
            return console.error(err);
    });
}

function modifExif(buffer, id, callback) {
  fs.writeFileSync('./image/' + id + '.webp', buffer)
  const {
    spawn
  } = require('child_process')
  spawn('webpmux', ['-set', 'exif', './image/p.exif', './image/' + id + '.webp', '-o', './image/' + id + '.webp'])
    .on('exit', () => {
      callback(fs.readFileSync('./image/' + id + '.webp', {
        encoding: 'base64'
      }))
      fs.unlink('./image/' + id + '.webp').then(() => {
        console.log('Succes delete sticker from server')
      }) 
    })
    .on('error', () => console.log('error!'))
}

function bufferToStream(buffer) {
  const readable = new Readable()
  readable._read = () => {}
  readable.push(buffer)
  readable.push(null)
  return readable
}
const modifWebp = (id, buffers) => new Promise((resolve) => {
  const stream = bufferToStream(buffers)
  const {
    spawn
  } = require('child_process')
  ffmpeg(stream)
  .inputFormat('mp4') //"-vcodec", "libwebp", "-vf", "scale='min(150,iw)':min'(150,ih)':force_original_aspect_ratio=decrease, fps=15, pad=150:150:-1:-1:color=#00000000", '-lossless', '1', "-loop", "1", "-preset", "default", "-an", "-vsync", "0"
  .addOutputOptions(`-vcodec`,`libwebp`,`-vf`,`scale='min(240,iw)':min'(240,ih)':force_original_aspect_ratio=decrease,fps=15, pad=240:240:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`)
  .save(`./image/${id}.webp`)
  .on('end', () => {
    stream.destroy()
    spawn('webpmux', ['-set', 'exif', './image/p.exif', './image/' + id + '.webp', '-o', './image/' + id + '.webp'])
    .on('exit', () => {
      let mediaData = (fs.readFileSync('./image/' + id + '.webp', {
        encoding: 'base64'
      }))
      fs.unlink('./image/' + id + '.webp').then(() => {
        console.log('Succes delete sticker from server')
      }) 
      return resolve(mediaData)
    })
  })
  .on('error', () => console.log('error!'))
})

function randomName(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const download = async(uri,  filename, callback) =>{
  try{
    // await new Promise(resolve => {
    //   request(uri)
    //   .pipe(fs.createWriteStream(filename))
    //   .on('finish', resolve)
    //   });
    request.head(uri, function(){
      request(uri).on('error', function(err) { console.log(err) }).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  }catch(err){
    console.log(err)
  }
}
            /**
 * Convert Writable Stream to Buffer
 * @param {WritableStreamCallback} cb Callback with stream
 * @returns {Promise<Buffer>}
 */
function stream2Buffer(cb = noop) {
    return new Promise(resolve => {
        let write = new Writable()
        write.data = []
        write.write = function (chunk) {
            this.data.push(chunk)
        }
        write.on('finish', function () {
            resolve(Buffer.concat(this.data))
        })

        cb(write)
    })
}

/**
 * Convert Buffer to Readable Stream
 * @param {Buffer} buffer
 * @returns {ReadableStream}
 */
function buffer2Stream(buffer) {
    return new Readable({
        read() {
            this.push(buffer)
            this.push(null)
        }
    })
}

function baseURI(buffer = Buffer.from([]), metatype = 'text/plain') {
    return `data:${metatype};base64,${buffer.toString('base64')}`
}

            function clampFloat(value) {
                return value > 1 ? 1 : value < -1 ? -1 : value
            }
            function clamp(value, min, max) {
                return Math.min(Math.max(min, value), max)
            }
            function distordFX(value) {
                return value > 0 ? 1 : value < 0 ? -1 : 0
            }   

    function processSticker(input) {
    return new Promise((resolve, reject) => {
        if (typeof input == 'string' && /^data/.test(input)) input = Buffer.from(input.replace(/^data:.+;base64,/, ''))
        sharp(input)
            .toFormat('webp')
            .resize(512, 512, {
                fit: 'contain',
                background: {
                    r: 0,
                    g: 0,
                    b: 0,
                    alpha: 0
                }
            })
            .toBuffer()
            .then(resolve)
            .catch(reject)
    })
}

function base64_encode(file) {
                var bitmap = fs.readFileSync(file);
                return new Buffer.from(bitmap).toString('base64');
              }

        //AUTO VIEW
       iluser.sendSeen(chatId)

        if (isCmd && !isGroupMsg) {console.log(color('[EXEC]', 'yellow'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'turquoise'), color(`${command} [${args.length}]`), 'from', color(pushname))}
        if (isCmd && isGroupMsg) {console.log(color('[EXEC]', 'yellow'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'turquoise'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))}
        if (isPrf && !isGroupMsg) {
            await iluser.reply(message.from, `Hii ${pushname}, Perintah bot menggunakan awalan */*\nSilahkan cek perintah bot yang tersedia di ${prefix}menu`, message.id)
        }
        if (isBlocked && isCmd) return iluser.reply(message.from, mess.blockk, message.id)
        //if (isBanned && isCmd) return iluser.reply(message.from, mess.bann, message.id)
        if (isBanned && isCmd && !isGroupMsg) {console.log(color('[BANNED]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))}
        if (isBanned && isCmd && isGroupMsg) {console.log(color('[BANNED]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))}
        
        const sfx = fs.readdirSync('./media/audio/').map(item => {
            return item.replace('.mp3', '')
        })

       
            //         // Voice Note Keyboard
                if (isMuted(chatId) && !isBlocked && !isBanned && !isCmd) {
                try{
                    if (vnlist.includes(chats)) {
                        await iluser.sendPtt(message.from, `./media/audio/${chats}.mp3`, message.id)
                    }
                } catch (err){
                    return
                }
            } 

           if (isMuted(chatId) && !isCmd && !isGroupMsg && !isBanned && !isBlocked && !isPrf && isPremium && !isMedia && !isSticker) {
            iluser.simulateTyping(from, true)   
            let pesan = `${encodeURIComponent(message.body).replace(/\b(iluser|Iluser|Ayla|Simi|ayla)\b/g, 'simi')}`
            axios.get(`http://fdciabdul.tech/api/ayla/?pesan=${pesan}`)
            .then(({data}) => {              
                iluser.reply(message.from, `${data.jawab.replace(/\b(simi|ayla|aylaayla|simsimi)\b/ig, 'iluser')}`, message.id)
                console.log(`User: ${message.body} | jawab: ${data.jawab}`)
            }).catch(async (err) => {
                        iluser.reply(message.from, 'iluser tidak mengerti ucapanmu', message.id)
                    })
                iluser.simulateTyping(from, false)               
        } 
           if (isMuted(chatId) && !isCmd && !isGroupMsg && !isBanned && !isBlocked && !isPrf && !isPremium && !isMedia && !isSticker) {
            iluser.simulateTyping(from, true)             
            let pesan = `${encodeURIComponent(message.body).replace(/\b(iluser|Iluser|Ayla|Simi|ayla)\b/g, 'simi')}`
            axios.get(`http://fdciabdul.tech/api/ayla/?pesan=${pesan}`)
            .then(({data}) => {      
                iluser.reply(message.from, `${data.jawab.replace(/\b(simi|ayla|aylaayla|simsimi)\b/ig, 'iluser')}\n\nsubs youtube.com/iluser yah`, message.id)
                console.log(`User: ${message.body} | jawab: ${data.jawab}`)
            }).catch(async (err) => {
                        iluser.reply(message.from, 'iluser tidak mengerti ucapanmu', message.id)
                    })
                iluser.simulateTyping(from, false)               
        } 
           if (isMuted(chatId) && !isCmd && isGroupMsg && !isBanned && !isBlocked && !isPrf && isPremium && quotedMsg && quotedMsg.fromMe && !isMedia && !isSticker) {
            iluser.simulateTyping(from, true)             
            let pesan = `${encodeURIComponent(message.body).replace(/\b(iluser|Iluser|Ayla|Simi|ayla)\b/g, 'simi')}`
            axios.get(`http://fdciabdul.tech/api/ayla/?pesan=${pesan}`)
            .then(({data}) => {    
                iluser.reply(message.from, `${data.jawab.replace(/\b(simi|ayla|aylaayla|simsimi)\b/ig, 'iluser')}`, message.id)
                console.log(`User: ${message.body} | jawab: ${data.jawab}`)
            }).catch(async (err) => {
                iluser.reply(message.from, 'iluser tidak mengerti ucapanmu', message.id)
            })
            iluser.simulateTyping(from, false)               
        } 
           if (isMuted(chatId) && !isCmd && isGroupMsg && !isBanned && !isBlocked && !isPrf && !isPremium && quotedMsg && quotedMsg.fromMe && !isMedia && !isSticker) {
            iluser.simulateTyping(from, true)               
            let pesan = `${encodeURIComponent(message.body).replace(/\b(iluser|Iluser|Ayla|Simi|ayla)\b/g, 'simi')}`
            axios.get(`http://fdciabdul.tech/api/ayla/?pesan=${pesan}`)
            .then(({data}) => { 
                iluser.reply(message.from, `${data.jawab.replace(/\b(simi|ayla|aylaayla|simsimi)\b/ig, 'iluser')}\n\nsubs youtube.com/iluser yah`, message.id)
                console.log(`User: ${message.body} | jawab: ${data.jawab}`)
            }).catch(async (err) => {
                        iluser.reply(message.from, 'iluser tidak mengerti ucapanmu', message.id)
                    })
                iluser.simulateTyping(from, false)               
        } 

                if(body === prefix+'bot off' && isGroupMsg && !isBanned && !isBlocked && isMuted(chatId) == true){
                    if(isGroupMsg) {
                        if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        sleep(1000)
                        iluser.reply(message.from, `Bot telah dinonaktifkan pada grup ini\nKetik ${prefix}bot on untuk mengaktifkan`, message.id)
                        console.log(color('SUCCESS | bot off', 'olive'))
                    }else{
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        sleep(1000)
                        iluser.reply(message.from, `Bot telah dinonaktifkan pada grup ini\nKetik ${prefix}bot on untuk mengaktifkan`, message.id)
                        console.log(color('SUCCESS | bot off', 'olive'))
                    }
                }
                if(body === prefix+'bot on' && isGroupMsg && !isBanned && !isBlocked && isMuted(chatId) == false){
                    if(isGroupMsg) {
                        if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        sleep(1000)
                        iluser.reply(message.from, 'Bot telah di aktifkan pada grup ini', message.id)         
                        console.log(color('SUCCESS | bot on', 'olive'))
                    }else{
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        sleep(1000)
                        iluser.reply(message.from, 'Bot telah di aktifkan pada grup ini', message.id)                   
                        console.log(color('SUCCESS | bot on', 'olive'))
                    }
                }
                if (body === prefix+'unbanchat') {
                    if (!isOwner) return
                    if(setting.banChats === false) return
                    setting.banChats = false
                    banChats = false
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    iluser.reply('Global chat has been enabled!', message.id)
                }

        // Automate
        premium.expiredCheck(_premium)
        
        switch (true) {
            // case new RegExp(`\\b(${sfx.join("|")})\\b`).test(chats?.toLowerCase()): {
            //     const theSFX = chats?.toLowerCase().match(new RegExp(sfx.join("|")))
            //     const path = `./media/audio/${theSFX}.mp3`
            //     const _id = (quotedMsg != null) ? quotedMsgObj.id : id
            //     await iluser.sendPtt(from, path, _id).catch(e => { return printError(e) })
            //     break
            // }      
            case /^>/.test(chats): {
                if (!isOwner) return
                try {
                    let evaled = eval(`(async() => {
                            try {
                                ${chats.slice(2)}
                            } catch (e) {
                                console.log(e)
                                return sendText(e.toString())
                            }
                        })()`)
                    if (typeof evaled !== 'string') evaled = inspect(evaled)
                    sendText(`${evaled}`)
                } catch (err) {
                    console.log(err)
                    sendText(`${err}`)
                }
                break
            }

            case /^\$/.test(chats): {
                if (!isOwner) return
                exec(chats.slice(2), (err, stdout, stderr) => {
                    if (err) {
                        sendText(err)
                        console.error(err)
                    } else {
                        sendText(stdout + stderr)
                        console.log(stdout, stderr)
                    }
                })
                break  
            }
            default:
        }
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner || isPilot) {
        iluser.simulateTyping(chatId, false)
        switch(command) {

            case prefix+'ig':{
                const disable = await getDB.cek_disable(message.from, `${prefix}ig`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return
                if (args.length === 1) return iluser.reply(message.from, `Linknya mana?`, message.id)
                if (!args[1].includes('instagram.com')) return iluser.reply(message.from, `Url tidak bersumber dari instaagram`, message.id)
                const crot = body.slice(4)
                try{
                const RA = require("ra-api")
                const Url = crot
                RA.instagramDown(Url).then(async (respon) => {
                console.log(respon.result.data)
                for (var i = 0; i < respon.result.data.length; i++) {
                    await sendFFU(respon.result.data[i].url, "", `Download success!\n\n${mess.iklann}`);
                }       
                console.log('SUCCESS | download media from INSTAGRAM');
                limitAdd(serial)         
            }).catch((err) => printError(err))
            } catch(err){
                console.log('FAILDE | download media from INSTAGRAM');
                printError(err)
              };
            }
            break
            case prefix+'ig3':
               // if (!isOwner) return iluser.reply(from, 'guanakan ig2 dlu yah', id)
                try {
                  const disable = await getDB.cek_disable(message.from, `${prefix}ig`);
                  if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                  if(isReg(obj)) return
                  if (isLimit(serial)) return
                  const username = config.igusername;
                  const password = config.igpassword;
                  ig.state.generateDevice(username);
                  await ig.simulate.preLoginFlow();
                  await ig.account.login(username, password);
                  const link = message.body.slice(4);
                  const code = link.split('/')[4];
                  if (code.length > 19) {
                    iluser.reply(message.from,'Tidak bisa mengunduh media di akun terkunci/private account', message.id);
                    console.log('FAILED | because PRIVATE account INSTAGRAM');
                  }
                  else{
                      const mediaID = IgMediaID.urlSegmentToInstagramId(code);
                      const post = await ig.media.info(mediaID);
                      const media_type = post.items[0].media_type;
                      const user = post.items[0].user.username;
                      if (media_type == 8) {
                      const slide = post.items[0].carousel_media;
                      iluser.reply(message.from, 'From @'+user+'\nTerdeteksi ' + slide.length + ' media...', message.id)
                      for (var i = 0; i < slide.length; i++) {
                        var ricek = slide[i].media_type;
                        if(ricek == 2){
                          let rnd = randomName(30) + '.mp4';
                          var video = slide[i].video_versions[0].url;
                          try{
                            await download(video, './dbig/' + rnd, function(){
                            const a = base64_encode('./dbig/' + rnd);
                            var base64str = 'data:video/mp4'+";base64,"+a.toString()
                            iluser.sendFile(message.from,base64str,rnd, `${mess.iklann}`, id);
                          });
                          } catch(err){
                            console.log(err)
                          }
                        }else if (ricek == 1){
                          let rndi = randomName(30) + '.png';
                          var foto = slide[i].image_versions2.candidates[0].url;
                          try{
                            await download(foto, './dbig/' + rndi, function(){
                            const a = base64_encode('./dbig/' + rndi);
                            var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                            iluser.sendImage(message.from,base64str,rndi,`${mess.iklann}`, id);
                          });
                          } catch(err){
                            console.log(err)
                          };
                        }
                      }
                      console.log('SUCCESS | download media from INSTAGRAM');
                      limitAdd(serial)
                      }else if(media_type == 2){
                      var rnd = randomName(30) + '.mp4';
                      var video = post.items[0].video_versions[0].url;
                      var durasi = post.items[0].video_duration;
                      try{
                        await download(video, './dbig/' + rnd, function(){
                        const a = base64_encode('./dbig/' + rnd);
                        var base64str = 'data:video/mp4'+";base64,"+a.toString()
                        iluser.sendFile(message.from,base64str,rnd, `sukses download!\nFrom : @` + user + '\nDuration : ' + durasi + `s ${mess.iklan}`, id);
                        console.log('SUCCESS | download media from INSTAGRAM');
                        limitAdd(serial)
                      });
                      } catch(err){
                        console.log(err)
                      };
                      }else if(media_type == 1){
                      var rnd = randomName(30) + '.png';
                      var foto = post.items[0].image_versions2.candidates[0].url;
                      try{
                        await download(foto, './dbig/' + rnd, function(){
                        const a = base64_encode('./dbig/' + rnd);
                        var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                        iluser.sendImage(message.from,base64str,rnd, `sukses download!\nFrom : @` + user+`${mess.iklan}`, id);
                        console.log('SUCCESS | download media from INSTAGRAM');
                        limitAdd(serial)
                      });
                      } catch(err){
                        console.log(err)
                        printError(err)
                      };
                    }
                }
              }catch(err){
                  console.log(err)
                  printError(err)
              }
              break
              case prefix+'igs':{
                //  if (!isOwner) return iluser.reply(from, 'guanakan igstory dlu yah', id)
                  const disable = await getDB.cek_disable(message.from, `${prefix}igs`);
                  if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                  if(isReg(obj)) return
                  if (isLimit(serial)) return
                    const username = 'botwa_testing';
                    const password = 'Anjay123';
                    ig.state.generateDevice(username);
                    await ig.simulate.preLoginFlow();
                    await ig.account.login(username, password);
                    const input = message.body.slice(5);
                    const pecah = input.split(" ");
                    const userId = await ig.user.getIdByUsername(pecah[0]);
                    const acc = await ig.user.info(userId);
                    const ray = await ig.feed.userStory(userId).request();
                    const more = ray.reel.items;
                    if (acc.is_private == true) {
                      iluser.reply(message.from,'Tidak bisa mengunduh media di akun terkunci/private account', message.id);
                      console.log( 'FAILED | because PRIVATE account INSTAGRAM');
                    }else if (pecah[1] == undefined) {
                      if (more.length > 10) {
                          iluser.reply(message.from, `Instagram Story @${pecah[0]}\nMengirim 10 cerita..`, message.id)
                        for (var i = 0; i < 10; i++) {
                          var ricek = more[i].media_type;
                          if(ricek == 2){
                            let rnd = randomName(30) + '.mp4';
                            var video = more[i].video_versions[0].url;
                            await download(video, './dbig/' + rnd, function(){
                            const a = base64_encode('./dbig/' + rnd);
                            var base64str = 'data:video/mp4'+";base64,"+a.toString()
                            iluser.sendFile(message.from,base64str,rnd, `${mess.iklann}`, message.id);
                          });
                          }else if (ricek == 1){
                            let rndi = randomName(30) + '.png';
                            var foto = more[i].image_versions2.candidates[0].url;
                            await download(foto, './dbig/' + rndi, function(){
                            const a = base64_encode('./dbig/' + rndi);
                            var base64str = 'data:image/jpeg'+";base64,"+a.toString();
                            iluser.sendImage(message.from,base64str,rndi, `${mess.iklann}`, message.id);
                          });
                          }
                        }
                        console.log( `SUCCESS | download story instagram`)
                        limitAdd(serial)
                      }else{
                          iluser.reply(message.from, `Instagram Story @${pecah[0]}`, message.id)
                        for (var i = 0; i < more.length; i++) {
                          var ricek = more[i].media_type;
                          if(ricek == 2){
                            let rnd = randomName(30) + '.mp4';
                            var video = more[i].video_versions[0].url;
                            await download(video, './dbig/' + rnd, function(){
                            const a = base64_encode('./dbig/' + rnd);
                            var base64str = 'data:video/mp4'+";base64,"+a.toString();
                            iluser.sendFile(message.from,base64str,rnd, `${mess.iklann}`, message.id);
                          });
                          }else if (ricek == 1){
                            let rndi = randomName(30) + '.png';
                            var foto = more[i].image_versions2.candidates[0].url;
                            await download(foto, './dbig/' + rndi, function(){
                              const a = base64_encode('./dbig/' + rndi);
                              var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                              iluser.sendImage(message.from,base64str,rndi, `${mess.iklann}`, message.id);
                            });
                          }
                        }
                        console.log( `SUCCESS | download story instagram`)
                        limitAdd(serial)
                      }
                    }else if (pecah[1] != undefined) {
                      let ke = pecah[1] - 1;
                      const cek_media = ray.reel.items[ke].media_type;
                      if(cek_media == 2){
                        let rnd = randomName(30) + '.mp4';
                        var video = more[ke].video_versions[0].url;
                        await download(video, './dbig/' + rnd, function(){
                          const a = base64_encode('./dbig/' + rnd);
                          var base64str = 'data:video/mp4'+";base64,"+a.toString()
                          iluser.sendFile(message.from,base64str,rnd,`Berhasil mengunduh cerita dari @${pecah[0]} ke-${pecah[1]} ${mess.iklan}`, message.id);
                          console.log( `SUCCESS | download story instagram`)
                          limitAdd(serial)
                        });
                      }else if (cek_media == 1){
                        let rndi = randomName(30) + '.png';
                        var foto = more[ke].image_versions2.candidates[0].url;
                        await download(foto, './dbig/' + rndi, function(){
                          const a = base64_encode('./dbig/' + rndi);
                          var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                          iluser.sendImage(message.from,base64str,rndi, `Berhasil mengunduh cerita dari @${pecah[0]} ke-${pecah[1]}, ${mess.iklan}`, message.id);
                          console.log( `SUCCESS | download story instagram`)
                          limitAdd(serial)
                        });
                      }
                    }        
                  }
                  break
                  case prefix+'cari': {
                    const disable = await getDB.cek_disable(message.from, `${prefix}cari`);
                    if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                  const target = message.body.slice(6);
                  function rndnum(count){
                    const so = count - 1;
                    return Math.ceil(Math.random() * so);
                  }
                  const username = 'botwa_testing';
                  const password = 'Anjay123';
                  ig.state.generateDevice(username);
                  await ig.simulate.preLoginFlow();
                  await ig.account.login(username, password);
                  const data = await ig.user.search(target);
                  let user_list = data.users;
                  let hasil = [];
                  for (var i = 0; i < user_list.length; i++) {
                    hasil += `${user_list[i].username}\n`;
                  }
                  iluser.reply(message.from, `Mendapatkan ${data.num_results} data\n\n${hasil}`, message.id);
                  console.log('SUCCESS | Get username instagram');
                }
                break


            //EDUCATION MENU
        case prefix+'brainly':{ 
            if(isReg(obj)) return         
                const disable = await getDB.cek_disable(message.from, `${prefix}brainly`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                if (isLimit(serial)) return  
                if(args.length == 1) return await iluser.reply(message.from, `Soalnya mana?`, message.id)                
                else{
                    let pertanyaan = [];
                    let jawabanbrain = [];
                    const brainly = await BRAINLY.GetSoal(body.slice(9));
                    for (var i = 0; i < brainly.body.data.questionSearch.edges.length; i++) {
                        const jawaban = await BRAINLY.GetJawaban(brainly.body.data.questionSearch.edges[i].node.databaseId)
                        pertanyaan.push(h2p(jawaban.body.data.questionById.content));
                        jawabanbrain.push(h2p(jawaban.body.data.questionById.answers.nodes[0].content));
                    }  
                    for (var i = 0; i < pertanyaan.length; i++) {
                        iluser.reply(message.from, ` ${[i + 1]}.${pertanyaan[i]}\n\n${jawabanbrain[i]} ${mess.iklan}`, message.id);
                    }
                }
                console.log(color('SUCCESS | brainly', 'olive'))
                limitAdd(serial)   
            }
            break;
        case prefix+'nulis': {
                const disable = await getDB.cek_disable(message.from, `${prefix}nulis`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            if(args.length == 1) return await iluser.reply(message.from, "Teksnya mana cantik?", message.id)
            const getNulis = await gasNulis(body.slice(7)) 
            if(getNulis.status == true)
            {
                await iluser.sendImage(message.from, getNulis.base64, 'file.jpg', `${mess.iklann}`, message.id)
                console.log(color('SUCCESS | nulis', 'olive'))
                limitAdd(serial)
            }else{
                await iluser.reply(message.from, getNulis.reason, `gagal nulis.`)
                console.log(color('FAILED | nulis', 'red'))
            }
        }
        break
        case prefix+'nulis2':{
                const disable = await getDB.cek_disable(message.from, `${prefix}nulis2`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return         
            if (isLimit(serial)) return
        try{
            if(args.length == 1) return await iluser.reply(message.from, "teksnya mana cantik?", message.id)
            const getNulis2 = await gasNulisFolio(body.slice(8))
            if(getNulis2.status == true)
            {
                await iluser.sendImage(message.from, getNulis2.base64, 'file.jpg', `${mess.iklann}`, message.id)
                console.log(color('SUCCESS | nulis folio', 'olive'))
                limitAdd(serial)
            }else{
                await iluser.reply(message.from, getNulis2.reason, `gagal nulis.`, message.id)
                console.log(color('FAILED | nulis folio', 'red'))
            }
        }catch (err) {
                console.log(color('FAILED | nulis folio', 'red'))
                printError(err)
        }
        }
        break
        case prefix+'wiki':{
        try{
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            if (args.length === 1) return await iluser.reply(from, 'Mau cari apa tol?', id)
            const wikip = await `${body.slice(6)}`
			const wikis = await axios.get(`https://id.wikipedia.org/api/rest_v1/page/summary/${wikip}`)
            //console.log(wikis)
			await sendFFU(wikis.data.originalimage.source, `*${wikis.data.title}*\n\n${wikis.data.extract} ${mess.iklan}`)
            limitAdd(serial)
        }catch (err) {
            console.log(color('FAILED | wiki', 'red'))
            iluser.reply(from, `Data tidak ditemukan`, id)}
        }
            break
        case prefix+'tr':{
            const disable = await getDB.cek_disable(message.from, `${prefix}tr`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (!quotedMsg){
            if(args[1] == undefined || args[2] == undefined) return
            if(args.length >= 2){
                var codelang = args[1]
                var texta = body.slice(4+codelang.length);
                translatte(texta, {to: codelang}).then(res => {
                    iluser.reply(message.from,res.text, message.id);
                }).catch(() => {
                     iluser.sendText(message.from,`[ERROR] Teks tidak ada, atau kode bahasa ${codelang} tidak support\n~> *${prefix}bahasa* untuk melihat list kode bahasa`);
                });
            }
            }else{
            const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
            translate(quoteText, args[1])
                .then((result) => iluser.reply(message.from, result, message.id))
                .catch(() => iluser.sendText(message.from, 'Error!'))
                console.log(color('FAILED | tr', 'red'))
            }
        }
        break
        case prefix+'translate':{
            const disable = await getDB.cek_disable(message.from, `${prefix}translate`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (!quotedMsg){
            if(args[1] == undefined || args[2] == undefined) return
            if(args.length >= 2){
                var codelang = args[1]
                var texta = body.slice(11+codelang.length);
                translatte(texta, {to: codelang}).then(res => {
                    iluser.reply(message.from,res.text, message.id);
                }).catch(() => {
                     iluser.sendText(message.from,`[ERROR] Teks tidak ada, atau kode bahasa ${codelang} tidak support\n~> *${prefix}bahasa* untuk melihat list kode bahasa`);
                });
            }
            }else{
            const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
            translate(quoteText, args[1])
                .then((result) => iluser.reply(message.from, result, message.id))
                .catch(() => iluser.sendText(message.from, 'Error!'))
                //console.log(color('FAILED | kbbi', 'red'))
            }
        }
        break
        case prefix+'google':{
                const disable = await getDB.cek_disable(message.from, `${prefix}google`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                if (args === 1) return await iluser.reply(message.from, `Kata katanya mana?`, message.id)  
                const q = body.slice(8)
                const options = {
                method: 'GET',
                url: 'https://google-search3.p.rapidapi.com/api/v1/search/q='+ q +'&num=5',
                headers: {
                'x-rapidapi-key': '796b0b7803msh196643e1abe67abp155916jsne9d9ea9750b7',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com'
                }
                };
                axios.request(options).then(function (response) {
                //console.log(response.data)
                let googles = `Hasil Pencaharian ${q}`
                        for (let i = 0; i < response.data.results.length; i++) {
                            googles +=  `\n\nJudul: : ${response.data.results[i].title}\nDeskripsi: : ${response.data.results[i].description}\nURL: ${response.data.results[i].link}\n\n___________________________\n`
                        }
                iluser.reply(message.from, googles, message.id)
                console.log(color('SUCCESS | google search', 'olive'))          
                limitAdd(serial)
                }).catch(function (err) {
                    printError(err)
                    console.log(color('FAILED | Google search', 'red'))
                })
            };
            break
        case prefix+'totext':{
                const disable = await getDB.cek_disable(message.from, `${prefix}totext`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (isMedia && type === 'image') {
            try{
              await worker.load();
              await worker.loadLanguage('eng+ind');
              await worker.initialize('eng+ind');
              const mediaData = await decryptMedia(message, uaOverride);
              const { data: { text } } = await worker.recognize(`data:${message.mimetype};base64,${mediaData.toString('base64')}`);
              iluser.reply(message.from, `${text} ${mess.iklan}`, message.id);
              // await worker.terminate();
              console.log(color('SUCCESS | totext', 'olive'))
              limitAdd(serial)
            }catch(err){
              iluser.sendText(ownerNumber, `Error totext:\n${err}`)
              iluser.reply(message.from, `Kesalahan yang tidak diketahui, hubungi admin`, message.id)
              console.log(color('FAILED | totext', 'red'))
            }
            }else if (quotedMsg && quotedMsg.type == 'image') {
            try{
              await worker.load();
              await worker.loadLanguage('eng+ind');
              await worker.initialize('eng+ind');
              const mediaData = await decryptMedia(quotedMsg, uaOverride);
              const { data: { text } } = await worker.recognize(`data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`);
              iluser.reply(message.from, `${text} ${mess.iklan}`, message.id);
              // await worker.terminate();
              console.log(`SUCCESS | sending totext`)
              limitAdd(serial)
            }catch(err){
              console.log(color('FAILED | totext', 'red'))
              iluser.sendText(message.from, `Kesalahan yang tidak diketahui, hubungi admin`)
              iluser.sendText(ownerNumber, `Error totext:\n${err}`)
              }
            }
        }
            break
        case prefix+'hitung':{
                const disable = await getDB.cek_disable(message.from, `${prefix}hitung`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            try {
                if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}hitung 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`, message.id)
                const mtk = body.slice(7)
                if (typeof Math_js.evaluate(mtk) !== "number") {
                iluser.reply(message.from, `"${mtk}", bukan angka!\nContoh: ${prefix}hitung 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`, message.id)
            } else {
                iluser.reply(message.from, `*Kalkulator*\n\n${mtk} = ${Math_js.evaluate(mtk)}`, message.id)
                console.log('SUCCESS | hitung') 
                limitAdd(serial)
            }
            } catch (err) {
                iluser.reply(message.from, `Periksa kembali, karakter mengandung simbol yang ilegal!`, message.id)
            }
        }
        break

        //STICKER CREATOR 
        case prf+'sticker':
        case prf+'stiker':
        case prf+'sk':
        case prf+'sgif':
        case prf+'sgif2':
        case prf+'stickergif':
        case prf+'stikergif':
        case prf+'setiker':
        case prefix+'sticker':
        case prefix+'stiker':
        case prefix+'sk':
        case prefix+'sgif':
        case prefix+'sgif2':
        case prefix+'stickergif':
        case prefix+'stikergif':
        case prefix+'setiker':{
                const disable = await getDB.cek_disable(message.from, `${prefix}stiker`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
        try{
            const a = "By: iluser_BOT"
            const b = "@il.userr"
            await createExif(a,b)
            if (isMedia && mimetype == 'image/jpeg') {
              decryptMedia(message).then(mediaData => {
                sharp(mediaData).resize({
                  width: 512,
                  height: 512,
                  fit: sharp.fit.contain,
                  background: {
                    r: 0,
                    g: 0,
                    b: 0,
                    alpha: 0
                  }
                }).webp().toBuffer().then(buffer => {
                  modifExif(buffer, id, async (res) => {
                    mediaData = res.toString('base64')
                    await iluser.sendRawWebpAsSticker(message.from, mediaData, message.id)
                    //await iluser.reply(message.from, `${mess.iklann}`, message.id)
                  })
                })
              })
            } else if (quotedMsg && quotedMsgObj.mimetype == 'image/jpeg') {
              decryptMedia(quotedMsg).then(mediaData => {
                sharp(mediaData).resize({
                  width: 512,
                  height: 512,
                  fit: sharp.fit.contain,
                  background: {
                    r: 0,
                    g: 0,
                    b: 0,
                    alpha: 0
                  }
                }).webp().toBuffer().then(buffer => {
                  modifExif(buffer, id, async (res) => {
                    mediaData = res.toString('base64')
                    await iluser.sendRawWebpAsSticker(message.from, mediaData, message.id)
                    //await iluser.reply(message.from, `${mess.iklann}`, message.id)
                  })
                })
              })
            } else if (isMedia && mimetype == 'image/gif') {
              const mediaData = await decryptMedia(message)
              if (Buffer.byteLength(mediaData) >= 6186598.4) return iluser.reply(message.from, `sizenya terlalu gede sayang, dd gakuat :( max 5,9mb`, message.id)
              modifWebp(id, mediaData).then(res => {
                iluser.sendRawWebpAsSticker(message.from, res.toString('base64'), true).catch(() => iluser.reply(message.from, 'Gagal konversi!\n\nPerpendek durasi atau kurangi resolusi video.', message.id))
              })
            } else if (quotedMsg && quotedMsgObj.mimetype == 'image/gif') {
              const mediaData = await decryptMedia(quotedMsg)
              if (Buffer.byteLength(mediaData) >= 6186598.4) return iluser.reply(message.from, `sizenya terlalu gede sayang, dd gakuat :( max 5,9mb`, message.id)
              modifWebp(id, mediaData).then(res => {
                iluser.sendRawWebpAsSticker(message.from, res.toString('base64'), true).catch(() => iluser.reply(message.from, 'Gagal konversi!\n\nPerpendek durasi atau kurangi resolusi video.', message.id))
              })
            } else if (isMedia && mimetype == 'video/mp4') {
              const mediaData = await decryptMedia(message)
              if (Buffer.byteLength(mediaData) >= 6186598.4) return iluser.reply(message.from, `sizenya terlalu gede sayang, dd gakuat :( max 5,9mb`, message.id)
              modifWebp(id, mediaData).then(res => {
                iluser.sendRawWebpAsSticker(message.from, res.toString('base64'), true).catch(() => iluser.reply(message.from, 'Gagal konversi!\n\nPerpendek durasi atau kurangi resolusi video.', message.id))
              })
            } else if (quotedMsg && quotedMsgObj.mimetype == 'video/mp4') {
              const mediaData = await decryptMedia(quotedMsg)
              if (Buffer.byteLength(mediaData) >= 6186598.4) return iluser.reply(message.from, `sizenya terlalu gede sayang, dd gakuat :( max 5,9mb`, message.id)
              modifWebp(id, mediaData).then(res => {
                iluser.sendRawWebpAsSticker(message.from, res.toString('base64'), true).catch(() => iluser.reply(message.from, 'Gagal konversi!\n\nPerpendek durasi atau kurangi resolusi video.', message.id))
              })
            console.log(color('SUCCESS | sending sticker', 'olive'))
            //iluser.reply(message.from, `${mess.iklann}`, message.id)
            }else {
                await iluser.reply(message.from, `Kirim atau tag media yang akan dijadikan stiker dong tol!`, message.id)
            }
        }catch (err) {
            //throw new Error(error.message)
            console.log(color('FAILED | sticker maker', 'red'))
            printError(err)
            }
        }
        break
        // case prefix+'tess':{
        //     if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
        //     let packname1 = q.split('|')[0] ? q.split('|')[0] : q
        //     let author1 = q.split('|')[1] ? q.split('|')[1] : ''
        //     if (isImage || isQuotedImage) {
        //         const Media = !isImage && (isQuotedImage || isQuotedSticker) ? quotedMsg : message
        //         exif.create(packname1, author1, `stickwm_${sender}`)
        //         ffmpeg(`${media}`)
        //                 .input(media)
        //                 .on('start', function (cmd) {
        //                     console.log(`Started : ${cmd}`)
        //                 })
        //                 .on('error', function (err) {
        //                     console.log(`Error : ${err}`)
        //                     fs.unlinkSync(media)
        //                     reply(mess.error.api)
        //                 })
        //                 .on('end', function () {
        //                     console.log('Finish')
        //                     execc(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
        //                         if (error) return reply(mess.error.api)
        //                         xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
        //                         fs.unlinkSync(media)	
        //                         fs.unlinkSync(`./sticker/${sender}.webp`)	
        //                         fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
        //                     })
        //                 })
        //                 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
        //                 .toFormat('webp')
        //                 .save(`./sticker/${sender}.webp`)
        //     } else if ((isMedia || isQuotedVideo || isQuotedFile)) {
        //         //iluser.reply(message.from, mess.wait, message.id)
        //         const encryptMedia = isQuotedVideo || isQuotedFile ? quotedMsg : message
        //         const _mimetype = isQuotedVideo || isQuotedFile ? quotedMsg.mimetype : mimetype
        //         console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
        //         const media = await decryptMedia(encryptMedia)
        //         exif.create(packname1, author1, `stickwm_${sender}`)
        //         // reply(mess.wait)
        //             await ffmpeg(`${media}`)
        //                 .inputFormat(media.split('.')[4])
        //                 .on('start', function (cmd) {
        //                     console.log(`Started : ${cmd}`)
        //                 })
        //                 .on('error', function (err) {
        //                     console.log(`Error : ${err}`)
        //                     fs.unlinkSync(media)
        //                     let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
        //                     reply(mess.error.api)
        //                 })
        //                 .on('end', function () {
        //                     console.log('Finish')
        //                     execc(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
        //                         if (error) return reply(mess.error.api)
        //                         xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
        //                         fs.unlinkSync(media)
        //                         fs.unlinkSync(`./sticker/${sender}.webp`)
        //                         fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
        //                     })
        //                 })
        //                 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
        //                 .toFormat('webp')
        //                 .save(`./sticker/${sender}.webp`)
        //     } else if (isQuotedSticker) {
        //         let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
        //         let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
        //         exif.create(packname1, author1, `takestick_${sender}`)
        //         execc(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
        //             if (error) return reply(mess.error.api)
        //             xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
        //             fs.unlinkSync(media)
        //             fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
        //         })
        //     }else {
        //         reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
        //     }
        // }
        //     break
        case prefix+'skbkp':{
            if (!isOwner) return iluser.reply(from, 'Hayooo mau apa lo', id)
            const Pornsearch = require('pornsearch');
            const Searcher = new Pornsearch(`${body.slice(7)}`);
            Searcher.gifs()
                .then(gifs => {
                    console.log(gifs)
                    iluser.sendStickerfromUrl(from, `${gifs[2].url}`, { method: 'get' }, {author:'t.me/iluser_BOT', pack:'By: iluser_BOT', keepScale: true })                    
                });
        }
        break
        case prefix+'sfire':{
                const disable = await getDB.cek_disable(message.from, `${prefix}sfire`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            //if (!isOwner) return iluser.reply(message.from, `Di tutup todd`, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (isMedia && type === 'image') {
                try{
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                //const imgnya = await stickerburn(getUrli)                
                const spiree= await axios.get(`http://docs-jojo.herokuapp.com/api/burning_fire?image_url=${getUrli}`)
                await iluser.sendStickerfromUrl(message.from, spiree.data.result, { method: 'get' }, {author:'t.me/iluser_BOT', pack:'By: iluser_BOT', keepScale: true })
                console.log(color('SUCCESS | sending sticker fire', 'olive'))
                limitAdd(serial)
            }catch(err) {
                await iluser.reply(message.from, 'Gagal membuat.', message.id)
            } 
            } else if (quotedMsg && quotedMsg.type == 'image') {
                try{
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                //const imgnya = await stickerburn(getUrli)
                const spiree = await axios.get(`http://docs-jojo.herokuapp.com/api/burning_fire?image_url=${getUrli}`)
                await iluser.sendStickerfromUrl(message.from, spiree.data.result, { method: 'get' }, {author:'t.me/iluser_BOT', pack:'By: iluser_BOT', keepScale: true })
              //  iluser.reply(message.from, `${mess.iklann}`, message.id)
                console.log(color('SUCCESS | sending sticker fire', 'olive'))
                limitAdd(serial)
            }catch(err) {
                printError(err)
            } 
            } else {
                await iluser.reply(message.from, `Format Salah\n\n⚠️ Kirim/balas gambar dengan ${prefix}sfire`, message.id)
            }
        }
            break
        case prefix+'ttp':{
                const disable = await getDB.cek_disable(message.from, `${prefix}ttp`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                try
                {
                    const string = body.toLowerCase().includes('.ttp') ? body.slice(5) : body.slice(5)
                    if(args)
                    {
                        if(quotedMsgObj == null)
                        {
                            const gasMake = await getStickerMaker(string)
                            if(gasMake.status == true)
                            {
                                try{
                                    await iluser.sendImageAsSticker(message.from, gasMake.base64, {author:'@il.userr', pack:'By: iluserBOT'})
                                    //iluser.reply(message.from, `${mess.iklann}`, message.id)
                                    console.log(color('SUCCESS | sending text to picture', 'olive'))
                                    limitAdd(serial)
                                }catch(err) {
                                    await iluser.reply(message.from, 'Gagal membuat.', message.id)
                                } 
                            }else{
                                await iluser.reply(message.from, gasMake.reason, message.id)
                            }
                        }else if(quotedMsgObj != null){
                            const gasMake = await getStickerMaker(quotedMsgObj.body)
                            if(gasMake.status == true)
                            {
                                try{
                                    await iluser.sendImageAsSticker(message.from, gasMake.base64, {author:'@il.userr', pack:'By: iluserBOT'})
                                    //iluser.reply(message.from, `${mess.iklann}`, message.id)
                                    console.log(color('SUCCESS | sending text to picture', 'olive'))
                                    limitAdd(serial)
                                }catch(err) {
                                    await iluser.reply(message.from, 'Gagal membuat.', message.id)
                                } 
                            }else{
                                await iluser.reply(message.from, gasMake.reason, message.id)
                            }
                        }
                       
                    }else{
                        await iluser.reply(message.from, 'Tidak boleh kosong.', message.id)
                    }
                }catch(error)
                {
                    console.log(error)
                }
            }
            break;
        case prefix+'attp':{
                const disable = await getDB.cek_disable(message.from, `${prefix}attp`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            const textattp = body.slice(6)
            const resultattp = await axios.get(`https://api.xteam.xyz/attp?text=${encodeURIComponent(textattp)}`)
            let stik = resultattp.data.result
            iluser.sendRawWebpAsSticker(message.from, stik, true, {author:'t.me/iluser_BOT', pack:'By: iluser_BOT WhatsApp'})
            limitAdd(serial)
        }
        break
        case prefix+'memesticker':
        case prefix+'memestiker':
        try{  
            const disable = await getDB.cek_disable(message.from, `${prefix}memestiker`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return        
                if (isLimit(serial)) return
            
                limitAdd(serial)  
                        if (args.length === 1) return iluser.reply(message.from, 'Silahkan balas gambar yang dikirim dengan /memestiker |tex ataas|text bawah', message.id)              
                        if(isLimit(serial)) return
                            if ((isMedia || isQuotedImage) && args.length >= 2) {
                                argz = body.trim().split('|')
                                const top = argz[1]
                                const bott = argz[2]
                                const packnames = 'By: iluser_BOT WhatsApp'
                                const authors = 't.me/iluser_BOT'
                                const encryptMedia = isQuotedImage ? quotedMsg : message
                                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                                const getUrl = await uploadImages(mediaData, false)
                                const ImageBase64 = await meme.custom(getUrl, top, bott)
                                //iluser.sendImageAsSticker(message.from, ImageBase64)
                                iluser.sendImageAsSticker(message.from, ImageBase64, { author: `${authors}`, pack: `${packnames}`, keepScale: true })
                                    .then(() => {
                                  //      iluser.reply(message.from, `${mess.iklann}`, message.id)
                                          console.log(color('SUCCESS | memesticker', 'olive'))
                                          limitAdd(serial)
                                    })
                                    .catch(() => {
                                        iluser.reply(message.from, 'Ada yang error!', message.id)
                                    })
                            } else {
                                await iluser.reply(message.from, `Kirim atau balas gambarnya tolol\n${prefix}memestiker |tex ataas|text bawah`, message.id)
                            }
                        }catch (err) {
                            await iluser.reply(message.from, 'Gagal tod.\nPeriksa format penulisan dengan benar!', message.id)
                            console.log(color('FAILED | memesticker', 'red'))
                        }
                        break 

        case prefix+'emostik':{
                const disable = await getDB.cek_disable(message.from, `${prefix}emostik`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return
                asu = body.slice(9)
                emoji.get(asu)
                .then(emoji => {
        for (let i = 0; i < emoji.images.length; i++) { 
        iluser.sendStickerfromUrl(from, `${emoji.images[i].url}`, { method: 'get' }, {author:'@il.userr', pack:'By: iluserBOT', keepScale: true })
         }
         console.log(color('SUCCESS | Emoji to sticker', 'olive'))
         limitAdd(serial)
        })
            }
            break

        case prefix+'take':{
                const disable = await getDB.cek_disable(message.from, `${prefix}take`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                    if (isLimit(serial)) return 
                    if (!isPremium) return iluser.reply(message.from, mess.nopremium, message.id)
                    limitAdd(serial)
                if (quotedMsg && quotedMsg.type == 'sticker') {
                    const mediaDataTake = await decryptMedia(quotedMsg, uaOverride)
                    const take = body.slice(6)
                    const packname = take.split('|')[0]
                    const author = take.split('|')[1]
                    takestick.create(packname, author, `takestick_${sender.id}`)
                    webp.buffer2webpbuffer(mediaDataTake, 'jpg', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize(512, 512)
                                .toFile(`./temp/takestickstage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await execc(`webpmux -set exif ./temp/takestick.exif ./temp/takestickstage_${sender.id}.webp -o ./temp/takestick_${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/takestick_${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/takestick_${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await iluser.sendRawWebpAsSticker(message.from, base64)
                                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                        fs.unlinkSync(`./temp/takestick_${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/takestickstage_${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/takestick.exif`)
                                    }
                                })
                        })
                } else {
                    await iluser.reply(message.from, `wrong format!`, message.id)
                }
            }
            break
       case prefix+'takevid':{
                    const disable = await getDB.cek_disable(message.from, `${prefix}takevid`);
                    if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                    if(isReg(obj)) return
                    if (isLimit(serial)) return
                    if (!isPremium) return iluser.reply(message.from, mess.nopremium, message.id)
                    if (quotedMsg && quotedMsg.type == 'sticker') {
                        argz = body.trim().split('|')
                        const mediaDataTake = await decryptMedia(quotedMsg)
                        await iluser.reply(message.from, `wait`, message.id)
                        const packnames = argz[1]
                        const authors = argz[2]
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaDataTake.toString('base64')}`
                        await iluser.sendImageAsSticker(message.from, imageBase64, { author: `${authors}`, pack: `${packnames}` })
                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                    } else {
                        await iluser.reply(message.from, `Format salah, Harap reply sticker dengan caption ${prefix}take |pack|author`, message.id)
                    }
                }
                break

        //TRACKING MENU
        case prefix+'resi':
        try{
            const disable = await getDB.cek_disable(message.from, `${prefix}resi`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
        if(isReg(obj)) return       
        if(isLimit(serial)) return
        const kurirs = ['jne', 'pos', 'tiki', 'wahana', 'jnt', 'rpx', 'sap', 'sicepat', 'pcp', 'jet', 'dse', 'first', 'ninja', 'lion', 'idl', 'rex']
        if (!kurirs.includes(args[1])) return iluser.reply(message.from, `Maaf, jenis ekspedisi pengiriman tidak didukung layanan ini hanya mendukung ekspedisi pengiriman ${kurirs.join(', ')} Tolong periksa kembali.`, message.id)
        console.log('Memeriksa No Resi', args[1], 'dengan ekspedisi', args[1])
        cekResi(args[1], args[2])
        .then(result => { 
            iluser.reply(message.from, result, message.id)
            console.log(color('SUCCESS | sending resi', 'olive'))
            limitAdd(serial)
            }).catch(async (err) => {
                    await iluser.sendText(ownerNumber, `Error resi: ${err}`)
                    await iluser.reply(message.from, 'Error!', message.id)
                    console.log(color('FAILED | sending resi', 'red'))
                })
            }catch (err) {
                await iluser.reply(message.from, 'Terjadi kesalahan', message.id)
                console.log(color('FAILED | resi', 'red'))
            }
            break
        case prefix+'checkip':{
                const disable = await getDB.cek_disable(message.from, `${prefix}checkip`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}checkip 182.0.144.145`, message.id)
            const cekip = body.slice(9)
            try {
            const cekip2 = await axios.get('https://mnazria.herokuapp.com/api/check?ip=' + cekip)
            const { city, continent_name, country_name, ip, latitude, location, longitude, region_name } = cekip2.data
            const cekip3 = `*User Ditemukan!*
• *Kota:* ${city}
• *Benua:* ${continent_name}
• *Negara:* ${country_name}
• *Ip Address:* ${ip}
• *Garis Lintang:* ${latitude}
• *Kode Telepon:* +${location.calling_code}
• *Ibu Kota:* +${location.capital}
• *Bahasa:* +${location.languages[0].name}
• *Garis Bujur:* ${longitude}
• *Wilayah:* +${region_name} ${mess.iklan}`
            iluser.sendImage(message.from, location.country_flag, `${city}`, cekip3)
            console.log('SUCCESS | checkip')
            limitAdd(serial)
            } catch (err) {
             console.log('FAILED | checkip')
             await iluser.reply(message.from, 'Terjadi kesalahan', message.id)
             iluser.sendText(ownerNumber, 'Error Check IP: '+ err)
           }
       }
          break
        case prefix+'checkip2':
            try{
                const disable = await getDB.cek_disable(message.from, `${prefix}checkip2`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                            if (args.length == 1) return iluser.reply(message.from, `Contoh : ${prefix}iplocation 180.242.215.107`, message.id)
                            axios.get(`https://ipapi.co/${body.slice(10)}/json/`)
                            .then(async(res) => {
                                const addr = `• *Ip :* ${res.data.ip}\n• *Ip Version :* ${res.data.version}\n• *Negara :* ${res.data.country_name}\n• *Kode Negara :* ${res.data.country_code}\n• *Ibu Kota :* ${res.data.country_capital}\n• *Wilayah :* ${res.data.region}\n• *Kode Wilayah :* ${res.data.region_code}\n• *Postal :* ${res.data.postal}\n• *Latitude :* ${res.data.latitude}\n• *Longitude :* ${res.data.longitude}\n• *Timezone :* ${res.data.timezone}\n• *Utc Offset :* ${res.data.utc_offset}\n• *Kode Panggilan Negara :* ${res.data.country_calling_code}\n• *Mata Uang :* ${res.data.currency_name}\n• *Kode Mata Uang :* ${res.data.currency}\n• *Bahasa :* ${res.data.languages}\n• *Jumlah Wilayah :* ${res.data.country_area}\n• *Populasi Negara :* ${res.data.country_population}\n• *ASN :* ${res.data.asn}\n• *Provider :* ${res.data.org}`
                                iluser.reply(message.from, addr, message.id)
                                console.log(color('SUCCESS | checkip2', 'olive'))
                                limitAdd(serial)
                            })
                        }catch (err) {
                            await iluser.reply(message.from, 'Terjadi Kesalahan', message.id)
                            console.log(color('FAILED | checkip2', 'red'))
                            iluser.sendText(ownerNumber, `Checkip2 : ${err}`)
                        }
                        break
        case prefix+'ceklokasi':
            try{
                const disable = await getDB.cek_disable(message.from, `${prefix}ceklokasi`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return         
            if (isLimit(serial)) return
        if (!quotedMsg && !quotedMsg.type == 'location') return iluser.reply(message.from, `Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ${prefix}ceklokasi`, message.id)
            console.log(`Request Status Zona Penyebaran Covid-19 (${quotedMsg}, ${quotedMsg}).`)
            const zoneStatus = await getLocationData(quotedMsg.lat, quotedMsg.lng)
            if (zoneStatus.kode !== 200) iluser.sendText(message.from, 'Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.')
            let datax = ''
            for (let i = 0; i < zoneStatus.data.length; i++) {
                const { zone, region } = zoneStatus.data[i]
                const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
                datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
            }
            const texto = `*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan dari lokasi yang anda kirim adalah *${zoneStatus.status}* ${zoneStatus.optional}\n\nInformasi lokasi terdampak disekitar anda:\n${datax}`
            iluser.reply(message.from, texto, message.id)
            console.log(color('SUCCESS | ceklokasi', 'olive'))
            limitAdd(serial)
        }catch (err) {
            await iluser.reply(message.from, 'Terjadi Kesalahan.', message.id)
            await iluser.sendText(ownerNumber, `Ceklokasi : ${err}`)
            console.log(color('FAILED | ceklokasi', 'red'))
        }
            break  

        //RELIGI MENU 
        case prefix+'jadwalshalat':
            try {
                if (args.length === 1) {
                    const url = `https://zerachiuw.herokuapp.com/api/jadwal-sholat`
                    const response = await axios.get(url)
    
                    let result = '*List lokasi* \n'
                    result += response.data['kota'].join('\n')
                    await iluser.reply(message.from, result, id)
                } else {
                    const location = args[1]
                    const url = `https://zerachiuw.herokuapp.com/api/jadwal-sholat?kota=${location}`
    
                    const response = await axios.get(url)
                    const json = response.data
                    let result = `*Tanggal hari ini ->* ${json["tanggal"]} \n`
                    result += `*Imsyak*\t: ${json["imsyak"]}\n`
                    result += `*Shubuh*\t: ${json["shubuh"]}\n`
                    result += `*Terbit*\t: ${json["terbit"]}\n`
                    result += `*Dhuha*\t: ${json["dhuha"]}\n`
                    result += `*Dzuhur*\t: ${json["dzuhur"]}\n`
                    result += `*Ashr*\t: ${json["ashr"]}\n`
                    result += `*Magrib*\t: ${json["magrib"]}\n`
                    result += `*Isya*\t\t: ${json["isya"]}`
    
                    await iluser.reply(message.from, result, id)
                }
            } catch (err) {
                await iluser.reply(message.from, err, message.id)
            }
            break
        case prefix+'quran':
            try{
                const disable = await getDB.cek_disable(message.from, `${prefix}quran`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah Surah Quran kamu dengan cara ketik perintah :\n*${prefix}quran* [ Urutan Surat ]\nContoh :\n*${prefix}quran 1*`, message.id)
            const qura = `https://api.vhtear.com/quran?no=${args[1]}&apikey=${vhtearkey}`
            const quraan = await axios.get(qura)
            const quraann = quraan.data
            let hasqu = `*AL-QURAN*\n\n*Surah : ${quraann.result.surah}*\n*Quran* : ${quraann.result.quran}*`
            await iluser.reply(message.from, `${hasqu} ${mess.iklan}`, message.id).catch(() => iluser.reply(message.from, `*Terdapat kesalahan saat mencari surat ${args[1]}*`, message.id))
        }catch (err) {
            await iluser.reply(message.from, 'Terjadi kesalahan.', message.id)
            await iluser.sendText(ownerNumber, `Quran : ${err}`)
            console.log(color('FAILED | Quran', 'red'))
        }
        break
        case prefix+'listsurah':{
                const disable = await getDB.cek_disable(message.from, `${prefix}listsurah`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            try {
                axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                .then((response) => {
                    let hehex = '*DAFTAR SURAH*\n\n___________________________\n'
                    let nmr = 1
                    for (let i = 0; i < response.data.data.length; i++) {
                        hehex += nmr + '. ' +  monospace(response.data.data[i].name.transliteration.id.toLowerCase()) + '\n'
                        nmr++
                            }
                        hehex += '___________________________'
                    iluser.reply(message.from, hehex, message.id)
                })
            } catch(err) {
                iluser.reply(message.from, err, message.id)
            }
        }
            break
        case prefix+'infosurah':
            try{
                const disable = await getDB.cek_disable(message.from, `${prefix}infosurah`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length == 1) return iluser.reply(message.from, `Contoh : *${prefix}infosurah al-fatihah*`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post) {
                if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                    return true;
                });
                try {
                    var pesan = "*INFORMASI SURAH*\n\n___________________________\n\n"
                    pesan = pesan + "• *Nama* : "+ data[idx].name.transliteration.id + "\n" + "• *Asma* : " +data[idx].name.short+"\n"+"• *Arti* : "+data[idx].name.translation.id+"\n"+"• *Jumlah ayat* : "+data[idx].numberOfVerses+"\n"+"• *Nomor surah* : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"• *Keterangan* : "+data[idx].tafsir.id
                    pesan += '\n\n___________________________'
                    iluser.reply(message.from, pesan, message.id)
                    console.log(color('SUCCESS | infosurah', 'olive'))
                    limitAdd(serial)
                }catch{
                    iluser.reply(message.from, 'Data tidak ditemukan, atau nama surah salah', message.id)
                }
            }catch (err) {
                await iluser.reply(message.from, 'Terjadi kesalahan.', message.id)
                await iluser.sendText(ownerNumber, `Info surah : ${err}`)
                console.log(color('FAILED | Info surah', 'red'))
            }
            break
        case prefix+'tafsir':
            try{
                const disable = await getDB.cek_disable(message.from, `${prefix}tafsir`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length == 1) return iluser.reply(message.from, `Contoh : *${prefix}tafsir al-fatihah 2*`, message.id)
                var responsh = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                var {data} = responsh.data
                var idx = data.findIndex(function(post) {
                if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                    return true;
                });
            try{
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                var responsih = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[2])
                    var {data} = responsih.data
                    pesan = ""
                    pesan = pesan + "*TAFSIR*\n\nTafsir Q.S. "+data.surah.name.transliteration.id+":"+args[2]+"\n\n"
                    pesan = pesan + data.text.arab + "\n\n"
                    pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
                    pesan += '\n\n___________________________'
                    iluser.reply(message.from, `${pesan} ${mess.iklan}`, message.id)
                    console.log(color('SUCCESS | sending tafsir', 'olive'))
                    limitAdd(serial)
                }
            }catch{
                iluser.reply(message.from, 'Data tidak ditemukan, mungkin nama surah/ayat salah', message.id)
            }
        }catch (err) {
            await iluser.reply(message.from, 'Terjadi kesalahan.', message.id)
            await iluser.sendText(ownerNumber, `Tafsir : ${err}`)
            console.log(color('FAILED | Tafsir', 'red'))
        }
            break
        
        //DOWNLOADER MENU
        case prefix+'food':{
            const disable = await getDB.cek_disable(message.from, `${prefix}asupan`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
        if(isReg(obj)) return
        if (isLimit(serial)) return
        //if (!isOwner) return iluser.reply(message.from, 'Fitur ini sedang dalam pengembangan', message.id)
        let food_hastag = ('makanan,mukbang,masakan,seafood,ngiler').split(',')
        if(args.length == 1)            
        try {
            const katakunci = getRandomText(food_hastag)
            const { collector, headers } = await TikTokScraper.hashtag(katakunci, {
              number: 1
            });
            if(collector.length == 0)
                {
                    await iluser.reply(message.from, `Tidak ditemukan video pada user *${katakunci}*` , message.id)
                    console.log(`FAILED | send asupan, user/video not found ${katakunci}`)
                }else{
                    const { videoUrl, webVideoUrl } = getRandomText(collector) 
                    await iluser.sendFileFromUrl(message.from, videoUrl, 'file.mp4', `Hii ${pushname} \nTarget!: #${katakunci}\nUrl: ${webVideoUrl} ${mess.iklan}`, false, { headers: headers }, message.id)
                    limitAdd(serial)
                }
            }catch (error) {
            console.log(error);
          }
        }
    break
        case prefix+'asupan':{
                const disable = await getDB.cek_disable(message.from, `${prefix}asupan`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            //if (!isOwner) return iluser.reply(message.from, 'Fitur ini sedang dalam pengembangan', message.id)
            if(args.length == 1)            
            {
                const rand = getRandomText(tiktok_user)
                //const { collector } = await TikTokScraper.user(rand, {number: 0 }); , sessionList: ['sid_tt=96c19fdafeba49a399cf93e52d7ba51d;']  
                const { collector, headers } = await TikTokScraper.user(rand, {number: 0 });
                if(collector.length == 0)
                {
                    await iluser.reply(message.from, `Tidak ditemukan video pada user *${rand}*` , message.id)
                    console.log(`FAILED | send asupan, user/video not found ${rand}`)
                }else{
                    const { videoUrl, webVideoUrl } = getRandomText(collector) 
                    await iluser.sendFileFromUrl(message.from, videoUrl, 'file.mp4', `Hii ${pushname} \nTarget!: @${rand}\nUrl: ${webVideoUrl} ${mess.iklan}`, false, { headers: headers }, message.id)
                    limitAdd(serial)
                }
            }else if(args.length == 2)
            {
                const rand = args[1]
                const { collector, headers } = await TikTokScraper.user(rand, {number: 0 });
                if(collector.length == 0)
                {
                    await iluser.reply(message.from, "user tidak ditemukan atau tidak ditemukan video.", message.id)
                    console.log(`FAILED | send asupan, user/video not found ${rand}`)
                }else{
                    const { videoUrl, webVideoUrl } = getRandomText(collector)
                    await iluser.sendFileFromUrl(message.from, videoUrl, 'file.mp4', `Hii ${pushname} \nTarget!: @${rand}\nUrl: ${webVideoUrl} ${mess.iklan}`, false, { headers: headers }, message.id)
                    limitAdd(serial)
                }
            }
        }
        break
        //https://www.npmjs.com/package/textmaker-thiccy
        case prefix+'wkwk':{
            let crot = await ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
            await download(crot, './dbig/' + rnd, function(){
                const a = base64_encode('./dbig/' + rnd);
                var base64str = 'data:video/mp4'+";base64,"+a.toString()
                iluser.sendFile(message.from,base64str,rnd, `${mess.iklann}`, id);
              });
        }
        break
        case prefix+'yt':{
            const disable = await getDB.cek_disable(message.from, `${prefix}yt`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Linknya mana?`)
            const hehe = body.slice(4)
            let isLinn = hehe.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinn) return iluser.reply(message.from, `${hehe} Bukan link video dari YouTube`, message.id)
			const ytres = await ytsearch(`${hehe}`)
			try {
				await youtubedl(`https://www.youtube.com/watch?v=${ytres.all[0].videoId}`, 
                { 
                    noWarnings: true, 
                    noCallHome: true, 
                    noCheckCertificate: true, 
                    preferFreeFormats: true, 
                    youtubeSkipDashManifest: true, 
                    referer: `https://www.youtube.com/watch?v=${ytres.all[0].videoId}`, 
                    getUrl: true, x: true, format: 'mp4',  
                }).then(async (video) => { 
                    const durasi = ytres.all[0].seconds
                    if (durasi >= 430) return await iluser.reply(message.from, `Duh durasinya kepanjangan maniez, max 7 menit.\n\nKamu bisa mengunduhnya secara manual melalui ${video} \n\ntitle: ${ytres.all[0].title}\nAuthor: ${ytres.all[0].author.name}\nduration:  ${ytres.all[0].timestamp} minutes`, message.id)
                    await iluser.sendFileFromUrl(from, video, `${ytres.all[0].title}.mp4`, `Download success!\n\nTitle: ${ytres.all[0].title}\nAuthor: ${ytres.all[0].author.name}\nDuration:  ${ytres.all[0].timestamp} Minutes${mess.iklan}`, id) 
                })
			} catch (error) {
				printError(error)
				console.log(color('FAILED | Play video', 'red'))
            }
        }
            break
        case prefix+'ytmp3':{
            const disable = await getDB.cek_disable(message.from, `${prefix}yt`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Linknya mana?`)
            const hehe = body.slice(7)
            let isLinn = hehe.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinn) return iluser.reply(message.from, `${hehe} Bukan link audio dari YouTube`, message.id)
			const ytres = await ytsearch(`${hehe}`)
			try {
				const data = await youtubedl(`https://youtu.be/${ytres.all[0].videoId}`, 
                { 
                    noWarnings: true, 
                    noCallHome: true, 
                    noCheckCertificate: true, 
                    preferFreeFormats: true, 
                    youtubeSkipDashManifest: true, 
                    referer: `https://youtu.be/${ytres.all[0].videoId}`, 
                    x: true, audioFormat: 'mp3', 
                    o: `./temp/${user.replace('@c.us', '')}${lvpc}.mp3`
                }).then(async () => { 
                        const durasi = ytres.all[0].seconds
                        if (durasi >= 900) return await iluser.reply(message.from, `Duh durasinya kepanjangan maniez, max 15 menit.`, message.id)
                        await iluser.reply(from, `*${ytres.all[0].title}*\n\n*Link :* https://youtu.be/${ytres.all[0].videoId}\n*Duration :*  ${ytres.all[0].timestamp} minutes\n*Done at :* ${ytres.all[0].ago}\n*Author :* ${ytres.all[0].author.name}`, message.id)
                        await iluser.sendFile(from, `./temp/${user.replace('@c.us', '')}${lvpc}.mp3`, `${ytres.all[0].title}`, '', message.id) 
                        limitAdd(serial)
                    })
				    await sleep(10000).then(async () => { 
                    await fs.unlinkSync(`./temp/${user.replace('@c.us', '')}${lvpc}.mp3`) 
                })
			} catch (error) {
                console.log(color('FAILED | ytmp3', 'red'))
                printError(error)
            }
        }
            break
        // case prefix+'play':{
        //     if(isReg(obj)) return
        //     if (isLimit(serial)) return
        //     if (args.length === 1) return await iluser.reply(from, `Masukkan judul lagu yang nte cari tod`, id)
		// 	try {
		// 		const ytres = await ytsearch(`${body.slice(6)}`)
		// 		const data = await youtubedl(`https://youtu.be/${ytres.all[0].videoId}`, 
        //         { 
        //             noWarnings: true, 
        //             noCallHome: true, 
        //             noCheckCertificate: true, 
        //             preferFreeFormats: true, 
        //             youtubeSkipDashManifest: true, 
        //             referer: `https://youtu.be/${ytres.all[0].videoId}`, 
        //             x: true, audioFormat: 'mp3', 
        //             o: `./temp/${user.replace('@c.us', '')}${lvpc}.mp3`
        //             //skipDownload: true, matchFilter: `filesize < ${Number('30')}M` 
        //         }).then(async () => { 
        //                 const durasi = ytres.all[0].seconds
        //                 if (durasi >= 600) return await iluser.reply(message.from, `Duh durasinya kepanjangan maniez, max 10 menit.`, message.id)
        //                 await iluser.sendFileFromUrl(from, `${ytres.all[0].image}`, 'kntl.jpg', `*Title :* ${ytres.all[0].title}\n*Description :* ${ytres.all[0].description}\n\n*Link :* https://youtu.be/${ytres.all[0].videoId}\n*Duration :*  ${ytres.all[0].timestamp} minutes\n*Done at :* ${ytres.all[0].ago}\n*Views :* ${ytres.all[0].views}\n*Author :* ${ytres.all[0].author.name}\n*Channel :* ${ytres.all[0].author.url}\n\n_*Uploading files...*_`, message.id)
        //                 await iluser.sendFile(from, `./temp/${user.replace('@c.us', '')}${lvpc}.mp3`, `${ytres.all[0].title}.mp3`, `${ytres.all[0].title}.mp3`, message.id) 
        //                 limitAdd(serial)
        //             })
		// 		    await sleep(10000).then(async () => { 
        //             await fs.unlinkSync(`./temp/${user.replace('@c.us', '')}${lvpc}.mp3`) 
        //         })
		// 	} catch (error) {
		// 		printError(error)
        //         console.log(color('FAILED | Play music', 'red'))
        //     }
        // }
        //     break	
            case prefix+'play':
                if (args.length == 0) return iluser.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${prefix}play <judul lagu>\nContoh: ${prefix}play radioactive but im waking up`, id)
                let naisa = body.slice(6)
                let zidan = await ytsearch(naisa)
                const ytres = await ytsearch(`${body.slice(6)}`)
                // sendJSON(zidan)
                try {
                    if (zidan.all[0].seconds > 900) return iluser.reply(from, `Error. Durasi video lebih dari 15 menit!`, id)
                    let estimasi = zidan.all[0].seconds / 200
                    let est = estimasi.toFixed(0)
                    let q3 = '```'
                    await iluser.sendFileFromUrl(from, `${zidan.all[0].thumbnail}`, ``,
                        `${q3}Judul   :${q3} ${zidan.all[0].title}\n` +
                        `${q3}Channel :${q3} ${zidan.all[0].author.name}\n` +
                        `${q3}Durasi  :${q3} ${zidan.all[0].timestamp}\n` +
                        `${q3}Uploaded:${q3} ${zidan.all[0].ago}\n` +
                        `${q3}View    :${q3} ${zidan.all[0].views}\n` +
                        `${q3}Url     :${q3} ${zidan.all[0].url}\n\n` +
                        `Audio sedang dikirim ± ${est} menit`, id)

                    //Download video and save as MP3 file
                    let path = `./temp/temp_${t}.mp3`

                    let stream = ytdl(zidan.all[0].videoId, { quality: 'highestaudio' })
                    // Ffmpeg({ source: stream })
                    ffmpeg({ source: stream })
                        // .setFfmpegPath('./bin/ffmpeg')
                        .on('error', (err) => {
                            fs.existsSync(path) //unlinkSync(path)
                            printError(err, false)
                        })
                        .on('end', () => {
                            iluser.sendFile(from, path, `audio.mp3`, '', id).then(console.log(color('[LOGS]', 'grey'), `Audio Processed for ${processTime(t, moment())} Seconds`))
                            sleep(2000).then(() => { fs.existsSync(path)  })
                       })
                        .saveToFile(path)
                        limitAdd(serial)
                } catch (err) {
                    printError(err)
                }
                break
        case prefix+'video':{
            if (args.length === 1) return await iluser.reply(from, `Masukkan judul video yang nte cari tod`, id)
			try {
				const ytres = await ytsearch(`${body.slice(7)}`)
				await youtubedl(`https://www.youtube.com/watch?v=${ytres.all[0].videoId}`, 
                { 
                    noWarnings: true, 
                    noCallHome: true, 
                    noCheckCertificate: true, 
                    preferFreeFormats: true, 
                    youtubeSkipDashManifest: true, 
                    referer: `https://www.youtube.com/watch?v=${ytres.all[0].videoId}`, 
                    getUrl: true, x: true, format: 'mp4',  
                }).then(async (video) => { 
                    const durasi = ytres.all[0].seconds
                    if (durasi >= 420) return await iluser.reply(message.from, `Duh durasinya kepanjangan maniez, max 7 menit.\n\nKamu bisa mengunduhnya manual melalui ${video}`, message.id)
                    await iluser.sendFileFromUrl(from, `${ytres.all[0].image}`, 'kntl.jpg', `*Title :* ${ytres.all[0].title}\n*Description :* ${ytres.all[0].description}\n\n*Link :* https://youtu.be/${ytres.all[0].videoId}\n*Duration :*  ${ytres.all[0].timestamp} minutes\n*Done at :* ${ytres.all[0].ago}\n*Views :* ${ytres.all[0].views}\n*Author :* ${ytres.all[0].author.name}\n*Channel :* ${ytres.all[0].author.url}\n\n_*Uploading files...*_`, message.id)
                    await iluser.sendFileFromUrl(from, video, `${ytres.all[0].title}.mp4`, `${ytres.all[0].title} ${mess.iklan}`, id) 
                    limitAdd(serial)
                })
			} catch (error) {
				await iluser.reply(from, `Terjadi kesalahan`, id)
				console.log(color('FAILED | Play video', 'red'))
                iluser.sendText(ownerNumber, 'Error video : '+ error.message)
                console.error(error)
            }
        }
            break
        case prefix+'play2':{
                const disable = await getDB.cek_disable(message.from, `${prefix}play2`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            if (args.length == 1) return iluser.reply(message.from, `Contoh: ${prefix}play2 resah jadi luka`, message.id)
            try {   
                    const cok = await axios.get(`http://zekais-api.herokuapp.com/ytplay?query=${body.slice(7)}`)
                    const {title,size,thumb,channel,bitrate,result,uploadDate} = await cok.data
                    if (Number(size.split(' MB')[0]) > 35.00) return iluser.sendFileFromUrl(message.from, thumb, ``, `\nSizenya terlalu gede sayang, dd gakuat :(\n\nunduh manual melalui link di bawah ini\n${result} [ *${size}* ]\n\n*Judul* : ${title}\n*bitrate* : ${bitrate}\n*Upload date* : ${uploadDate} ${mess.iklan}`, message.id)
                    const captplay = `*YOUTUBE PLAY*\n\n• *Judul* : ${title}\n• *Channel* : ${channel}\n• *Size* : ${size}\n• *Bitrate* : ${bitrate}`
                    await iluser.sendFileFromUrl(message.from, cok.data.thumb, `iluser_BOT_thumb.jpg`, `${captplay}\n\nSedang mengirim audio...`, message.id)
                    iluser.sendFileFromUrl(message.from, result, `iluserBOT_${title}.mp3`, `Nih ajg`, message.id)
                    console.log(color('SUCCESS | Play music', 'olive'))
                    limitAdd(serial)
            } catch (err) {
                console.log(color('FAILED | Play music', 'red'))
                iluser.sendText(ownerNumber, 'Error Play2 : '+ err)
                iluser.reply(message.from, `Terjadi kesalahan, coba lagi.`, message.id)
            }
        }break
        case prefix+'joox':{
                const disable = await getDB.cek_disable(message.from, `${prefix}joox`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            if (args.length == 1) return iluser.reply(message.from, `Contoh: ${prefix}joox resah jadi luka`, message.id)
            try {
                const serplay = body.slice(6)
                const webplay = await axios.get(`https://mnazria.herokuapp.com/api/jooxnich?search=${serplay}`)
                const {msinger,msong,public_time,malbum,size320,r320Url,imgSrc } = await webplay.data.result
                const ukuran = (size320 / 1048576).toFixed(1)+' MB'
                const captplay = `*JOOX PLAY*

• *Judul* : ${msong}
• *Penyanyi* : ${msinger}
• *Album* : ${malbum}
• *Date* : ${public_time}
• *Size* : ${ukuran}`
                    if (Number(ukuran.split(' MB')[0]) > 35.00) return iluser.sendFileFromUrl(message.from, imgSrc, ``, `\nSizenya terlalu gede sayang, dd gakuat :(\n\nunduh manual melalui link di bawah ini\n${r320Url} [ *${ukuran}* ]\n\n*Judul* : ${msong}\n*Penyanyi* : ${msinger}\n*Album* : ${malbum}\n*Date* : ${public_time} ${mess.iklan}`, message.id)
                    await iluser.sendFileFromUrl(message.from, imgSrc, '', `${captplay} ${mess.iklan}`, message.id)
                    iluser.sendFileFromUrl(message.from,r320Url, `${msong}.mp3`, ``, message.id)
                    console.log(color('SUCCESS | joox play', 'olive'))
                    limitAdd(serial)
            } catch (err) {
                console.log(err)
                console.log(color('FAILED | joox play', 'red'))
                iluser.sendText(ownerNumber, 'Error joox play : '+ err)
                iluser.reply(message.from, `Terjadi kesalahan.`, message.id)
            }
        }
        break
        case prefix+'spotify':{
                const disable = await getDB.cek_disable(message.from, `${prefix}spotify`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}spotify resah jadi luka*`)
            const keywotp = body.slice(9)
            try {
                const dataplai = await axios.get(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${keywotp}`)
                const dataplay = dataplai.data
                 let keluarplay = `*Spotify Search*\n\nGunakan *${prefix}spdl link* untuk mengunduh lagu spotify`
                for (let i = 0; i < dataplay.result.length; i++) {
                    keluarplay += `\n\n
• *Nama* : ${dataplay.result[i].title}
• *Id* : ${dataplay.result[i].id}
• *Artist* : ${dataplay.result[i].artists}
• *Durasi* : ${dataplay.result[i].duration}
• *Kepopuleran* : ${dataplay.result[i].popularity}
• *Link* : ${dataplay.result[i].link}`
                }
                await iluser.reply(message.from, `${keluarplay} ${mess.iklan}`, message.id)
                console.log(color('SUCCESS | Spotify search', 'olive'))
                limitAdd(serial)
            } catch (err){
                console.log(err)
                console.log(color('FAILED | Spotify search', 'red'))
                iluser.sendText(ownerNumber, `Spotify search:\n${err}`)
                iluser.reply(message.from, 'Error', message.id)
        }
        }
        break
        case prefix+'spdl':{
                const disable = await getDB.cek_disable(message.from, `${prefix}spdl`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            if (args.length == 1) return iluser.reply(message.from, `Linknya mana?`, message.id)
            try {
                const serplay = body.slice(6)
                const webplay = await axios.get(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${encodeURIComponent(serplay)}`)
                   // var mek = {image,info,audio} = webplay.data.result
                    //if (Number(filesize.split('MB')[0]) >= 30.00) return iluser.sendFileFromUrl(message.from, linkImg, `iluser_BOT_thumb.jpg`, `sizenya terlalu gede sayang, dd gakuat :(\n\nunduh manual melalui link di bawah ini\n${linkMp3} [ *${filesize}* ]\n\n*Judul* : ${judul}\n*Durasi* : ${duration} ${mess.iklan}`, message.id)
                    const captplay = `*Spotify Downloader*

• *Judul* : ${webplay.data.result.title}
• *Penyanyi* : ${webplay.data.result.artists}
• *Kepopuleran* : ${webplay.data.result.popularity}
• *Durasi* : ${webplay.data.result.duration}
• *Link Download* : ${webplay.data.result.link}`
                    //if (!isPremium) return await iluser.sendFileFromUrl(message.from, image, `thumb.jpg`, `${captplay}\n\n${mess.noprem}\n[${mp3}]`, message.id)
                    await iluser.sendFileFromUrl(message.from, webplay.data.result.thumbnail, '', `${captplay} ${mess.iklan}`, message.id)
                    iluser.sendFileFromUrl(message.from, webplay.data.result.link, `iluserBOT.mp3`, `iluser_BOT`, message.id)
                    console.log(color('SUCCESS | Spotify Downloader', 'olive'))
                    limitAdd(serial)
            } catch (err) {
                console.log(err)
                console.log(color('FAILED | Spotify Downloader', 'red'))
                iluser.sendText(ownerNumber, 'Error Spotify Downloader : '+ err)
                iluser.reply(message.from, `Error!`, message.id)
            }
        }
        break
        case prefix+'mediafire':{
                const disable = await getDB.cek_disable(message.from, `${prefix}mediafire`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length == 1) return iluser.reply(message.from, `Linknya mana tod?`, message.id)
            try {
                const query = body.slice(11)
                const mediafire = await axios.get(`https://api.zeks.xyz/api/mediafire?apikey=apivinz&url=${query}`)
                if (Number(mediafire.data.file_size.split('MB')[0]) >= 40.00) return iluser.reply(message.from, `sizenya terlalu gede sayang, dd gakuat :(\n\nunduh manual melalui link di bawah ini\n${mediafire.data.download} [ *${mediafire.data.file_size}* ] ${mess.iklan}`, message.id)
                await iluser.reply(message.from, `*Mediafire Downloader*\n
*Filename:* ${mediafire.data.name_file}
*Filetype:* ${mediafire.data.file_type}
*Filesize:* ${mediafire.data.file_size}
*Uploaded:* ${mediafire.data.upload_date} ${mess.iklan}`, message.id)
                await iluser.sendFileFromUrl(message.from, mediafire.data.download, `iluser_BOT_${mediafire.data.name_file}`, ``, message.id)
                console.log(color('SUCCESS | mediafire downloader', 'olive'))
                limitAdd(serial)
            } catch (err) {
                console.log(color('FAILED | mediafire downloader', 'red'))
                iluser.sendText(ownerNumber, 'Error mediafire : '+ err)
                iluser.reply(message.from, `Error!`, message.id)
            }
        }
        break
        case prefix+'lagu':{
                const disable = await getDB.cek_disable(message.from, `${prefix}play2`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            if (!isOwner) return iluser.reply(from, 'Pake command yang lain dlu tod!', id)
            if (args.length == 1) return iluser.reply(message.from, `Contoh: ${prefix}play2 resah jadi luka`, message.id)
            try {   
                    const cok = await axios.get(`https://api.zeks.xyz/api/ytplaymp4?apikey=apivinz&q=${encodeURIComponent(body.slice(6))}`)
                    const captplay = `*${cok.data.result.title}*\n\nLink audio:${cok.data.result.audio}\nLink video:${cok.data.result.video}`
                    //if (!isPremium) return await iluser.sendFileFromUrl(message.from, image, `thumb.jpg`, `${captplay}\n\n${mess.noprem}\n[${mp3}]`, message.id)
                    await iluser.reply(message.from, `${captplay}\n\n*_Proses uploading..._*`, message.id)
                    await iluser.sendFileFromUrl(message.from, cok.data.result.audio, `iluserBOT_${cok.data.result.title}.mp3`, `Nih ajg`, message.id)
                    await console.log(color('SUCCESS | Play music', 'olive'))
                    limitAdd(serial)
            } catch (err) {
                console.log(color('FAILED | lagu', 'red'))
                iluser.sendText(ownerNumber, 'Error lagu : '+ err)
                iluser.reply(message.from, `Terjadi kesalahan, coba lagi.`, message.id)
            }
        }break

        case prefix+'ig2':{        
            const disable = await getDB.cek_disable(message.from, `${prefix}ig2`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
        if(isReg(obj)) return
        if (isLimit(serial)) return
        if (args.length === 1) return iluser.reply(message.from, `Linknya mana?`, message.id)
        if (!args[1].includes('instagram.com')) return iluser.reply(message.from, `urlnya bukan dari instagram itu tol`, message.id)
        const crot = body.slice(5)
        try {  
                const cok = await axios.get(`http://zekais-api.herokuapp.com/igdl?url=`+crot) //https://restfulapi.my.id/api/instagram/downloader?url=
                if (cok.data.status == false) {
                    iluser.reply(message.from,'Tidak bisa mengunduh media di akun terkunci/private account', message.id);
                    console.log( 'FAILED | because PRIVATE account INSTAGRAM');
                  } else {
                const {date,result,owner_user} = await cok.data
                for (var i = 0; i < result.length; i++) {
                            await iluser.sendFileFromUrl(message.from, result[i].url, "", `Download success!\n\nFrom: @${owner_user}\nDate: ${date} ${mess.iklan}`, message.id);
                            
                        }
                        limitAdd(serial)
                        console.log('SUCCESS | instagram2')
                        }
                        } catch (err) {
                            console.log(color('FAILED | instagram ', 'red') + err)
                            iluser.sendText(ownerNumber, 'instagram2 : '+ err)
                            iluser.reply(message.from, `Terjadi kesalahan, coba lagi beberapa saat kemudian.`, message.id)
                        }
                        }
                    break
        case prefix+'tw':
        case prefix+'twt':
        case prefix+'twitter':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tw`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isBlocked) return await iluser.reply(message.from, mess.blockk, message.id)
            if(args.length == 1) return await iluser.reply(message.from, "Maaf, tidak boleh kosong.", message.id)
            if (isLimit(serial)) return 
            if (args[1].includes('twitter.com') == true) {
                try {
                    const getToken = await GetAccesToken()
                    const getGuest = await getGuestToken(getToken.access_token)
                    if(args[1].includes('status/')==true)
                    {
                        const post_id = args[1].split('status/')[1].split('/')[0]
                        const getAktivated = await getAktivate(getToken.access_token, getGuest.guest_token, post_id)
                        if(typeof getAktivated.errors == 'undefined')
                        {
                            const total = getAktivated.extended_entities.media[0].video_info.variants.length - 1
                            const urldownload = getAktivated.extended_entities.media[0].video_info.variants[total]
                            const namauser = getAktivated.user.screen_name
                            const waktu = getAktivated.extended_entities.media[0].video_info.duration_millis / 1000 + ` detik.`
                            let result_url = ''
                            urldownload.content_type == 'application/x-mpegURL' ? result_url = getAktivated.extended_entities.media[0].video_info.variants[total - 1].url : result_url = urldownload.url;
                            await iluser.sendFileFromUrl(message.from,  result_url, `inifile.mp4`, `Sukses Download!\nDari: @${namauser}\nDurasi: ${waktu} ${mess.iklan}`, message.id);
                            limitAdd(serial)
                        }
                        else if(getAktivated.errors[0].message == 'Sorry, you are not authorized to see this status.')
                        {
                            await iluser.reply(message.from, 'Maaf, user private.', message.id)
                        }else if(getAktivated.errors[0].message == 'No status found with that ID.')
                        {
                            await iluser.reply(message.from, 'Maaf, tidak ditemukan status dalam id tersebut.', message.id)
                        }else if(getAktivated.errors[0].message == 'No data available for specified ID.')
                        {
                            await iluser.reply(message.from, 'Maaf, tidak ditemukan data dalam id tersebut.', message.id)
                        }else if(getAktivated.errors[0].message == 'Invalid or expired token.')
                        {
                            await iluser.reply(message.from, 'Token kadaluarsa. Lapor admin segera https://wa.me/6289618530831')
                        }

                    }
                } catch(err)  {
                    await iluser.reply(message.from, "⛔ error", message.id)
                    console.log('FAILED | twitter downloader')
                    iluser.sendText(ownerNumber, 'tw error : ' + err)
                }

            } else {
                await iluser.reply(message.from, "⛔ Not valid url/post_id", message.id)
            }
        }
        break     
        case prefix+'pin':{
                const disable = await getDB.cek_disable(message.from, `${prefix}pin`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if(args.length == 1) return await iluser.reply(message.from, `Pastikan contoh benar!\n${prefix}pin <link>`, message.id)
            //if (args[1].includes('pinterest.com') != true || args[1].includes('pin.it') != true) return await iluser.reply(message.from, `Pastikan link berasal dari pinterest!`, message.id)
            else{
                if (isLimit(serial)) return 
                const a = await PIN.PinterestAPI(args[1]) 
                const get64 = await getBase64(a)
                const getFileType = base64MimeType(get64).split('/')[1]
                await iluser.sendImage(message.from, get64, `inifile.${getFileType}`, `Pinterest X iluser_BOT ${mess.iklan}`, message.id);
                console.log('SUCCESS | pinterest downloader') 
                limitAdd(serial)
            }
        }
        break
        case prefix+'fb':{
        let videoObj;
        try {
            videoObj = await facebookTools.getVideoUrl(args[1]);
            iluser.sendFileFromUrl(from, videoObj.sdLink, '', `${mess.iklann}`, id)
        } catch (e) {
            // Handle error...
            console.log(`Error fb: ${e}`)
            iluser.reply(from, `${e}`, id)
        }
        console.log(videoObj);
        }
        break
        case prefix+'fb2':{
                if(isReg(obj)) return         
                if (isLimit(serial)) return
                require('fb-video-downloader').getInfo(args[1]).then(info => {
                console.log(JSON.stringify(info, null, 2))
                iluser.sendFileFromUrl(from, info.download.sd, 'fb.mp4', 'Judul :' + `${info.title}` +'',id)
                limitAdd(serial)
                })}
            break
        case prefix+'fb2':{
                const disable = await getDB.cek_disable(message.from, `${prefix}fb2`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            if (args.length === 1) return iluser.reply(message.from, `Contoh : ${prefix}fb https://www.facebook.com/xnxx`, message.id)
            facebook(args[1]).then(async(res) => {
                let { VideoUrl } = await res
                const epbe2 = `*FACEBOOK DOWNLOADER*\n`
              //  if (!isPremium) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`${epbe2}\n\n${mess.noprem}\n[${VideoUrl}]`, message.id);
                await iluser.sendFileFromUrl(message.from, VideoUrl, `Facebook.mp4`, `${epbe2} ${mess.iklan}`, message.id)
                console.log('SUCCESS | facebook downloader 2')
                limitAdd(serial)
            }).catch((err) => {
                iluser.reply(message.from, `Maaf, Terjadi Kesalahan`, message.id)
                console.log('FAILED | Facebook downloader 2')
                iluser.sendText(ownerNumber, 'Error Facebook 2: '+ err)
            })
        }
            break
        case prefix+'fb3':{
                const disable = await getDB.cek_disable(message.from, `${prefix}fb`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length == 1) return iluser.reply(message.from, `Linknya mana tod?`, message.id)
            const link = args[1]
            if(!link.includes('facebook.com')) return await iluser.reply(message.from, "Maaf, url tidak valid bersumber dari facebook.com", message.id)
            try {
                const query = body.slice(5)
                const fbeh = await axios.get(`http://docs-jojo.herokuapp.com/api/fb?url=${query}`)
               	console.log(fbeh)
                await iluser.sendFileFromUrl(message.from, fbeh.data.result.normal, ``, `${mess.iklann}`, message.id)
                console.log(color('SUCCESS | Facebook downloader', 'olive'))
                limitAdd(serial)
            } catch (err) {
                console.log(color('FAILED | Facebook downloader', 'red'))
                iluser.sendText(ownerNumber, 'Error Facebook downloader : '+ err)
                iluser.reply(message.from, `Error!`, message.id)
            }
        } 
        case prefix+'tiktok':{
            if (!isOwner) return reply('Fiturnya lgi maintenance om')
            const disable = await getDB.cek_disable(message.from, `${prefix}tiktok`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
        if(isReg(obj)) return
        if (isLimit(serial)) return 
        if (args.length == 1) return iluser.reply(message.from, `Linknya mana tod?`, message.id)
        try {
            const query = body.slice(8)
            const fbeh = await axios.get(`http://zekais-api.herokuapp.com/tiktok?url=${query}`)
               console.log(fbeh)
            await iluser.sendFileFromUrl(message.from, fbeh.data.Video_URL.WithWM, ``, `${mess.iklann}`, message.id)
            console.log(color('SUCCESS | Tiktok downloader', 'olive'))
            limitAdd(serial)
        } catch (err) {
            console.log(color('FAILED | Tiktok downloader', 'red'))
            iluser.sendText(ownerNumber, 'Tiktok downloader : '+ err)
            iluser.reply(message.from, `terjadi kesalahan om`, message.id)
        }
    } 
    break
        case prefix+'tiktok':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tiktok`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh : ${prefix}tiktok https://vt.tiktok.com/xnxx/`, message.id)
            tiktokk(args[1]).then(async(res) => {
                console.log(res)
                let { Status,Judul,Video_URL} = await res
                await download(Video_URL.WithWM, './dbig/p.mp4', function(){
                    const a = base64_encode('./dbig/p.mp4');
                    var base64str = 'data:video/mp4'+";base64,"+a.toString()
                    iluser.sendFile(message.from,base64str,'p.mp4', `${mess.iklann}`, id);
                    limitAdd(serial)
                    console.log('SUCCESS | Tiktok')
                  });
                // iluser.sendFileFromUrl(message.from, Video_URL.WithWM, '', Judul, message.id)
                //     console.log('SUCCESS | tiktok downloader')
                //     limitAdd(serial)
            }).catch((err) => {
                console.log('FAILED | tiktok downloader');
                iluser.reply(message.from, `Maaf, Terjadi Kesalahan`, message.id)
                iluser.sendText(ownerNumber, 'Error tiktok downloader: '+ err)
            })
        }
        break
        case prefix+'tt':{
            if (!isOwner) return reply('Fiturnya lgi maintenance om')
                const disable = await getDB.cek_disable(message.from, `${prefix}tt`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.sendText(message.from, `Contoh : ${prefix}tt https://vt.tiktok.com/xnxx/`, message.id)
            try {
                const webplay = await axios.get(`https://api.justaqul.xyz/tiktoknowm?url=${body.slice(4)}&apikey=cecBUAjhd5Wls7e7`)
                await sendFFU(`https://api.justaqul.xyz/tiktoknowm?url=${body.slice(4)}&apikey=cecBUAjhd5Wls7e7`,`${mess.iklann}`).catch((err) => printError(err))
                limitAdd(serial)
                console.log('SUCCESS | tiktok downloader')
            } catch (err) {
                console.log('FAILED | tiktok downloader');
                printError(err)
            }
        }
        break
        case prefix+'tt2':{
            if (!isOwner) return reply('Fiturnya lgi maintenance om')
            const disable = await getDB.cek_disable(message.from, `${prefix}tt2`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
        if(isReg(obj)) return
        if (isLimit(serial)) return 
        if (args.length === 1) return iluser.reply(message.from, `Contoh : ${prefix}tt https://vt.tiktok.com/xnxx/`, message.id)
        try {
            const webplay = await axios.get(`http://api.areltiyan.xyz/tiktokwm?link=${body.slice(5)}`)
            await iluser.sendFileFromUrl(message.from, webplay.data.no_watermark_link, ``, `${mess.iklann}`, message.id).catch(() => iluser.reply(message.from, 'Error bang', message.id))
            limitAdd(serial)
            console.log('SUCCESS | tiktok downloader')
        } catch (err) {
            console.log('FAILED | tiktok downloader');
            iluser.sendText(ownerNumber, 'Error tt2 : '+ err)
            iluser.reply(message.from, 'Error bang', message.id)
        }
    }
    break
        case prefix+'instastory':
        case prefix+'igstory':{
                const disable = await getDB.cek_disable(message.from, `${prefix}igstory`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}igstory namauser`, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            try{
                const igeh = await axios.get(`https://api.zeks.xyz/api/igs?apikey=apivinz&username=${args[1]}`)
                    if (igeh.status == "false") return iluser.reply(from, igeh.status,id)
                    const {stories_count,data,username} = await igeh.data
                    if (stories_count > 10) {
                        iluser.reply(message.from, `Instagram Story @${username}\nMengirim 10 cerita..`, message.id)
                        for (let i = 0; i < 10; i++) {
                            await iluser.sendFileFromUrl(message.from, data[i].url, '', `${mess.iklann}`, message.id)
                        }
                        console.log('SUCCESS | instastory')
                        limitAdd(serial)
                    }else{
                        iluser.reply(message.from, `Instagram Story @${username}Mengirim ${stories_count} cerita..`, message.id)
                      for (var i = 0; i < data.length; i++) {
                        await iluser.sendFileFromUrl(message.from, data[i].url, '', `${mess.iklann}`, message.id) 
                    }
                    console.log('SUCCESS | instastory')
                    limitAdd(serial)
                }
                }catch (err) {
                        await iluser.reply(message.from, 'Error!', message.id)
                        iluser.sendText(ownerNumber, 'Error instastory: '+ err)
                        console.log('FAILED | instastory')
                    }
                }
                break
            
        //INFORMATION MENU
        case prefix+'waktu':{
                const disable = await getDB.cek_disable(message.from, `${prefix}waktu`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return   
            await iluser.reply(message.from, `Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT ${mess.iklan}`, message.id)
            console.log(color('SUCCESS | waktu', 'olive'))
            limitAdd(serial)
        }
            break
        case prefix+'covidindo':
        case prefix+'corona':{
            const disable = await getDB.cek_disable(message.from, `${prefix}covidindo`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            const korona = await get.get('https://api.terhambar.com/negara/Indonesia').json()
                        iluser.reply(message.from, `
Corona Indonesia

Total : *${korona.total}*
Kasus Baru : *${korona.kasus_baru}*
Meninggal : *${korona.meninggal}*
Meninggal Baru : *${korona.meninggal_baru}*
Penanganan : *${korona.penanganan}*
Sembuh : *${korona.sembuh}*
Update : *${korona.terakhir}*
`, message.id)
console.log(color('SUCCESS | covid indonesia', 'olive'))
limitAdd(serial)
}
            break
        case prefix+'covid':{
                const disable = await getDB.cek_disable(message.from, `${prefix}covid`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            if (args.length === 1) return iluser.reply(message.from, `Masukkan nama negaranya sayang`, message.id)
            const country = body.slice(7)
            const response2 = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + country + '/')
            const { cases, todayCases, deaths, todayDeaths, active } = response2.data
                await iluser.reply(message.from, 
`🌎️ Covid-19 Country ${country} 🌍️

✨️ Total Cases: *${cases}*
📆️ Today\'s Cases: *${todayCases}*
☣️ Total Deaths: *${deaths}*
☢️ Today\'s Deaths: *${todayDeaths}*
⛩️ Active Cases: *${active}* ${mess.iklan}`, message.id)
console.log(color('SUCCESS | covid country', 'olive'))
limitAdd(serial)
            }
            break
        case prefix+'infonomor':{
                const disable = await getDB.cek_disable(message.from, `${prefix}infonomor`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return         
                if (isLimit(serial)) return
            if (args.length == 1) return iluser.reply(message.from, 'Nomornya mana??', message.id)
            const nomro = body.slice(11)
            const nomronya = await fetch(`http://docs-jojo.herokuapp.com/api/infonomor?no=${nomro}`)
            const nmro = await nomronya.json()
            iluser.reply(message.from, `• *Nomor* : ${nmro.nomor} \n• *Internasional* : ${nmro.international} \n• *Operator* : ${nmro.op}`, message.id)
            console.log(color('SUCCESS | infonomor', 'olive'))
            limitAdd(serial)
            }   
            break
        
        case prefix+'kurs':{
                const disable = await getDB.cek_disable(message.from, `${prefix}kurs`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                        if (args.length == 1) return iluser.reply(message.from, `Untuk mengkonversi uang dari negara luar menjadi IDR\nContoh : ${prefix}kurs usd|2000\n\nDan untuk mengecek mata uang bisa gunakan ${prefix}matauang`, message.id)
                        const duit1 = arg.split('|')[0]
                        const duit2 = arg.split('|')[1]
                        await axios.get('https://api.terhambar.com/currency?curr='+duit1+'&bal='+duit2).then(res => {
                            const duitnya = `Konversi mata uang ${res.data.result.currency} dari ${duit2}\n\nBalance Currency : *${res.data.result.balanceCurrency}*\n\nHasil Dirupiahkan : *${res.data.result.resultConvert}*`
                            iluser.reply(message.from, duitnya, message.id)
                            console.log(color('SUCCESS | sending kurs', 'olive'))
                            limitAdd(serial)
                        }).catch(async (err) => {
                        await iluser.sendText(ownerNumber, `Error kurs: ${err}`)
                        await iluser.reply(message.from, 'Error!', message.id)
                        console.log(color('FAILED | sending kurs', 'red'))
                    })
                    }
                        break
        case prefix+'matauang':
                            const matung = `List Currency : btc, usd, eur, gbp, aud, cad, chf, cny, jpy, sgd, nzd, pkr, hkd, krw, mxn, nok, egp, clp, ngn, brl, rub, uah, thb, pln, inr, eth, xmr, dash, doge, ltc, str, xrp`
                            iluser.reply(message.from, matung, message.id)
                            break
        
        //STALKING MENU
        case prefix+'ytstalk':{
            const disable = await getDB.cek_disable(message.from, `${prefix}ytstalk`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
        if(isReg(obj)) return
            if (isLimit(serial)) return 
            try {
            const ytstalk2 = await axios.get(`http://lolhuman.herokuapp.com/api/ytchannel?apikey=${lolkey}&query=${body.slice(9)}`)
            const nzcocok =
            `Channel Ditemukan

*Channel ID:* ${ytstalk2.data.result[0].channel_id}
*Name:* ${ytstalk2.data.result[0].channel_name}
*About:* ${ytstalk2.data.result[0].channel_about}
*Created:* ${ytstalk2.data.result[0].channel_created} ${mess.iklan}`
            iluser.sendFileFromUrl(from, ytstalk2.data.result[0].channel_picture.high.url, '', nzcocok, id)
            console.log(color('SUCCESS | YouTube stalk', 'olive'))
            limitAdd(serial)
            } catch (err) {
             console.log(color('FAILED | YouTube stalk', 'red'))
             await iluser.reply(from, 'Error')
             iluser.sendText(ownerNumber, 'Error YTstalk : '+ err)
           }}
          break
        case `${prefix}igstalk`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}igstalk`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (args.length === 1)  return iluser.reply(message.from, `Contoh *${prefix}igstalk duar_amjay*`, message.id)
            const istalk = body.slice(9)
            try {
            const istalk2 = await axios.get(`https://api.justaqul.xyz/igstalk?username=${istalk}&apikey=xinzbot`)
            const { username,postsCount,fullName,highlightCount,subscribersCount,subscribtions,profilePicHD,isPrivate,isVerified,biography } = istalk2.data.result
            const istalk3 = `*User Ditemukan!*

• *Username:* ${username}
• *Nama:* ${fullName}
• *Verified:* ${isVerified}
• *Private:* ${isPrivate}
• *Jumlah Postingan:* ${postsCount}
• *Pengikut:* ${subscribersCount}
• *Mengikuti:* ${subscribtions}
• *Bio:* ${biography}
• *Highlight:* ${highlightCount} ${mess.iklan}`
            sendFFU(profilePicHD, istalk3)
            console.log('SUCCESS | igstalkg')
            } catch (err) {
             printError(err)
             console.log('FAILED | igstalk')
           }}
          break 

        //AUDIO MENU
        case prefix+'tomp3':
        case prefix+'toaudio':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tomp3`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if ((isMedia || isQuotedVideo || isQuotedFile)) {
                //iluser.reply(message.from, mess.wait, message.id)
                const encryptMedia = isQuotedVideo || isQuotedFile ? quotedMsg : message
                const _mimetype = isQuotedVideo || isQuotedFile ? quotedMsg.mimetype : mimetype
                console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
                const mediaData = await decryptMedia(encryptMedia)
                let temp = './temp'
                let name = new Date() * 1
                let fileInputPath = path.join(temp, 'video', `${name}.${_mimetype.replace(/.+\//, '')}`)
                let fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                   console.log(color('[fs]', 'green'), `Downloading media into '${fileInputPath}'`)
                fs.writeFile(fileInputPath, mediaData, err => {
                            if (err) return iluser.sendText(message.from, 'Ada yang error saat menulis file\n\n' + err)
                    // ffmpeg -y -t 5 -i <input_file> -vf "scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease" -qscale 100 <output_file>.webp
                    ffmpeg(fileInputPath)
                        .format('mp3')
                        .on('start', function (commandLine) {
                            console.log(color('[FFmpeg]', 'green'), commandLine)
                        })
                        .on('progress', function (progress) {
                            console.log(color('[FFmpeg]', 'green'), progress)
                        })
                        .on('end', function () {
                            console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                             fs.readFile(fileOutputPath, { encoding: 'base64' }, (err) => {
                               if (err) return iluser.sendText(message.from, 'Ada yang error saat membaca file .mp3') && console.log(color('[ERROR]', 'red'), err)
                            iluser.sendFile(message.from, fileOutputPath, 'audio.mp3', '', message.id)
                            console.log('SUCCESS | video to mp3')
                            limitAdd(serial)
                            //iluser.reply(from `${mess.iklann}`, message.id)
                             })
                            setTimeout(() => {
                                try {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                } catch (e) {
                                       console.log(color('[ERROR]', 'red'), e)
                                }
                            }, 30000)
                        })
                        .save(fileOutputPath)
                })
            }
        }
        break   
                case prefix+'bass':{
                const disable = await getDB.cek_disable(message.from, `${prefix}bass`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                    if(isReg(obj)) return
                    if (isLimit(serial)) return 
                    if (isQuotedAudio || isQuotedVoice) {
                        let dB = 20
                        let freq = 60
                        if (args[0]) dB = clamp(parseInt(args[0]) || 20, 0, 50)
                        if (args[1]) freq = clamp(parseInt(args[1]) || 20, 20, 500)
                        let mediaData = await decryptMedia(quotedMsg)
                        let temp = './temp'
                        let name = new Date() * 1
                        let fileInputPath = path.join(temp, 'audio', `${name}.mp3`)
                        let fileOutputPath = path.join(temp, 'audio', `${name}_2.mp3`)
                        console.log(color('[fs]', 'green'), `Writing media into '${fileInputPath}'`)
                        fs.writeFile(fileInputPath, mediaData, err => {
                            if (err) {
                                return iluser.reply(message.from, 'Ada yang error saat menulis file', message.id)
                            }
                            ffmpeg(fileInputPath)
                                .audioFilter('equalizer=f=' + freq + ':width_type=o:width=2:g=' + dB)
                                .format('mp3')
                                .on('start', function (commandLine) {
                                    console.log(color('[FFmpeg]', 'green'), commandLine)
                                })
                                .on('progress', function (progress) {
                                    console.log(color('[FFmpeg]', 'green'), progress)
                                })
                                .on('error', function () {
                                        console.log('error!')
                                    })
                                .on('end', function () {
                                    console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                    // fs.readFile(fileOutputPath, { encoding: 'base64' }, (err, base64) => {
                                     if (err){
                                        return iluser.reply(message.from, 'Ada yang error saat membaca file .mp3', message.id)
                                        iluser.sendText(ownerNumber, 'Error bass:\n'+err)
                                        console.log(color('[ERROR]', 'red'), err)
                                    }
                                    iluser.sendFile(message.from, fileOutputPath, 'distorted.mp3', '', message.id)
                                    limitAdd(serial)
                                  //  iluser.reply(message.from, `${mess.iklann}`, message.id)
                                    // })
                                    setTimeout(() => {
                                        try {
                                            fs.unlinkSync(fileInputPath)
                                            fs.unlinkSync(fileOutputPath)
                                        } catch (e) { _err(e) }
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                    }
                }
                break
               case prefix+'distord':{
                const disable = await getDB.cek_disable(message.from, `${prefix}distord`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                   if (isLimit(serial)) return 
                    if (isQuotedAudio) {
                       // iluser.reply(message.from, mess.wait, message.id)
                        const encryptMedia = isQuotedAudio ? quotedMsg : message
                        console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
                        const mediaData = await decryptMedia(encryptMedia)
                        Utils.decodeAudioData(mediaData, (err, audioBuffer) => {
                            if (err) return iluser.sendText(message.from, mess.error.Yt4, ('Ada yang error saat decoding file mp3\n\n'))
                            generated = audioBuffer._data.map(channel => {
                                return channel.map(value => clampFloat(distordFX(value)))
                            })
        
                            buffer = wav.encode(generated, {
                                sampleRate: audioBuffer.sampleRate,
                                float: true,
                                bitDepth: 32
                            })
        
                            let temp = './temp'
                            let name = new Date() * 1
                            let fileInputPath = path.join(temp, 'audio', `${name}.wav`)
                            let fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                            console.log(color('[fs]', 'green'), `Writing media into '${fileInputPath}'`)
                            //iluser.reply(message.from, ('wav', 'mp3', 'Nah... sekarang dikembaliin lagi formatnya'), message.id)
                            fs.writeFile(fileInputPath, buffer, err => {
                                if (err) return iluser.reply(message.from, 'Ada yang error saat menulis file', message.id)
                                ffmpeg(fileInputPath)
                                    .format('mp3')
                                    .on('start', function (commandLine) {
                                        console.log(color('[FFmpeg]', 'green'), commandLine)
                                    })
                                    .on('progress', function (progress) {
                                        console.log(color('[FFmpeg]', 'green'), progress)
                                    })
                                    .on('error', function () {
                                        console.log('error!')
                                    })
                                    .on('end', function () {
                                        console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                        fs.readFile(fileOutputPath, { encoding: 'base64' }, (err) => {
                                         if (err){
                                            return iluser.reply(message.from, 'Ada yang error saat membaca file .mp3', message.id)
                                            iluser.sendText(ownerNumber, 'Error distord:\n'+err)
                                            console.log(color('[ERROR]', 'red'), err)
                                         }
                                        iluser.sendFile(message.from, fileOutputPath, 'distorted.mp3', '', message.id)
                                        limitAdd(serial)
                                    //  iluser.reply(message.from, `${mess.iklann}`, message.id)
                                        })
                                        setTimeout(() => {
                                            try {
                                                fs.unlinkSync(fileInputPath)
                                                fs.unlinkSync(fileOutputPath)
                                            } catch (e) { _err(e) }
                                        }, 30000)
                                    })
                                    .save(fileOutputPath)
                            })
                        })
                    }
                }
                break
        case prefix+'tts':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tts`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            try {
                if (args.length === 1) return iluser.reply(message.from, `Contoh *${prefix}tts id Pagi beban*`, message.id)
                var dataBhs = args[1]      
                const ttsHZ = require('node-gtts')(dataBhs)
                var dataText = body.slice(8)
                if (dataText === '') return iluser.reply(message.from, 'Masukkan teksnya', message.id)
                if (dataText.length > 500) return iluser.reply(message.from, 'Teks terlalu panjang!', message.id)
                var dataBhs = body.slice(5, 7)
                ttsHZ.save('./media/tts.mp3', dataText, function () {
                iluser.sendPtt(message.from, './media/tts.mp3', message.id)
                limitAdd(serial)
               // iluser.reply(message.from, `${mess.iklann}`, message.id)
                })
            } catch (err){
                console.log(color('FAILED | Text to speach', 'red'))
                iluser.reply(message.from, `[ERROR] Teks tidak ada, atau kode bahasa *${dataBhs}* tidak support\n~> *${prefix}bahasa* untuk melihat list kode bahasa`, message.id);
            }
        }
            break
        case prefix+'v': {
                const disable = await getDB.cek_disable(message.from, `${prefix}v`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                const namfil = body.slice(3)
            try {
                await iluser.sendPtt(message.from, `./media/audio/${namfil}.mp3`, message.id)
                console.log(color('SUCCESS | send voice note', 'olive'))
            }catch (err) { 
                iluser.reply(message.from, `Voice note *${namfil}* tidak ada di database!`, message.id)
            }
        }
            break
        case prefix+'setvn':{
                const disable = await getDB.cek_disable(message.from, `${prefix}setvn`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (!isOwner && !isPremium && !isPilot) return await iluser.reply(message.from, mess.nopremium, message.id)
            if (args.length === 1) return iluser.reply(message.from, `Namanya mana tolol?`)
            let nmfil = body.slice(7)
            if (isQuotedAudio || isQuotedVoice){
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const filename = `./media/audio/${nmfil}.mp3`
                fs.writeFileSync(filename, mediaData)
                vnlist.push(nmfil)
                fs.writeFileSync('./lib/database/vn.json', JSON.stringify(vnlist))
                await iluser.reply(message.from, `voice note dengan nama *${nmfil}* berhasil disimpan!`, message.id)
                console.log(color('SUCCESS | saving voice note', 'olive'))
                if(isGroupMsg){
                    await iluser.sendTextWithMentions(ownerNumber, `*[SETVN NOTICE]*\n\n*WAKTU:* ${time}\nUSER: @${sender.id.match(/\d+/g)}\nGroup : ${formattedTitle}\n\n${nmfil}`)
                    iluser.sendText(ownerNumber, `${nmfil}`)
                }else{
                    await iluser.sendTextWithMentions(ownerNumber, `*[SETVN NOTICE]*\n\n*WAKTU:* ${time}\nUSER: @${sender.id.match(/\d+/g)}\n\n${nmfil}`)
                    iluser.sendText(ownerNumber, `${nmfil}`)
                } 
            }else if(isMedia && type === 'audio'){
                const mediaData = await decryptMedia(message, uaOverride)
                const filename = `./media/audio/${nmfil}.mp3`
                fs.writeFileSync(filename, mediaData)
                vnlist.push(nmfil)
                fs.writeFileSync('./lib/database/vn.json', JSON.stringify(vnlist))
                await iluser.reply(message.from, `voice note dengan nama *${nmfil}* berhasil disimpan!`, message.id)
                console.log(color('SUCCESS | saving voice note', 'olive'))
                if(isGroupMsg){
                    await iluser.sendTextWithMentions(ownerNumber, `*[SETVN NOTICE]*\n*WAKTU:* ${time}\nUSER: @${sender.id.match(/\d+/g)}\nGroup : ${formattedTitle}\n\n${nmfil}`)
                    iluser.sendText(ownerNumber, `${nmfil}`)
                }else{
                    await iluser.sendTextWithMentions(ownerNumber, `*[SETVN NOTICE]*\n*WAKTU:* ${time}\nUSER: @${sender.id.match(/\d+/g)}\n\n${nmfil}`)
                    iluser.sendText(ownerNumber, `${nmfil}`)
                }
            }else{
                await iluser.reply(message.from, `Error! Silahkan coba kembali...`, message.id)
                console.log(color('FAILED | saving voice note', 'red'))
            }
                    
        }
        break
        case prefix+'delvn':{
            const disable = await getDB.cek_disable(message.from, `${prefix}delvn`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (!isOwner && !isPremium && !isPilot) return await iluser.reply(message.from, mess.nopremium, message.id)
                if (args.length === 1) return iluser.reply(from, 'Mau apa tol?', id)
                let svstc = `${body.slice(7)}`
                fs.unlinkSync(`./media/audio/${svstc}.mp3`)
                await iluser.reply(from, `Sukses menghapus voice note *${svstc}*`, id)
            }
            break
            // case `${prefix}delprem`:
            //     if (!isOwner) return 
            //     if (mentionedJidList.length == 1) {
            //         if (mentionedJidList[1] === botNumber) return await iluser.reply(message.from, `Format salah bang!`, message.id)
            //         _premium.splice(premium.getPremiumPosition(mentionedJidList[0], _premium), 1)
            //         fs.writeFileSync('./lib/database/premium.json', JSON.stringify(_premium))
            //         await iluser.sendTextWithMentions(message.from, `@${mentionedJidList[0]} deleted from database premium!`, message.id)
            //     } else {
            //         _premium.splice(premium.getPremiumPosition(args[0] + '@c.us', _premium), 1)
            //         fs.writeFileSync('./lib/database/premium.json', JSON.stringify(_premium))
            //         await iluser.reply(message.from, `Sukses menghapus user premium`, message.id)
            //     }
            //     break
            case prefix+'sfx':
            case prefix+'listvn':
            case prefix+'vnlist': {
                    let listMsg = ''
                    sfx.forEach(n => {
                        listMsg = listMsg + '\n • ' + n
                    })
                    if (args.length === 1) return reply(`Daftar voice note tersimpan:\nKetik langsung nama VN untuk mengakses\n${listMsg}\n\n*NB*\nPenggunaan huruf besar dan kecil sensitif`)
                    break
                }
        // case prefix+`vnlist`:
        // case prefix+`listvn`:
        // let vn = `Daftar voice note tersimpan\n\nGunakan *${prefix}v nama vn* atau ketikan langsung nama vn untuk mengakses voice note yang tersimpan\n\n`
        //     for (let i of vnlist) {
        //         vn += `• ${i}\n`
        //     }vn += `\n*NB*\nPenggunaan huruf besar dan kecil sensitif`
        //     await iluser.reply(message.from, vn, message.id)
        //     console.log(color('SUCCESS | voice note list', 'olive'))
        //     break

        //SEARCH MENU
        case prefix+'apkpure':{
                const disable = await getDB.cek_disable(message.from, `${prefix}apkpure`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Mau aplikasi apa tod?`, message.id)
            const keywotpx = body.slice(8)
            try {
                const dataplaix = await axios.get(`https://api.zeks.xyz/api/apkpure?q==${keywotpx}&apikey=apivinz`)
                const dataplayx = dataplaix.data
                 let keluarplayx = `\n*APK PURE SEARCH*\n\nHasil Pencarian : ${keywotpx}\n`
                for (let i = 0; i < dataplayx.result.length; i++) {
                    keluarplayx += `\n─────────────────\n\n• *Nama* : ${dataplayx.result[i].title}\n• *url* : ${dataplayx.result[i].url}\n• *rating* : ${dataplayx.result[i].rating}\n${mess.iklann}\n`
                }
                await iluser.sendFileFromUrl(message.from, dataplayx.result[0].thumbnail, `iluserBOT.webp`, keluarplayx, message.id)
                console.log(color('SUCCESS | apkpure search', 'olive'))
                limitAdd(serial)
            } catch (err){
            console.log(color('FAILED | Apkpure search', 'red'))
            iluser.sendText(ownerNumber, `Error Apkpure search:\n${err}`)
            iluser.reply(message.from, 'terjadi kesalahan', message.id)
            }
        }
        break
        case prefix+'yts':{
                const disable = await getDB.cek_disable(message.from, `${prefix}yts`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length == 1) return iluser.reply(from, 'mau cari apa cantik?', id)
            const ytvrz = await ytsearch(`${body.slice(5)}`)
            console.log(ytvrz)
            let asu = `*Youtube Search*`
            for (let i = 0; i < ytvrz.all.length; i++) {
          //      const { urlDownload } = result.story.itemlist[i]
            asu +=`

*Judul:* ${ytvrz.all[i].title}
*Durasi:* ${ytvrz.all[i].timestamp}
*Upload Pada:* ${ytvrz.all[i].ago}
*Penonotn:* ${ytvrz.all[i].views}
*Url:* ${ytvrz.all[i].url}
*Deskripsi:* ${ytvrz.all[i].description}`
            } asu += `${mess.iklan}`
            await iluser.sendFile(from, `${ytvrz.all[0].image}`, '', `${asu}`, id)
            limitAdd(serial)
        }
        break
        case prefix+'drakorongoing':{
                const disable = await getDB.cek_disable(message.from, `${prefix}darkorongoing`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            const ytvrz = await axios.get(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${lolkey}`)
           // console.log(ytvrz)
            let asu = `DRAKOR ON GOING`
            for (let i = 0; i < ytvrz.data.result.length; i++) {
          //      const { urlDownload } = result.story.itemlist[i]
            asu +=`

${ytvrz.data.result[i].title}
${ytvrz.data.result[i].link}
${ytvrz.data.result[i].thumbnail}
${ytvrz.data.result[i].year}
${ytvrz.data.result[i].total_episode}`
            } asu += `${mess.iklan}`
            await iluser.sendFile(from, `${ytvrz.data.result[0].thumbnail}`, '', `${asu}`, id)
            limitAdd(serial)
        }
        break
        case prefix+'bg':{
                const disable = await getDB.cek_disable(message.from, `${prefix}bg`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if(args.length == 1) return await iluser.reply(message.from, `Contoh: ${prefix}bg nature`, message.id)
            const ytvrz = await axios.get(`https://api.zeks.xyz/api/unsplash?apikey=apivinz&q=${encodeURIComponent(body.slice(4))}`)
            let asu = `${mess.iklann}`
            let data = ytvrz.data.result.slice(0, 7)
            for (let i = 0; i < data.length; i++) {
          //      const { urlDownload } = result.story.itemlist[i]
            await iluser.sendFileFromUrl(from, `${data[i].img_hd}`, '', `${asu}`, id)
            } limitAdd(serial)
           // await iluser.sendFile(from, `${ytvrz.data.result[0].thumbnail}`, '', `${asu}`, id)
        }
        break
        case prefix+'telesk':{
            const disable = await getDB.cek_disable(message.from, `${prefix}telesk`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
        if(isReg(obj)) return
        if (isLimit(serial)) return 
        if(args.length == 1) return await iluser.reply(message.from, `${prefix}telesk <link>`, message.id)
        //if (args[1].includes('t.me') != true || args[1].includes('telegram.com') != true) return await iluser.reply(message.from, `Pastikan link berasal dari telegram`, message.id)
        try {
        const ytvrz = await axios.get(`https://api.zeks.xyz/api/telegram-sticker?apikey=apivinz&url=${body.slice(8)}`)
        let data = ytvrz.data.result.slice(0, 5)
        if (!isPremium){
            reply('mengirim 5 stiker dari link tersebut')
            for (let i = 0; i < data.length; i++) {
            await iluser.sendStickerfromUrl(from, `${data[i]}`, { method: 'get' }, {author:'ilwan', pack:'By: iluserBOT', keepScale: true })
            }
        } else {
            reply(`mengirim ${ytvrz.data.result.length} stiker dari link tersebut`)
            for (let i = 0; i < ytvrz.data.result.length; i++) {
                await iluser.sendStickerfromUrl(from, `${ytvrz.data.result[i]}`, { method: 'get' }, {author:'ilwan', pack:'By: iluserBOT', keepScale: true })
                }
        }
        limitAdd(serial)
    }catch (error) {
        printError(error)
    }}
    break
        case prefix+'lirik2':
                const disable = await getDB.cek_disable(message.from, `${prefix}lirik2`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length == 1) return iluser.reply(from, 'judulnya mana', id)
            try {
                const liric = await axios.get(`https://some-random-api.ml/lyrics?title=${encodeURIComponent(body.slice(8))}`)
                await iluser.sendFileFromUrl(from, liric.data.thumbnail.genius, '', `*🎸*\n\n${liric.data.title}\n\n*🎵*\n\n${liric.data.lyrics} ${mess.iklan}`, id)
                limitAdd(serial)
                console.log(color('SUCCESS | lirik2', 'olive'))
            } catch (error) {
                await iluser.reply(from, 'ga nemu liriknya om', id)
                console.log(color('FAILED | lirik2', 'red'))
            }
            break
        case prefix+'downdata':
            if (isOwner){
        	iluser.sendFile(from, './lib/database/premium.json', 'premium.json', '', id)
            iluser.sendFile(from, './lib/database/user.json', 'user.json', '', id)
        	}
            break
        case prefix+'github':{
            const disable = await getDB.cek_disable(message.from, `${prefix}github`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            const input = body.slice(8)
            if (input.includes('/')) {
                const user = input.split('/')[0]
                const repo = input.split('/')[1]
                const res = await axios.get(`https://api.github.com/repos/${user}/${repo}`)
                const { full_name, html_url, description, open_issues, language } = res.data
                let text = `Name: ${full_name}\nDescription: ${description}\nLanguage: ${language}\nOpened Issues: ${open_issues}\nLink: ${html_url}`
                await iluser.reply(message.from, `${text} ${mess.iklan}`, message.id)
                console.log(color('SUCCESS | github info', 'olive'))
                limitAdd(serial)
            } else {
                const res = await axios.get(`https://api.github.com/users/${input}`)
                const { login, name, html_url, bio, followers, location } = res.data
                let text = `Name/Alias: ${login}\/${name}\nBio: ${bio}\nFollowers: ${followers}\nLocation: ${location}\nLink: ${html_url}`
                await iluser.reply(message.from, `${text} ${mess.iklan}`, message.id)
                console.log(color('SUCCESS | github info', 'olive'))
                limitAdd(serial)
            }
            }
            break
        
        case prefix+'resep':{
                const disable = await getDB.cek_disable(message.from, `${prefix}resep`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1)  return iluser.reply(message.from, `Contoh *${prefix}resep rawon*`, message.id)
            try {
            const crot = await axios.get(`https://mnazria.herokuapp.com/api/resep-search?text=`+body.slice(7))
            const resp = await axios.get(`https://mnazria.herokuapp.com/api/resep?key=${crot.data.results[0].key}`)
            const { desc,dificulty,ingredient,step,thumb,title,times} = resp.data.results
            for (let i = 0; i < ingredient.length; i++){

            }
            for (let i = 0; i < step.length; i++){

            }
            const rmk3 = `*${title}*

• *Deskripsi:* ${desc}
• *Tingkat kesulitan:* ${dificulty}
• *Waktu pengerjaan:* ${times}
• *Bahan:* ${ingredient[i]}
• *Cara:* ${step[i]}`
            iluser.sendFileFromUrl(message.from, `${thumb}`, 'iluser.jpg', `${rmk3} ${mess.iklan}`, message.id)
            console.log(color('SUCCESS | sending resep', 'olive'))
            limitAdd(serial)
            } catch (err) {
             await iluser.reply(message.from, 'Error!', message.id)
             console.log(color('FAILED | resep', 'red'))
             iluser.sendText(ownerNumber, 'Resep Error : ' + err)
           }
       }
           break
        
        //TEXT MENU
            case prefix+'puisi':{
                const disable = await getDB.cek_disable(message.from, `${prefix}puisi`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
                axios.get('https://masgi.herokuapp.com/api/puisi2')
                    .then(async (res) => await iluser.reply(message.from, res.data.data, message.id))
                    .catch(async (err) => {
                        console.log(color('FAILED | puisi', 'red'))
                        iluser.sendText(ownerNumber, `Error puisi:\n${err}`)
                        iluser.reply(message.from, 'Error', message.id)
                    })
                }
            break
            case prefix+'wattpad':{ //ILUSER
                const disable = await getDB.cek_disable(message.from, `${prefix}wattpad`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
            try {
                const q = body.slice(9)
                if (!q) return await iluser.reply(message.from, `Yang di cari apa tod?`, message.id)
                let search = await axios.get(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${lolkey}&query=${q}`)
                let anjay = `*WATTPAD SEARCH*\n\nGunakan *${prefix}wpread url* untuk membaca`
                for (let i = 0; i < search.data.result.length; i++) {
                anjay += `

*Judul:* ${search.data.result[i].title}
*Id:* ${search.data.result[i].id}
*Url:* ${search.data.result[i].url}
*part:* ${search.data.result[i].parts}
*author:* ${search.data.result[i].author.name}
*fullname:* ${search.data.result[i].author.fullname}`
                } anjay += ` ${mess.iklan}`
                await iluser.sendFileFromUrl(message.from, search.data.result[0].cover, 'watpad.jpg', `${anjay}`, id)
                }catch (err) { 
                console.log(err)
                iluser.reply(message.from, `Error bang`, message.id)
                }
                }
                break
            case prefix+'wpread':{//ILUSER
                const disable = await getDB.cek_disable(message.from, `${prefix}wpread`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
                const q = body.slice(8)
                const wattp = await axios.get(`https://api.lolhuman.xyz/api/wattpad?apikey=${lolkey}&url=${q}`)
                //const trasnlatennya = await translate(wattp.data.result.read_body, 'id') // KALO MAU AKTIFIN AUTO TRANSLATE
                await iluser.sendFileFromUrl(message.from, wattp.data.result.photo, '', `*WATTPAD READ*

• Judul : ${wattp.data.result.title}
• Penulis : ${wattp.data.result.author.username}
• Halaman Selanjutnya : ${wattp.data.result.nextpage}
• Isi : ${wattp.data.result.story} ${mess.iklan}`, message.id)
                    .then(() => console.log(color('SUCCESS | wattpad read', 'olive')))
                    .catch(async (err) => {
                        await iluser.reply(message.from, 'Error!', message.id)
                        iluser.sendText(ownerNumber, `error wattpad read:\n${err}`)
                        console.log(color('FAILED | wattpad read', 'red'))
                    })
                }
                break
            case prefix+'cerpen':{
                const disable = await getDB.cek_disable(message.from, `${prefix}cerpen`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                axios.get('https://masgi.herokuapp.com/api/cerpen')
                    .then(res => { iluser.reply(message.from, res.data.data, message.id)
                        console.log('SUCCESS | cerpen')
                        limitAdd(serial)
                    })
                    .catch(async (err) => {
                        console.log(color('FAILED | cerpen', 'red'))
                        iluser.sendText(ownerNumber, `Error cerpen: ${err}`)
                        iluser.reply(message.from, 'Error', message.id)
                    })
                }
                break
            case prefix+'creepyfact':{
                const disable = await getDB.cek_disable(message.from, `${prefix}creepyfact`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                fetch('https://raw.githubusercontent.com/TheSploit/CreepyFact/main/creepy.txt')
                    .then((res) => res.text())
                    .then(async (body) => {
                        let creepyx = body.split('\n')
                        let creepyz = creepyx[Math.floor(Math.random() * creepyx.length)]
                        await iluser.reply(message.from, creepyz, message.id)
                        console.log('SUCCESS | creepyfact')
                        limitAdd(serial)
                    })
                    .catch(async (err) => {
                        console.log(color('FAILED | creepyfact', 'red'))
                        iluser.sendText(ownerNumber, `Error creepyfact: ${err}`)
                        iluser.reply(message.from, 'Error', message.id)
                    })
                }
                break
        case prefix+'bacotadd':    {
                const disable = await getDB.cek_disable(message.from, `${prefix}bacotadd`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)  
            if(isReg(obj)) return  
                        if (args.length == 0) return iluser.reply(message.from, `Untuk add kata kata toxic ${prefix}bacotadd kata kata contoh\n.toxic add rafi ganteng`, message.id)
                        const toxic = body.slice(10)
                            taxax.push(toxic)
                            fs.writeFileSync('./lib/database/bacotdb.json', JSON.stringify(taxax))
                            iluser.reply(message.from, `Sukses Menambahkan *${toxic}* ke database ${mess.iklan}`, message.id)
                            console.log(color('SUCCESS | add bacot', 'olive'))
                        }
                        break
        case prefix+'bacot':               
        case prefix+'toxic':{
                const disable = await getDB.cek_disable(message.from, `${prefix}bacot`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)         
            if(isReg(obj)) return
                if (isLimit(serial)) return 
                limitAdd(serial)
                let bacotkun = bacot[Math.floor(Math.random() * bacot.length)]
                iluser.reply(message.from, bacotkun, message.id)     
                console.log(color('SUCCESS | bacot', 'olive'))  
                }       
                break
        case prefix+`renungan`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}renungan`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
                    if (isLimit(serial)) return 
                    const agggg = await get.get(`https://docs-jojo.herokuapp.com/api/renungan`).json()
                    try {
                        const {
                            Isi,
                            judul,
                            pesan
                        } = agggg
                        const rn = `• *Judul* : ${judul}\n• *Pesan* : ${pesan}\n• *Isi* : ${Isi}`
                        iluser.reply(message.from, rn, message.id)
                        console.log(color('SUCCESS | renungan', 'olive'))
                    limitAdd(serial)
                    } catch (err) {
                        iluser.reply(message.from, 'Error!', message.id)
                        console.log(color('FAILED | renungan', 'red'))
                        iluser.sendText(ownerNumber, 'error renungan: '+ err)
                    }
                }
                break
        case prefix+'pantun':{
            const disable = await getDB.cek_disable(message.from, `${prefix}pantun`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return         
                if (isLimit(serial)) return
                limitAdd(serial)
                fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt')
                .then(res => res.text())
                .then(body => {
                    let splitpantun = body.split('\n')
                    let randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)]
                    iluser.reply(message.from, randompantun.replace(/aruga-line/g,"\n"), message.id)
                })
                .catch(() => {
                    iluser.reply(message.from, 'Ada yang Error!', message.id)
                })
            }
            break
        case prefix+'bucin':{
            const disable = await getDB.cek_disable(message.from, `${prefix}bucin`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
             const bucin = await get.get('https://api-neraka.vercel.app/api/bucin').json()
             await iluser.reply(message.from, `${bucin.result.kata}`, message.id) 
             }      
             break
        case prefix+'katabijak':{
            const disable = await getDB.cek_disable(message.from, `${prefix}katabijak`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt')
            .then(res => res.text())
            .then(body => {
                let splitmotivasi = body.split('\n')
                let randommotivasi = splitmotivasi[Math.floor(Math.random() * splitmotivasi.length)]
                iluser.reply(message.from, randommotivasi, message.id)
            })
            .catch(() => {
                iluser.reply(message.from, 'Ada yang Error!', message.id)
            })
        }
        break
        case prefix+'motivasi': 
        case prefix+'motifasi': {
            const disable = await getDB.cek_disable(message.from, `${prefix}motivasi`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/motivasi/main/motivasi.txt')
            .then(res => res.text())
            .then(body => {
                let splitmotivasi = body.split('\n')
                let randommotivasi = splitmotivasi[Math.floor(Math.random() * splitmotivasi.length)]
                iluser.reply(message.from, randommotivasi, message.id)
            })
            .catch(() => {
                iluser.reply(message.from, 'Ada yang Error!', message.id)
            })
        }
            break
        case prefix+'kata-senja':
        case prefix+'katasenja':{
            const disable = await getDB.cek_disable(message.from, `${prefix}katasenja`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/katasenja/main/senja.txt')
            .then(res => res.text())
            .then(body => {
                let senja = body.split('\n')
                let randomsenja = senja[Math.floor(Math.random() * senja.length)]
                iluser.reply(message.from, randomsenja, message.id)
            })
            .catch(() => {
                iluser.reply(message.from, 'Ada yang Error!', message.id)
            })
        }
        break
        case prefix+'kata-fiersa':
        case prefix+'fiersa': 
        case prefix+'katafiersa':{
            const disable = await getDB.cek_disable(message.from, `${prefix}katafiersa`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
                fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/Fiersa-Besari/main/fiersa-besari.txt')
            .then(res => res.text())
            .then(body => {
                let ff = body.split('\n')
                let randomff = ff[Math.floor(Math.random() * ff.length)]
                iluser.reply(message.from, randomff, message.id)
            })
            .catch(() => {
                iluser.reply(message.from, 'Ada yang Error!', message.id)
            })
        }
        break
        case prefix+`alay`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}alay`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    if (quotedMsg) {
                        const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                        const skyaaaras = await get.get('https://api.terhambar.com/bpk?kata=' + quoteText).json()
                        iluser.reply(message.from, skyaaaras.text, message.id)
                        console.log(color('SUCCESS | text alay', 'olive'))
                    } else {
                        const daasdas = body.slice(6)
                        const skyaaaras = await get.get('https://api.terhambar.com/bpk?kata=' + daasdas).json()
                        iluser.reply(message.from, skyaaaras.text, message.id)
                        console.log(color('SUCCESS | text alay', 'olive'))
                    }
                }
                break
                case prefix+'lirik':
                case prefix+'lyric': {
                    if (args.length === 1) return reply(`Untuk mencari lirik dengan nama lagu atau potongan lirik\nketik: ${prefix}lirik <query>\nContoh: ${prefix}lirik lathi`)
                    const lagu = body.slice(7)
                    let res = await lyric(lagu).catch(e => { return printError(e) })
                    if (res == null) return reply(`Lirik tidak ditemukan.`)
                    await reply(res)
                    break
                }
        // case prefix+'lirik':{
        //     const disable = await getDB.cek_disable(message.from, `${prefix}lirik`);
        //     if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
        //     if(isReg(obj)) return
        //     if (isLimit(serial)) return 
        //     limitAdd(serial)
        //     if (args.length == 1) return iluser.reply(message.from, `ontoh ${prefix}lirik aku bukan boneka`, message.id)
        //     const lagu = body.slice(7)
        //     const lirik = await liriklagu(lagu)
        //     iluser.reply(message.from, `${lirik} ${mess.iklan}`, message.id)
        // }
        break
        case prefix+'chord':{
            const disable = await getDB.cek_disable(message.from, `${prefix}chord`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `ontoh ${prefix}chord aku bukan boneka`, message.id)
            const query__ = body.slice(7)
            const chord = await axios.get('http://docs-jojo.herokuapp.com/api/chord?q='+ query__)
            if (chord.data.error) return iluser.reply(message.from, chord.data.error, message.id)
            iluser.reply(message.from, `${chord.data.result} ${mess.iklan}`, message.id)
        }
        break
        case prefix+'zodiak':{
            const disable = await getDB.cek_disable(message.from, `${prefix}zodiak`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isBlocked) return await iluser.reply(message.from, mess.blockk, message.id)
            if(args.length == 1) return await iluser.reply(message.from, 'Tidak boleh kosong', message.id);
            if (isLimit(serial)) return 
            limitAdd(serial)
            if(args[1]=='aries' || args[1]=='gemini' || args[1]=='leo' || args[1]=='libra' || args[1]=='sagitarius' || args[1]=='aquarius' || 
            args[1]=='taurus' || args[1]=='cancer' || args[1]=='virgo' || args[1]=='scorpio' || args[1]=='capricorn' || 
            args[1]=='pisces') {
                const zodiak = await ZODIAK.getZodiakToday(args[1])
                return await iluser.reply(message.from, `Zodiak ${args[1].toUpperCase()} Hari ini.\n
Umum :
${zodiak.umum}

Love :
${zodiak.love.replace('Couple', 'Couple')}

Keuangan :
${zodiak.keuangan} ${mess.iklan}`, message.id); 
            console.log('SUCCESS | zodiak')
            }
            await iluser.reply(message.from, `Kode: Tidak ditemukan!`, message.id)
            console.log('FAILED | zodiak')
        }
        break

        //IMAGE MENU
        case prefix+'toimg':{
            const disable = await getDB.cek_disable(message.from, `${prefix}toimg`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (quotedMsg && quotedMsg.type == 'sticker') {
                if (isLimit(serial)) return 
                limitAdd(serial)
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await iluser.sendFile(message.from, imageBase64, 'imagesticker.jpg', `${mess.iklann}`, message.id)
            } else if (!quotedMsg) return iluser.reply(message.from, `Tag stikernya synk`, message.id)
            }
            break
        case prefix+'textmaker':  {
            const disable = await getDB.cek_disable(message.from, `${prefix}textmaker`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)       
            if(isReg(obj)) return         
            if (isLimit(serial)) return
                if (args.length === 1) return iluser.sendFile(message.from, './media/img/contoh.jpg', 'Tutor.jpg', 'Neh contoh mhank!', message.id)
                argz = body.trim().split('|')
                if ((isMedia || isQuotedImage) && argz.length >= 2) {
                    const top = argz[1]
                    const bott = argz[2]
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const getUrl = await uploadImages(mediaData, false)
                    const ImageBase64 = await custom(getUrl, top, bott)
                    await iluser.sendFile(message.from, ImageBase64, 'image.png',`Jadi brooh ${mess.iklan}`)
                    limitAdd(serial)
            }else {                 
                await iluser.sendFile(message.from, './media/img/contoh.jpg', 'Tutor.jpg', 'Neh contoh mhank!', message.id)
                }
            }
            break
        case prefix+'gambar':{
            const disable = await getDB.cek_disable(message.from, `${prefix}gambar`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            const imageToBase64abc = require('image-to-base64')
            const ptrsq = body.slice(8)
            var urlwall = "https://fdciabdul.tech/api/pinterest/?keyword=" + ptrsq;
            axios.get(urlwall)
            .then((result) => {
            var awalla = JSON.parse(JSON.stringify(result.data));
            var awallb =  awalla[Math.floor(Math.random() * awalla.length)];
            imageToBase64abc(awallb)
            .then(
                (response) => {
            let gember = 'data:image/jpeg;base64,'+response
            iluser.sendFile(message.from, gember, "iluser.jpg", `${mess.iklann}`, message.id)
            limitAdd(serial)
                    }) 
                .catch(
                    (error) => {
                        console.log(color('FAILED | gambar', 'red'))
                        iluser.sendText(ownerNumber, `Gambar:\n${error}`)
                        iluser.reply(message.from, 'data tidak ditemukan.', message.id)
                    })
            })
        }
            break
        case prefix+'googleimage':{
            const disable = await getDB.cek_disable(message.from, `${prefix}googleimage`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            argz = body.trim().split('|')
            if (argz.length >= 2) {
            const qwery = argz[1]
            const jum = argz[2]
            if(!qwery) return await iluser.reply(message.from, `Contoh = ${prefix}googleimage |loli|3`, message.id)
            if(!jum) return await iluser.reply(message.from, `Jumlah gambar diperlukan, contoh = ${prefix}googleimage |loli|3`, message.id)
            if(jum >= 8) return await iluser.reply(message.from, 'Jangan serakah tolol. maks 7', message.id)
            var gis = require('g-i-s');
            var opts = {
                searchTerm: qwery
                };
                gis(opts, logResults);
                    
                function logResults(error, results) {
                    if (error) {
                        iluser.reply(message.from, 'Maaf, Fitur Sedang Error', message.id)
                        console.log('FAILED | googleimage')
                    } else {
                        const item = results.slice(0, jum)
                        item.forEach(async(res) => {
                        const yurl = await urlShortener(res.url)
                        iluser.sendImage(message.from, res.url, null, `• Link : ${yurl}\n• Image size : ${res.height} x ${res.width} ${mess.iklan}`, message.id) 
                        })
                    }
                    console.log('SUCCESS | googleimage')
                    limitAdd(serial)
                }
            }
        }
        break
        case `${prefix}addcmd`:{
            if (!isOwner) return 
            //await sleep(2000)
            const asup = body.slice(8)
            switch_command.push(asup)
            fs.writeFileSync('./command.json', JSON.stringify(switch_command))
            await sleep(1000)
            iluser.reply(message.from, `Command *${asup}* added to list disable.`, message.id)
        }
        break
        case prefix+`listcmd`:{
            let vn = `Daftar command yang bisa di disable/enable\n`
                for (let i of switch_command) {
                    vn += `• ${i}\n`
                }
                await iluser.reply(message.from, vn, message.id)
                console.log(color('SUCCESS | list command', 'olive'))
            }
            break
        case prefix+'disable':{
            const menu = body.slice(9);
            const list = (switch_command)
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            try {
                if (list.includes(menu) == true) {
                  await getDB.disable(message.from, menu);
                  iluser.reply(message.from, `Fitur *${menu}* telah dinonaktifkan`, message.id);
                  console.log(`SUCCESS | fitur di disable`);
                } else {
                  iluser.reply(message.from, `${menu} tidak tersedia`, message.id);
                  console.log(`FAILED | menu disable tidak ada`);
                }      
                }catch (err) {
                iluser.reply(message.from, 'Error!', message.id)
                console.log(color('FAILED | Disable error', 'red'))
                iluser.sendText(ownerNumber, `Disable error:\n${err}`)
              }
          }
          break
        case prefix+'enable':{
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            const menu = body.slice(8);
            const list = (switch_command)
            //[`${prefix}join`,`${prefix}brainly`,`${prefix}nulis`,`${prefix}nulis2`,`${prefix}nulis3`,`${prefix}wiki`,`${prefix}kbbi`,`${prefix}translate`,`${prefix}tr`,`${prefix}google`,`${prefix}totext`,`${prefix}hitung`,`${prefix}playstore`,`${prefix}apkpure`,`${prefix}shopee`,`${prefix}newstickerline`,`${prefix}ytsearch`,`${prefix}spek`,`${prefix}motor`,`${prefix}mobil`,`${prefix}alamat`,`${prefix}resep`,`${prefix}checkip`,`${prefix}checkip2`,`${prefix}jarak`,`${prefix}heroml`,`${prefix}jadwalbola`,`${prefix}waktu`,`${prefix}news`,`${prefix}covidindo`,`${prefix}covid`,`${prefix}infonomor`,`${prefix}resi`,`${prefix}kurs`,`${prefix}ceklokasi`,`${prefix}quran`,`${prefix}jadwalshalat`,`${prefix}tafsir`,`${prefix}infosurah`,`${prefix}listsurah`,`${prefix}stiker`,`${prefix}sfire`,`${prefix}slight`,`${prefix}ttp`,`${prefix}attp`,`${prefix}ttp2`,`${prefix}ttg`,`${prefix}memestiker`,`${prefix}findsticker`,`${prefix}sline`,`${prefix}video`,`${prefix}getvideo`,`${prefix}music`,`${prefix}getmusik`,`${prefix}asupan`,`${prefix}yt`,`${prefix}ytmp3`,`${prefix}lagu`,`${prefix}joox`,`${prefix}ig`,`${prefix}ig2`,`${prefix}tw`,`${prefix}tw2`,`${prefix}pin`,`${prefix}fb`,`${prefix}fb2`,`${prefix}tiktok`,`${prefix}tt`,`${prefix}smule`,`${prefix}starmaker`,`${prefix}igstory`,`${prefix}tomp3`,`${prefix}bass`,`${prefix}distord`,`${prefix}tts`,`${prefix}setvn`,`${prefix}v`,`${prefix}listvn`,`${prefix}wattpad`,`${prefix}wpread`,`${prefix}cerpen`,`${prefix}puisi`,`${prefix}kebalik`,`${prefix}creepyfact`,`${prefix}fakta`,`${prefix}cersex`,`${prefix}bacot`,`${prefix}bacotadd`,`${prefix}renungan`,`${prefix}pantun`,`${prefix}bucin`,`${prefix}katabijak`,`${prefix}katasenja`,`${prefix}katafiersa`,`${prefix}quotes`,`${prefix}hilih`,`${prefix}alay`,`${prefix}chord`,`${prefix}lirik`,`${prefix}zodiak`,`${prefix}zodiak2`,`${prefix}wall`,`${prefix}toimg`,`${prefix}textmaker`,`${prefix}gambar`,`${prefix}googleimage`,`${prefix}twtstalk`,`${prefix}tiktokstalk`,`${prefix}igstalk`,`${prefix}smulestalk`,`${prefix}phcomment`,`${prefix}quotemaker`,`${prefix}quoteit`,`${prefix}maps`,`${prefix}pokemon`,`${prefix}kucing`,`${prefix}anjing`,`${prefix}memeindo`,`${prefix}meme`,`${prefix}qrcode`,`${prefix}dadu`,`${prefix}koin`,`${prefix}cewe`,`${prefix}cowo`,`${prefix}ptlvid`,`${prefix}infogempa`,`${prefix}ssphone`,`${prefix}sspc`,`${prefix}springflow`,`${prefix}watersplash`,`${prefix}cloudy`,`${prefix}sketch`,`${prefix}threats`,`${prefix}glass`,`${prefix}greyscale`,`${prefix}invert`,`${prefix}invertgrey`,`${prefix}brightness`,`${prefix}sepia`,`${prefix}burik`,`${prefix}blurfry`,`${prefix}magik`,`${prefix}captcha`,`${prefix}kpop`,`${prefix}kue`,`${prefix}chalktext`,`${prefix}wooden-sign`,`${prefix}salju`,`${prefix}bioskop`,`${prefix}kalung`,`${prefix}gelang`,`${prefix}beach-sign`,`${prefix}bordir2`,`${prefix}blood2`,`${prefix}window`,`${prefix}snow-sign`,`${prefix}kapal`,`${prefix}pesawat`,`${prefix}jalan`,`${prefix}einstein`,`${prefix}lipstick`,`${prefix}typewriter`,`${prefix}graffiti`,`${prefix}graffiti2`,`${prefix}graffiti3`,`${prefix}tahta`,`${prefix}goreng`,`${prefix}carbon`,`${prefix}neon-sign`,`${prefix}karat`,`${prefix}kayu`,`${prefix}tato`,`${prefix}embun`,`${prefix}trumptwt`,`${prefix}silktext`,`${prefix}mymind`,`${prefix}coffee`,`${prefix}ukir`,`${prefix}smoketext`,`${prefix}kanna`,`${prefix}sarah`,`${prefix}resend`,`${prefix}film`,`${prefix}kadargay`,`${prefix}aiquote`,`${prefix}subreddit`,`${prefix}artinama`,`${prefix}pasangan`,`${prefix}nomorhoki`,`${prefix}shorturl`,`${prefix}readmore`,`${prefix}imgcompress`,`${prefix}nickepep`,`${prefix}wasted`,`${prefix}gdrive`,`${prefix}kiss`,`${prefix}jail`,`${prefix}wame`,`${prefix}imgtourl`,`${prefix}tod`,`${prefix}truth`,`${prefix}dare`,`${prefix}family100`,`${prefix}caklontong`,`${prefix}tebakgambar`,`${prefix}apakah`,`${prefix}bisakah`,`${prefix}nilai`,`${prefix}kapankah`,`${prefix}trash`,`${prefix}hitler`,`${prefix}babi`,`${prefix}ganteng`,`${prefix}cantik`,`${prefix}getpp`,`${prefix}getsts`,`${prefix}slap`,`${prefix}hug`,`${prefix}pat`,`${prefix}groupinfo`,`${prefix}nhder`,`${prefix}randomkiss`,`${prefix}randomhug`,`${prefix}randomcry`,`${prefix}fetish`,`${prefix}husbu`,`${prefix}randomnekonime`,`${prefix}randomanime`,`${prefix}lewds`,`${prefix}loli`,`${prefix}malanime`,`${prefix}wallanime`,`${prefix}wait`,`${prefix}wait`,`${prefix}waifu`,`${prefix}xnxx`,`${prefix}hehe`,`${prefix}randomblowjob`,`${prefix}xxx`,`${prefix}getxxx`,`${prefix}xvideos`,`${prefix}getxvideos`];
            try {
                if (list.includes(menu) == true) {
                  await getDB.enable(message.from, menu)
                  iluser.reply(message.from, `Fitur *${menu}* telah diaktifkan`, message.id);
                  console.log(color(`SUCCESS | fitur di enable`, 'olive'));
                } else {
                  iluser.reply(message.from, `${menu} tidak tersedia`, message.id);
                  console.log(color(`FAILED | menu disable tidak ada`, 'red'));
                }
            } catch (err) {
            iluser.reply(message.from, 'Error!', message.id)
            console.log(color('FAILED | Enable error', 'red'))
            iluser.sendText(ownerNumber, `Disable error:\n${err}`)
            }
          }
          break
        case `${prefix}resend`:{
                const disable = await getDB.cek_disable(message.from, `${prefix}resend`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if (quotedMsgObj) {
                    let encryptMedia
                    let replyOnReply = await iluser.getMessageById(quotedMsgObj.id)
                    let obj = replyOnReply.quotedMsgObj
                    if (/ptt|audio|video|image|document|sticker/.test(quotedMsgObj.type)) {
                        encryptMedia = quotedMsgObj
                        if (encryptMedia.animated) encryptMedia.mimetype = ''
                    } else if (obj && /ptt|audio|video|image/.test(obj.type)) {
                        encryptMedia = obj
                    } else return
                    const _mimetype = encryptMedia.mimetype
                    const mediaData = await decryptMedia(encryptMedia)
                    await iluser.sendFile(message.from, `data:${_mimetype};base64,${mediaData.toString('base64')}`, 'file', ':)', encryptMedia.id, message.id)
                    console.log(color('SUCCESS | resend media', 'olive'))
                } else iluser.reply(message.from, `reply dong tolol, media yang mau di resend`, message.id)
                }
                break

        case prefix+'addpilot': 
            if (!isOwner) return
            for (let i = 0; i < mentionedJidList.length; i++) {
                        pilot.push(mentionedJidList[i])
                        fs.writeFileSync('./lib/database/pilot.json', JSON.stringify(pilot))
                        await iluser.sendTextWithMentions(message.from, `Sukses menjadikan ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')} sebagai pilot bot`, message.id)
                        console.log(color(`SUCCESS | add pilot`, 'olive'))
            }
            break
        case prefix+'delpilot': 
            if (!isOwner) return
                let inqa = pilot.indexOf(mentionedJidList[0])
                    pilot.splice(inqa, 1)
                    fs.writeFileSync('./lib/database/pilot.json', JSON.stringify(pilot))
                    await iluser.sendTextWithMentions(message.from, `Sukses nebghapus ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')} dari daftar pilot bot`, message.id)
                    console.log(color(`SUCCESS | delete pilot`, 'olive'))
            break
        case prefix+'tes':   
            await iluser.reply(message.from, message.from, message.id)
            break

        case `${prefix}'phdl`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}phdl`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
                if (isGroupMsg) {
                    if (!isPremium) return await iluser.reply(message.from, mess.nopremium, message.id)
                    if (!isUrl(url) && !url.includes('pornhub.com')) return await iluser.reply(message.from, `Format salah`, message.id)
                    //await iluser.reply(message.from, mess.wait, message.id)
                    try {
                        nsfw.phDl(url)
                            .then(async ({ title, download_urls, thumbnail_url }) => {
                                const count = Object.keys(download_urls).length
                                if (count !== 2) {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    const shortsMid = await misc.shortener(download_urls['480P'])
                                    const shortsHigh = await misc.shortener(download_urls['720P'])
                                    await iluser.sendFileFromUrl(message.from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)\n${shortsMid} (480P)\n${shortsHigh} (720P)`, message.id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                } else {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    await iluser.sendFileFromUrl(message.from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)`, message.id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                }
                            })
                    } catch (err) {
                        console.log(color('FAILED | pornhub downloader', 'red'))
                        iluser.sendText(ownerNumber, `Error pornhub downloader: ${err}`)
                        iluser.reply(message.from, 'Error', message.id)
                    }
                } else {
                    if (!isUrl(url) && !url.includes('pornhub.com')) return await iluser.reply(message.from, `Format Salah`, message.id)
                    //await iluser.reply(message.from, mess.wait, message.id)
                    try {
                        nsfw.phDl(url)
                            .then(async ({ title, download_urls, thumbnail_url }) => {
                                const count = Object.keys(download_urls).length
                                if (count !== 2) {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    const shortsMid = await misc.shortener(download_urls['480P'])
                                    const shortsHigh = await misc.shortener(download_urls['720P'])
                                    await iluser.sendFileFromUrl(message.from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)\n${shortsMid} (480P)\n${shortsHigh} (720P)`, message.id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                } else {
                                    const shortsLow = await misc.shortener(download_urls['240P'])
                                    await iluser.sendFileFromUrl(message.from, thumbnail_url, `${title}`, `Title: ${title}\n\nLinks:\n${shortsLow} (240P)`, message.id)
                                        .then(() => console.log('Success sending pornhub metadata!'))
                                }
                            })
                    } catch (err) {
                        console.log(color('FAILED | pornhub downloader', 'red'))
                        iluser.sendText(ownerNumber, `Error pornhub downloader: ${err}`)
                        iluser.reply(message.from, 'Error', message.id)
                    }
                }
            }
            break
        
        case `${prefix}prem`:
                    if (isOwner) {
                    if (mentionedJidList.length == 1) {
                        for (let benet of mentionedJidList) {
                            if (benet === botNumber) return await iluser.reply(message.from, `Format salah`, message.id)
                            premium.addPremiumUser(benet, args[2], _premium)
                            await iluser.sendTextWithMentions(message.from, `\t*PREMIUM UPGRADE*\n
*User*: @${benet}
*Expired*: ${ms(toMs(args[2])).days} hari, ${ms(toMs(args[2])).hours} jam, ${ms(toMs(args[2])).minutes} menit`, message.id)
                            console.log(color('SUCCESS | premium upgrade', 'olive'))
                        }
                    } else {
                        premium.addPremiumUser(args[1] + '@c.us', args[2], _premium)
                        await iluser.sendTextWithMentions(message.from, `\t*PREMIUM UPGRADE*\n
*User*: @${args[1]}@c.us
*Expired*: ${ms(toMs(args[2])).days} hari, ${ms(toMs(args[2])).hours} jam, ${ms(toMs(args[2])).minutes} menit`, message.id)
                        console.log(color('SUCCESS | premium upgrade', 'olive'))
                    }
                }
                    break

                case `${prefix}delprem`:
                    if (!isOwner) return 
                    if (mentionedJidList.length == 1) {
                        if (mentionedJidList[1] === botNumber) return await iluser.reply(message.from, `Format salah bang!`, message.id)
                        _premium.splice(premium.getPremiumPosition(mentionedJidList[0], _premium), 1)
                        fs.writeFileSync('./lib/database/premium.json', JSON.stringify(_premium))
                        await iluser.sendTextWithMentions(message.from, `@${mentionedJidList[0]} deleted from database premium!`, message.id)
                    } else {
                        _premium.splice(premium.getPremiumPosition(args[0] + '@c.us', _premium), 1)
                        fs.writeFileSync('./lib/database/premium.json', JSON.stringify(_premium))
                        await iluser.reply(message.from, `Sukses menghapus user premium`, message.id)
                    }
                    break

            case prefix+'premiumcheck':
            case prefix+'cekpremium':
                if (!isPremium) return await iluser.reply(message.from, `Kamu bukan user premium\nSilahkan cek limit kamu di ${prefix}limit`, message.id)
                const cekExp = ms(premium.getPremiumExpired(sender.id, _premium) - Date.now())
                await iluser.sendTextWithMentions(message.from, `\t*PREMIUM EXPIRE*\n
*User*: @${sender.id}
*Masa Aktif*: ${cekExp.days} hari, ${cekExp.hours} jam, ${cekExp.minutes} menit`, message.id)
            break

            case prefix+'premiumlist':
            case prefix+'listpremium':
            if (isOwner){
                let listPremi = '*PREMIUM USER LIST*\n\n'
                let nomorList = 0
                const deret = premium.getAllPremiumUser(_premium)
                const arrayPremi = []
                for (let i = 0; i < deret.length; i++) {
                    const checkExp = ms(premium.getPremiumExpired(deret[i], _premium) - Date.now())
                    arrayPremi.push(await iluser.getContact(premium.getAllPremiumUser(_premium)[i]))
                    nomorList++
                    listPremi += `${nomorList}. *User* @${premium.getAllPremiumUser(_premium)[i].replace(/@c.us/g, '')}
*Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
                }
                await iluser.sendTextWithMentions(message.from, listPremi, message.id)
                console.log(color('SUCCESS | list premium', 'olive'))
            }
            break 
        case prefix+'gift':
        case prefix+'giftlimit':
            if(isReg(obj)) return
            if (!isOwner) return iluser.reply(message.from, 'Maaf kurang ganteng', message.id)
            if (!isPremium) return iluser.reply(message.from, mess.nopremium, message.id)
                    const nomerr = arg.split(' ')[0]
                    const jmla = arg.split(' ')[1]
                    if(!nomerr) return iluser.reply(message.from, `Contoh : ${prefix}gift @tag_user 15`, message.id)
                    let textaa = nomerr.replace(/[-\s+@c.us]/g,'')
                    const cusz = textaa + '@c.us'
                    if(!jmla) return iluser.reply(message.from, `Masukkan Jumlah gift limit, ${prefix}gift [ @tagmember Jumlah ]\n=> Contoh : ${prefix}gift @62813118507151 15`, message.id)
                    if(jmla > 15) return await iluser.reply(message.from, `Maximal  20!`, message.id)
                        var found = false
                        Object.keys(limit).forEach((i) => {
                            if(limit[i].id == cusz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            limit[found].limit = Math.max(0, limit[found].limit);
                            if(limit[found].limit <= 15) return iluser.reply(message.from, `Kuota Limit pada nomor tersebut masih penuh\nUntuk gift pastikan kuota limit target sudah habis`, message.id)
                            if(limit[found].limit <= 0) { // JIKA LIMIT 0 MAKA BISA GIFT
                                return iluser.reply(message.from, `Kuota limit pada nomor tersebut masih ada`, message.id)
                            }else{
                            limit[found].limit -= jmla
                            const updated = limit[found]
                            const result = `Gift kuota limit sukses dengan SN: ${SN} pada ${moment().format('DD/MM/YY HH:mm:ss')}
GIFT KUOTA LIMIT*
• User : @${updated.id.replace('@c.us','')}
• Limit: ${limitCount-updated.limit}`
                            console.log(limit[found])
                            fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                            iluser.sendTextWithMentions(message.from, result)
                            }
                        } else {
                                iluser.reply(message.from, `Nomor tersebut tidak terdaftar di database!`, message.id)
                        }
                break
        case prefix+'mediafire':{
            const disable = await getDB.cek_disable(message.from, `${prefix}mediafire`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
            const mfire = body.slice(11)
            const firem = await axios.get(`https://docs-jojo.herokuapp.com/api/mediafire?url=${mfire}`)
            iluser.reply(message.from, ` Filename : ${firem.data.filename}\n Deskripsi : ${firem.data.desc}\n Filetype : ${firem.data.filetype}\n Filesize : ${firem.data.filesize}\n diupload pada : ${firem.data.uploaded}`, message.id)
            iluser.sendFileFromUrl(message.from, firem.data.url, firem.data.filename, ' ', 'nih kak', message.id)
            console.log(color('SUCCESS | mediafire', 'olive'))
            }
            break
        case prefix+'gdrive':{
            const disable = await getDB.cek_disable(message.from, `${prefix}gdrive`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
            iluser.reply(message.from, `*Filename:* ${file_name}\n*Download Link:* ${download_link}\n*Direct Download:* ${direct_download} ${mess.iklan}`, message.id)
         //   iluser.sendFileFromUrl(message.from, firem.data.url, firem.data.filename, ' ', 'nih kak', message.id)
            console.log(color('SUCCESS | google drive bypass', 'olive'))
            }
            break

        case 'assalamualaikum':
        case 'assalamu\'alaikum':
        case 'assalamuallaikum': 
        case 'assalamualikum':    
        case 'assallamualaikum': 
        case 'asalamuallaikum':    
        case 'asalamualaikum':  
        case 'assalammualaikum': 
            if ( isGroupMsg ) return iluser.reply(message.from, `Waalaikumsalam wr.wb *${pushname}* 🙂 \nKetik ${prefix}menu untuk melihat fitur bot`, message.id);
      break
        case 'samlekom':
        case 'samlkom':
        case 'samlekum':
        case 'salamlekom':
        case 'salikum':
        case 'samlikum':
      return iluser.reply(message.from, `Salam macam apa ini anjing`, message.id)
      break;
        case 'shalom':
        case 'salom':
        case 'shallom':
        case 'syaloom':
        case 'saloom':
        case 'syalom':
        case 'shaloom':
        case 'syalloom':
            if ( isGroupMsg ) return iluser.reply(message.from, `_Shallom *${undefined, pushname}*_ 🙂 \nKetik ${prefix}menu untuk melihat fitur bot`, message.id);
      break  
        case prf+'help':
        case prf+'menu':
        case prf+'bot':
        case prf+'command':{
            if( isGroupMsg )return iluser.reply(message.from, `Yang *${undefined, pushname}* maksud mungkin ${prefix}menu 🙂`, message.id);
      break
        }
        case prefix+'threats':{
            const disable = await getDB.cek_disable(message.from, `${prefix}threats`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                
                limitAdd(serial)
                if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMediatt = isQuotedImage ? quotedMsg : message
                const dataPotott = await decryptMedia(encryptMediatt, uaOverride)
                const fotottNya = await uploadImages(dataPotott, `fotoProfiltt.${sender.id}`)
                await iluser.sendFileFromUrl(message.from, `https://nekobot.xyz/api/imagegen?type=threats&url=${fotottNya}&raw=1`, 'iluserBOT.jpg', `${mess.iklann}`, message.id)
                .then(() => console.log(color('SUCCESS | threats image', 'olive')))
                .catch(async (err) => {
                    await iluser.reply(message.from, 'Error!', message.id)
                    console.log(color('FAILED | threats image', 'red'))
                    iluser.sendText(ownerNumber, 'Error threats image:\n' + err)
                })
            } else {
                await iluser.reply(message.from, 'Format Salah!', message.id)
            }
        }
        break
        case prefix+'glass':{
            const disable = await getDB.cek_disable(message.from, `${prefix}glass`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                
                limitAdd(serial)
                if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMediagl = isQuotedImage ? quotedMsg : message
                const dataPotogl = await decryptMedia(encryptMediagl, uaOverride)
                const fotoglNya = await uploadImages(dataPotogl, `fotoProfilgl.${sender.id}`)
                await iluser.sendFileFromUrl(message.from, `https://some-random-api.ml/canvas/glass?avatar=${fotoglNya}`, 'iluserBOT.jpg', `${mess.iklann}`, message.id)
                .then(() => console.log(color('SUCCESS | glass image', 'olive')))
                .catch(async (err) => {
                    await iluser.reply(message.from, 'Error!', message.id)
                    console.log(color('FAILED | glass image', 'red'))
                    iluser.sendText(ownerNumber, 'Error glass image:\n' + err)
                })
            } else {
                await iluser.reply(message.from, 'Format Salah!', message.id)
            }
        }
        break
        case prefix+'greyscale':{
            const disable = await getDB.cek_disable(message.from, `${prefix}greyscale`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                
                limitAdd(serial)
                if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMediags = isQuotedImage ? quotedMsg : message
                const dataPotogs = await decryptMedia(encryptMediags, uaOverride)
                const fotogsNya = await uploadImages(dataPotogs, `fotoProfilgs ${sender.id}`)
                await iluser.sendFileFromUrl(message.from, `https://some-random-api.ml/canvas/greyscale?avatar=${fotogsNya}`, 'iluserBOT.jpg', `${mess.iklann}`, message.id)
                .then(() => console.log(color('SUCCESS | greyscale image', 'olive')))
                .catch(async (err) => {
                    await iluser.reply(message.from, 'Error!', message.id)
                    console.log(color('FAILED | greyscale image', 'red'))
                    iluser.sendText(ownerNumber, 'Error greyscale:\n' + err)
                })
            } else {
                await iluser.reply(message.from, 'Format Salah!', message.id)
            }
        }
            break
        case prefix+'invert':{
                const disable = await getDB.cek_disable(message.from, `${prefix}invert`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return
                limitAdd(serial)
                if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMediaiv = isQuotedImage ? quotedMsg : message
                const dataPotoiv = await decryptMedia(encryptMediaiv, uaOverride)
                const fotoivNya = await uploadImages(dataPotoiv, `fotoProfiliv.${sender.id}`)
                await iluser.sendFileFromUrl(message.from, `https://some-random-api.ml/canvas/invert?avatar=${fotoivNya}`, 'iluserBOT.jpg', `${mess.iklann}`, message.id)
                .then(() => console.log(color('SUCCESS | invert image', 'olive')))
                .catch(async (err) => {
                    await iluser.reply(message.from, 'Error!', message.id)
                    console.log(color('FAILED | invert image', 'red'))
                    iluser.sendText(ownerNumber, 'Error invert image:\n' + err)
                })
            } else {
                await iluser.reply(message.from, 'Format Salah!', message.id)
            }
        }
        break
        case prefix+'invertgrey':{
                const disable = await getDB.cek_disable(message.from, `${prefix}invertgrey`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return
                limitAdd(serial)
                if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMediaig = isQuotedImage ? quotedMsg : message
                const dataPotoig = await decryptMedia(encryptMediaig, uaOverride)
                const fotoigNya = await uploadImages(dataPotoig, `fotoProfilig.${sender.id}`)
                await iluser.sendFileFromUrl(message.from, `https://some-random-api.ml/canvas/invertgreyscale?avatar=${fotoigNya}`, 'iluserBOT.jpg', `${mess.iklann}`, message.id)
                .then(() => console.log(color('SUCCESS | invertgrey image', 'olive')))
                .catch(async (err) => {
                    await iluser.reply(message.from, 'Error!', message.id)
                    console.log(color('FAILED | invertgrey image', 'red'))
                    iluser.sendText(ownerNumber, 'Error invertgrey image:\n' + err)
                })
            } else {
                await iluser.reply(message.from, 'Format Salah!', message.id)
            }
        }
        break
        case prefix+'brightness':{
                const disable = await getDB.cek_disable(message.from, `${prefix}brightness`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                
                limitAdd(serial)
                if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMediabn = isQuotedImage ? quotedMsg : message
                const dataPotobn = await decryptMedia(encryptMediabn, uaOverride)
                const fotobnNya = await uploadImages(dataPotobn, `fotoProfilbn.${sender.id}`)
                await iluser.sendFileFromUrl(message.from, `https://some-random-api.ml/canvas/brightness?avatar=${fotobnNya}`, 'iluserBOT.jpg', `${mess.iklann}`, message.id)
                .then(() => console.log(color('SUCCESS | brightness image', 'olive')))
                .catch(async (err) => {
                    await iluser.reply(message.from, 'Error!', message.id)
                    console.log(color('FAILED | brightness image', 'red'))
                    iluser.sendText(ownerNumber, 'Error brightness image:\n' + err)
                })
            } else {
                await iluser.reply(message.from, 'Format Salah!', message.id)
            }
        }
            break
        case prefix+'threshold':{
                const disable = await getDB.cek_disable(message.from, `${prefix}threshold`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return
                limitAdd(serial)
                if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMediath = isQuotedImage ? quotedMsg : message
                const dataPototh = await decryptMedia(encryptMediath, uaOverride)
                const fotothNya = await uploadImages(dataPototh, `fotoProfilth.${sender.id}`)
                await iluser.sendFileFromUrl(message.from, `https://some-random-api.ml/canvas/threshold?avatar=${fotothNya}`, 'iluserBOT.jpg', `${mess.iklann}`, message.id)
                .then(() => console.log(color('SUCCESS | threshold image', 'olive')))
                .catch(async (err) => {
                    await iluser.reply(message.from, 'Error!', message.id)
                    console.log(color('FAILED | threshold image', 'red'))
                    iluser.sendText(ownerNumber, 'Error threshold image:\n' + err)
                })
            } else {
                await iluser.reply(message.from, 'Format Salah!', message.id)
            }
        }
            break
        case prefix+'sepia':{
                const disable = await getDB.cek_disable(message.from, `${prefix}sepia`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                
                limitAdd(serial)
                if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMediasa = isQuotedImage ? quotedMsg : message
                const dataPotosa = await decryptMedia(encryptMediasa, uaOverride)
                const fotosaNya = await uploadImages(dataPotosa, `fotoProfilsa.${sender.id}`)
                await iluser.sendFileFromUrl(message.from, `https://some-random-api.ml/canvas/sepia?avatar=${fotosaNya}`, 'iluserBOT.jpg', `${mess.iklann}`, message.id)
                .then(() => console.log(color('SUCCESS | sepia image', 'olive')))
                .catch(async (err) => {
                    await iluser.reply(message.from, 'Error!', message.id)
                    console.log(color('FAILED | sepia image', 'red'))
                    iluser.sendText(ownerNumber, 'Error :\n' + err)
                })
            } else {
                await iluser.reply(message.from, 'Format Salah!', message.id)
            }
        }
        break
        case prefix+'buriq':
        case prefix+'burik':{
                const disable = await getDB.cek_disable(message.from, `${prefix}burik`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                
                limitAdd(serial)
                if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMediabq = isQuotedImage ? quotedMsg : message
                const dataPotobq = await decryptMedia(encryptMediabq, uaOverride)
                const fotobqNya = await uploadImages(dataPotobq, `fotoProfilbq.${sender.id}`)
                await iluser.sendFileFromUrl(message.from, `https://nekobot.xyz/api/imagegen?type=jpeg&url=${fotobqNya}&raw=1`, 'iluserBOT.jpg', `${mess.iklann}`, message.id)
                .then(() => console.log(color('SUCCESS | burik image', 'olive')))
                .catch(async (err) => {
                    await iluser.reply(message.from, 'Error!', message.id)
                    console.log(color('FAILED | burik image', 'red'))
                    iluser.sendText(ownerNumber, 'Error burik image:\n' + err)
                })
            } else {
                await iluser.reply(message.from, 'Format Salah!', message.id)
            }
        }
        break
        case prefix+'blurfry':{
                const disable = await getDB.cek_disable(message.from, `${prefix}blurfry`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                
                limitAdd(serial)
                if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMediabf = isQuotedImage ? quotedMsg : message
                const dataPotobf = await decryptMedia(encryptMediabf, uaOverride)
                const fotobfNya = await uploadImages(dataPotobf, `fotoProfilbf.${sender.id}`)
                await iluser.sendFileFromUrl(message.from, `https://nekobot.xyz/api/imagegen?type=blurpify&image=${fotobfNya}&raw=1`, 'iluserBOT.jpg', `${mess.iklann}`, message.id)
                .then(() => console.log(color('SUCCESS | blurfry image', 'olive')))
                .catch(async (err) => {
                    await iluser.reply(message.from, 'Error!', message.id)
                    console.log(color('FAILED | blurfry image', 'red'))
                    iluser.sendText(ownerNumber, 'Error blurfry image:\n' + err)
                })
            } else {
                await iluser.reply(message.from, 'Format Salah!', message.id)
            }
        }
        break
        case prefix+'magik':{
                const disable = await getDB.cek_disable(message.from, `${prefix}magik`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return
                limitAdd(serial)
                if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMediamk = isQuotedImage ? quotedMsg : message
                const dataPotomk = await decryptMedia(encryptMediamk, uaOverride)
                const fotomkNya = await uploadImages(dataPotomk, `fotoProfilmk.${sender.id}`)
                await iluser.sendFileFromUrl(message.from, `https://nekobot.xyz/api/imagegen?type=magik&image=${fotomkNya}&raw=1&intensity=5`, 'iluserBOT.jpg', `${mess.iklann}`, message.id)
                .then(() => console.log(color('SUCCESS | magik image', 'olive')))
                .catch(async (err) => {
                    await iluser.reply(message.from, 'Error!', message.id)
                    console.log(color('FAILED | magik image', 'red'))
                    iluser.sendText(ownerNumber, 'Error magik image:\n' + err)
                })
            } else {
                await iluser.reply(message.from, 'Format Salah!', message.id)
            }
        }
            break
        case prefix+'captcha':{
                const disable = await getDB.cek_disable(message.from, `${prefix}captcha`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return
                limitAdd(serial)
                const q = body.slice(9)
                if (args.length == 1) return await iluser.reply(message.from, 'Format Salah!', message.id)
                if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMediacc = isQuotedImage ? quotedMsg : message
                const dataPotocc = await decryptMedia(encryptMediacc, uaOverride)
                const potoccNya = await uploadImages(dataPotocc, `fotoProfilcc.${sender.id}`)
                await iluser.sendFileFromUrl(message.from, `https://nekobot.xyz/api/imagegen?type=captcha&url=${potoccNya}&username=${q}&raw=1`, 'iluserBOT.jpg', `${mess.iklann}`, message.id)
                .then(() => console.log(color('SUCCESS | captcha image', 'olive')))
                .catch(async (err) => {
                    await iluser.reply(message.from, 'Error!', message.id)
                    console.log(color('FAILED | captcha image', 'red'))
                    iluser.sendText(ownerNumber, 'Error captcha image:\n' + err)
                })
            } else {
                await iluser.reply(message.from, 'Format Salah!', message.id)
            }
        }
            break
        case prefix+'sarah':{
            const disable = await getDB.cek_disable(message.from, `${prefix}sarah`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
                const q = body.slice(7)
                if (!q) return await iluser.reply(message.from, `Textnya mana?`, message.id)
                await iluser.sendFileFromUrl(message.from, `https://rest.farzain.com/api/special/fansign/indo/viloid.php?apikey=ppqeuy&text=${q}`, `iluser.jpg`, `${mess.iklann}`, message.id)
                    .then(() => console.log(color('SUCCESS | sarah image', 'olive')))
                    .catch(async (err) => {
                        console.error(err)
                        await iluser.reply(message.from, 'Error!', message.id)
                        console.log(color('FAILED | sarah image', 'red'))
                        iluser.sendText(ownerNumber, 'Error sarah image:\n' + err)
                    })
                } 
            break
        case prefix+'cosplay':{
            const disable = await getDB.cek_disable(message.from, `${prefix}cosplay`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
                const q = body.slice(9)
                if (!q) return await iluser.reply(message.from, `Textnya mana?`, message.id)
                await iluser.sendFileFromUrl(message.from, `https://rest.farzain.com/api/special/fansign/cosplay/cosplay.php?apikey=rambu&text=${q}`, `iluser.jpg`, `${mess.iklann}`, message.id)
                    .then(() => console.log(color('SUCCESS | cosplay image', 'olive')))
                    .catch(async (err) => {
                        console.error(err)
                        await iluser.reply(message.from, 'Error!', message.id)
                        console.log(color('FAILED | cosplay image', 'red'))
                        iluser.sendText(ownerNumber, 'Error cosplay image:\n' + err)
                    })
                }
            break
        case prefix+'trumptwt':{
            const disable = await getDB.cek_disable(message.from, `${prefix}trumptwt`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
                const q = body.slice(10)
                if (!q) return await iluser.reply(message.from, `Textnya mana?`, message.id)
                await iluser.sendFileFromUrl(message.from, `https://nekobot.xyz/api/imagegen?type=trumptweet&text=${q}&raw=1`, `iluser.jpg`, `${mess.iklann}`, message.id)
                    .then(() => console.log(color('SUCCESS | trumptwt image', 'olive')))
                    .catch(async (err) => {
                        console.error(err)
                        await iluser.reply(message.from, 'Error!', message.id)
                        console.log(color('FAILED | trumptwt image', 'red'))
                        iluser.sendText(ownerNumber, 'Error trumptwt image:\n' + err)
                    })
                }
            break
        case prefix+'kanna':{
            const disable = await getDB.cek_disable(message.from, `${prefix}kanna`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
                const q = body.slice(7)
                if (!q) return await iluser.reply(message.from, `Textnya mana?`, message.id)
                await iluser.sendFileFromUrl(message.from, `https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}&raw=1`, `iluser.jpg`, `${mess.iklann}`, message.id)
                    .then(() => console.log(color('SUCCESS | kanna image', 'olive')))
                    .catch(async (err) => {
                        console.error(err)
                        await iluser.reply(message.from, 'Error!', message.id)
                        console.log(color('FAILED | kanna image', 'red'))
                        iluser.sendText(ownerNumber, 'Error kanna image:\n' + err)
                    })
                }
            break
        case prefix+'mymind':{
            const disable = await getDB.cek_disable(message.from, `${prefix}mymind`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
                const q = body.slice(8)
                if (!q) return await iluser.reply(message.from, `Textnya mana?`, message.id)
                await iluser.sendFileFromUrl(message.from, `https://nekobot.xyz/api/imagegen?type=changemymind&text=${q}&raw=1`, `iluser.jpg`, `${mess.iklann}`, message.id)
                    .then(() => console.log(color('SUCCESS | mymind image', 'olive')))
                    .catch(async (err) => {
                        console.error(err)
                        await iluser.reply(message.from, 'Error!', message.id)
                        console.log(color('FAILED | mymind image', 'red'))
                        iluser.sendText(ownerNumber, 'Error mymind image:\n' + err)
                    })
                }
            break
        case prefix+'smoketext':{
            const disable = await getDB.cek_disable(message.from, `${prefix}smoketext`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
                const q = body.slice(11)
                if (!q) return await iluser.reply(message.from, `Textnya mana?`, message.id)
                const smoje = await axios.get(`https://api.zeks.xyz/api/smoketext?text=${q}&apikey=apivinz`)
                await iluser.sendFileFromUrl(message.from, smoje.data.result, `iluser.jpg`, `${mess.iklann}`, message.id)
                    .then(() => console.log(color('SUCCESS | smoketext image', 'olive')))
                    .catch(async (err) => {
                        await iluser.reply(message.from, 'Error!', message.id)
                        console.log(color('FAILED | smoketext image', 'red'))
                        iluser.sendText(ownerNumber, 'Error smoketext image:\n' + err)
                    })
                }
                break
        
        case prefix+'banchat':
            if (setting.banChats === true) return iluser.reply(message.from, 'Global chat already disabled!', message.id)
            if (isOwner){
            setting.banChats = true
            banChats = true
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
            iluser.reply(message.from, 'Global chat has been disabled!', message.id)
            }
            break

        case prefix+'unmute':
            console.log(`Unmuted ${name}!`)
            break
        case prefix+'unbanchat':
            iluser.reply(message.from, 'Global chat has been enabled!', message.id)
            console.log(`Global chat has been enabled! ${name}!`)
            break
        case prefix+'goreng':{
            const disable = await getDB.cek_disable(message.from, `${prefix}goreng`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                limitAdd(serial)
    if (isImage || isQuotedImage) {
    try{
        await iluser.reply(message.from,'Sedang menggoreng gambar (4 kali)', message.id)
        const encryptMedia = !isImage && (isQuotedImage || isQuotedSticker) ? quotedMsg : message
        console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
        const mediaData = await decryptMedia(encryptMedia)
        // .complexFilter('eq=saturation=100:contrast=10:brightness=0.1:gamma=10,noise=alls=60:allf=t,unsharp=5:5:1.25:5:5:1,eq=gamma_r=100')
        const filter = 'eq=saturation=100,unsharp=5:5:1.25:5:5:1.0,noise=alls=40:allf=t'
        const quality = '20'
        let fry = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(mediaData))
                .complexFilter(filter + ',scale=iw/2:ih/2')
                .outputOptions('-q:v', quality)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .on('error', () => console.log('error!'))
                .stream(write)
        })
        fry = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(fry))
                .complexFilter(filter + ',scale=iw/2:ih/2')
                .outputOptions('-q:v', quality)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .on('error', () => console.log('error!'))
                .stream(write)
        })
        fry = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(fry))
                .complexFilter(filter)
                .outputOptions('-q:v', quality)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .on('error', () => console.log('error!'))
                .stream(write)
        })
        fry = await stream2Buffer(write => {
            ffmpeg(buffer2Stream(fry))
                .complexFilter(filter)
                .outputOptions('-q:v', quality)
                .format('mjpeg')
                .on('start', commandLine => console.log(color('[FFmpeg]'), commandLine))
                .on('progress', progress => console.log(color('[FFmpeg]'), progress))
                .on('end', () => console.log(color('[FFmpeg]'), 'Processing finished!'))
                .on('error', () => console.log('error!'))
                .stream(write)
        })
        if (isQuotedSticker) {
            fry = await processSticker(fry, 'contain')
            iluser.sendRawWebpAsSticker(message.from, fry.toString('base64'))
        }
        else iluser.sendFile(message.from, baseURI(fry, 'image/jpg'), 'deepfry.jpg', `Nih gorengannya (deepfry) ${mess.iklan}`, message.id)
    }catch (err) { 
        iluser.reply(message.from, 'Error tod!', id)
        }
    }
    }
    break
        case prefix+'springflow':{
                const disable = await getDB.cek_disable(message.from, `${prefix}springflow`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return
                if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrla = await uploadImages(mediaData, false)
                const spring = await axios.get(`https://api.zeks.xyz/api/springflow?img=${getUrla}&apikey=vinzapi`)
                const flow = spring.data
                limitAdd(serial)
                iluser.sendImage(message.from, flow.result, 'thndr.jpg', `${mess.iklann}`, message.id)
                } else {
                await iluser.reply(message.from, 'Wrong Format!', message.id)
                }
            }
            break
        case prefix+'watersplash':{
                const disable = await getDB.cek_disable(message.from, `${prefix}watersplash`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrla = await uploadImages(mediaData, false)
                const water = await axios.get(`https://api.zeks.xyz/api/watersplash?img=${getUrla}&apikey=vinzapi`)
                const splash = water.data
                limitAdd(serial)
                iluser.sendImage(message.from, splash.result, 'thndr.jpg', `${mess.iklann}`, message.id)
                } else {
                await iluser.reply(message.from, 'Wrong Format!', message.id)
                }
            }
            break
        case prefix+'sketch':{
                const disable = await getDB.cek_disable(message.from, `${prefix}sketch`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return
                if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrla = await uploadImages(mediaData, false)
                const sketch = await axios.get(`https://api.zeks.xyz/api/sketch-image?apikey=apivinz&image=${getUrla}`)
                const sket = sketch.data
                limitAdd(serial)
                iluser.sendImage(message.from, sket.result, 'thndr.jpg', `${mess.iklann}`, message.id)
                } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                limitAdd(serial)
                    }else {
                    await iluser.reply(message.from, `Wrong Format!`, message.id)
                }
            }
            break
        case prefix+'cloudy':{
                const disable = await getDB.cek_disable(message.from, `${prefix}cloudy`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrla = await uploadImages(mediaData, false)
                const cloudy = await axios.get(`https://api.zeks.xyz/api/cloudy?img=${getUrla}&apikey=vinzapi`)
                const cloudyy = cloudy.data
                limitAdd(serial)
                iluser.sendImage(message.from, cloudyy.result, 'thndr.jpg', `${mess.iklann}`, message.id)
                } else {
                await iluser.reply(message.from, 'Wrong Format!', message.id)
                }
            }
            break
        //some-random-api
        case prefix+'wasted':{
                const disable = await getDB.cek_disable(message.from, `${prefix}wasted`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMediaWt = isQuotedImage ? quotedMsg : message
                const dataPotoWt = await decryptMedia(encryptMediaWt, uaOverride)
                const fotoWtNya = await uploadImages(dataPotoWt, `fotoProfilWt.${sender.id}`)
                await iluser.sendFileFromUrl(message.from, `https://some-random-api.ml/canvas/wasted?avatar=${fotoWtNya}`, 'Wasted.jpg', `${mess.iklann}`, message.id)
                .catch(async (err) => {
                    console.log(color('FAILED | wasted', 'red'))
                    iluser.sendText(ownerNumber, `Error wasted:\n${err}`)
                    iluser.reply(message.from, 'Error', message.id)
                })
            } else {
                await iluser.reply(message.from, `Format Salah!`, message.id)
            }
        }
        break
        case prefix+'triger':{
                const disable = await getDB.cek_disable(message.from, `${prefix}wasted`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMediaWt = isQuotedImage ? quotedMsg : message
                const dataPotoWt = await decryptMedia(encryptMediaWt, uaOverride)
                const fotoWtNya = await uploadImages(dataPotoWt, `fotoProfilWt.${sender.id}`)
                await iluser.sendStickerfromUrl(message.from, `https://some-random-api.ml/canvas/triggered?avatar=${fotoWtNya}`, 'Wasted.jpg', `${mess.iklann}`, message.id)
                .catch(async (err) => {
                    console.log(color('FAILED | wasted', 'red'))
                    iluser.sendText(ownerNumber, `Error wasted:\n${err}`)
                    iluser.reply(message.from, 'Error', message.id)
                })
            } else {
                await iluser.reply(message.from, `Format Salah!`, message.id)
            }
        }
        break
        case prefix+'kiss':{
                const disable = await getDB.cek_disable(message.from, `${prefix}kiss`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                try {
                    if (isMedia && isImage) {
                        const ppRaw = await iluser.getProfilePicFromServer(sender.id)
                        const ppSecond = await decryptMedia(message, uaOverride)
                        if (ppRaw === undefined) {
                            var ppFirst = ppdepresi
                        } else {
                            ppFirst = ppRaw
                        }
                        canvas.Canvas.kiss(ppFirst, ppSecond)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_kiss.png`)
                                await iluser.sendFile(message.from, `${sender.id}_kiss.png`, `${sender.id}_kiss.png`, '', message.id)
                                fs.unlinkSync(`${sender.id}_kiss.png`)
                            })
                    } else if (quotedMsg) {
                        const ppRaw = await iluser.getProfilePicFromServer(sender.id)
                        const ppSecond = await iluser.getProfilePicFromServer(quotedMsgObj.sender.id)
                        if (ppRaw === undefined) {
                            var ppFirsts = ppdepresi
                        } else {
                            ppFirsts = ppRaw
                        }
                        canvas.Canvas.kiss(ppFirsts, ppSecond)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_kiss.png`)
                                await iluser.sendFile(message.from, `${sender.id}_kiss.png`, `${sender.id}_kiss.png`, '', message.id)
                                fs.unlinkSync(`${sender.id}_kiss.png`)
                            })
                    } else {
                        await iluser.reply(message.from, `Format Salah!`, message.id)
                    }
                } catch (err) {
                    console.log(color('FAILED | kiss', 'red'))
                    iluser.sendText(ownerNumber, `Error kiss:\n${err}`)
                    iluser.reply(message.from, 'Error', message.id)
                }
            }
            break
        case prefix+'groupinfo' :
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            isMuted(chatId) == false
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
           // var ngrp = nsfw_.includes(chat.id)
            var antlink = antilink.includes(chat.id)
            var antiporn = _antinsfw.includes(groupId)
           // var stprt = antisticker.includes(chat.id)
            var grouppic = await iluser.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await iluser.sendFileFromUrl(message.from, pfp, 'group.png', `*GROUP INFO*

• Name : *${groupname}* 
• Members : *${totalMem}*
• Anti Link : ${antlink ? '*ON*' : '*OFF*'}
• Anti Porn : ${antiporn ? '*ON*' : '*OFF*'}
• Group Description:
${desc}`)
            break
        case prefix+'quote':
        case prefix+'quotes':{
            const disable = await getDB.cek_disable(message.from, `${prefix}quotes`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            const quotes = await axios.get(`https://api.zeks.xyz/api/quote?apikey=nishikata`)
            iluser.reply(message.from, `${quotes.data.result.quotes}\n\n- ${quotes.data.result.author}`, message.id)
            limitAdd(serial)
            }
            break;
        case prefix+'ownerbot':
        case prefix+'owner':
        case prefix+'creator':
        case prf+'ownerbot':
        case prf+'owner':
        case prf+'creator':
            await iluser.sendTextWithMentions(message.from, `Master saya > @${ownerNumber}`, message.id)
            break

        // ON OFF
        case prefix+'antilink':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
            if (args[1] == 'enable') {
                var cek = antilink.includes(chatId);
                if(cek){
                    return iluser.reply(message.from, `ANTI GROUP LINK\n\n   *ALREADY ACTIVATED ON ${name}*`, message.id) //if number already exists on database
                } else {
                    antilink.push(chatId)
                    fs.writeFileSync('./lib/database/antilink.json', JSON.stringify(antilink))
                    iluser.reply(message.from, `ANTI GROUP LINK\n\n   *ACTIVATED*`, message.id)
                }
            } else if (args[1] == 'disable') {
                var cek = antilink.includes(chatId);
                if(!cek){
                    return iluser.reply(message.from, `ANTI GROUP LINK\n\n   *ALREADY DEACTIVATED ON ${name}*`, message.id) //if number already exists on database
                } else {
                    let nixx = antilink.indexOf(chatId)
                    antilink.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antilink.json', JSON.stringify(antilink))
                    iluser.reply(message.from, `ANTI GROUP LINK\n\n   *DEACTIVATED*`, message.id)
                }
            } else {
                iluser.reply(message.from, `Pilih enable atau disable udin!`, message.id)
            }
            break  
            case prefix+'bioskop':{ //ILUSER
                const disable = await getDB.cek_disable(message.from, `${prefix}bioskop`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
                const q = body.slice(9)
                if (!q) return await iluser.reply(message.from, `Yang di cari apa tod?`, message.id)
                let hem = `BIOSKOP SEARCH`
                let search = await axios.get('http://docs-jojo.herokuapp.com/api/bioskop?kota='+q)
                for (let i = 0; i < search.data.result.length; i++) {
                hem +=`

*Title:* ${search.data.result[i].title}
*Alamat:* ${search.data.result[i].alamat}
*Rate:* ${search.data.result[i].bintang}`
            }hem +=`${mess.iklan}`
            await iluser.sendFileFromUrl(message.from, search.data.result[0].img, 'watpad.jpg', `${hem}`, id)
            .then(() => console.log(color('SUCCESS | bioskop search', 'olive')))
                    .catch(async (err) => {
                        await iluser.reply(message.from, 'Error!', message.id)
                        iluser.sendText(ownerNumber, `error bioskop search:\n${err}`)
                        console.log(color('FAILED | bioskop search', 'red'))
                    })
                }
                break
            case prefix+'infoloker':{ //ILUSER
                const disable = await getDB.cek_disable(message.from, `${prefix}infoloker`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
                let mem = `*LOKER INFO X iluser_BOT*`
                let search = await axios.get('https://docs-jojo.herokuapp.com/api/infoloker')
                for (let i = 0; i < search.data.result.length; i++) {
                    mem +=`

*Perusahaan:* ${search.data.result[i].perusahaan}
*Url:* ${search.data.result[i].link}
*Pofesi:* ${search.data.result[i].profesi}
*Gaji:* ${search.data.result[i].gaji}
*Lokasi:* ${search.data.result[i].lokasi}
*Pengalaman:* ${search.data.result[i].pengalaman}
*Sebagai:* ${search.data.result[i].jobFunction}
*Level karir:* ${search.data.result[i].levelKarir}
*Rentang* ${search.data.result[i].edukasi}
*Deskripsi:* ${search.data.result[i].desc}
*Syarat:* ${search.data.result[i].syarat}`
                }mem +=`${mess.iklan}`
            iluser.reply(from, mem, id)
            .then(() => console.log(color('SUCCESS | Loker info', 'olive')))
                    .catch(async (err) => {
                        await iluser.reply(message.from, 'Error!', message.id)
                        iluser.sendText(ownerNumber, `error Loker info:\n${err}`)
                        console.log(color('FAILED | Loker info', 'red'))
                    })
                }
                break
            case prefix+'infohoax':{ //ILUSER
                const disable = await getDB.cek_disable(message.from, `${prefix}bioskop`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
                let search = await axios.get('http://docs-jojo.herokuapp.com/api/bioskop?kota='+q)
                await iluser.sendFileFromUrl(message.from, search.data.listImage, 'watpad.jpg',`*BIOSKOP SEARCH*

*Title:* ${search.data.result}
*Alamat:* ${search.data.result[0].alamat}
*Rate:* ${search.data.result[0].bintang} ${mess.iklan}`+ '', message.id)
            .then(() => console.log(color('SUCCESS | bioskop search', 'olive')))
                    .catch(async (err) => {
                        await iluser.reply(message.from, 'Error!', message.id)
                        iluser.sendText(ownerNumber, `error bioskop search:\n${err}`)
                        console.log(color('FAILED | bioskop search', 'red'))
                    })
                }
                break
        case prefix+'antiporn':{
                const disable = await getDB.cek_disable(message.from, `${prefix}antiporn`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
                if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
                if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
                if (args[1] === 'enable') {
                    if (isAntiNsfw) return await iluser.reply(message.from, `ANTI PORN ALREADY ACTIVATED`, message.id)
                    _antinsfw.push(groupId)
                    fs.writeFileSync('./lib/database/antiporn.json', JSON.stringify(_antinsfw))
                    iluser.reply(message.from, `\tANTI PORN\n\n   *ACTIVATED*`, message.id)
                } else if (args[1] === 'disable') {
                    _antinsfw.splice(groupId, 1)
                    fs.writeFileSync('./lib/database/antiporn.json', JSON.stringify(_antinsfw))
                    iluser.reply(message.from, `\tANTI PORN\n\n   *DEACTIVATED*`, message.id)
                } else {
                    await iluser.reply(message.from, `Format salah!`, message.id)
                }
            }
            break 
        case prefix+'nhview':{
            const disable = await getDB.cek_disable(message.from, `${prefix}nhview`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}nhview 321421*`, message.id)
            const nhsh = body.slice(11)
            const nhsh2 = await axios.get('https://mnazria.herokuapp.com/api/nhentai?code='+nhsh)
            for (let i = 0; i < nhsh2.length; i++) {
                await iluser.sendImage(message.from, nhsh2[i].data, 'thumbserc.jpg', `${mess.iklann}`, message.id)
                limitAdd(serial)
                }
            }
            break
        case prefix+'loli':{
            const disable = await getDB.cek_disable(message.from, `${prefix}loli`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            const imageToBase64abc = require('image-to-base64')
            var walla = ['loli','anime loli'];
            var wallb = walla[Math.floor(Math.random() * walla.length)];
            var urlwall = "https://fdciabdul.tech/api/pinterest/?keyword=" + wallb;
            axios.get(urlwall)
            .then((result) => {
            var awalla = JSON.parse(JSON.stringify(result.data));
            var awallb =  awalla[Math.floor(Math.random() * awalla.length)];
            imageToBase64abc(awallb)
            .then(
                (response) => {
            let gember = 'data:image/jpeg;base64,'+response
            iluser.sendFile(message.from, gember, "iluser.jpg", `${mess.iklann}`, message.id)
            limitAdd(serial)
                    }) 
                .catch(
                    (error) => {
                        console.log(color('FAILED | loli', 'red'))
                        iluser.sendText(ownerNumber, `Loli:\n${error}`)
                        iluser.reply(message.from, 'data tidak ditemukan.', message.id)
                    })
            })
        }
            break   
        case prefix+'shota':{
            const disable = await getDB.cek_disable(message.from, `${prefix}shota`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            const imageToBase64 = require('image-to-base64')
            var shouta = ['shota anime','anime shota'];
            var shotaa = shouta[Math.floor(Math.random() * shouta.length)];
            var urlshot = "https://fdciabdul.tech/api/pinterest/?keyword=" + shotaa;
            axios.get(urlshot)
            .then((result) => {
            var sht = JSON.parse(JSON.stringify(result.data));
            var shotaak =  sht[Math.floor(Math.random() * sht.length)];
            imageToBase64(shotaak)
            .then(
                (response) => {
            let img = 'data:image/jpeg;base64,'+response
            iluser.sendFile(message.from, img, "shota.jpg", `${mess.iklann}`, message.id)
            limitAdd(serial)
                    }) 
                .catch(
                    (error) => {
                        iluser.sendText(ownerNumber, `Error Shota:\n${error}`)
                        console.log('FAILED | shota');
                    })
            })}
            break     
            case prefix+'cewe':case prefix+'cecan':case prefix+'cewek':{
            const disable = await getDB.cek_disable(message.from, `${prefix}cewe`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            const imageToBase64abc = require('image-to-base64')
            var walla = ['cewek cantik', 'cewe imut', 'cewe jepang', 'cewek korea', 'cewek rusia', 'cewek indo'];
            var wallb = walla[Math.floor(Math.random() * walla.length)];
            var urlwall = "https://fdciabdul.tech/api/pinterest/?keyword=" + wallb;
            axios.get(urlwall)
            .then((result) => {
            var awalla = JSON.parse(JSON.stringify(result.data));
            var awallb =  awalla[Math.floor(Math.random() * awalla.length)];
            imageToBase64abc(awallb)
            .then(
                (response) => {
            let gember = 'data:image/jpeg;base64,'+response
            iluser.sendFile(message.from, gember, "iluser.jpg", `${mess.iklann}`, message.id)
            limitAdd(serial)
                    }) 
                .catch(
                    (error) => {
                        console.log(color('FAILED | cewe', 'red'))
                        iluser.sendText(ownerNumber, `cewe:\n${error}`)
                        iluser.reply(message.from, 'data tidak ditemukan.', message.id)
                    })
            })
        }
            break   
            case prefix+'cowo':case prefix+'cogan':case prefix+'cowok':{
            const disable = await getDB.cek_disable(message.from, `${prefix}cowo`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            const imageToBase64abc = require('image-to-base64')
            var walla = ['cogan','model ganteng','oppa ganteng','oppa korea', 'cogan indo'];
            var wallb = walla[Math.floor(Math.random() * walla.length)];
            var urlwall = "https://fdciabdul.tech/api/pinterest/?keyword=" + wallb;
            axios.get(urlwall)
            .then((result) => {
            var awalla = JSON.parse(JSON.stringify(result.data));
            var awallb =  awalla[Math.floor(Math.random() * awalla.length)];
            imageToBase64abc(awallb)
            .then(
                (response) => {
            let gember = 'data:image/jpeg;base64,'+response
            iluser.sendFile(message.from, gember, "iluser.jpg", `${mess.iklann}`, message.id)
            limitAdd(serial)
                    }) 
                .catch(
                    (error) => {
                        console.log(color('FAILED | cowo', 'red'))
                        iluser.sendText(ownerNumber, `cowo:\n${error}`)
                        iluser.reply(message.from, 'data tidak ditemukan.', message.id)
                    })
            })
        }
            break   
        case prefix+'wall':
        case prefix+'wallpaper':{
            const disable = await getDB.cek_disable(message.from, `${prefix}wall`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            const imageToBase64abc = require('image-to-base64')
            var walla = ['abstract wallpaper hd','cinematic wallpaper hd','dark wallpaper hd','mountain wallpaper hd','galaxy wallpaper hd','wallpaper city hd','space wallpaper hd','nature wallpaper hd','dark wallpaper hd'];
            var wallb = walla[Math.floor(Math.random() * walla.length)];
            var urlwall = "https://fdciabdul.tech/api/pinterest/?keyword=" + wallb;
            axios.get(urlwall)
            .then((result) => {
            var awalla = JSON.parse(JSON.stringify(result.data));
            var awallb =  awalla[Math.floor(Math.random() * awalla.length)];
            imageToBase64abc(awallb)
            .then(
                (response) => {
            let gember = 'data:image/jpeg;base64,'+response
            iluser.sendFile(message.from, gember, "iluser.jpg", `${mess.iklann}`, message.id)
            limitAdd(serial)
                    }) 
                .catch(
                    (error) => {
                        console.log(color('FAILED | wallpaper', 'red'))
                        iluser.sendText(ownerNumber, `wallpaper:\n${error}`)
                        iluser.reply(message.from, 'data tidak ditemukan.', message.id)
                    })
            })
        }
            break
        case prefix+'waifu':{
            const disable = await getDB.cek_disable(message.from, `${prefix}waifu`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            const waifu = await axios.get(`https://api.vhtear.com/randomwibu&apikey=${vhtearkey}`)
            const su = {nama, deskripsi, foto, sumber} = waifu.data.result
            await iluser.sendFileFromUrl(message.from, foto, 'Waifu.jpg', `• Name : ${nama}\n• Description : ${deskripsi}\n\n• Source : ${sumber} ${mess.iklan}`, message.id)
            limitAdd(serial)
            }
            break
        case prefix+'husbu':{
            const disable = await getDB.cek_disable(message.from, `${prefix}husbu`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            const diti = fs.readFileSync('./lib/database/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            await iluser.sendFileFromUrl(message.from, rindKiy.image, 'Husbu.jpg', `${rindKiy.teks} ${mess.iklan}`, message.id)
            limitAdd(serial)
            }
            break
        case prefix+'randomnekonime':{
            const disable = await getDB.cek_disable(message.from, `${prefix}randomnekonime`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            const nekonime = await axios.get(`http://docs-jojo.herokuapp.com/api/nekonime`)
            const nekon = nekonime.data
            if (nekon.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            await iluser.sendFileFromUrl(message.from, nekon.result, `Nekonime${ext}`, `${mess.iklann}`, message.id)
            limitAdd(serial)
            }
            break
        case prefix+'subreddit':{
            const disable = await getDB.cek_disable(message.from, `${prefix}subreddit`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
            argz = body.trim().split(' ')
            const sr = arg[1]
            try {
            const response1 = await axios.get('https://meme-api.herokuapp.com/gimme/' + sr + '/');
            const { postLink, title, url } = response1.data
            await iluser.sendFileFromUrl(message.from, `${url}`, 'Reddit.jpg', `*Title*: ${title}` + '\n\n*Postlink*:' + `${postLink}`, message.id)
            } catch(err) {
                await iluser.reply(message.from, 'Error!', message.id)
            }
        }
        break
        case prefix+'nhder':{
            const disable = await getDB.cek_disable(message.from, `${prefix}nhder`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (isReg(obj)) return
            if (isLimit(serial)) return 
            if (!isPremium && !isOwner) return iluser.reply(message.from, mess.nopremium, message.id)
            if (args.length >=2){
                const code = args[1]
                const url = 'https://nhder.herokuapp.com/download/nhentai/'+code+'/zip'
                //const short = []
                //const shortener = await urlShortener(url)
                //url['short'] = shortener
                //short.push(url)
                //const caption = `*NEKOPOI DOWNLOADER*\n\nLink: ${shortener}`
                //iluser.reply(message.from, caption, message.id)
                await iluser.sendFileFromUrl(message.from, url, `Hentai X iluser_BOT.zip`, ``, message.id)
                limitAdd(serial)
            } else {
                iluser.sendText(message.from, 'masukan code nuclear', message.id)
            }
        }
        break
        case prefix+'meme':{
            const disable = await getDB.cek_disable(message.from, `${prefix}meme`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/indonesia')
            const { title, url } = response.data
            iluser.sendFileFromUrl(message.from, `${url}`, 'meme.jpg', `${title} ${mess.iklan}`, message.id)
            limitAdd(serial)
            }
            break      
        case prefix+'memeindo':{
            const disable = await getDB.cek_disable(message.from, `${prefix}memeindo`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            const memejoke = await axios.get(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
            const memejokes = memejoke.data
            limitAdd(serial)
            iluser.sendImage(message.from, memejokes.result, 'iluser.jpg', `${mess.iklann}`, message.id)
            }
            break  
        case prefix+'quoteanime':{
            const disable = await getDB.cek_disable(message.from, `${prefix}quoteanime`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
                        if(args[1]){
                            if(args[1] === 'anime'){
                                const anime = body.slice(13)
                                axios.get('https://animechanapi.xyz/api/quotes?anime='+anime).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    iluser.sendText(message.from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                }).catch(() => {
                                    iluser.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }else{
                                const char = body.slice(12)
                                axios.get('https://animechanapi.xyz/api/quotes?char='+char).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    iluser.sendText(message.from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                }).catch(() => {
                                    iluser.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }
                        }else{
                            axios.get('https://animechanapi.xyz/api/quotes/random').then(() => {
                                iluser.sendText(message.from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)                               
                            }).catch(err => {
                                iluser.reply(message.from, `Error!`, message.id)
                                iluser.sendText(ownerNumber, `Error Quoteanme: ${err}`)
                                console.log(color('FAILED | Quoteanme error', 'red'))
                            })
                        }
                    }
                    break
        case prefix+'malanime':{
            const disable = await getDB.cek_disable(message.from, `${prefix}malanime`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            limitAdd(serial)
            const keyword = message.body.replace('#malanime', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/anime?q=${keyword}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await iluser.reply(message.from, 'Error!', message.id)
              return null
              }
            const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
            const content = `*Anime Ditemukan!*
✨️ *Title:* ${title}
🎆️ *Episodes:* ${episodes}
💌️ *Rating:* ${rated}
❤️ *Score:* ${score}
💚️ *Synopsis:* ${synopsis}
🌐️ *URL*: ${url} ${mess.iklan}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            iluser.sendImage(message.from, base64, title, content)
           } catch (err) {
             console.error(err.message)
             await iluser.reply(message.from, 'Error!', message.id)
           }
       }
        break
        case prefix+'malcharacter':{
            const disable = await getDB.cek_disable(message.from, `${prefix}malcharacter`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            limitAdd(serial)
            const keywords = message.body.replace('#malcharacter', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/character?q=${keywords}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await iluser.reply(message.from, 'Error!', message.id)
              return null
              }
            const { name, alternative_names, url, image_url } = parsed.results[0]
            const contentt = `*Anime Ditemukan!*

✨️ *Name:* ${name}
💌️ *Alternative Names:* ${alternative_names}
🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            iluser.sendImage(message.from, base64, name, contentt)
           } catch (err) {
             console.error(err.message)
             await iluser.reply(message.from, 'Error!', message.id)
           }
       }
        break
        case prefix+'infogempa':{
            const disable = await getDB.cek_disable(message.from, `${prefix}infogempa`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
            const bmkg = await axios.get('http://docs-jojo.herokuapp.com/api/infogempa')
            const { potensi, koordinat, lokasi, kedalaman, magnitude, waktu, map } = bmkg.data
            const hasil = `*${waktu}*\n📍 *Lokasi* : *${lokasi}*\n〽️ *Kedalaman* : *${kedalaman}*\n💢 *Magnitude* : *${magnitude}*\n🔘 *Potensi* : *${potensi}*\n📍 *Koordinat* : *${koordinat}*`
            iluser.sendFileFromUrl(message.from, map, 'shakemap.jpg', `${hasil} ${mess.iklan}`, message.id)
            }
            break
        case prefix+'shorturl':{
            const url = `${encodeURIComponent(body.slice(10))}`
            const yurl = await urlShortener(url)
            iluser.reply(from, yurl, id)
            limitAdd(serial)
            }
            break
        case prefix+'cuaca':{
            const disable = await getDB.cek_disable(message.from, `${prefix}cuaca`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                        if (args.length == 0) return iluser.reply(message.from, `Nama kotanya mana ngab?`, message.id)
                        const predik = await axios.get(`https://api.vhtear.com/weather?city=${body.slice(7)}&apikey=${vhtearkey}`)
                        const iksi = predik.data.result
                        const resil = `${iksi.weather}\n\n${iksi.location}`
                        await iluser.reply(message.from, resil, message.id)
                        await limitAdd(serial)
                        .catch(() => {
                            return iluser.reply(message.from, 'Kota yang anda ketik tidak ditemukan...', message.id)
                        })
                    }
                    break
        case prefix+'sms':{
            const disable = await getDB.cek_disable(message.from, `${prefix}sms`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            const call2 = await axios.get(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${encodeURIComponent(body.slice(5))}`)
            const { logs } = call2.data
           // console.log(logs.result)
            await iluser.reply(message.from, `Logs : ${call2.data.result}`, message.id)
            }
            break
        case prefix+'idff':{
            const disable = await getDB.cek_disable(message.from, `${prefix}sms`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            const call2 = await axios.get(`https://api.lolhuman.xyz/api/freefire/${encodeURIComponent(body.slice(6))}?apikey=${lolkey}`)
            const { logs } = call2.data
           // console.log(logs.result)
            await iluser.reply(message.from, `Logs : ${call2.data.result}`, message.id)
            }
            break
        case prefix+'kadargay':{
            const disable = await getDB.cek_disable(message.from, `${prefix}kadargay`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                if (args.length == 1) return iluser.reply(message.from, `Yang gay siapa tod?`, message.id)
            axios.get(`https://api-neraka.vercel.app/api/gay`)
            .then(res => {
                const gayy = res.data.result.desc
                iluser.reply(message.from, `${gayy}\n\nKadar: ${res.data.result.percentage} %`, message.id)
                limitAdd(serial)
                console.log('SUCCESS | kadar gay')
            })
            .catch(async (err) => {
                        console.log(color('FAILED | kadar gay', 'red'))
                        iluser.sendText(ownerNumber, `Error kadar gay:\n${err}`)
                        iluser.reply(message.from, 'Error', message.id)
                    })
            }
            break
        case prefix+'darkjoke':{
            const disable = await getDB.cek_disable(message.from, `${prefix}darkjoke`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                 await axios.get(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`).then(res => {
                    iluser.sendFileFromUrl(message.from, `${res.data.result}`, 'image.jpg', `${mess.iklann}`, message.id)
                    .then(() => {
                        console.log('SUCCESS | darkjoke')
                        limitAdd(serial)
                    })
                    .catch(() => {
                        iluser.reply(message.from, 'Error', message.id)
                        console.log('FAILED | darkjoke')
                    })
                })}
                break
        case prefix+'aiquote' :{
            const disable = await getDB.cek_disable(message.from, `${prefix}aiquote`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
                            const aiquote = await axios.get("http://inspirobot.me/api?generate=true")
                            await iluser.sendFileFromUrl(message.from, aiquote.data, 'quote.jpg', `${mess.iklann}`, id )
                        }
                        break
        /*case prefix+'ytmp3':
                if(isReg(obj)) return
                    if(isLimit(serial)) return
                    if (args.length >= 1) {
                        let url = args[1]
                        if(!url.match(new RegExp('https://','gi'))) url = 'https://'+url
                        var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
                        if(!videoid) {
                            return iluser.reply(message.from,"Videonya gavalid gan.", message.id);
                            }fs.access('audio/'+videoid[1]+'.mp3', (err) => {
                            if(!err){
                                iluser.sendFile(message.from,'audio/'+ videoid[1] +'.mp3', `${videoid[1]}.mp3`, '', message.id)
                                limitAdd(serial);
                            }else{
                                async function ytmp3(){
                                    ytdl.getInfo(videoid[1]).then(info => {
                                    if (info.videoDetails.lengthSeconds > 1000){
                                        iluser.reply(message.from, 'Video Terlalu Panjang Males BRO', message.id)
                                    }else{
                                        let stream = ytdl(videoid[1], {
                                            quality: 'highestaudio',
                                            });
                                            ffmpeg(stream)
                                            .audioBitrate(128)
                                            .save(`audio/${videoid[1]}.mp3`)
                                            .on('end', () => {
                                            iluser.sendFile(message.from,'audio/'+ videoid[1] +'.mp3', `${videoid[1]}.mp3`, '', message.id)
                                            });
                                        limitAdd(serial);
                                    }
                                    })
                                }
                                ytmp3();
                            }
                        })
                    }
                    limitAdd(serial)
                    break    */    
                  
        case prefix+'multi':{
            const disable = await getDB.cek_disable(message.from, `${prefix}multi`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            try {
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, 'Linknya mana?', message.id)
                if (isLimit(serial)) return 
            
                limitAdd(serial)
                const link = args[1]
                //if(!link.includes('instagram.com')) return await iluser.reply(message.from, "Maaf, url tidak valid bersumber dari instagram", message.id)
                const puppeteer = require('puppeteer')
                const browser = await puppeteer.launch({headless: false, args: [
                  "--disable-notifications"
                ]}); 
                try {
                    
                    const page = await browser.newPage();
                    await page.goto('https://keepv.id/2/', {waitUntil: 'networkidle2'});  
                    await page.type('input[id="dlURL"]', link);
                    await page.keyboard.press('Enter');                    
                    await page.waitForSelector('div[class="col-12 col-md-6 col-lg-8"]', {visible: true})
                    let spanHref = await page.$eval('div[class="col-12 col-md-6 col-lg-8"] a', span => span.getAttribute('href'));  
                    await browser.close()
                    //if (!isPremium) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`*INSTAGRAM DOWNLOADER*\n\n${mess.noprem}\n[${spanHref}]`, message.id);
                   // if (!isPremium) return await iluser.sendFileFrom(message.from, `./logo.png`, 'thumb.jpg', `MULTI DOWNLOADER\n\n${mess.noprem}\n[${spanHref}]`, message.id) 
                    await iluser.sendFileFromUrl( message.from,  spanHref, '', `${mess.iklann}`, message.id)
                
                } catch (error) {
                    await iluser.reply(message.from, "error!", message.id)
                    await browser.close()
                }
            } catch (error) {
                console.log(color('FAILED | multi downloader', 'red'))
                iluser.sendText(ownerNumber, `Error multi downloader:\n${error}`)
                iluser.reply(message.from, 'Error', message.id)
            }
        }
        break
        case prefix+'imgtourl':{
            const disable = await getDB.cek_disable(message.from, `${prefix}imgtourl`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if (isLimit(serial)) return
                limitAdd(serial)   
                if (isMedia && isImage || isQuotedImage) {
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
                    await iluser.reply(message.from, linkImg, message.id)
                } else {
                    await iluser.reply(message.from, 'Wrong Format!', message.id)
                }}
            break
        case prefix+'tourl':{
            const disable = await getDB.cek_disable(message.from, `${prefix}tourl`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if (isLimit(serial)) return
                limitAdd(serial)   
                if (isMedia && isSticker || isQuotedSticker) {
                    const encryptMedia = isQuotedSticker ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
                    await iluser.reply(message.from, linkImg, message.id)
                } else {
                    await iluser.reply(message.from, 'Wrong Format!', message.id)
                }}
            break
        case prefix+'ss':{
            const disable = await getDB.cek_disable(message.from, `${prefix}ss`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if (isLimit(serial)) return
                const qweryna = body.slice(4)
                let token = ('D2TDY3F-G5YMM94-K9JEQT8-FYBDQBB,ZAY3Q0P-CZ445RP-P8417EY-219SYE6').split(',')
                const rand = getRandomText(token)
                try{
                    const crot = await axios.get(`https://shot.screenshotapi.net/screenshot?token=${rand}&url=${qweryna}&full_page=true&fresh=true&output=json&file_type=png&wait_for_event=load`)
                    const {screenshot,url,created_at,full_page} = await crot.data
                    iluser.sendFileFromUrl(from, screenshot, '', `Screenshot success!\n\nUrl: ${url}\nDate: ${created_at}\nFull page: ${full_page} ${mess.iklan}`)
                    limitAdd(serial)  
                } catch (err) {
                    await iluser.reply(message.from, 'Terjadi kesalahan', message.id)
                }
            }
            break
            //18+ Content
        
            case prefix+'cersex':{
                const disable = await getDB.cek_disable(message.from, `${prefix}cersex`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return  
            if (!isPremium) return iluser.reply(message.from, mess.nopremium, message.id)
            limitAdd(serial)
            if (!isPremium) return iluser.reply(message.from, mess.nopremium, message.id)
                const crot = await axios.get('http://162.213.249.120/').then((response) => {
                    // Load the web page source code into a cheerio instance
                    const $ = cheerio.load(response.data)
                    var d = '', c;
                    $('.post-title A').each((i, el) => {
                    d += $(el).attr('href') + "\n";
                  });
                    c = d.split("\n");
                    var url = c[Math.floor(Math.random() * c.length)];
                    axios.get(url).then((response) => {
                      const $ = cheerio.load(response.data)
                      var o, m
                      iluser.reply(from, $('.post-content').text().replace(/“/g, '').replace(/  /g, ' ').replace("                                                     ", ''), id);
                    })
                  });
                                      
                }
            break
        case prefix+'xnxx':{
        const disable = await getDB.cek_disable(message.from, `${prefix}xnxx`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (!isPremium) return iluser.reply(message.from, mess.nopremium, message.id)
            limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}xnxx https://www.xnxx.com/coli-terosss`, message.id)
            if (!args[1].match(isUrl) && !args[1].includes('xnxx.com')) return iluser.reply(message.from, mess.error.Iv, message.id)
            try {
                const resq = await axios.get('https://mhankbarbars.herokuapp.com/api/xnxx?url='+ args[1] +'&apiKey='+ barbarkey)
                const resp = resq.data
                 if (resp.error) {
                    iluser.reply(message.from, ytvv.error, message.id)
                } else {
                    if (Number(resp.result.size.split(' MB')[0]) > 20.00) return iluser.reply(message.from, 'Maaf durasi video sudah melebihi batas maksimal 20 menit!', message.id)
                    iluser.sendFileFromUrl(message.from, resp.result.thumb, 'thumb.jpg', `• *Judul* : ${resp.result.judul}\n• *Deskripsi* : ${resp.result.desc}\n• *Filesize* : ${resp.result.size}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, message.id)
                    await iluser.sendFileFromUrl(message.from, resp.result.vid, `${resp.result.title}.mp4`, '', message.id)}
            } catch (err) {
                console.log(color('FAILED | Xnxx error', 'red'))
                await iluser.reply(message.from, 'Error!', message.id)
                iluser.sendText(ownerNumber, 'Xnxx Error : ' + err)
            }}
            break
        case prefix+'hehe':{
        const disable = await getDB.cek_disable(message.from, `${prefix}hehe`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (!isPremium) return iluser.reply(message.from, mess.nopremium, message.id)
            try{
              if (args.length === 1) return iluser.reply(message.from, 'mw ap?', message.id)
                if (isLimit(serial)) return
                limitAdd(serial)
               const porn = body.slice(6)
               const umai = await get.get(`https://mnazria.herokuapp.com/api/porn?search=${porn}`).json()
               const { result } = await umai
               console.log(result)
               iluser.sendFileFromUrl(message.from, `${result[0].image}`, 'porn.jpg', `• Title: ${result[0].title}\n• Durasi: ${result[0].duration}\n\nlagi di upload bokepnya.`,  message.id)
               const dl = await get.get(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${result[0].url}`).json()
               if (Number(result[0].duration.split(' min')[0]) > 7) return iluser.reply(message.from, `Download sendiri ngab lewat sini. Males kalo server bot error karena command bokep\n${dl.mp4}`, message.id)
               iluser.sendFileFromUrl(message.from, dl.mp4, 'bokep.mp4', 'kocok terus tuh batang', message.id).catch(() => printError)
           }catch (err) {
            printError(err)
        }}
           break
        case prefix+'trendtwit':{
        const disable = await getDB.cek_disable(message.from, `${prefix}trendtwit`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
            //const q = argz[1]
            //if (args.length === 1) return iluser.reply(message.from, `Contoh: *${prefix}trendtwit indonesia*`, message.id)
            try {
            const resp = await axios.get(`http://docs-jojo.herokuapp.com/api/trendingtwitter`)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
           // const anm2 = `${resp.data.result} `
            iluser.reply(message.from, `
*Trending Twitter X iluser_BOT*

*Title:* ${resp.data.result[0].hastag}
*Rank:* ${resp.data.result[0].rank}
*Jmlah Tweet:* ${resp.data.result[0].tweet}
*Url:* ${resp.data.result[0].link}

*Title:* ${resp.data.result[1].hastag}
*Rank:* ${resp.data.result[1].rank}
*Jmlah Tweet:* ${resp.data.result[1].tweet}
*Url:* ${resp.data.result[1].link}

*Title:* ${resp.data.result[2].hastag}
*Rank:* ${resp.data.result[2].rank}
*Jmlah Tweet:* ${resp.data.result[2].tweet}
*Url:* ${resp.data.result[2].link}

*Title:* ${resp.data.result[3].hastag}
*Rank:* ${resp.data.result[3].rank}
*Jmlah Tweet:* ${resp.data.result[3].tweet}
*Url:* ${resp.data.result[3].link}

*Title:* ${resp.data.result[4].hastag}
*Rank:* ${resp.data.result[4].rank}
*Jmlah Tweet:* ${resp.data.result[4].tweet}
*Url:* ${resp.data.result[4].link}

*Title:* ${resp.data.result[5].hastag}
*Rank:* ${resp.data.result[5].rank}
*Jmlah Tweet:* ${resp.data.result[5].tweet}
*Url:* ${resp.data.result[5].link}

*Title:* ${resp.data.result[6].hastag}
*Rank:* ${resp.data.result[6].rank}
*Jmlah Tweet:* ${resp.data.result[6].tweet}
*Url:* ${resp.data.result[6].link}

*Title:* ${resp.data.result[7].hastag}
*Rank:* ${resp.data.result[7].rank}
*Jmlah Tweet:* ${resp.data.result[7].tweet}
*Url:* ${resp.data.result[7].link}

*Title:* ${resp.data.result[8].hastag}
*Rank:* ${resp.data.result[8].rank}
*Jmlah Tweet:* ${resp.data.result[8].tweet}
*Url:* ${resp.data.result[8].link}

*Title:* ${resp.data.result[9].hastag}
*Rank:* ${resp.data.result[9].rank}
*Jmlah Tweet:* ${resp.data.result[9].tweet}
*Url:* ${resp.data.result[9].link}

*Title:* ${resp.data.result[10].hastag}
*Rank:* ${resp.data.result[10].rank}
*Jmlah Tweet:* ${resp.data.result[10].tweet}
*Url:* ${resp.data.result[10].link}

*Title:* ${resp.data.result[11].hastag}
*Rank:* ${resp.data.result[11].rank}
*Jmlah Tweet:* ${resp.data.result[11].tweet}
*Url:* ${resp.data.result[11].link}

*Title:* ${resp.data.result[12].hastag}
*Rank:* ${resp.data.result[12].rank}
*Jmlah Tweet:* ${resp.data.result[12].tweet}
*Url:* ${resp.data.result[12].link}

*Title:* ${resp.data.result[13].hastag}
*Rank:* ${resp.data.result[13].rank}
*Jmlah Tweet:* ${resp.data.result[13].tweet}
*Url:* ${resp.data.result[13].link}

*Title:* ${resp.data.result[14].hastag}
*Rank:* ${resp.data.result[14].rank}
*Jmlah Tweet:* ${resp.data.result[14].tweet}
*Url:* ${resp.data.result[14].link}
${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.reply(message.from, 'Error!', message.id)
                iluser.sendText(ownerNumber, 'trendtwit: ' + err)
            }}
            break
    case prefix+'carbon':{
        const disable = await getDB.cek_disable(message.from, `${prefix}carbon`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            limitAdd(serial)
         if (args.length === 1) return iluser.reply(message.from, 'Teks nya mana??', message.id)    
         const darculanyas = `https://carbonnowsh.herokuapp.com/?code=${body.slice(8)}&theme=darcula&backgroundColor=rgba(50, 50, 50, 150)`
          iluser.sendFileFromUrl(message.from, darculanyas)
        }
         break
        case prefix+'phcomment':{
            const disable = await getDB.cek_disable(message.from, `${prefix}phcomment`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
            
                limitAdd(serial)
                const phcoments = body.slice(11)
                if (!phcoments) return await iluser.reply(message.from, `Format Salah!\nketik : ${prefix}phcomment text1|text2\nContoh : ${prefix}phcomment test|tas`, message.id)
                const usernamePh = phcoments.split('|')[0]
                const commentPh = phcoments.split('|')[1]
                const ppPhRaw = await iluser.getProfilePicFromServer(sender.id)
                if (ppPhRaw === undefined) {
                    var ppPh = ppdepresi
                } else {
                    var ppPh = ppPhRaw
                }
                const dataPpPh = await bent('buffer')(ppPh)
                const linkPpPh = await uploadImages(dataPpPh, `${sender.id}_ph`)
              //  await iluser.reply(message.from, mess.wait, message.id)
                const preproccessPh = await axios.get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${linkPpPh}&text=${commentPh}&username=${usernamePh}`)
                await iluser.sendFileFromUrl(message.from, preproccessPh.data.message, 'ph.jpg', '', message.id)
                console.log('Success creating image!')
            }
            break
         case prefix+'tahta':{
            const disable = await getDB.cek_disable(message.from, `${prefix}tahta`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
             if (isLimit(serial)) return 
    
             limitAdd(serial)
             const jreng = body.slice(7)
             if (!jreng) return iluser.reply(message.from, `Contoh *${prefix}tahta iluser_BOT*`, message.id)
             if (jreng.length > 15) return iluser.reply(message.from, 'Maksimal 15 Huruf!', message.id)
             await iluser.sendFileFromUrl(message.from, `https://api.zeks.xyz/api/hartatahta?apikey=apivinz&text=${jreng}`, message.id)        
             console.log(color('SUCCESS | tahta','olive'))}
             break
          break               
        case prefix+'carilagu':
                if (isMedia && isVoice && isAudio || isQuotedAudio || isQuotedVoice){
                    try{
                    await iluser.reply(from, 'searching...', id)
                    const encryptMedia = isQuotedAudio || isQuotedVoice ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    fs.writeFile(`./temp/audio.mp3`, mediaData)
                    const sampleq = fs.readFileSync(`./temp/audio.mp3`)
                    acr.identify(sampleq).then(metadata => {
                        console.log(metadata)
                    iluser.reply(from, `${metadata.metadata.status.msg}`, mesaage.id)
                    iluser.reply(from, `Music Finder

Judul Lagu : ${metadata.metadata.music[0].title}
Artist : ${metadata.metadata.music[0].artists[0].name}
Album : ${metadata.metadata.music[0].album.name}
Rilis : ${metadata.metadata.music[0].release_date}`, message.id)
                    })
                    fs.unlinkSync(`./temp/audio.mp3`)
                    }catch(err){
                            console.log(err)
                            iluser.reply(from, `${err}`)
                            }
                        }
                break
        case prefix+'maps':
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}maps lombok`, message.id)
            const mapz = body.slice(6)
            try {
            const mapz2 = await axios.get('https://mnazria.herokuapp.com/api/maps?search=' + mapz)
            const { gambar } = mapz2.data
            const pictk = await bent("buffer")(gambar)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, base64, 'maps.jpg', `*Hasil Maps : ${mapz}* ${mess.iklan}`, message.id)
            console.log('SUCCESS | maps')
            } catch (err) {
             console.error('FAILED | maps')
             await iluser.reply(message.from, 'Error!', message.id)
             iluser.sendText(ownerNumber, 'Error Maps: '+ err)
           }
          break
        case prefix+'wait':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            limitAdd(serial)
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                iluser.reply(message.from, 'Searching....', message.id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                    if (resolt.docs && resolt.docs.length <= 0) {
                        iluser.reply(message.from, 'Maaf, saya tidak tau ini anime apa', message.id)
                    }
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                        teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n'
                    }
                    teks += `• *Title Japanese* : ${title}\n• *Title chinese* : ${title_chinese}\n• *Title Romaji* : ${title_romaji}\n• *Title English* : ${title_english}\n`
                    teks += `• *Ecchi* : ${is_adult}\n`
                    teks += `• *Eps* : ${episode.toString()}\n`
                    teks += `• *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    iluser.sendFileFromUrl(message.from, video, 'nimek.mp4', `${teks} ${mess.iklan}`, message.id).catch(() => {
                        iluser.reply(message.from, teks, message.id)
                    })
                })
                .catch(() => {
                    iluser.reply(message.from, 'Error !', message.id)
                })
            } else {
                iluser.sendFileFromUrl(message.from, tutor, 'Tutor.jpg', 'Neh contoh mhank!', message.id)
            }
            break
    case prefix+'exif':
                if (!isOwner) return await iluser.reply(message.from, `Nte siapa?`, message.id)
                const exx = body.slice(6)
                const namaPack = exx.split('|')[0]
                const authorPack = exx.split('|')[1]
                exif.create(namaPack, authorPack)
                await iluser.reply(message.from, `setting done.`, message.id)
            break
        case prefix+'quoteit':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            limitAdd(serial)
            if (isBlocked) return await reply(message.from, mess.blockk, message.id)
            if(args.length == 1) return await reply(message.from, "Maaf, tidak boleh kosong.", message.id)
            if (isMedia) 
            {
                try{
                    const pesannya = body.slice(9).split('|')[0]
                    let wm = ''
                    typeof body.slice(9).split('|')[1] == 'undefined' ? wm = ' ' : wm = body.slice(9).split('|')[1]
                    const mediaData = await decryptMedia(message);
                    const imageBase64 = `data:${message.mimetype};base64,${mediaData.toString('base64')}`;
                    const rand = genUniqueId(5)
                    const result = await generate(pesannya, wm, rand, encodeURIComponent(imageBase64), 'true')
                    result == 'fail' ? await reply(message.from, "⛔ error/resend") : await iluser.sendImage( message.from, result, `${rand}.jpg`, `QuoteIT X *iluser_BOT* ${mess.iklan}`, message.id);
                }catch(err)
                {
                    console.log(err)
                }
            }else{
              try {
                if (message.quotedMsgObj == null) 
                {    
                    const pesannya = body.slice(9).split('|')[0]
                    let wm = ''
                    typeof body.slice(9).split('|')[1] == 'undefined' ? wm = ' ' : wm = body.slice(9).split('|')[1] 
                    const rand = genUniqueId(5)
                    const param = randNominal()
                    const result = await generate(pesannya, wm, rand, param, false)
                    result == 'fail' ? await iluser.reply(message.from, "⛔ error/resend") : await iluser.sendImage( message.from, result, `${rand}.jpg`, `QuoteIT X *iluser_BOT* ${mess.iklan}`, message.id);
                }else if (message.quotedMsgObj!== null) 
                {
                    if(message.quotedMsgObj.type== 'image')
                    {
                        try{
                            const pesannya = body.slice(9).split('|')[0]
                            let wm = ''
                            typeof body.slice(9).split('|')[1] == 'undefined' ? wm = ' ' : wm = body.slice(9).split('|')[1]
                            const mediaData = await decryptMedia(message.quotedMsgObj);
                            const imageBase64 = `data:${message.quotedMsgObj.mimetype};base64,${mediaData.toString('base64')}`;
                            const rand = genUniqueId(5) 
                            const result = await generate(pesannya, wm, rand, encodeURIComponent(imageBase64), 'true')
                            result == 'fail' ? await iluser.reply(message.from, "⛔ error/resend") : await iluser.sendImage( message.from, result, `${rand}.jpg`, `QuoteIT X *iluser_BOT* ${mess.iklan}`, message.id);
                        }catch(err)
                        {
                            console.log(err)
                        }
                    
                    }else if(message.quotedMsgObj.type == 'chat')
                    {
                        const pesannya = message.quotedMsgObj.body
                        let wm = body.slice(9) 
                        const rand = genUniqueId(5)
                        const param = randNominal()
                        const result = await generate(pesannya, wm, rand, param, false)
                        result == 'fail' ? await iluser.reply(message.from, "⛔ error/resend") : await iluser.sendImage( message.from, result, `${rand}.jpg`, `QuoteIT X *iluser_BOT* ${mess.iklan}`);
                    }
                        
                    else{
                        await iluser.reply(message.from, 'Maaf, tidak ditemukan foto/text.', message.id)
                    }
                }      
              } catch (error) {
                 console.log(error) 
              }  
            }
        break
        case prefix+'quotemaker':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            limitAdd(serial)
            argz = body.trim().split('|')
            if (arg.length >= 4) {
                const quotes = argz[1]
                const author = argz[2]
                const theme = argz[3]
                await quotemaker(quotes, author, theme).then(amsu => {
                    iluser.sendFile(message.from, amsu, 'quotesmaker.jpg',`${mess.iklann}`).catch(() => {
                       iluser.reply(message.from, mess.error.Qm, message.id)
                    })
                })
            } else {
                iluser.reply(message.from, `Usage: \n${prefix}quotemaker |teks|watermark|theme\n\nEx :\n${prefix}quotemaker |ini contoh|bicit|random`, message.id)
            }
            break
        case prefix+'listchannel':
            if(isReg(obj)) return
            iluser.reply(message.from, listChannel, message.id)
            break
        case prefix+'tv':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}tv antv`, message.id)
            const queri = body.slice(4)
            const jadwal = await fetch(`https://api.zeks.xyz/api/jadwaltv?channel=${queri}&apikey=apivinz`)
            const jdwl = await jadwal.json()
            iluser.reply(message.from, `Nih tod \n${jdwl.result}\n`, message.id)
            break
        case prefix+'jadwaltvnow': // API MATI
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            limitAdd(serial)
            const jadwalNow = await axios.get('https://docs-jojo.herokuapp.com/jadwaltvnow')
            iluser.reply(message.from, `Jam : ${jadwalNow.data.jam}\n\nJadwalTV : ${jadwalNow.data.jadwalTV}`, message.id)
            break
            case prefix+'asu':
            case prefix+'anjing':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            limitAdd(serial)
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = list[Math.floor(Math.random() * list.length)]
            iluser.sendFileFromUrl(message.from, kya, 'Dog.jpeg', `Dah mirip *${undefined, pushname}* belum?`, message.id)
            break
        case prefix+'qrcode':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}qrcode ilwan ganteng`, message.id)
            limitAdd(serial)
           if(!args.lenght >= 2) return
           let qrcodes = body.slice(8)
           await iluser.sendFileFromUrl(message.from, `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrcodes}`, 'gambar.png', `Qrcode X iluser_BOT ${mess.iklan}`, message.id)
           break
        case prefix+'readqr':
        case prefix+'qrread':{
            if (isMedia && type === 'image' || isQuotedImage) {
                const qrCode = isQuotedImage ? quotedMsg : message
                const downQr = await decryptMedia(qrCode, uaOverride)
				const upQrCode = await uploadImages(downQr, false)
				const getQrText = await axios.get(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${upQrCode}`)
				const theQRText = getQrText.data[0].symbol[0].data
				if (theQRText == null) return await iluser.reply(from, 'Not a QR code.', id)
				await iluser.reply(from, `${theQRText}`, id).catch(async () => { await iluser.reply(from, `Failed`, id) })
            } else return await iluser.reply(from, `Gambar qrnya mana tod?`, id)
        }
            break
        case prefix+'apk':
        try {
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length == 1) return await iluser.reply(from, `Masukkan nama aplikasi`, id)
			const aptoide = await axios.get(`http://ws75.aptoide.com/api/7/apps/search?query=${encodeURIComponent(body.slice(5))}&trusted=true`)
			if (aptoide.data.datalist.total == 0) return iluser.reply(from, `Data tidak ditemukan`, id)
			const getApk = aptoide.data.datalist.list[0]
			const sizeApk = (getApk.size / 1048576).toFixed(1)+' MB'
            if (Number(sizeApk.split(' MB')[0]) > 35.00) return iluser.sendFileFromUrl(message.from, getApk.graphic, `thumb.jpg`, `\nSizenya terlalu gede sayang, dd gakuat :(\n\nunduh manual melalui link di bawah ini\n${getApk.file.path} [ *${sizeApk}* ]\n\n*Judul* : ${getApk.name} ${mess.iklan}`, message.id)
			await iluser.sendFileFromUrl(from, `${getApk.graphic}`, 'iluser.png', `• *Title* : ${getApk.name}\n• *Package* : ${getApk.package}\n• *Weight* : ${sizeApk}\n• *Version* : ${getApk.file.vername}\n\n_Uploading . . ._`, id)
            iluser.sendFileFromUrl(from, getApk.file.path, `iluserBOT_${getApk.name}.apk`, '', id)
            limitAdd(serial)
        } catch (err){
            iluser.reply(from, `Aplikasi tidak ditemukan.`, message.id)
            iluser.sendText(ownerNumber, `Apk downloader: ${err}`)
        }
            break
        case prefix+'neko':
        case prefix+'kucing':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            limitAdd(serial)
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            iluser.sendFileFromUrl(message.from, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko ', id)
            break
        case prefix+'pokemon':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            limitAdd(serial)
            q7 = Math.floor(Math.random() * 890) + 1;
            iluser.sendFileFromUrl(message.from, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+q7+'.png','Pokemon.png', `${mess.iklann}`, message.id)
            break
        case `${prefix}imgcompress`:
                if(isReg(obj)) return
                        
                if (isLimit(serial)) return
            
                limitAdd(serial)
                if (isMedia) {
                    const gambar = await decryptMedia(message, uaOverride)
                    await processImg(gambar)
                } else if (quotedMsg && quotedMsg.type == 'image') {
                    const compres = await decryptMedia(quotedMsg)
                    await processImg(compres)
                } else {
                    iluser.reply(message.from, `Kirim atau balas gambar dengan ${prefix}imgcompress`, id)
                }
                async function processImg(gambar) {
                    let image = await Jimp.read(gambar);
                    image.quality(55).write('./quote/compressed.jpeg', function (err) {
                        if (err) console.log(color('FAILED | Compressed foto', 'red'))
                        iluser.sendFile(message.from, './quote/compressed.jpeg', 'compressed.jpg', '_*Processing Sukses!_');
                    });
                }
                break
        case `${prefix}bagusin`:{
                if(isReg(obj)) return
                if (isLimit(serial)) return
                limitAdd(serial)
                if (isMedia) {
                    const gambar = await decryptMedia(message, uaOverride)
                    const filename = `./temp/upscale.png`
                    fs.writeFileSync(filename, gambar)
                } else if (quotedMsg && quotedMsg.type == 'image') {
                    const compres = await decryptMedia(quotedMsg)
                    const filename = `./temp/upscale.png`
                    fs.writeFileSync(filename, compres)
                } else {
                    iluser.sendText(message.from, `Tidak ada gambar! untuk !compress kirim gambar dengan caption !compress`)
                }
                
                await Waifu2x.upscaleImage(`./temp/upscale.png`, "./temp/upscaled.png", {noise: 2, scale: 2.0})
                await iluser.sendFile(from, "./temp/upscaled.png", '', 'nih', id)
                }
                break

case `${prefix}a1`:{
const textToImage = require('text-to-image');
textToImage.generate(body.slice(4), {
  debug: true,
  maxWidth: 480,
  fontSize: 18,
  fontFamily: 'Arial'
}).then(function (dataUri) {
  //console.log(dataUri);
  iluser.sendImage(message.from, dataUri, 'iluser.png', `${mess.iklann}`, id)
});
}
break
        case `${prefix}wallanime`:
                if(isReg(obj)) return
                if (isLimit(serial)) return
                limitAdd(serial)  
                    const walnime = ['https://wallpaperaccess.com/full/395986.jpg', 'https://wallpaperaccess.com/full/21628.jpg', 'https://wallpaperaccess.com/full/21622.jpg', 'https://wallpaperaccess.com/full/21612.jpg', 'https://wallpaperaccess.com/full/21611.png', 'https://wallpaperaccess.com/full/21597.jpg', 'https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png', 'https://wallpaperaccess.com/full/21591.jpg', 'https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg', 'https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg', 'https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png', 'https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg', 'https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png', 'https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg', 'https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg', 'https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png', 'https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png', 'https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg', 'https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg', 'https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png', 'https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png', 'https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg', 'https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png', 'https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg', 'https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg', 'https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg', 'https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png', 'https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg', 'https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg', 'https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png', 'https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg', 'https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png', 'https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg', 'https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg', 'https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg', 'https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png', 'https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg', 'https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png', 'https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg', 'https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg', 'https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg', 'https://cdn.nekos.life/wallpaper/3db40hylKs8.png', 'https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg', 'https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png', 'https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg', 'https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg', 'https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg', 'https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg', 'https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg', 'https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg', 'https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png', 'https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg', 'https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg', 'https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg', 'https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png', 'https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png', 'https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png', 'https://cdn.nekos.life/wallpaper/yO6ioREenLA.png', 'https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg', 'https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png', 'https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png', 'https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg', 'https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg', 'https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg', 'https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg', 'https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg', 'https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png', 'https://cdn.nekos.life/wallpaper/32EAswpy3M8.png', 'https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png', 'https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg', 'https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png', 'https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg', 'https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png', 'https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png', 'https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg', 'https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg', 'https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png', 'https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg', 'https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg', 'https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg', 'https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png', 'https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png', 'https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg', 'https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg', 'https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg', 'https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png', 'https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg', 'https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png', 'https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg', 'https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png', 'https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg', 'https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg', 'https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg', 'https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg', 'https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg', 'https://cdn.nekos.life/wallpaper/9ru2luBo360.png', 'https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png', 'https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png', 'https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg', 'https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg', 'https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg', 'https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg', 'https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg', 'https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg', 'https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg', 'https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png', 'https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png', 'https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg', 'https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg', 'https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png', 'https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg', 'https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg', 'https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg', 'https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg', 'https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg', 'https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg', 'https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg', 'https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg', 'https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg', 'https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png', 'https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg', 'https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg', 'https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png', 'https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg', 'https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png', 'https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg', 'https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png', 'https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg', 'https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png', 'https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg', 'https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg', 'https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png', 'https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png', 'https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png', 'https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png', 'https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png', 'https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png', 'https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png', 'https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png', 'https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg', 'https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg', 'https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg', 'https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg', 'https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg', 'https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png', 'https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg', 'https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg', 'https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg', 'https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg', 'https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg', 'https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg', 'https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png', 'https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png', 'https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png', 'https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg', 'https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg', 'https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg', 'https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg', 'https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg', 'https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png', 'https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png', 'https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg', 'https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png', 'https://cdn.nekos.life/wallpaper/3db40hylKs8.png', 'https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg', 'https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg', 'https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png', 'https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png', 'https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg', 'https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png', 'https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg', 'https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg', 'https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png', 'https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg', 'https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg', 'https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg', 'https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg', 'https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg', 'https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg', 'https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg', 'https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png', 'https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png', 'https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg', 'https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png', 'https://cdn.nekos.life/wallpaper/58C37kkq39Y.png', 'https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg', 'https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg', 'https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg', 'https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png', 'https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg', 'https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg', 'https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg', 'https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg', 'https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png', 'https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg', 'https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg', 'https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png', 'https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg', 'https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg', 'https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg', 'https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg', 'https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png', 'https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png', 'https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg', 'https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg', 'https://cdn.nekos.life/wallpaper/89MQq6KaggI.png', 'https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
                    let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
                    iluser.sendFileFromUrl(message.from, walnimek, 'Nimek.jpg', `${mess.iklann}`, message.id)
                    break
        case 'cerpen':
                if(isReg(obj)) return
                if (isLimit(serial)) return
                limitAdd(serial)  
                console.log('Sending random cerpen...')
                const cerpwn = await axios.get(`https://masgi.herokuapp.com/api/cerpen`)
                await iluser.reply(message.from, cerpwn.data.data, message.id)
                    .then(() => console.log('Success sending cerpen..'))
                    .catch(async (err) => {
                        console.log(color('FAILED | cerpen', 'red'))
                        iluser.sendText(ownerNumber, `Error cerpen:\n${err}`)
                        iluser.reply(message.from, 'Error', message.id)
                    })
            break
        // ADMIN & OWNER
        case 'cekprefix':
            iluser.reply(message.from, `My prefix [ ${prefix} ]`, message.id)
            break
        case prefix+'setprefix':{
            if(!isOwner) return
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *${prefix}prefix [ NEW PREFIX ]*`, message.id)
            prefix = args[1]
            setting.prefix = `${prefix}`
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting))
            iluser.sendText(message.from, `Berhasil Mengganti Prefix Ke *「* ${prefix} *」*`)
            }
            break
        case prefix+'bc': // KASIH CREDIT DONG KALO COPAS
            if (!isPilot && !isOwner) return 
                bctxt = body.slice(4)
                txtbc = `\n${bctxt}\n\n\n_*iluser_BOT*_ | t.me/iluser_BOT`
                const semuagrup = await iluser.getAllChatIds();
                if(quotedMsg && quotedMsg.type == 'image'){
                    const mediaData = await decryptMedia(quotedMsg)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    for(let grupnya of semuagrup){
                        var cekgrup = await iluser.getChatById(grupnya)
                        if(!cekgrup.isReadOnly) await iluser.sendImage(grupnya, imageBase64, 'gambar.jpeg', txtbc)
                    }
                    iluser.reply(message.from, 'Broadcast sukses!', message.id)
                }else{
                    for(let grupnya of semuagrup){
                        var cekgrup = await iluser.getChatById(grupnya)
                        if(!cekgrup.isReadOnly && isMuted(grupnya)) await iluser.sendText(grupnya, txtbc)
                    }
                            iluser.reply('Broadcast Success!', message.id)
                }
                break
        case prefix+'adminlist':
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            let mimin = 'Neeh adminnya\n'
            for (let admon of groupAdmins) {
                mimin += `• @${admon.replace(/@c.us/g, '')}\n` 
            }
           // await sleep(2000)
            await iluser.sendTextWithMentions(message.from, mimin)
            break
        case prefix+'ownergroup':
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            const Owner_ = chat.groupMetadata.owner
            await iluser.sendTextWithMentions(message.from, `Owner Group : @${Owner_}`)
            break
        case prefix+'tagall':
        case prefix+'mentionall':{
            const disable = await getDB.cek_disable(message.from, `${prefix}tagall`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            if (!isBotGroupAdmins  && !isOwner) return iluser.reply(message.from, mess.botnonadmin, message.id)
            await iluser.reply(from, 'Scanning penghuni grup', message.id)
            await sleep(2000)
            const groupMem = await iluser.getGroupMembers(groupId)
            let hehe = `${body.slice(8)}\n\n`
            for (let i = 0; i < groupMem.length; i++) {
                hehe += '•'
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += '\nPowered by *_iluser_BOT_*'
            await sleep(1000)
            await iluser.sendTextWithMentions(message.from, hehe, message.id)}
            break;
        case prefix+'kickall':
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner && !isOwner) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan oleh Owner group', message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
            const allMek = await iluser.getGroupMembers(groupId)
            for (let i = 0; i < allMek.length; i++) {
                if ((ownerNumber).includes(allMek[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await iluser.removeParticipant(groupId, allMek[i].id)
                }
            }
            iluser.reply(message.from, 'Success kick all member', message.id)
            break
        case prefix+'leaveall':
            if (!isOwner) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink', message.id)
            const allChats = await iluser.getAllChatIds()
            const allGroups = await iluser.getAllGroups()
            for (let gclist of allGroups) {
                await iluser.sendText(gclist.contact.id, `Bot sedang melakukan pembersihan rutin\ntotal chat: ${allChats.length}\n\nUser premium bisa langsung menambahkan bot dengan perintah ${prefix}join`)
                await sleep(2000)
                await iluser.leaveGroup(gclist.contact.id)
                await sleep(1000)
                await iluser.deleteChat(chatId)
            }
            iluser.reply(message.from, 'Succes leave all group!', message.id)
            break
        case prefix+'arsip':{
            if (!isOwner) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink', message.id)
            const allChatz = await iluser.getAllChats()
            for (let dchat of allChatz) {
                await iluser.archiveChat(dchat.id, archive, true)
            }
            }
            iluser.reply(message.from, 'Succes leave all group!', message.id)
            break
        case prefix+'refresh':
                    if (!isOwner) return 
                    await iluser.reply(message.from,  `Refreshing web whatsapp page!`, id)
                    setTimeout(() => {
                        try {
                            iluser.refresh().then(async () => {
                                console.log(`Bot refreshed!`)
                                iluser.reply(message.from, `Bot refreshed!`, id)
                            })
                        } catch (err) {
                            console.log(color('[ERROR]', 'red'), err)
                        }
                    }, 2000)
                    break
        case prefix+'deletepm': {//menghapus seluruh pesan diakun bot selain group
                    if (!isOwner) return 
                    const allChat1 = await iluser.getAllChats()
                    iluser.reply(message.from,`Processed to delete ${allChat1.length} chat!`, id)
                    let count = 0
                    for (let dchat of allChat1) {
                        await sleep(1000)
                        if (!dchat.isGroup) {
                            iluser.deleteChat(dchat.id)
                            count += 1
                        }
                    }
                    iluser.sendText(message.from,`Delete all Private chats success! Total: ${count} chats`)
                    break
                }
                
        case prefix+'clearall':
            if (!isPilot && !isOwner) return
            const allChatz = await iluser.getAllChats()
            iluser.reply(message.from, `Processed to clear ${allChatz.length} chat!`, message.id)
            let count = 0
            for (let dchat of allChatz) {
                await sleep(1000)
                await iluser.clearChat(dchat.id)
                count += 1
            }
            iluser.sendText(message.from, `Clear all chat success! Total: ${count} chats`, message.id)
            break
        case prefix+'bcgrup': {//untuk broadcast atau promosi ke group
                    if (!isOwner) return 
                    const groupz = await iluser.getAllGroups()
                    iluser.reply(from, `Broadcast in progress! Total: ${groupz.length} groups`, id)
                    let count = 0
                    for (let idk of groupz) {
                        await sleep(2000)
                        await iluser.sendText(idk.id, `${body.slice(8)}\n\n\n_*iluser_BOT*_ | t.me/iluser_BOT`)
                        count += 1
                    }
                    iluser.reply(from, `Broadcast selesai! Total: ${count} groups`, id)
                    break
                }
            // GROUP COMMAND

            case prefix+'info-lock':{
                if(isReg(obj)) return
                const disable = await getDB.cek_disable(message.from, `${prefix}info-lock`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
                if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
                if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
                    iluser.setGroupEditToAdminsOnly(groupId, true)
                    iluser.sendTextWithMentions(message.from, `Edit info grup telah di kunci oleh @${sender.id.replace('@c.us','')}`, message.id)
                }
                break
            case prefix+'info-unlock':{
                if(isReg(obj)) return
                const disable = await getDB.cek_disable(message.from, `${prefix}info-unlock`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
                if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
                if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
                    iluser.setGroupEditToAdminsOnly(groupId, false)
                    iluser.sendTextWithMentions(message.from, `Edit info grup talah di buka oleh @${sender.id.replace('@c.us','')}`, message.id)
                }
                break
              case prefix+'lock':{
                if(isReg(obj)) return
                const disable = await getDB.cek_disable(message.from, `${prefix}lock`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
                if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
                if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
                    iluser.setGroupToAdminsOnly(groupId, true)
                    iluser.sendTextWithMentions(message.from, `Grup telah ditutup oleh  @${sender.id.replace('@c.us','')}`, message.id)
                    }
                    break
              case prefix+'unlock':{
                if(isReg(obj)) return
                const disable = await getDB.cek_disable(message.from, `${prefix}unlock`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
                if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
                if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
                    iluser.setGroupToAdminsOnly(groupId, false)
                    iluser.sendTextWithMentions(message.from, `Grup telah dibuka oleh @${sender.id.replace('@c.us','')}`, message.id)
                }
                break      
        case prefix+'addwelcome':{
            if(isReg(obj)) return
            const disable = await getDB.cek_disable(message.from, `${prefix}addwelcome`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
            //if (!isOwner) return iluser.reply(message.from, 'Fitur ini dinonaktifkan developer bot', message.id)
        const id = message.from;
        await getDB.addWelcome(id)
        iluser.sendText(message.from, `_welcome message_ sudah diaktifkan untuk grup ini`);
        console.log(`SUCCESS | add welcome message`);
      }break
        case prefix+'welcome':{
            if(isReg(obj)) return
            const disable = await getDB.cek_disable(message.from, `${prefix}welcome`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
        try{
        (async () => {
          const status = message.body.slice(9);
          const action = message.body.split(' ');
          const id = message.from;
          const cek = await getDB.cekWlcmGroup(id);
          if (cek.length == 0) {
                iluser.sendText(message.from, `Maaf, _welcome message_ untuk grup ini belum diaktifkan, silahkan aktifkan dengan perintah *${prefix}addwelcome*`);
                console.log('FAILED | grup belum terdaftar welcome message')
              }else if (status == 'on') {
                await getDB.updateWelcome(id, 'on');
                iluser.reply(message.from, `_welcome message_ diaktifkan`, message.id);
                console.log(`SUCCESS | aktifkan welcome message`)
              }else if (status == 'off') {
                await getDB.updateWelcome(id, 'off')
                iluser.reply(message.from, `_welcome message_ dinonaktifkan`, message.id);
                console.log(`SUCCESS | nonaktifkan welcome message`)
              }else if (action[1] == 'add') {
                await getDB.update_msg_add(id, encodeURIComponent(message.body.slice(13)));
                iluser.reply(message.from, `Message add sudah diupdate!`, message.id);
                console.log(`SUCCESS | update message add`)
              }
              else if (action[1] == 'kick') {
                await getDB.update_msg_kick(id, encodeURIComponent(message.body.slice(14)));
                iluser.reply(message.from, `Message kick sudah diupdate!`, message.id);
                console.log(`SUCCESS | update message kick`)
              } 
            })();
        } catch (err){
                console.log(color('FAILED | Welcome', 'red'))
                iluser.sendText(ownerNumber, `Error welcome:\n${err}`)
                iluser.reply(message.from, 'Error', message.id)
        } 
    }
    break

        case prefix+'add':{
            const disable = await getDB.cek_disable(message.from, `${prefix}add`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
                if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
                if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
                if (!isOwner) return iluser.reply(message.from, `Masukin manual aja tod. males bikin bot terbanned`, message.id)
            try{
                let userId = await numberValidation(args[1]);
                let isUser = await iluser.getContact(userId)
                if(!isUser) return iluser.reply(from, '[✘] Mohon masukan nomor yang valid!', id)
                if(userId === botNumber || groupMembers.includes(userId)) return iluser.reply(from, '[✘] User sudah berada dalam group!', id)
                await iluser.addParticipant(groupId, userId)
                await iluser.sendTextWithMentions(from, `[✔️] Perintah diterima! menambahkan @${userId} ke grup.`)
            }catch (err) {
                // console.log(err)
                // await iluser.reply(from, replyMsg.err.msg, id)
                await iluser.sendTextWithMentions(from, `[❗] @${userId} menolak untuk ditambahkan ke grup`, id)
            }
        }
            break

        case prefix+'add':{
            const disable = await getDB.cek_disable(message.from, `${prefix}add`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            try {
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
            if (!isOwner) return iluser.reply(message.from, `Masukin manual aja tod. males bikin bot terbanned`, message.id)
                if (!quotedMsg) {
                const newMem = args[1]
                await iluser.reply(message.from, `Oke mint. Menambahkan ${newMem} ke grup.`, message.id)
                await sleep(2000)
                await iluser.addParticipant(groupId, newMem + '@c.us')
                console.log(`SUCCESS | Nambah member`)
                } else {
                    const qmid = quotedMsgObj.sender.id
                    await iluser.reply(message.from, `Oke mint. Menambahkan ${qmid.replace('@c.us', '')} ke grup.`, message.id)
                await sleep(2000)
                await iluser.addParticipant(groupId, qmid)
                console.log(`SUCCESS | Nambah member`)
                }
            } catch(e) {
                await iluser.reply(message.from, `*Target tidak dapat di masukkan ke dalam grup*\n1. Mungkin nomornya tidak teregistrasi di WhatsApp\n2. Hanya orang yang ada di kontaknya yg bisa menambahkan\n3. Kesalahan pada server`, message.id)
            }
        }
            break
        case prefix+'okick':
        case 'p':{
            if (!isPilot && !isOwner) return
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)            
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
            if (!quotedMsg) {
                if (mentionedJidList.length === 0) return 
                if (mentionedJidList[0] === botNumber) return 
            await iluser.sendTextWithMentions(message.from, `mengeluarkan anak anjing ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join(' ')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                await sleep(2000)
                await iluser.removeParticipant(groupId, mentionedJidList[i])
            }
        } else {
            const qmid = quotedMsgObj.sender.id
            if (qmid === botNumber) return await iluser.reply(message.from, 'Format Salah', message.id)
            await iluser.sendTextWithMentions(message.from, `mengeluarkan anak anjing @${qmid.replace('@c.us', '')}`)
            await sleep(2000)
            await iluser.removeParticipant(groupId, qmid)
        }
    }
            break
        case prefix+'kick':{
            const disable = await getDB.cek_disable(message.from, `${prefix}kick`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
            if (!quotedMsg) {
                if (mentionedJidList.length === 0) return iluser.reply(message.from, 'Yang di kick siapa tolol?', message.id)
                if (mentionedJidList[0] === botNumber) return await iluser.reply(message.from, 'Format Salah', message.id)
            await iluser.sendTextWithMentions(message.from, `Akang gendaang, mari kita tendang ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join(' ')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (groupAdmins.includes(mentionedJidList[i])) return await iluser.sendText(message.from, 'Gagal, tidak bisa mengeluarkan admin grup.', message.id)
                await sleep(2000)
                await iluser.removeParticipant(groupId, mentionedJidList[i])
            }
        } else {
            const qmid = quotedMsgObj.sender.id
            if (qmid === botNumber) return await iluser.reply(message.from, 'Jangan tolol deh', message.id)
            if (qmid === groupAdmins) return await iluser.reply(message.from, 'Gagal, tidak bisa mengeluarkan admin grup.', message.id)
            await iluser.sendTextWithMentions(message.from, `Akang gendaang, mari kita tendang @${qmid.replace('@c.us', '')}`)
            await sleep(2000)
            await iluser.removeParticipant(groupId, qmid)
        }}
            break
        case prefix+'leave':{
            const disable = await getDB.cek_disable(message.from, `${prefix}leave`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isPremium && !isOwner) return
            await iluser.sendText(message.from,'Goodbye :)').then(() => {
                    iluser.leaveGroup(groupId)})
            }
            break
        case prefix+'promote':{
            const disable = await getDB.cek_disable(message.from, `${prefix}promote`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
            if (!quotedMsg) {
                if (mentionedJidList.length != 1) return iluser.reply(message.from, 'Yang mau di promote siapa tol?', message.id)
            if (groupAdmins.includes(mentionedJidList[0])) return await iluser.reply(message.from, 'Target sudah menjadi admin [Already Admin]', message.id)
            if (mentionedJidList[0] === botNumber) return await iluser.reply(message.from, 'Wrong Format!', message.id)
            await iluser.promoteParticipant(groupId, mentionedJidList[0])
            await iluser.sendTextWithMentions(message.from, `Oke mint, menambahkan @${mentionedJidList[0].replace('@c.us', '')} sebagai pawang grup.`)
            } else {
                const qmid = quotedMsgObj.sender.id
                if (groupAdmins.includes(qmid)) return await iluser.reply(message.from, 'Target sudah menjadi admin [Already Admin]', message.id)
                if (qmid === botNumber) return await iluser.reply(message.from, 'Mana bisa promote diri sendiri. tol!', message.id)
                await iluser.sendTextWithMentions(message.from, `Oke mint, menambahkan @${qmid.replace('@c.us', '')} sebagai pawang grup.`)
                await sleep(2000)
                await iluser.promoteParticipant(groupId, qmid)
            }}
            break
        case prefix+'demote':{
            const disable = await getDB.cek_disable(message.from, `${prefix}demote`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
            if (!quotedMsg) {
                if (mentionedJidList.length !== 1) return iluser.reply(message.from, 'Yang mau di demote siapa tol?', message.id)
            if (!groupAdmins.includes(mentionedJidList[0])) return await iluser.reply(message.from, 'Target bukan admin', message.id)
            if (mentionedJidList[0] === botNumber) return await iluser.reply(message.from, 'Wrong Format!', message.id)
            await iluser.demoteParticipant(groupId, mentionedJidList[0])
            await iluser.sendTextWithMentions(message.from, `Oke mint, menghapus jabatan @${mentionedJidList[0].replace('@c.us', '')}.`)
            } else {
                const qmid = quotedMsgObj.sender.id
                if (!groupAdmins.includes(qmid)) return await iluser.reply(message.from, 'Target bukan admin [Target not Admin]', message.id)
            if (qmid === botNumber) return await iluser.reply(message.from, 'Mana bisa demote diri sendiri. tol!', message.id)
            await iluser.sendTextWithMentions(message.from, `Oke mint, menghapus jabatan @${qmid.replace('@c.us', '')}.`)
            await sleep(2000)
            await iluser.demoteParticipant(groupId, qmid)
            }}
            break

        // MASTER MENU
        case `${prefix}cgc`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}cgc`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                    if (!isPilot && !isOwner) return 
                    argz = body.trim().split(' ')
                    const gcname = argz[1]
                    iluser.createGroup(gcname, mentionedJidList)
                    iluser.sendText(message.from, 'Berhasil membuat group!')
                }
                break
        case `${prefix}setgrouplimit`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}setgrouplimit`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                    if (!isPilot && !isOwner) return
                    if (args.length == 1) return iluser.reply(message.from, `Contoh *${prefix}setgrouplimit 15*`, message.id)
                    const gli = body.slice(15)
                    setting.groupLimit = `${gli}`
                    groupLimit = `${gli}`
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    await iluser.reply(message.from, `[ WARN ] setting group limit to *${gli}* . . .`, message.id)
                    await sleep(3000)
                    await iluser.reply(message.from, `Setting done.`, message.id)
                }
                break
        case `${prefix}addgrup`:{ //LIMIT ADD GROUP PREMIUM USER
            const disable = await getDB.cek_disable(message.from, `${prefix}addgrup`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                    if (!isPilot && !isOwner) return
                    if (args.length == 1) return iluser.reply(message.from, `Contoh *${prefix}addgrup 15*`, message.id)
                    const gli = body.slice(9)
                    setting.gruplimitCount = `${gli}`
                    gruplimitCount = `${gli}`
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    await iluser.reply(message.from, `Merubah batas invite bot ke grup menjadi *${gli}* . . .`, message.id)
                    await sleep(3000)
                    await iluser.reply(message.from, `Setting done.`, message.id)
                }
                break
        case `${prefix}setmemberlimit`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}setmemberlimit`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                    if (!isOwner) return
                    if (args.length == 1) return iluser.reply(message.from, `Contoh *${prefix}setmemberlimit 15*`, message.id)
                    const gliii = body.slice(16)
                    setting.memberLimit = `${gliii}`
                    memberLimit = `${gliii}`
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    await iluser.reply(message.from, `[ WARN ] setting member limit to *${gliii}* . . .`, message.id)
                    await sleep(3000)
                    await iluser.reply(message.from, `Setting done.`, message.id)
                }
                break
        case `${prefix}setlimituser`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}setlimituser`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                    if (!isOwner) return
                    if (args.length == 1) return iluser.reply(message.from, `Contoh *${prefix}setlimituser 15*`, message.id)
                    const glii = body.slice(14)
                    setting.limitCount = `${glii}`
                    limitCount = `${glii}`
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    await iluser.reply(message.from, `[ WARN ] setting limit user to ${glii}/day`, message.id)
                    await sleep(3000)
                    await iluser.reply(message.from, `Setting done.`, message.id)
            }
            break
        case `${prefix}mtcstart`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}mtcstart`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                    if (mtcState === true) return
                    if (!isOwner) return
                    setting.mtc = true
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    iluser.reply(message.from, 'Maintenance sudah di Umumkan!', message.id)
        }
                    break
        case `${prefix}mtcstop`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}mtcstop`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                    if (mtcState === false) return
                    if (!isOwner) return
                    setting.mtc = false
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    iluser.reply(message.from, 'Maintenance sudah di Umumkan!', message.id)
        }
                    break
        case prefix+'fakta':{
            const disable = await getDB.cek_disable(message.from, `${prefix}fakta`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            limitAdd(serial)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
            .then(res => res.text())
            .then(body => {
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                iluser.reply(message.from, randomnix, message.id)
            })}
            break
        case `${prefix}tod`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}tod`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                    if(isReg(obj)) return
                    if (isLimit(serial)) return
                    if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
                    const sliin = "https://blog.elevenia.co.id/wp-content/uploads/2020/04/27420-truth-or-dare.jpg"
                    const gmeek = await iluser.getGroupMembersId(groupId)
                    let gmimk = gmeek[Math.floor(Math.random() * gmeek.length)]
                    const mmkkk = `     *TRUTH OR DARE*`
                    const lllk = `Truth or Dare kali ini ditujukan kepada @${gmimk.replace(/@c.us/g, '')} \n\nSilahkan balas pesan ini dengan\n${prefix}truth atau\n${prefix}dare`
                    await iluser.sendFileFromUrl(message.from, sliin, 'ddas.jpg', mmkkk, message.id)
                    iluser.sendTextWithMentions(message.from, lllk, message.id)
        }
                    break
        case `${prefix}truth`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}truth`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return 
            if (isLimit(serial)) return
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            const dota = fs.readFileSync('./lib/database/truth.json')
            const dotaJson = JSON.parse(dota)
            const rondtruth = Math.floor(Math.random() * dotaJson.length)
            const rondtruthh = dotaJson[rondtruth]
            await iluser.reply(message.from, `*TRUTH*\n\n${rondtruthh}`, message.id)
            limitAdd(serial)
        }
            break
        case `${prefix}dare`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}dare`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return 
            if (isLimit(serial)) return
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            const dotaa = fs.readFileSync('./lib/database/dare.json')
            const dotaaJson = JSON.parse(dotaa)
            const ronddare = Math.floor(Math.random() * dotaaJson.length)
            const ronddaree = dotaaJson[ronddare]
            await iluser.reply(message.from, `*DARE*\n\n${ronddaree}`, message.id)
            limitAdd(serial)
        }
            break
        case `${prefix}addtruth`:
        if (!isOwner) return 
            const truthh = body.slice(10)
            truth.push(truthh)
            fs.writeFileSync('./lib/database/truth.json', JSON.stringify(truth))
            iluser.reply(message.from, `Kalimat *${truthh}*\ntelah berhasil ditambahkan ke Database`, message.id)
            break
        case `${prefix}deltruth`:
        if (!isOwner) return 
            const truthhh = body.slice(10)
            let deltruthhh = truth.indexOf(truthhh)
            truth.splice(deltruthhh, 1)
            fs.writeFileSync('./lib/database/truth.json', JSON.stringify(truth))
            iluser.sendText(message.from, `Kalimat *${truthhh}*\nTelah berhasil dihapus dari database`)
            break
        case `${prefix}truthlist`:
            if (!isOwner) return 
            let truthlist = `Random *truth* list\nTotal : ${truth.lenght}\n`
            for (let i of truth) {
            truthlist += `☛ ${i}\n`
            }
            await iluser.reply(message.from,truthlist, message.id)
            break
        case `${prefix}adddare`:
            if (!isOwner) return 
            const daree = body.slice(9)
            dare.push(daree)
            fs.writeFileSync('./lib/database/dare.json', JSON.stringify(dare))
            iluser.reply(message.from, `Kalimat *${daree}*\ntelah berhasil ditambahkan ke Database`, message.id)
            break
        case `${prefix}addasupan`:
            if (!isOwner) return 
            const asup = body.slice(11)
            tiktok_user.push(asup)
            fs.writeFileSync('./lib/database/usertt.json', JSON.stringify(tiktok_user))
            await sleep(2000)
            iluser.reply(message.from, `Username added to database.`, message.id)
            break
        case `${prefix}listasupan`:{
            let listasupan = `Lis username tiktok untuk random asupan\n`
            for (let i of tiktok_user) {
            listasupan += `• ${i}\n`
            }
            await iluser.reply(message.from,listasupan, message.id)
        }
        break
        case `${prefix}deldare`:
            if (!isOwner) return 
            const dareee = body.slice(9)
            let deldareee = dare.indexOf(dareee)
            dare.splice(deldareee, 1)
            fs.writeFileSync('./lib/database/dare.json', JSON.stringify(dare))
            iluser.sendText(message.from, `Kalimat *${dareee}*\nTelah berhasil dihapus dari database`)
            break
        case `${prefix}darelist`:
            if (!isOwner) return 
            let darelist = `Random *Dare* list\nTotal : ${dare.lenght}\n`
            for (let i of dare) {
            darelist += `☛ ${i}\n`
            }
            await iluser.reply(message.from, darelist, message.id)
            break
        case `${prefix}lewds`:
        case `${prefix}lewd`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}lewd`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return  
            if (!isPremium) return iluser.reply(message.from, mess.nopremium, message.id)   
            if (isGroupMsg) return iluser.reply(message.from, `Di chat pribadi aja tolol`, message.id)    
            if (isLimit(serial)) return
            limitAdd(serial)
                    if (isGroupMsg) {
                        nsfww.randomLewd()
                            .then(async ({
                                url
                            }) => {
                                await iluser.sendFileFromUrl(message.from, url, 'lewd.jpg', '', null, null, true)
                                    .then(() => console.log('Success sending lewd!'))
                            })
                            .catch(async (err) => {
                                console.log(color('FAILED | lewds', 'red'))
                                iluser.sendText(ownerNumber, `Error lewds:\n${err}`)
                                iluser.reply(message.from, 'Error', message.id)
                            })
                    } else {
                        nsfww.randomLewd()
                            .then(async ({
                                url
                            }) => {
                                await iluser.sendFileFromUrl(message.from, url, 'lewd.jpg', '', null, null, true)
                                    .then(() => console.log('Success sending lewd!'))
                            })
                            .catch(async (err) => {
                                console.log(color('FAILED | lewds', 'red'))
                                iluser.sendText(ownerNumber, `Error lewds:\n${err}`)
                                iluser.reply(message.from, 'Error', message.id)
                            })
                    }}
                    break
                case `${prefix}fetish`:{
                    const disable = await getDB.cek_disable(message.from, `${prefix}fetish`);
                    if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)                  
                    if (args.length === 1) return await iluser.reply(message.from, 'Wrong Format!', message.id)
                    if (!isPremium) return iluser.reply(message.from, mess.nopremium, message.id)
                    if (isLimit(serial)) return iluser.reply(message.from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik !limit Untuk Mengecek Kuota Limit Kamu`, message.id)

                    limitAdd(serial)
                    if (isGroupMsg) {
                        try {
                            if (args[1] === 'armpits') {
                                nsfww.armpits()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'armpits.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending armpits pic!'))
                                    })
                            } else if (args[1] === 'feets') {
                                nsfww.feets()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'feets.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending feets pic!'))
                                    })
                            } else if (args[1] === 'thighs') {
                                nsfww.thighs()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'thighs.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending thighs pic!'))
                                    })
                            } else if (args[1] === 'ass') {
                                nsfww.ass()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'ass.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending ass pic!'))
                                    })
                            } else if (args[1] === 'boobs') {
                                nsfww.boobs()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'boobs.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending boobs pic!'))
                                    })
                            } else if (args[1] === 'belly') {
                                nsfww.belly()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'belly.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending belly pic!'))
                                    })
                            } else if (args[1] === 'sideboobs') {
                                nsfww.sideboobs()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'sideboobs.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending sideboobs pic!'))
                                    })
                            } else if (args[1] === 'ahegao') {
                                nsfww.ahegao()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'ahegao.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending ahegao pic!'))
                                    })
                            } else {
                                await iluser.reply(message.from, 'Tag not found.', message.id)
                            }
                        } catch (err) {
                            console.log(color('FAILED | fetish', 'red'))
                            iluser.sendText(ownerNumber, `Error fetish:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }
                    } else {
                        try {
                            if (args[1] === 'armpits') {
                                nsfww.armpits()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'armpits.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending armpits pic!'))
                                    })
                            } else if (args[1] === 'feets') {
                                nsfww.feets()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'feets.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending feets pic!'))
                                    })
                            } else if (args[1] === 'thighs') {
                                nsfww.thighs()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'thighs.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending thighs pic!'))
                                    })
                            } else if (args[1] === 'ass') {
                                nsfww.ass()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'ass.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending ass pic!'))
                                    })
                            } else if (args[1] === 'boobs') {
                                nsfww.boobs()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'boobs.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending boobs pic!'))
                                    })
                            } else if (args[1] === 'belly') {
                                nsfww.belly()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'belly.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending belly pic!'))
                                    })
                            } else if (args[1] === 'sideboobs') {
                                nsfww.sideboobs()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'sideboobs.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending sideboobs pic!'))
                                    })
                            } else if (args[1] === 'ahegao') {
                                nsfww.ahegao()
                                    .then(async ({
                                        url
                                    }) => {
                                        await iluser.sendFileFromUrl(message.from, url, 'ahegao.jpg', `${mess.iklann}`, message.id)
                                            .then(() => console.log('Success sending ahegao pic!'))
                                    })
                            } else {
                                await iluser.reply(message.from, 'Tag not found.', message.id)
                            }
                        } catch (err) {
                            console.error(err)
                            await iluser.reply(message.from, err, message.id)
                        }
                    }}
                    break
            case `${prefix}ptlvid`:{
                const disable = await getDB.cek_disable(message.from, `${prefix}ptlvid`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    if(isReg(obj)) return
                    if (isLimit(serial)) return
                    limitAdd(serial)
                    const ditai = fs.readFileSync('./lib/database/asupan.json')
                    const ditaiJsin = JSON.parse(ditai)
                    const rindIndixa = Math.floor(Math.random() * ditaiJsin.length)
                    const rindKiya = ditaiJsin[rindIndixa]
                    iluser.sendFileFromUrl(message.from, rindKiya, 'asupan.mp4', `${mess.iklann}`, message.id)
            }
                    break
        case prefix+'join':{
            sleep(1000)
            const disable = await getDB.cek_disable(message.from, `${prefix}join`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (!isPremium) return iluser.reply(message.from, mess.nopremium, message.id)
            if (from !== '6283142933894-1611879057@g.us' && !isOwner) return iluser.reply(message.from, `Bot hanya bisa di undang melalui grup Premium user.`, message.id)
            if (isGruplimit(serial)) return iluser.reply(message.from, `Limit join grup sudah mencapai batas`, message.id)
            if (args.length === 1) return iluser.reply(message.from, `Contoh ${prefix}join https://chat.whatsapp.com/xnxx`, message.id)
            const link = args[1]
            const minMem = 10
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            let check = await iluser.inviteInfo(link).catch(e =>{iluser.reply(from, e ,id) })          
            if (!isLink) return iluser.reply(message.from, 'itu bukan link grup tlol', message.id)
            if (check.size < minMem && !isOwner) return iluser.reply(message.from, 'Di bawah 10 member, bot tidak bisa masuk', message.id)
                await iluser.joinGroupViaLink(link).then(async () => {
                    await sleep(2000)
                    await iluser.reply(from, 'Joined!', id)
                    GruplimitAdd(serial)
                    console.log('SUCCESS | Join grup')
                    setTimeout(async () => {
                        await iluser.sendText(check.id, 'Hii semua,\n\nKenalin aku iluserBOT,\nSebuah robot whatsapp yang akan membantu kalian melakukan banyak hal :p\n\nCek fitur yang ada di dalam sistem ku dengan mengetikkan /menu')
                    }, 2000)
                }).catch(async () => {
                    await iluser.reply(from, 'Link group tidak valid atau bot sudah dikeluarkan!', id)
                    console.log('FAILED | Join grup')
                }) 
            }
            break 
        case prefix+'delete':
        case prefix+'del':{
            const disable = await getDB.cek_disable(message.from, `${prefix}delete`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            if (!quotedMsg) return iluser.reply(message.from, `Salah!!, Contoh: *${prefix}delete [tagpesanbot]*`, message.id)
            if (!quotedMsgObj.fromMe) return iluser.reply(message.from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', message.id)
            //await sleep(2000)
            iluser.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
        }
            break
        case prefix+'sider':{
            const disable = await getDB.cek_disable(message.from, `${prefix}sider`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam grup`, message.id)                
            if (!quotedMsg) return iluser.reply(message.from, `Reply pesan bot ya tod!`, message.id)
            if (!quotedMsgObj.fromMe) return iluser.reply(message.from, `Reply pesan bot ya tod`, message.id)
            try {
                const reader = await iluser.getMessageReaders(quotedMsgObj.id)
                let list = ''
                for (let pembaca of reader) {
                list += `- @${pembaca.id.replace(/@c.us/g, '')}\n` 
            }
                iluser.sendTextWithMentions(message.from, `Ciee, Ngeread...\n\n${list}`)
            } catch(err) {
                console.log(color('FAILED | Siderr', 'red'))
                iluser.reply(message.from, `Belum ada yang membaca pesan bot atau mereka menonaktifkan read receipts`, message.id)    
            }}
            break
        case prefix+'linkgroup':
        case prefix+'link':{
            const disable = await getDB.cek_disable(message.from, `${prefix}link`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
            var gclink = await iluser.getGroupInviteLink(groupId)
            var linkgc  = `${gclink}`
            iluser.sendLinkWithAutoPreview(message.from, linkgc, '', '', message.id)
            console.log('SUCCESS | link grup')
        }
            break
        case prefix+'resetlink':{
            const disable = await getDB.cek_disable(message.from, `${prefix}resetlink`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
            if (isGroupMsg) {
                await iluser.revokeGroupInviteLink(groupId);
               // await sleep(2000)
                iluser.sendTextWithMentions(message.from, `Link group telah direset oleh @${sender.id.replace('@c.us', '')}`)
            }
        }
            break
        case prefix+'getses':{
            const disable = await getDB.cek_disable(message.from, `${prefix}getses`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (!isPilot && !isOwner) return
            if (isGroupMsg){
                const sesPic = await iluser.getSnapshot()  
                await iluser.sendFile(message.from, sesPic, 'session.png', 'Nih tuan', message.id)
            }else{
                const sesPic = await iluser.getSnapshot()  
                await iluser.sendFile(message.from, sesPic, 'session.png', 'Nih tuan', message.id)
                //await iluser.deleteChat(chatId)
            }
        }
            break; 
        case `${prefix}listuser`:
         if (!isOwner) return
            let regis = `Daftar pengguna terverifikasi\nTotal : ${pendaftar.length}\n`
            for (let i of pendaftar) {
                regis += `• ${i}\n`
            }
            await iluser.reply(message.from, regis, message.id)
            break  
        case prefix+'limit':{
            const disable = await getDB.cek_disable(message.from, `${prefix}limit`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            const cekExp = ms(premium.getPremiumExpired(sender.id, _premium) - Date.now())
            var found = false
            const limidat = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
            if (isPremium){
                return await iluser.sendTextWithMentions(message.from, `\t*STATUS USER*\n
*User* : @${sender.id}
*Status* : ∞ (UNLIMITED LIMIT)
*Masa Aktif* : ${cekExp.days} hari, ${cekExp.hours} jam, ${cekExp.minutes} menit`, message.id)
            } 
            for(let lmt of limidat){
                if(lmt.id === serial){
                    let limitCounts = limitCount-lmt.limit
                    if(limitCounts <= 0) return iluser.reply(message.from, `Limit kamu sudah habis tod.`, message.id)
                    await iluser.reply(message.from, `Sisa limit penggunaan bot kamu: *${limitCounts}*`, message.id)
                    found = true
                }}
            }
            if (found === false){
                let obj = {id: `${serial}`, limit:1};
                limit.push(obj);
                fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit, 1));
                //await sleep(2000)
                await iluser.reply(message.from, `Sisa limit penggunaan bot kamu: *${limitCount}*`, message.id)
            }
            break
        case prefix+'run':{
            const q = body.slice(5)
            if(isOwner){
            if (!q) return iluser.reply(message.from, 'Harap masukkan code JavaScript!', message.id)
            try {
                let evaled = await eval(q)
                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                sendJSON(evaled)
            } catch (err) {
                printError(err)
            }}
        }
        case '=>':
            if(!isOwner) return
				print(`=> Eval`)
				const TextEval = body.slice(3)
				const evaL = util.format(eval(`(async () => {
						${TextEval}
				})()`))
				await Print(evaL)
				break
        case prefix+'restlimit':
            if(isOwner){
                let benetc = limit.indexOf(limit[0])
                limit.splice(benetc)
                fs.writeFileSync('./lib/database/limit.json', JSON.stringify(limit))
                await iluser.reply(message.from, '*[ WARN ]* Restarting limit user...', message.id)
                await sleep(2000)
                await iluser.reply(message.from, `limit has been restarted`, message.id)
                console.log('[INFO] Limit restarted!');
            }
            break
        case prefix+'restart': {
                    if (!isOwner) return 
                    await iluser.reply(from, `Server bot akan direstart!`, id)
                    await spawn('restart.cmd')
                    break
                }
        case prefix+'block':
            if (!isPilot && !isOwner) return
			    if (args.length === 1) {
					await iluser.contactBlock(from, args[1] + '@c.us')
                    iluser.sendTextWithMentions(from, `@${args[1]} has been blocked!`)
				}  else if (quotedMsg) {
					await iluser.contactBlock(from, quotedMsgObj.sender.id)
                    iluser.sendTextWithMentions(from, `@${quotedMsgObj.sender.id} has been blocked!`)
				} else {
					await iluser.contactBlock(mentionedJidList[0])	
                    iluser.sendTextWithMentions(from, `@${mentionedJidList[0]} has been blocked!`)
                }
				break
        case prefix+'unblock':{
            if (!isPilot && !isOwner) return 
			    if (args.length === 1) {
					await iluser.contactUnblock(from, args[1] + '@c.us')
                    iluser.sendTextWithMentions(from, `@${args[1]} has been unblocked!`)
				}  else if (quotedMsg) {
                    const qmid = quotedMsgObj.sender.id
                    if (qmid === botNumber) return await iluser.reply(message.from, 'Jangan tolol deh', message.id)
					await iluser.contactUnblock(from, qmid)
                    iluser.sendTextWithMentions(from, `@${qmid} has been unblocked!`)
				} else {
					await iluser.contactUnblock(mentionedJidList[0])	
                    iluser.sendTextWithMentions(from, `@${mentionedJidList[0]} has been unblocked!`)
                }}
				break
    /*    case prefix+'block':
            if (!isPilot && !isOwner) return
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await iluser.contactBlock(unblock).then((a)=>{
                    console.log(a)
                    iluser.reply(message.from, `blocked target ${args[1]}!`, message.id)
                })
            }
            break
        case prefix+'unblock':
            if (!isPilot && !isOwner) return 
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await iluser.contactUnblock(unblock).then((a)=>{
                    console.log(a)
                    sleep(1000)
                    iluser.reply(message.from, `unblocked target`, message.id)
                })
            } 
            break */
        case prefix+'setname':
            if (!isPilot && !isOwner) return 
                const setnem = body.slice(9)
                await iluser.setMyName(setnem)
                iluser.reply(message.from, `Merubah nama bot menjadi *${setnem}..*`, message.id)
            break
        case prefix+'setinfo':
            if (!isPilot && !isOwner) return
                const setstat = body.slice(9)
                await iluser.reply(message.from, `Setting info to ${setstat}`, message.id)
                await iluser.setMyStatus(setstat)
                await sleep(2000)
                await iluser.reply(message.from, `Done setting info`, message.id)
            break
        case prefix+'setprofile':
            if (!isPilot && !isOwner) return 
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await iluser.setProfilePic(imageBase64)
                iluser.reply(`Sukses mengubah foto profile`, message.id)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await iluser.setProfilePic(imageBase64)
                iluser.reply(message.from, `Sukses mengubah foto profile`, message.id)
            } else {
                iluser.reply(message.from, `Format Salah`, message.id)
            }
            break
        case `${prefix}getpp`:
            try{
                if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
                    var pik = await iluser.getProfilePicFromServer(mentionedJidList[0])
                    if (pik === undefined) {
                                var ypfps = ppdepresi
                            } else {
                                var ypfps = pik
                            }
                    await iluser.sendFileFromUrl(message.from, pik, 'pik.jpg', 'Nih Foto profilnya', message.id)
            }catch(err){
                console.log(color('FAILED | Get profile', 'red'))
                iluser.reply(message.from, 'Waah target ternyata depresi gan. fotonya gaada', message.id)
        }
        break
        case `${prefix}getsts`:
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
                var ssts = await iluser.getStatus(mentionedJidList[0])
                const { status } = ssts
                await iluser.sendTextWithMentions(message.from, `Status dari @${mentionedJidList[0].replace('@c.us', '')}.\n\n${status}\n`, message.id)         
                break
       /* case prefix+'ban':
            if (!isPilot && !isOwner) return 
            for (let i = 0; i < mentionedJidList.length; i++) {
                //if ((adminNumber).includes(mentionedJidList[i])) return iluser.reply(message.from,`Maaf ${pushname}, Kamu tidak bisa banned Admin iluser_BOT!`, message.id)
                banned.push(mentionedJidList[i])
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                await sleep(2000)
                iluser.reply(message.from, `target has been banned`, message.id)
            } else {
                banned.push(args[1] + '@c.us')-
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                await sleep(2000)
                iluser.reply(message.from, `target has been banned`, message.id)
            } 
            break */
        case prefix+'ban':
                if (!isOwner) return
                    if (mentionedJidList.length !== 0) {
                        for (let benet of mentionedJidList) {
                            if (benet === botNumber) return await iluser.reply(from, ind.wrongFormat(), id)
                            banned.push(benet)
                            fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                        }
                        await iluser.reply(from, `target has been banned`, id)
                    } else {
                        banned.push(args[1] + '@c.us')
                        fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                        await iluser.reply(from, `target has been banned`, id)
                    }
                    break 
        case prefix+'unban':
            if (!isOwner) return 
                let inz = banned.indexOf(mentionedJidList[0])
                banned.splice(inz, 1)
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                await sleep(2000)
                iluser.reply(message.from, 'Unbanned target', message.id)
            break
        case prefix+'listgroup':
            if (!isPilot && !isOwner) return 
                iluser.getAllGroups().then((res) => {
                let gc = `*This is list of group* :\n`
                for (let i = 0; i < res.length; i++) {
                    gc += `\n═════════════════\n\n*No : ${i+1}*\n*Nama* : ${res[i].name}\n*Pesan Belum Dibaca* : ${res[i].unreadCount} chat\n*Tidak Spam* : ${res[i].notSpam}\n`
                }
                sleep(2000)
                iluser.reply(message.from, gc, message.id)
            })
            break
        case prefix+'listbanned':
            if (!isPilot && !isOwner) return 
            let bened = `This is list of banned number\nTotal : ${banned.length}\n`
            for (let i of banned) {
                bened += `• ${i.replace(/@c.us/g,'')}\n`
            }
            await sleep(2000)
            await iluser.reply(message.from, bened, message.id)
            break
        case prefix+'listblock':
            if (!isPilot && !isOwner) return 
            let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `• ${i.replace(/@c.us/g,'')}\n`
            }
            await sleep(2000)
            await iluser.reply(message.from, hih, message.id)
            break
        case prefix+'ping':
        case prefix+'stat':{
            if (!isPilot && !isOwner) return
    const loadedMsg = await iluser.getAmountOfLoadedMessages()
    const chatIds = await iluser.getAllChatIds()
    const groups = await iluser.getAllGroups()
    const me = await iluser.getMe()
    const battery = await iluser.getBatteryLevel()
    const isCharging = await iluser.getIsPlugged()
    const used = process.memoryUsage()
    const speed = moment() / 1000 - t
    iluser.reply(message.from, `
*Status :*
- *${loadedMsg}* Pesan yang di muat
- *${groups.length}* Total grup dimasuki
- *${chatIds.length - groups.length}* Total chat personal
- *${chatIds.length}* Total semua chat di bot

*Device Info* :
${monospace(`
Battery : ${battery}% ${isCharging ? '🔌 Mengisi daya...' : '⚡ Tidak mengisi daya'}
${Object.keys(me.phone).map(key => `${key} : ${me.phone[key]}`).join('\n')}
`.trim())}

*Server Info* :
RAM: ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}
_NodeJS Memory Usage_
${monospace(Object.keys(used).map(key => `${key} : ${format(used[key])}`).join('\n'))}

*Runtime:*
${cts}

*Speed Respon:*
${speed} _Detik_
`.trim(), message.id)
}
break
        case prefix+'setgroupname':
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
            const namagrup = body.slice(14)
            let sebelum = chat.groupMetadata.formattedName
            let halaman = global.page ? global.page : await iluser.getPage()
            await halaman.evaluate((chatId, subject) =>
            Store.WapQuery.changeSubject(chatId, subject),groupId, `${namagrup}`)
            iluser.sendTextWithMentions(message.from, `Nama grup telah diubah oleh @${sender.id.replace('@c.us','')}\n\n• Before: ${sebelum}\n• After: ${namagrup}`)
            break
        case prefix+'setgroupicon':
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await iluser.setGroupIcon(message.from, imageBase64)
                iluser.sendTextWithMentions(message.from, `Profile group telah diubah oleh @${sender.id.replace('@c.us','')}`)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await iluser.setGroupIcon(message.from, imageBase64)
                iluser.sendTextWithMentions(message.from, `Profile group telah diubah oleh @${sender.id.replace('@c.us','')}`)
            } else {
                iluser.reply(message.from, `Gambarnya mana tolol`, message.id)
            }
            break
        case prefix+'bug':{
            const disable = await getDB.cek_disable(message.from, `${prefix}bug`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}bug Fitur xnxx tidak berfungsi`, message.id)
            const bug = body.slice(4)
            if(!bug) return
            if(isGroupMsg){
                iluser.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\nGroup : ${formattedTitle}\n\n${bug}`)
                sleep(2000)
                iluser.reply(message.from, 'Terimakasih, laporanmu sudah terkirim ke master saya', message.id)
            }else{
                iluser.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\n\n${bug}`)
                sleep(2000)
                iluser.reply(message.from, 'Terimakasih, laporanmu sudah terkirim ke master saya', message.id)
            }
        }
            break
         case prefix+'profile':{
            const disable = await getDB.cek_disable(message.from, `${prefix}profile`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (isGroupMsg) {
                if (!quotedMsg) {
                var block = blockNumber.includes(author)
                var bend = banned.includes(author)
                var pic = await iluser.getProfilePicFromServer(author)
                var namae = pushname
                var sts = await iluser.getStatus(author)
                var adm = isGroupAdmins
                var donate = isPremium
                const { status } = sts
                if (pic == undefined) {
                    var pfp = ppdepresi 
                } else {
                    var pfp = pic
                } 
                await iluser.sendFileFromUrl(message.from, pfp, 'pfp.jpg', 
`*User Profile Info* \n
㋡ Username ㋡ : *${namae}*\n
❞ User Info ❞ : *${status}*\n
⊘ Blocked ⊘ : *${block}*\n
⊝ Banned ⊝ : *${bend}*\n
♛ Admin Group ♛ : *${adm}*\n
♚ User Premium ♚ : *${donate}*`, id)
             } else if (quotedMsg) {
             var qmid = quotedMsgObj.sender.id
             var block = blockNumber.includes(qmid)
             var bend = banned.includes(author)
             var pic = await iluser.getProfilePicFromServer(qmid)
             var namae = quotedMsgObj.sender.name
             var sts = await iluser.getStatus(qmid)
             var adm = isGroupAdmins
             var donate = isPremium
             const { status } = sts
              if (pic == undefined) {
              var pfp = ppdepresi
              } else {
              var pfp = pic
              } 
              await iluser.sendFileFromUrl(message.from, pfp, 'pfp.jpg', 
`*User Profile Info* \n
㋡ Username ㋡ : *${namae}*\n
❞ User Info ❞ : *${status}*\n
⊘ Blocked ⊘ : *${block}*\n
⊝ Banned ⊝ : *${bend}*\n
♛ Admin Group ♛ : *${adm}*\n
♚ User Premium ♚ : *${donate}*`, id)
             }
            }
        }
            break
        case prefix+'verif':
        case prefix+'verify':
        case prefix+'register':
        case prefix+'daftar':
        case prf+'verif':
        case prf+'verify':
        case prf+'register':
        case prf+'daftar':
            const nonye = sender.id
            // const pporang = await iluser.getProfilePicFromServer(sender.id)
            // if (pporang === undefined) {
            // var pepe = ppdepresi
            // } else {
            // var pepe = pporang
            // }
            var ceknya = nonye
            var obj = pendaftar.some((val) => {
            return val.id === ceknya
            })
            if (obj === true){
            return 
            } else {
            const mentah = await iluser.checkNumberStatus(nonye)
            const msg = (`\t\t*VERIFICATION SUCCES*

Name : ${pushname}
Serial : ${SN}
Number : ${nonye.replace(/[@c.us]/g, '')}
API : wa.me/${nonye.replace('@c.us', '')}
Time : ${moment().format('DD/MM/YY HH:mm:ss')}
Limit : ${limitCount}/Day

Ketik *${prefix}menu* untuk melihat daftar menu
Total user terverifikasi: ${pendaftar.length}

Subscribe t.me/iluser_BOT for more information about this bot`)
            const hasil = mentah.canReceiveMessage ? msg : false
            if (!hasil) return iluser.reply(message.from, 'Nomor WhatsApp tidak valid [ Tidak terdaftar di WhatsApp ]', message.id) 
            {
            const register = ({
            id: mentah.id._serialized
            })
            pendaftar.push(register)
            fs.writeFileSync('./lib/database/user.json', JSON.stringify(pendaftar))
            iluser.sendText(from, hasil, id)
            }
            }
            break
        case prefix+'master':
        if(isOwner){
            iluser.reply(message.from, own, message.id)
        }
        break
        case prefix+'pilot':
        if(isPilot && !isOwner){
            iluser.reply(message.from, piloot, message.id)
        }
            break
        case prefix+'menu':
        case prefix+'help':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return  
            // const pporangg = await iluser.getProfilePicFromServer(sender.id)
            // if (pporangg === undefined) {
            // var pepee = './logo.png'
            // } else {
            // var pepee = pporangg
            // }
            iluser.sendImage(message.from, './logo.png', 'ppnya.jpg', help.replace(undefined, pushname), message.id)
            console.log(color('SUCCESS | Menu', 'olive'))
           // await iluser.sendImage(message.from, './logo.png', 'iluser.png', help.replace(undefined, pushname), message.id)
        }
        break;
        case prefix+'menuadmin':
        case prefix+'adminmenu':
        case prefix+'menu0':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu0`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu0, message.id)
            console.log(color('SUCCESS | menuadmin', 'olive'))
        }
            break
        case prefix+'menu1':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu1`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu1, message.id)
            console.log(color('SUCCESS | EDUCATION MENU', 'olive'))
        }
            break
        case prefix+'menu2':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu2`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu2, message.id)
            console.log(color('SUCCESS | STICKER CREATOR', 'olive'))
        }
            break
        case prefix+'menu3':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu3`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu3, message.id)
            console.log(color('SUCCESS | TRACKING MENU', 'olive'))
        }
            break
        case prefix+'menu4':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu4`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu4, message.id)
            console.log(color('SUCCESS | RELIGI MENU', 'olive'))
        }
            break
        case prefix+'menu5':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu5`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu5, message.id)
            console.log(color('SUCCESS | DOWNLOADER MENU', 'olive'))
        }
            break
        case prefix+'menu6':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu6`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu6, message.id)
            console.log(color('SUCCESS | INFORMATION MENU', 'olive'))
        }
            break
        case prefix+'menu7':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu7`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu7, message.id)
            console.log(color('SUCCESS | STALKING MENU', 'olive'))
        }
            break
        case prefix+'menu8':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu8`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu8, message.id)
            console.log(color('SUCCESS | SEARCH MENU', 'olive'))
        }
            break
        case prefix+'menu9':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu9`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu9, message.id)
            console.log(color('SUCCESS | TRXT MENU', 'olive'))
        }
            break
        case prefix+'menu10':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu10`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu10, message.id)
            console.log(color('SUCCESS | CREATE MENU', 'olive'))
        }
            break
        case prefix+'menu11':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu11`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu11, message.id)
            console.log(color('SUCCESS | IMAGE MANIPULATION', 'olive'))
        }
            break
        case prefix+'menu12':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu12`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu12, message.id)
            console.log(color('SUCCESS | OTHER MENU', 'olive'))
        }
            break
        case prefix+'menu13':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu13`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu13, message.id)
            console.log(color('SUCCESS | IN GROUP MENU', 'olive'))
        }
            break
        case prefix+'menu14':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu14`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu14, message.id)
            console.log(color('SUCCESS | GAME AREA', 'olive'))
        }
            break
        case prefix+'menu15':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu15`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu15, message.id)
            console.log(color('SUCCESS | ANIME MENU', 'olive'))
        }
            break
        case prefix+'menu16':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu16`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            if (!isPremium) return iluser.reply(from, mess.nopremium, id)
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu16, message.id)
            console.log(color('SUCCESS | PORN MENU', 'olive'))
        }
            break
        case prefix+'menu17':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu17`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu17, message.id)
            console.log(color('SUCCESS | AUDIO MENU', 'olive'))
        }
            break
        case prefix+'menu18':{
            const disable = await getDB.cek_disable(message.from, `${prefix}menu18`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menu18, message.id)
            console.log(color('SUCCESS |TEXTPRO MENU', 'olive'))
        }
            break

            //NEW FITURE
        case prefix+'warn':{
            const disable = await getDB.cek_disable(message.from, `${prefix}warn`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
            if (!quotedMsg) {
                if (mentionedJidList.length === 0) return 
                if (mentionedJidList[0] === botNumber) return 
                const input = message.body.slice(6);
                var target = input.match(/\d+/g);
                const cek = await getDB.warn(message.from, `${target}@c.us`);
                if (cek == undefined) {
                  await getDB.add_warn(message.from, `${target}@c.us`);
                  iluser.sendTextWithMentions(message.from, `Pengguna @${target} memiliki 1/3 peringatan, hati-hati!`, message.id);
                  console.log(`SUCCESS | warn member`);
                }else if (cek.jumlah == 2){
                  iluser.sendTextWithMentions(message.from, `Peringatan 3/3, @${target} sekarang dikeluarkan!`, message.id);
                  iluser.removeParticipant(message.from, `${target}@c.us`);
                  console.log(`SUCCESS | kick member warn`);
                  await getDB.del_warn(message.from, target);
                }else if (cek.jumlah != undefined) {
                  await getDB.update_warn(message.from, `${target}@c.us`);
                  iluser.sendTextWithMentions(message.from, `Pengguna @${target} memiliki ${cek.jumlah + 1}/3 peringatan, hati-hati!`, message.id);
                  console.log(`SUCCESS | warn member`);    
                  } 
            } else {
            const target = message.quotedMsgObj.author;
            var targett = target.match(/\d+/g);
            const cek = await getDB.warn(message.from, target);
            if (cek == undefined) {
              await getDB.add_warn(message.from, target);
              iluser.sendTextWithMentions(message.from, `Pengguna @${targett} memiliki 1/3 peringatan, hati-hati!`, message.id);
              console.log(`SUCCESS | warn member`);
            }else if (cek.jumlah == 2){
              iluser.sendTextWithMentions(message.from, `Peringatan 3/3, @${targett} sekarang dikeluarkan!`, message.id);
              iluser.removeParticipant(message.from, target);
              console.log(`SUCCESS | kick member warn`);
              await getDB.del_warn(message.from, target);
            }else if (cek.jumlah != undefined) {
              await getDB.update_warn(message.from, target);
              iluser.sendTextWithMentions(message.from, `Pengguna @${targett} memiliki ${cek.jumlah + 1}/3 peringatan, hati-hati!`, message.id);
              console.log(`SUCCESS | warn member`);    
              }    
        } /* else {
            await iluser.reply(message.from, `balas atau tag user yaang mau di warn!`, message.id)
        } */
    }
    break
        case prefix+'delwarn':{
            const disable = await getDB.cek_disable(message.from, `${prefix}delwarn`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, mess.botnonadmin, message.id)
        try {
            if (!quotedMsg) {
            if (mentionedJidList.length === 0) return 
            if (mentionedJidList[0] === botNumber) return 
            const target = message.body.slice(9);
            var targett = target.match(/\d+/g);
            await getDB.del_warn(message.from, target);
            await getDB.del_warn_badword(message.from, target);
            iluser.sendTextWithMentions(message.from, `Peringatan untuk @${targett} telah dihapus`, message.id);
            console.log(`SUCCESS | delete warn member`)  
            }else {
            const target = message.quotedMsgObj.author;
            var targett = target.match(/\d+/g);
            await getDB.del_warn(message.from, target);
            await getDB.del_warn_badword(message.from, target);
            iluser.sendTextWithMentions(message.from, `Peringatan untuk @${targett} telah dihapus`, message.id);
            console.log(`SUCCESS | delete warn member`)
            }
        }catch(err){
            console.log(color('FAILED | warn', 'red'))
            iluser.sendText(ownerNumber, `Error warn:\n${err}`)
            iluser.reply(message.from, 'Error', message.id)
    }
    }
    break
    case prefix+'setrules':{
        const disable = await getDB.cek_disable(message.from, `${prefix}setrules`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
      	const info = await iluser.getChatById(message.from)
        if (args.length === 1) return iluser.reply(message.from, `Rulesnya apa?`, message.id)
        const input = message.body.slice(10);
        const rule = encodeURIComponent(input);
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            const cek = await getDB.cekRule(message.from);
            if (cek.length == 0) {
              await getDB.setRule(message.from, rule);
              iluser.reply(message.from, `Peraturan baru untuk *${info.name}* berhasil ditetapkan!`, message.id);
              console.log(`SUCCESS | set rules group`);
            }else{
              await getDB.updateRule(message.from, rule);
              iluser.reply(message.from, `Peraturan baru untuk *${info.name}* berhasil ditetapkan!`, message.id);
              console.log(`SUCCESS | set rules group`);
            }
        }
        break
      
      case prefix+'rules':{
        const disable = await getDB.cek_disable(message.from, `${prefix}rules`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
          const cek = await getDB.cekRule(message.from);
          if (cek.length == 0) {
            iluser.reply(message.from, `Grup ini tampaknya belum memiliki peraturan yang ditetapkan...\nGunakan ${prefix}setrules untuk membuat peraturan di dalam grup`, message.id);
            console.log(`FAILED | rules belum di set`);
          }else{
            const rule = cek[0].rules;
            iluser.reply(message.from, decodeURIComponent(rule), message.id);
            console.log(`SUCCESS | send /rules group`);
          }
        }
        break

        case prefix+'resetrules':{
            const disable = await getDB.cek_disable(message.from, `${prefix}resetrules`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
        const info = await iluser.getChatById(message.from)
        await getDB.delRule(message.from);
        if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
        if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, mess.nonadmin, message.id)
            iluser.reply(message.from, `Peraturan untuk ${info.name} berhasil dihapus!`, message.id);
            console.log(`SUCCESS | delete rules grup`);
		}
		break
        case prefix+'imgtopdf':{
            const disable = await getDB.cek_disable(message.from, `${prefix}imgtopdf`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            const q = body.slice(10)
            if (!q) return await iluser.reply(message.from, `format salah\nkirim/reply pesan gambar lalu tag ${prefix}imgtopdf nama file` , message.id)
               if (isMedia && isImage || isQuotedImage) {
                    const encryptMediat = isQuotedImage ? quotedMsg : message
                    const mediaDataqq = await decryptMedia(encryptMediat, uaOverride)
                    const linkImgu = await uploadImages(mediaDataqq, `${sender.id}_img`)
                    console.log(linkImgu)
                    convertapi.convert('pdf', {
                    File: linkImgu
                    }, 'jpg').then(function(result) {
                    result.saveFiles('./temp/hasil.pdf')
                    })
                await sleep(5000)
                await iluser.sendFile(message.from, './temp/hasil.pdf', `${q}.pdf`,null, message.id)
                fs.unlinkSync('./temp/hasil.pdf')
                } else {
                    await iluser.reply(message.from, 'bukan foto itu woy', message.id)
                }
                console.log('success...')
            }limitAdd(serial)
            break
        case prefix+'topdf':{
            const disable = await getDB.cek_disable(message.from, `${prefix}topdf`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            if (isLimit(serial)) return 
                    if (!isQuotedDocs) return iluser.reply(message.from, `Convert file office to pdf.\n\nReply file office dengan perintah ${prefix}topdf`, message.id)
                    if(/\.docx|\.doc|\.ppt|\.pptx|\.xlsx|\.xls/g.test(quotedMsg.filename) && isQuotedDocs){
                            const _mimetypes = isQuotedDocs ? quotedMsg.filename : filename
                            const encDocs = await decryptMedia(quotedMsg)    
                            fs.writeFile(`./temp/${_mimetypes.replace(/.+\//, '')}`, encDocs)
                            const doks = `./temp/${_mimetypes.replace(/.+\//, '')}`
                            console.log(`Convert ${_mimetypes.replace(/.+\//, '')} to PDF`)                         
                            convertapi.convert('pdf', { File: doks })
                            .then(function(result) {
                                result.saveFiles('./temp/pdf/result.pdf') 
                               // fs.unlinkSync(`./temp/${_mimetypes.replace(/.+\//, '')}`)
                                
                              })
                              await sleep(5000)
                              await iluser.sendFile(message.from, "./temp/pdf/result.pdf", quotedMsg.filename.replace(/\.docx|\.doc|\.ppt|\.pptx|\.xlsx|\.xls/g, '.pdf'))
                              fs.unlinkSync('./temp/pdf/result.pdf')
                              limitAdd(serial)
                              console.log('succcess')   
                        }else{
                            iluser.reply(message.from, 'Maaf format file tidak sesuai', message.id)
                        }
                    }
                        break
        case prefix+'mlmaker':{
            const disable = await getDB.cek_disable(message.from, `${prefix}mlmaker`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh ${prefix}mlmaker |saber|iluser`, message.id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
                const lmlog = argz[1]
                const lmlog2 = argz[2]
                iluser.sendFileFromUrl(message.from, `https://api.vhtear.com/logoml?hero=${lmlog}&text=${lmlog2}&apikey=${vhtearkey}`,'emel.jpg',`${mess.iklann}`, message.id)
                limitAdd(serial)
            } else {
                await iluser.reply(message.from, `Wrong Format!\nContoh: ${prefix}mlmaker |saber|iluser`, message.id)
            }
        }
            break
        case prefix+'readmore':{
            const disable = await getDB.cek_disable(message.from, `${prefix}readmore`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            if (isLimit(serial)) return
            if (args.length === 1) return iluser.reply(message.from,  `Contoh: ${prefix}readmore hai beb|an keluarga`, message.id)
            const readcuys = body.slice(10)
            const readcuys1 = readcuys.split('|')[0]
            const readcuys2 = readcuys.split('|')[1]
            iluser.reply(message.from, `${readcuys1}‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‎${readcuys2}`, message.id)
            limitAdd(serial)
        }
            break
    case prefix+'nickepep':{
        const disable = await getDB.cek_disable(message.from, `${prefix}nickepep`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
    if(isReg(obj)) return                      
    if (isLimit(serial)) return 
    limitAdd(serial)
    const amjayepep = await fetch('https://api.zeks.xyz/api/nickepep?apikey=apivinz') 
    const ptrsss = await amjayepep.json()
    const amjayepep2 = ptrsss.result 
    const amjayepep3 = JSON.parse(JSON.stringify(amjayepep2))         
    const amjayepep1 = amjayepep3[Math.floor(Math.random() * (amjayepep2.length))]
    iluser.reply(message.from, `*NICK EPEP GENERATOR*\n\n${amjayepep1}\n`, message.id)
    }
         break

        //SCRAP MANUAL
        case prefix+'balon': {
            const disable = await getDB.cek_disable(message.from, `${prefix}balon`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(7)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}balon iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/hot-air-balloon", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(color('FAILED | balon', 'red'))
                            iluser.sendText(ownerNumber, `Error balon:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                            browser.close();
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | balon', 'red'))
            iluser.sendText(ownerNumber, `Error balon:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'bordir2': {
            const disable = await getDB.cek_disable(message.from, `${prefix}bordir2`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(9)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}bordir2 iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/denim-emdroidery", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(color('FAILED | bordir2', 'red'))
                            iluser.sendText(ownerNumber, `Error bordir2:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                            browser.close();
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | bordir2', 'red'))
            iluser.sendText(ownerNumber, `Error bordir2:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'snow-sign': {
            const disable = await getDB.cek_disable(message.from, `${prefix}snow-sign`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(11)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}snow-sign iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/snow-sign", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(color('FAILED | snow-sign', 'red'))
                            iluser.sendText(ownerNumber, `Error snow-sign:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                            browser.close();
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | snow-sign', 'red'))
            iluser.sendText(ownerNumber, `Error snow-sign:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'beach-sign': {
            const disable = await getDB.cek_disable(message.from, `${prefix}beach-sign`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(12)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}beach-sign iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/beach-sign", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            console.log(color('FAILED | beach-sign', 'red'))
                            iluser.sendText(ownerNumber, `Error beach-sign:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                            browser.close();
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | beach-sign', 'red'))
            iluser.sendText(ownerNumber, `Error beach-sign:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'kapal': {
            const disable = await getDB.cek_disable(message.from, `${prefix}kapal`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(7)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}kapal iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/yacht", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | kapal maker', 'red'))
                            iluser.sendText(ownerNumber, `Error kapal maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | kapal maker', 'red'))
            iluser.sendText(ownerNumber, `Error kapal maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'pesawat': {
            const disable = await getDB.cek_disable(message.from, `${prefix}pesawat`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(9)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}pesawat iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/airline", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="name"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | pesawat maker', 'red'))
                            iluser.sendText(ownerNumber, `Error pesawat maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
                console.log(color('FAILED | pesawat maker', 'red'))
                iluser.sendText(ownerNumber, `Error pesawat maker:\n${error}`)
                iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'jalan': {
            const disable = await getDB.cek_disable(message.from, `${prefix}jalan`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(7)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}jalan iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/street-sign", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | jalan maker', 'red'))
                            iluser.sendText(ownerNumber, `Error jalan maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | jalan maker', 'red'))
            iluser.sendText(ownerNumber, `Error jalan maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'einstein': {
            const disable = await getDB.cek_disable(message.from, `${prefix}einstein`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(10)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}einstein iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/einstein", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | einstein maker', 'red'))
                            iluser.sendText(ownerNumber, `Error einstein maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | einstein maker', 'red'))
            iluser.sendText(ownerNumber, `Error einstein maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'lipstick': {
            const disable = await getDB.cek_disable(message.from, `${prefix}lipstick`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(10)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}lipstick iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/lipstick-writing", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | lipstick maker', 'red'))
                            iluser.sendText(ownerNumber, `Error lipstick maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | lipstick maker', 'red'))
            iluser.sendText(ownerNumber, `Error lipstick maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'typewriter': {
            const disable = await getDB.cek_disable(message.from, `${prefix}typewriter`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(12)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}typewriter iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/typewriter", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | typewriter maker', 'red'))
                            iluser.sendText(ownerNumber, `Error typewriter maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | typewriter maker', 'red'))
            iluser.sendText(ownerNumber, `Error typewriter maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'graffiti':{
            const disable = await getDB.cek_disable(message.from, `${prefix}graffiti`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(10)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}graffiti iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/light-graffiti", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | graffiti maker', 'red'))
                            iluser.sendText(ownerNumber, `Error graffiti maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | graffiti maker', 'red'))
            iluser.sendText(ownerNumber, `Error graffiti maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'graffiti3': {
            const disable = await getDB.cek_disable(message.from, `${prefix}graffiti3`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(11)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}graffiti3 iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/christmas-writing", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                           browser.close();
                           console.log(color('FAILED | graffiti3 maker', 'red'))
                            iluser.sendText(ownerNumber, `Error graffiti3 maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | graffiti3 maker', 'red'))
            iluser.sendText(ownerNumber, `Error graffiti3 maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'gelang': {
            const disable = await getDB.cek_disable(message.from, `${prefix}gelang`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(8)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}gelang iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/bracelet", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | gelang maker', 'red'))
                            iluser.sendText(ownerNumber, `Error gelang maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | gelang maker', 'red'))
            iluser.sendText(ownerNumber, `Error gelang maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'kalung': {
            const disable = await getDB.cek_disable(message.from, `${prefix}kalung`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(8)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}kalung iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/pendant", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | kalung maker', 'red'))
                            iluser.sendText(ownerNumber, `Error kalung maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | kalung maker', 'red'))
            iluser.sendText(ownerNumber, `Error kalung maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'embun': {
            const disable = await getDB.cek_disable(message.from, `${prefix}embun`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(7)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}embun iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/frosty-window-writing", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            cbrowser.close();
                            console.log(color('FAILED | embun maker', 'red'))
                            iluser.sendText(ownerNumber, `Error embun maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | embun maker', 'red'))
            iluser.sendText(ownerNumber, `Error embun maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'tp1':{
            const disable = await getDB.cek_disable(message.from, `${prefix}tp1`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (isLimit(serial)) return 
            if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
            const tes15 = body.slice(5)
            thiccysapi.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html",
                `${tes15}`
                ).then(async (data) => { 
                try { 
                    console.log(data)
                    await download(data, './image/p.jpg', function(){
                        const a = base64_encode('./image/p.jpg');
                        var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                        iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                        limitAdd(serial)
                        console.log('SUCCESS | TextPro')
                      });
                } catch(err) {
                    await iluser.reply(from, 'Terjadi kesalahan', id)
                    await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                    console.log('FAILED | TextPro')
                } 
            });
        }
        break
        case prefix+'tp2':{
            const disable = await getDB.cek_disable(message.from, `${prefix}tp2`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (isLimit(serial)) return 
            if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
            const tes15 = body.slice(5)
            thiccysapi.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html",
                `${tes15}`
                ).then(async (data) => { 
                try { 
                    console.log(data)
                    await download(data, './image/p.jpg', function(){
                        const a = base64_encode('./image/p.jpg');
                        var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                            iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                            limitAdd(serial)
                            console.log('SUCCESS | TextPro')
                      });
                    } catch(err) {
                        await iluser.reply(from, 'Terjadi kesalahan', id)
                        await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                        console.log('FAILED | TextPro')
                    } 
                });
            }
            break
        case prefix+'tp3':{
            const disable = await getDB.cek_disable(message.from, `${prefix}tp3`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (isLimit(serial)) return 
            if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
            const tes15 = body.slice(5)
            thiccysapi.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html",
                `${tes15}`
                ).then(async (data) => { 
                try { 
                    console.log(data)
                    await download(data, './image/p.jpg', function(){
                        const a = base64_encode('./image/p.jpg');
                        var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                            iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                            limitAdd(serial)
                            console.log('SUCCESS | TextPro')
                      });
                    } catch(err) {
                        await iluser.reply(from, 'Terjadi kesalahan', id)
                        await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                        console.log('FAILED | TextPro')
                    } 
                });
            }
            break
        case prefix+'tp4':{
            const disable = await getDB.cek_disable(message.from, `${prefix}tp4`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (isLimit(serial)) return 
            if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
            const tes15 = body.slice(5)
            thiccysapi.textpro("https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html",
                `${tes15}`
                ).then(async (data) => { 
                try { 
                    console.log(data)
                    await download(data, './image/p.jpg', function(){
                        const a = base64_encode('./image/p.jpg');
                        var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                            iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                            limitAdd(serial)
                            console.log('SUCCESS | TextPro')
                      });
                    } catch(err) {
                        await iluser.reply(from, 'Terjadi kesalahan', id)
                        await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                        console.log('FAILED | TextPro')
                    } 
                });
            }
            break
        case prefix+'tp5':{
            const disable = await getDB.cek_disable(message.from, `${prefix}tp5`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (isLimit(serial)) return 
            if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
            const tes15 = body.slice(5)
            thiccysapi.textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html",
                `${tes15}`
                ).then(async (data) => { 
                try { 
                    console.log(data)
                    await download(data, './image/p.jpg', function(){
                        const a = base64_encode('./image/p.jpg');
                        var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                            iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                            limitAdd(serial)
                            console.log('SUCCESS | TextPro')
                      });
                    } catch(err) {
                        await iluser.reply(from, 'Terjadi kesalahan', id)
                        await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                        console.log('FAILED | TextPro')
                    } 
                });
            }
            break
        case prefix+'tp6':{
            const disable = await getDB.cek_disable(message.from, `${prefix}tp6`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (isLimit(serial)) return 
            if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
            const tes15 = body.slice(5)
            thiccysapi.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
                `${tes15}`
                ).then(async (data) => { 
                try { 
                    console.log(data)
                    await download(data, './image/p.jpg', function(){
                        const a = base64_encode('./image/p.jpg');
                        var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                            iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                            limitAdd(serial)
                      });
                    } catch(err) {
                        await iluser.reply(from, 'Terjadi kesalahan', id)
                        await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                        console.log('FAILED | TextPro')
                        console.log('SUCCESS | TextPro')
                    } 
                });
            }
            break
        case prefix+'tp7':{
            const disable = await getDB.cek_disable(message.from, `${prefix}tp7`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (isLimit(serial)) return 
            if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
            const tes15 = body.slice(5)
            thiccysapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
                `${tes15}`
                ).then(async (data) => { 
                try { 
                    console.log(data)
                    await download(data, './image/p.jpg', function(){
                        const a = base64_encode('./image/p.jpg');
                        var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                            iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                            limitAdd(serial)
                            console.log('SUCCESS | TextPro')
                      });
                    } catch(err) {
                        await iluser.reply(from, 'Terjadi kesalahan', id)
                        await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                        console.log('FAILED | TextPro')
                    } 
                });
            }
            break
        case prefix+'tp8':{
            const disable = await getDB.cek_disable(message.from, `${prefix}tp8`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (isLimit(serial)) return 
            if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
            const tes15 = body.slice(5)
            thiccysapi.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html",
                `${tes15}`
                ).then(async (data) => { 
                try { 
                    console.log(data)
                    await download(data, './image/p.jpg', function(){
                        const a = base64_encode('./image/p.jpg');
                        var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                            iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                            limitAdd(serial)
                            console.log('SUCCESS | TextPro')
                      });
                    } catch(err) {
                        await iluser.reply(from, 'Terjadi kesalahan', id)
                        await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                        console.log('FAILED | TextPro')
                    } 
                });
            }
            break
        case prefix+'tp9':{
            const disable = await getDB.cek_disable(message.from, `${prefix}tp9`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (isLimit(serial)) return 
            if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
            const tes15 = body.slice(5)
            thiccysapi.textpro("https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html",
                `${tes15}`
                ).then(async (data) => { 
                try { 
                    console.log(data)
                    await download(data, './image/p.jpg', function(){
                        const a = base64_encode('./image/p.jpg');
                        var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                            iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                            limitAdd(serial)
                            console.log('SUCCESS | TextPro')
                      });
                    } catch(err) {
                        await iluser.reply(from, 'Terjadi kesalahan', id)
                        await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                        console.log('FAILED | TextPro')
                    } 
                });
            }
            break
        case prefix+'tp10':{
            const disable = await getDB.cek_disable(message.from, `${prefix}tp10`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (isLimit(serial)) return 
            if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
            const tes15 = body.slice(6)
            thiccysapi.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html",
                `${tes15}`
                ).then(async (data) => { 
                try { 
                    console.log(data)
                    await download(data, './image/p.jpg', function(){
                        const a = base64_encode('./image/p.jpg');
                        var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                            iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                            limitAdd(serial)
                            console.log('SUCCESS | TextPro')
                      });
                    } catch(err) {
                        await iluser.reply(from, 'Terjadi kesalahan', id)
                        await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                        console.log('FAILED | TextPro')
                    } 
                });
            }
            break
            case prefix+'tp11':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tp11`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                if (isLimit(serial)) return 
                if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
                const tes15 = body.slice(6)
                thiccysapi.textpro("https://textpro.me/1917-style-text-effect-online-980.html",
                    `${tes15}`
                    ).then(async (data) => { 
                    try { 
                        console.log(data)
                        await download(data, './image/p.jpg', function(){
                            const a = base64_encode('./image/p.jpg');
                            var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                                iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                                limitAdd(serial)
                                console.log('SUCCESS | TextPro')
                          });
                        } catch(err) {
                            await iluser.reply(from, 'Terjadi kesalahan', id)
                            await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                            console.log('FAILED | TextPro')
                        } 
                    });
                }
                break
            case prefix+'tp12':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tp12`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                if (isLimit(serial)) return 
                if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
                const tes15 = body.slice(6)
                thiccysapi.textpro("https://textpro.me/glossy-carbon-text-effect-965.html",
                `${tes15}`
                    ).then(async (data) => { 
                    try { 
                        console.log(data)
                        await download(data, './image/p.jpg', function(){
                            const a = base64_encode('./image/p.jpg');
                            var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                                iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                                limitAdd(serial)
                                console.log('SUCCESS | TextPro')
                          });
                        } catch(err) {
                            await iluser.reply(from, 'Terjadi kesalahan', id)
                            await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                            console.log('FAILED | TextPro')
                        } 
                    });
                }
                break
        case prefix+'tp13':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tp13`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                if (isLimit(serial)) return 
                if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
                const tes15 = body.slice(6)
                thiccysapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
                `${tes15}`
                    ).then(async (data) => { 
                    try { 
                        console.log(data)
                        await download(data, './image/p.jpg', function(){
                            const a = base64_encode('./image/p.jpg');
                            var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                                iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                                limitAdd(serial)
                                console.log('SUCCESS | TextPro')
                          });
                        } catch(err) {
                            await iluser.reply(from, 'Terjadi kesalahan', id)
                            await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                            console.log('FAILED | TextPro')
                        } 
                    });
                }
                break
        case prefix+'tp14':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tp14`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                if (isLimit(serial)) return 
                if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
                const tes15 = body.slice(6)
                thiccysapi.textpro("https://textpro.me/denim-text-effect-online-919.html",
                `${tes15}`
                    ).then(async (data) => { 
                    try { 
                        console.log(data)
                        await download(data, './image/p.jpg', function(){
                            const a = base64_encode('./image/p.jpg');
                            var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                                iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                                limitAdd(serial)
                                console.log('SUCCESS | TextPro')
                          });
                        } catch(err) {
                            await iluser.reply(from, 'Terjadi kesalahan', id)
                            await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                            console.log('FAILED | TextPro')
                        } 
                    });
                }
                break
        case prefix+'tp15':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tp15`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                if (isLimit(serial)) return 
                if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
                const tes15 = body.slice(6)
                thiccysapi.textpro("https://textpro.me/road-warning-text-effect-878.html",
                `${tes15}`
                    ).then(async (data) => { 
                    try { 
                        console.log(data)
                        await download(data, './image/p.jpg', function(){
                            const a = base64_encode('./image/p.jpg');
                            var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                                iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                                limitAdd(serial)
                                console.log('SUCCESS | TextPro')
                          });
                        } catch(err) {
                            await iluser.reply(from, 'Terjadi kesalahan', id)
                            await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                            console.log('FAILED | TextPro')
                        } 
                    });
                }
                break
        case prefix+'tp16':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tp16`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                if (isLimit(serial)) return 
                if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
                const tes15 = body.slice(6)
                thiccysapi.textpro("https://textpro.me/break-wall-text-effect-871.html",
                `${tes15}`
                    ).then(async (data) => { 
                    try { 
                        console.log(data)
                        await download(data, './image/p.jpg', function(){
                            const a = base64_encode('./image/p.jpg');
                            var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                                iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                                limitAdd(serial)
                                console.log('SUCCESS | TextPro')
                          });
                        } catch(err) {
                            await iluser.reply(from, 'Terjadi kesalahan', id)
                            await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                            console.log('FAILED | TextPro')
                        } 
                    });
                }
                break
        case prefix+'tp17':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tp17`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                if (isLimit(serial)) return 
                if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
                const tes15 = body.slice(6)
                thiccysapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
                `${tes15}`
                    ).then(async (data) => { 
                    try { 
                        console.log(data)
                        await download(data, './image/p.jpg', function(){
                            const a = base64_encode('./image/p.jpg');
                            var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                                iluser.sendImage(from, base64str,'',`${mess.iklann}`, id);
                                limitAdd(serial)
                                console.log('SUCCESS | TextPro')
                          });
                        } catch(err) {
                            await iluser.reply(from, 'Terjadi kesalahan', id)
                            await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                            console.log('FAILED | TextPro')
                        } 
                    });
                }
                break
        case prefix+'tp18':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tp18`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                if (isLimit(serial)) return 
                if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
                const tes15 = body.slice(6)
                thiccysapi.textpro("https://textpro.me/fruit-juice-text-effect-861.html",
                `${tes15}`
                    ).then(async (data) => { 
                    try { 
                        console.log(data)
                        await download(data, './image/p.jpg', function(){
                            const a = base64_encode('./image/p.jpg');
                            var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                                iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                                limitAdd(serial)
                                console.log('SUCCESS | TextPro')
                          });
                        } catch(err) {
                            await iluser.reply(from, 'Terjadi kesalahan', id)
                            await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                            console.log('FAILED | TextPro')
                        } 
                    });
                }
                break
        case prefix+'tp19':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tp19`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                if (isLimit(serial)) return 
                if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
                const tes15 = body.slice(6)
                thiccysapi.textpro("https://textpro.me/wood-text-effect-856.html",
                `${tes15}`
                    ).then(async (data) => { 
                    try { 
                        console.log(data)
                        await download(data, './image/p.jpg', function(){
                            const a = base64_encode('./image/p.jpg');
                            var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                                iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                                limitAdd(serial)
                                console.log('SUCCESS | TextPro')
                          });
                        } catch(err) {
                            await iluser.reply(from, 'Terjadi kesalahan', id)
                            await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                            console.log('FAILED | TextPro')
                        } 
                    });
                }
                break
        case prefix+'tp20':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tp20`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                if (isLimit(serial)) return 
                if (args.length === 1) return await iluser.reply(from, `Textnya mana cantik?`, id)
                const tes15 = body.slice(6)
                thiccysapi.textpro("https://textpro.me/carbon-text-effect-833.html",
                `${tes15}`
                    ).then(async (data) => { 
                    try { 
                        console.log(data)
                        await download(data, './image/p.jpg', function(){
                            const a = base64_encode('./image/p.jpg');
                            var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                                iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                                limitAdd(serial)
                                console.log('SUCCESS | TextPro')
                          });
                        } catch(err) {
                            await iluser.reply(from, 'Terjadi kesalahan', id)
                            await iluser.sendText(ownerNumber, `TextPro:\n${err}`)
                            console.log('FAILED | TextPro')
                        } 
                    });
                }
                break
        case prefix+'crot':{
            const tes15 = body.slice(6)
            const tes151 = tes15.split('|')[0]
            const tes152 = tes15.split('|')[1]
            thiccysapi.textpro("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html",
                [`${tes151}`], [`${tes152}`]
                ).then(async (data) => { 
                try { 
                    console.log(data)
                    await download(data, './image/p.jpg', function(){
                        const a = base64_encode('./image/p.jpg');
                        var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                            iluser.sendImage(message.from,base64str,'',`${mess.iklann}`, id);
                      });
                  //  console.log(data)
                } catch(err) { 
                    console.log(err)
                } 
            });
        }
        break        
        case prefix+'salju': {
            const disable = await getDB.cek_disable(message.from, `${prefix}salju`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(7)
                    const tes151 = tes15.split('|')[0]
                    const tes152 = tes15.split('|')[1]
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}salju iluser_BOT | Keren`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/snow_writing", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text1"]', tes151);
                            await page.type('input[name="text2"]', tes152);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | salju maker', 'red'))
                            iluser.sendText(ownerNumber, `Error salju maker:\n${err}`)
                            iluser.reply(message.from, 'Error\n\nPastikan format penulisan benar!', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | salju maker', 'red'))
            iluser.sendText(ownerNumber, `Error salju maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'bioskoptext': {
            const disable = await getDB.cek_disable(message.from, `${prefix}bioskoptext`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(13)
                    const tes151 = tes15.split('|')[0]
                    const tes152 = tes15.split('|')[1]
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}bioskop iluser_BOT | Keren`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/movie_marquee", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text1"]', tes151);
                            await page.type('input[name="text2"]', tes152);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | bioskop text', 'red'))
                            iluser.sendText(ownerNumber, `Error bioskop text:\n${err}`)
                            iluser.reply(message.from, 'Error\n\nPastikan format penulisan benar!', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | bioskop maker', 'red'))
            iluser.sendText(ownerNumber, `Error bioskop maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'kue':{
            const disable = await getDB.cek_disable(message.from, `${prefix}kue`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(5)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}kue iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/cookies_writing", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | kue maker', 'red'))
                            iluser.sendText(ownerNumber, `Error kue maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | kue maker', 'red'))
            iluser.sendText(ownerNumber, `Error kue maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'wooden-sign':{
            const disable = await getDB.cek_disable(message.from, `${prefix}wooden-sign`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(13)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}wooden-sign iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/wooden_sign", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | wooden-sign', 'red'))
                            iluser.sendText(ownerNumber, `Error wooden-sign:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | wooden-sign', 'red'))
            iluser.sendText(ownerNumber, `Error wooden-sign:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'chalktext': {
            const disable = await getDB.cek_disable(message.from, `${prefix}chalktext`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(11)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}chalktext iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/chalk_writing", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | chalktext maker', 'red'))
                            iluser.sendText(ownerNumber, `Error chalktext maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | chalktext maker', 'red'))
            iluser.sendText(ownerNumber, `Error chalktext maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'karat':{
            const disable = await getDB.cek_disable(message.from, `${prefix}karat`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(7)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}karat iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/rusty-writing", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | karat maker', 'red'))
                            iluser.sendText(ownerNumber, `Error karat maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | karat maker', 'red'))
            iluser.sendText(ownerNumber, `Error karat maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'kayu':{
            const disable = await getDB.cek_disable(message.from, `${prefix}kayu`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(6)
                    const tes151 = tes15.split('|')[0]
                    const tes152 = tes15.split('|')[1]
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}kayu iluser_BOT|Mantap`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/tree_carving", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes151);
                            await page.type('input[name="text2"]', tes152);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | kayu maker', 'red'))
                            iluser.sendText(ownerNumber, `Error kayu maker:\n${err}`)
                            iluser.reply(message.from, 'Error\n\nPastikan format penulisan benar!', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | kayu maker', 'red'))
            iluser.sendText(ownerNumber, `Error kayu maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'tato':{
            const disable = await getDB.cek_disable(message.from, `${prefix}tato`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(6)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}tato iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/heart_tattoo", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | tato maker', 'red'))
                            iluser.sendText(ownerNumber, `Error tato maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | tato maker', 'red'))
            iluser.sendText(ownerNumber, `Error tato maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'neon-sign':{
            const disable = await getDB.cek_disable(message.from, `${prefix}neon-sign`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(11)
                    const tes151 = tes15.split('|')[0]
                    const tes152 = tes15.split('|')[1]
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}neon-sign iluser_BOT | Keren`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/neon", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text1"]', tes151);
                            await page.type('input[name="text2"]', tes152);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | neon-sign maker', 'red'))
                            iluser.sendText(ownerNumber, `Error neon-sign maker:\n${err}`)
                            iluser.reply(message.from, 'Error\n\nPastikan format penulisan benar!', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | neon-sign maker', 'red'))
            iluser.sendText(ownerNumber, `Error neon-sign maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'window':{
            const disable = await getDB.cek_disable(message.from, `${prefix}window`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(8)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}window iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/foggy_window_writing", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | window maker', 'red'))
                            iluser.sendText(ownerNumber, `Error window maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | window maker', 'red'))
            iluser.sendText(ownerNumber, `Error window maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'blood2': {
            const disable = await getDB.cek_disable(message.from, `${prefix}blood2`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(8)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}blood2 iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/blood_writing", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | blood2 maker', 'red'))
                            iluser.sendText(ownerNumber, `Error blood2 maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | blood2 maker', 'red'))
            iluser.sendText(ownerNumber, `Error blood2 maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'graffiti2':{
            const disable = await getDB.cek_disable(message.from, `${prefix}graffiti2`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                    const tes15 = body.slice(11)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}graffiti2 iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            limitAdd(serial)
                    const puppeteer = require('puppeteer')
            try {
                (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                        .goto("https://photofunia.com/categories/all_effects/graffiti_text", {
                            waitUntil: "networkidle2"
                        })
                        .then(async () => {
                            await page.type('input[name="text"]', tes15);
                            await page.keyboard.press('Enter');
                            await new Promise(resolve => setTimeout(resolve, 3000));
                            const element = await page.$(
                                'div[class="image p402_hide"] > img' 
                                );
                            const text = await (await element.getProperty("src")).jsonValue();
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | graffiti2 maker', 'red'))
                            iluser.sendText(ownerNumber, `Error graffiti2 maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | graffiti2 maker', 'red'))
            iluser.sendText(ownerNumber, `Error graffiti2 maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break

        

        // INFORMATION
        case prefix+'film':
            try {
                if (args.length === 1) {
                    await iluser.reply(message.from, 'Judul film yang diacari apa cantik?', message.id)
                } else {
                    const keyword = encodeURIComponent(body.slice(6))
                    const url = `https://zerachiuw.herokuapp.com/api/movie?search=${keyword}`
    
                    const response = await axios.get(url)
                    let result = `*${response.data['title']}*\n\n`
                    result += `*Score:* ${response.data['score']}\n`
                    result += `*Quality:* ${response.data['quality']}\n`
                    result += `*Duration:* ${response.data['duration']}\n`
                    result += `*Genre:* ${response.data['genre']}\n`
                    result += `*Trailer:* ${response.data['trailer']}\n\n`
                    result += '*Synopsis:*\n'
                    result += `${response.data['synopsis']}\n\n`
                    result += '*Downloads:*\n'
    
                    for (let i = 0; i < response.data['downloads'].length; i++) {
                        const downloads = response.data['downloads'][i]
                        result += `*Server:* ${downloads['provider']}\n`
                        result += `*Desc:* ${downloads['description']}\n`
                        result += `*Size:* ${downloads['size']}\n`
                        result += `*Link:* ${downloads['link']}\n`
    
                        if (i !== (response.data['downloads'].length - 1)) result += '\n'
                    }
    
                    await iluser.sendFileFromUrl(message.from, response.data['thumb'], 'thumb.jpg', result, message.id)
                }
            } catch (err) {
                if (err.response.status_code === 404) {
                    await iluser.reply(message.from, 'Data tidak ditemukan', message.id)
                } else {
                    await iluser.reply(message.from, 'terjadi kesalahan', message.id)
                    console.error(err)
                }
            }
            break
        case prefix+'artinama':
            try{
            const disable = await getDB.cek_disable(message.from, `${prefix}artinama`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (args.length === 1) return iluser.reply(message.from, `Namamu mana sayang?`, id)
            const name = await axios.get(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`)
            iluser.reply(from, `${name.data.result} ${mess.iklan}`, id)
            console.log('SUCCESS | artinama')
            limitAdd(serial)
            break
        } catch (err){
            console.log(color('FAILED | artinama', 'red'))
            iluser.reply(message.from, 'Terjadi kesalahan', message.id)
            iluser.sendText(ownerNumber, 'artinama: ' + err)
        }
        case prefix+'pasangan':
            try{
            const disable = await getDB.cek_disable(message.from, `${prefix}artinama`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (args.length === 1) return iluser.reply(message.from, `${prefix}pasangan aku|kamu`, id)
            const tes15 = body.slice(10)
            const nama1 = tes15.split('|')[0]
            const nama2 = tes15.split('|')[1]
            const name = await axios.get(`https://zerachiuw.herokuapp.com/api/pasangan?nama1=${nama1}&nama2=${nama2}`)
            const {nama_anda,nama_pasangan,sisi_positif_anda,sisi_negatif_anda,deskripsi} = await name.data
            iluser.reply(from, `Nama kamu: ${nama_anda}\nNama pasangan: ${nama_pasangan}\n\n*Sisi positif:*\n${sisi_positif_anda}\n\n*Sisi negatif:*\n${sisi_negatif_anda}\n\n*Deskripsi:*\n${deskripsi} ${mess.iklan}`, id)
            console.log('SUCCESS | pasangan')
            limitAdd(serial)
            break
        } catch (err){
            console.log(color('FAILED | Pasangan', 'red'))
            iluser.reply(message.from, 'Terjadi kesalahan', message.id)
            iluser.sendText(ownerNumber, 'Pasangan: ' + err)
        }
        
        case prefix+'donate':
        case prefix+'donasi':{
            const disable = await getDB.cek_disable(message.from, `${prefix}donasi`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            iluser.sendImage(message.from, './dana.jpeg', 'iluser.jpeg', donatee.replace(undefined, pushname), message.id)
            console.log('SUCCESS | info donasi')
        }
            break
        case prefix+'about':{
            const disable = await getDB.cek_disable(message.from, `${prefix}about`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            iluser.reply(message.from, info.replace(undefined, pushname), message.id)
        }
            break
        case prefix+'info':{
            const disable = await getDB.cek_disable(message.from, `${prefix}info`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
            iluser.reply(message.from, readme, message.id)
        }
            break
        case prefix+'bahasa':
            iluser.reply(message.from, bahasalist, message.id)
            break
        case prefix+'wa.me':
        case prefix+'wame':
            if(isReg(obj)) return
            iluser.reply(message.from, `Nih ${pushname} nomor wa lu\n\nwa.me/${sender.id.replace(/[@c.us]/g, '')}\n\nAtau\n\napi.whatsapp.com/send?phone=${sender.id.replace(/[@c.us]/g, '')}`, message.id)
            break
        case prefix+'premium':
        case prefix+'premfitur':
        case '#premfitur':{
            const disable = await getDB.cek_disable(message.from, `${prefix}premfitur`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)  
            await iluser.reply(message.from, premfitur, message.id)
            await sleep(1000)
            await iluser.sendTextWithMentions(message.from, `Hubungi master saya jika berminat @${ownerNumber}`, message.id)
        }
            break
        case prefix+'snk':{
            const disable = await getDB.cek_disable(message.from, `${prefix}snk`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            iluser.reply(message.from, snk, message.id)
        }
            break
        case '#rules':{
            const disable = await getDB.cek_disable(message.from, `#rules`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            iluser.reply(message.from, rules, message.id)
        }
            break;

        case `${prefix}xxx`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}xxx`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
                if (isLimit(serial)) return 
            if (!isPremium) return await iluser.reply(message.from, mess.nopremium, message.id)
                limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *.xxx* [ Judul ]`)
            const querXXX = body.slice(5)
            // iluser.reply(message.from, mess.wait, message.id)
            try {
                const resxxx = await fetch(`https://api.vhtear.com/xxxsearch?query=${encodeURIComponent(querXXX)}&apikey=${vhtearkey}`)
                if (!resxxx.ok) throw new Error(`unexpected response ${resxxx.statusText}`)
                const resxxx2 = await resxxx.json()
                const { data } = await resxxx2.result
                let berhitung = 1
                let xixixi = `*XVIDEOS*\n\n*Hasil Pencarian : ${querXXX}*\n\n─────────────────\n\nKetik .getxxx [angka] untuk mengambil ID, Contoh : .getxxx 2\n`
                for (let i = 0; i < data.length; i++) {
                    xixixi += `\n─────────────────\n\n*Urutan* : ${berhitung+i}\n*Title* : ${data[i].title}\n*Duration* : ${data[i].duration}\n*Perintah download* : *.getxxx ${data[i].url}*\n`
                }
                    xixixi += `\n\n`
                for (let ii = 0; ii < data.length; ii++) {
                    xixixi += `(.)${data[ii].url}`
                }
                await iluser.sendFileFromUrl(message.from, data[0].image, 'thumbxxx.jpg', xixixi, message.id)
                
            } catch (err){
                console.log(color('FAILED | xnxx search', 'red'))
                iluser.reply(message.from, 'Error!', message.id)
                iluser.sendText(ownerNumber, 'XXX search Error : ' + err)
            }
        }
            break
        case `${prefix}getxxx`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}getxxx`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
                if (isLimit(serial)) return 
            if (!isPremium) return await iluser.reply(message.from, mess.nopremium, message.id)
                limitAdd(serial)
            try {
                if (quotedMsg && quotedMsg.type == 'image') {
                    if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *.getxxx [ Id Download ]*`)
                    if (!Number(args[1])) return iluser.reply(message.from, `*Apabila ditag hanya cantumkan nomer urutan bukan ID Download!*\nContoh : *.getxxx 1*`, message.id)
                    const datavideo = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                    const pilur = datavideo.split('(.)')
                    console.log(pilur[args[1]])
                    const getxxx = await fetch(`https://api.vhtear.com/xxxdownload?link=${pilur[args[1]]}&apikey=${vhtearkey}`)
                    if (!getxxx.ok) throw new Error(`Error XXX : ${getxxx.statusText}`)
                    const getxxx2 = await getxxx.json()
                     if (getxxx2.status == false) {
                        iluser.reply(message.from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, message.id)
                    } else {
                        try{
                        const { title, urlVideo, response } = await getxxx2.result
                        console.log(`STATUS API : ${response}`)
                        let xixixi = `*XXX DOWNLOADER*\n\n${title}`
                        for (let i = 0; i < urlVideo.length; i++) {
                            xixixi += `\n─────────────────\n\n*Title* : ${urlVideo[i].title}\n*Default Quality* : ${urlVideo[i].defaultQuality}\n*Format* : ${urlVideo[i].format}\n*Quality* : ${urlVideo[i].quality}\n*Url Video* : ${urlVideo[i].videoUrl}\n\n`
                        }
                        iluser.sendFileFromUrl(message.from, `https://thumbs.dreamstime.com/b/xxx-neon-sign-dark-background-xxx-neon-sign-dark-background-vector-illustration-129829099.jpg`, `xxx.jpg`, xixixi, message.id)
                        // await iluser.sendFileFromUrl(message.from, result, `${title}.mp3`, `Music telah terkirim ${pushname}`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                        
                        } catch (err){
                            console.log(err)
                        }
                    }    
                } else if (quotedMsg && quotedMsg.type == 'chat') { 
                    iluser.reply(message.from, `*Salah tag! hanya tag pesan berisi data hasil dari penelusuran videp.*`, message.id)
                } else {
                    if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *.getxvideos [ Id Download ]*`)
                    if (args[1] <= 25) return iluser.reply(message.from, `*Apabila ingin mengambil data video dengan nomor urutan, mohon tag pesan bot tentang pencarian video!*`,)
                    // iluser.reply(message.from, mess.wait, message.id)
                    const getxxx = await fetch(`https://api.vhtear.com/xxxsearch?link=${pilur[args[1]]}&apikey=${vhtearkey}`)
                    if (!getxxx.ok) throw new Error(`Error XXX : ${getxxx.statusText}`)
                    const getxxx2 = await getxxx.json()
                     if (getxxx2.status == false) {
                        iluser.reply(message.from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, message.id)
                    } else {
                        //if (Number(getxxx2.result.data.duration.split(':')[0]) > 5) return iluser.sendFileFromUrl(message.from, imgUrl, `thumb.jpg`, `*XXX DOWNLOADER*\n\n*Website* : XVideos\n\n*Ext* : MP4\n*Link* : ${shortvidxv2}\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`, message.id)
                        const { title, urlVideo, response } = await getxxx2.result
                        console.log(`STATUS API : ${response}`)
                        let xixixi = `*XXX DOWNLOADER*\n\n*Title* : ${title}`
                        for (let i = 0; i < urlVideo.length; i++) {
                            xixixi += `\n─────────────────\n\n*Default Quality* : ${urlVideo[i].defaultQuality}\n*Format* : ${urlVideo[i].format}\n*Quality* : ${urlVideo[i].quality}\n*Url Video* : ${urlVideo[i].videoUrl}\n\n`
                        }
                        iluser.sendFileFromUrl(message.from, `https://thumbs.dreamstime.com/b/xxx-neon-sign-dark-background-xxx-neon-sign-dark-background-vector-illustration-129829099.jpg`, `xxx.jpg`, xixixi, message.id)
                        // await iluser.sendFileFromUrl(message.from, result, `${title}.mp3`, `Music telah terkirim ${pushname}`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                        
                   }
                }
            } catch (err) {
                iluser.sendText(ownerNumber, 'Error XVideos : '+ err)
                iluser.reply(message.from, `*Kesalahan! Pastikan id download sudah benar.*`, message.id)
                console.log(err)
            }
        }
            break
        case `${prefix}xvideos`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}xvideos`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
                if (isLimit(serial)) return 
            if (!isPremium) return await iluser.reply(message.from, mess.nopremium, message.id)
                limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *.xvideos* [ Lagu ]`)
            const querVID = body.slice(9)
            try {
                const resvid = await fetch(`https://mnazria.herokuapp.com/api/porn?search=${encodeURIComponent(querVID)}`)
                if (!resvid.ok) throw new Error(`unexpected response ${resvid.statusText}`)
                const jsonserxvid = await resvid.json()
                const { result } = await jsonserxvid
                let berhitung = 1
                let xixixi = `*XVIDEOS*\n\n*Hasil Pencarian : ${querVID}*\n\n─────────────────\n\nKetik .getxvideos [angka] untuk mengambil ID, Contoh : .getxvideos 2\n`
                for (let i = 0; i < result.length; i++) {
                    xixixi += `\n─────────────────\n\n*Urutan* : ${berhitung+i}\n*Title* : ${result[i].title}\n*Actors* : ${result[i].actors}\n*Durasi* : ${result[i].duration}\n*Perintah download* : *.getxvideos ${result[i].url}*\n`
                }
                    xixixi += `\n\n`
                for (let ii = 0; ii < result.length; ii++) {
                    xixixi += `(.)${result[ii].url}`
                }
                await iluser.sendFileFromUrl(message.from, result[0].image, 'thumbxvid.jpg', xixixi, message.id)
            } catch (err){
                console.log(err)
                iluser.reply(message.from, 'Error!', message.id)
                iluser.sendText(ownerNumber, 'Xvideos Error : ' + err)
            }
        }
            break
        case `${prefix}getxvideos`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}getxvideos`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
                if (isLimit(serial)) return
            if (!isPremium) return await iluser.reply(message.from, mess.nopremium, message.id)
                limitAdd(serial)
            try {
                if (quotedMsg && quotedMsg.type == 'image') {
                    if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *.getxvideos [ Id Download ]*`)
                    if (!Number(args[1])) return iluser.reply(message.from, `*Apabila ditag hanya cantumkan nomer urutan bukan ID Download!*\nContoh : *.getxvideos 1*`, message.id)
                    const datavideo = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                    const pilur = datavideo.split('(.)')
                    console.log(pilur[args[1]])
                    const vidxvid = await fetch(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${pilur[args[1]]}`)
                    if (!vidxvid.ok) throw new Error(`Error Get Video : ${vidxvid.statusText}`)
                    const vidxvideo = await vidxvid.json()
                     if (vidxvideo.status == false) {
                        iluser.reply(message.from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, message.id)
                    } else {
                        try{
                        const { mp4 } = await vidxvideo
                        console.log(vidxvideo)
                        const shortvidxv = await urlShortener(mp4)
                        //await iluser.sendFileFromUrl(message.from, `https://sensorstechforum.com/wp-content/uploads/2019/07/xvideos-virus-image-sensorstechforum-com.jpg`, ``, captions, message.id)
                        if (!isOwner) return iluser.reply(message.from, `Download sendiri ngab lewat sini. Males kalo server bot error karena command bokep\n${shortvidxv}`, message.id)
                        await iluser.sendFileFromUrl(message.from, shortvidxv, `bokep.mp4`, `Kocok terus tuh batang`, id).catch(() => printError)
                        
                        } catch (err){
                            printError
                        }
                    }    
                } else if (quotedMsg && quotedMsg.type == 'chat') { 
                    iluser.reply(message.from, `*Salah tag! hanya tag pesan berisi data hasil dari penelusuran videp.*`, message.id)
                } else {
                    if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *.getxvideos [ Id Download ]*`)
                    if (args[1] <= 25) return iluser.reply(message.from, `*Apabila ingin mengambil data video dengan nomor urutan, mohon tag pesan bot tentang pencarian videp!*`,)
                    // iluser.reply(message.from, mess.wait, message.id)
                    const getvide = await get.get(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${pilur[args[1]]}`).json
                    if (getvide.error) {
                        iluser.reply(message.from, getvide.error, message.id)
                    } else {
                        const { mp4 } = await mhankyt35
                        const shortvidxv2 = await urlShortener(mp4)
                        console.log(`CHANGE API BARBAR : ${ext}\n${filesize}\n${status}`)
                        const captions = `*XVIDEOS DOWNLOADER*\n\n*Website* : XVideos\n\n*Ext* : MP4\n*Link* : ${shortvidxv2}\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
                        iluser.sendFileFromUrl(message.from, `https://sensorstechforum.com/wp-content/uploads/2019/07/xvideos-virus-image-sensorstechforum-com.jpg`, ``, captions, message.id)
                        // await iluser.sendFileFromUrl(message.from, result, `${title}.mp3`, `Music telah terkirim ${pushname}`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                        
                   }
                }
            } catch (err) {
                iluser.sendText(ownerNumber, 'Error XVideos : '+ err)
                iluser.reply(message.from, `*Kesalahan! Pastikan id download sudah benar.*`, message.id)
                console.log(err)
            }
        }
            break

        case prefix+'trash':{
            const disable = await getDB.cek_disable(message.from, `${prefix}trash`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
                if (isLimit(serial)) return 
                if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
                try {
                     for (let i = 0; i < mentionedJidList.length; i++) {
                      var ypics = await iluser.getProfilePicFromServer(mentionedJidList[i])
                        if (ypics === undefined) {
                            var ypfps = ppdepresi
                        } else {
                            var ypfps = ypics
                        }
                    }
                    const ppRaw = ypics
                        canvas.Canvas.trash(ppRaw)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_trash.png`)
                                await iluser.sendFile(message.from, `${sender.id}_trash.png`, `${sender.id}_trash.png`, `${mess.iklann}`, message.id)
                                fs.unlinkSync(`${sender.id}_trash.png`)
                            })  
                            limitAdd(serial)       
                } catch (err) {
                    console.error(err)
                    await iluser.reply(message.from, 'Error!', message.id)
                }
            }
            break
        case prefix+'hitler':{
            const disable = await getDB.cek_disable(message.from, `${prefix}hitler`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
                if (isLimit(serial)) return 
                if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
                try {
                     for (let i = 0; i < mentionedJidList.length; i++) {
                      var ypics = await iluser.getProfilePicFromServer(mentionedJidList[i])
                        if (ypics === undefined) {
                            var ypfps = ppdepresi
                        } else {
                            var ypfps = ypics
                        }
                    }
                    const ppRaw = ypics
                        canvas.Canvas.hitler(ppRaw)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_hitler.png`)
                                await iluser.sendFile(message.from, `${sender.id}_hitler.png`, `${sender.id}_hitler.png`, `${mess.iklann}`, message.id)
                                fs.unlinkSync(`${sender.id}_hitler.png`)
                            })         
                            limitAdd(serial)
                } catch (err) {
                    console.error(err)
                    await iluser.reply(message.from, 'Error!', message.id)
                }
            }
            break
        case prefix+'jail':{
            const disable = await getDB.cek_disable(message.from, `${prefix}jail`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if(isReg(obj)) return
                if (isLimit(serial)) return
                if (!isGroupMsg) return iluser.reply(message.from, mess.nongroup, message.id)
                try {
                     for (let i = 0; i < mentionedJidList.length; i++) {
                      var ypics = await iluser.getProfilePicFromServer(mentionedJidList[i])
                        if (ypics === undefined) {
                            var ypfps = ppdepresi
                        } else {
                            var ypfps = ypics
                        }
                    }
                        const ppRaw = ypics
                        canvas.Canvas.jail(ppRaw)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_hitlered.jpg`)
                                await iluser.sendFile(message.from, `${sender.id}_hitlered.jpg`, `${sender.id}_hitlered.jpg`, `${mess.iklann}`, message.id)
                                fs.unlinkSync(`${sender.id}_hitlered.jpg`)
                            })
                            limitAdd(serial)
                } catch (err) {
                    console.error(err)
                    await iluser.reply(message.from, `Error!\n${err}`, message.id)
                }
            }
            break
        case prefix+'blur':
			try {
                const disable = await getDB.cek_disable(message.from, `${prefix}blur`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                if(isReg(obj)) return
                    if (isLimit(serial)) return
				if (isMedia && type === 'image' || isQuotedImage) {
					const shitBlurt = isQuotedImage ? quotedMsg : message
					const getshitPic = await decryptMedia(shitBlurt, uaOverride)
					var theBlurpic = await uploadImages(getshitPic, false)
				} else { var theBlurpic = quotedMsg ? await iluser.getProfilePicFromServer(quotedMsgObj.sender.id) : (mentionedJidList.length !== 0 ? await iluser.getProfilePicFromServer(mentionedJidList[0]) : await iluser.getProfilePicFromServer(user)) }
				if (theBlurpic === undefined) theBlurpic = errorImg
				canvas.Canvas.blur(theBlurpic).then(async (buffer) => { 
                    await iluser.sendFile(from, `data:image/png;base64,${buffer.toString('base64')}`, `blur.png`, `${mess.iklann}`, id)
                    limitAdd(serial)
                })
			} catch (error) {
				await iluser.reply(from, `Gagal!\n\nPeriksa format penulisan dengan benar`, id)
				console.log(error)
			}
			break
			
			
		case prefix+'rip':
			try {
                const disable = await getDB.cek_disable(message.from, `${prefix}rip`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
                if(isReg(obj)) return
				if (isMedia && type === 'image' || isQuotedImage) {
					const ARipt = isQuotedImage ? quotedMsg : message
					const getRipPic = await decryptMedia(ARipt, uaOverride)
					var theRippic = await uploadImages(getRipPic, false)
				} else { var theRippic = quotedMsg ? await iluser.getProfilePicFromServer(quotedMsgObj.sender.id) : (mentionedJidList.length !== 0 ? await iluser.getProfilePicFromServer(mentionedJidList[0]) : await iluser.getProfilePicFromServer(user)) }
				if (theRippic === undefined) theRippic = errorImg
				canvas.Canvas.rip(theRippic).then(async (buffer) => { 
                    await iluser.sendFile(from, `data:image/png;base64,${buffer.toString('base64')}`, `rip.png`, `${mess.iklann}`, id)
                    limitAdd(serial)
                })
			} catch (error) {
				await iluser.reply(from, `Gagal!\n\nPeriksa format penulisan dengan benar`, id)
				console.log(error)
			}
			break
        case prefix+'shutdown':
                if (isOwner){
                await iluser.sendText(message.from, '[ WARN ] Process to shutdown...')
                await sleep(3000)
                await iluser.sendText(message.from, 'Cleaning cache...')
                await iluser.cutMsgCache()
                await sleep(4000)
                await iluser.sendText(message.from, 'Done cleaning')
                await sleep(2000)
                await iluser.sendText(message.from, 'Shutting Down now')
                await sleep(1000)
                await iluser.sendText(message.from, 'Goodbye owner :)')
                    .then(async () => await iluser.kill())
                    .catch(() => new Error('Target closed.'))
            }
            break
            default:
            //if (!isGroupMsg)
            if (command.startsWith(`${prefix}`) && !isGroupMsg) { 
                //return iluser.reply(message.from, 'Command tersebut tidak terdapat di menu iluser_BOT', message.id)
                console.log(color('[ERROR]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'Unregistered Command from', color(pushname))
                iluser.reply(from, `Command *${args[0]}* tidak terdapat di ${prefix}menu`, id)
            }
            break
            //await iluser.sendSeen(from) 
            }

        }

    } catch(err){
        console.log(color('[ERROR]', 'red'), err)
    }
}

module.exports = { HandleMsg, reCacheModule }