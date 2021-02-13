const fs = require('fs-extra')
const { prefix } = JSON.parse(fs.readFileSync('./lib/database/setting.json'))

function help( pushname ) {
    return `
    *SELAMAT DATANG ${pushname}*

Follow me on instagram.com/iluser.bot

===============================
*${prefix}rules* [ *RULES BOT!* ]
*${prefix}about* [ info bot ]
*${prefix}info* [ CHANGELOG BOT ]
*${prefix}snk* [ Syarat dan ketentuan ]
*${prefix}bug* _keluh kesahmu_
*${prefix}premfitur* [ fitur premium? ]
*cekprefik* [ prefix yang digunakan ]
*${prefix}donasi* [ jika ingin donasi ]
===============================

Use the translation if you don't understand the words.
${prefix}translate *code* _the text you don't understand_

[for code, type *${prefix}bahasa* to see a list of language codes]


 Tools Management group
\t[ *${prefix}menuadmin* ]


    *EDUCATION MENU*

› ${prefix}brainly *tugasmu*
› ${prefix}nulis *kalimatmu*
› ${prefix}nulis2 *kalimatmu*
› ${prefix}nulis3 *kalimatmu*
› ${prefix}wiki *kata kunci*
› ${prefix}kbbi *kata kunci*
› ${prefix}translate *_code_ kalimatmu*
› ${prefix}tr *code* [ reply message ]
› ${prefix}google *kata kunci*
› ${prefix}hitung *angkanya*
    Kalkulator ( + / * - )


    *SEARCH MENU*

› ${prefix}playstore *name application*
› ${prefix}apkpure *name application*
› ${prefix}shopee *nama barang*
› ${prefix}newlinesticker
› ${prefix}ytsearch *kata-kunci*
› ${prefix}spek *nama HP*
› ${prefix}motor *nama motor*
› ${prefix}mobil *nama mobil*


    *INFORMATION MENU*

› ${prefix}jarak *kota|kota*
› ${prefix}heroml *nama hero*
› ${prefix}jadwalbola 
› ${prefix}waktu
› ${prefix}news
› ${prefix}covidindo
› ${prefix}covid *country*
› ${prefix}infonomor *phone number*
› ${prefix}ceklokasi *reply with your location*
    Cek peyebaran virus korona di sekitarmu


    *RELIGI MENU*

› ${prefix}quran *nomor surah*
› ${prefix}tafsir *surah ayat*
› ${prefix}infosurah *nama surah*
› ${prefix}listsurah


    *STICKER CREATOR*

› ${prefix}stiker *send or reply with your image/video*
› ${prefix}emstik *your emoji*
› ${prefix}sfire *send or reply with your image*
› ${prefix}slight *send or reply with your image*
› ${prefix}sgif *send or reply with your video/gif*
› ${prefix}sgif2 *send or reply with your video/gif*
› ${prefix}ttp *text*
› ${prefix}ttp2 *text*
› ${prefix}ttg *text*
› ${prefix}memesticker *text1 | text2*
› ${prefix}findstiker *nama stiker*
› ${prefix}sline *link sticker line*


    *DOWNLOAD MENU*

› ${prefix}video *nama video*
› ${prefix}getvideo *kode /urutan video*
› ${prefix}music *nama audio*
› ${prefix}getmusic *kode / urutan music*
› ${prefix}asupan *username tiktok*
› ${prefix}yt *link youtube*
› ${prefix}ytmp3 *link youtube*
› ${prefix}lagu *judul lagu*
› ${prefix}play *judul lagu*
› ${prefix}joox *judul lagu*
› ${prefix}ig *link post*
› ${prefix}ig2 *link post*
› ${prefix}tw *link post*
› ${prefix}tw2 *link post*
› ${prefix}pin *link post*
› ${prefix}fb *link post*
› ${prefix}fb2 *link post*
› ${prefix}tiktok *link post*
› ${prefix}tt *link post*
› ${prefix}smule *link smule*
› ${prefix}starmaker *link startmaker*
› ${prefix}igstory *username*


    *AUDIO MENU*

› ${prefix}tomp3 *reply video*
› ${prefix}bass *reply audio*
› ${prefix}distord *reply audio*
› ${prefix}tts *_code_ text*
› ${prefix}setvn *nama vn*
› ${prefix}v *nama vn*
› ${prefix}listvn


    *TEXT MENU*

› ${prefix}cerpen
› ${prefix}kebalik *text*
› ${prefix}creepyfact
› ${prefix}fakta
› ${prefix}cersex
› ${prefix}bacot
› ${prefix}bacotadd *text*
› ${prefix}renungan
› ${prefix}pantun 
› ${prefix}bucin
› ${prefix}katasenja
› ${prefix}katafiersa
› ${prefix}quotes 
› ${prefix}quotes2
› ${prefix}hilih *text*
› ${prefix}alay *text*
› ${prefix}chord *kata kunci*
› ${prefix}lirik *judul lagu*
› ${prefix}zodiak *zodiakmu*
    zodiak hari ini
› ${prefix}zodiak2 *zodiakmu*
    zodiak minggu ini


    *IMAGE MENU*

› ${prefix}wall
› ${prefix}toimg *reply sticker*
› ${prefix}textmaker *|Hai|maniez*
› ${prefix}gambar *kata kunci*
› ${prefix}googleimage *|kata kunci|jumlah*
› ${prefix}twtstalk *username*
› ${prefix}tiktokstalk *username*
› ${prefix}igstalk *username*
› ${prefix}smulestalk *username*
› ${prefix}phcomment *nama|text*
› ${prefix}quotemaker *|text|author|theme*
› ${prefix}quoteit *text|author*
› ${prefix}maps *nama kota*
› ${prefix}pokemon 
› ${prefix}kucing 
› ${prefix}anjing
› ${prefix}memeindo
› ${prefix}meme
› ${prefix}qrcode *text*
› ${prefix}dadu
› ${prefix}koin 
› ${prefix}cewe 
› ${prefix}cowo 
› ${prefix}ptlvid
› ${prefix}infoGempa
› ${prefix}ssphone *url*
› ${prefix}sspc *url*
› ${prefix}springflow *your image*
› ${prefix}watersplash *your image*
› ${prefix}cloudy *your image*
› ${prefix}sketch *your image*


    *CREAT MENU*

› ${prefix}kue *text*
› ${prefix}chalktext *text*
› ${prefix}wooden-sign *text*
› ${prefix}salju *text1 | text2*
› ${prefix}bioskop *text1 | text2*
› ${prefix}kalung *text*
› ${prefix}gelang *text*
› ${prefix}beach-sign *text*
› ${prefix}bordir2 *text*
› ${prefix}blood2 *text*
› ${prefix}window *text*
› ${prefix}snow-sign *text*
› ${prefix}kapal *text*
› ${prefix}pesawat *text*
› ${prefix}jalan *text*
› ${prefix}einstein *text*
› ${prefix}lipstick *text*
› ${prefix}typewriter *text*
› ${prefix}graffiti *text*
› ${prefix}graffiti2 *text*
› ${prefix}graffiti3 *text*
› ${prefix}tahta *text*
› ${prefix}goreng *reply image*
› ${prefix}carbon *text*
› ${prefix}neon-sign *text1 | text2*
› ${prefix}karat *text*
› ${prefix}kayu *text1 | text2*
› ${prefix}tato *text*


    *OTHER MENU*

› ${prefix}resend *reply bot media*
› ${prefix}kadargay *tag*
› ${prefix}katabijak
› ${prefix}resi *ekspredisi _no resi_*
› ${prefix}kurs *mata uang | jumlah*
› ${prefix}aiquote
› ${prefix}puisi
› ${prefix}subreddit *kata kunci*
› ${prefix}tod *truth/dare*
› ${prefix}family100
› ${prefix}caklontong
› ${prefix}tebakgambar
› ${prefix}artinama *namamu*
› ${prefix}pasangan *namamu | nama doimu*
› ${prefix}nomorhoki *nomormu*
› ${prefix}shorturl *urlnya*
› ${prefix}alamat *adress*
› ${prefix}readmore *text|text*
› ${prefix}checkip *ip target*
› ${prefix}checkip2 *ip target*
› ${prefix}imgcompress tag gambarnya
› ${prefix}jarak |kotamu|kota doimu
› ${prefix}nickepep
› ${prefix}wasted *reply image*
› ${prefix}gdrive *link file google drive*
› ${prefix}resep *nama masakan*
› ${prefix}kiss *reply pesan target*
› ${prefix}jail *reply pesan target*


   *KERANG MENU*

› ${prefix}apakah *kata-katamu*
› ${prefix}bisakah *kata-katamu*
› ${prefix}nilai *kata-katamu*
› ${prefix}kapankah *kata-katamu*


    *IN GROUP MENU*

› ${prefix}trash *@tag*
› ${prefix}hitler *@tag*
› ${prefix}babi
› ${prefix}ganteng
› ${prefix}cantik
› ${prefix}getpp *@tag orangnya*
› ${prefix}getsts *@tag orangnya*
› ${prefix}slap *@tag orangnya*
› ${prefix}hug *@tag yang mau di peluk*
› ${prefix}pat *@tag yang mau di elus*
› ${prefix}afk *Your reason*
› ${prefix}groupinfo


    *WIBU MENU*

› ${prefix}hnder *kode nuklir*
› ${prefix}randombkiss
› ${prefix}randomhug 
› ${prefix}randomcry 
› ${prefix}fetish *Kata kunci*
› ${prefix}husbu
› ${prefix}randomNekoNime 
› ${prefix}randomanime
› ${prefix}lewds
› ${prefix}fetish *armpits*
› ${prefix}fetish *feets*
› ${prefix}fetish *thighs*
› ${prefix}fetish *ass*
› ${prefix}fetish *boobs*
› ${prefix}fetish *belly*
› ${prefix}fetish *sideboobs*
› ${prefix}fetish *ahegao*
› ${prefix}loli 
› ${prefix}malanime *Nama anime*
› ${prefix}wallanime 
› ${prefix}wait *repy gambar*
› ${prefix}waifu Menampilkan gambar acak waifu

   
    *18+ CONTENT*

 ${prefix}xnxx *_linknya_*
 ${prefix}hehe *_kata kunci_*
 ${prefix}randomblowjob 
 ${prefix}xxx *kata kunci*
 ${prefix}getxxxx *kode / nomor urutan*
 ${prefix}xvideos *kata kunci*
 ${prefix}getxvideos *kode / nomor urutan*


This bot made with ❤ by: *_ilwan_*`
}
exports.help = help()
function menuadmin() {
    return `
*TOOLS MANAGEMENT GROUP*

 ${prefix}lock
 ${prefix}unlock 
 ${prefix}bot off 
 ${prefix}bot on 
 ${prefix}link 
 ${prefix}resetlink 
 ${prefix}add *@tag*
 ${prefix}kick *@tag*
 ${prefix}promote *@tag*
 ${prefix}demote *@tag*
 ${prefix}tagall *_kata-kata_* 
 ${prefix}setgroupicon *send image*
 ${prefix}adminList 
 ${prefix}antilink enable|disable 
 ${prefix}autosticker enable|disable
 ${prefix}leave 
 ${prefix}delete *reply pesan bot*
 ${prefix}kickall`
}
exports.menuadmin = menuadmin()

function own(){
    return` *MASTER MENU*
    
${prefix}stat
${prefix}getses
${prefix}restart
${prefix}restlimit
${prefix}block *@tag*
${prefix}unblock *@tag*
${prefix}setname *Name*
${prefix}setinfo *Status*
${prefix}setprofile *Tag Image*
${prefix}banchat
${prefix}unbanchat
${prefix}prem *@tag*
${prefix}prem2 *@tag*
${prefix}delprem *@tag*
${prefix}setprefix *Prefix*
${prefix}bc *Message*
${prefix}kickall
${prefix}kick *@tag*
${prefix}promote *@tag*
${prefix}demote *@tag*
${prefix}cgc *Name*
${prefix}setgrouplimit *Number*
${prefix}setmemberlimit *Number*
${prefix}setlimituser *Number*
${prefix}mtcstart
${prefix}mtcstop
${prefix}exif text | text
${prefix}addasupan *user*
${prefix}addtruth *sentence*
${prefix}adddare *sentence*
${prefix}deltruth *sentence*
${prefix}deldare *sentence*
${prefix}darelist *sentence*
${prefix}truthlist
${prefix}darelist
${prefix}run *your code*
${prefix}runtime*
${prefix}shutdown
`
}
exports.own = own()
function piloot(){
    return` *PILOT MENU*
    
${prefix}stat
${prefix}getses
${prefix}restart
${prefix}listgroup
${prefix}block *@tag*
${prefix}unblock *@tag*
${prefix}setname *Name* 
${prefix}setstatus *Status*
${prefix}setprofile *Tag Image*
${prefix}bc *Message*
${prefix}okickall
${prefix}clearall
${prefix}cgc *Name*
${prefix}setgrouplimit *Number*
${prefix}setgrouplimit *@tag age*
${prefix}ban *@tag*
${prefix}unban *@tag*
`
}
exports.piloot = piloot()
function readme() {
    return `

*CHANGELOG BOT*

*16 oct 2020:*
[add] : ig, fb2
18 oct 2020:
[add] : lagu, tw, nulis, nulis2, asupan, quoteit, textsticker, asupan
[rmv] : nh, randomhentai
[fix] : bug
*21 oct 2020:*
[fix] : bug, speed, ig, yt, asupan
*24 oct 2020:*
[add] : ig2
[fix] : ss, ytpm3, ytmp4, chrod, wiki, jadwalshalat, call and other bug
*03 nov 2020:*
[add] : quotes2, wallanime, qrcode, joox, artinama, ramalpasangan
[fix] : bug, speed, 
*09 nov 2020:*
[add] : pantun, ptl, alay, s, hilih, tingkat, play
[fix] : knowing bug.
*15 nov:*
[fix] : sgif, knowing bug
*02 Dec 2020:*
[add] : cerpen, film, puisi, meme, memesticker, bass, tomp3 and other
[fix] : yt, ytmp3, play, knowing bugs
[rmv] :pasangan, resep
*06 Dec 2020:*
[add] : antilink, seticon, fakeid, covidtotal, news, and other
[fix] : knowing bugs
*24 jan 2021:*
[add] : big update on the bot
[fix] : knowing bugs, refactoring code
[rmv] : trash feature

*Develop by _@ilwan_*`
}
exports.readme = readme()

function info( pushname ) {
    return `Hai ${pushname} 👋
Bot ini di modifikasi dan di kembangkan oleh ilwan

versi bot saat ini v5.0.1

Kamu bisa menemukan owner bot di:
https://www.instagram.com/il.userr

Semua info update bot akan di upload di:
t.me/iluser_BOT

Support us with subscribe
https://www.youtube.com/iluser

============================

This bot is modified and developed by ilwan

the current version of the bot is v5.0.1

You can find the owner bot at:
https://www.instagram.com/il.userr

All bot update info will be uploaded on:
t.me/iluser_BOT

Support us with subscribe
https://www.youtube.com/iluser`
}
exports.info = info()

function snk() {
    return `Syarat dan Ketentuan *iluser_BOT*

1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!
`
}
exports.snk = snk()

function rules() {
    return `
    PERATURAN *iluser_BOT*
    
1. Nelpon/VC = Block!
2. Spamming = Block!
3. Menggunakan fitur bot untuk hal yang ilegal/kejahatan = block!
4. Jika melakukan hal-hal yang di atas di dalam grup, maka grup anda akan di blacklist selamanya.

=====================

1. Call / VC = Block!
2. Spamming = Block!
3. Using the bot feature for things that are illegal / crime = block!
4. If you do any of the things above in the group, your group will be blacklisted forever.
`
}
exports.rules = rules()

function premfitur() {
    return `
    [PREMIUM FITUR]
    
1. Limit tanpa batas
2. Bebas menambahkan bot ke grupmu dengan command .join
3. Langsung di unduhin tanpa perlu klik link
4. Akses fitur 18+
5. Masa aktif 30 hari
6. Daftar pertama 15k/ bulan
7. Biaya perpanjang 10k/bulan

Minat? Hubungi creator bot di .owner

`
}
exports.premfitur = premfitur()

function mit(){
    return`   
     *INFO*

Open Donation If the Bot Server is Dead
Dana/Gopay: 083142933894
Pulsa: 082340779017
Ovo: 085333935211
PAYPAL: https://www.paypal.me/ilwanxyz

Jika e-wallet kamu belum premium, kamu bisa scan menggunakan QRIS di atas.

*_Donasi akan digunakan untuk pengoperasian dan pengembangan bot ini agar menjadi lebih baik lagi_*

Join channel telegram untuk mendapatkan update fitur, pemblokiran ataupun update informasi terkini tentang bot
https://t.me/iluser_BOT

Cara Penggunaan Bot
https://youtu.be/WOR0KltTbFc

Support Us with follow & subscribe
instagram.com/iluser.bot_
youtube.com/iluser`
}
exports.mit = mit()

function donatee( pushname ) {
    return `${pushname} mau donasi?
    
Langsung ae ke :
DANA/Gopay: 083142933894
Pulsa: 082340779017
OVO: 085333935211
PAYPAL : https://www.paypal.me/ilwanxyz

Jika e-wallet kamu belum premium, kamu bisa scan menggunakan QRIS di atas

Donasi akan digunakan untuk pengoperasian dan pengembangan bot ini`
}
exports.donatee = donatee()
function bahasalist() {
    return `*List kode Bahasa*\n
  *Code    :    Bahasa*

    sq     =   Albanian
    ar     =   Arabic
    hy     =   Armenian
    ca     =   Catalan
    zh     =   Chinese
    zh-cn  =   Chinese (China)
    zh-tw  =   Chinese (Taiwan)
    zh-yue =   Chinese (Cantonese)
    hr     =   Croatian
    cs     =   Czech
    da     =   Danish
    nl     =   Dutch
    en     =   English
    en-au  =   English (Australia)
    en-uk  =   English (United Kingdom)
    en-us  =   English (United States)
    eo     =   Esperanto
    fi     =   Finnish
    fr     =   French
    de     =   German
    el     =   Greek
    ht     =   Haitian Creole
    hi     =   Hindi
    hu     =   Hungarian
    is     =   Icelandic
    id     =   Indonesian
    it     =   Italian
    ja     =   Japanese
    ko     =   Korean
    la     =   Latin
    lv     =   Latvian
    mk     =   Macedonian
    no     =   Norwegian
    pl     =   Polish
    pt     =   Portuguese
    pt-br  =   Portuguese (Brazil)
    ro     =   Romanian
    ru     =   Russian
    sr     =   Serbian
    sk     =   Slovak
    es     =   Spanish
    es-es  =   Spanish (Spain)
    es-us  =   Spanish (United States)
    sw     =   Swahili
    sv     =   Swedish
    ta     =   Tamil
    th     =   Thai
    tr     =   Turkish
    vi     =   Vietnamese
    cy     =   Welsh
      `
}
exports.bahasalist = bahasalist()

function listChannel() {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
