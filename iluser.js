require('dotenv').config()
const { decryptMedia, wa, client } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
var ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
ffmpeg.setFfmpegPath(ffmpegPath);
var getDB = require('./db');
const { ind, eng } = require('./text/lang/')
const axios = require('axios')
const moment = require('moment-timezone')
const getYouTubeID = require('get-youtube-id')
const os = require('os')
const get = require('got')
const ms = require('parse-ms')
const toMs = require('ms')
const acrcloud = require("acrcloud")
const acr = new acrcloud({ host: "identify-eu-west-1.acrcloud.com", access_key: "a7982a1f271fc390f3a69cb5bac04498", access_secret: "QPbD6UOnfawRtUiH88lzKx7edUaX20I0erUWCoCW"})
const isPorn = require('is-porn')
const apiNSF = ['c3257b42f47544d08b8609974227ac1f','e281f93d62384681af55a66d967c0883','dc0cac2b46564d5ebbf6bda7eabcc7f2','04389571abcb4d66a1ecf3e1ac28b9a8','efb87b31fe13461ba2c1844311b204d6','72a8fa429c0744aeafdd2517eb7ad55b']
const apiNSFW = apiNSF[Math.floor(Math.random() * apiNSF.length)]
const NSFAI = require('nsfai')
const noPorn = new NSFAI(apiNSFW)
const appC = new Clarifai.App({ apiKey: apiNSFW })
const speed = require('performance-now')
const fetch = require('node-fetch')
//const convertapi = require('convertapi')
const convertapi = require('convertapi')('10CDuw4T35HeKK39')
const cheerio = require("cheerio");
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const google = require('google-it')
const translatte = require('translatte')
const translate = require('./lib/translate.js')
const { stdout, send } = require('process')
const Math_js = require('mathjs');
const imageToBase64 = require('image-to-base64')
const bent = require('bent')
const request = require('request')
const emojiUnicode = require("emoji-unicode")
const googleIt = require('google-it');
const ytdl = require('ytdl-core');
const mysql = require('mysql')
const IG = require('./api/ig.js')
const ZODIAK = require('./api/zodiak.js')
const PIN = require('./api/pin.js')
const h2p = require('html2plaintext');
const { spawn, execFile } = require('child_process')
const BRAINLY = require(`./api/brainly.js`);
const TikTokScraper = require('tiktok-scraper')
const tiktok = require('tiktok-scraper')
const meme = require('./lib/meme')
const toxic = require('./lib/toxic')
const quotedd = require('./lib/database/quote')
const color = require('./lib/color')
const exec = require('await-exec')
const webp = require('webp-converter')
const Exif = require('./utils/exif')
const exif = new Exif()
const Takestick = require('./utils/takestick')
const takestick = new Takestick()
const cekResi = require('./lib/cekResi')
const images = require('./lib/images')
const rugAapi = require('./lib/rugaApi')
const nobg = require('./lib/nobg')
const nsfww = require('./lib/nsfww')
const canvas = require('canvacord')
var util = require('util')
var Jimp = require('jimp');
const { getUser, getPost, searchUser } = require('./lib/Insta')
const urlShortener = require('./lib/shortener')
const premium = require('./lib/premium.js')
const getLocationData = require('./utils/location')
const { addFilter, isFiltered } = require('./lib/msgFilter')
const { createWorker } = require('tesseract.js');
const worker = createWorker();
const wav = require('node-wav')
const path = require('path')
const Utils = require('web-audio-api/build/utils')
const FormData = require('form-data')
const sharp = require('sharp')
const puppeteer = require('puppeteer')
const { Readable, Writable } = require('stream')
const { fromBuffer } = require('file-type')
const { sizeFormatter } = require('human-readable')
const delay = require('delay');
const { IgApiClient } = require('instagram-private-api')
const ig = new IgApiClient();
const IgMediaID = require('instagram-id-to-url-segment')

// LOAD FILE
//let respon = JSON.parse(fs.readFileSync('./respon.json'))
let truth = JSON.parse(fs.readFileSync('./lib/database/truth.json'))
let dare = JSON.parse(fs.readFileSync('./lib/database/dare.json'))
let banned = JSON.parse(fs.readFileSync('./lib/database/banned.json'))
let nsfw_ = JSON.parse(fs.readFileSync('./lib/database/nsfwz.json'))
let limit = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
let gruplimit = JSON.parse(fs.readFileSync('./lib/database/gruplimit.json'))
let welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
let left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
let muted = JSON.parse(fs.readFileSync('./lib/database/muted.json'))
let setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'));
let msgLimit = JSON.parse(fs.readFileSync('./lib/database/msgLimit.json'));
let adminNumber = JSON.parse(fs.readFileSync('./lib/database/admin.json'))
let _premium = JSON.parse(fs.readFileSync('./lib/database/premium.json'))
let _biodata = JSON.parse(fs.readFileSync('./lib/database/biodata.json'))
let _registered = JSON.parse(fs.readFileSync('./lib/database/registered.json'))
let taxax = JSON.parse(fs.readFileSync('./lib/database/bacotdb.json'))
let autostick = JSON.parse(fs.readFileSync('./lib/database/autostick.json'))
let say = JSON.parse(fs.readFileSync('./lib/database/say.json'))
const pilot = JSON.parse(fs.readFileSync('./lib/database/pilot.json'))
let vnlist = JSON.parse(fs.readFileSync('./lib/database/vn.json'))
const bacot = require('./lib/database/bacotdb.json')
let tiktok_user = JSON.parse(fs.readFileSync('./lib/database/usertt.json'))
//let tiktok_user = ('reemarmartin,vienbabinaaa,heart_juzmin,chikakiku,akuansellma,slzanblaa,sherylllvly,bbycky,ngelsk,salmanagibs').split(',')
let { commandArray } = require('./lib/template.js');
const process = require('process');
const pukimak = "pm2 restart main"


// PROTECT
let antilink = JSON.parse(fs.readFileSync('./lib/database/antilink.json'))
let _antinsfw = JSON.parse(fs.readFileSync('./lib/database/antiporn.json'))
let antibadword = JSON.parse(fs.readFileSync('./lib/database/antibadword.json'))
let msgBadword = JSON.parse(fs.readFileSync('./lib/database/msgBadword.json'))
let badword = JSON.parse(fs.readFileSync('./lib/database/badword.json'))
let stickerspam = JSON.parse(fs.readFileSync('./lib/database/stickerspam.json'))
const _leveling = JSON.parse(fs.readFileSync('./lib/database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./lib/database/level.json'))
const _afk = JSON.parse(fs.readFileSync('./lib/database/afk.json'))

const { 
    RemoveBgResult, 
    removeBackgroundFromImageBase64, 
    removeBackgroundFromImageFile 
} = require('remove.bg')

const { 
    liriklagu, 
    quotemaker, 
    randomNimek, 
    fb, 
    sleep, 
    jadwalTv, 
    fdci, 
    ss,  
    randNominal, 
    getStickerMaker, 
    gasNulis, 
    genUniqueId, 
    generate, 
    gasNulisFolio, 
    getRandomText, 
    processTime, 
    downloader, 
    GetAccesToken, 
    getGuestToken, 
    getAktivate, 
    getToken, 
    startConvert, 
    base64Only, 
    getBase64, 
    base64MimeType,
    nulis
} = require('./lib/functions')
const {level} = require('./function')
//const afk = require('./function/afk')
const { 
    help, 
    snk, 
    info, 
    donatee, 
    readme, 
    listChannel, 
    menuadmin, 
    rules, 
    mit, 
    own,
    piloot,
    bahasalist, 
    premfitur 
    } = require('./lib/help')

const {
    its,
    instagram,
    tiktokk,
    facebook,
    smule,
    starmaker,
    twitter,
    joox
    } = require('./lib/downloader')

const {
    stickerburn,
    stickerlight
    } = require('./lib/sticker')

const { 
    uploadImages, 
    custom,
    trigger
    } = require('./lib/fetcher')

let { 
    gruplimitCount,
    limitCount,
    memberLimit, 
    groupLimit,
    banChats,
    barbarkey,
    vhtearkey,
    melodickey,
    prefix,
    tobzkey,
    restartState: isRestart,
    mtc: mtcState
    } = setting

//const prefix = setting.prefix
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/

var CreateMYSQL = mysql.createConnection(
    {host: "127.0.0.1", user: "root", password: "", database: "bot_whatsapp", charset: 'utf8mb4'}
);

let state = {
    status: () => {
        if(banChats){
            return 'Nonaktif'
        }else if(mtcState){
            return 'Nonaktif'
        }else if(!mtcState){
            return 'Aktif'
        }else{
            return 'Aktif'
        }
    }
}

var timeStart = Date.now() / 1000
moment.tz.setDefault('Asia/Jakarta').locale('id')

module.exports = iluser = async (iluser, message) => {
    try {
        const { 
            type, 
            id, 
            from, 
            t,  
            sender, 
            isGroupMsg, 
            chat, 
            chatId, 
            caption, 
            isMedia, 
            mimetype, 
            quotedMsg, 
            quotedMsgObj, 
            author, 
            mentionedJidList 
        } = message

        let { body } = message
        //const dari = sender && sender.isMe ? to : from //biar selfbot ceunah
        const { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName
        const commands = caption || body || ''
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const argx = commands.toLowerCase()
        const args =  commands.split(' ')
        const command = commands.toLowerCase().split(' ')[0] || ''
        const argss = body.trim().split(/ +/).slice(1)
        const ar = argss.map((v) => v.toLowerCase())
        const q = argss.join(' ')
        global.prefix
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        const botNumber = await iluser.getHostNumber()
        const blockNumber = await iluser.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await iluser.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const SN = GenerateSerialNumber("000000000000000000000000")

        const reply = async (message) => iluser.reply(from, chatId, message, id, true)
        const isPremium = premium.checkPremiumUser(sender.id, _premium)
        const pendaftar = JSON.parse(fs.readFileSync('./lib/database/user.json'))

        const isMe = true
        const isBanned = banned.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        global.pollfile = 'poll_Config_' + chat.id + '.json'
        global.voterslistfile = 'poll_voters_Config_' + chat.id + '.json'
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
        const url = args.length !== 0 ? args[0] : ''

        const prf = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?@#$%^&\/\\©^]/.test(commands) ? commands.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?@#$%^&\/\\©^]/gi) : '-'
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedAudio = quotedMsg && (quotedMsg.type === 'audio' || quotedMsg.type === 'ptt' || quotedMsg.type === 'ppt')
        const isQuotedFile = quotedMsg && quotedMsg.type === 'document'
        const isQuotedDocs = quotedMsg && (quotedMsg.type === 'document' || quotedMsg.type === 'docx' || quotedMsg.type === 'doc' || quotedMsg.type === 'ppt' || quotedMsg.type === 'pptx' || quotedMsg.type === 'xlsx' || quotedMsg.type === 'xls')
        const isImage = type === 'image'
        const isVideo = type === 'video'
        const isQuotedSticker = quotedMsgObj && quotedMsgObj.type === 'sticker'
        const isQuotedGif = quotedMsg && quotedMsg.mimetype === 'image/gif'
        const isBadword = badword.includes(chatId)
        body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
        const arg = body.substring(body.indexOf(' ') + 1)
        const isautosticker = isGroupMsg ? autostick.includes(groupId) : false
       // const isAfkOn = afk.checkAfkUser(sender.id, _afk)
        const GroupLinkDetector = antilink.includes(chatId)
        const isAntiNsfw = isGroupMsg ? _antinsfw.includes(groupId) : false
        //const isLevelingOn = isGroupMsg ? _leveling.includes(groupId) : false
        const isPrivate = sender.id === chat.contact.id
        const stickermsg = message.type === 'sticker'
        const isCmd = command.startsWith(prefix)
        const isPrf = command.startsWith(prf)
        const obrolan = getDB.obrolan(message.from);

        const tms = (Date.now() / 1000) - (timeStart);
        const cts = waktu(tms)

        const serial = sender.id
        const pengirim = JSON.parse(fs.readFileSync('./lib/database/user.json'))
        var cek = pengirim.includes(sender.id);
        const uwong = pengirim[Math.floor(Math.random() * pengirim.length)];
        const isAdmin = adminNumber.includes(sender.id)
        const ownerNumber = '6283142933894@c.us'
        const isOwner = ownerNumber.includes(sender.id)

        const pilotNumber = JSON.parse(fs.readFileSync('./lib/database/pilot.json'))
        const isPilot = pilot.includes(sender.id)
        
        function ERRLOG(e) {
            console.log('\x1b[1;31m~\x1b[1;37m>>', '[\x1b[1;31mERROR\x1b[1;37m]', time, color('\tname: ' + e.name + ' message: ' + e.message + ' at: ' + e.at))
        }
        function INFOLOG(info) {
            console.log('\x1b[1;34m~\x1b[1;37m>>', '[\x1b[1;33mINF\x1b[1;37m]', time, color(info))
        }


        // ANTI GRUPOS && ANTI PORNO
        if (isGroupMsg && GroupLinkDetector && isBotGroupAdmins && !isGroupAdmins && !isOwner && !isPilot){
            if (chats.match(/(https?:\/\/chat.whatsapp.com)/gi)) {
                iluser.removeParticipant(groupId, sender.id)
                console.log('Ngekik karena send link grup hehe')
                await iluser.reply(message.from, `${pushname} dikeluarkan karena mengirim link grup!`, message.id)
            }
        }

        if (isGroupMsg && isBotGroupAdmins && !isGroupAdmins && !isOwner){
            if (chats.length > 15000){
                await iluser.reply(message.from, `*LONG TEXT DETECTED*\n\nTarget mengirim pesan lebih dari 15000 huruf. Akan di wisuda dalam 2 detik!`, message.id)
                await sleep(2000)
                await iluser.removeParticipant(groupId, sender.id)
            }
        }

        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && !isOwner) {
            const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi))
}
            if (isUrl(chats)) {
                const classify = new URL(isUrl(chats))
                console.log(color('[FILTER]', 'yellow'), 'Checking link...', classify.hostname)
                isPorn(classify.hostname, async (err, status) => {
                    if (err) return console.error(err)
                    if (status) {
                        console.log(color('[FILTER]', 'red'), color('The link is classified as NSFW!', 'yellow'))
                        iluser.reply(message.from, `Link mengandung unsur pornografi!\nSekarang di wisuda dalam 2 detik!`, message.id)
                        sleep(2000)
                        iluser.removeParticipant(groupId, sender.id)
                    } else {
                        console.log(('[NEUTRAL]'), color('The link is safe!'))
                    }
                })
            }
        }
         //ANTI PORN
        if (isGroupMsg && isAntiNsfw && !isGroupAdmins && isBotGroupAdmins && !isOwner) {
            const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi))
}
            if (isUrl(chats)) {
                const classify = new URL(isUrl(chats))
                console.log(color('[FILTER]', 'yellow'), 'Checking link...', classify.hostname)
                isPorn(classify.hostname, async (err, status) => {
                    if (err) return console.error(err)
                    if (status) {
                        console.log(color('[FILTER]', 'red'), color('The link is classified as NSFW!', 'yellow'))
                        iluser.reply(message.from, `Link mengandung unsur pornografi!\nSekarang di wisuda dalam 2 detik!`, message.id)
                        sleep(2000)
                        iluser.removeParticipant(groupId, sender.id)
                    } else {
                        console.log(('[NEUTRAL]'), color('The link is safe!'))
                    }
                })
            }
        }
    
        
        if (isGroupMsg && isAntiNsfw && !isOwner && !isGroupAdmins && isBotGroupAdmins) {
            if (type === 'image') {
                const dataMediaa = await decryptMedia(message)
                const mediaType = `${dataMediaa.toString('base64')}`
                noPorn.predict(mediaType)
                .then(async(res) => {
                const { confidence } = res
                const nilaipersen = ((confidence / 1.000000) * 100).toFixed(1) + '%'
                    if (!res.sfw) {
                    iluser.reply(message.from, `*PORN DETECTOR*\n\nGambar ini mengandung unsur pornografi!\n*Keyakinan: ${nilaipersen}/100%*!\n\nTarget akan di kick dalam 2 detik!`, message.id)
                    .then(() => {
                        sleep(2000)
                        iluser.removeParticipant(groupId, sender.id)
                        console.log(color('[FILTER]', 'red'), color(`${sender.id} telah di-kick karena mengirimkan foto 18+`, 'green'))
                    })
                }
            })
          } else if (type === 'video') {
                const dataMediaa = await decryptMedia(message)
                const inPorn = './temp/video/DetectingPorn.mp4'
                const outPorn = './temp/video/outPorn.png'
                fs.writeFile(inPorn, dataMediaa, err => {
                    if (err) return console.log(err)
                        exec(`ffmpeg -ss 1 -i ${inPorn} -vframes 1 -filter:v 'yadif',scale=1280:720' ${outPorn}`, async function() {
                        fs.readFile(outPorn, { encoding: 'base64' }, async (err, base64) => {
                    if (err) return console.log(err)
                        noPorn.predict(base64)
                        .then(async(res) => {
                            const { confidence } = res
                            const nilaipersen = ((confidence / 1.000000) * 100).toFixed(1) + '%'
                            console.log(res)
                     if (!res.sfw) {
                            iluser.reply(message.from, `*PORN DETECTOR*\n\nVideo ini mengandung unsur pornografi!\n*Keyakinan: ${nilaipersen}/100%*!\n\nTarget akan di kick dalam 3 detik!`, message.id)
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

const addAfk = (userId, time, reason) => {
            let obj = {id: `${userId}`, time: `${time}`, reason: `${reason}`}
            _afk.push(obj)
            fs.writeFileSync('./lib/database/afk.json', JSON.stringify(_afk))
        }

const getAfk = (userId) => {
            let isAfk = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    isAfk = true
                }
            })
            return isAfk
        }

        const getAfkReason = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _afk[position].reason
            }
        }

        const getAfkTime = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _afk[position].time
            }
        }

        const getAfkId = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _afk[position].id
            }
        }
    

                // AFK
        if (isGroupMsg && !isBanned) {
            const checking = getAfk(sender.id)
            for (let ment of mentionedJidList) {
                if (getAfk(ment)) {
                    const getId = getAfkId(ment)
                    const getReason = getAfkReason(getId)
                    const getTime = getAfkTime(getId)
                    await iluser.sendTextWithMentions(from, `Sssttt! @${ment} sedang AFK, jangan diganggu!\n*Alasan*: ${getReason}\n*Sejak*: ${getTime}`, id)
                }
            }
            if (checking) {
                _afk.splice(sender.id, 1)
                fs.writeFileSync('./lib/database/afk.json', JSON.stringify(_afk))
                await iluser.sendTextWithMentions(from, `@${sender.id} telah kembali dari AFK`, id)
            }
        } 

        if (chats.match(/(assalamualaikum)/)) {
           iluser.reply(message.from, `Waalaikumsalam ${pushname}`, message.id)
        }


        function waktu(seconds) {
            seconds = Number(seconds);
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor(seconds % (3600 * 24) / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            var s = Math.floor(seconds % 60);
            var dDisplay = d > 0 ? d + (d == 1 ? " Hari, ":" Hari,") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " Jam, ":" Jam,") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " Menit, ":" Menit,") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " Detik, ":" Detik") : "";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        }

        const mess = {
            wait: 'Processing...',
            iklan: `\n\nSupport bot dengan cara follow dan subscribe instagram.com/il.userr & youtube.com/iluser`,
            iklann: `Support bot dengan cara follow dan subscribe instagram.com/il.userr & youtube.com/iluser`,
            nonaktif: `Fitur ini dinonaktifkan oleh admin grup`,
            noprem: `Hii ${pushname}., \nKamu bukan user premium, jadi bot tidak bisa mengirimkan filenya untukmu. Silahkan unduh manual melalui link di bawah ini.`,
            blockk: '```Kamu telah di blokir karena melanggar #rules bot.!```\n\n\nUntuk unblock silahkan hubungi developer bot.',
            bann: '```Kamu telah di banned dari pengguna bot.```',
            magernulissatu: 'Harap Tunggu, BOT Sedang Menulis Di Buku 1!',
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
                Iv: '[ ❗ ERROR ] Link yang anda kirim tidak valid!'
            }
        }

        const tutor = 'https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg'
        const errorurl = 'https://i.postimg.cc/BZhY3p8D/3819552.jpg'
        const errorurl2 = 'https://i.postimg.cc/BZhY3p8D/3819552.jpg'
        const ppdepresi = 'https://i.postimg.cc/4dZ0n8tT/fbee5949acdf18495777f89f64fa12ca.jpg'
        const logoo = 'https://i.postimg.cc/NM6T0tJ6/logo.png'
       
        const isWhite = (chatId) => adminNumber.includes(chatId) ? true : false
        const isWhiteList = (chatId) => {
            if (adminNumber.includes(sender.id)) {
                if (muted.includes(chatId)) return false
                return true
            } else {
                return false
            }
        }

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

        if (typeof Array.prototype.splice === 'undefined') {
            Array.prototype.splice = function (index, howmany, elemes) {
                howmany = typeof howmany === 'undefined' || this.length;
                var elems = Array.prototype.slice.call(arguments, 2),
                    newArr = this.slice(0, index),
                    last = this.slice(index + howmany);
                newArr = newArr.concat.apply(newArr, elems);
                newArr = newArr.concat.apply(newArr, last);
                return newArr;
            }
        }
        
        function restartAwal(iluser){
            setting.restartState = false
            isRestart = false
            iluser.sendText(setting.restartId, 'Restart Succesfull!')
            setting.restartId = 'undefined'
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null,2));
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

        // ROLE (Change to what you want, or add) and you can change the role sort based on XP.
        const levelRole = level.getLevelingLevel(sender.id, _level)
        var role = 'Copper V'
        if (levelRole >= 5) {
            role = 'Copper IV'
        } else if (levelRole >= 10) {
            role = 'Copper III'
        } else if (levelRole >= 15) {
            role = 'Copper II'
        } else if (levelRole >= 20) {
            role = 'Copper I'
        } else if (levelRole >= 25) {
            role = 'Silver V'
        } else if (levelRole >= 30) {
            role = 'Silver IV'
        } else if (levelRole >= 35) {
            role = 'Silver III'
        } else if (levelRole >= 40) {
            role = 'Silver II'
        } else if (levelRole >= 45) {
            role = 'Silver I'
        } else if (levelRole >= 50) {
            role = 'Gold V'
        } else if (levelRole >= 55) {
            role = 'Gold IV'
        } else if (levelRole >= 60) {
            role = 'Gold III'
        } else if (levelRole >= 65) {
            role = 'Gold II'
        } else if (levelRole >= 70) {
            role = 'Gold I'
        } else if (levelRole >= 75) {
            role = 'Platinum V'
        } else if (levelRole >= 80) {
            role = 'Platinum IV'
        } else if (levelRole >= 85) {
            role = 'Platinum III'
        } else if (levelRole >= 90) {
            role = 'Platinum II'
        } else if (levelRole >= 95) {
            role = 'Platinum I'
        } else if (levelRole >= 100) {
            role = 'Exterminator'
        }

        // Leveling [BETA] by Slavyan
        if (isGroupMsg && !level.isGained(sender.id) && !isBanned && !isBlocked) {
            isMuted(chatId) == false
            try {
                level.addCooldown(sender.id)
                const currentLevel = level.getLevelingLevel(sender.id, _level)
                const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15)
                const requiredXp = 5 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
                level.addLevelingXp(sender.id, amountXp, _level)
                if (requiredXp <= level.getLevelingXp(sender.id, _level)) {
                    level.addLevelingLevel(sender.id, 1, _level)
                    const userLevel = level.getLevelingLevel(sender.id, _level)
                    const fetchXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    await iluser.reply(message.from, `Kamu naik level ya beb.`, message.id)
                    console.log(color('INFO | User naik level', 'olive'))

                }
            } catch (err) {
                console.error(err)
            }
        } 

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
  await fs.writeFileSync('./image/p.exif', buffer, function(err) {
    if (err) return console.error(err);
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
      //fs.unlink('./image/' + id + '.webp').then(() => {})
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
  .inputFormat('mp4')
  .addOutputOptions("-vcodec", "libwebp", "-vf", "scale='min(150,iw)':min'(150,ih)':force_original_aspect_ratio=decrease, fps=15, pad=150:150:-1:-1:color=#00000000", '-lossless', '1', "-loop", "1", "-preset", "default", "-an", "-vsync", "0")
  .save(`./image/${id}.webp`)
  .on('end', () => {
    stream.destroy()
    spawn('webpmux', ['-set', 'exif', './image/p.exif', './image/' + id + '.webp', '-o', './image/' + id + '.webp'])
    .on('exit', () => {
      let mediaData = (fs.readFileSync('./image/' + id + '.webp', {
        encoding: 'base64'
      }))
      //fs.unlink('./image/' + id + '.webp').then(() => {})
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
    request.head(uri, function(err, res, body){
      request(uri).on('error', function(err) { console.log(err) }).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  }catch(err){
    console.log(err)
  }
}
function base64_encode(file) {
                var bitmap = fs.readFileSync(file);
                return new Buffer.from(bitmap).toString('base64');
              }



                if(body === prefix+'bot off' && isMuted(chatId) == true){
                    if(isGroupMsg) {
                        if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?', message.id)
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
                if(body === prefix+'bot on' && isMuted(chatId) == false){
                    if(isGroupMsg) {
                        if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?', message.id)
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
 
        //AUTO VIEW
       iluser.sendSeen(chatId)

      /*  // [BETA] Avoid Spam Message
        if (isCmd && isFiltered(from) && !isGroupMsg && !isOwner) {
        await iluser.reply(message.from, 'Cooldown 4 sec!', message.id)
        return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) 
        }
        if (isCmd && isFiltered(from) && isGroupMsg && !isOwner) { 
        await iluser.reply(message.from, 'Cooldown 4 sec!', message.id)
        return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) 
        } */
        //if (!isCmd && !isGroupMsg) {console.log(color('[MSG]', 'yellow'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'magenta'), color(`${command} [${args.length}]`), 'from', color(pushname))}
        if (isCmd && !isGroupMsg) {console.log(color('[EXEC]', 'yellow'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'turquoise'), color(`${command} [${args.length}]`), 'from', color(pushname))}
        if (isCmd && isGroupMsg) {console.log(color('[EXEC]', 'yellow'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'turquoise'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))}
        if (isPrf && !isGroupMsg) {
            await iluser.reply(message.from, `Hii ${pushname}, Perintah bot menggunakan awalan *.*\nSilahkan cek perintah bot yang tersedia di ${prefix}menu`, message.id)
        }
        if (isBlocked && isCmd) return iluser.reply(message.from, mess.blockk, message.id)
        //if (isBanned && isCmd) return iluser.reply(message.from, mess.bann, message.id)
        if (isBanned && isCmd && !isGroupMsg) {console.log(color('[BANNED]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))}
        if (isBanned && isCmd && isGroupMsg) {console.log(color('[BANNED]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))}

//body === ' ' && 
   /*     if(!isMedia && !isCmd && !isPrf ){
            //if(args.length >= 2){
            argz = body.split(' ')
            //const sr = arg[1]
            respon.push(argz, 1)
            fs.writeFileSync('./respon.json', JSON.stringify(respon))
            console.log('text added to database')
            }
      /*  if (chats.match(`${namfil}`)) {
           await iluser.sendPtt(message.from, `./media/audio/${namfil}.mp3`, message.id)
        }*/

  /*          if (!isCmd && !isGroupMsg && !isPrf && isPremium) {
            axios.get(`https://lunabot.tech/?query=${encodeURIComponent(message.body)}&lang=id`)
.then(({data}) => {               
                iluser.reply(message.from, `${data.response}`, message.id)
                console.log(color('SUCCESS | conversation','olive'))
               // sleep(2000).then(() => iluser.deleteChat(sender.id))
            })//.then(() => iluser.deleteChat(sender.id))
} 

            if (!isCmd && !isGroupMsg && !isPrf && !isPremium) {
            axios.get(`https://lunabot.tech/?query=${encodeURIComponent(message.body)}&lang=id`)
.then(({data}) => {               
                iluser.reply(message.from, `${data.response}`, message.id)
                console.log(color('SUCCESS | conversation','olive'))
               // sleep(2000).then(() => iluser.deleteChat(sender.id))
            })//.then(() => iluser.deleteChat(sender.id))
} 

       /*     if (isCmd && !isGroupMsg && !isOwner) {
                sleep(1800000).then(() => iluser.deleteChat(sender.id))
                console.log(color('Autodelete message success from '+sender.id, 'olive'))
            } 
            if (!isCmd && !isGroupMsg && !isOwner) {
                sleep(1800000).then(() => iluser.deleteChat(sender.id))
                console.log(color('Autodelete message success from '+sender.id, 'olive'))
            } 

 /*           if (!isCmd && isPremium  && isGroupMsg && quotedMsgObj.fromMe) {
            axios.get(`http://simsumi.herokuapp.com/api?text=${encodeURIComponent(message.body)}&lang=id`)
.then(({data}) => {               
                iluser.reply(message.from, `${data.success}`, message.id)
                console.log(data)
            })
} 

           /* if (!isCmd && !isPremium  && isGroupMsg && quotedMsgObj.fromMe) {
            axios.get(`http://simsumi.herokuapp.com/api?text=${encodeURIComponent(message.body)}&lang=id`)
.then(({data}) => {               
                iluser.reply(message.from, `*Simi:* ${data.success}\n\n\nFollow me on instagram.com/iluser.bot`, message.id)
                console.log(data)
            })
} */

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
        //autosticker
        if (isGroupMsg && isautosticker && isMedia && isImage ) {
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                        .then(async (res) => {
                            sharp(res)
                                .resize(512, 512, {
                                    fit: 'contain',
                                    background: {
                                        r: 0,
                                        g: 0,
                                        b: 0,
                                        alpha: 0
                                    }
                                })
                                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await iluser.sendRawWebpAsSticker(message.from, base64)
                                        console.log(color('SUCCESS | autosticker', 'olive'))
                                        //iluser.reply(message.from, `${mess.iklann}`, message.id)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                    }
                                })
                        })
                    }
        

         // ANTI SPAM
        //addFilter(from)

        // Automate
        premium.expiredCheck(_premium)

        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner ) {
        switch(command) {

            //EDUCATION MENU
        case prefix+'brain':
        try{
          const disable = await getDB.cek_disable(message.from, `${prefix}brainly`);
          if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            else{
            let query = body.slice(7);
            axios.get('http://smkn3jogja.sch.id/wp-content/themes/twentyfifteen/brain.php?query='+query).then(async res => {
          const data = res.data.data.questionSearch.edges;
          SoalNo = 1
          for (let i = 0; i < 3; i++) {
            const soal = data[i].node.content
            const jawab = data[i].node.answers.nodes[0].content
            const br = jawab.split('<br />').join('\n');
            const p = br.split('<p>').join('');
            const strong1 = p.split('<strong>').join('*');
            const strong2 = strong1.split('</strong>').join('*');
            const p2 = strong2.split('</p>').join('');
            const span = p2.split('<span>').join('\n');
            const jawab_done = span.split('</span>').join('');
            const soal_done = soal.split('<br />').join('\n');
            const soalan = soal_done.replace(/(<([^>]+)>)/ig,"");
            const jawaban = jawab_done.replace(/(<([^>]+)>)/ig,"");
            if (data[i].node.attachments[0] == undefined) {
              if (data[i].node.answers.nodes[0].attachments[0] == undefined) {
                iluser.reply(message.from, `*${SoalNo}.* ${soalan}\n\nJawaban :\n\n${jawaban} ${mess.iklan}`, message.id);
              }else{
                const lamp = data[i].node.answers.nodes[0].attachments[0].url;
                iluser.reply(message.from, `*${SoalNo}.* ${soalan}\n\nJawaban :\n\n${jawaban}\n*Gambar Terlampir* : ${lamp} ${mess.iklan}`, message.id);
              }
            }else{
              const gambar = data[i].node.attachments[0].url;
              if (data[i].node.answers.nodes[0].attachments[0] == undefined) {
                let rnd = randomName(30)+'.jpg';
                await download(gambar, './brainly/'+rnd, function(){
                  const a = base64_encode('./brainly/' + rnd);
                  var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                  iluser.sendImage(message.from,base64str,rnd,`*${SoalNo}.* ${soalan}\n\nJawaban :\n\n${jawaban} ${mess.iklan}`, message.id);
                });
              }else{
                const lamp = data[i].node.answers.nodes[0].attachments[0].url;
                let rndi = randomName(30)+'.jpg';
                await download(gambar, './brainly/'+rndi, function(){
                  const a = base64_encode('./brainly/' + rndi);
                  var base64str = 'data:image/jpeg'+";base64,"+a.toString()
                  iluser.sendImage(message.from,base64str,rndi,`*${SoalNo}.* ${soalan}\n\nJawaban :\n\n${jawaban}\n*Gambar Terlampir* : ${lamp} ${mess.iklan}`, message.id);
                });
              }
            }
            SoalNo ++
          }
        })
        console.log(color('SUCCESS | brainly', 'olive'))
        }
        }catch(err){
            console.log(color('FAILED | brainly', 'red'))
            iluser.sendText(ownerNumber, `Error brainly:\n${err}`)
            iluser.reply(message.from, 'Error', message.id)
        }
        break
        case prefix+'brainly':{ 
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            await limitAdd(serial)     
                const disable = await getDB.cek_disable(message.from, `${prefix}brainly`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
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
                        console.log(color('SUCCESS | brainly', 'olive'))
                    }
                }
            }
            break;  
        case prefix+'write':
        case prefix+'nulis':{
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            const disable = await getDB.cek_disable(message.from, `${prefix}nulis`);
            try {
                if (disable != 0) {
                  iluser.reply(message.from, `Fitur ini dinonaktifkan oleh admin grup`, message.id);
                  console.log(`${prefix}nulis DISABLE`);
              }else{
                if(!args.lenght >= 2) return
                let nulos= body.slice(7)
                await limitAdd(serial)
                await iluser.sendFileFromUrl(message.from, `https://api.vhtear.com/write?text=${encodeURIComponent(nulos)}&apikey=${vhtearkey}`, 'nulis.jpg', `${mess.iklann}`, message.id)
                    .then(() => console.log(color('SUCCESS | nulis', 'olive')))
                    .catch(async (err) => {
                        console.log(color('FAILED | nulis', 'red'))
                        iluser.sendText(ownerNumber, `Error nulis:\n${err}`)
                        iluser.reply(message.from, 'Error', message.id)
                    })
                }
            } catch (err) {
                console.log(color('FAILED | nulis', 'red'))
                }
            }
            break
        case prefix+'nulis2': {
                const disable = await getDB.cek_disable(message.from, `${prefix}nulis2`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            await limitAdd(serial)
            if(args.length == 1) return await iluser.reply(message.from, "Kata katanya mana tlol.", message.id)
            const getNulis = await gasNulis(body.slice(7)) 
            if(getNulis.status == true)
            {
                await iluser.sendImage(message.from, getNulis.base64, 'file.jpg', `${mess.iklan}`, message.id)
                console.log(color('SUCCESS | nulis2', 'olive'))
            }else{
                await iluser.reply(message.from, getNulis.reason, `gagal nulis.`)
                console.log(color('FAILED | nulis2', 'red'))
            }
        }
        break
        case prefix+'nulis3':{
                const disable = await getDB.cek_disable(message.from, `${prefix}nulis3`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            await limitAdd(serial)
        try{
            if(args.length == 1) return await iluser.reply(message.from, "Kata katanya mna tlol.", message.id)
            const getNulis2 = await gasNulisFolio(body.slice(8))
            if(getNulis2.status == true)
            {
                await iluser.sendImage(message.from, getNulis2.base64, 'file.jpg', `${mess.iklan}`, message.id)
                console.log(color('SUCCESS | nulis3', 'olive'))
            }else{
                await iluser.reply(message.from, getNulis2.reason, `gagal nulis.`, message.id)
                console.log(color('FAILED | nulis3', 'red'))
            }
        }catch (error) {
                console.log(color('FAILED | nulis3', 'red'))
                iluser.sendText(ownerNumber, `Error nulis3:\n${error}`)
        }
    }
        break
        case prefix+'wiki':{
                const disable = await getDB.cek_disable(message.from, `${prefix}wiki`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            await limitAdd(serial)
        try{
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}wiki asu*`, message.id)
            const queryz_ = body.slice(6)
            const wiki = await axios.get(`https://api.vhtear.com/wikipedia?query=${queryz_}&apikey=${vhtearkey}`)
            if (wiki.data.error) {
                iluser.reply(message.from, wiki.data.error, message.id)
            } else {
                iluser.reply(message.from, `*WIKI*\n\n• *Query* : ${queryz_}\n\n• *Result* : ${wiki.data.result.Info}`, message.id)
                console.log(color('SUCCESS | wiki', 'olive'))
            }
        }catch (err) {
                console.log(color('FAILED | wiki', 'red'))
                iluser.sendText(ownerNumber, `Error wiki:\n${error}`)}
            }
            break 
        case prefix+'kbbi':{
                const disable = await getDB.cek_disable(message.from, `${prefix}kbbi`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            await limitAdd(serial)
        try{
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}kbbi asu*`, message.id)
            const kbbl = body.slice(6)
            const kbbl2 = await axios.get(`https://api.vhtear.com/kbbi?query=${kbbl}&apikey=${vhtearkey}`)

            if (kbbl2.data.error) {
                iluser.reply(message.from, kbbl2.data.error, message.id)
            } else {
                iluser.sendText(message.from, `*KBBI*\n\n• *Query* : ${kbbl}\n\n• *Result* : ${kbbl2.data.result.hasil} ${mess.iklan}`, message.id)
                console.log(color('SUCCESS | kbbi', 'olive'))
            }
        }catch (err) {
                console.log(color('FAILED | kbbi', 'red'))}
            }
            break
        case prefix+'tr':{
            const disable = await getDB.cek_disable(message.from, `${prefix}translate`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id) 
            if (!quotedMsg){
            if(args[1] == undefined || args[2] == undefined) return
            if(args.length >= 2){
                var codelang = args[1]
                var texta = body.slice(4+codelang.length);
                translatte(texta, {to: codelang}).then(res => {
                    iluser.reply(message.from,res.text, message.id);
                }).catch(err => {
                     iluser.sendText(message.from,`[ERROR] Teks tidak ada, atau kode bahasa ${codelang} tidak support\n~> *${prefix}bahasa* untuk melihat list kode bahasa`);
                });
            }
            }else{
            const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
            translate(quoteText, args[1])
                .then((result) => iluser.reply(message.from, result, message.id))
                .catch(() => iluser.sendText(message.from, 'Error!'))
                console.log(color('FAILED | kbbi', 'red'))
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
                }).catch(err => {
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
                await limitAdd(serial)
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
                }).catch(function (error) {
                iluser.sendText(ownerNumber, `Error Google search:\n${err}`)
                iluser.reply(message.from, 'Error!', message.id)
                console.log(color('FAILED | Google search', 'red'))
                })
            };
            break
        case prefix+'google':{
                const disable = await getDB.cek_disable(message.from, `${prefix}google`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const googleQuery = body.slice(8)
            if(googleQuery == undefined || googleQuery == ' ') return iluser.reply(message.from, `*Hasil Pencarian : ${googleQuery}* tidak ditemukan`, message.id)
            google({ 'query': googleQuery }).then(results => {
            let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
            for (let i = 0; i < results.length; i++) {
                vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link} ${mess.iklan}\n\n`
            }
                iluser.reply(message.from, vars, message.id);
            }).catch(e => {
                console.log(e)
                iluser.sendText(ownerNumber, 'Google Error : ' + e);
            })
        }
            break
        case prefix+'totext':{
                const disable = await getDB.cek_disable(message.from, `${prefix}totext`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isMedia && type === 'image') {
            try{
              await worker.load();
              await worker.loadLanguage('eng');
              await worker.initialize('eng');
              const mediaData = await decryptMedia(message, uaOverride);
              const { data: { text } } = await worker.recognize(`data:${message.mimetype};base64,${mediaData.toString('base64')}`);
              iluser.reply(message.from, `${text} ${mess.iklan}`, message.id);
              // await worker.terminate();
              console.log(color('SUCCESS | totext', 'olive'))
            }catch(err){
              iluser.sendText(ownerNumber, `Error totext:\n${err}`)
              iluser.reply(message.from, `Kesalahan yang tidak diketahui, hubungi admin`, message.id)
              console.log(color('FAILED | totext', 'red'))
            }
            }else if (quotedMsg && quotedMsg.type == 'image') {
            try{
              await worker.load();
              await worker.loadLanguage('eng');
              await worker.initialize('eng');
              const mediaData = await decryptMedia(quotedMsg, uaOverride);
              const { data: { text } } = await worker.recognize(`data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`);
              iluser.reply(message.from, `${text} ${mess.iklan}`, message.id);
              // await worker.terminate();
              console.log(`SUCCESS | sending totext`)
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
            await limitAdd(serial)
            try {
                if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`, message.id)
                const mtk = body.slice(7)
                if (typeof Math_js.evaluate(mtk) !== "number") {
                iluser.reply(message.from, `"${mtk}", bukan angka!\nContoh: ${prefix}math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`, message.id)
            } else {
                iluser.reply(message.from, `*Kalkulator*\n\n${mtk} = ${Math_js.evaluate(mtk)}`, message.id)
                console.log('SUCCESS | hitung')
            }
            } catch (err) {
                iluser.reply(message.from, `Error!\nUndefined symbol`, message.id)
            }
        }
        break

        //SEARCH MENU
        case prefix+'playstore':{
                const disable = await getDB.cek_disable(message.from, `${prefix}playstore`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}playstore Mobile Legends*`)
            const keywotp = body.slice(11)
            try {
                const dataplai = await axios.get(`https://api.vhtear.com/playstore?query=${keywotp}&apikey=${vhtearkey}`)
                const dataplay = dataplai.data
                 let keluarplay = `*PLAYSTORE SEARCH*\n\nHasil Pencarian : ${keywotp}\n`
                for (let i = 0; i < dataplay.result.length; i++) {
                    keluarplay += `\n─────────────────\n\n• *Nama* : ${dataplay.result[i].title}\n• *Developer* : ${dataplay.result[i].developer}\n• *Deskripsi* : ${dataplay.result[i].description}\n• *Paket ID* : ${dataplay.result[i].app_id}\n• *Harga* : ${dataplay.result[i].price}\n• *Link App* : https://play.google.com${dataplay.result[i].url}\n\n${mess.iklann}`
                }
                await iluser.sendFileFromUrl(message.from, dataplay.result[0].icon, `iconapk.webp`, keluarplay, message.id)
            } catch (err){
            console.log(color('FAILED | Playstore search', 'red'))
            iluser.sendText(ownerNumber, `Playstore search:\n${err}`)
            iluser.reply(message.from, 'Error', message.id)
        }
        }
            break
        case prefix+'apkpure':{
                const disable = await getDB.cek_disable(message.from, `${prefix}apkpure`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (args.length === 1) return iluser.reply(message.from, `Mau aplikasi apa tod?`, message.id)
            const keywotpx = body.slice(8)
            try {
                const dataplaix = await axios.get(`https://api.zeks.xyz/api/apkpure?q==${keywotpx}&apikey=apivinz`)
                const dataplayx = dataplaix.data
                 let keluarplayx = `\n*APK PURE SEARCH*\n\nHasil Pencarian : ${keywotpx}\n`
                for (let i = 0; i < dataplayx.result.length; i++) {
                    keluarplayx += `\n─────────────────\n\n• *Nama* : ${dataplayx.result[i].title}\n• *url* : ${dataplayx.result[i].url}\n• *rating* : ${dataplayx.result[i].rating}\n${mess.iklann}\n`
                }
                await iluser.sendFileFromUrl(message.from, dataplayx.result[0].thumbnail, `thumbnailapk.webp`, keluarplayx, message.id)
            } catch (err){
            console.log(color('FAILED | Apkpure search', 'red'))
            iluser.sendText(ownerNumber, `Error Apkpure search:\n${err}`)
            iluser.reply(message.from, 'Error', message.id)
            }
        }
            break
        case prefix+'shopee':{
                const disable = await getDB.cek_disable(message.from, `${prefix}shopee`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: *${prefix}shopee HP Samsul a20*`)
            const shopek = body.slice(8)
            try {
                const dataplai = await axios.get(`https://api.vhtear.com/shopee?query=${shopek}&count=5&apikey=${vhtearkey}`)
                const dataplay = dataplai.data.result
                 let shopeq = `*SHOPEE SEARCH*\n\nHasil Pencarian : ${shopek}\n`
                for (let i = 0; i < dataplay.items.length; i++) {
                    shopeq += `\n─────────────────\n\n• *Nama* : ${dataplay.items[i].nama}\n• Harga* : ${dataplay.items[i].harga}\n• *Terjual* : ${dataplay.items[i].terjual}\n• *Lokasi Toko* : ${dataplay.items[i].shop_location}\n• *Deskripsi* : ${dataplay.items[i].description}\n• *Link Product : ${dataplay.items[i].link_product}*\n\n${mess.iklann}`
                }
                await iluser.sendFileFromUrl(message.from, dataplay.items[0].image_cover, `shopee.jpg`, shopeq, message.id)
            } catch (err){
                console.log(color('FAILED | shopee', 'red'))
                await iluser.reply(message.from, 'Error!', message.id)
                iluser.sendText(ownerNumber, 'Shopee Error:\n' + err)
            }
        }
            break
        case prefix+'newstickerline':{
                const disable = await getDB.cek_disable(message.from, `${prefix}newstickerline`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            try {
                const stcline = await fetch(`https://api.vhtear.com/newsticker?apikey=${vhtearkey}`)
                if (!stcline.ok) throw new Error(`unexpected response ${stcline.statusText}`)
                const stcline2 = await stcline.json()
                const { hasil } = await stcline2.result
                let xixixi = `*NEW STICKER LINE*\n\n`
                for (let i = 0; i < hasil.length; i++) {
                    xixixi += `\n─────────────────\n\n*Title* : ${hasil[i].title}\n*Url* : ${hasil[i].uri}\n\n${mess.iklann}`
                }
                await iluser.sendFileFromUrl(message.from, 'https://play-lh.googleusercontent.com/BkvRJsjYiEjb0-XKuop2AurqFKLhhu_iIP06TrCTGAq180P9Briv8Avz8ncLp7bOmCs', 'newstc.jpg', xixixi, message.id)
            } catch (err) {
                    console.log(color('FAILED | newstickerline', 'red'))
                    await iluser.reply(message.from, 'Error!', message.id)
                    iluser.sendText(ownerNumber, 'newstickerline Error:\n' + err)
            }
        }
            break
        case prefix+'ytsearch':{
                const disable = await getDB.cek_disable(message.from, `${prefix}ytsearch`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : #ytsearch alan walker alone`)
            const ytsher = body.slice(10)
            try {
                const response2 = await fetch(`https://api.vhtear.com/youtube?query=${encodeURIComponent(ytsher)}&apikey=${vhtearkey}`)
                if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
                const jsonserc = await response2.json()
                const { result } = await jsonserc
                let xixixi = `*YOUTUBE SEARCH*\n\n*Hasil Pencarian : ${ytsher}*\n`
                for (let i = 0; i < result.length; i++) {
                    xixixi += `\n─────────────────\n\n• *Judul* : ${result[i].title}\n• *Ditonton* : ${result[i].views}\n• *Durasi* : ${result[i].duration}\n• *Channel* : ${result[i].channel}\n• *URL* : ${result[i].urlyt}\n`
                }
                await iluser.sendFileFromUrl(message.from, result[0].image, 'thumbserc.jpg', xixixi, message.id)
            } catch (err) {
                    await iluser.reply(message.from, 'Error!', message.id)
                    iluser.sendText(ownerNumber, 'YT Search Error : ' + err)
                    console.log(color('FAILED | YouTube search', 'red'))
            }
        }
            break
        case prefix+'spek':{
                const disable = await getDB.cek_disable(message.from, `${prefix}spek`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return
                await limitAdd(serial)  
                const hpnya = body.slice(6)
                try {
                    const resp = await axios.get(`https://api.vhtear.com/gsmarena?query=${hpnya}&apikey=${vhtearkey}`)
                    if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
                    const kbbuaww = `• ${resp.data.result.spec}`
                    iluser.sendFileFromUrl(message.from, resp.data.result.image, 'gsm.jpg', `Spesifikasi dari ${hpnya}\n\n${kbbuaww}`, message.id)
                } catch (err) {
                    console.log(color('FAILED | spek search', 'red'))
                    await iluser.reply(message.from, 'Error!', message.id)
                    iluser.sendText(ownerNumber, 'Spek sea] Error : ' + err)
                }
            }
                break
        case prefix+'motor':{
                const disable = await getDB.cek_disable(message.from, `${prefix}motor`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                        
                if (isLimit(serial)) return
            
                await limitAdd(serial)
                const mtr = body.slice(7)
                try {
                    const resp = await axios.get(`https://api.vhtear.com/infomotor?merk=${mtr}&apikey=${vhtearkey}`)
                    if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
                    const kbbuaww = `• *Title* : ${resp.data.result.title}\n• *Harga* : ${resp.data.result.harga}\n• *Spesifikasi* : ${resp.data.result.spesifikasi}\n• *Kelebihan* : ${resp.data.result.kelebihan}\n• *Kekurangan* : ${resp.data.result.kekurangan}`
                    iluser.sendFileFromUrl(message.from, resp.data.result.image, 'gsm.jpg', `${kbbuaww} ${mess.iklan}`, message.id)
                } catch (err) {
                    console.log(color('FAILED | motor search', 'red'))
                    await iluser.reply(message.from, 'Error!', message.id)
                    iluser.sendText(ownerNumber, 'Motor search Error : ' + err)
                }
            }
                break
        case prefix+'mobil':{
                const disable = await getDB.cek_disable(message.from, `${prefix}mobil`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return
                await limitAdd(serial)
                const mbl = body.slice(7)
                try {
                    const resp = await axios.get(`https://api.vhtear.com/infomobil?merk=${mbl}&apikey=${vhtearkey}`)
                    if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
                    const kbbuaww = `• *Title* : ${resp.data.result.title}\n• *Harga* : ${resp.data.result.harga}\n• *Spesifikasi* : ${resp.data.result.spesifikasi}\n• *Kelebihan* : ${resp.data.result.kelebihan}\n• *Kekurangan* : ${resp.data.result.kekurangan}`
                    iluser.sendFileFromUrl(message.from, resp.data.result.image, 'gsm.jpg', `${kbbuaww} ${mess.iklan}`, message.id)
                } catch (err) {
                    console.log(color('FAILED | mobil info', 'red'))
                    await iluser.reply(message.from, 'Error!', message.id)
                    iluser.sendText(ownerNumber, 'Mobil info Error : ' + err)
                }
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
                await limitAdd(serial)
            } else {
                const res = await axios.get(`https://api.github.com/users/${input}`)
                const { login, name, html_url, bio, followers, location } = res.data
                let text = `Name/Alias: ${login}\/${name}\nBio: ${bio}\nFollowers: ${followers}\nLocation: ${location}\nLink: ${html_url}`
                await iluser.reply(message.from, `${text} ${mess.iklan}`, message.id)
                console.log(color('SUCCESS | github info', 'olive'))
                await limitAdd(serial)
            }
            }
            break
        case prefix+'alamat':{
                const disable = await getDB.cek_disable(message.from, `${prefix}alamat`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: *${prefix}alamat kopang*`, message.id)
            try {
            const respe = await axios.get('https://api.vhtear.com/infoalamat?query=' + body.slice(8) + '&apikey=' + vhtearkey)
            if (respe.data.error) return iluser.reply(message.from, respe.data.error, message.id)
            const anm2 = `• Data :\n ${respe.data.result.data} • Deskripsi :\n ${respe.data.result.deskripsi} `
            iluser.reply(message.from, `${anm2} ${mess.iklan}`, message.id)
            } catch (err) {
                console.log(color('FAILED | alamat', 'red'))
                await iluser.reply(message.from, 'Error!', message.id)
                iluser.sendText(ownerNumber, 'Alamat : ' + err)
           }
       }
            break
        case prefix+'jarak':{
                const disable = await getDB.cek_disable(message.from, `${prefix}jarak`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return
                await limitAdd(serial)
                const jara = body.slice(7)
                    const jar = jara.split('|')[0]
                    const rak = jara.split('|')[1]
                try {
                    const resp = await axios.get(`https://api.vhtear.com/distance?from=${jar}&to=${rak}&apikey=${vhtearkey}`)
                    if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
                    const kbbuaw = `• ${resp.data.result.data}`
                    iluser.reply(message.from, kbbuaw, message.id)
                } catch (err) {
                    console.log(color('FAILED | jarak', 'red'))
                    await iluser.reply(message.from, 'Error!', message.id)
                    iluser.sendText(ownerNumber, 'Jarak Error : ' + err)
                }
            }
                break
        case prefix+'resepmasakan':
        case prefix+'resep':{
                const disable = await getDB.cek_disable(message.from, `${prefix}resep`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            if (args.length === 1)  return iluser.reply(message.from, `Contoh *${prefix}resepmasakan rawon*`, message.id)
            argz = body.trim().split(' ')
            try {
            const resp = await axios.get('https://api.vhtear.com/resepmasakan?query='+rmk+'&apikey='+vhtearkey)
            const { bahan, cara, image, title  } = resp.data.result
            const rmk3 = `*Resep Ditemukan!*
• *Judul:* ${title}
• *Bahan:* ${bahan}
• *Cara:* ${cara}`
            const pictk = await bent("buffer")(image)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.reply(message.from, `${rmk3} ${mess.iklan}`, message.id)
            console.log(color('SUCCESS | resep', 'olive'))
            } catch (err) {
             await iluser.reply(message.from, 'Error!', message.id)
             console.log(color('FAILED | resep', 'red'))
             iluser.sendText(ownerNumber, 'Resepmasakan Error : ' + err)
           }
       }
           break
        case prefix+'checkip':{
                const disable = await getDB.cek_disable(message.from, `${prefix}checkip`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}checkip 182.0.144.145`, message.id)
            argz = body.trim().split(' ')
            console.log(...argz[0])
            var slicedArgs = Array.prototype.slice.call(arg, 0);
            console.log(slicedArgs)
            const cekip = await slicedArgs.join(' ')
            console.log(cekip)
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

            const pictk = await bent("buffer")(location.country_flag)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, location.country_flag, `${city}`, cekip3)
            console.log('SUCCESS | checkip')
            await limitAdd(serial)
            } catch (err) {
             console.log('FAILED | checkip')
             await iluser.reply(message.from, 'Error!', message.id)
             iluser.sendText(ownerNumber, 'Error Check IP: '+ err)
           }
       }
          break
        case prefix+'checkip2':{
                const disable = await getDB.cek_disable(message.from, `${prefix}checkip2`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
                            if (args.length == 1) return iluser.reply(message.from, `Contoh : ${prefix}iplocation 180.242.215.107`, message.id)
                            axios.get(`https://ipapi.co/${body.slice(10)}/json/`)
                            .then(async(res) => {
                                const addr = `• *Ip :* ${res.data.ip}\n• *Ip Version :* ${res.data.version}\n• *Negara :* ${res.data.country_name}\n• *Kode Negara :* ${res.data.country_code}\n• *Ibu Kota :* ${res.data.country_capital}\n• *Wilayah :* ${res.data.region}\n• *Kode Wilayah :* ${res.data.region_code}\n• *Postal :* ${res.data.postal}\n• *Latitude :* ${res.data.latitude}\n• *Longitude :* ${res.data.longitude}\n• *Timezone :* ${res.data.timezone}\n• *Utc Offset :* ${res.data.utc_offset}\n• *Kode Panggilan Negara :* ${res.data.country_calling_code}\n• *Mata Uang :* ${res.data.currency_name}\n• *Kode Mata Uang :* ${res.data.currency}\n• *Bahasa :* ${res.data.languages}\n• *Jumlah Wilayah :* ${res.data.country_area}\n• *Populasi Negara :* ${res.data.country_population}\n• *ASN :* ${res.data.asn}\n• *Provider :* ${res.data.org}`
                                iluser.reply(message.from, addr, message.id)
                            })
                        }
                        break

        //INFORMATION MENU
        case prefix+'heroml':{
                const disable = await getDB.cek_disable(message.from, `${prefix}heroml`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *${prefix}heroml [nama hero]*\nContoh : *${prefix}heroml akai*`, message.id)
            try {
            const resp = await axios.get('https://api.vhtear.com/herodetail?query=' + body.slice(8) + '&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const anm2 = `• Title : ${resp.data.result.title}\n• Quotes : ${resp.data.result.quotes}\n• Info : ${resp.data.result.info}\n• Atribut : ${resp.data.result.attributes}`
            iluser.sendFileFromUrl(message.from, resp.data.result.pictHero, 'hero.jpg', `${anm2} ${mess.iklan}`, message.id).catch(err=> {
                    console.log("Error");
                })
            } catch (err) {
                console.log(color('FAILED | hero mobile legends', 'red'))
                await iluser.reply(message.from, 'Error!', message.id)
                iluser.sendText(ownerNumber, 'Heroml Error : ' + err)
           }
       }
            break
        case prefix+'jadwalbola':{
                const disable = await getDB.cek_disable(message.from, `${prefix}jadwalbola`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            try {
                const jdbola = await fetch(`https://api.vhtear.com/jadwalbola&apikey=${vhtearkey}`)
                if (!jdbola.ok) throw new Error(`unexpected response ${jdbola.statusText}`)
                const jdbola2 = await jdbola.json()
                const { data } = await jdbola2.result
                let xixixi = `*JADWAL BOLA*\n\n`
                for (let i = 0; i < data.length; i++) {
                    xixixi += `\n─────────────────\n\n*Kick-Off* : ${data[i].kickoff}\n*Pertandingan* : ${data[i].pertandingan}\n*Stasiun TV* : ${data[i].stasiuntv}\n\n${mess.iklann}`
                }
                await iluser.sendText(message.from, xixixi, message.id)
            } catch (err) {
                    await iluser.reply(message.from, 'Error!', message.id)
                    iluser.sendText(ownerNumber, 'Jadwal Bola Error : ' + err)
                    console.log(color('FAILED | jadwalbola', 'red'))
            }
        }
            break
        case prefix+'waktu':{
                const disable = await getDB.cek_disable(message.from, `${prefix}waktu`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return   
            await iluser.reply(message.from, `Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT ${mess.iklan}`, message.id)
            console.log('SUCCESS | waktu')
        }
            break
        case prefix+'news':{
                const disable = await getDB.cek_disable(message.from, `${prefix}news`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            try {
                const response2 = await fetch(`https://api.vhtear.com/beritaterbaru&apikey=${vhtearkey}`)
                if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
                const jsonber = await response2.json()
                const { data } = await jsonber.result
                let xixixi = `*BERITA TERKINI*\n\n`
                for (let i = 0; i < data.length; i++) {
                    xixixi += `\n─────────────────\n\n*Source* : ${data[i].url}\n*Penulis* : ${data[i].author}\n*Judul* : ${data[i].title}\n*Deskripsi* : ${data[i].description}\n*Dipublikasi* : ${data[i].publishedAt}\n*Konten* : ${data[i].content}\n\n${mess.iklann}`
                }
                await iluser.sendFileFromUrl(message.from, data[0].urlToImage, 'thumbserc.jpg', xixixi, message.id)
            } catch (err) {
                    console.log(color('FAILED | news', 'red'))
                    await iluser.reply(message.from, 'Error!', message.id)
                    iluser.sendText(ownerNumber, 'Berita Error : ' + err)
            }
        }
            break
        case prefix+'covidindo':
        case prefix+'corona':{
            const disable = await getDB.cek_disable(message.from, `${prefix}covidindo`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
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
}
            break
        case prefix+'covid':{
                const disable = await getDB.cek_disable(message.from, `${prefix}covid`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const country = await slicedArgs.join(' ')
            console.log(country)
            const response2 = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + country + '/')
            const { cases, todayCases, deaths, todayDeaths, active } = response2.data
                await iluser.reply(message.from, 
`🌎️ Covid-19 Country ${country} 🌍️

✨️ Total Cases: *${cases}*
📆️ Today\'s Cases: *${todayCases}*
☣️ Total Deaths: *${deaths}*
☢️ Today\'s Deaths: *${todayDeaths}*
⛩️ Active Cases: *${active}* ${mess.iklan} ${mess.iklan}`, message.id)
            }
            break
        case prefix+'infonomor':{
                const disable = await getDB.cek_disable(message.from, `${prefix}infonomor`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return         
                if (isLimit(serial)) return
                await limitAdd(serial)
            if (args.length == 1) return iluser.reply(message.from, 'Nomornya mana??', message.id)
            const nomro = body.slice(11)
            const nomronya = await fetch(`http://docs-jojo.herokuapp.com/api/infonomor?no=${nomro}`)
            const nmro = await nomronya.json()
            iluser.reply(message.from, `• *Nomor* : ${nmro.nomor} \n• *Internasional* : ${nmro.international} \n• *Operator* : ${nmro.op}`, message.id)
        }
            break
        case prefix+'resi':{
                const disable = await getDB.cek_disable(message.from, `${prefix}resi`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
            const kurirs = ['jne', 'pos', 'tiki', 'wahana', 'jnt', 'rpx', 'sap', 'sicepat', 'pcp', 'jet', 'dse', 'first', 'ninja', 'lion', 'idl', 'rex']
            if (!kurirs.includes(args[1])) return iluser.reply(message.from, `Maaf, jenis ekspedisi pengiriman tidak didukung layanan ini hanya mendukung ekspedisi pengiriman ${kurirs.join(', ')} Tolong periksa kembali.`, message.id)
            console.log('Memeriksa No Resi', args[1], 'dengan ekspedisi', args[1])
            cekResi(args[1], args[2])
            .then(result => { 
                iluser.reply(message.from, result, message.id)
                console.log('SUCCESS | resi')   
                }).catch(async (err) => {
                        await iluser.sendText(ownerNumber, `Error resi: ${err}`)
                        await iluser.reply(message.from, 'Error!', message.id)
                        console.log(color('FAILED | resi', 'red'))
                    })
            }
                    break
        case prefix+'kurs':{
                const disable = await getDB.cek_disable(message.from, `${prefix}kurs`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
                        if (args.length == 1) return iluser.reply(message.from, `Untuk mengkonversi uang dari negara luar menjadi IDR\nContoh : ${prefix}kurs usd|2000\n\nDan untuk mengecek mata uang bisa gunakan ${prefix}matauang`, message.id)
                        const duit1 = arg.split('|')[0]
                        const duit2 = arg.split('|')[1]
                        await axios.get('https://api.terhambar.com/currency?curr='+duit1+'&bal='+duit2).then(res => {
                            const duitnya = `Konversi mata uang ${res.data.result.currency} dari ${duit2}\n\nBalance Currency : *${res.data.result.balanceCurrency}*\n\nHasil Dirupiahkan : *${res.data.result.resultConvert}*`
                            iluser.reply(message.from, duitnya, message.id)
                        })
                    }
                        break
        case prefix+'matauang':
                            const matung = `List Currency : btc, usd, eur, gbp, aud, cad, chf, cny, jpy, sgd, nzd, pkr, hkd, krw, mxn, nok, egp, clp, ngn, brl, rub, uah, thb, pln, inr, eth, xmr, dash, doge, ltc, str, xrp`
                            iluser.reply(message.from, matung, message.id)
                            break
        case prefix+'ceklokasi':{
                const disable = await getDB.cek_disable(message.from, `${prefix}ceklokasi`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            await limitAdd(serial)
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
        }
            break  

        //RELIGI MENU 
        case prefix+'jadwalshalat':
        case prefix+'jadwalsholat':{
                const disable = await getDB.cek_disable(message.from, `${prefix}jadwalshalat`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}jadwalShalat Tangerang*`, message.id)
            const daerah = body.slice(14)
            const jadwalShalat = await axios.get(`https://api.vhtear.com/jadwalsholat?query=${daerah}&apiKey=${vhtearkey}`)
            if (jadwalShalat.data.error) return iluser.reply(message.from, jadwalShalat.data.error, message.id)
            const { Shubuh, Zduhur, Ashr, Magrib, Isya, kota } = await jadwalShalat.data
            arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
            tgl = new Date().getDate()
            bln = new Date().getMonth()
            thn = new Date().getFullYear()
            const resultJadwal = `JADWAL SHALAT\n\nJadwal shalat di ${kota}, ${tgl}-${arrbulan[bln]}-${thn}\n\nSubuh : ${Shubuh}\nDzuhur : ${Zduhur}\nAshar : ${Ashr}\nMaghrib : ${Magrib}\nIsya : ${Isya}`
            await limitAdd(serial)
        }
            break
        case prefix+'quran':{
                const disable = await getDB.cek_disable(message.from, `${prefix}quran`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah Surah Quran kamu dengan cara ketik perintah :\n*${prefix}quran* [ Urutan Surat ]\nContoh :\n*${prefix}quran 1*`, message.id)
            const qura = `https://api.vhtear.com/quran?no=${args[1]}&apikey=${vhtearkey}`
            const quraan = await axios.get(qura)
            const quraann = quraan.data
            let hasqu = `*AL-QURAN*\n\n*Surah : ${quraann.result.surah}*\n*Quran* : ${quraann.result.quran}*`
            await iluser.reply(message.from, `${hasqu} ${mess.iklan}`, message.id).catch((e) => iluser.reply(message.from, `*Terdapat kesalahan saat mencari surat ${args[1]}*`, message.id))
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
        case prefix+'infosurah':{
                const disable = await getDB.cek_disable(message.from, `${prefix}infosurah`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            if (args.length == 1) return iluser.reply(message.from, `Contoh : *${prefix}infosurah al-fatihah*`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                    return true;
                });
                try {
                    var pesan = "*INFORMASI SURAH*\n\n___________________________\n\n"
                    pesan = pesan + "• *Nama* : "+ data[idx].name.transliteration.id + "\n" + "• *Asma* : " +data[idx].name.short+"\n"+"• *Arti* : "+data[idx].name.translation.id+"\n"+"• *Jumlah ayat* : "+data[idx].numberOfVerses+"\n"+"• *Nomor surah* : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"• *Keterangan* : "+data[idx].tafsir.id
                    pesan += '\n\n___________________________'
                    iluser.reply(message.from, pesan, message.id)
                }catch{
                    iluser.reply(message.from, 'Data tidak ditemukan, atau nama surah salah', message.id)
                }
            }
            break
        case prefix+'tafsir':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tafsir`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            if (args.length == 1) return iluser.reply(message.from, `Contoh : *${prefix}tafsir al-fatihah 2*`, message.id)
                var responsh = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah.json')
                var {data} = responsh.data
                var idx = data.findIndex(function(post, index) {
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
                }
            }catch{
                iluser.reply(message.from, 'Data tidak ditemukan, mungkin nama surah/ayat salah', message.id)
            }
        }
            break 


        //STICKER CREATOR
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

                if (isLimit(serial)) return
                await limitAdd(serial)
        try{
            const a = "By: iluser_BOT"
            const b = "t.me/iluser_bot"
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
                  modifExif(buffer, id, (res) => {
                    mediaData = res.toString('base64')
                    iluser.sendRawWebpAsSticker(message.from, mediaData, message.id)
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
                  modifExif(buffer, id, (res) => {
                    mediaData = res.toString('base64')
                    iluser.sendRawWebpAsSticker(message.from, mediaData, message.id)
                  })
                })
              })
            } else if (isMedia && mimetype == 'image/gif') {
              const mediaData = await decryptMedia(message)
              if (Buffer.byteLength(mediaData) >= 6186598.4) return iluser.reply(message.from, `sizenya terlalu gede sayang, dd gakuat :( max 5,9mb`, message.id)
              modifWebp(id, mediaData).then(res => {
                iluser.sendRawWebpAsSticker(message.from, res.toString('base64'), true).catch(() => iluser.reply(message.from, 'Maaf, kualitas tidak didukung untuk video tsb', message.id))
              })
            } else if (quotedMsg && quotedMsgObj.mimetype == 'image/gif') {
              const mediaData = await decryptMedia(quotedMsg)
              if (Buffer.byteLength(mediaData) >= 6186598.4) return iluser.reply(message.from, `sizenya terlalu gede sayang, dd gakuat :( max 5,9mb`, message.id)
              modifWebp(id, mediaData).then(res => {
                iluser.sendRawWebpAsSticker(message.from, res.toString('base64'), true).catch(() => iluser.reply(message.from, 'Maaf, kualitas tidak didukung untuk video tsb', message.id))
              })
            } else if (isMedia && mimetype == 'video/mp4') {
              const mediaData = await decryptMedia(message)
              if (Buffer.byteLength(mediaData) >= 6186598.4) return iluser.reply(message.from, `sizenya terlalu gede sayang, dd gakuat :( max 5,9mb`, message.id)
              modifWebp(id, mediaData).then(res => {
                iluser.sendRawWebpAsSticker(message.from, res.toString('base64'), true).catch(() => iluser.reply(message.from, 'Maaf, kualitas tidak didukung untuk video tsb', message.id))
              })
            } else if (quotedMsg && quotedMsgObj.mimetype == 'video/mp4') {
              const mediaData = await decryptMedia(quotedMsg)
              if (Buffer.byteLength(mediaData) >= 6186598.4) return iluser.reply(message.from, `sizenya terlalu gede sayang, dd gakuat :( max 5,9mb`, message.id)
              modifWebp(id, mediaData).then(res => {
                iluser.sendRawWebpAsSticker(message.from, res.toString('base64'), true).catch(() => iluser.reply(message.from, 'Maaf, kualitas tidak didukung untuk video tsb', message.id))
              })
            }
        }catch (error) {
            //throw new Error(error.message)
            console.log(color('FAILED | sticker maker', 'red'))
            iluser.sendText(ownerNumber, `Error sticker maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
        }
            break
        case prefix+'slight':{
                const disable = await getDB.cek_disable(message.from, `${prefix}slight`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (!isOwner) return iluser.reply(message.from, `Di tutup todd`, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const spiree= await axios.get(`http://docs-jojo.herokuapp.com/api/lightning?image_url=${getUrle}`)
                await iluser.sendStickerfromUrl(message.from, spiree.data.result)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const spiree= await axios.get(`http://docs-jojo.herokuapp.com/api/lightning?image_url=${getUrle}`)
                await iluser.sendStickerfromUrl(message.from, spiree.data.result)
            } else {
                await iluser.reply(message.from, `Format Salah\n\n⚠️ Kirim/balas gambar dengan ${prefix}slight`, message.id)
            }
        }
            break
        case prefix+'stickerfire':
        case prefix+'sfire':{
                const disable = await getDB.cek_disable(message.from, `${prefix}sfire`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            //if (!isOwner) return iluser.reply(message.from, `Di tutup todd`, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                //const imgnya = await stickerburn(getUrli)
                const spiree= await axios.get(`http://docs-jojo.herokuapp.com/api/burning_fire?image_url=${getUrli}`)
                await iluser.sendStickerfromUrl(message.from, spiree.data.result)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                //const imgnya = await stickerburn(getUrli)
                const spiree = await axios.get(`http://docs-jojo.herokuapp.com/api/burning_fire?image_url=${getUrli}`)
                await iluser.sendStickerfromUrl(message.from, spiree.data.result)
              //  iluser.reply(message.from, `${mess.iklann}`, message.id)
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
            
                await limitAdd(serial)
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
                                    await iluser.sendImageAsStickerAsReply(message.from, gasMake.base64, {author:'t.me/iluser_BOT', pack:'By: iluser_BOT WhatsApp'})
                                    //iluser.reply(message.from, `${mess.iklann}`, message.id)
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
                                    await iluser.sendImageAsStickerAsReply(message.from, gasMake.base64, {author:'t.me/iluser_BOT', pack:'By: iluser_BOT WhatsApp'})
                                    //iluser.reply(message.from, `${mess.iklann}`, message.id)
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
        case prefix+'ttp2':{
                const disable = await getDB.cek_disable(message.from, `${prefix}ttp2`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh ${prefix}ttp2 iluser_BOT`, message.id)
            const ttp2t = body.slice(6)
            const lttp2 = ["Orange","White","Green","Black","Purple","Red","Yellow","Blue","Navy","Grey","Magenta","Brown","Gold"]
            const rttp2 = lttp2[Math.floor(Math.random() * (lttp2.length))]
            await iluser.sendStickerfromUrl(message.from, `https://api.vhtear.com/textmaker?text=${ttp2t}&warna=${rttp2}&apikey=${vhtearkey}`)
           // iluser.reply(message.from, `${mess.iklann}`, message.id)
       }
            break
        case prefix+'ttg':{
                const disable = await getDB.cek_disable(message.from, `${prefix}ttg`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            try {
                if (quotedMsgObj == null) {
                    if (args.length === 1) return iluser.reply(message.from, `Contoh ${prefix}ttg aku bukan boneka`, message.id)
                        await iluser.sendStickerfromUrl(message.from, `https://api.vhtear.com/textxgif?text=${encodeURIComponent(body.slice(5))}&apikey=${vhtearkey}`, {author:'t.me/iluser_BOT', pack:'By: iluser_BOT WhatsApp'})
                        //iluser.reply(message.from, `${mess.iklann}`, message.id)
                } else {
                    await iluser.sendStickerfromUrl(message.from, `https://api.vhtear.com/textxgif?text=${encodeURIComponent(quotedMsgObj)}&apikey=${vhtearkey}`, {author:'t.me/iluser_BOT', pack:'By: iluser_BOT WhatsApp'})
                   // iluser.reply(message.from, `${mess.iklann}`, message.id)
                }
            } catch(e) {
                console.log(e)
                iluser.reply(message.from, 'Maaf, Server sedang Error')
            }
        }
            break
        case prefix+'attp':{
                const disable = await getDB.cek_disable(message.from, `${prefix}attp`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            const textattp = body.slice(6)
            const resultattp = await axios.get(`https://api.xteam.xyz/attp?text=${encodeURIComponent(textattp)}`)
            let stik = resultattp.data.result
            iluser.sendRawWebpAsSticker(message.from, stik, true, {author:'t.me/iluser_BOT', pack:'By: iluser_BOT WhatsApp'})
        }
        break
        case prefix+'memesticker':{
                const disable = await getDB.cek_disable(message.from, `${prefix}memesticker`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if ((isMedia && isImage || isQuotedImage) && args.length >= 2) {
                    const skm = body.slice(13)
                    const top = skm.split('|')[0]
                    const bottom = skm.split('|')[1]
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const getUrl = await uploadImages(mediaData, `meme.${sender.id}`)
                    const create = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${getUrl}`
                    const meme = await bent('buffer')(create)
                    webp.buffer2webpbuffer(meme, 'png', '-q 100')
                        .then((res) => {
                            sharp(res)
                                .resize(512, 512, {
                                    fit: 'contain',
                                    background: {
                                        r: 0,
                                        g: 0,
                                        b: 0,
                                        alpha: 0
                                    }
                                })
                                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await iluser.sendRawWebpAsSticker(message.from, base64)
                                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                    }
                                })
                        })
                } else {
                    await iluser.reply(message.from, `Format Salah!`, message.id)
                }
            }
            break
       /* case prefix+'memesticker':
        case prefix+'memestiker':{  
                if(isReg(obj)) return        
                if (isLimit(serial)) return
            
                await limitAdd(serial)  
                        if (args.length === 1) return iluser.sendFile(message.from, 'Silahkan balas gambar yang dikirim dengan .memestiker |tex ataas|text bawah', message.id)              
                        if(isLimit(serial)) return
                            if ((isMedia || isQuotedImage) && args.length >= 2) {
                                argz = body.trim().split('|')
                                const top = argz[1]
                                const bott = argz[2]
                                const encryptMedia = isQuotedImage ? quotedMsg : message
                                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                                const getUrl = await uploadImages(mediaData, false)
                                const ImageBase64 = await meme.custom(getUrl, top, bott)
                                iluser.sendImageAsSticker(message.from, ImageBase64, 'image.png', '', null, true)
                                    .then(() => {
                                  //      iluser.reply(message.from, `${mess.iklann}`, message.id)
                                    })
                                    .catch(() => {
                                        iluser.reply(message.from, 'Ada yang error!')
                                    })
                            } else {
                                await iluser.reply(message.from, `Silahkan balas gambar yang dikirim dengan .memestiker |tex ataas|text bawah`, message.id)
                            }
                            limitAdd(serial)
                        }
                            break */
        case prefix+'findsticker':
        case prefix+'findstiker':
        case prefix+'findsk':{
            const disable = await getDB.cek_disable(message.from, `${prefix}findsticker`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
                    if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}findsticker pentol*`, message.id)
                    try {
                        const s = await axios.get('https://api.vhtear.com/wasticker?query=' + body.slice(13) + `&apikey=${vhtearkey}`)
                        for (let i = 0; i < s.data.result.data.length; i++) {
                        await iluser.sendStickerfromUrl(message.from, s.data.result.data[i])
                        console.log(color('SUCCESS | findsticker', 'olive'))
                        await limitAdd(serial)
                        }
                    } catch (err) {
                        await iluser.reply(message.from, 'Error!', message.id)
                        console.log(color('FAILED | findsticker', 'red'))
                        iluser.sendText(ownerNumber, 'Find Sticker Error:\n' + err)
                    }
                }
                    break
        case prefix+'emstik':
        case prefix+'emstick':{
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                const disable = await getDB.cek_disable(message.from, `${prefix}emstik`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (args.length == 1) return iluser.reply(message.from, `Contoh: *${prefix}emstik 😫*`, message.id)
            const emoji = emojiUnicode(args[1])
            console.log('Creating code emoji => ' + emoji)
            iluser.sendStickerfromUrl(message.from, `https://api.vhtear.com/emojitopng?code=${encodeURIComponent(emoji)}&apikey=${vhtearkey}`)
             .catch ((err) => {
                iluser.reply(message.from, 'Maaf, emoji yang kamu kirim tidak support untuk dijadikan sticker, cobalah emoji lain', message.id)
                iluser.sendText(ownerNumber, 'Emoji sticker Error:\n' + err)
                console.log(color('FAILED | Emoji sticker', 'red'))
               })
         }
            break

        //DOWNLOAD MENU
        case prefix+'video':{
                const disable = await getDB.cek_disable(message.from, `${prefix}video`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `${prefix}video* nama video`)
            const syt = body.slice(7)
            // iluser.reply(message.from, mess.wait, message.id)
            try {
                const linkytvid = await axios.get(`https://api.vhtear.com/youtube?query=${encodeURIComponent(syt)}&apikey=${vhtearkey}`)
                const { result } = await linkytvid.data
                let angkanya = 1
                let tobzlod = `YOUTUBE VIDEO*\n\n*Hasil Pencarian : ${syt}*\n\n─────────────────\n\nBalas pesan ini dengan ${prefix}getvideo [angka] untuk mengambil ID, Contoh : ${prefix}getvideo 2\n`
                for (let i = 0; i < result.length; i++) {
                    tobzlod += `\n─────────────────\n\n*Urutan* : ${i+1}\n*Judul* : ${result[i].title}\n*Durasi* : ${result[i].duration}\n*Channel* : ${result[i].channel}\n*Balas list ini dengan* : ${prefix}getvideo ${result[i].id}\n`
                }
                    tobzlod += `\n\n`
                for (let ii = 0; ii < result.length; ii++) {
                    tobzlod += `(.)${result[ii].id}`
                }
                await iluser.sendFileFromUrl(message.from, result[0].image, 'tumbail.jpg', tobzlod, message.id)
                await limitAdd(serial)
            } catch (err){
                console.log(color('FAILED | Video', 'red'))
                iluser.sendText(ownerNumber, 'Error Get Video : '+ err)
                iluser.reply(message.from, `Error!`, message.id)
                }
            }
            break
        case prefix+'getvideo':{
                const disable = await getDB.cek_disable(message.from, `${prefix}getvideo`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Balas hasil penelusuran dengan ${prefix}getvideo *urutan*`, message.id)
            try {    
            if (quotedMsg && quotedMsg.type == 'image') {
                if (!Number(args[1])) return iluser.reply(message.from, `*Apabila ditag hanya cantumkan nomer urutan bukan ID Download!*\nContoh : *${prefix}getvideo 1*`, message.id)
                const dataDownmp3 = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                const pilur = dataDownmp3.split('(.)')
                console.log(pilur[args[1]])
                // iluser.reply(message.from, mess.wait, message.id)
                const mhanky45 = await fetch(`https://api.vhtear.com/ytdl?link=https://youtu.be/${pilur[args[1]]}&apikey=${vhtearkey}`)
                if (!mhanky45.ok) throw new Error(`Error Get Video : ${mhanky45.statusText}`)
                const mhankyt45 = await mhanky45.json()
                if (mhankyt45.status == false) {
                    iluser.reply(message.from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, message.id)
                } else {
                    const { title, ext, imgUrl, size, UrlVideo } = await mhankyt45.result
                    //if (Number(size.split(' MB')[0]) > 30.00) return iluser.sendFileFromUrl(message.from, imgUrl, `thumb.jpg`, `*YOUTUBE VIDEO DOWNLOADER*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${size}\n*Link* : ${UrlVideo}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, message.id)
                        const captions = `*YOUTUBE VIDEO DOWNLOADER*\n\n*Title* : ${title}\n*Ext* : MP4\n*Filesize* : ${size}\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`                  
                        const captionss = `*YOUTUBE VIDEO DOWNLOADER*\n\n*Title* : ${title}\n*Ext* : MP4\n*Filesize* : ${size}\n`                  
                      //  if (!isPremium) return await iluser.sendFileFromUrl(message.from, imgUrl, 'thumb.jpg', `${captionss}\n\n${mess.noprem}\n[${UrlVideo}]`, message.id) 
                        await iluser.sendFileFromUrl(message.from, imgUrl, `thumb.jpg`, captions, message.id)
                       // await iluser.sendFileFromUrl(message.from, UrlVideo, `${title}.mp4`, `${mess.iklann}`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt3, message.id))
                        
                        const responses = await fetch(UrlVideo);
                        const buffer = await responses.buffer();
                        await fs.writeFile(`./media/iluser.mp4`, buffer)
                        await iluser.sendFile(message.from,'./media/iluser.mp4', 'iluser.mp4', `${mess.iklann}`, message.id)
                        fs.unlinkSync(`./media/iluser.mp4`)
                        await limitAdd(serial)
                }
            } else if (quotedMsg && quotedMsg.type == 'chat') { 
                    iluser.reply(message.from, `*Salah tag! hanya tag pesan berisi data hasil dari penelusuran video.*`, message.id)
            } else {
                if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *.getvideo _urutan video_*`)
                if (args[1] <= 25) return iluser.reply(message.from, `*Apabila ditag hanya cantumkan nomer urutan bukan ID Download!*\nContoh : *.getvideo 1*`,)
                // iluser.reply(message.from, mess.wait, message.id)
                const mhanky45 = await fetch(`https://api.vhtear.com/ytdl?link=https://youtu.be/${pilur[args[1]]}&apikey=${vhtearkey}`)
                if (!mhanky45.ok) throw new Error(`Error Get Video : ${mhanky45.statusText}`)
                const mhankyt45 = await mhanky45.json()
                if (mhankyt45.status == false) {
                    iluser.reply(message.from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, message.id)
                } else {
                    const { title, ext, imgUrl, size, UrlVideo } = await mhankyt45.result
                    if (Number(size.split(' MB')[0]) > 30.00) return iluser.sendFileFromUrl(message.from, imgUrl, `thumb.jpg`, `*YOUTUBE VIDEO DOWNLOADER*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${size}\n*Link* : ${UrlVideo}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, message.id)
                        const captions = `*YOUTUBE VIDEO DOWNLOADER*\n\n*Title* : ${title}\n*Ext* : MP4\n*Filesize* : ${size}\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`                  
                        iluser.sendFileFromUrl(message.from, imgUrl, `thumb.jpg`, captions, message.id)
                       // await iluser.sendFileFromUrl(message.from, UrlVideo, `${title}.mp4`, `Video telah terkirim ${pushname}`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt3, message.id))
                        const responses = await fetch(UrlVideo);
                        const buffer = await responses.buffer();
                        await fs.writeFile(`./media/iluser.mp4`, buffer)
                        await iluser.sendFile(message.from,'./media/iluser.mp4', 'iluser.mp4', `${mess.iklann}`, message.id)
                        fs.unlinkSync(`./media/iluser.mp4`)
                        await limitAdd(serial)
                    }
                }
            } catch (err) {
                console.log(color('FAILED | Getvideo', 'red'))
                iluser.sendText(ownerNumber, 'Error Get Video : '+ err)
                iluser.reply(message.from, mess.error.Yt4, message.id)
            }
        }
            break
        case prefix+'music':
        case prefix+'musik':{
                const disable = await getDB.cek_disable(message.from, `${prefix}musik`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}musik resah jadi luka`)
            const quer = body.slice(7)
            // iluser.reply(message.from, mess.wait, message.id)
            await limitAdd(serial)
            try {
                const resmus = await fetch(`https://api.vhtear.com/youtube?query=${encodeURIComponent(quer)}&apikey=${vhtearkey}`)
                if (!resmus.ok) throw new Error(`unexpected response ${resmus.statusText}`)
                const jsonsercmu = await resmus.json()
                const { result } = await jsonsercmu
                let berhitung = 1
                let xixixi = `*YOUTUBE MUSIC*\n\n*Hasil Pencarian : ${quer}*\n\n─────────────────\n\nBalas pesan ini dengan ${prefix}getmusik [angka] untuk mengambil ID, Contoh : ${prefix}getmusik 2\n`
                for (let i = 0; i < result.length; i++) {
                    xixixi += `\n─────────────────\n\n*Urutan* : ${berhitung+i}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel}\n*Durasi* : ${result[i].duration}\n*Balas list ini dengan* : ${prefix}getmusik ${result[i].id}\n`
                }
                    xixixi += `\n\n`
                for (let ii = 0; ii < result.length; ii++) {
                    xixixi += `(.)${result[ii].id}`
                }
                await iluser.sendFileFromUrl(message.from, result[0].image, 'thumbserc.jpg', xixixi, message.id)
            } catch (err){
                console.log(color('FAILED | Musik', 'red'))
                iluser.reply(message.from, 'Error!', message.id)
                iluser.sendText(ownerNumber, 'Music Error : ' + err)
            }
        }
            break
        case prefix+'getmusic':
        case prefix+'getmusik':{
                const disable = await getDB.cek_disable(message.from, `${prefix}getmusik`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
        if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            try {
                if (quotedMsg && quotedMsg.type == 'image') {
                    if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *${prefix}getmusik [ Id Download ]*`)
                    if (!Number(args[1])) return iluser.reply(message.from, `*Apabila ditag hanya cantumkan nomer urutan bukan ID Download!*\nContoh : *${prefix}getmusik 1*`, message.id)
                    const dataDownmp3 = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                    const pilur = dataDownmp3.split('(.)')
                    console.log(pilur[args[1]])
                    // iluser.reply(message.from, mess.wait, message.id)
                    const mhanky35 = await fetch(`https://api.vhtear.com/ytdl?link=https://youtu.be/${pilur[args[1]]}&apikey=${vhtearkey}`)
                    if (!mhanky35.ok) throw new Error(`Error Get Video : ${mhanky35.statusText}`)
                    const mhankyt35 = await mhanky35.json()
                     if (mhankyt35.status == false) {
                        iluser.reply(message.from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, message.id)
                    } else {
                        try{
                        const { title, ext, size, UrlMp3, status, imgUrl } = await mhankyt35.result
                        //if (Number(size.split(' MB')[0]) >= 10.00) return iluser.sendFileFromUrl(message.from, imgUrl, `thumb.jpg`, `*YOUTUBE MUSIC DOWNLOADER *\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${size}\n*Link* : ${UrlMp3}\n\n*Untuk durasi lebih dari batas disajikan dalam bentuk link*`, message.id)
                        console.log(`CHANGE API BARBAR : ${ext}\n${size}\n${status}`)
                        const captions = `*YOUTUBE MUSIC DOWNLOADER*\n\n*Title* : ${title}\n*Format* : MP3\n*Filesize* : ${size}\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
                        const captionss = `*YOUTUBE MUSIC DOWNLOADER*\n\n*Title* : ${title}\n*Format* : MP3\n*Filesize* : ${size}\n`
                      //  if (!isPremium) return await iluser.sendFileFromUrl(message.from, imgUrl, 'iluser.jpg', `${captionss}\n\n${mess.noprem}\n[${UrlMp3}]`, message.id) 
                        await iluser.sendFileFromUrl(message.from, imgUrl, `thumb.jpg`, captions, message.id)
                        //await iluser.sendFileFromUrl(message.from, UrlMp3, `${title}.mp3`, `by iluser_BOT`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                        const responses = await fetch(UrlMp3);
                        const buffer = await responses.buffer();
                        await fs.writeFile(`./media/ytmp3.mp3`, buffer)
                        await iluser.sendFile(message.from,'./media/ytmp3.mp3', `${title}.mp3`, `${mess.iklann}`, message.id)
                        } catch (err){
                            console.log(color('FAILED | Get musik', 'red'))
                            iluser.sendText(ownerNumber, `Error Getmusik:\n${err}`)
                        }
                    }    
                } else if (quotedMsg && quotedMsg.type == 'chat') { 
                    iluser.reply(message.from, `*Salah tag! hanya tag pesan berisi data hasil dari penelusuran musik.*`, message.id)
                } else {
                    if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *.getmusik [ Id Download ]*`)
                    if (args[1] <= 25) return iluser.reply(message.from, `*Apabila ingin mengambil data musik dengan nomor urutan, mohon tag pesan bot tentang pencarian musik!*`,)
                    // iluser.reply(message.from, mess.wait, message.id)
                    const mhanky35 = await fetch(`https://api.vhtear.com/ytdl?link=https://youtu.be/${pilur[args[1]]}&apikey=${vhtearkey}`)
                    if (!mhanky35.ok) throw new Error(`Error Get Video : ${mhanky35.statusText}`)
                    const mhankyt35 = await mhanky35.json()
                     if (mhankyt35.status == false) {
                        iluser.reply(message.from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, message.id)
                    } else {
                        const { title, ext, size, UrlMp3, status, imgUrl } = await mhankyt35.result
                        //if (Number(size.split(' MB')[0]) >= 10.00) return iluser.sendFileFromUrl(message.from, imgUrl, `thumb.jpg`, `*YOUTUBE MUSIC DOWNLOADER*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${size}\n*Link* : ${UrlMp3}\n\n*Untuk durasi lebih dari batas disajikan dalam bentuk link*`, message.id)
                        console.log(`CHANGE API BARBAR : ${ext}\n${size}\n${status}`)
                        const captions = `*YOUTUBE MUSIC DOWNLOADER*\n\n*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${size}\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
                        iluser.sendFileFromUrl(message.from, imgUrl, `thumb.jpg`, captions, message.id)
                        //await iluser.sendFileFromUrl(message.from, UrlMp3, `${title}.mp3`, `DOWNLOADER MUSIC BY ILUSER`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                        const responses = await fetch(UrlMp3);
                        const buffer = await responses.buffer();
                        await fs.writeFile(`./media/ytmp3.mp3`, buffer)
                        await iluser.sendFile(message.from,'./media/ytmp3.mp3', `${title}.mp3`, `${mess.iklann}`, message.id)
                        await limitAdd(serial)
                   }
                }
            } catch (err) {
                iluser.sendText(ownerNumber, 'Error Get Music : '+ err)
                iluser.reply(message.from, `*Kesalahan! Pastikan id download sudah benar.*`, message.id)
                console.log(color('FAILED | Getmusik', 'red'))
            }
        }
            break
        case prefix+'asupan':{
                const disable = await getDB.cek_disable(message.from, `${prefix}asupan`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            //if (!isOwner) return iluser.reply(message.from, 'Fitur ini sedang dalam pengembangan', message.id)
            if(args.length == 1)            
            {
                const rand = getRandomText(tiktok_user)
                //const { collector } = await TikTokScraper.user(rand, {number: 0 });
                const { collector, headers } = await TikTokScraper.user(rand, {number: 0, noWaterMark: true });
                if(collector.length == 0)
                {
                    await iluser.reply(message.from, "Maaf, user tidak ditemukan atau tidak ditemukan video." , message.id)
                }else{
                    const { videoUrl, webVideoUrl } = getRandomText(collector) 
                    await iluser.sendFileFromUrl(message.from, videoUrl, 'file.mp4', `Hii ${pushname} \nTarget!: @${rand}\nUrl: ${webVideoUrl} ${mess.iklan}`, false, { headers: headers }, message.id)
                }
            }else if(args.length == 2)
            {
                const rand = args[1]
                const { collector, headers } = await TikTokScraper.user(rand, {number: 0, noWaterMark: true });
                if(collector.length == 0)
                {
                    await iluser.reply(message.from, "Maaf, user tidak ditemukan atau tidak ditemukan video.", message.id)
                }else{
                    const { videoUrl, webVideoUrl } = getRandomText(collector)
                    await iluser.sendFileFromUrl(message.from, videoUrl, 'file.mp4', `Hii ${pushname} \nTarget!: @${rand}\nUrl: ${webVideoUrl} ${mess.iklan}`, false, { headers: headers }, message.id)
                }
            }
        }
        break
        case prefix+'asupan1':{
        try {
        const disable = await getDB.cek_disable(message.from, `${prefix}asupan`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
          function rndnum(count){
            const so = count - 1;
            return Math.ceil(Math.random() * so);
          }
          const list_target = ['queenyytan', 'shandrabahari', 'ekkaprnm', 'diankhr', 'parahhhshit', 'thisfandacfl', 'kindabells', 'olivepurpledj', 'inisampekapan', 'mynameismei_', 'athayags26', 'vinaaamrina', 'cahyanirynn', 'yoeourophia', 'alifhiaf', 'dvnovira', 'eline.angeline', 'felicyangelista', 'reemarmartin', 'pricilia_micca', 'sellaaselly16', 'akuansellma', 'regitaechaa', 'najwashivaa02'];
          const target = list_target[rndnum(list_target.length)];
          (async () => {
            try {
              const posts = await TikTokScraper.user(target, { number: 100, noWaterMark: true});
              const feed_count = posts.collector.length;
              if (feed_count == 0) {
                iluser.sendText(message.from, 'user tidak ditemukan/user tidak memiliki post video');
                console.log(`FAILED | send tiktok, user/video not found ${target}`)
              }else{
                const data = posts.collector[rndnum(feed_count)];
                const user = data.authorMeta.name;
                const music = data.musicMeta.musicName;
                const video = data.videoUrlNoWaterMark;
                const filename = `${user}_${data.id}_${randomName(7)}.mp4`;
                const noWm = await videoNoWm(video);
                const url = `https://www.tiktok.com/@${user}/video/${data.id}`;
                const hd = await tiktok_hd(url);
                // const hd = 'unavailable';
                await download(noWm, './tiktok/'+filename, function(){
                    const a = base64_encode('./tiktok/' + filename);
                    var base64str = 'data:video/mp4'+";base64,"+a.toString()
                    iluser.sendFile(message.from, base64str, filename, `source : @${user}\nmusic : ${music}\nHD video : ${hd}`);
                    console.log(`SUCCESS | send /tiktok random`)
                  });
              }
            } catch (error) {
                console.log(color('FAILED | Asupan', 'red'))
                iluser.sendText(ownerNumber, `Error brainly:\n${error}`)
                iluser.reply(message.from, 'Error', message.id)
            }
          })();
        }catch(err){}
        }
        break    
        case prefix+'ytmp4':
        case prefix+'yt': 
        case prefix+'mp4':{
                const disable = await getDB.cek_disable(message.from, `${prefix}yt`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            try {
            if(isReg(obj)) return
            if (args.length === 1) return iluser.reply(message.from, 'Linknya mana?', message.id)
            let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                        if (!isLinks) return iluser.reply(message.from, `Link Tidak bersumber dari YouTube`, message.id)
            if (isLimit(serial)) return 
            
            await limitAdd(serial)            
                const link = args[1]
                const puppeteer = require('puppeteer')
                const browser = await puppeteer.launch({headless: true, args: [
                  "--disable-notifications"
                ]}); 
                try {
                    
                    const page = await browser.newPage();
                    await page.goto('https://ytmp3.cc/en13/', {waitUntil: 'networkidle2'});  
                    await page.click("#mp4");
                    await page.type('input[id="input"]', link);
                    await page.keyboard.press('Enter');                    
                    await page.waitForSelector('div[id="buttons"]', {visible: true})
                    let spanHref = await page.$eval('div[id="buttons"] > a', span => span.getAttribute('href'));  
                    await browser.close()
                   // if (!isPremium) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`*YouTube Video Downloader*\n\n${mess.noprem}\n[${spanHref}]`, message.id);
                    await iluser.sendFileFromUrl( message.from,  spanHref, ``, `${mess.iklann}`, message.id)
                    console.log(color('SUCCESS | Ytmp4', 'olive'))
                } catch (error) {
                    console.log(color('FAILED | Ytmp4', 'red'))
                    await iluser.reply(message.from, "Error!", message.id)
                    await iluser.sendText(ownerNumber, `Error Ytmp3:\n${error}`)
                    await browser.close()
                }
            } catch (error) {
                console.log(color('FAILED | YouTube downloader', 'red'))
                iluser.sendText(ownerNumber, `Error YouTube downloader:\n${error}`)
                iluser.reply(message.from, 'Error', message.id)
            }
        }
        break
        case prefix+'ytmp3': 
        case prefix+'mp3':{
                const disable = await getDB.cek_disable(message.from, `${prefix}ytmp3`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            try {
            if(isReg(obj)) return
            if (args.length === 1) return iluser.reply(message.from, 'Linknya mana?', message.id)
            let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                        if (!isLinks) return iluser.reply(message.from, `Link Tidak bersumber dari YouTube`, message.id)
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            
                const link = args[1]
                const puppeteer = require('puppeteer')
                const browser = await puppeteer.launch({headless: true, args: [
                  "--disable-notifications"
                ]}); 
                try {
                    
                    const page = await browser.newPage();
                    await page.goto('https://ytmp3.cc/en13/', {waitUntil: 'networkidle2'});  
                    await page.click("#mp3");
                    await page.type('input[id="input"]', link);
                    await page.keyboard.press('Enter');                    
                    await page.waitForSelector('div[id="buttons"]', {visible: true})
                    let spanHref = await page.$eval('div[id="buttons"] > a', span => span.getAttribute('href'));  
                    await browser.close()
                  //  if (!isPremium) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`*YouTube Audio Downloader*\n\n${mess.noprem}\n[${spanHref}]`, message.id);
                    await iluser.sendFileFromUrl( message.from,  spanHref, ``, `Sukses Mengunduh `, message.id)
                    console.log(color('SUCCESS | Ytmp3', 'olive'))
                } catch (error) {
                    console.log(color('FAILED | Ytmp3', 'red'))
                    await iluser.reply(message.from, "Error!", message.id)
                    await iluser.sendText(ownerNumber, `Error Ytmp3:\n${error}`)
                    await browser.close()
                }
            } catch (error) {
                console.log(color('FAILED | YouTube audio downloader', 'red'))
                iluser.sendText(ownerNumber, `Error YouTube audio downloader:\n${error}`)
                iluser.reply(message.from, 'Error', message.id)
            }
        }
        break
        case prefix+'play':{
                const disable = await getDB.cek_disable(message.from, `${prefix}play`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            if (args.length == 1) return iluser.reply(message.from, `Contoh: ${prefix}play resah jadi luka`, message.id)
            try {
                const serplay = body.slice(6)
                const webplay = await axios.get(`https://api.vhtear.com/ytmp3?query=${serplay}&apikey=${vhtearkey}`)
                    if (Number(webplay.data.result.size.split(' MB')[0]) >= 30.00) return iluser.sendFileFromUrl(message.from, webplay.data.result.image, `iluser_BOT_thumb.jpg`, `sizenya terlalu gede sayang, dd gakuat :(\n\nunduh manual melalui link di bawah ini\n${webplay.data.result.mp3} [ *${webplay.data.result.size}* ]\n\n*Judul* : ${webplay.data.result.title}\n*Durasi* : ${webplay.data.result.duration} ${mess.iklan}`, message.id)
                    //const { image, mp3, size, ext, title, duration } = await webplay2.result
                    const captplay = `*YOUTUBE PLAY*\n\n• *Judul* : ${webplay.data.result.title}\n• *Durasi* : ${webplay.data.result.duration}\n• *Exp* : ${webplay.data.result.ext}`
                    //if (!isPremium) return await iluser.sendFileFromUrl(message.from, image, `thumb.jpg`, `${captplay}\n\n${mess.noprem}\n[${mp3}]`, message.id)
                    await iluser.sendFileFromUrl(message.from, webplay.data.result.image, `iluser_BOT_thumb.jpg`, `${captplay}\n\nSedang mengirim audio...`, message.id)
                    iluser.sendFileFromUrl(message.from, webplay.data.result.mp3, `${webplay.data.result.title}.mp3`, `iluser_BOT_${webplay.data.result.title}`, message.id)
                    console.log(color('SUCCESS | Play music', 'olive'))
            } catch (err) {
                console.log(color('FAILED | Play music', 'red'))
                iluser.sendText(ownerNumber, 'Error Play : '+ err)
                iluser.reply(message.from, `Error!`, message.id)
            }
        }break
        case prefix+'mediafire':{
                const disable = await getDB.cek_disable(message.from, `${prefix}mediafire`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            if (args.length == 1) return iluser.reply(message.from, `Linknya mana tod?`, message.id)
            try {
                const query = body.slice(11)
                const iluser = await axios.get(`http://docs-jojo.herokuapp.com/api/mediafire?url=${query}`)
                if (Number(iluser.data.filesize.split('MB')[0]) >= 50.00) return iluser.reply(message.from, `sizenya terlalu gede sayang, dd gakuat :(\n\nunduh manual melalui link di bawah ini\n${iluser.data.url} [ *${iluser.data.filesize}* ] ${mess.iklan}`, message.id)
                await iluser.reply(message.from, `*Mediafire Downloader*\n
*Filename:* ${iluser.data.filename}
*Filetype:* ${iluser.data.filetype}
*Filesize:* ${iluser.data.filesize}
*Uploaded:* ${iluser.data.uploaded}
*Description:* ${iluser.data.desc} ${mess.iklan}`, message.id)
                await iluser.sendFileFromUrl(message.from, iluser.data.url, `iluser_BOT_${iluser.data.filename}`, ``, message.id)
                console.log(color('SUCCESS | mediafire downloader', 'olive'))
            } catch (err) {
                console.log(color('FAILED | mediafire downloader', 'red'))
                iluser.sendText(ownerNumber, 'Error mediafire : '+ err)
                iluser.reply(message.from, `Error!`, message.id)
            }
        }
        break
        case prefix+'lagu':{
                const disable = await getDB.cek_disable(message.from, `${prefix}lagu`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length == 1) return iluser.reply(message.from, `Contoh: ${prefix}play resah jadi luka`, message.id)
            try {
                const serplay = body.slice(6)
                const webplay = await fetch(`https://api.vhtear.com/ytmp3?query=${serplay}&apikey=${vhtearkey}`)
                if (!webplay.ok) throw new Error(`Error Get Video : ${webplay.statusText}`)
                const webplay2 = await webplay.json()
                 if (webplay2.status == false) {
                    iluser.reply(message.from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, message.id)
                } else {
                    //if (Number(webplay2.result.size.split(' MB')[0]) >= 70.00) return iluser.reply(message.from, 'Size audio sudah melebihi batas', message.id)
                    const { image, mp3, size, ext, title, duration, url, id } = await webplay2.result
                    const captplay = `*${title}*\n\n*Durasi* : ${duration}\n*Url* : ${url}\n*Url Download* : ${mp3}`
                    //if (!isPremium) return await iluser.sendFileFromUrl(message.from, image, `thumb.jpg`, `${captplay}\n\n${mess.noprem}\n[${mp3}]`, message.id)
                    await iluser.reply(message.from, `${captplay}\n\nSedang mengirim audio...`, message.id)
                    //await iluser.sendFileFromUrl(message.from, mp3, `${title}.mp3`, `${title}`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                    const responses = await fetch(mp3);
                    const buffer = await responses.buffer();
                    await fs.writeFile(`./media/ytmp3.mp3`, buffer)
                    await iluser.sendFile(message.from,'./media/ytmp3.mp3', 'iluser.mp3', `neeh`, message.id)
                }
            } catch (err) {
                iluser.sendText(ownerNumber, 'Error Play : '+ err)
                iluser.reply(message.from, 'Error', message.id)
            }
        }
            break
        case prefix+'joox': {
                const disable = await getDB.cek_disable(message.from, `${prefix}joox`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return 
            if(isLimit(serial)) return
            if (args.length === 1) return await iluser.reply(message.from, 'Contoh .joox virgoun surat cinta untuk starla')
            const play = body.slice(6)
            try {
                const joox = await get.get('https://mnazria.herokuapp.com/api/jooxnich?search='+ play).json()
                if (joox.error) {
                    await iluser.reply(message.from, 'Lagu tidak ditemukan!', message.id)
                } else {
                    const { msinger, msong, imgSrc, m4aUrl,mp3Url, result } = await joox
                   // if (!isPremium) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`👉 Penyanyi : ${result.msinger}\n👉 Judul : ${result.msong}\n\n${mess.noprem}\n[${result.mp3Url}]`, message.id);
                    await iluser.sendFileFromUrl(message.from, result.imgSrc, 'imgsrc.jpg', `👉 Penyanyi : ${result.msinger}\n👉 Judul : ${result.msong}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, message.id)
                    await iluser.sendFileFromUrl(message.from, result.mp3Url, `${result.msong}.mp3`, '', message.id).catch(() => iluser.reply(message.from, mess.error.Yt3, message.id))
                    console.log('SUCCESS | joox downloader')
                    await limitAdd(serial)
                }
            } catch (err) {
                console.log('FAILED | joox downloader')
                iluser.sendText(ownerNumber, 'Error joox downloader: '+ err)
                iluser.reply(message.from, 'Error!', message.id)
            }}
            limitAdd(serial)
            break
case prefix+'instagram':
case prefix+'ig':
case prefix+'insta':{
                const disable = await getDB.cek_disable(message.from, `${prefix}ig`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            try {
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
                if (args.length === 1) return iluser.reply(message.from, `Linknya mana tol?`, message.id)
                if (!args[1].includes('instagram.com')) return iluser.reply(message.from, `urlnya bukan dari instagram itu tol`, message.id)
                let arrBln = ["Januari","Februaru","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
                const idRegex = /([-_0-9A-Za-z]{11})/
                const idIGG = args[1].match(idRegex)
                await getPost(idIGG[0]).then((post) => {
                    let a = new Date(post.date * 1000)
                    const jam = a.getHours()
                    const menit = a.getMinutes()
                    const bulan = a.getMonth()
                    const tanggal = a.getDate()
                    const tahun = a.getFullYear()
                    const captig = `*INSTAGRAM DOWNLOADER*\n\n*Username* : ${post.owner_user}\n*Waktu Publish* : ${jam}:${menit} ${tanggal}-${arrBln[bulan - 1]}-${tahun} ${mess.iklan}`
                    const captigg = `*INSTAGRAM DOWNLOADER*\n\n*Username* : ${post.owner_user}\n*Waktu Publish* : ${jam}:${menit} ${tanggal}-${arrBln[bulan - 1]}-${tahun}\n`
                   // if (!isPremium) return iluser.sendImage(message.from, './logo.png', 'kntl.png',`${captigg}\n\n${mess.noprem}\n[${post.url}]`, message.id);
                    iluser.sendFileFromUrl(message.from, post.url, `Insta`, captig, message.id)
                })
            } catch (err) {
                await iluser.reply(message.from, 'Error', message.id)
                await iluser.sendText(ownerNumber, `Error instagram:\n${err}`)
                console.log(color('FAILED | instagram downloader', 'red'))
            }
        }
            break
        case prefix+'ig2': 
        case prefix+'instagram2':{
                const disable = await getDB.cek_disable(message.from, `${prefix}ig2`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}ig likpost`, message.id)
            if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return iluser.reply(message.from, `Maaf, link yang kamu kirim tidak valid. [Invalid Link]`, message.id)
            instagram(args[1]).then(async(res) => {
                let username = res.owner_username;
                for (let i = 0; i < res.post.length; i++) {
                if (res.post[i].type == "image") {
                        //if (!isPremium) return await iluser.sendImage(message.from, './logo.png', 'kntl.png', `*INSTAGRAM*\n\n• *Username* : ${username}\n• *Tipe* : Image\n\n${mess.noprem}\n[${res.post[i].urlDownload}]`, message.id);
                        await iluser.sendFileFromUrl(message.from, res.post[i].urlDownload, "ig.jpg", `*INSTAGRAM*\n\n• *Username* : ${username}\n• *Tipe* : Image ${mess.iklan}`, message.id);
                        limitAdd(serial)
                        console.log('SUCCESS | instagram2')
                    } else if (res.post[i].type == "video") {
                    //  if (!isPremium) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`*INSTAGRAM*\n\n• *Username* : ${username}\n• *Tipe* : Video\n\n${mess.noprem}\n[${res.post[i].urlDownload}]`, message.id);
                        await iluser.sendFileFromUrl(message.from, res.post[i].urlDownload, "ig.mp4", `*INSTAGRAM*\n\n• *Username* : ${username}\n• *Tipe* : Video ${mess.iklan}`, message.id);
                        limitAdd(serial)
                        console.log('SUCCESS | instagram2')
                    }
                }
            }).catch((err) => {
                iluser.reply(message.from, `Error!`, message.id)
                iluser.sendText(ownerNumber, 'Error instagram2: '+ err)
                console.log('FAILED | instagram2')
            })
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
            
            await limitAdd(serial) 
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
        case prefix+'twitter2':
        case prefix+'twt2':
        case prefix+'tw2':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tw2`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return

            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}tw2 [ Link Twitter ]`, message.id)
            
            twitter(args[1]).then(async(res) => {
                let { desk, urlVideo } = await res
                let ttwitter = `*TWITTER DOWNLOADER*\n\n• *Aplikasi:* Twitter\n• *Deskripsi:* ${desk} ${mess.iklann}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                await iluser.sendFileFromUrl(message.from, urlVideo, `twit.mp3`, ttwitter, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                console.log('SUCCESS | twitter downloader 2')
                await limitAdd(serial)
            }).catch((err) => {
                console.log('FAILED | twitter downloader 2');
                iluser.reply(message.from, `Error!`, message.id)
                iluser.sendText(ownerNumber, 'Error twitter downloader 2 '+ err)
            })
        }
            break
        case prefix+'pin':{
                const disable = await getDB.cek_disable(message.from, `${prefix}pin`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isBlocked) return await iluser.reply(message.from, mess.blockk, message.id)
            if(args.length == 1) return await iluser.reply(message.from, `Pastikan contoh benar!\n${prefix}pin <link>`, message.id)
            //if (args[1].includes('pinterest.com') != true || args[1].includes('pin.it') != true) return await iluser.reply(message.from, `Pastikan link berasal dari pinterest!`, message.id)
            else{
                if (isLimit(serial)) return 
            
                await limitAdd(serial)
                const a = await PIN.PinterestAPI(args[1]) 
                const get64 = await getBase64(a)
                const getFileType = base64MimeType(get64).split('/')[1]
                await iluser.sendImage(message.from, get64, `inifile.${getFileType}`, `Pinterest X iluser_BOT ${mess.iklan}`, message.id);
                console.log('SUCCESS | pinterest downloader') 
            }
        }
        break
        case prefix+'fb2':{
                const disable = await getDB.cek_disable(message.from, `${prefix}fb2`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : ${prefix}fb https://www.facebook.com/xnxx`, message.id)
            facebook(args[1]).then(async(res) => {
                let { VideoUrl } = await res
                const epbe2 = `*FACEBOOK DOWNLOADER*\n`
              //  if (!isPremium) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`${epbe2}\n\n${mess.noprem}\n[${VideoUrl}]`, message.id);
                await iluser.sendFileFromUrl(message.from, VideoUrl, `Facebook.mp4`, `${epbe2} ${mess.iklan}`, message.id)
                console.log('SUCCESS | facebook downloader 2')
            }).catch((err) => {
                iluser.reply(message.from, `Maaf, Terjadi Kesalahan`, message.id)
                console.log('FAILED | Facebook downloader 2')
                iluser.sendText(ownerNumber, 'Error Facebook 2: '+ err)
            })
        }
            break
        case prefix+'fb':
        case prefix+'facebook':{
            const disable = await getDB.cek_disable(message.from, `${prefix}fb`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
                const link = args[1]
                if(!link.includes('facebook.com')) return await iluser.reply(message.from, "Maaf, url tidak valid bersumber dari facebook.com", message.id)
require('fb-video-downloader').getInfo(q).then(info => {
console.log(JSON.stringify(info, null, 2))
iluser.sendFileFromUrl(from, info.download.sd, 'iluser.mp4', `Judul: ${info.title} ${mess.iklan}`,id)
limitAdd(serial)
console.log(color('SUCCESS | Facebook downloader', 'olive'))
}).catch((err) => {
                iluser.reply(message.from, `Maaf, Terjadi Kesalahan`, message.id)
                console.log('FAILED | Facebook downloader 2')
                iluser.sendText(ownerNumber, 'Error Facebook 2: '+ err)
            })
        }
            break
        case prefix+'fb':{
                const disable = await getDB.cek_disable(message.from, `${prefix}fb`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            try {
                if (args.length === 1) return iluser.reply(message.from, 'Linknya mana?', message.id)
               if (isLimit(serial)) return 
            
                limitAdd(serial)
                const link = args[1]
                if(!link.includes('facebook.com')) return await iluser.reply(message.from, "Maaf, url tidak valid bersumber dari facebook.com", message.id)
                const puppeteer = require('puppeteer')
                const browser = await puppeteer.launch({headless: true, args: [
                  "--disable-notifications"
                ]}); 
                try {
                    
                    const page = await browser.newPage();
                    await page.goto('https://sfull.net/', {waitUntil: 'networkidle2'});  
                    await page.type('input[id="url"]', link);
                    await page.keyboard.press('Enter');
                    await page.waitForSelector('div[class="abuttons"]', {visible: true})
                    const getDownload = await page.$$('div[class="abuttons"] a');
                    await getDownload[getDownload.length-1].click()
                    await page.waitForSelector('div[class="col-12 btn-sfull"]', {visible: true})
                    let spanHref = await page.$eval('div[class="col-12 btn-sfull"] center a', span => span.getAttribute('href'));  
                    await browser.close()
                   // if (!isPremium) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`*FACEBOOK DOWNLOADER*\n\n${mess.noprem}\n[${spanHref}]`, message.id);
                    await iluser.sendFileFromUrl( message.from,  spanHref, `inifile.mp4`, `${mess.iklann}`, message.id)
                    console.log(color('SUCCESS | Facebook downloader', 'olive'))
                } catch (error) {
                    await iluser.reply(message.from, "Maaf, tidak menemukan link download mungkin postingan private.", message.id)
                    console.log(color('FAILED | Facebook downloader', 'red'))
                    iluser.sendText(ownerNumber, `Error Facebook downloader:\n${error}`)
                    await browser.close()
                }
            } catch (error) {
                await iluser.reply(message.from, "error!", message.id)
                console.log(color('FAILED | Facebook downloader', 'red'))
                iluser.sendText(ownerNumber, `Error Facebook downloader:\n${error}`)
            }
        }
        break
        case prefix+'tiktok':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tiktok`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : ${prefix}tiktok https://vt.tiktok.com/xnxx/`, message.id)
            tiktokk(args[1]).then(async(res) => {
                let { video, title, image, desk, dibuat, duration } = await res
                let ttiktok = `*TIKTOK DOWNLOADER*\n\n• *Judul* : ${title}\n• Deskripsi : ${desk}\n• Durasi : ${duration}\n• Dibuat : ${dibuat}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                //iluser.sendFileFromUrl(message.from, image, 'thumb.jpg', ttiktok, message.id)
               // if (!isPremium) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`*TIKTOK DOWNLOADER*\n\n${mess.noprem}\n[${video}]`, message.id);
               // await iluser.sendFileFromUrl(message.from, video, `${title}.mp4`, `Tiktok X iluser_BOT ${mess.iklan}`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                const responses = await fetch(video);
                    const buffer = await responses.buffer();
                    await fs.writeFile(`./media/tiktod.mp4`, buffer)
                    await iluser.sendFile(message.from,'./media/tiktod.mp4', 'tiktod.mp4', `${mess.iklann}`, message.id)
                    console.log('SUCCESS | tiktok downloader')
                    await limitAdd(serial)
            }).catch((err) => {
                console.log('FAILED | tiktok downloader');
                iluser.reply(message.from, `Maaf, Terjadi Kesalahan`, message.id)
                iluser.sendText(ownerNumber, 'Error tiktok downloader: '+ err)
            })
        }
            break
        case prefix+'smule':{
                const disable = await getDB.cek_disable(message.from, `${prefix}smule`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : ${prefix}smule https://www.smule.com/p/xnxx`, message.id)
            
            smule(args[1]).then(async(res) => {
                let { Type, title, url, image } = await res
                let tsmule = `*SMULE DOWNLOADER*\n\n• *Judul* : ${title}\n• *Type:* ${Type}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                iluser.sendFileFromUrl(message.from, image, 'thumb.jpg', tsmule, message.id)
                await iluser.sendFileFromUrl(message.from, url, `${title}.mp3`, `Smule X iluser_BOT ${mess.iklan}`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                console.log('SUCCESS | smule downloader')
                await limitAdd(serial)
            }).catch((err) => {
                console.log('FAILED | smule downloader');
                iluser.reply(message.from, `Error!`, message.id)
                iluser.sendText(ownerNumber, 'Error smule downloader '+ err)
            })
        }
            break
        case prefix+'starmaker':{
                const disable = await getDB.cek_disable(message.from, `${prefix}starmaker`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}starmaker [linkStarmaker]`, message.id)
            
            starmaker(args[1]).then(async(res) => {
                let { image, desc, url, title } = await res
                let tstarmaker = `*STARMAKER DOWNLOADER*\n\n• *Judul* : ${title}\n• *Deskripsi:* ${desc}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                iluser.sendFileFromUrl(message.from, image, 'thumb.jpg', tstarmaker, message.id)
                await iluser.sendFileFromUrl(message.from, url, `${title}.mp3`, '', message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                console.log('SUCCESS | starmaker downloader')
                await limitAdd(serial)
            }).catch((err) => {
                console.log('FAILED | starmaker downloader');
                iluser.reply(message.from, `Error!`, message.id)
                iluser.sendText(ownerNumber, 'Error starmaker downloader '+ err)
            })
        }
            break
        case prefix+'tt': 
        case prefix+'tik': {
                const disable = await getDB.cek_disable(message.from, `${prefix}tt`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
        if (!isOwner) return iluser.reply(message.from, 'Ditutup tod', message.id)
            try {
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, 'Linknya mana?', message.id)
                if (isLimit(serial)) return 
            
                limitAdd(serial)
                const link = args[1]
                //if(!link.includes('instagram.com')) return await iluser.reply(message.from, "Maaf, url tidak valid bersumber dari facebook.com", message.id)
                const puppeteer = require('puppeteer')
                const browser = await puppeteer.launch({headless: false, args: [
                  "--disable-notifications"
                ]}); 
                try {
                    
                    const page = await browser.newPage();
                    await page.goto('https://ssstik.io/id', {waitUntil: 'networkidle2'});  
                    await page.type('#main_page_text', link);
                    await page.keyboard.press('Enter');                    
                    await page.waitForSelector('div[class="result_overlay"]', {visible: true})
                    let spanHref = await page.$eval('div[class="result_overlay"] a', span => span.getAttribute('href'));  
                    await browser.close()
                   // if (!isPremium) return await iluser.sendImage(message.from, './logo.png', 'kntl.png',`*TIKTOK DOWNLOADER*\n\n${mess.noprem}\n[${spanHref}]`, message.id);
                    //await iluser.sendFile(message.from,  spanHref, `tiktod.mp4`, '', message.id)
                    const responses = await fetch(spanHref);
                    const buffer = await responses.buffer();
                    await fs.writeFile(`./media/tiktod.mp4`, buffer)
                    await iluser.sendFile(message.from,'./media/tiktod.mp4', 'iluser.mp4',`${mess.iklann}`, message.id)

                } catch (error) {
                    await iluser.reply(message.from, "Maaf, tidak menemukan link download mungkin postingan private.", message.id)
                    await browser.close()
                }
            } catch (error) {
                console.log(error)
            }
        }
        break
        case prefix+'instastory':
        case prefix+'igstory':
        case prefix+'its':{
                const disable = await getDB.cek_disable(message.from, `${prefix}igstory`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}igstory namauser`, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                its(args[1])
                    .then(async ({ result }) => {
                        for (let i = 0; i < result.story.itemlist.length; i++) {
                            const { urlDownload } = result.story.itemlist[i]
                            await iluser.sendFileFromUrl(message.from, urlDownload, '', `${mess.iklann}`, message.id)
                            console.log('SUCCESS | instastory')
                        }
                    })
                    .catch(async (err) => {
                        await iluser.reply(message.from, 'Error!', message.id)
                        iluser.sendText(ownerNumber, 'Error instastory: '+ err)
                        console.log('FAILED | instastory')
                    })
                }
                break

        //AUDIO MENU
        case prefix+'tomp3':
        case prefix+'toaudio':{
                const disable = await getDB.cek_disable(message.from, `${prefix}tomp3`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                             fs.readFile(fileOutputPath, { encoding: 'base64' }, (err, base64) => {
                               if (err) return iluser.sendText(message.from, 'Ada yang error saat membaca file .mp3') && console.log(color('[ERROR]', 'red'), err)
                            iluser.sendFile(message.from, fileOutputPath, 'audio.mp3', '', message.id)
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
            
                    await limitAdd(serial)
                    if (isQuotedAudio) {
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
            
                  await limitAdd(serial)
                    if (isQuotedAudio) {
                       // iluser.reply(message.from, mess.wait, message.id)
                        const encryptMedia = isQuotedAudio ? quotedMsg : message
                        const _mimetype = isQuotedAudio ? quotedMsg.mimetype : mimetype
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
                                        fs.readFile(fileOutputPath, { encoding: 'base64' }, (err, base64) => {
                                         if (err){
                                            return iluser.reply(message.from, 'Ada yang error saat membaca file .mp3', message.id)
                                            iluser.sendText(ownerNumber, 'Error distord:\n'+err)
                                            console.log(color('[ERROR]', 'red'), err)
                                         }
                                        iluser.sendFile(message.from, fileOutputPath, 'distorted.mp3', '', message.id)
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
            
            await limitAdd(serial)
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
        case prefix+'setvn': {
                const disable = await getDB.cek_disable(message.from, `${prefix}setvn`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (!isOwner && !isPremium && !isPilot) return await iluser.reply(message.from, 'Nte premium?', message.id)
            let nmfil = body.slice(7)
            if (isQuotedAudio){
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const filename = `./media/audio/${nmfil}.mp3`
                await fs.writeFileSync(filename, mediaData)
                vnlist.push(nmfil)
                fs.writeFileSync('./lib/database/vn.json', JSON.stringify(vnlist))
                await iluser.reply(message.from, `voice note dengan nama *${nmfil}* berhasil disimpan!`, message.id)
                console.log(color('SUCCESS | saving voice note', 'olive'))
            }else if(isMedia && type === 'audio'){
                const mediaData = await decryptMedia(message, uaOverride)
                const filename = `./media/audio/${nmfil}.mp3`
                await fs.writeFileSync(filename, mediaData)
                vnlist.push(nmfil)
                fs.writeFileSync('./lib/database/vn.json', JSON.stringify(vnlist))
                await iluser.reply(message.from, `voice note dengan nama *${nmfil}* berhasil disimpan!`, message.id)
                console.log(color('SUCCESS | saving voice note', 'olive'))
            }else{
                await iluser.reply(message.from, `Error! Silahkan coba kembali...`, message.id)
                console.log(color('FAILED | saving voice note', 'red'))
            }
        }
            break
        case prefix+`vnlist`:
        case prefix+`listvn`:
        let vn = `Daftar voice note tersimpan\n`
            for (let i of vnlist) {
                vn += `• ${i}\n`
            }
            await iluser.reply(message.from, vn, message.id)
            console.log(color('SUCCESS | voice note list', 'olive'))
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
                const q = body.slice(9)
                if (!q) return await iluser.reply(message.from, `Yang di cari apa tod?`, message.id)
                let search = await axios.get('http://api.hurtzcrafter.xyz/wattpad-search?q='+q)
                await iluser.sendFileFromUrl(message.from, search.data.result[0].thumb, 'watpad.jpg',` *WATTPAD SEARCH*

Gunakan *${prefix}wpred url* untuk membaca

*Judul:* ${search.data.result[0].title}
*Id:* ${search.data.result[0].id}
*Url:* ${search.data.result[0].url}

*Judul:* ${search.data.result[1].title}
*Id:* ${search.data.result[1].id}
*Url:* ${search.data.result[1].url}

*Judul:* ${search.data.result[2].title}
*Id:* ${search.data.result[2].id}
*Url:* ${search.data.result[2].url}

*Judul:* ${search.data.result[3].title}
*Id:* ${search.data.result[3].id}
*Url:* ${search.data.result[3].url}

*Judul:* ${search.data.result[4].title}
*Id:* ${search.data.result[4].id}
*Url:* ${search.data.result[4].url}

*Judul:* ${search.data.result[5].title}
*Id:* ${search.data.result[5].id}
*Url:* ${search.data.result[5].url} ${mess.iklan}`+ '', message.id)
            .then(() => console.log(color('SUCCESS | wattpad search', 'olive')))
                    .catch(async (err) => {
                        await iluser.reply(message.from, 'Error!', message.id)
                        iluser.sendText(ownerNumber, `error wattpad search:\n${err}`)
                        console.log(color('FAILED | wattpad search', 'red'))
                    })
                }
                break
            case prefix+'wpread':{//ILUSER
                const disable = await getDB.cek_disable(message.from, `${prefix}wpread`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
                const q = body.slice(8)
                const wattp = await axios.get('http://api.hurtzcrafter.xyz/wattpad-read?url='+ q +'')
                //const trasnlatennya = await translate(wattp.data.result.read_body, 'id') // KALO MAU AKTIFIN AUTO TRANSLATE
                await iluser.reply(message.from, ' *WATTPAD READ*\n\n• Judul : '+ `${wattp.data.result.title}` +'\n• Penulis : '+ `${wattp.data.result.author.name}` +'\n• Halaman Selanjutnya : '+ `${wattp.data.result.next_page_url}` +'\n• Isi : \n'+ `${wattp.data.result.read_body} ${mess.iklan}`+ '', message.id)
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
                limitAdd(serial)
                axios.get('https://masgi.herokuapp.com/api/cerpen')
                    .then(res => { iluser.reply(message.from, res.data.data, message.id)
                        console.log('SUCCESS | cerpen')
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
                limitAdd(serial)
                fetch('https://raw.githubusercontent.com/TheSploit/CreepyFact/main/creepy.txt')
                    .then((res) => res.text())
                    .then(async (body) => {
                        let creepyx = body.split('\n')
                        let creepyz = creepyx[Math.floor(Math.random() * creepyx.length)]
                        await iluser.reply(message.from, creepyz, message.id)
                        console.log('SUCCESS | creepyfact')
                    })
                    .catch(async (err) => {
                        console.log(color('FAILED | creepyfact', 'red'))
                        iluser.sendText(ownerNumber, `Error creepyfact: ${err}`)
                        iluser.reply(message.from, 'Error', message.id)
                    })
                }
                break
        case prefix+'kebalik':{
                const disable = await getDB.cek_disable(message.from, `${prefix}kebalik`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
                    if (args.length == 1) return iluser.reply(message.from, `Fitur untuk membalikkan huruf\nContoh : ${prefix}kebalik kok kebalik hurufnya`, message.id)
                    const rev = body.slice(9)
                    axios.get(`https://videfikri.com/api/hurufterbalik/?query=${rev}`).then(res => {
                        console.log(rev)
                        const balikin = `${res.data.result.kata}`
                        iluser.reply(message.from, balikin, message.id)
                        console.log(balikin)
                    })
                }
                break
        case prefix+'cersex':{
                const disable = await getDB.cek_disable(message.from, `${prefix}cersex`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return  
            if (!isPremium) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            const cersex = await axios.get(`https://api.vhtear.com/cerita_sex&apikey=${vhtearkey}`)
            if (cersex.data.error) {
                iluser.reply(message.from, cersex.data.error, message.id)
            } else {
                iluser.sendFileFromUrl(message.from, cersex.data.result.image, '', `*Judul:* ${cersex.data.result.judul}\n*Result:* ${cersex.data.result.cerita}`, message.id)
            }
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
                await limitAdd(serial)
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
                    const agggg = await get.get(`https://api-jojo.herokuapp.com/api/renungan`).json()
                    try {
                        const {
                            Isi,
                            judul,
                            pesan
                        } = agggg
                        const rn = `• *Judul* : ${judul}\n• *Pesan* : ${pesan}\n• *Isi* : ${Isi}`
                        iluser.reply(message.from, rn, message.id)
                        console.log(color('SUCCESS | renungan', 'olive'))
                    await limitAdd(serial)
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
                await limitAdd(serial)
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
             const bucin = await get.get('https://arugaz.herokuapp.com/api/howbucins').json()
             await iluser.reply(message.from, `${bucin.desc}`, message.id) 
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
        case prefix+`hilih`:{
                const disable = await getDB.cek_disable(message.from, `${prefix}hilih`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
                    if (quotedMsg) {
                        const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
                        const skyaaara = await get.get('https://videfikri.com/api/hilih/?query=' + quoteText).json()
                        iluser.reply(message.from, skyaaara.result.kata, message.id)
                        console.log(color('SUCCESS | hilih text', 'olive'))
                    } else {
                        const daasda = body.slice(7)
                        const skyaaara = await get.get('https://videfikri.com/api/hilih/?query=' + daasda).json()
                        iluser.reply(message.from, skyaaara.result.kata, message.id)
                        console.log(color('SUCCESS | hilih text', 'olive'))
                    }
                }
                    break
        case prefix+`alay`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}alay`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
        case prefix+'lirik':{
            const disable = await getDB.cek_disable(message.from, `${prefix}lirik`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            if (args.length == 1) return iluser.reply(message.from, `ontoh ${prefix}lirik aku bukan boneka`, message.id)
            const lagu = body.slice(7)
            const lirik = await liriklagu(lagu)
            iluser.reply(message.from, `${lirik} ${mess.iklan}`, message.id)
        }
        break
        case prefix+'chord':{
            const disable = await getDB.cek_disable(message.from, `${prefix}chord`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `ontoh ${prefix}chord aku bukan boneka`, message.id)
            const query__ = body.slice(7)
            const chord = await axios.get('https://tobz-api.herokuapp.com/api/chord?q='+ query__ + '&apikey='+tobzkey)
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
            await limitAdd(serial)
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
        case prefix+'zodiak2':{
            const disable = await getDB.cek_disable(message.from, `${prefix}zodiak2`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *${prefix}zodiak [zodiak kamu]*\nContoh : *${prefix}zodiak scorpio*`, message.id)
            try {
            const resp = await axios.get('https://api.vhtear.com/zodiak?query=' + body.slice(9) + '&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const anm2 = `• Zodiak : ${resp.data.result.zodiak}\n• Ramalan : ${resp.data.result.ramalan}\n• Nomor Keberuntungan : ${resp.data.result.nomorKeberuntungan}\n• Motivasi : ${resp.data.result.motivasi}\n• Inspirasi : ${resp.data.result.inspirasi}`
            iluser.reply(message.from, `${anm2} ${mess.iklan}`, message.id)
            } catch (err) {
                console.log(color('FAILED | zodiak2', 'red'))
                iluser.sendText(ownerNumber, `Error zodiak2: ${err}`)
                iluser.reply(message.from, 'Error', message.id)
           }
        }
        break

        //IMAGE MENU
        case prefix+'wall':
        case prefix+'wallpaper':{
            const disable = await getDB.cek_disable(message.from, `${prefix}wall`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            {
            var ptrss = ['abstract wallpaper','cinematic wallpaper','dark wallpaper','mountain wallpaper','galaxy wallpaper','wallpaper city','space wallpaper','nature wallpaper','dark wallpaper'];
            var ptrsqq = ptrss[Math.floor(Math.random() * ptrss.length)];
            const ptrst = await fetch(`https://api.vhtear.com/pinterest?query=${ptrsqq}&apikey=${vhtearkey}`)
            if (!ptrst.ok) throw new Error(`Error Pinterest : ${ptrst.statusText}`)
            const ptrs = await ptrst.json()
            const ptrsn = ptrs.result
            const b = JSON.parse(JSON.stringify(ptrsn))
            const ptrs2 =  b[Math.floor(Math.random() * b.length)]
            const image = await bent("buffer")(ptrs2)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            await iluser.sendImage(message.from, base64, 'ptrs.jpg', `${mess.iklann}`, message.id)
            await limitAdd(serial)
            }
        }
            break
        case prefix+'toimg':{
            const disable = await getDB.cek_disable(message.from, `${prefix}toimg`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (quotedMsg && quotedMsg.type == 'sticker') {
                if (isLimit(serial)) return 
            
                await limitAdd(serial)
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
            
            await limitAdd(serial)
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
                }else {                 
                await iluser.sendFile(message.from, './media/img/contoh.jpg', 'Tutor.jpg', 'Neh contoh mhank!', message.id)
                }
            }
            break
        case prefix+'gambar':
        case prefix+'images':{
            const disable = await getDB.cek_disable(message.from, `${prefix}gambar`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}gambar iluser_BOT*`, message.id)
            const ptrsq = body.slice(8)
            const ptrst = await fetch(`https://api.vhtear.com/pinterest?query=${ptrsq}&apikey=${vhtearkey}`)
            if (!ptrst.ok) throw new Error(`Error Pinterest : ${ptrst.statusText}`)
            const ptrs = await ptrst.json()
            const ptrsn = ptrs.result
            const b = JSON.parse(JSON.stringify(ptrsn))
            const ptrs2 =  b[Math.floor(Math.random() * b.length)]
            const image = await bent("buffer")(ptrs2)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            await iluser.sendImage(message.from, base64, 'ptrs.jpg', `Hasil Pencarian: *${ptrsq}* di server Pinterest${mess.iklan}`, message.id)
            await limitAdd(serial)
        }
        break
        case prefix+'googleimage':{
            const disable = await getDB.cek_disable(message.from, `${prefix}googleimage`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            await limitAdd(serial)
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
                        console.log('SUCCESS | googleimage')
                        })
                    }
                }
            }
        }
        break


        case prefix+'disable':{
            const menu = body.slice(9);
            const list = [`${prefix}brainly`,`${prefix}nulis`,`${prefix}nulis2`,`${prefix}nulis3`,`${prefix}wiki`,`${prefix}kbbi`,`${prefix}translate`,`${prefix}tr`,`${prefix}google`,`${prefix}totext`,`${prefix}hitung`,`${prefix}playstore`,`${prefix}apkpure`,`${prefix}shopee`,`${prefix}newstickerline`,`${prefix}ytsearch`,`${prefix}spek`,`${prefix}motor`,`${prefix}mobil`,`${prefix}alamat`,`${prefix}resep`,`${prefix}checkip`,`${prefix}checkip2`,`${prefix}jarak`,`${prefix}heroml`,`${prefix}jadwalbola`,`${prefix}waktu`,`${prefix}news`,`${prefix}covidindo`,`${prefix}covid`,`${prefix}infonomor`,`${prefix}resi`,`${prefix}kurs`,`${prefix}ceklokasi`,`${prefix}quran`,`${prefix}jadwalshalat`,`${prefix}tafsir`,`${prefix}infosurah`,`${prefix}listsurah`,`${prefix}stiker`,`${prefix}sfire`,`${prefix}slight`,`${prefix}ttp`,`${prefix}attp`,`${prefix}ttp2`,`${prefix}ttg`,`${prefix}memestiker`,`${prefix}findsticker`,`${prefix}sline`,`${prefix}video`,`${prefix}getvideo`,`${prefix}music`,`${prefix}getmusik`,`${prefix}asupan`,`${prefix}yt`,`${prefix}ytmp3`,`${prefix}lagu`,`${prefix}joox`,`${prefix}ig`,`${prefix}ig2`,`${prefix}tw`,`${prefix}tw2`,`${prefix}pin`,`${prefix}fb`,`${prefix}fb2`,`${prefix}tiktok`,`${prefix}tt`,`${prefix}smule`,`${prefix}starmaker`,`${prefix}igstory`,`${prefix}tomp3`,`${prefix}bass`,`${prefix}distord`,`${prefix}tts`,`${prefix}setvn`,`${prefix}v`,`${prefix}listvn`,`${prefix}wattpad`,`${prefix}wpread`,`${prefix}cerpen`,`${prefix}puisi`,`${prefix}kebalik`,`${prefix}creepyfact`,`${prefix}fakta`,`${prefix}cersex`,`${prefix}bacot`,`${prefix}bacotadd`,`${prefix}renungan`,`${prefix}pantun`,`${prefix}bucin`,`${prefix}katabijak`,`${prefix}katasenja`,`${prefix}katafiersa`,`${prefix}quotes`,`${prefix}hilih`,`${prefix}alay`,`${prefix}chord`,`${prefix}lirik`,`${prefix}zodiak`,`${prefix}zodiak2`,`${prefix}wall`,`${prefix}toimg`,`${prefix}textmaker`,`${prefix}gambar`,`${prefix}googleimage`,`${prefix}twtstalk`,`${prefix}tiktokstalk`,`${prefix}igstalk`,`${prefix}smulestalk`,`${prefix}phcomment`,`${prefix}quotemaker`,`${prefix}quoteit`,`${prefix}maps`,`${prefix}pokemon`,`${prefix}kucing`,`${prefix}anjing`,`${prefix}memeindo`,`${prefix}meme`,`${prefix}qrcode`,`${prefix}dadu`,`${prefix}koin`,`${prefix}cewe`,`${prefix}cowo`,`${prefix}ptlvid`,`${prefix}infogempa`,`${prefix}ssphone`,`${prefix}sspc`,`${prefix}springflow`,`${prefix}watersplash`,`${prefix}cloudy`,`${prefix}sketch`,`${prefix}threats`,`${prefix}glass`,`${prefix}greyscale`,`${prefix}invert`,`${prefix}invertgrey`,`${prefix}brightness`,`${prefix}sepia`,`${prefix}burik`,`${prefix}blurfry`,`${prefix}magik`,`${prefix}captcha`,`${prefix}kpop`,`${prefix}kue`,`${prefix}chalktext`,`${prefix}wooden-sign`,`${prefix}salju`,`${prefix}bioskop`,`${prefix}kalung`,`${prefix}gelang`,`${prefix}beach-sign`,`${prefix}bordir2`,`${prefix}blood2`,`${prefix}window`,`${prefix}snow-sign`,`${prefix}kapal`,`${prefix}pesawat`,`${prefix}jalan`,`${prefix}einstein`,`${prefix}lipstick`,`${prefix}typewriter`,`${prefix}graffiti`,`${prefix}graffiti2`,`${prefix}graffiti3`,`${prefix}tahta`,`${prefix}goreng`,`${prefix}carbon`,`${prefix}neon-sign`,`${prefix}karat`,`${prefix}kayu`,`${prefix}tato`,`${prefix}embun`,`${prefix}trumptwt`,`${prefix}silktext`,`${prefix}mymind`,`${prefix}coffee`,`${prefix}ukir`,`${prefix}smoketext`,`${prefix}kanna`,`${prefix}sarah`,`${prefix}resend`,`${prefix}film`,`${prefix}kadargay`,`${prefix}aiquote`,`${prefix}subreddit`,`${prefix}artinama`,`${prefix}pasangan`,`${prefix}nomorhoki`,`${prefix}shorturl`,`${prefix}readmore`,`${prefix}imgcompress`,`${prefix}nickepep`,`${prefix}wasted`,`${prefix}gdrive`,`${prefix}kiss`,`${prefix}jail`,`${prefix}wame`,`${prefix}imgtourl`,`${prefix}tod`,`${prefix}truth`,`${prefix}dare`,`${prefix}family100`,`${prefix}caklontong`,`${prefix}tebakgambar`,`${prefix}apakah`,`${prefix}bisakah`,`${prefix}nilai`,`${prefix}kapankah`,`${prefix}trash`,`${prefix}hitler`,`${prefix}babi`,`${prefix}ganteng`,`${prefix}cantik`,`${prefix}getpp`,`${prefix}getsts`,`${prefix}slap`,`${prefix}hug`,`${prefix}pat`,`${prefix}afk`,`${prefix}groupinfo`,`${prefix}nhder`,`${prefix}randomkiss`,`${prefix}randomhug`,`${prefix}randomcry`,`${prefix}fetish`,`${prefix}husbu`,`${prefix}randomnekonime`,`${prefix}randomanime`,`${prefix}lewds`,`${prefix}loli`,`${prefix}malanime`,`${prefix}wallanime`,`${prefix}wait`,`${prefix}wait`,`${prefix}waifu`,`${prefix}xnxx`,`${prefix}hehe`,`${prefix}randomblowjob`,`${prefix}xxx`,`${prefix}getxxx`,`${prefix}xvideos`,`${prefix}getxvideos`];
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
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
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            const menu = body.slice(8);
            const list = [`${prefix}brainly`,`${prefix}nulis`,`${prefix}nulis2`,`${prefix}nulis3`,`${prefix}wiki`,`${prefix}kbbi`,`${prefix}translate`,`${prefix}tr`,`${prefix}google`,`${prefix}totext`,`${prefix}hitung`,`${prefix}playstore`,`${prefix}apkpure`,`${prefix}shopee`,`${prefix}newstickerline`,`${prefix}ytsearch`,`${prefix}spek`,`${prefix}motor`,`${prefix}mobil`,`${prefix}alamat`,`${prefix}resep`,`${prefix}checkip`,`${prefix}checkip2`,`${prefix}jarak`,`${prefix}heroml`,`${prefix}jadwalbola`,`${prefix}waktu`,`${prefix}news`,`${prefix}covidindo`,`${prefix}covid`,`${prefix}infonomor`,`${prefix}resi`,`${prefix}kurs`,`${prefix}ceklokasi`,`${prefix}quran`,`${prefix}jadwalshalat`,`${prefix}tafsir`,`${prefix}infosurah`,`${prefix}listsurah`,`${prefix}stiker`,`${prefix}sfire`,`${prefix}slight`,`${prefix}ttp`,`${prefix}attp`,`${prefix}ttp2`,`${prefix}ttg`,`${prefix}memestiker`,`${prefix}findsticker`,`${prefix}sline`,`${prefix}video`,`${prefix}getvideo`,`${prefix}music`,`${prefix}getmusik`,`${prefix}asupan`,`${prefix}yt`,`${prefix}ytmp3`,`${prefix}lagu`,`${prefix}joox`,`${prefix}ig`,`${prefix}ig2`,`${prefix}tw`,`${prefix}tw2`,`${prefix}pin`,`${prefix}fb`,`${prefix}fb2`,`${prefix}tiktok`,`${prefix}tt`,`${prefix}smule`,`${prefix}starmaker`,`${prefix}igstory`,`${prefix}tomp3`,`${prefix}bass`,`${prefix}distord`,`${prefix}tts`,`${prefix}setvn`,`${prefix}v`,`${prefix}listvn`,`${prefix}wattpad`,`${prefix}wpread`,`${prefix}cerpen`,`${prefix}puisi`,`${prefix}kebalik`,`${prefix}creepyfact`,`${prefix}fakta`,`${prefix}cersex`,`${prefix}bacot`,`${prefix}bacotadd`,`${prefix}renungan`,`${prefix}pantun`,`${prefix}bucin`,`${prefix}katabijak`,`${prefix}katasenja`,`${prefix}katafiersa`,`${prefix}quotes`,`${prefix}hilih`,`${prefix}alay`,`${prefix}chord`,`${prefix}lirik`,`${prefix}zodiak`,`${prefix}zodiak2`,`${prefix}wall`,`${prefix}toimg`,`${prefix}textmaker`,`${prefix}gambar`,`${prefix}googleimage`,`${prefix}twtstalk`,`${prefix}tiktokstalk`,`${prefix}igstalk`,`${prefix}smulestalk`,`${prefix}phcomment`,`${prefix}quotemaker`,`${prefix}quoteit`,`${prefix}maps`,`${prefix}pokemon`,`${prefix}kucing`,`${prefix}anjing`,`${prefix}memeindo`,`${prefix}meme`,`${prefix}qrcode`,`${prefix}dadu`,`${prefix}koin`,`${prefix}cewe`,`${prefix}cowo`,`${prefix}ptlvid`,`${prefix}infogempa`,`${prefix}ssphone`,`${prefix}sspc`,`${prefix}springflow`,`${prefix}watersplash`,`${prefix}cloudy`,`${prefix}sketch`,`${prefix}threats`,`${prefix}glass`,`${prefix}greyscale`,`${prefix}invert`,`${prefix}invertgrey`,`${prefix}brightness`,`${prefix}sepia`,`${prefix}burik`,`${prefix}blurfry`,`${prefix}magik`,`${prefix}captcha`,`${prefix}kpop`,`${prefix}kue`,`${prefix}chalktext`,`${prefix}wooden-sign`,`${prefix}salju`,`${prefix}bioskop`,`${prefix}kalung`,`${prefix}gelang`,`${prefix}beach-sign`,`${prefix}bordir2`,`${prefix}blood2`,`${prefix}window`,`${prefix}snow-sign`,`${prefix}kapal`,`${prefix}pesawat`,`${prefix}jalan`,`${prefix}einstein`,`${prefix}lipstick`,`${prefix}typewriter`,`${prefix}graffiti`,`${prefix}graffiti2`,`${prefix}graffiti3`,`${prefix}tahta`,`${prefix}goreng`,`${prefix}carbon`,`${prefix}neon-sign`,`${prefix}karat`,`${prefix}kayu`,`${prefix}tato`,`${prefix}embun`,`${prefix}trumptwt`,`${prefix}silktext`,`${prefix}mymind`,`${prefix}coffee`,`${prefix}ukir`,`${prefix}smoketext`,`${prefix}kanna`,`${prefix}sarah`,`${prefix}resend`,`${prefix}film`,`${prefix}kadargay`,`${prefix}aiquote`,`${prefix}subreddit`,`${prefix}artinama`,`${prefix}pasangan`,`${prefix}nomorhoki`,`${prefix}shorturl`,`${prefix}readmore`,`${prefix}imgcompress`,`${prefix}nickepep`,`${prefix}wasted`,`${prefix}gdrive`,`${prefix}kiss`,`${prefix}jail`,`${prefix}wame`,`${prefix}imgtourl`,`${prefix}tod`,`${prefix}truth`,`${prefix}dare`,`${prefix}family100`,`${prefix}caklontong`,`${prefix}tebakgambar`,`${prefix}apakah`,`${prefix}bisakah`,`${prefix}nilai`,`${prefix}kapankah`,`${prefix}trash`,`${prefix}hitler`,`${prefix}babi`,`${prefix}ganteng`,`${prefix}cantik`,`${prefix}getpp`,`${prefix}getsts`,`${prefix}slap`,`${prefix}hug`,`${prefix}pat`,`${prefix}afk`,`${prefix}groupinfo`,`${prefix}nhder`,`${prefix}randomkiss`,`${prefix}randomhug`,`${prefix}randomcry`,`${prefix}fetish`,`${prefix}husbu`,`${prefix}randomnekonime`,`${prefix}randomanime`,`${prefix}lewds`,`${prefix}loli`,`${prefix}malanime`,`${prefix}wallanime`,`${prefix}wait`,`${prefix}wait`,`${prefix}waifu`,`${prefix}xnxx`,`${prefix}hehe`,`${prefix}randomblowjob`,`${prefix}xxx`,`${prefix}getxxx`,`${prefix}xvideos`,`${prefix}getxvideos`];
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
        case prefix+'afk':{
                const disable = await getDB.cek_disable(message.from, `${prefix}afk`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
                await sleep(2000)
                if (!isGroupMsg) return await iluser.reply(message.from, `Hanya dapat digunakan di dalam grup`, message.id)
                //if (isAfkon) return await iluser.reply(message.from, `Fitur AFK telah diaktifkan sebelumnya.`, message.id)
                const reason = body.slice(5)
                addAfk(sender.id, time, reason)
                await iluser.sendTextWithMentions(message.from, `@${sender.id} sekarang AFK\n*Alasan:* ${reason}`, message.id)
                console.log(color(`SUCCESS | ${sender.id} Afk`, 'olive'))
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
            if (!isPilot && !isOwner) return  
            await iluser.reply(message.from, message.from, message.id)
            break

        case `${prefix}'phdl`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}phdl`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
                if (isGroupMsg) {
                    if (!isPremium) return await iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
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
                    if (mentionedJidList.length == 0) {
                        if (mentionedJidList[0] === botNumber) return await iluser.reply(message.from, `Format salah bang!`, message.id)
                        _premium.splice(premium.getPremiumPosition(mentionedJidList[0], _premium), 1)
                        fs.writeFileSync('./lib/database/premium.json', JSON.stringify(_premium))
                        await iluser.reply(message.from, `Sukses menghapus user premium`, message.id)
                    } else {
                        _premium.splice(premium.getPremiumPosition(args[1] + '@c.us', _premium), 1)
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
            if (!isPremium) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?`, message.id)
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
            const regex = new RegExp("\/d\/(.+)\/", 'gi')
            //if (!args[1].match(regex)) { await iluser.reply(message.from, `Contoh: ${prefix}gdrive https://drive.google.com/file/d/1Cd8KjB9-cUU_Jy8Q/view`, message.id) }
                const urla = args[1]
                const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                function niceBytes(x){
                    let l = 0, n = parseInt(x, 10) || 0;
                    while(n >= 1024 && ++l){
                        n = n/1024;
                    }
                    return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
                }
                const m = urla.match(regex)
                const fileid = m.toString().trimStart('/', 'd').trim('/');
                const linke = 'https://drive.google.com/file' + fileid + 'view?usp=sharing'
                fetch('https://gdbypass.host/api/?link='+linke)
                    .then((res) => {
                        statuss = res.statuss
                        return res.json()
                    })
                    .then(async(body) => {
                        const fileName = body.data.Filename
                        const size = body.data.Filesize
                        const newLink = body.data.NewUnlimitedURL
                        const ling = await urlShortener(newLink)
                            iluser.reply(message.from, `*GOOGLE DRIVE BYPASS*\n\n• *Nama File :* ${fileName}\n*• File Size :* ${niceBytes(size)}\n*• Short Link :* ${ling}`, message.id)
                            console.log(color('SUCCESS | google drive bypass', 'olive'))
                            limitAdd(serial)
                    })
                    .catch((err) => {
                        iluser.reply(message.from, `Maaf, Sepertinya Link Tidak Berhasil Di Bypass\n`, message.id)
                        console.log(color('FAILED | google drive bypass', 'red'))
                        iluser.sendText(ownerNumber, 'Error Gdrive bypass:\n' + err)
                    })
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
      return iluser.reply(message.from, `Waalaikumsalam wr.wb *${pushname}* 🙂 \nKetik ${prefix}menu untuk melihat fitur bot`, message.id);
      break
        case 'samlekom':
        case 'samlkom':
        case 'samlekum':
        case 'salamlekom':
        case 'salikum':
        case 'samlikum':
      return iluser.reply(message.from, `Salam macam apa ini anjing`, message.id)
        case prf+'help':
        case prf+'menu':
        case prf+'bot':
        case prf+'command':
        if (!isGroupMsg) return
        await iluser.reply(message.from, `Yang ${pushname} maksud mungkin ${prefix}menu`, message.id);
      break;
        case 'shalom':
        case 'salom':
        case 'shallom':
        case 'syaloom':
        case 'saloom':
        case 'syalom':
        case 'shaloom':
        case 'syalloom':
      return iluser.reply(message.from, `_Shallom *${undefined, pushname}*_ 🙂 \nKetik ${prefix}menu untuk melihat fitur bot`, message.id);
      break    
        case 'thanks':
        case 'thx':
        case 'tq':
        case 'terimakasih':
        case 'makasi':
        case 'terimakasi':
        case 'makasih':
        case 'thank':
        case 'arigato':
        case 'nuhun':
        case 'mksi':
        case 'mksii':
        case 'maksh':
        case 'thnk':
        case 'arigatou':
        case '#terimakasih':
      return iluser.reply(message.from, `Sama-sama *${undefined, pushname}* 🙂`, message.id);
      break

        case prefix+'threats':{
            const disable = await getDB.cek_disable(message.from, `${prefix}threats`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                
                await limitAdd(serial)
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
                
                await limitAdd(serial)
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
                
                await limitAdd(serial)
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
                await limitAdd(serial)
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
                await limitAdd(serial)
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
                
                await limitAdd(serial)
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
                await limitAdd(serial)
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
                
                await limitAdd(serial)
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
                
                await limitAdd(serial)
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
                
                await limitAdd(serial)
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
                await limitAdd(serial)
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
                await limitAdd(serial)
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
        case prefix+'silktext':{
            const disable = await getDB.cek_disable(message.from, `${prefix}silktext`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
                const q = body.slice(10)
                if (!q) return await iluser.reply(message.from, `Textnya mana?`, message.id)
                await iluser.sendFileFromUrl(message.from, `https://api.vhtear.com/silktext?text=${q}&apikey=${vhtearkey}`, `iluser.jpg`, `${mess.iklann}`, message.id)
                    .then(() => console.log(color('SUCCESS | silktext', 'olive')))
                    .catch(async (err) => {
                        console.error(err)
                        await iluser.reply(message.from, 'Error!', message.id)
                        console.log(color('FAILED | silktext', 'red'))
                        iluser.sendText(ownerNumber, 'Error silktext:\n' + err)
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
        case prefix+'coffee':{
            const disable = await getDB.cek_disable(message.from, `${prefix}coffee`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
                const q = body.slice(8)
                if (!q) return await iluser.reply(message.from, `Textnya mana?`, message.id)
                const cofcof = await axios.get(`https://tobz-api.herokuapp.com/api/photooxy?theme=coffee&text=${q}&apikey=${tobzkey}`)
                await iluser.sendFileFromUrl(message.from, cofcof.data.result, `iluser.jpg`, `${mess.iklann}`, message.id)
                    .then(() => console.log(color('SUCCESS | coffee image', 'olive')))
                    .catch(async (err) => {
                        console.error(err)
                        await iluser.reply(message.from, 'Error!', message.id)
                        console.log(color('FAILED | coffee image', 'red'))
                        iluser.sendText(ownerNumber, 'Error coffee image:\n' + err)
                    })
                }
                break
        case prefix+'kpop':
        case prefix+'k-pop':{
            const disable = await getDB.cek_disable(message.from, `${prefix}kpop`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
                const pelastik = await axios.get(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${tobzkey}`)
                await iluser.sendFileFromUrl(message.from, pelastik.data.result, `iluser.jpg`, `${mess.iklann}`, message.id)
                    .then(() => console.log(color('SUCCESS | kpop image', 'olive')))
                    .catch(async (err) => {
                        console.error(err)
                        await iluser.reply(message.from, 'Error!', message.id)
                        console.log(color('FAILED | kpop image', 'red'))
                        iluser.sendText(ownerNumber, 'Error kpop image:\n' + err)
                    })
                }
            break
        case prefix+'ukir':{
            const disable = await getDB.cek_disable(message.from, `${prefix}ukir`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            limitAdd(serial)
                const q = body.slice(6)
                if (!q) return await iluser.reply(message.from, `Textnya mana?`, message.id)
                const cofcoff = await axios.get(`https://tobz-api.herokuapp.com/api/photooxy?theme=wood_block&text=${q}&apikey=${tobzkey}`)
                await iluser.sendFileFromUrl(message.from, cofcoff.data.result, `iluser.jpg`, `${mess.iklann}`, message.id)
                    .then(() => console.log(color('SUCCESS | ukir image', 'olive')))
                    .catch(async (err) => {
                        console.error(err)
                        await iluser.reply(message.from, 'Error!', message.id)
                        console.log(color('FAILED | ukir image', 'red'))
                        iluser.sendText(ownerNumber, 'Error ukir image:\n' + err)
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
            case prefix+'film':{
                const disable = await getDB.cek_disable(message.from, `${prefix}film`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                await limitAdd(serial)
                //if (args.lenght === 1) return iluser.reply(message.from, 'Masukkan nama filmnya tol', message.id)
                const animdl = body.slice(6)
                const animekun = await axios.get(`https://api.vhtear.com/downloadfilm?judul=${animdl}&apikey=${vhtearkey}`)
                //if (animekun.error) return iluser.reply(message.from, animekun.data.result, message.id)
                console.log(color('Finding film...', 'olive'))  
                //console.log(`${animekun.data.result.data}`)  
                await iluser.reply(message.from, `*${animekun.data.result.judul}*

Resolusi: ${animekun.data.result.data[0].resolusi}
Url: ${animekun.data.result.data[0].urlDownload}

Resolusi: ${animekun.data.result.data[1].resolusi}
Url: ${animekun.data.result.data[1].urlDownload}

Resolusi: ${animekun.data.result.data[2].resolusi}
Url: ${animekun.data.result.data[2].urlDownload}

Resolusi: ${animekun.data.result.data[3].resolusi}
Url: ${animekun.data.result.data[3].urlDownload}

Resolusi: ${animekun.data.result.data[4].resolusi}
Url: ${animekun.data.result.data[4].urlDownload} ${mess.iklan}`, message.id)
                console.log(color('SUCCESS | film', 'olive'))   
            }
            break
            case prefix+'film':{
                const disable = await getDB.cek_disable(message.from, `${prefix}film`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                await limitAdd(serial)
                if (args.lenght === 1) return iluser.reply(message.from, 'Masukkan nama filmnya tol', message.id)
                const animdl = body.slice(6)
                const animekun = await get.get(`https://arugaz.herokuapp.com/api/sdmovie?film=${animdl}`).json()
                if (animekun.error) return iluser.reply(message.from, animekun.result, message.id)
                const { result } = animekun
                const { rating, sinopsis, thumb, title, video } = await result
                await iluser.sendFileFromUrl(message.from, thumb, 'animedl.jpg', `*FILM DITEMUKAN !*\n➤ Judul: ${title}\n➤ Sinopsis: ${sinopsis}\n➤ Rating: ${rating}\n➤ Link Download: ${video} ${mess.iklan}`, message.id)
                console.log(color('SUCCESS | film', 'olive'))   
            }
            break
        
        case prefix+'banchat':
            if (setting.banChats === true) return
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
                await limitAdd(serial)
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
        case prefix+'takestick':
        case prefix+'take':{
                const disable = await getDB.cek_disable(message.from, `${prefix}take`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                    if (isLimit(serial)) return 
                    if (!isPremium) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte Premium?', message.id)
                    await limitAdd(serial)
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
                                    await exec(`webpmux -set exif ./temp/takestick.exif ./temp/takestickstage_${sender.id}.webp -o ./temp/takestick_${sender.id}.webp`, { log: true })
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
                    if (!isPremium) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte Premium?', message.id)
                    if (quotedMsg && quotedMsg.type == 'sticker') {
                        argz = body.trim().split('|')
                        const mediaDataTake = await decryptMedia(quotedMsg)
                        await iluser.reply(message.from, `wait`, message.id)
                        const packnames = argz[1]
                        const authors = argz[2]
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaDataTake.toString('base64')}`
                        await iluser.sendImageAsStickerAsReply(message.from, imageBase64, { author: `${authors}`, pack: `${packnames}` })
                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                    } else {
                        await iluser.reply(message.from, `Format salah, Harap reply sticker dengan caption ${prefix}take pack|author`, message.id)
                    }
                }
                break
        case 'take':{
                    if (quotedMsg && quotedMsg.type == 'sticker') {
                        const mediaDataTake = await decryptMedia(quotedMsg)
                        const take = body.slice(5)
                        const packnames = take.split('|')[0]
                        const authors = take.split('|')[1]
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaDataTake.toString('base64')}`
                        await iluser.sendImageAsSticker(message.from, imageBase64, { author: `${authors}`, pack: `${packnames}` })
                        console.log(`SUCCESS | Takestick`)
                    } else {
                        await iluser.reply(message.from, `Wrong Format!`, message.id)
                    }
                }
            break
        case prefix+'nobg':{
                const disable = await getDB.cek_disable(message.from, `${prefix}nobg`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                if(isReg(obj)) return
                    if (isLimit(serial)) return
                    await limitAdd(serial)
                if (isMedia && type === 'image' || isQuotedImage){
                    const encryptMedi = isQuotedImage ? quotedMsg : message
                    const datanobg = await decryptMedia(encryptMedi, uaOverride)
                    const fotonobg = await uploadImages(datanobg , `FotoPiyo.${sender.id}`)
                   const nobgg = await axios.get(`https://api.vhtear.com/removebgwithurl?link=${fotonobg}&apikey=${vhtearkey}`, {author:'t.me/iluser_BOT', pack:'By: iluser_BOT WhatsApp'})
                   await iluser.sendStickerfromUrl(message.from, nobgg.data.result.image  ,'',  'Ini kak' , message.id)
                    console.log('Succes sending Sticker ')
                }
            }
            break
        case prefix+'sticker':
        case prefix+'setiker':
        case prefix+'stiker': 
        case prefix+'sk':{
            const disable = await getDB.cek_disable(message.from, `${prefix}stiker`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
                if (isMedia && isImage || isQuotedImage) {
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    webp.buffer2webpbuffer(mediaData, 'jpg', '-q 100')
                        .then(async (res) => {
                            sharp(res)
                                .resize(512, 512, {
                                    fit: 'contain',
                                    background: {
                                        r: 0,
                                        g: 0,
                                        b: 0,
                                        alpha: 0
                                    }
                                })
                                .toFile(`./temp/stage_${sender.id}.webp`, async (err) => {
                                    if (err) return console.error(err)
                                    await exec(`webpmux -set exif ./temp/data.exif ./temp/stage_${sender.id}.webp -o ./temp/${sender.id}.webp`, { log: true })
                                    if (fs.existsSync(`./temp/${sender.id}.webp`)) {
                                        const data = fs.readFileSync(`./temp/${sender.id}.webp`)
                                        const base64 = `data:image/webp;base64,${data.toString('base64')}`
                                        await iluser.sendRawWebpAsSticker(message.from, base64)
                                        //iluser.reply(message.from, `${mess.iklann}`, message.id)
                                        fs.unlinkSync(`./temp/${sender.id}.webp`)
                                        fs.unlinkSync(`./temp/stage_${sender.id}.webp`)
                                        fs.unlinkSync('./temp/data.exif')
                                    }
                                })
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await iluser.reply(message.from, 'Error!', message.id)
                        })
                    } else {
                        await iluser.reply(message.from, `kirim atau balas gambar dengan caption ${prefix}stiker ya tod!!!`, message.id)
                    }
                }
            break
        /* case prefix+'sticker':
        case prefix+'stiker':
        case prefix+'sk':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (isImage || isQuotedImage || isQuotedFile) {
        const encryptMedia = isQuotedImage || isQuotedFile ? quotedMsg : message
        const _mimetype = encryptMedia.mimetype
        const mediaData = await decryptMedia(encryptMedia)
        if (_mimetype === 'image/webp') iluser.sendRawWebpAsSticker(message.from, mediaData.toString('base64'), false)

        const sticker = await processSticker(mediaData, 'contain')
        await iluser.sendRawWebpAsSticker(message.from, sticker.toString('base64'), false)
       // iluser.reply(message.from, `${mess.iklann}`, message.id)
    } else iluser.reply(message.from, mess.error.St, message.id)
        break */
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
                await limitAdd(serial)
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
                await limitAdd(serial)
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
                const sketch = await axios.get(`https://api.zeks.xyz/api/sketchf?img=${getUrla}&apikey=vinzapi`)
                const sket = sketch.data
                await limitAdd(serial)
                iluser.sendImage(message.from, sket.result, 'thndr.jpg', `${mess.iklann}`, message.id)
                } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrla = await uploadImages(mediaData, false)
                const sketch = await axios.get(`https://api.zeks.xyz/api/sketchf?img=${getUrla}&apikey=vinzapi`)
                const sket = sketch.data
                await limitAdd(serial)
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
                const encryptMedi = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrla = await uploadImages(mediaData, false)
                const cloudy = await axios.get(`https://api.zeks.xyz/api/cloudy?img=${getUrla}&apikey=vinzapi`)
                const cloudyy = cloudy.data
                await limitAdd(serial)
                iluser.sendImage(message.from, cloudyy.result, 'thndr.jpg', `${mess.iklann}`, message.id)
                } else {
                await iluser.reply(message.from, 'Wrong Format!', message.id)
                }
            }
            break
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
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            isMuted(chatId) == false
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            var welgrp = welkom.includes(chat.id)
            var leftgrp = left.includes(chat.id)
           // var ngrp = nsfw_.includes(chat.id)
            var antlink = antilink.includes(chat.id)
            var antiporn = _antinsfw.includes(groupId)
           // var stprt = antisticker.includes(chat.id)
            var antbad = antibadword.includes(chat.id)
            var grouppic = await iluser.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic 
            }
            await iluser.sendFileFromUrl(message.from, pfp, 'group.png', `*GROUP INFO*

• Name : *${groupname}* 
• Members : *${totalMem}*
• Welcome Msg : ${welgrp ? '*ON*' : '*OFF*'}
• Left Msg: ${leftgrp ? '*ON*' : '*OFF*'}
• Anti Link : ${antlink ? '*ON*' : '*OFF*'}
• Anti Badword : ${antbad ? '*ON*' : '*OFF*'}
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
            await limitAdd(serial)
            const quotes = await axios.get('https://tobz-api.herokuapp.com/api/randomquotes?apikey='+tobzkey)
            iluser.reply(message.from, `${quotes.data.quotes}\n\n- ${quotes.data.author}`, message.id)
            }
            break;
        case prefix+'koin':{
            const disable = await getDB.cek_disable(message.from, `${prefix}koin`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const side = Math.floor(Math.random() * 2) + 1
            if (side == 1) {
              await iluser.sendStickerfromUrl(message.from, 'https://i.ibb.co/YTWZrZV/2003-indonesia-500-rupiah-copy.png', { method: 'get' })
             // await iluser.reply(message.from, `${mess.iklann}`, message.id)
            } else {
              await iluser.sendStickerfromUrl(message.from, 'https://i.ibb.co/bLsRM2P/2003-indonesia-500-rupiah-copy-1.png', { method: 'get' })
             // await iluser.reply(message.from, `${mess.iklann}`, message.id)
            }
        }
        break
        case prefix+'dadu':{
            const disable = await getDB.cek_disable(message.from, `${prefix}dadu`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const dice = Math.floor(Math.random() * 6) + 1
            await iluser.sendStickerfromUrl(message.from, 'https://www.random.org/dice/dice' + dice + '.png', { method: 'get' })
            //await iluser.reply(message.from, `${mess.iklann}`, message.id)
            }
            break
        case prefix+'ownerbot':
        case prefix+'owner':
        case prefix+'creator':
        case '#owner':
            await iluser.sendTextWithMentions(message.from, `My master @${ownerNumber}`, message.id)
            //iluser.reply(message.from, 'Silahkan hubungi creator bot dengan cara yang sopan dan langsung ke poin pembahasan', message.id)
            break
        case prefix+'resetbadword':
            if(isReg(obj)) return
                    if (isLimit(serial)) return 
            
                    await limitAdd(serial)
                    if (!isGroupAdmins) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?')  
                    if (!args.length === 1) return iluser.reply(message.from, `Masukkan nomornya, *GUNAKAN AWALAN 62*\ncontoh: #resetbadword 6285112554122 / ${prefix}resetbadword @member`, message.id) 
                    const nomer = args[1]
                    let text = nomer.replace(/[-\s+@c.us]/g,'')
                    const cus = text + '@c.us'
                        var found = false
                        Object.keys(msgBadword).forEach((i) => {
                            if(msgBadword[i].id == cus){
                                found = i
                            }
                        })
                        if (found !== false) {
                            msgBadword[found].msg = 1;
                            const result = 'DB Badword Spam has been reset'
                            console.log(msgBadword[found])
                            fs.writeFileSync('./lib/database/msgBadword.json',JSON.stringify(msgBadword));
                            iluser.reply(message.from, result, from)
                        } else {
                                iluser.reply(message.from, `${monospace(`Di database ngga ada nomer itu dik`)}`, message.id)
                        }
                break
        // ON OFF
        case `${prefix}autosticker`:
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan oleh Admin group!`, message.id)
            //if (!isBotGroupAdmins) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, message.id)
            if (args[1] == 'enable') {
                //var cek = autostick.includes(chatId);
                if(isautosticker){
                    return iluser.reply(message.from, `AutoSticker\n\n*ALREADY ACTIVATED*`, message.id)
                } else {
                    autostick.push(groupId)
                    fs.writeFileSync('./lib/database/autostick.json', JSON.stringify(autostick))
                    iluser.reply(message.from, `AutoSticker\n\n*ACTIVATED*`, message.id)
                }
            } else if (args[1] == 'disable') {
                //var cek = autostick.includes(chatId);
                if(!isautosticker){
                    return iluser.reply(message.from, `AutoSticker\n\n*ALREADY DEACTIVATED*`, message.id)
                } else {
                    let nixx = autostick.indexOf(groupId)
                    autostick.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/autostick.json', JSON.stringify(autostick))
                    iluser.reply(message.from, `AutoSticker\n\n*DEACTIVATED*`, message.id)
                }
            } else {
                iluser.reply(message.from, `Pilih enable atau disable udin!`, message.id)
            }
            break
        case prefix+'antilink':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, message.id)
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
                        case prefix+'togel':{ //ILUSER
                const disable = await getDB.cek_disable(message.from, `${prefix}togel`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
                let search = await axios.get(`https://api.vhtear.com/togel&apikey=${vhtearkey}`)
                iluser.reply(message.from, `\n\t*Togel X iluser_BOT*


\t\t*${search.data.result.hasil[0].Negara}*

*Senin:* ${search.data.result.hasil[0].Senin}
*Selasa:* ${search.data.result.hasil[0].Selasa}
*Rabu:* ${search.data.result.hasil[0].Rabu}
*Kamis:* ${search.data.result.hasil[0].Kamis}
*Jumat:* ${search.data.result.hasil[0].Jumat}
*Sabtu:* ${search.data.result.hasil[0].Sabtu}
*Minggu:* ${search.data.result.hasil[0].Minggu}


\t\t*${search.data.result.hasil[1].Negara}*

*Senin:* ${search.data.result.hasil[1].Senin}
*Selasa:* ${search.data.result.hasil[1].Selasa}
*Rabu:* ${search.data.result.hasil[1].Rabu}
*Kamis:* ${search.data.result.hasil[1].Kamis}
*Jumat:* ${search.data.result.hasil[1].Jumat}
*Sabtu:* ${search.data.result.hasil[1].Sabtu}
*Minggu:* ${search.data.result.hasil[1].Minggu}


\t\t*${search.data.result.hasil[2].Negara}*

*Senin:* ${search.data.result.hasil[2].Senin}
*Selasa:* ${search.data.result.hasil[2].Selasa}
*Rabu:* ${search.data.result.hasil[2].Rabu}
*Kamis:* ${search.data.result.hasil[2].Kamis}
*Jumat:* ${search.data.result.hasil[2].Jumat}
*Sabtu:* ${search.data.result.hasil[2].Sabtu}
*Minggu:* ${search.data.result.hasil[2].Minggu}


\t\t*${search.data.result.hasil[3].Negara}*

*Senin:* ${search.data.result.hasil[3].Senin}
*Selasa:* ${search.data.result.hasil[3].Selasa}
*Rabu:* ${search.data.result.hasil[3].Rabu}
*Kamis:* ${search.data.result.hasil[3].Kamis}
*Jumat:* ${search.data.result.hasil[3].Jumat}
*Sabtu:* ${search.data.result.hasil[3].Sabtu}
*Minggu:* ${search.data.result.hasil[3].Minggu}


\t\t*${search.data.result.hasil[4].Negara}*

*Senin:* ${search.data.result.hasil[4].Senin}
*Selasa:* ${search.data.result.hasil[4].Selasa}
*Rabu:* ${search.data.result.hasil[4].Rabu}
*Kamis:* ${search.data.result.hasil[4].Kamis}
*Jumat:* ${search.data.result.hasil[4].Jumat}
*Sabtu:* ${search.data.result.hasil[4].Sabtu}
*Minggu:* ${search.data.result.hasil[4].Minggu}


\t\t*${search.data.result.hasil[5].Negara}*

*Senin:* ${search.data.result.hasil[5].Senin}
*Selasa:* ${search.data.result.hasil[5].Selasa}
*Rabu:* ${search.data.result.hasil[5].Rabu}
*Kamis:* ${search.data.result.hasil[5].Kamis}
*Jumat:* ${search.data.result.hasil[5].Jumat}
*Sabtu:* ${search.data.result.hasil[5].Sabtu}
*Minggu:* ${search.data.result.hasil[5].Minggu}


\t\t*${search.data.result.hasil[6].Negara}*

*Senin:* ${search.data.result.hasil[6].Senin}
*Selasa:* ${search.data.result.hasil[6].Selasa}
*Rabu:* ${search.data.result.hasil[6].Rabu}
*Kamis:* ${search.data.result.hasil[6].Kamis}
*Jumat:* ${search.data.result.hasil[6].Jumat}
*Sabtu:* ${search.data.result.hasil[6].Sabtu}
*Minggu:* ${search.data.result.hasil[6].Minggu}


\t\t*${search.data.result.hasil[7].Negara}*

*Senin:* ${search.data.result.hasil[7].Senin}
*Selasa:* ${search.data.result.hasil[7].Selasa}
*Rabu:* ${search.data.result.hasil[7].Rabu}
*Kamis:* ${search.data.result.hasil[7].Kamis}
*Jumat:* ${search.data.result.hasil[7].Jumat}
*Sabtu:* ${search.data.result.hasil[7].Sabtu}
*Minggu:* ${search.data.result.hasil[7].Minggu}


\t\t*${search.data.result.hasil[8].Negara}*

*Senin:* ${search.data.result.hasil[8].Senin}
*Selasa:* ${search.data.result.hasil[8].Selasa}
*Rabu:* ${search.data.result.hasil[8].Rabu}
*Kamis:* ${search.data.result.hasil[8].Kamis}
*Jumat:* ${search.data.result.hasil[8].Jumat}
*Sabtu:* ${search.data.result.hasil[8].Sabtu}
*Minggu:* ${search.data.result.hasil[8].Minggu}


\t\t*${search.data.result.hasil[9].Negara}*

*Senin:* ${search.data.result.hasil[9].Senin}
*Selasa:* ${search.data.result.hasil[9].Selasa}
*Rabu:* ${search.data.result.hasil[9].Rabu}
*Kamis:* ${search.data.result.hasil[9].Kamis}
*Jumat:* ${search.data.result.hasil[9].Jumat}
*Sabtu:* ${search.data.result.hasil[9].Sabtu}
*Minggu:* ${search.data.result.hasil[9].Minggu}


\t\t*${search.data.result.hasil[10].Negara}*

*Senin:* ${search.data.result.hasil[10].Senin}
*Selasa:* ${search.data.result.hasil[10].Selasa}
*Rabu:* ${search.data.result.hasil[10].Rabu}
*Kamis:* ${search.data.result.hasil[10].Kamis}
*Jumat:* ${search.data.result.hasil[10].Jumat}
*Sabtu:* ${search.data.result.hasil[10].Sabtu}
*Minggu:* ${search.data.result.hasil[10].Minggu}


\t\t*${search.data.result.hasil[11].Negara}*

*Senin:* ${search.data.result.hasil[11].Senin}
*Selasa:* ${search.data.result.hasil[11].Selasa}
*Rabu:* ${search.data.result.hasil[11].Rabu}
*Kamis:* ${search.data.result.hasil[11].Kamis}
*Jumat:* ${search.data.result.hasil[11].Jumat}
*Sabtu:* ${search.data.result.hasil[11].Sabtu}
*Minggu:* ${search.data.result.hasil[11].Minggu}


\t\t*${search.data.result.hasil[12].Negara}*

*Senin:* ${search.data.result.hasil[12].Senin}
*Selasa:* ${search.data.result.hasil[12].Selasa}
*Rabu:* ${search.data.result.hasil[12].Rabu}
*Kamis:* ${search.data.result.hasil[12].Kamis}
*Jumat:* ${search.data.result.hasil[12].Jumat}
*Sabtu:* ${search.data.result.hasil[12].Sabtu}
*Minggu:* ${search.data.result.hasil[12].Minggu}


\t\t*${search.data.result.hasil[13].Negara}*

*Senin:* ${search.data.result.hasil[13].Senin}
*Selasa:* ${search.data.result.hasil[13].Selasa}
*Rabu:* ${search.data.result.hasil[13].Rabu}
*Kamis:* ${search.data.result.hasil[13].Kamis}
*Jumat:* ${search.data.result.hasil[13].Jumat}
*Sabtu:* ${search.data.result.hasil[13].Sabtu}
*Minggu:* ${search.data.result.hasil[13].Minggu} ${mess.iklan}`, message.id)
            .then(() => console.log(color('SUCCESS | Togel', 'olive')))
                    .catch(async (err) => {
                        await iluser.reply(message.from, 'Error!', message.id)
                        iluser.sendText(ownerNumber, `error togel search:\n${err}`)
                        console.log(color('FAILED | togel', 'red'))
                    })
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
                let search = await axios.get('http://docs-jojo.herokuapp.com/api/bioskop?kota='+q)
                await iluser.sendFileFromUrl(message.from, search.data.result[0].img, 'watpad.jpg',`*BIOSKOP SEARCH*

*Title:* ${search.data.result[0].title}
*Alamat:* ${search.data.result[0].alamat}
*Rate:* ${search.data.result[0].bintang}

*Title:* ${search.data.result[1].title}
*Alamat:* ${search.data.result[1].alamat}
*Rate:* ${search.data.result[1].bintang}

*Title:* ${search.data.result[2].title}
*Alamat:* ${search.data.result[2].alamat}
*Rate:* ${search.data.result[2].bintang}

*Title:* ${search.data.result[2].title}
*Alamat:* ${search.data.result[2].alamat}
*Rate:* ${search.data.result[2].bintang} ${mess.iklan}`+ '', message.id)
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
                let search = await axios.get('https://docs-jojo.herokuapp.com/api/infoloker')
                await iluser.reply(message.from, `
*LOKER INFO X iluser_BOT*

*Perusahaan:* ${search.data.result[0].perusahaan}
*Url:* ${search.data.result[0].link}
*Pofesi:* ${search.data.result[0].profesi}
*Gaji:* ${search.data.result[0].gaji}
*Lokasi:* ${search.data.result[0].lokasi}
*Pengalaman:* ${search.data.result[0].pengalaman}
*Sebagai:* ${search.data.result[0].jobFunction}
*Level karir:* ${search.data.result[0].levelKarir}
*Rentang* ${search.data.result[0].edukasi}
*Deskripsi:* ${search.data.result[0].desc}
*Syarat:* ${search.data.result[0].syarat}

*Perusahaan:* ${search.data.result[1].perusahaan}
*Url:* ${search.data.result[1].link}
*Pofesi:* ${search.data.result[1].profesi}
*Gaji:* ${search.data.result[1].gaji}
*Lokasi:* ${search.data.result[1].lokasi}
*Pengalaman:* ${search.data.result[1].pengalaman}
*Sebagai:* ${search.data.result[1].jobFunction}
*Level karir:* ${search.data.result[1].levelKarir}
*Rentang* ${search.data.result[1].edukasi}
*Deskripsi:* ${search.data.result[1].desc}
*Syarat:* ${search.data.result[1].syarat}

*Perusahaan:* ${search.data.result[2].perusahaan}
*Url:* ${search.data.result[2].link}
*Pofesi:* ${search.data.result[2].profesi}
*Gaji:* ${search.data.result[2].gaji}
*Lokasi:* ${search.data.result[2].lokasi}
*Pengalaman:* ${search.data.result[2].pengalaman}
*Sebagai:* ${search.data.result[2].jobFunction}
*Level karir:* ${search.data.result[2].levelKarir}
*Rentang* ${search.data.result[2].edukasi}
*Deskripsi:* ${search.data.result[2].desc}
*Syarat:* ${search.data.result[2].syarat}

*Perusahaan:* ${search.data.result[3].perusahaan}
*Url:* ${search.data.result[3].link}
*Pofesi:* ${search.data.result[3].profesi}
*Gaji:* ${search.data.result[3].gaji}
*Lokasi:* ${search.data.result[3].lokasi}
*Pengalaman:* ${search.data.result[3].pengalaman}
*Sebagai:* ${search.data.result[3].jobFunction}
*Level karir:* ${search.data.result[3].levelKarir}
*Rentang* ${search.data.result[3].edukasi}
*Deskripsi:* ${search.data.result[3].desc}
*Syarat:* ${search.data.result[3].syarat}

*Perusahaan:* ${search.data.result[4].perusahaan}
*Url:* ${search.data.result[4].link}
*Pofesi:* ${search.data.result[4].profesi}
*Gaji:* ${search.data.result[4].gaji}
*Lokasi:* ${search.data.result[4].lokasi}
*Pengalaman:* ${search.data.result[4].pengalaman}
*Sebagai:* ${search.data.result[4].jobFunction}
*Level karir:* ${search.data.result[4].levelKarir}
*Rentang* ${search.data.result[4].edukasi}
*Deskripsi:* ${search.data.result[4].desc}
*Syarat:* ${search.data.result[4].syarat}

*Perusahaan:* ${search.data.result[5].perusahaan}
*Url:* ${search.data.result[5].link}
*Pofesi:* ${search.data.result[5].profesi}
*Gaji:* ${search.data.result[5].gaji}
*Lokasi:* ${search.data.result[5].lokasi}
*Pengalaman:* ${search.data.result[5].pengalaman}
*Sebagai:* ${search.data.result[5].jobFunction}
*Level karir:* ${search.data.result[5].levelKarir}
*Rentang* ${search.data.result[5].edukasi}
*Deskripsi:* ${search.data.result[5].desc}
*Syarat:* ${search.data.result[5].syarat}

*Perusahaan:* ${search.data.result[6].perusahaan}
*Url:* ${search.data.result[6].link}
*Pofesi:* ${search.data.result[6].profesi}
*Gaji:* ${search.data.result[6].gaji}
*Lokasi:* ${search.data.result[6].lokasi}
*Pengalaman:* ${search.data.result[6].pengalaman}
*Sebagai:* ${search.data.result[6].jobFunction}
*Level karir:* ${search.data.result[6].levelKarir}
*Rentang* ${search.data.result[6].edukasi}
*Deskripsi:* ${search.data.result[6].desc}
*Syarat:* ${search.data.result[6].syarat}

*Perusahaan:* ${search.data.result[7].perusahaan}
*Url:* ${search.data.result[7].link}
*Pofesi:* ${search.data.result[7].profesi}
*Gaji:* ${search.data.result[7].gaji}
*Lokasi:* ${search.data.result[7].lokasi}
*Pengalaman:* ${search.data.result[7].pengalaman}
*Sebagai:* ${search.data.result[7].jobFunction}
*Level karir:* ${search.data.result[7].levelKarir}
*Rentang* ${search.data.result[7].edukasi}
*Deskripsi:* ${search.data.result[7].desc}
*Syarat:* ${search.data.result[7].syarat}

*Perusahaan:* ${search.data.result[8].perusahaan}
*Url:* ${search.data.result[8].link}
*Pofesi:* ${search.data.result[8].profesi}
*Gaji:* ${search.data.result[8].gaji}
*Lokasi:* ${search.data.result[8].lokasi}
*Pengalaman:* ${search.data.result[8].pengalaman}
*Sebagai:* ${search.data.result[8].jobFunction}
*Level karir:* ${search.data.result[8].levelKarir}
*Rentang* ${search.data.result[8].edukasi}
*Deskripsi:* ${search.data.result[8].desc}
*Syarat:* ${search.data.result[8].syarat}

*Perusahaan:* ${search.data.result[9].perusahaan}
*Url:* ${search.data.result[9].link}
*Pofesi:* ${search.data.result[9].profesi}
*Gaji:* ${search.data.result[9].gaji}
*Lokasi:* ${search.data.result[9].lokasi}
*Pengalaman:* ${search.data.result[9].pengalaman}
*Sebagai:* ${search.data.result[9].jobFunction}
*Level karir:* ${search.data.result[9].levelKarir}
*Rentang* ${search.data.result[9].edukasi}
*Deskripsi:* ${search.data.result[9].desc}
*Syarat:* ${search.data.result[9].syarat} ${mess.iklan}`+ '', message.id)
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
       /* case prefix+'antiporn':{
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, message.id)
            if (args[1] == 'enable') {
                var cek = antiporn.includes(chatId);
                if(cek){
                    return iluser.reply(message.from, `ANTI PORN\n\n   *ALREADY ACTIVATED ON ${name}*`, message.id) //if number already exists on database
                } else {
                    antiporn.push(chatId)
                    fs.writeFileSync('./lib/database/antiporn.json', JSON.stringify(antiporn))
                    iluser.reply(message.from, `ANTI PORN\n\n   *ACTIVATED*`, message.id)
                }
            } else if (args[1] == 'disable') {
                var cek = antiporn.includes(chatId);
                if(!cek){
                    return iluser.reply(message.from, `ANTI PORN\n\n   *ALREADY DEACTIVATED ON ${name}*`, message.id) //if number already exists on database
                } else {
                    let nixx = antiporn.indexOf(chatId)
                    antiporn.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antiporn.json', JSON.stringify(antiporn))
                    iluser.reply(message.from, `ANTI PORN\n\n   *DEACTIVATED*`, message.id)
                }
            } else {
                iluser.reply(message.from, `Pilih enable atau disable udin!`, message.id)
            }
        }
            break   */
        case prefix+'antiporn':{
                if(isReg(obj)) return
                if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
                if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
                if (!isBotGroupAdmins) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, message.id)
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
       /* case prefix+'antisticker':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, message.id)
            if (args[1] == 'enable') {
                var cek = antisticker.includes(chatId);
                if(cek){
                    return iluser.reply(message.from, `ANTI SPAM STICKER\n\n*ALREADY ACTIVATED*`, message.id)
                 } else {
                    antisticker.push(chatId)
                    fs.writeFileSync('./lib/database/antisticker.json', JSON.stringify(antisticker))
                    iluser.reply(message.from, `\nANTI SPAM STICKER\n\n*ACTIVATED*`, message.id)
                }
            } else if (args[1] == 'disable') {
                var cek = antisticker.includes(chatId);
                if(cek){
                    return iluser.reply(message.from, `*ANTI SPAM STICKER*\n\n*ALREADY DEACTIVATED*`, message.id) //if number already exists on database
                } else {
                    let nixx = antisticker.indexOf(chatId)
                    antisticker.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antisticker.json', JSON.stringify(antisticker))
                    iluser.reply(message.from, `\nANTI SPAM STICKER\n\n*DEACTIVATED*`, message.id)
                    limitAdd(serial)
                }
            } else {
                iluser.reply(message.from, `Pilih enable atau disable udin!`, message.id)
            }
            break*/
        case prefix+'antibadword':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, message.id)
            if (args[1] == 'enable') {
                var cek = antibadword.includes(chatId);
                if(cek){
                    return iluser.reply(message.from, `ANTI BADWORD\n\n   *ALREADY ACTIVATED ON ${name}*`, message.id)
                } else {
                    antibadword.push(chatId)
                    fs.writeFileSync('./lib/database/antibadword.json', JSON.stringify(antibadword))
                    iluser.reply(message.from, `ANTI BADWORD\n\n   *ACTIVATED* `, message.id)
                }
            } else if (args[1] == 'disable') {
                var cek = antibadword.includes(chatId);
                if(!cek){
                    return iluser.reply(message.from, `ANTI BADWORD\n\n   *ALREADY DEACTIVATED ON ${name}*`, message.id)
                } else {
                    let nixx = antibadword.indexOf(chatId)
                    antibadword.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antibadword.json', JSON.stringify(antibadword))
                    iluser.reply(message.from, `ANTI BADWORD\n\n   *DEACTIVATED*`, message.id)
                }
            } else {
                iluser.reply(message.from, `Pilih enable atau disable udin!`, message.id)
            } 
            break   
          case `${prefix}stylewriting`:{
            const disable = await getDB.cek_disable(message.from, `${prefix}stylewriting`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1)  return iluser.reply(message.from, `Contoh *${prefix}sandwriting iluser_bot*`, message.id)
            const swrt1 = body.slice(13)
            try {
            const swrt2 = await axios.get('https://api.vhtear.com/sand_writing?text1=' + swrt1 + '&apikey=' + vhtearkey)
            const { imgUrl } = swrt2.data.result
            const swrt3 = `*SAND WRITING*
   *Text : ${swrt1}*`
            const pictk = await bent("buffer")(imgUrl)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, base64, `${swrt3} ${mess.iklan}`)
          } catch (err) {
            console.error(err.message)
            await iluser.reply(message.from, 'Error!', message.id)
            iluser.sendText(ownerNumber, 'Sand Writing Error : ' + err)
              }
            }
            break

        case prefix+'info-lock':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan dalam group', message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
                iluser.setGroupEditToAdminsOnly(groupId, true)
                iluser.sendTextWithMentions(message.from, `Edit info grup telah di kunci oleh @${sender.id.replace('@c.us','')}`, message.id)
              break
        case prefix+'info-unlock':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan dalam group', message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
                iluser.setGroupEditToAdminsOnly(groupId, false)
                iluser.sendTextWithMentions(message.from, `Edit info grup talah di buka oleh @${sender.id.replace('@c.us','')}`, message.id)
              break
          case prefix+'lock':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan dalam group', message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
                iluser.setGroupToAdminsOnly(groupId, true)
                iluser.sendTextWithMentions(message.from, `Grup telah ditutup oleh  @${sender.id.replace('@c.us','')}`, message.id)
              break
          case prefix+'unlock':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan dalam group', message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
                iluser.setGroupToAdminsOnly(groupId, false)
                iluser.sendTextWithMentions(message.from, `Grup telah dibuka oleh @${sender.id.replace('@c.us','')}`, message.id)
              break        
        case prefix+'left':
            if(isReg(obj)) return
            if (!isOwner) return iluser.reply(message.from, 'Fitur ini dinonaktifkan developer bot', message.id)
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (!isGroupAdmins) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (args.length === 1) return iluser.reply(message.from, 'Pilih enable atau disable!', message.id)
            if (args[1].toLowerCase() === 'enable') {
                left.push(chat.id)
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                iluser.reply(message.from, 'Fitur left berhasil di aktifkan di group ini!', message.id)
            } else if (args[1].toLowerCase() === 'disable') {
                left.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                iluser.reply(message.from, 'Fitur left berhasil di nonaktifkan di group ini!', message.id)
            } else {
                iluser.reply(message.from, 'Pilih enable atau disable udin!', message.id)
            }
            break
    case prefix+'addwelcome':{
        if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
        if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
    const id = message.from;
    await getDB.addWelcome(id)
    iluser.sendText(message.from, `_welcome message_ sudah diaktifkan untuk grup ini`);
    console.log(`SUCCESS | add welcome message`);
  }break
    case prefix+'welcome':{
        if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
        if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
    try{
    (async () => {
      const status = message.body.slice(9);
      const action = message.body.split(' ');
      const id = message.from;
      const cek = await getDB.cekWlcmGroup(id);
      if (cek.length == 0) {
            iluser.sendText(message.from, "Maaf, _welcome message_ untuk grub ini belum diaktifkan, silahkan aktifkan dengan perintah *.addwelcome*");
            console.log('FAILED | grub belum terdaftar welcome message')
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
        case prefix+'nhview':{
            const disable = await getDB.cek_disable(message.from, `${prefix}nhview`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}nhview 321421*`, message.id)
            const nhsh = body.slice(11)
            const nhsh2 = await axios.get('https://mnazria.herokuapp.com/api/nhentai?code='+nhsh)
            for (let i = 0; i < nhsh2.length; i++) {
                await iluser.sendImage(message.from, nhsh2[i].data, 'thumbserc.jpg', `${mess.iklann}`, message.id)
                }
            }
            break
        case prefix+'loli':{
            const disable = await getDB.cek_disable(message.from, `${prefix}loli`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            const loli = await axios.get(`https://api.vhtear.com/randomloli&apikey=${vhtearkey}`)
            const loly = loli.data.result
            iluser.sendFileFromUrl(message.from, loly.result, 'loli.jpeg', `${mess.iklann}`, message.id)
            }
            break
        case prefix+'shota':{
            const disable = await getDB.cek_disable(message.from, `${prefix}shota`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            const imageToBase64 = require('image-to-base64')
            var shouta = ['shota anime','anime shota'];
            var shotaa = shouta[Math.floor(Math.random() * shouta.length)];
            var urlshot = "https://api.fdci.se/rep.php?gambar=" + shotaa;
            
            axios.get(urlshot)
            .then((result) => {
            var sht = JSON.parse(JSON.stringify(result.data));
            var shotaak =  sht[Math.floor(Math.random() * sht.length)];
            imageToBase64(shotaak)
            .then(
                (response) => {
            let img = 'data:image/jpeg;base64,'+response
            iluser.sendFile(message.from, img, "shota.jpg", `${mess.iklann}`, message.id)
                    }) 
                .catch(
                    (error) => {
                        iluser.sendText(ownerNumber, `Error Shota:\n${error}`)
                        console.log('FAILED | shota');
                    })
            })}
            break
        case prefix+'cewe':
        case prefix+'ptl':{
            const disable = await getDB.cek_disable(message.from, `${prefix}cewe`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            var ptrss = ['cewe cantik','cewe jepang','cewe korea','model cantik'];
            var ptrsqq = ptrss[Math.floor(Math.random() * ptrss.length)];
            const ptrst = await fetch(`https://api.vhtear.com/pinterest?query=${ptrsqq}&apikey=${vhtearkey}`)
            if (!ptrst.ok) throw new Error(`Error Pinterest : ${ptrst.statusText}`)
            const ptrs = await ptrst.json()
            const ptrsn = ptrs.result
            const b = JSON.parse(JSON.stringify(ptrsn))
            const ptrs2 =  b[Math.floor(Math.random() * b.length)]
            const image = await bent("buffer")(ptrs2)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            await iluser.sendImage(message.from, base64, 'ptrs.jpg', `${mess.iklann}`, message.id)
            await limitAdd(serial)
        }
        break
        case prefix+'cowo':
        case prefix+'ptl2':{
            const disable = await getDB.cek_disable(message.from, `${prefix}cowo`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            var ptrss = ['cowo ganteng','cogan','model cowo','model ganteng'];
            var ptrsqq = ptrss[Math.floor(Math.random() * ptrss.length)];
            const ptrst = await fetch(`https://api.vhtear.com/pinterest?query=${ptrsqq}&apikey=${vhtearkey}`)
            if (!ptrst.ok) throw new Error(`Error Pinterest : ${ptrst.statusText}`)
            const ptrs = await ptrst.json()
            const ptrsn = ptrs.result
            const b = JSON.parse(JSON.stringify(ptrsn))
            const ptrs2 =  b[Math.floor(Math.random() * b.length)]
            const image = await bent("buffer")(ptrs2)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            await iluser.sendImage(message.from, base64, 'ptrs.jpg', `${mess.iklann}`, message.id)
            await limitAdd(serial)
        }
        break
        case prefix+'wall':
        case prefix+'wallpaper':{
            const disable = await getDB.cek_disable(message.from, `${prefix}wall`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            const imageToBase64abc = require('image-to-base64')
            var walla = ['abstract wallpaper','cinematic wallpaper','dark wallpaper','mountain wallpaper','galaxy wallpaper','wallpaper city','space wallpaper','nature wallpaper','dark wallpaper'];
            var wallb = walla[Math.floor(Math.random() * walla.length)];
            var urlwall = "https://api.fdci.se/rep.php?gambar=" + wallb;
            
            axios.get(urlwall)
            .then((result) => {
            var awalla = JSON.parse(JSON.stringify(result.data));
            var awallb =  awalla[Math.floor(Math.random() * awalla.length)];
            imageToBase64abc(awallb)
            .then(
                (response) => {
            let gember = 'data:image/jpeg;base64,'+response
            iluser.sendFile(message.from, gember, "peteel.jpg", `${mess.iklann}`, message.id)
                    }) 
                .catch(
                    (error) => {
                        console.log(color('FAILED | wallpaper', 'red'))
                        iluser.sendText(ownerNumber, `Error wallpaper:\n${error}`)
                        iluser.reply(message.from, 'Error', message.id)
                    })
            })
        }
            break
        case prefix+'waifu':{
            const disable = await getDB.cek_disable(message.from, `${prefix}waifu`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            const waifu = await axios.get('https://tobz-api.herokuapp.com/api/waifu?apikey=' + tobzkey)
            iluser.sendFileFromUrl(message.from, waifu.data.image, 'Waifu.jpg', `• Name : ${waifu.data.name}\n• Description : ${waifu.data.desc}\n\n• Source : ${waifu.data.source} ${mess.iklan}`, message.id)
            }
            break
        case prefix+'husbu':{
            const disable = await getDB.cek_disable(message.from, `${prefix}husbu`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            const diti = fs.readFileSync('./lib/database/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            iluser.sendFileFromUrl(message.from, rindKiy.image, 'Husbu.jpg', `${rindKiy.teks} ${mess.iklan}`, message.id)
            }
            break
        case prefix+'randomnekonime':{
            const disable = await getDB.cek_disable(message.from, `${prefix}randomnekonime`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            const nekonime = await axios.get(`https://tobz-api.herokuapp.com/api/nekonime?apikey=`+tobzkey)
            const nekon = nekonime.data
            if (nekon.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            iluser.sendFileFromUrl(message.from, nekon.result, `Nekonime${ext}`, `${mess.iklann}`, message.id)
            }
            break
        case prefix+'randomtrapnime':{
            const disable = await getDB.cek_disable(message.from, `${prefix}randomtrapnime`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            const trapnime = await axios.get('https://tobz-api.herokuapp.com/api/nsfwtrap?apikey='+tobzkey)
            const trapn = trapnime.data.result
            if (trapn.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            iluser.sendImage(message.from, trapn.result, `trapnime${ext}`, `${mess.iklann}`, message.id)
            }
            break
        case prefix+'randomhentai':{
            const disable = await getDB.cek_disable(message.from, `${prefix}randomhentai`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (!isPremium) return await iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte Premium?`, message.id);
            await limitAdd(serial)
            const hentai = await axios.get(`https://tobz-api.herokuapp.com/api/hentai?apikey=`+tobzkey)
            const henta = hentai.data
            if (henta.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            iluser.sendImage(message.from, henta.result, `RandomHentai${ext}`, `${mess.iklann}`, message.id)
            }
            break
        case prefix+'randomnsfwneko':{
            const disable = await getDB.cek_disable(message.from, `${prefix}randomnsfwneko`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (!isPremium) return await iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte Premium?`, message.id);
            await limitAdd(serial)
            const nsfwneko = await axios.get('https://tobz-api.herokuapp.com/api/nsfwneko?apikey='+tobzkey)
            const nsfwn = nsfwneko.data
            if (nsfwn.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            iluser.sendImage(message.from, nsfwn.result, `NsfwNeko${ext}`, `${mess.iklann}`, message.id)
            }
            break
        case prefix+'randomanime':{
            const disable = await getDB.cek_disable(message.from, `${prefix}randomanime`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            const ranime = await axios.get('https://tobz-api.herokuapp.com/api/randomanime?apikey='+tobzkey)
            const ranimen = ranime.data
            if (ranimen.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            iluser.sendFileFromUrl(message.from, ranimen.result, `RandomAnime${ext}`, `${mess.iklann}`, message.id)
            }
            break    
        case prefix+'randomhug':{
            const disable = await getDB.cek_disable(message.from, `${prefix}randomhug`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            const shug = await axios.get('https://tobz-api.herokuapp.com/api/hug?apikey='+tobzkey)
            const rhug = shug.data
            iluser.sendFileFromUrl(message.from, rhug.result, `RandomHug${ext}`, `${mess.iklann}`, message.id)
            }
            break
        case prefix+'randomcry':{
            const disable = await getDB.cek_disable(message.from, `${prefix}randomcry`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            const scry = await axios.get('https://tobz-api.herokuapp.com/api/cry?apikey='+tobzkey)
            const rcry = scry.data
            iluser.sendFileFromUrl(message.from, rcry.result, `RandomCry${ext}`, `${mess.iklann}`, message.id)
            }
            break
        case prefix+'randomkiss':{
            const disable = await getDB.cek_disable(message.from, `${prefix}randomkiss`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            const skiss = await axios.get('https://tobz-api.herokuapp.com/api/kiss?apikey='+tobzkey)
            const rkiss = skiss.data
            iluser.sendFileFromUrl(message.from, rkiss.result, `RandomKiss${ext}`, `${mess.iklann}`, message.id)
            }
            break
        case prefix+'subreddit':{
            const disable = await getDB.cek_disable(message.from, `${prefix}subreddit`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            argz = body.trim().split(' ')
            const sr = arg[1]
            try {
            const response1 = await axios.get('https://meme-api.herokuapp.com/gimme/' + sr + '/');
            const { postLink, title, subreddit, url, nsfw, spoiler } = response1.data
            await iluser.sendFileFromUrl(message.from, `${url}`, 'Reddit.jpg', `*Title*: ${title}` + '\n\n*Postlink*:' + `${postLink}`, message.id)
            } catch(err) {
                await iluser.reply(message.from, 'Error!', message.id)
            }
        }
        break
        case prefix+'nhder':
        case prefix+'hnder':{
            const disable = await getDB.cek_disable(message.from, `${prefix}nhder`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (isReg(obj)) return
            if (isLimit(serial)) return 
            if (!isPremium && !isOwner) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
            await limitAdd(serial)
            if (args.length >=2){
                const code = args[1]
                const url = 'https://nhder.herokuapp.com/download/nhentai/'+code+'/zip'
                //const short = []
                //const shortener = await urlShortener(url)
                //url['short'] = shortener
                //short.push(url)
                //const caption = `*NEKOPOI DOWNLOADER*\n\nLink: ${shortener}`
                //iluser.reply(message.from, caption, message.id)
                iluser.sendFileFromUrl(message.from, url, `Hentai X iluser_BOT.zip`, ``, message.id)
            } else {
                iluser.sendText(message.from, 'masukan code nuclear', message.id)
            }
        }
        break
        case prefix+'quotesnime':{
            const disable = await getDB.cek_disable(message.from, `${prefix}quotesnime`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            const skya = await axios.get('https://tobz-api.herokuapp.com/api/quotesnime/random?apikey='+tobzkey)
            skya_ = skya.data
            iluser.reply(message.from, `• *Quotes* : ${skya_.quote}\n• *Character* : ${skya_.character}\n• *Anime* : ${skya_.anime}`, message.id)
            }
            break
        case prefix+'meme':{
            const disable = await getDB.cek_disable(message.from, `${prefix}meme`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/indonesia')
            const { postlink, title, subreddit, url, nsfw, spoiler } = response.data
            iluser.sendFileFromUrl(message.from, `${url}`, 'meme.jpg', `${title} ${mess.iklan}`, message.id)
            await limitAdd(serial)
            }
            break      
        case prefix+'memeindo':{
            const disable = await getDB.cek_disable(message.from, `${prefix}memeindo`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            const memejoke = await axios.get(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
            const memejokes = memejoke.data
            await limitAdd(serial)
            iluser.sendImage(message.from, memejokes.result, 'iluser.jpg', `${mess.iklann}`, message.id)
            }
            break  
        case prefix+'quoteanime':{
            const disable = await getDB.cek_disable(message.from, `${prefix}quoteanime`);
            if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
                        if(args[1]){
                            if(args[1] === 'anime'){
                                const anime = body.slice(13)
                                axios.get('https://animechanapi.xyz/api/quotes?anime='+anime).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    iluser.sendText(message.from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                }).catch(err => {
                                    iluser.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }else{
                                const char = body.slice(12)
                                axios.get('https://animechanapi.xyz/api/quotes?char='+char).then(({ data }) => {
                                    let quote = data.data[0].quote 
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    iluser.sendText(message.from, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                }).catch(err => {
                                    iluser.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }
                        }else{
                            axios.get('https://animechanapi.xyz/api/quotes/random').then(({ data }) => {
                                let penyanyi = data.result[0].penyanyi 
                                let judul = data.result[0].judul
                                let linkimg = data.result[0].linkImg
                                let lagu = data.result[0].linkMp3 
                                let size = data.result[0].filesize
                                let durasi = data.result[0].duration
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
            
            await limitAdd(serial)
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
            
            await limitAdd(serial)
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
            await limitAdd(serial)
            const bmkg = await axios.get('http://tobz-api.herokuapp.com/api/infogempa?apikey='+tobzkey)
            const { potensi, koordinat, lokasi, kedalaman, magnitude, waktu, map } = bmkg.data
            const hasil = `*${waktu}*\n📍 *Lokasi* : *${lokasi}*\n〽️ *Kedalaman* : *${kedalaman}*\n💢 *Magnitude* : *${magnitude}*\n🔘 *Potensi* : *${potensi}*\n📍 *Koordinat* : *${koordinat}*`
            iluser.sendFileFromUrl(message.from, map, 'shakemap.jpg', `${hasil} ${mess.iklan}`, message.id)
            }
            break
        case prefix+'ssphone':{
            const disable = await getDB.cek_disable(message.from, `${prefix}ssphone`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}ssphone https://neonime.vip*`, message.id)
            const ssphone = body.slice(9)
            iluser.sendFileFromUrl(message.from, `https://api.vhtear.com/ssweb?link=${ssphone}&type=phone&apikey=${vhtearkey}`, 'ssphone.jpg', `${mess.iklann}`, message.id)
            }
            break
        case prefix+'sspc':{
            const disable = await getDB.cek_disable(message.from, `${prefix}sspc`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}sspc https://neonime.vip*`, message.id)
            const sspc = body.slice(6)
            iluser.sendFileFromUrl(message.from, `https://api.vhtear.com/ssweb?link=${sspc}&type=pc&apikey=${vhtearkey}`, 'sspc.jpg', `${mess.iklann}`, message.id)
            }
            break
        case prefix+'shorturl':{
            const disable = await getDB.cek_disable(message.from, `${prefix}shorturl`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}shorturl https://neonime.vip*`, message.id)
            const sorturl = body.slice(10)
            const surl = await axios.get('https://tobz-api.herokuapp.com/api/bitly?url='+ sorturl + '&apikey=' + tobzkey)
            const surll = surl.data
            if (surll.error) return iluser.reply(message.from, ssww.error, message.id)
            const surl2 = `Link : ${sorturl}\nShort URL : ${surll.result}`
            iluser.reply(message.from, surl2, message.id)
            }
            break
        case prefix+'cuaca':{
            const disable = await getDB.cek_disable(message.from, `${prefix}cuaca`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
                        if (args.length == 0) return iluser.reply(message.from, `Nama kotanya mana ngab?`, message.id)
                        const predik = await axios.get(`https://api.vhtear.com/weather?city=${body.slice(7)}&apikey=${vhtearkey}`)
                        const iksi = predik.data.result
                        const resil = `${iksi.weather}\n\n${iksi.location}`
                        iluser.reply(message.from, resil, message.id)
                        .catch(() => {
                            return iluser.reply(message.from, 'Kota yang anda ketik tidak ditemukan...', message.id)
                        })
                    }
                    break
        case prefix+'spamcall':{
            const disable = await getDB.cek_disable(message.from, `${prefix}spamcall`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            argz = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const spam = await slicedArgs.join(' ')
            console.log(spam)
            const call2 = await axios.get('https://docs-jojo.herokuapp.com/api/spamcall?no=' + spam)
            const { logs } = call2.data
                await iluser.sendText(message.from, `Logs : ${logs}` + '.')
            }
            break
       /* case prefix+'ytmp4':
        case prefix+'yt':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}yt https://www.youtube.com/xnxx`)
            let isLinn = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinn) return iluser.reply(message.from, mess.error.Iv, message.id)
            try {
                const ytvh = await fetch(`http://api.vhtear.com/ytdl?link=${args[1]}&apikey=${vhtearkey}`)
                if (!ytvh.ok) throw new Error(`Error Get Video : ${ytvh.statusText}`)
                const ytvh2 = await ytvh.json()
                 if (ytvh2.status == false) {
                    iluser.reply(message.from, `ERROR NGAB`, message.id)
                } else {
                    //if (Number(ytvh2.result.size.split(' MB')[0]) > 40.00) return iluser.sendFileFromUrl(message.from, ytvh2.result.UrlVideo, `${title}.mp4`, `*YOUTUBE MP4*\n\n• *Judul* : ${ytvh2.result.title}\n• *Filesize* : ${ytvh2.result.size}\n\n__Maaf, Durasi video melebihi 30 MB. Silahkan download video melalui link dibawah_.\n${ytvh2.result.UrlVideo}`, message.id)
                    const { title, UrlVideo, imgUrl, size } = await ytvh2.result
                    if (!isPremium) return await iluser.sendImage(message.from, './logo.png', 'nilogotod.png',`*YOUTUBE DOWNLOADER*\n\n${mess.noprem}\n[${UrlVideo}]`, message.id)
                    await iluser.sendFileFromUrl(message.from, UrlVideo, `${title}.mp4`, '', message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                    await limitAdd(serial)
                }
            } catch (err) {
                iluser.sendText(ownerNumber, 'Error ytmp4 : '+ err)
                iluser.reply(message.from, mess.error.Yt4, message.id)
                console.log(color('FAILED | Ytmp4 error', 'red'))
            }
            break */
        case prefix+'kadargay':{
            const disable = await getDB.cek_disable(message.from, `${prefix}kadargay`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
                if (args.length == 1) return iluser.reply(message.from, `Yang gay siapa tod?`, message.id)
            axios.get(`https://arugaz.herokuapp.com/api/howgay`)
            .then(res => {
                const gayy = res.data.desc
                iluser.reply(message.from, gayy, message.id)
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
                limitAdd(serial)
                 await axios.get(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`).then(res => {
                    iluser.sendFileFromUrl(message.from, `${res.data.result}`, 'image.jpg', `${mess.iklann}`, message.id)
                    .then(() => console.log('SUCCESS | darkjoke'))
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
        case prefix+'puisi2':{
            const disable = await getDB.cek_disable(message.from, `${prefix}puisi2`);
                if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return       
            if(isLimit(serial)) return
                limitAdd(serial)
                await iluser.sendFileFromUrl(message.from, `https://api.vhtear.com/puisi_image&apikey=${vhtearkey}`, '', `${mess.iklann}`, message.id)
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
            
            await limitAdd(serial)
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
            await limitAdd(serial)   
            if (isMedia && isImage || isQuotedImage) {
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
                await iluser.reply(message.from, linkImg, message.id)
            } else {
                await iluser.reply(message.from, 'Wrong Format!', message.id)
            }}
        break
        case prefix+'ytmp3':{
        const disable = await getDB.cek_disable(message.from, `${prefix}ytmp3`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}ytmp3 https://www.youtube.com/xnxx`, message.id)
            let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return iluser.reply(message.from, mess.error.Iv, message.id)
            try {
                const vhtearyt3 = await fetch(`https://api.vhtear.com/ytdl?link=${args[1]}&apikey=${vhtearkey}`)
                if (!vhtearyt3.ok) throw new Error(`Error ytmp3 3 : ${vhtearyt3.statusText}`)
                const vhtearyt33 = await vhtearyt3.json()
                 if (vhtearyt33.status == false) {
                    iluser.reply(message.from, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, message.id)
                } else {
                    if(Number(vhtearyt33.result.size.split(' MB')[0]) >= 70.00) return iluser.sendFileFromUrl(message.from, vhtearyt33.result.imgUrl, `thumb.jpg`, `*YOUTUBE MP3*\n\n• *Judul* : ${vhtearyt33.result.title}\n• *Filesize* : ${vhtearyt33.result.size}\n\n_Maaf, Durasi audio melebihi 30 MB. Silahkan download audio melalui link dibawah_.\n${vhtearyt33.result.UrlMp3}`, message.id)
                    const { title, ext, size, UrlMp3, status, imgUrl } = await vhtearyt33.result
                    console.log(`VhTear Giliran ${ext}\n${size}\n${status}`)
                    const captions = `*YOUTUBE MP3*\n\n• *Judul* : ${title}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_ ${mess.iklan}`
                    iluser.sendFileFromUrl(message.from, imgUrl, `thumb.jpg`, captions, message.id)
                    //await iluser.sendFile(message.from, UrlMp3, `${title}.mp3`, '', message.id)
                    await iluser.sendFileFromUrl(message.from, UrlMp3, `${title}.mp3`, '', message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                    await limitAdd(serial)
                }
            } catch (err) {
                iluser.sendText(ownerNumber, 'Error ytmp3 : '+ err)
                iluser.reply(message.from, mess.error.Yt3, message.id)
            }}
            break

            //18+ Content
        case prefix+'bokep': // MFARELS
        case prefix+'randombokep':
        case prefix+'bkp':  {
        const disable = await getDB.cek_disable(message.from, `${prefix}bokep`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)           
            if(isReg(obj)) return
            if (isLimit(serial)) return  
            if (!isPremium) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
            await limitAdd(serial) 
            const mskkntl = fs.readFileSync('./lib/database/18+.json') 
            const kntlnya = JSON.parse(mskkntl) 
            const rindBkp = Math.floor(Math.random() * kntlnya.length) // MFARELS
            const rindBkep = konsolJsin[rindBkp] 
            iluser.sendFileFromUrl(message.from, rindBkep.image, 'Bokep.jpg', `${rindBkep.teks} ${mess.iklan}`, message.id)
            }
            break 
        case prefix+'randomblowjob':{
        const disable = await getDB.cek_disable(message.from, `${prefix}randomblowjob`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (!isPremium) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
            await limitAdd(serial)
            const sblow = await axios.get('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey='+tobzkey)
            const rblow = sblow.data
            iluser.sendFileFromUrl(message.from, rblow.result, `RandoBlow${ext}`, `${mess.iklann}`, message.id)
            }
            break
        case prefix+'xnxx':{
        const disable = await getDB.cek_disable(message.from, `${prefix}xnxx`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (!isPremium) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
            await limitAdd(serial)
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
            if (!isPremium) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
            {
              if (args.length === 1) return iluser.reply(message.from, 'mw ap?', message.id)
                if (isLimit(serial)) return
            
                await limitAdd(serial)
               const porn = body.slice(6)
               const umai = await get.get(`https://mnazria.herokuapp.com/api/porn?search=${porn}`).json()
               const { author, result } = await umai
               iluser.sendFileFromUrl(message.from, `${result[1].image}`, 'porn.jpg', `• Title: ${result[1].title}\n• Durasi: ${result[1].duration}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`,  message.id)
               const dl = await get.get(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${result[1].url}`).json()
               if (!isOwner) return iluser.reply(message.from, `Download sendiri ngab lewat sini. Males kalo server bot error karena command bokep\n${dl.mp4}`, message.id)
               iluser.sendFileFromUrl(message.from, dl.mp4, 'bokep.mp4', 'nih bacol', message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
           }}
           break
        case prefix+'pasangan':{
        const disable = await getDB.cek_disable(message.from, `${prefix}pasangan`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if (args.length === 1) return iluser.reply(message.from, 'Contoh : #pasangan |Sugiono|Eimi Fukada', message.id)
            memek = body.slice(10)
            const kamu = memek.split('|')[0]
            const pacar = memek.split('|')[1]
            const rjh = await get.get('https://api.vhtear.com/primbonjodoh?nama='+ kamu +'&pasangan=' + pacar + '&apikey=' + vhtearkey).json()
            if (rjh.result.error) return iluser.reply(message.from, rjh.result.error, message.id)
            const rjh2 = `• Hasil : ${rjh.result.hasil}`
            iluser.reply(message.from, `${rjh2} ${mess.iklan}`, message.id)
            }
            break
        case prefix+'artinama':{
        const disable = await getDB.cek_disable(message.from, `${prefix}artinama`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}artinama iluser*`, message.id)
            try {
            const resp = await axios.get('https://api.vhtear.com/artinama?nama=' + body.slice(9) + '&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const anm2 = `• Artinama : ${resp.data.result.hasil}`
            iluser.reply(message.from, `${anm2} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.reply(message.from, 'Error!', message.id)
                iluser.sendText(ownerNumber, 'Artinama Error : ' + err)
            }}
            break
        case prefix+'caklontong':{
        const disable = await getDB.cek_disable(message.from, `${prefix}caklontong`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/funkuis&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const anm2 = `Soal : ${resp.data.result.soal}\nPoin : ${resp.data.result.poin}`
            const jwban = `Jawaban : ${resp.data.result.jawaban}`
            iluser.reply(message.from, anm2, message.id)
            iluser.reply(message.from, `30 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.reply(message.from, `20 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.reply(message.from, `10 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.reply(message.from, `${jwban} \nDeskripsi : ${resp.data.result.desk} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.reply(message.from, 'Error!', message.id)
                iluser.sendText(ownerNumber, 'Zodiak Error : ' + err)
           }}
           break
         case prefix+'tebakgambar':{
        const disable = await getDB.cek_disable(message.from, `${prefix}tebakgambar`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/tebakgambar&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const jwban = `Jawaban : ${resp.data.result.jawaban}`
            await iluser.sendFileFromUrl(message.from, resp.data.result.soalImg, 'tebakgambar.jpg', '_Silahkan Jawab Maksud Dari Gambar Ini_', message.id)
            iluser.reply(message.from, `30 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.reply(message.from, `20 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.reply(message.from, `10 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.reply(message.from, `${jwban} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.reply(message.from, 'Error!', message.id)
                iluser.sendText(ownerNumber, 'Tebak Gambar Error : ' + err)
           }}
           break
         case prefix+'family100':{
        const disable = await getDB.cek_disable(message.from, `${prefix}family100`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/family100&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const anm2 = `• Soal : ${resp.data.result.soal}\n_Silahkan DiJawab_`
            const jwban = `• Jawaban : ${resp.data.result.jawaban}`
            iluser.reply(message.from, anm2, message.id)
            iluser.reply(message.from, `30 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.reply(message.from, `20 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.reply(message.from, `10 Detik Lagi...`, message.id)
            await sleep(10000)
            iluser.reply(message.from, `${jwban} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.reply(message.from, 'Error!', message.id)
                iluser.sendText(ownerNumber, 'Family100 Error : ' + err)
           }}
           break
        case prefix+'nomorhoki':{
        const disable = await getDB.cek_disable(message.from, `${prefix}nomorhoki`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *${prefix}nomorhoki [no hp kamu]*\nContoh : *${prefix}nomorhoki 0895384009405*`, message.id)
            try {
            const resp = await axios.get('https://api.vhtear.com/nomerhoki?no=' + body.slice(11) + '&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const anm2 = `• Hasil :\n ${resp.data.result.hasil}`
            iluser.reply(message.from, `${anm2} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.reply(message.from, 'Error!', message.id)
                iluser.sendText(ownerNumber, 'Nomorhoki Error : ' + err)
            }}
            break
        case prefix+'trendtwit':{
        const disable = await getDB.cek_disable(message.from, `${prefix}trendtwit`);
        if (disable != 0) return iluser.reply(message.from, mess.nonaktif, message.id)
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
        case prefix+'artimimpi':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *${prefix}artimimpi [mimpi]*\nContoh : *${prefix}artimimpi ular*`, message.id)
            try {
            const resp = await axios.get('https://api.vhtear.com/artimimpi?query=' + body.slice(10) + '&apikey=' + vhtearkey)
            if (resp.data.error) return iluser.reply(message.from, resp.data.error, message.id)
            const anm2 = `• Artimimpi : ${resp.data.result.hasil}`
            iluser.reply(message.from, `${anm2} ${mess.iklan}`, message.id)
            } catch (err) {
                console.error(err.message)
                await iluser.reply(message.from, 'Error!', message.id)
                iluser.sendText(ownerNumber, 'Artimimpi Error : ' + err)
           }
            break
    case prefix+'chatpremium':
        if (!isOwner) return await iluser.reply(message.from, `Perintah ini hanya bisa digunakan oleh super owner bot`, message.id)
        const msgny = body.slice(11)
        const pngm = await iluser.getHostNumber(adminNumber)
        iluser.sendText(pngm, `FROM OWNER BOT: ${serial.replace(/[@c.us]/g, '')}\n\n${msgny}\n\n\n*iluser_BOT*`)
        await iluser.reply(message.from, `Sukses chat user premium`, message.id)
        break
    case prefix+'carbon':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            await limitAdd(serial)
         if (args.length === 1) return iluser.reply(message.from, 'Teks nya mana??', message.id)    
         const darculanyas = `https://carbonnowsh.herokuapp.com/?code=${body.slice(8)}&theme=darcula&backgroundColor=rgba(50, 50, 50, 150)`
          iluser.sendFileFromUrl(message.from, darculanyas)
         break
        case prefix+'phcomment':
                if(isReg(obj)) return
                if (isLimit(serial)) return 
            
                await limitAdd(serial)
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
            break
 
     /*   case prefix+'wiki':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, 'Contoh : *.wiki covid-19*', message.id)
            const query_ = body.slice(6)
            const wiki = await get.get('https://docs-jojo.herokuapp.com/api/wiki?q='+ query_).json()
            if (wiki.error) {
                iluser.reply(message.from, wiki.error, message.id)
            } else {
                iluser.reply(message.from, `*Artikel*: ${query_}\n\n*Hasil*: ${wiki.result} ${mess.iklan}`, message.id)
                //iluser.sendImage(message.from, wiki.img, 'nigambar.jpg',`*Artikel*: ${query_}\n\n*Hasil*: ${wiki.result} ${mess.iklan}`, message.id)
            }
            break   */
         case prefix+'tahta':
         case prefix+'harta':
            if(isReg(obj)) return
             if (isLimit(serial)) return 
    
             await limitAdd(serial)
             const jreng = body.slice(7)
             if (!jreng) return iluser.reply(message.from, `Contoh *${prefix}tahta iluser_BOT*`, message.id)
             if (jreng.length > 15) return iluser.reply(message.from, 'Maksimal 15 Huruf!', message.id)
             await iluser.sendFileFromUrl(message.from, `https://api.vhtear.com/hartatahta?text=${jreng}&apikey=${vhtearkey}`,`${jreng}.jpg`,`${mess.iklann}`, message.id)        
             console.log(color('SUCCESS | tahta','olive'))
             break
        case prefix+'twitterstalk':
        case prefix+'twtstalk':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1)  return iluser.reply(message.from, `Contoh *${prefix}twtstalk @miakhalifah*1`, message.id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const twstalk = await slicedArgs.join(' ')
            console.log(twstalk)
            try {
            const twstalk2 = await axios.get('https://mhankbarbars.herokuapp.com/api/twstalk?username=' + twstalk + '&apiKey=' + barbarkey)
            const { followers_count, full_name, name, profile_pic, status_count } = twstalk2.data
            const twstalk3 = `*User Ditemukan!*

• *Nama:* ${name}
• *Nama Panjang:* ${full_name}
• *Jumlah Pengikut:* ${followers_count}
• *Jumlah Postingan:* ${status_count} ${mess.iklan}`

            const pictk = await bent("buffer")(profile_pic)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, base64, name, twstalk3)
            } catch (err) {
             await iluser.reply(message.from, 'Error!', message.id)
             console.log('FAILED | twitter stalk')
             iluser.sendText(ownerNumber, 'Twitter Error : ' + err)
           }
          break
        case prefix+'runtime':
            if (isOwner){
            iluser.reply(message.from, `Bot telah aktif selama :\n${cts}`, message.id)
            }
            break
        /*case prefix+'igstalk':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1)  return iluser.reply(message.from, `Contoh *${prefix}igstalk duar_amjay*`, message.id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const istalk = await slicedArgs.join(' ')
            console.log(istalk)
            try {
            const istalk2 = await axios.get('http://arugaz.my.id/api/media/stalkig?user='+ istalk)
            const { username, fullname, biography, profile_picture, followers, followings} = istalk2.data.result
            const istalk3 = `*User Ditemukan!*

• *Username:* ${username}
• *Nama:* ${fullname}
• *Bio:* ${biography}
• *Pengikut:* ${followers}
• *Mengikuti:* ${followings} ${mess.iklan}`
            
            const pictk = await bent("buffer")(profile_picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, base64, Username, istalk3)
            } catch (err) {
             console.error(err.message)
             await iluser.reply(message.from, 'Error!', message.id)
             iluser.sendText(ownerNumber, 'Igstalk Error : ' + err)
           }
          break */
        case `${prefix}igstalk`:
            if (args.length === 1)  return iluser.reply(message.from, `Contoh *${prefix}igstalk duar_amjay*`, message.id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const istalk = await slicedArgs.join(' ')
            console.log(istalk)
            try {
            const istalk2 = await axios.get('https://api.vhtear.com/igprofile?query=' + istalk + '&apikey=' + vhtearkey)
            const { biography, follower, follow, post_count, full_name, username, picture, is_private } = istalk2.data.result
            const istalk3 = `*User Ditemukan!*
• *Username:* ${username}
• *Nama:* ${full_name}
• *Mengikuti:* ${follow}
• *Pengikut:* ${follower}
• *Jumlah Postingan:* ${post_count}
• *Bio:* ${biography} ${mess.iklan}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, base64, username, istalk3, message.id)
            console.log('SUCCESS | igstalkg')
            } catch (err) {
             await iluser.reply(message.from, 'Error!', message.id)
             console.log('FAILED | igstalk')
             iluser.sendText(ownerNumber, 'Igstalk Error : ' + err)
           }
          break 
        case prefix+'tiktokstalk':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1)  return iluser.reply(message.from, `Contoh *${prefix}tiktokstalk @duar_amjay*`, message.id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const tstalk = await slicedArgs.join(' ')
            console.log(tstalk)
            try {
            const tstalk2 = await axios.get('https://api.vhtear.com/tiktokprofile?query=' + tstalk + '&apikey=' + vhtearkey)
            const { username, bio, follow, follower, title, like_count, video_post, description, picture, url_account } = tstalk2.data.result
            const tiktod = `*User Ditemukan!*
• *Username:* ${username}
• *Judul:* ${title}
• *Bio:* ${bio}
• *Mengikuti:* ${follow}
• *Pengikut:* ${follower}
• *Jumlah Like*: ${like_count}
• *Jumlah Postingan:* ${video_post}
• *Deskripsi:* ${description}
• *Link:* ${url_account} ${mess.iklan}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, base64, title, tiktod, message.id)
            console.log('SUCCESS | tiktokstalk')
            } catch (err) {
             console.log('FAILED | Tiktokstalk')
             await iluser.reply(message.from, 'Error!', message.id)
             iluser.sendText(ownerNumber, 'Error Tiktokstalk : '+ err)
           }
          break
        case prefix+'smulestalk':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh : *${prefix}smulestalk loli*`, message.id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const sstalk = await slicedArgs.join(' ')
            console.log(sstalk)
            try {
            const sstalk2 = await axios.get('https://api.vhtear.com/smuleprofile?query=' + sstalk + '&apikey=' + vhtearkey)
            const { username, full_name, follower, follow, biography, is_vip, picture, recording } = sstalk2.data.result
            const smule = `*User Ditemukan!*
• *Username:* ${username}
• *Full Name:* ${title}
• *Biografi:* ${biography}
• *Mengikuti:* ${follow}
• *Pengikut:* ${follower}
• *VIP*: ${is_vip}
• *Total Rekaman:* ${recording} ${mess.iklan}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            iluser.sendImage(message.from, base64, title, smule, message.id)
            console.log('SUCCESS | smulestalk')
            } catch (err) {
             console.log('FAILED | smulestalk')
             await iluser.reply(message.from, 'Error!', message.id)
             iluser.sendText(ownerNumber, 'Error Smulestalk : '+ err)
            }
          break
       /* case prefix+'':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix} halo beban`, message.id)
            const que = body.slice(2)
            const sigo = await axios.get(`http://simsumi.herokuapp.com/api?text=${que}&lang=id`)
            const sigot = sigo.data
            iluser.reply(message.from, sigot.success, message.id)
            console.log(sigot)
            break 
        case prefix+'s':
        case '#s':
        case '/s':
            if(isReg(obj)) return  
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
           if (args.length ===1) return iluser.reply(message.from, 'ketik .s kata kata untuk mengobrol dengan sim simi \ncontoh *. dimana rumahnya?*', message.id)
           const simi = body.slice(4)
           const rafi = await get.get(`https://tobz-api.herokuapp.com/api/simsimi?text=${simi}&apikey=${tobzkey}`).json()
           if (rafi.reason) return iluser.reply(message.from, 'Aduh Gak Ngerti mungkin server error atau kakaknya yg error', message.id)
           await iluser.reply(message.from, rafi.result, message.id)         
           break */
        case prefix+'carilagu':
                if (isMedia && isAudio || isQuotedAudio) {
                    await iluser.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedAudio ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    fs.writeFile(`./temp/audio.mp3`, mediaData)
                    const sampleq = fs.readFileSync(`./temp/audio.mp3`)
                    acr.identify(sampleq).then(metadata => {
                    iluser.reply(from, `Music Finder

Judul Lagu : ${metadata.metadata.music[0].title}
Artist : ${metadata.metadata.music[0].artists[0].name}
Album : ${metadata.metadata.music[0].album.name}
Rilis : ${metadata.metadata.music[0].release_date}`, id)
                })      
                    setTimeout(() => {
                                    fs.unlinkSync(`./temp/audio.mp3`)
                                    console.log('unlink');
                                }, 30000)
                }
                break
        case prefix+'ccgen':{
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const sigo = await get.get(`https://videfikri.com/api/ccgenerator/`)
            iluser.reply(message.from, `${sigo.result.card.network}`, message.id)
            console.log(sigo)
        }
            break 
        case prefix+'maps':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}maps Jakarta*`, message.id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(argz, 1);
            console.log(slicedArgs)
            const mapz = await slicedArgs.join(' ')
            console.log(mapz)
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
        /*case prefix+'nhentai':
        case prefix+'nh':
            if(isReg(obj)) return
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (args.length === 2) {
                const nuklir = body.split(' ')[1]
                
                const cek = await nhentai.exists(nuklir)
                if (cek === true)  {
                    try {
                        const api = new API()
                        const pic = await api.getBook(nuklir).then(book => {
                            return api.getImageURL(book.cover)
                        })
                        const dojin = await nhentai.getDoujin(nuklir)
                        const { title, details, link } = dojin
                        const { parodies, tags, artists, groups, languages, categories } = await details
                        var teks = `*Title* : ${title}\n\n*Parodies* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artists* : ${artists.join(', ')}\n\n*Groups* : ${groups.join(', ')}\n\n*Languages* : ${languages.join(', ')}\n\n*Categories* : ${categories}\n\n*Link* : ${link}`
                        exec('nhentai --id=' + nuklir + ` -P mantap.pdf -o ./hentong/${nuklir}.pdf --format `+ `${nuklir}.pdf`, (error, stdout, stderr) => {
                            iluser.sendFileFromUrl(message.from, pic, 'hentod.jpg', teks, message.id).then(() => 
                            iluser.sendFile(message.from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', message.id)).catch(() => 
                            iluser.sendFile(message.from, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', message.id))
                            if (error) {
                                console.log('error : '+ error.message)
                                return
                            }
                            if (stderr) {
                                console.log('stderr : '+ stderr)
                                return
                            }
                            console.log('stdout : '+ stdout)
                            })
                    } catch (err) {
                        iluser.reply(message.from, '[❗] Terjadi kesalahan, mungkin kode nuklir salah', message.id)
                    }
                } else {
                    iluser.reply(message.from, '[❗] Kode nuklir Salah!')
                }
            } else {
                iluser.reply(message.from, '[ WRONG ] Kirim perintah *#nhentai [kode]* untuk contoh kirim perintah *#readme*')
            }
            break*/
        case prefix+'wait':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
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
            
            await limitAdd(serial)
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
                    const rand = await genUniqueId(5)
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
                    const rand = await genUniqueId(5)
                    const param = await randNominal()
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
                            const rand = await genUniqueId(5) 
                            const result = await generate(pesannya, wm, rand, encodeURIComponent(imageBase64), 'true')
                            result == 'fail' ? await iluser.reply(message.from, "⛔ error/resend") : await iluser.sendImage( message.from, result, `${rand}.jpg`, `QuoteIT X *iluser_BOT* ${mess.iklan}`);
                        }catch(err)
                        {
                            console.log(err)
                        }
                    
                    }else if(message.quotedMsgObj.type == 'chat')
                    {
                        const pesannya = message.quotedMsgObj.body
                        let wm = body.slice(9) 
                        const rand = await genUniqueId(5)
                        const param = await randNominal()
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
            
            await limitAdd(serial)
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
            
            await limitAdd(serial)
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}tv antv`, message.id)
            const queri = body.slice(4)
            const jadwal = await fetch(`https://api.zeks.xyz/api/jadwaltv?channel=${queri}&apikey=apivinz`)
            const jdwl = await jadwal.json()
            iluser.reply(message.from, `Nih tod \n${jdwl.result}\n`, message.id)
            break
        case prefix+'jadwaltvnow': // API MATI
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            const jadwalNow = await axios.get('https://docs-jojo.herokuapp.com/jadwaltvnow')
            iluser.reply(message.from, `Jam : ${jadwalNow.data.jam}\n\nJadwalTV : ${jadwalNow.data.jadwalTV}`, message.id)
            break
            case prefix+'asu':
            case prefix+'anjing':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            await limitAdd(serial)
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = list[Math.floor(Math.random() * list.length)]
            iluser.sendFileFromUrl(message.from, kya, 'Dog.jpeg', `Dah mirip *${undefined, pushname}* belum?`, message.id)
            break
        case prefix+'qrcode':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            if (args.length === 1) return iluser.reply(message.from, `Contoh: ${prefix}qrcode ilwan ganteng`, message.id)
            await limitAdd(serial)
           if(!args.lenght >= 2) return
           let qrcodes = body.slice(8)
           await iluser.sendFileFromUrl(message.from, `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrcodes}`, 'gambar.png', `Qrcode X iluser_BOT ${mess.iklan}`, message.id)
           break
        case prefix+'qrread':{
                if(isReg(obj)) return
                if (isLimit(serial)) return 
                if (isMedia && type === 'image') {
                const encryptMedi = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrla = await uploadImages(mediaData, false)
                const cloudy = await axios.get(`http://docs-jojo.herokuapp.com/api/qr_read?image_url=${getUrla}`)
                //const cloudyy = cloudy.data
                await limitAdd(serial)
                iluser.reply(from, `Qr Reader\n\nText: ${cloudy.data.result.raw_text}\nBytes: ${cloudy.data.result.raw_bytes} ${mess.iklan}`, id)
                }  else if (quotedMsg && quotedMsg.type == 'image') {
                const encryptMedi = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrla = await uploadImages(mediaData, false)
                const cloudy = await axios.get(`http://docs-jojo.herokuapp.com/api/qr_read?image_url=${getUrla}`)
                //const cloudyy = cloudy.data
                await limitAdd(serial)
                iluser.reply(from, `Qr Reader\n\nText: ${cloudy.data.result.raw_text}\nBytes: ${cloudy.data.result.raw_bytes} ${mess.iklan}`, id)
                } else {
                await iluser.reply(from, 'Wrong Format!', id)
                }
            }
            break
        case prefix+'neko':
        case prefix+'kucing':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            iluser.sendFileFromUrl(message.from, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko ')
            break
        case prefix+'pokemon':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            
            await limitAdd(serial)
            q7 = Math.floor(Math.random() * 890) + 1;
            iluser.sendFileFromUrl(message.from, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+q7+'.png','Pokemon.png', `${mess.iklann}`, message.id)
            break
        case prefix+'listdaerah':
            if(isReg(obj)) return
            const listDaerah = await axios.get('https://tobz-api.herokuapp.com/api/daerah')
            iluser.reply(message.from, listDaerah.data.result, message.id)
            break
        case prefix+'slap':
            if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            const slap = arg.split(' ')
            const person = author.replace('@c.us', '')
            await iluser.sendGiphyAsSticker(message.from, 'https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif')
            iluser.sendTextWithMentions(message.from, '@' + person + ' *slapped* ' + slap)
            break
        case `${prefix}hug`: //thanks to SASHA BOT
                    argz = body.trim().split(' ')
                    const janjing = author.replace('@c.us', '')
                    await iluser.sendGiphyAsSticker(message.from, 'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif')
                    iluser.sendTextWithMentions(message.from, `${prefix}` + janjing + ' *peyuuuk* ' + arg[1])
                    break
        case `${prefix}pat`: //thanks to SASHA BOT
                    argz = body.trim().split(' ')
                    const jartod = author.replace('@c.us', '')
                    await iluser.sendGiphyAsSticker(message.from, 'https://media.giphy.com/media/Z7x24IHBcmV7W/giphy.gif')
                    iluser.sendTextWithMentions(message.from, `${prefix}` + jartod + ' *👈 Si Mengelu-elus si👉* ' + arg[1])
                    break
        case `${prefix}imgcompress`:
                if(isReg(obj)) return
                        
                if (isLimit(serial)) return
            
                await limitAdd(serial)
                if (isMedia) {
                    const gambar = await decryptMedia(message, uaOverride)
                    await processImg(gambar)
                } else if (quotedMsg && quotedMsg.type == 'image') {
                    const compres = await decryptMedia(quotedMsg)
                    await processImg(compres)
                } else {
                    iluser.sendText(message.from, `Tidak ada gambar! untuk !compress kirim gambar dengan caption !compress`)
                }
                async function processImg(gambar) {
                    let image = await Jimp.read(gambar);
                    image.quality(55).write('./quote/compressed.jpeg', function (err) {
                        if (err) console.log(color('FAILED | Compressed foto', 'red'))
                        iluser.sendFile(message.from, './quote/compressed.jpeg', 'compressed.jpg', '_*Processing Sukses!_');
                    });
                }
                break
        case `${prefix}images`:
        case `${prefix}gambar`:
                if(isReg(obj)) return
                if (isLimit(serial)) return
                await limitAdd(serial)  
                if (args.length === 1) return iluser.reply(message.from, `Untuk mencari gambar di pinterest\nketik: !images [search]\ncontoh: !images naruto`, message.id)
                const cariwall = body.slice(8)
                const hasilwall = await images.fdci(cariwall)
                iluser.sendFileFromUrl(message.from, hasilwall, '', '', message.id)
                    .catch(() => {
                        iluser.reply(message.from, 'Ada yang eror!', message.id)
                    })
                break
        case `${prefix}wallanime`:
                if(isReg(obj)) return
                if (isLimit(serial)) return
                await limitAdd(serial)  
                    const walnime = ['https://wallpaperaccess.com/full/395986.jpg', 'https://wallpaperaccess.com/full/21628.jpg', 'https://wallpaperaccess.com/full/21622.jpg', 'https://wallpaperaccess.com/full/21612.jpg', 'https://wallpaperaccess.com/full/21611.png', 'https://wallpaperaccess.com/full/21597.jpg', 'https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png', 'https://wallpaperaccess.com/full/21591.jpg', 'https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg', 'https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg', 'https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png', 'https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg', 'https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png', 'https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg', 'https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg', 'https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png', 'https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png', 'https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg', 'https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg', 'https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png', 'https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png', 'https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg', 'https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png', 'https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg', 'https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg', 'https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg', 'https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png', 'https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg', 'https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg', 'https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png', 'https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg', 'https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png', 'https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg', 'https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg', 'https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg', 'https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png', 'https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg', 'https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png', 'https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg', 'https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg', 'https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg', 'https://cdn.nekos.life/wallpaper/3db40hylKs8.png', 'https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg', 'https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png', 'https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg', 'https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg', 'https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg', 'https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg', 'https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg', 'https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg', 'https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png', 'https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg', 'https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg', 'https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg', 'https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png', 'https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png', 'https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png', 'https://cdn.nekos.life/wallpaper/yO6ioREenLA.png', 'https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg', 'https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png', 'https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png', 'https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg', 'https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg', 'https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg', 'https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg', 'https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg', 'https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png', 'https://cdn.nekos.life/wallpaper/32EAswpy3M8.png', 'https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png', 'https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg', 'https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png', 'https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg', 'https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png', 'https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png', 'https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg', 'https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg', 'https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png', 'https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg', 'https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg', 'https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg', 'https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png', 'https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png', 'https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg', 'https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg', 'https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg', 'https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png', 'https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg', 'https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png', 'https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg', 'https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png', 'https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg', 'https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg', 'https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg', 'https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg', 'https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg', 'https://cdn.nekos.life/wallpaper/9ru2luBo360.png', 'https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png', 'https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png', 'https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg', 'https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg', 'https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg', 'https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg', 'https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg', 'https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg', 'https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg', 'https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png', 'https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png', 'https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg', 'https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg', 'https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png', 'https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg', 'https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg', 'https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg', 'https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg', 'https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg', 'https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg', 'https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg', 'https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg', 'https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg', 'https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png', 'https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg', 'https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg', 'https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png', 'https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg', 'https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png', 'https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg', 'https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png', 'https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg', 'https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png', 'https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg', 'https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg', 'https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png', 'https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png', 'https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png', 'https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png', 'https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png', 'https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png', 'https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png', 'https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png', 'https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg', 'https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg', 'https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg', 'https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg', 'https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg', 'https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png', 'https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg', 'https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg', 'https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg', 'https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg', 'https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg', 'https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg', 'https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png', 'https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png', 'https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png', 'https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg', 'https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg', 'https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg', 'https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg', 'https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg', 'https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png', 'https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png', 'https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg', 'https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png', 'https://cdn.nekos.life/wallpaper/3db40hylKs8.png', 'https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg', 'https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg', 'https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png', 'https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png', 'https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg', 'https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png', 'https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg', 'https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg', 'https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png', 'https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg', 'https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg', 'https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg', 'https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg', 'https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg', 'https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg', 'https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg', 'https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png', 'https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png', 'https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg', 'https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png', 'https://cdn.nekos.life/wallpaper/58C37kkq39Y.png', 'https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg', 'https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg', 'https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg', 'https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png', 'https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg', 'https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg', 'https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg', 'https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg', 'https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png', 'https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg', 'https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg', 'https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png', 'https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg', 'https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg', 'https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg', 'https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg', 'https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png', 'https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png', 'https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg', 'https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg', 'https://cdn.nekos.life/wallpaper/89MQq6KaggI.png', 'https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
                    let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
                    iluser.sendFileFromUrl(message.from, walnimek, 'Nimek.jpg', `${mess.iklann}`, message.id)
                    break
        case 'cerpen':
                if(isReg(obj)) return
                if (isLimit(serial)) return
                await limitAdd(serial)  
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
        /*case prefix+'setprefix':
            if(!isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nLo siapa anyink`, message.id)
            if (args.length === 1) return iluser.reply(message.from, `Kirim perintah *${prefix}prefix [ NEW PREFIX ]*`, message.id)
            const prefa = body.slice(11)
            setting.prefix = `${prefa}`
            prefix = `${prefa}`
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting))
            iluser.sendText(message.from, `Berhasil Mengganti Prefix Ke *「* ${prefa} *」*`)
            break */
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
                        if(!cekgrup.isReadOnly) iluser.sendImage(grupnya, imageBase64, 'gambar.jpeg', txtbc)
                    }
                    iluser.reply(message.from, 'Broadcast sukses!', message.id)
                }else{
                    for(let grupnya of semuagrup){
                        var cekgrup = await iluser.getChatById(grupnya)
                        if(!cekgrup.isReadOnly && isMuted(grupnya)) iluser.sendText(grupnya, txtbc)
                    }
                            iluser.reply('Broadcast Success!', message.id)
                }
                break
        case prefix+'adminlist':
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            let mimin = 'Neeh adminnya\n'
            for (let admon of groupAdmins) {
                mimin += `• @${admon.replace(/@c.us/g, '')}\n` 
            }
           // await sleep(2000)
            await iluser.sendTextWithMentions(message.from, mimin)
            break
        case prefix+'ownergroup':
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            const Owner_ = chat.groupMetadata.owner
            await iluser.sendTextWithMentions(message.from, `Owner Group : @${Owner_}`)
            break
        case prefix+'tagall':
        case prefix+'mentionall':
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
           // if (!isBotGroupAdmins) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
            const groupMem = await iluser.getGroupMembers(groupId)
            let hehe = `${body.slice(8)}\n\n`
            for (let i = 0; i < groupMem.length; i++) {
                hehe += '•'
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += '\nPowered by *_iluser_BOT_*'
            await sleep(1000)
            await iluser.sendTextWithMentions(message.from, hehe, message.id)
            break;
        case prefix+'kickall':
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner && !isOwner) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan oleh Owner group', message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
            const allMek = await iluser.getGroupMembers(groupId)
            for (let i = 0; i < allMek.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMek[i].id)) {
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
                await iluser.sendText(gclist.contact.id, `Bot sedang melakukan pembersihan rutin\ntotal chat: ${allChats.length}\n\nUser premium bisa langsung menambahkan bot dengan perintah .join`)
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
        case prefix+'clearall':
            if (!isPilot && !isOwner) return
            iluser.reply(message.from, '[ WARN ] clearing all chat...', message.id)
            const allChatz = await iluser.getAllChats()
            for (let dchat of allChatz) {
                await iluser.deleteChat(dchat.id)
            }
            iluser.sendText(message.from, 'Succes clear all chat!', message.id)
            break
        case prefix+'add':
            try {
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
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
            break
        case prefix+'okick':
        case 'p':{
            if (!isPilot && !isOwner) return
            if (!isGroupMsg) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan dalam group', message.id)            
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
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
            if (qmid === groupAdmins) return await iluser.reply(message.from, 'Gagal, tidak bisa mengeluarkan admin grup.', message.id)
            await iluser.sendTextWithMentions(message.from, `mengeluarkan anak anjing @${qmid.replace('@c.us', '')}`)
            await sleep(2000)
            await iluser.removeParticipant(groupId, qmid)
        }
    }
            break
        case prefix+'kick':
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
            if (!quotedMsg) {
                if (mentionedJidList.length === 0) return iluser.reply(message.from, 'Format Salah', message.id)
                if (mentionedJidList[0] === botNumber) return await iluser.reply(message.from, 'Format Salah', message.id)
            await iluser.sendTextWithMentions(message.from, `Akang gendaang, mari kita tendang ${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join(' ')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (groupAdmins.includes(mentionedJidList[i])) return await iluser.sendText(message.from, 'Gagal, tidak bisa mengeluarkan admin grup.', message.id)
                await sleep(2000)
                await iluser.removeParticipant(groupId, mentionedJidList[i])
            }
        } else {
            const qmid = quotedMsgObj.sender.id
            if (qmid === botNumber) return await iluser.reply(message.from, 'Format Salah', message.id)
            if (qmid === groupAdmins) return await iluser.reply(message.from, 'Gagal, tidak bisa mengeluarkan admin grup.', message.id)
            await iluser.sendTextWithMentions(message.from, `Akang gendaang, mari kita tendang @${qmid.replace('@c.us', '')}`)
            await sleep(2000)
            await iluser.removeParticipant(groupId, qmid)
        }
            break
        case prefix+'leave':
            if (!isGroupMsg) return iluser.reply(message.from, 'Perintah ini hanya bisa di gunakan dalam group', message.id)
            if (!isPremium && !isOwner) return
            await iluser.sendText(message.from,'Goodbye :)').then(() => {
                    iluser.leaveGroup(groupId)})
            break
        case prefix+'promote':
            if(!isOwner) return iluser.reply(message.from, `Promote manual ae ngab`, message.id)
            if (!isGroupMsg) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan dalam group', message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin', message.id)
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
            }
            break
        case prefix+'demote':
            if (!isGroupMsg) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan dalam group', message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, 'Saya bukan admin ngab. jadi tidak bisa', message.id)
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
            }
            break
        case `${prefix}cgc`:
                    if (!isPilot && !isOwner) return 
                    argz = body.trim().split(' ')
                    const gcname = argz[1]
                    iluser.createGroup(gcname, mentionedJidList)
                    iluser.sendText(message.from, 'Berhasil membuat group!')
                    break
        case `${prefix}setgrouplimit`:
                    if (!isPilot && !isOwner) return
                    if (args.length == 1) return iluser.reply(message.from, `Contoh *${prefix}setgrouplimit 15*`, message.id)
                    const gli = body.slice(15)
                    setting.groupLimit = `${gli}`
                    groupLimit = `${gli}`
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    await iluser.reply(message.from, `[ WARN ] setting group limit to *${gli}* . . .`, message.id)
                    await sleep(3000)
                    await iluser.reply(message.from, `Setting done.`, message.id)
                    break
        case `${prefix}setmemberlimit`:
                    if (!isOwner) return
                    if (args.length == 1) return iluser.reply(message.from, `Contoh *${prefix}setmemberlimit 15*`, message.id)
                    const gliii = body.slice(16)
                    setting.memberLimit = `${gliii}`
                    memberLimit = `${gliii}`
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    await iluser.reply(message.from, `[ WARN ] setting member limit to *${gliii}* . . .`, message.id)
                    await sleep(3000)
                    await iluser.reply(message.from, `Setting done.`, message.id)
                    break
        case `${prefix}setlimituser`:
                    if (!isOwner) return
                    if (args.length == 1) return iluser.reply(message.from, `Contoh *${prefix}setlimituser 15*`, message.id)
                    const glii = body.slice(14)
                    setting.limitCount = `${glii}`
                    limitCount = `${glii}`
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    await iluser.reply(message.from, `[ WARN ] setting limit user to ${glii}/day`, message.id)
                    await sleep(3000)
                    await iluser.reply(message.from, `Setting done.`, message.id)
                    break
        case `${prefix}mtcstart`:
                    if (mtcState === true) return
                    if (!isOwner) return
                    setting.mtc = true
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    iluser.reply(message.from, 'Maintenance sudah di Umumkan!', message.id)
                    break
        case `${prefix}mtcstop`:
                    if (mtcState === false) return
                    if (!isOwner) return
                    setting.mtc = false
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    iluser.reply(message.from, 'Maintenance sudah di Umumkan!', message.id)
                    break
        case prefix+'fakta':
            if(isReg(obj)) return         
            if (isLimit(serial)) return
            
            //await sleep(2000)
            await limitAdd(serial)
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
            .then(res => res.text())
            .then(body => {
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                iluser.reply(message.from, randomnix, message.id)
            })
            break
        case `${prefix}tod`: //aksara
                    if(isReg(obj)) return
                            
                    if (isLimit(serial)) return
            
                    await limitAdd(serial)
                    if (!isGroupMsg) return iluser.reply(message.from, 'Perintah ini hanya bisa digunakan dalam grup', message.id)
                    const sliin = "https://blog.elevenia.co.id/wp-content/uploads/2020/04/27420-truth-or-dare.jpg"
                    const gmeek = await iluser.getGroupMembersId(groupId)
                    let gmimk = gmeek[Math.floor(Math.random() * gmeek.length)]
                    const mmkkk = `     *TRUTH OR DARE*`
                    const lllk = `Truth or Dare kali ini ditujukan kepada @${gmimk.replace(/@c.us/g, '')} \n\nSilahkan balas pesan ini dengan\n${prefix}truth atau\n${prefix}dare`
                    iluser.sendFileFromUrl(message.from, sliin, 'ddas.jpg', mmkkk, message.id)
                    //await sleep(3000)
                    await iluser.sendTextWithMentions(message.from, lllk, message.id)
                    break
        case `${prefix}truth`:{
           // await sleep(2000)
            if (!isGroupMsg) return iluser.reply(message.from, 'Perintah ini hanya bisa digunakan dalam grup', message.id)
            const dota = fs.readFileSync('./lib/database/truth.json')
            const dotaJson = JSON.parse(dota)
            const rondtruth = Math.floor(Math.random() * dotaJson.length)
            const rondtruthh = dotaJson[rondtruth]
            await iluser.reply(message.from, `*TRUTH*\n\n${rondtruthh}`, message.id)
        }
            break
        case `${prefix}dare`:{
            //await sleep(2000)
            if (!isGroupMsg) return iluser.reply(message.from, 'Perintah ini hanya bisa digunakan dalam grup', message.id)
            const dotaa = fs.readFileSync('./lib/database/dare.json')
            const dotaaJson = JSON.parse(dotaa)
            const ronddare = Math.floor(Math.random() * dotaaJson.length)
            const ronddaree = dotaaJson[ronddare]
            await iluser.reply(message.from, `*DARE*\n\n${ronddaree}`, message.id)
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
            //await sleep(2000)
            const daree = body.slice(9)
            dare.push(daree)
            fs.writeFileSync('./lib/database/dare.json', JSON.stringify(dare))
            iluser.reply(message.from, `Kalimat *${daree}*\ntelah berhasil ditambahkan ke Database`, message.id)
            break
        case `${prefix}addasupan`:
            if (!isOwner) return 
            //await sleep(2000)
            const asup = body.slice(11)
            tiktok_user.push(asup)
            fs.writeFileSync('./lib/database/usertt.json', JSON.stringify(tiktok_user))
            await sleep(2000)
            iluser.reply(message.from, `Username added to database.`, message.id)
            break
        case `${prefix}listasupan`:
            if (!isOwner) return 
            //await sleep(2000)
            let listasupan = `Lis username tiktok untuk asupan\n`
            for (let i of tiktok_user) {
            listasupan += `• ${i}\n`
            }
            await iluser.reply(message.from,listasupan, message.id)
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
        case `${prefix}lewd`:
            if(isReg(obj)) return  
            if (!isPremium) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)   
            if (isGroupMsg) return iluser.reply(message.from, `Di chat pribadi aja tolol`, message.id)    
            if (isLimit(serial)) return
            await limitAdd(serial)
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
                    }
                    break
                case `${prefix}fetish`: //thanks to BOCCHI BOT                    
                    if (args.length === 1) return await iluser.reply(message.from, 'Wrong Format!', message.id)
                    if (!isPremium) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
                    if (isLimit(serial)) return iluser.reply(message.from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik !limit Untuk Mengecek Kuota Limit Kamu`, message.id)

                    await limitAdd(serial)
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
                    }
                    break
            case `${prefix}ptlvid`:
                    if(isReg(obj)) return
                            
                    if (isLimit(serial)) return
                    
                    await limitAdd(serial)
                    const ditai = fs.readFileSync('./lib/database/asupan.json')
                    const ditaiJsin = JSON.parse(ditai)
                    const rindIndixa = Math.floor(Math.random() * ditaiJsin.length)
                    const rindKiya = ditaiJsin[rindIndixa]
                    iluser.sendFileFromUrl(message.from, rindKiya, 'asupan.mp4', `${mess.iklann}`, message.id)
                    break
        case prefix+'join':
            await sleep(1000)
            if (!isPremium) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nSilahkan menjadi user premium jika ingin menambahkan bot ke grupmu. cek fitur premium di .premium', message.id)
            //if (!isOwner) return await iluser.reply(message.from, 'Kirim linknya kesini kemudia konfirmasi ke creator bot.', message.id)
            if (isGruplimit(serial)) return iluser.reply(message.from, `Limit join grup sudah mencapai batas`, message.id)
           // if (isPremium) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nSilahkan hubungi creator bot untuk memasukkan bot secara manual', message.id)
            if (args.length === 1) return iluser.reply(message.from, 'Contoh .join https://chat.whatsapp.com/xnxx', message.id)
            const link = body.slice(6)
            const tGr = await iluser.getAllGroups()
            const minMem = 2
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await iluser.inviteInfo(link)
            if (!isLink) return iluser.reply(message.from, 'Ini link? 👊🤬', message.id)
            if (tGr.length > 256) return iluser.reply(message.from, 'Maaf jumlah group sudah maksimal!', message.id)
            if (check.size < minMem) return iluser.reply(message.from, 'Di bawah 10 member, bot tidak bisa masuk', message.id)
            if (check.status === 200) {
                await iluser.joinGroupViaLink(link).then(() => iluser.reply(message.from, 'Joined!', message.id))
                await GruplimitAdd(serial)
                await iluser.reply(message.from, `1 limit join grup terpakai`, message.id)
                console.log('SUCCESS | Join grup')
            } else {
                iluser.reply(message.from, 'Link group tidak valid atau bot sudah dikeluarkan!', message.id)
                console.log('FAILED | Join grup')
            }
            break
        case prefix+'delete':
        case prefix+'del':
            if (!isGroupMsg) return iluser.reply(message.from, 'Fitur ini hanya bisa di gunakan dalam group', message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!quotedMsg) return iluser.reply(message.from, `Salah!!, Contoh: *${prefix}delete [tagpesanbot]*`, message.id)
            if (!quotedMsgObj.fromMe) return iluser.reply(message.from, 'Salah!!, Bot tidak bisa mengahpus chat user lain!', message.id)
            //await sleep(2000)
            iluser.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case prefix+'sider':
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
            }
            break
        case prefix+'linkgroup':
        case prefix+'link':
            if (!isGroupMsg) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan dalam group`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, message.id)
            const namagcnye = chat.formattedTitle
            var gclink = await iluser.getGroupInviteLink(groupId)
            var linkgc  = `${gclink}`
            iluser.sendLinkWithAutoPreview(message.from, linkgc, '', '', message.id)
            console.log('SUCCESS | link grup')
            break
        case prefix+'resetlinkgroup':
        case prefix+'resetlink':
            if (!isGroupMsg) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan dalam group`, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, message.id)
            if (isGroupMsg) {
                await iluser.revokeGroupInviteLink(groupId);
               // await sleep(2000)
                iluser.sendTextWithMentions(message.from, `Link group telah direset oleh @${sender.id.replace('@c.us', '')}`)
            }
            break
        case prefix+'getses':
            if (!isPilot && !isOwner) return
            if (isGroupMsg){
                const sesPic = await iluser.getSnapshot()  
                await iluser.sendFile(message.from, sesPic, 'session.png', 'Nih tuan', message.id)
            }else{
                const sesPic = await iluser.getSnapshot()  
                await iluser.sendFile(message.from, sesPic, 'session.png', 'Nih tuan', message.id)
                //await iluser.deleteChat(chatId)
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
        case prefix+'limit':
            if(isReg(obj)) return
            if (isPremium) return iluser.reply(message.from, `Kamu User Premium\nSilahkan cek masa aktif premium kamu di ${prefix}cekpremium`, message.id)
            var found = false
            const limidat = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
            for(let lmt of limidat){
                if(lmt.id === serial){
                    let limitCounts = limitCount-lmt.limit
                    if(limitCounts <= 0) return iluser.reply(message.from, `Limit kamu sudah habis tod.`, message.id)
                    //await sleep(2000)
                    await iluser.reply(message.from, `Sisa limit penggunaan bot kamu: *${limitCounts}*`, message.id)
                    found = true
                }
            }
            //console.log(limit)
            //console.log(limidat)
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
                iluser.sendText(message.from, evaled)
            } catch (err) {
                iluser.reply(message.from, err, message.id)
            }}
        }

        break
        case prefix+'restart': // WORK IF YOU RUN USING PM2
            if(isOwner){
                iluser.sendText(message.from, '*[WARN]* Restarting ...')
                setting.restartState = true
                setting.restartId = chatId
                var obj = []
                //fs.writeFileSync('./lib/setting.json', JSON.stringify(obj, null,2));
                fs.writeFileSync('./lib/database/limit.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/muted.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/msgLimit.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/nsfwz.json', JSON.stringify(obj));
                const spawn = require('child_process').exec;
                function os_func() {
                    this.execCommand = function (command) {
                        return new Promise((resolve, reject)=> {
                        spawn(command, (error, stdout, stderr) => {
                            if (error) {
                                reject(error);
                                return;
                            }
                            resolve(stdout)
                        });
                    })
                }}
                var oz = new os_func();
                oz.execCommand('pm2 restart index').then(res=> {
                }).catch(err=> {
                    console.log("os >>>", err);
                })
            }
            break
        case prefix+'restlimit':
            if(isOwner){
                let benetc = limit.indexOf(limit[0])
                limit.splice(benetc)
                fs.writeFileSync('./lib/database/limit.json', JSON.stringify(limit))
                await iluser.reply(message.from, '*[ WARN ]* Restarting limit user...', message.id)
                await sleep(2000)
                await iluser.reply(message.from, `Restarting limit done`, message.id)
                console.log('[INFO] Limit restarted!');
            }
            break
        case prefix+'block':
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
            if (!isPilot && !isOwner && !isPremium) return 
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await iluser.contactUnblock(unblock).then((a)=>{
                    console.log(a)
                    sleep(1000)
                    iluser.reply(message.from, `unblocked target`, message.id)
                })
            } 
            break
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
        case `${prefix}getpp`:{
            if (!isGroupMsg) return iluser.reply(message.from, 'Perintah ini hanya dapat digunakan di dalam grup', message.id)
                var pik = await iluser.getProfilePicFromServer(mentionedJidList[0])
                if (pik === undefined) {
                            var ypfps = ppdepresi
                        } else {
                            var ypfps = pik
                        }
                await iluser.sendFileFromUrl(message.from, pik, 'pik.jpg', 'Nih Foto profilnya', message.id)
        }
        break
        case `${prefix}getsts`:
            if (!isGroupMsg) return iluser.reply(message.from, 'Perintah ini hanya dapat digunakan di dalam grup', message.id)
                var ssts = await iluser.getStatus(mentionedJidList[0])
                const { status } = ssts
                await iluser.sendTextWithMentions(message.from, `Status dari @${mentionedJidList[0].replace('@c.us', '')}.\n\n${status}\n`, message.id)         
                break
        case prefix+'ban':
            if (!isPilot && !isOwner) return 
            for (let i = 0; i < mentionedJidList.length; i++) {
                //if ((adminNumber).includes(mentionedJidList[i])) return iluser.reply(message.from,`Maaf ${pushname}, Kamu tidak bisa banned Admin iluser_BOT!`, message.id)
                banned.push(mentionedJidList[i])
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                await sleep(2000)
                iluser.reply(message.from, `Done banned target`, message.id)
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
                let berhitung1 = 1
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
        case prefix+'stat':
            if (!isPilot && !isOwner) return 
    const loadedMsg = await iluser.getAmountOfLoadedMessages()
    const chatIds = await iluser.getAllChatIds()
    const groups = await iluser.getAllGroups()
    const groupsIn = groups.filter(x => x.groupMetadata.participants.map(x => [botNumber, '6281515860089@c.us'].includes(x.id._serialized)).includes(true))
    const me = await iluser.getMe()
    const battery = await iluser.getBatteryLevel()
    const isCharging = await iluser.getIsPlugged()
    const used = process.memoryUsage()
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
        return cpu
    })
    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total
        last.speed += cpu.speed / length
        last.times.user += cpu.times.user
        last.times.nice += cpu.times.nice
        last.times.sys += cpu.times.sys
        last.times.idle += cpu.times.idle
        last.times.irq += cpu.times.irq
        return last
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
        }
    })
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

Speed Respon: ${speed} _Detik_
`.trim(), message.id)
    console.log('SUCCESS | stat bot')
break
        case prefix+'setgroupname':
            if (!isGroupMsg) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan dalam group`, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, message.id)
            const namagrup = body.slice(14)
            let sebelum = chat.groupMetadata.formattedName
            let halaman = global.page ? global.page : await iluser.getPage()
            await halaman.evaluate((chatId, subject) =>
            Store.WapQuery.changeSubject(chatId, subject),groupId, `${namagrup}`)
            iluser.sendTextWithMentions(message.from, `Nama grup telah diubah oleh @${sender.id.replace('@c.us','')}\n\n• Before: ${sebelum}\n• After: ${namagrup}`)
            break
        case prefix+'setgroupicon':
            if (!isGroupMsg) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan dalam group`, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, message.id)
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

        case prefix+'setdesk':
            if (!isGroupMsg) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan dalam group`, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            const descnya = body.slice(9)
            const ganti = await iluser.setGroupDescription(descnya)
                await iluser.setGroupDescription(groupId, ganti, message.id)
                await sleep(2000)
                await iluser.reply(message.from, `Done setting description`, message.id)
            break
        case prefix+'bug':
            if (args.length === 1) return iluser.reply(message.from, `Keluhan mu mana tol?`, message.id)
            const bug = body.slice(4)
            if(!bug) return
            if(isGroupMsg){
                iluser.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\nGroup : ${formattedTitle}\n\n${bug}`)
                sleep(2000)
                iluser.reply(message.from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 akan di blokir bot!' , message.id)
            }else{
                iluser.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\n\n${bug}`)
                sleep(2000)
                iluser.reply(message.from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 akan di blokir bot!', message.id)
            }
            break
         case prefix+'profile':
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
            break
        case prefix+'verif':
        case prefix+'verify':
        case prefix+'register':
        case prefix+'daftar':
        case '/verif':
        case '/verify':
        case '/register':
        case '/daftar':
        case '!verif':
        case '!verify':
        case '!register':
        case '!daftar':
        case '#verif':
        case '#verify':
        case '#register':
        case '#daftar':
        case '@verif':
        case '@verify':
        case '@register':
        case '@daftar':
        case '-verif':
        case '-verify':
        case '-register':
        case '-daftar':
        case '_verif':
        case '_verify':
        case '_register':
        case '_daftar':
           // await sleep(2000)
            const nonye = sender.id
            const pporang = await iluser.getProfilePicFromServer(sender.id)
            if (pporang === undefined) {
            var pepe = ppdepresi
            } else {
            var pepe = pporang
            }
            var ceknya = nonye
            var obj = pendaftar.some((val) => {
            return val.id === ceknya
            })
            if (obj === true){
            return //iluser.reply(message.from, 'Kamu sudah melakukan verifikasi', message.id) // BAKAL RESPON JIKA NO UDAH ADA
            } else {
            const mentah = await iluser.checkNumberStatus(nonye) // PENDAFTARAN
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
            fs.writeFileSync('./lib/database/user.json', JSON.stringify(pendaftar)) // DATABASE
            iluser.sendFileFromUrl(message.from, pepe, 'ppnya.jpg', hasil, message.id)
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
        case prefix+'help':
            if(isReg(obj)) return  
            //await sleep(3000)             
            //if(!isOwner) return iluser.reply(message.from, `${pushname} mau lihat menu? tebak aja ya.\nList menunya masih seperti yang dulu dan gaada yang berubah seperti rasaku padamu\n\nBantu aku jadi yutuber dengan cara subrek www.youtube.com/iluser`, message.id)
            const pporangg = await iluser.getProfilePicFromServer(sender.id)
            if (pporangg === undefined) {
            var pepee = logoo
            } else {
            var pepee = pporangg
            }
            iluser.sendFileFromUrl(message.from, pepee, 'ppnya.jpg', help.replace(undefined, pushname), message.id)
            console.log(color('SUCCESS | Menu', 'olive'))
           // await iluser.sendImage(message.from, './logo.png', 'iluser.png', help.replace(undefined, pushname), message.id)
            break;
        case prefix+'menuadmin':
        case prefix+'adminmenu':
            if (!isGroupMsg) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nHanya dapat di gunakan di dalam grup', message.id)
            //await sleep(2000)
            await iluser.sendImage(message.from, './logo.png', 'iluser.png', menuadmin, message.id)
            console.log(color('SUCCESS | menuadmin', 'olive'))
            break

case prefix+'simi':{
 function rndnum(count){
    const so = count - 1;
    return Math.ceil(Math.random() * so);
  }
  const key = ['xU3pjm5b5Mno4HBPSjG-yFFY7sY9ha8Rjp8orIEz', '0GTOhtxqEUIBpgXttxObaxB6zhMpwC1tS8ceOf0d', 'Tiw9LtweLu99c~bffr1w5KcZz_5WM9dqBQ9gg46H'];
  const no = rndnum(key.length);
  const pesan = message.body.slice(2);
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': key[no]
    }
    const data = {
      "utext": pesan, 
      "lang": "id" 
    }

    axios.post('https://wsapi.simsimi.com/190410/talk', data, { headers : headers }).then((res)=>{
      iluser.reply(message.from, res.data.atext, message.id);
      console.log(`SUCCESS | send simsimi`)
    })
  }
  break

            //NEW FITURE
        case prefix+'warn':{
            if (!isGroupMsg) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan dalam group`, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, message.id)
        try {
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
        }catch(err){
            console.log(color('FAILED | warn', 'red'))
            iluser.sendText(ownerNumber, `Error warn:\n${err}`)
            iluser.reply(message.from, 'Error', message.id)
    }
    }
    break
        case prefix+'delwarn':{
            if (!isGroupMsg) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan dalam group`, message.id)
            if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, `⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?`, message.id)
            if (!isBotGroupAdmins) return iluser.reply(message.from, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, message.id)
        try {
            const target = message.quotedMsgObj.author;
            var targett = target.match(/\d+/g);
            await getDB.del_warn(message.from, target);
            await getDB.del_warn_badword(message.from, target);
            iluser.sendTextWithMentions(message.from, `Peringatan untuk @${targett} telah dihapus`, message.id);
            console.log(`SUCCESS | delete warn member`)
        }catch(err){
            console.log(color('FAILED | warn', 'red'))
            iluser.sendText(ownerNumber, `Error warn:\n${err}`)
            iluser.reply(message.from, 'Error', message.id)
    }
    }
    break
        case prefix+'imgtopdf':{
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
        case prefix+'topdf':
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
                              await limitAdd(serial)
                              console.log('succcess')   
                        }else{
                            iluser.reply(message.from, 'Maaf format file tidak sesuai', message.id)
                        }
                        break
        case prefix+'mlmaker':
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            if (args.length === 1) return iluser.reply(message.from, `Contoh ${prefix}mlmaker |saber|iluser`, message.id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
                //iluser.reply(message.from, mess.wait, message.id)
                const lmlog = argz[1]
                const lmlog2 = argz[2]
                iluser.sendFileFromUrl(message.from, `https://api.vhtear.com/logoml?hero=${lmlog}&text=${lmlog2}&apikey=${vhtearkey}`,'emel.jpg',`${mess.iklann}`, message.id)
                await limitAdd(serial)
            } else {
                await iluser.reply(message.from, `Wrong Format!\nContoh: ${prefix}mlmaker |saber|iluser`, message.id)
            }
            break
        case prefix+'readmore':
            if(isReg(obj)) return
            if (isLimit(serial)) return
            if (args.length === 1) return iluser.reply(message.from,  `Contoh: ${prefix}readmore hai beb|an keluarga`, message.id)
            const readcuys = body.slice(10)
            const readcuys1 = readcuys.split('|')[0]
            const readcuys2 = readcuys.split('|')[1]
            iluser.reply(message.from, `${readcuys1}‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‎${readcuys2}`, message.id)
            await limitAdd(serial)
            break
    case prefix+'nickepep': //CHIKABOT
    if(isReg(obj)) return                      
    if (isLimit(serial)) return 
    await limitAdd(serial)
    const amjayepep = await fetch('https://api.zeks.xyz/api/nickepep?apikey=apivinz') 
    const ptrsss = await amjayepep.json()
    const amjayepep2 = ptrsss.result 
    const amjayepep3 = JSON.parse(JSON.stringify(amjayepep2))         
    const amjayepep1 = amjayepep3[Math.floor(Math.random() * (amjayepep2.length))]
    iluser.reply(message.from, `*NICK EPEP GENERATOR*\n\n${amjayepep1}\n`, message.id)
         break

        //SCRAP MANUAL
        case prefix+'bordir2': {
                    const tes15 = body.slice(9)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}bordir2 iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
                    const tes15 = body.slice(11)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}snow-sign iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
                    const tes15 = body.slice(12)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}beach-sign iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
                    const tes15 = body.slice(7)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}kapal iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
                    const tes15 = body.slice(9)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}pesawat iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
                    const tes15 = body.slice(7)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}jalan iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
                    const tes15 = body.slice(10)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}einstein iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
                    const tes15 = body.slice(10)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}lipstick iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
                    const tes15 = body.slice(12)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}typewriter iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
        case prefix+'graffiti': {
                    const tes15 = body.slice(10)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}graffiti iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
                    const tes15 = body.slice(11)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}graffiti3 iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
                    const tes15 = body.slice(8)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}gelang iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
                    const tes15 = body.slice(8)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}kalung iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
                    const tes15 = body.slice(7)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}embun iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
        case prefix+'salju': {
                    const tes15 = body.slice(7)
                    const tes151 = tes15.split('|')[0]
                    const tes152 = tes15.split('|')[1]
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}salju iluser_BOT | Keren`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | salju maker', 'red'))
                            iluser.sendText(ownerNumber, `Error salju maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
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
                    const tes15 = body.slice(13)
                    const tes151 = tes15.split('|')[0]
                    const tes152 = tes15.split('|')[1]
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}bioskop iluser_BOT | Keren`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | bioskop text', 'red'))
                            iluser.sendText(ownerNumber, `Error bioskop text:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | bioskop maker', 'red'))
            iluser.sendText(ownerNumber, `Error bioskop maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'kue': {
                    const tes15 = body.slice(5)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}kue iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
        case prefix+'wooden-sign': {
                    const tes15 = body.slice(13)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}wooden-sign iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
                    const tes15 = body.slice(11)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}chalktext iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
        case prefix+'karat': {
                    const tes15 = body.slice(7)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}karat iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
        case prefix+'kayu': {
                    const tes15 = body.slice(6)
                    const tes151 = tes15.split('|')[0]
                    const tes152 = tes15.split('|')[1]
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}kayu iluser_BOT|Mantap`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | kayu maker', 'red'))
                            iluser.sendText(ownerNumber, `Error kayu maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | kayu maker', 'red'))
            iluser.sendText(ownerNumber, `Error kayu maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'tato': {
                    const tes15 = body.slice(6)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}tato iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
        case prefix+'neon-sign': {
                    const tes15 = body.slice(11)
                    const tes151 = tes15.split('|')[0]
                    const tes152 = tes15.split('|')[1]
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}neon-sign iluser_BOT | Keren`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
                            iluser.sendFileFromUrl(message.from, text, 'iluser_BOT.jpg', `${mess.iklann}`, message.id)
                            browser.close();
            
                        })
                        .catch((err => {
                            browser.close();
                            console.log(color('FAILED | neon-sign maker', 'red'))
                            iluser.sendText(ownerNumber, `Error neon-sign maker:\n${err}`)
                            iluser.reply(message.from, 'Error', message.id)
                        }))
            })();
            } catch (error) {
            console.log(color('FAILED | neon-sign maker', 'red'))
            iluser.sendText(ownerNumber, `Error neon-sign maker:\n${error}`)
            iluser.reply(message.from, 'Error', message.id)
            }
            }
            break
        case prefix+'window': {
                    const tes15 = body.slice(8)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}window iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
                    const tes15 = body.slice(8)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}blood2 iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
        case prefix+'graffiti2': {
                    const tes15 = body.slice(11)
                    if (!tes15) return iluser.reply(message.from, `Contoh: ${prefix}graffiti2 iluser_BOT`, message.id)
                    // iluser.reply(message.from, mess.wait, message.id)       
            if(isReg(obj)) return
            if (isLimit(serial)) return 
            await limitAdd(serial)
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
                            const urlmp4 = ({
                                url: text
                            })
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
        case prefix+'donate':
        case prefix+'donasi':
            //if(!isOwner) return iluser.reply(message.from, `\nHii ${pushname},\n\nBot is under maintenance\n• _https://youtu.be/MZ6jAJgH_2s_\n`, message.id)
            iluser.sendImage(message.from, './dana.jpeg', 'iluser.jpeg', donatee.replace(undefined, pushname), message.id)
            break
        case prefix+'about':
            if(isReg(obj)) return
            iluser.reply(message.from, info.replace(undefined, pushname), message.id)
            break
        case prefix+'info':
            if(isReg(obj)) return
            iluser.reply(message.from, readme, message.id)
            break
        case prefix+'bahasa':
            iluser.reply(message.from, bahasalist, message.id)
            break
        case prefix+'wa.me':
        case prefix+'wame':
            if(isReg(obj)) return
            iluser.reply(message.from, `Nih ${pushname} nomor wa lu\n\nwa.me/${sender.id.replace(/[@c.us]/g, '')}\n\nAtau\n\napi.whatsapp.com/send?phone=${sender.id.replace(/[@c.us]/g, '')}`, message.id)
            break
        case prefix+'me':
                await iluser.sendVCard(message.from, `${sender.id}`,'vcard', 'Your Contact', `${sender.id}`, message.id)
            break
        case prefix+'premium':
        case prefix+'premfitur':
        case '#premfitur':        
            await iluser.reply(message.from, premfitur, message.id)
            await sleep(1000)
            await iluser.sendTextWithMentions(message.from, `Hubungi creator bot jika berminat @${ownerNumber}`, message.id)
            break
        case prefix+'snk':
            iluser.reply(message.from, snk, message.id)
            break
        case '#rules':
        case prefix+'rules':
            iluser.reply(message.from, rules, message.id)
            break;

//PREMIUM tobz
        case `${prefix}xxx`:
            if(isReg(obj)) return
                if (isLimit(serial)) return 
            if (!isPremium) return await iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
                await limitAdd(serial)
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
            break
        case `${prefix}getxxx`:
            if(isReg(obj)) return
                if (isLimit(serial)) return 
            if (!isPremium) return await iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
                await limitAdd(serial)
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
                        const captions = `*XXX DOWNLOADER*\n\n*Title* : ${title}\n\n*Ext* : MP4\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
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
                        const captions = `*XXX DOWNLOADER*\n\n*Title* : ${title}\n\n*Ext* : MP4\n\n*Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit*`
                        iluser.sendFileFromUrl(message.from, `https://thumbs.dreamstime.com/b/xxx-neon-sign-dark-background-xxx-neon-sign-dark-background-vector-illustration-129829099.jpg`, `xxx.jpg`, xixixi, message.id)
                        // await iluser.sendFileFromUrl(message.from, result, `${title}.mp3`, `Music telah terkirim ${pushname}`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                        
                   }
                }
            } catch (err) {
                iluser.sendText(ownerNumber, 'Error XVideos : '+ err)
                iluser.reply(message.from, `*Kesalahan! Pastikan id download sudah benar.*`, message.id)
                console.log(err)
            }
            break
        case `${prefix}xvideos`:
            if(isReg(obj)) return
                if (isLimit(serial)) return 
            if (!isPremium) return await iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
                await limitAdd(serial)
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
            break
        case `${prefix}getxvideos`:
            if(isReg(obj)) return
                if (isLimit(serial)) return
            if (!isPremium) return await iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte premium?', message.id)
                await limitAdd(serial)
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
                        const shortvidxv = await urlShortener(mp4)
                        const captions = `*XVIDEOS DOWNLOADER*\n\n*Website* : XVideos\n*Ext* : MP3\n\n*Silahkan download file media sedang melalui link yang tersedia.*\n${shortvidxv}`
                        //await iluser.sendFileFromUrl(message.from, `https://sensorstechforum.com/wp-content/uploads/2019/07/xvideos-virus-image-sensorstechforum-com.jpg`, ``, captions, message.id)
                        if (!isOwner) return iluser.reply(message.from, `Download sendiri ngab lewat sini. Males kalo server bot error karena command bokep\n${shortvidxv}`, message.id)
                        await iluser.sendFileFromUrl(message.from, shortvidxv, `bokep.mp4`, `XVIDEOS BY iluser_BOT`, message.id).catch(() => iluser.reply(message.from, mess.error.Yt4, message.id))
                        
                        } catch (err){
                            console.log(err)
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
            break

        case prefix+'trash':
            if(isReg(obj)) return
                if (isLimit(serial)) return 
            
                await limitAdd(serial)
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
                } catch (err) {
                    console.error(err)
                    await iluser.reply(message.from, 'Error!', message.id)
                }
            break
        case prefix+'hitler':
            if(isReg(obj)) return
                if (isLimit(serial)) return 
            
                await limitAdd(serial)
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
                } catch (err) {
                    console.error(err)
                    await iluser.reply(message.from, 'Error!', message.id)
                }
            break
        case prefix+'jail':
            if(isReg(obj)) return
                if (isLimit(serial)) return 
            
                await limitAdd(serial)
                  if (!isGroupMsg) return iluser.reply(message.from, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
                try {
                     for (let i = 0; i < mentionedJidList.length; i++) {
                      var ypics = await iluser.getProfilePicFromServer(mentionedJidList[i])
                        if (ypics === undefined) {
                            var ypfps = ppdepresi
                        } else {
                            var ypfps = ypics
                        }
                        const ppRaw = ypics
                        canvas.Canvas.jail(ppRaw)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_hitlered.jpg`)
                                await iluser.sendFile(message.from, `${sender.id}_hitlered.jpg`, `${sender.id}_hitlered.jpg`, `${mess.iklann}`, message.id)
                                fs.unlinkSync(`${sender.id}_hitlered.jpg`)
                            })
                        }
                } catch (err) {
                    console.error(err)
                    await iluser.reply(message.from, `Error!\n${err}`, message.id)
                }
            break
        case prefix+'shutdown':
                if (isOwner){
                await iluser.sendText(message.from, '[ WARN ] Process to shutdown...')
                let before = await iluser.getAmountOfLoadedMessages()
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

        case prefix+'>':
            if (!isOwner) return iluser.reply(message.from, `Nte siapa?`, message.id)
            const cmdw = exec(`${body.slice(3)}`, function(stderr, data) {
                if (stderr) {
                    console.log(stderr)
                    iluser.reply(message.from, data + '\n\n' + stderr, message.id)
                } else {
                    console.log(data)
                    iluser.reply(message.from, data, message.id)
                }
            })
            break
        // Level [BETA] by Slavyan
            case prefix+'level':
                // if (!isOwner) iluser.reply(message.from, 'Fitur ini di nonaktifkan oleh developer bot.', message.id)
                if(isReg(obj)) return
                //if (!isLevelingOn) return await iluser.reply(from, `Leveling system not activated`, id)
                if (!isGroupMsg) return await iluser.reply(from, `hanya di dalam grup`, id)
                const userLevel = level.getLevelingLevel(sender.id, _level)
                const userXp = level.getLevelingXp(sender.id, _level)
                const ppLink = await iluser.getProfilePicFromServer(sender.id)
                if (ppLink === undefined) {
                    var pepe = ppdepresi
                } else {
                    pepe = ppLink
                }
                const requiredXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                const rank = new canvas.Rank()
                    .setAvatar(pepe)
                    .setLevel(userLevel)
                    .setLevelColor('#ffa200', '#ffa200')
                    .setRank(Number(level.getUserRank(sender.id, _level)))
                    .setCurrentXP(userXp)
                    .setOverlay('#000000', 100, false)
                    .setRequiredXP(requiredXp)
                    .setProgressBar('#ffa200', 'COLOR')
                    .setBackground('COLOR', '#000000')
                    .setUsername(pushname)
                    .setDiscriminator(sender.id.substring(6, 10))
                rank.build()
                    .then(async (buffer) => {
                        canvas.write(buffer, `${sender.id}_card.png`)
                        await iluser.sendFile(from, `${sender.id}_card.png`, `${sender.id}_card.png`, '', id)
                        fs.unlinkSync(`${sender.id}_card.png`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await iluser.reply(from, 'Error!', id)
                    }) 
            break
            case prefix+'lb':
            case prefix+'leaderboard':
                //if (!isOwner) iluser.reply(message.from, 'Fitur ini di nonaktifkan oleh developer bot.', message.id)
               { if(isReg(obj)) return
                //if (!isLevelingOn) return await iluser.reply(from, `Leveling system not activated`, id)
                if (!isGroupMsg) return await iluser.reply(from, `Hanya bisa di dalam grup`, id)
                if (!isGroupAdmins && !isOwner) return iluser.reply(message.from, '⛔ *AKSES DI TOLAK* ⛔\n\nNte admin?', message.id)
                const resp = _level
                _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                let leaderboard = '-----[ *LEADERBOARD* ]----\n\n'
                try {
                    for (let i = 0; i < 10; i++) {
                        var roles = 'Copper V'
                        if (resp[i].level >= 5) {
                            roles = 'Copper IV'
                        } else if (resp[i].level >= 10) {
                            roles = 'Copper III'
                        } else if (resp[i].level >= 15) {
                            roles = 'Copper II'
                        } else if (resp[i].level >= 20) {
                            roles = 'Copper I'
                        } else if (resp[i].level >= 25) {
                            roles = 'Silver V'
                        } else if (resp[i].level >= 30) {
                            roles = 'Silver IV'
                        } else if (resp[i].level >= 35) {
                            roles = 'Silver III'
                        } else if (resp[i].level >= 40) {
                            roles = 'Silver II'
                        } else if (resp[i].level >= 45) {
                            roles = 'Silver I'
                        } else if (resp[i].level >= 50) {
                            roles = 'Gold V'
                        } else if (resp[i].level >= 55) {
                            roles = 'Gold IV'
                        } else if (resp[i].level >= 60) {
                            roles = 'Gold III'
                        } else if (resp[i].level >= 65) {
                            roles = 'Gold II'
                        } else if (resp[i].level >= 70) {
                            roles = 'Gold I'
                        } else if (resp[i].level >= 75) {
                            roles = 'Platinum V'
                        } else if (resp[i].level >= 80) {
                            roles = 'Platinum IV'
                        } else if (resp[i].level >= 85) {
                            roles = 'Platinum III'
                        } else if (resp[i].level >= 90) {
                            roles = 'Platinum II'
                        } else if (resp[i].level >= 95) {
                            roles = 'Platinum I'
                        } else if (resp[i].level >= 100) {
                            roles = 'Exterminator'
                        }
                        leaderboard += `${i + 1}. wa.me/${_level[i].id.replace('@c.us', '')}\n➸ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n➸ *Role*: ${roles}\n\n`
                    }
                    await iluser.reply(from, leaderboard, id)
                } catch (err) {
                    console.error(err)
                    await iluser.reply(from, `Tidak memenuhi kriteria`, id)
                }
            } 
            break

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

/**
 * create custom meme
 * @param  {String} imageUrl
 * @param  {String} topText
 * @param  {String} bottomText
 */
async function customText(imageUrl, top, bottom) {
    return new Promise((resolve, reject) => {
        let fix = str => str.trim().replace(/\s/g, '_').replace(/\?/g, '~q').replace(/\%/g, '~p').replace(/\#/g, '~h').replace(/\//g, '~s')
        fetchBase64(`https://api.memegen.link/images/custom/${fix(top)}/${fix(bottom)}.png?background=${imageUrl}`, 'image/png')
            .then(result => resolve(result))
            .catch(err => {
                console.error(err)
                reject(err)
            })
    })
}


/**
 * Fetch base64 from url
 * @param {String} url
 */

const fetchBase64 = (url, mimetype) => {
    return new Promise((resolve, reject) => {
        console.log('Get base64 from:', url)
        return fetch(url)
            .then((res) => {
                const _mimetype = mimetype || res.headers.get('content-type')
                res.buffer()
                    .then((result) => resolve(`data:${_mimetype};base64,` + result.toString('base64')))
            })
            .catch((err) => {
                console.error(err)
                reject(err)
            })
    })
}

function post(url, formdata) {
    console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "*/*",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
    })
}


            function clampFloat(value) {
                return value > 1 ? 1 : value < -1 ? -1 : value
            }
            function useQuoted(text, quotedMsgObj) {
                if (text && quotedMsgObj) return false
                else if (!text && quotedMsgObj) return true
                else if (text && !quotedMsgObj) return false
                else return ''
            }
            function clamp(value, min, max) {
                return Math.min(Math.max(min, value), max)
            }
            function distordFX(value) {
                return value > 0 ? 1 : value < 0 ? -1 : 0
            }   
                        
            //await iluser.sendSeen(from) 
            }
        }

    } catch(err){}
}