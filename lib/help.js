const fs = require('fs-extra')
//const { prefix } = require('./lib/database/setting.json')
const { prefix } = require('../lib/database/setting.json')

function help( pushname ) {
    return `
    *SELAMAT DATANG ${pushname}*

Follow me on: github.com/iluser

===============================
*${prefix}rules* [ *RULES BOT!* ]
*${prefix}about* [ info bot ]
*${prefix}info* [ CHANGELOG BOT ]
*${prefix}snk* [ Syarat dan ketentuan ]
*${prefix}bug* _keluh kesahmu_
*${prefix}premfitur* [ fitur premium? ]
*cekprefik* [ prefix yang digunakan ]
*${prefix}donasi* [ jika kamu ingin donasi ]
===============================

Use the translation if you don't understand the words.
${prefix}translate *code* _the text you don't understand_

[for code, type *${prefix}bahasa* to see a list of language codes]


 Tools Management group
\t[ *${prefix}menuadmin* ]


    *EDUCATION MENU*

› *${prefix}brainly* : Mencari jawaban dari server brainly 
~> .brainly kanapa admin bot ganteng banget

› *${prefix}nulis* : Menulis ke buku tulis
~> .nulis admin bot ganteng banget

› *${prefix}nulis2* : Menulis ke buku tulis
~> .nulis2 admin bot ganteng banget

› *${prefix}nulis3* : Menulis ke buku folio
~> .nulis3 admin bot ganteng banget

› *${prefix}wiki* : Mencari artikel di website wikipedia
~> .wiki Indonesia

› *${prefix}kbbi* : Mencari arti dari kalimat di kamus besar bahasa Indonesia
~> .kbbi ganteng

› *${prefix}translate* : Menerjemahkan kalimat ke bahasa yang kamu tuju.
~> .translate en admin bot ganteng banget

› *${prefix}google* : Penelusuran di google
~> .gooogle admin bot ganteng banget

› *${prefix}totext* : Mengconvert text yang di gambar menjadi tulisan
~> Kirim gambar yang berisi text dengan captio .totext

› *${prefix}hitung* : Berfungsi sebagai kalkulator
~> .hitug 1 + 2 * 3 - 4 / 5


    *SEARCH MENU*

› *${prefix}playstore* : Menampilkan hasil pencarian di playstore
~> .playstore vitub

› *${prefix}apkpure* : Menampilkan hasil pencarian di web apkpure
~> .apkpure vitub

› *${prefix}shopee* : Mencari barang di shopee
~> .shopee masker anti jomblo

› *${prefix}newlinesticker* : Menampilkan hasil pencarian stiker terbaru line

› *${prefix}ytsearch* : Menampilkan hasil pencarian youtube
~> .youtube cara membobol nasa

› *${prefix}spek* : Menampilkan hasil dari spesifikasi ponsel yang kamu maksud
~> .spek j2 prime

› *${prefix}motor* : Menampilkan hasil dari spesifikasi motor yang kamu maksud
~> .motor beat

› *${prefix}mobil* : Menampilkan hasil dari spesifikasi mobilm yang kamu maksud
~> .mobil avanza

› *${prefix}github* : Menampilkan hasil dari repositori github
~> .github iluser

› *${prefix}resep* : Menampilkan hasil resep masakan
~> .resep nasi goreng

› *${prefix}bioskop* : Menampilkan hasil dari pencarian bioskop di kota yang kamu maksud
~> .bioskop lombok


    *INFORMATION MENU*

› *${prefix}heroml* : Menampilkan informasi hero mobile legend.
~> .heroml vale

› *${prefix}jadwalbola* : Menampilkan informasi jadwal pertandingan bola.

› *${prefix}waktu* : Menampilkan informasi waktu Indonesia.

› *${prefix}news* : Menampilkan informasi berita terbaru.

› *${prefix}covidindo* : Menampilkan informasi corona Indonesia

› *${prefix}covid* : Menampilkan informasi corona dari negara yang kamu tuju
~> .covid india

› *${prefix}infonomor* : Menampilkan informasi dari nomor hp target
~> .infonomor 6283142xnxx

› *${prefix}kurs* : Menampilkan informasi perbandingan mata uang Indonesia dengan mata uang digital/global
~> .kurs usd|19


    *TRACKING MENU*

› *${prefix}resi jne* : Menampilkan informasi tracking dari ekspedisi jne
~> .resi jne 123xnxx

› *${prefix}resi pos* : Menampilkan informasi tracking dari ekspedisi pos
~> .resi pos 123xnxx

› *${prefix}resi tiki* : Menampilkan informasi tracking dari ekspedisi tiki
~> .resi tiki 123xnxx

› *${prefix}resi wahana* : Menampilkan informasi tracking dari ekspedisi wahana
~> .resi wahana 123xnxx

› *${prefix}resi jnt* : Menampilkan informasi tracking dari ekspedisi jnt
~> .resi jnt 123xnxx

› *${prefix}resi sicepat* : Menampilkan informasi tracking dari ekspedisi sicepat
~> .resi sicepat 123xnxx

› *${prefix}resi pcp* : Menampilkan informasi tracking dari ekspedisi pcp
~> .resi pcp 123xnxx

› *${prefix}resi jet* : Menampilkan informasi tracking dari ekspedisi jet
~> .resi jet 123xnxx

› ${prefix}resi dse* : Menampilkan informasi tracking dari ekspedisi dse
~> .resi dse 123xnxx

› *${prefix}resi rpx* : Menampilkan informasi tracking dari ekspedisi rpx
~> .resi rpx 123xnxx

› *${prefix}resi sap* : Menampilkan informasi tracking dari ekspedisi sap
~> .resi sap 123xnxx

› *${prefix}resi first* : Menampilkan informasi tracking dari ekspedisi first
~> .resi first 123xnxx

› *${prefix}resi ninja* : Menampilkan informasi tracking dari ekspedisi ninja
~> .resi ninja 123xnxx

› *${prefix}resi lion* : Menampilkan informasi tracking dari ekspedisi lion
~> .resi lion 123xnxx

› *${prefix}resi rex* : Menampilkan informasi tracking dari ekspedisi rex
~> .resi rex 123xnxx

› *${prefix}resi idl* : Menampilkan informasi tracking dari ekspedisi idl
~> .resi idl 123xnxx

› *${prefix}checkip* : Menampilkan informasi dari alamat ip yang di tracking
~> .checkip 127.0.xnxx

› *${prefix}checkip2* : Menampilkan informasi dari alamat ip yang di tracking
~> .checkip2 127.0.xnxx

› *${prefix}alamat* : Menampilkan informasi dari lokasi yang kamu ketikan
~> .alamat jln purbaya kopang

› *${prefix}jarak* : Menampilkan informasi jarak antar kota
~> .jarak lombok | bali

› *${prefix}ceklokasi* : Menampilkan informasi kasus dan zona corona di lokasimu
~> kirim lokasi, kmudian balas dengan .ceklokasi


    *RELIGI MENU*

› *${prefix}quran* : Menampilkan hasil dari alquran
~> .quran 1

› *${prefix}tafsir* : Menampilkan hasil dari tafsir ayat 
~> .tafsir al-ikhlas 2

› *${prefix}infosurah* : Menampilkan hasil dari informasi surah yang kamu maksud
~> .infosurah al-ikhlas

› *${prefix}listsurah* : Menampilkan hasil dari list surah yang ada di alquran


    *STICKER CREATOR*

› *${prefix}stiker* : Membuat stiker
~> Kirim gambar atau video dengan caption .stiker

› *${prefix}emstik* : Membuat stiker dari emoji
~> .emstik 🙂

› *${prefix}sfire* : Membuat stiker di dalam neraka
~> kirim gambar dengan caption .sfire

› *${prefix}sgif* : Membuat stiker
~> Kirim video dengan caption .stiker

› *${prefix}ttp* : Membuat stiker dari text
~> .ttp admin bot ganteng

› *${prefix}attp* : Membuat stiker animasi dari text
~> .attp admin bot ganteng

› *${prefix}ttp2* : Membuat stiker dari text
~> .ttp2 admin bot ganteng

› *${prefix}ttg* : Membuat stiker animasi dari text
~> .ttg admin bot ganteng

› *${prefix}memesticker* : Mengkonvert foto langsung menjadi sticker dengan kata kata
~> .memesticker admin | ganteng

› *${prefix}findstiker* : Mencari sticker dengan kata kunci
~> .findstiker pentol

› *${prefix}take* : Merubah watermark dari sticker
~> balas sticker dengan .take pack | author

› *${prefix}takevid* : Merubah watermark dari animated sticker
~> balas animated sticker dengan .takevid | pack | author


    *DOWNLOAD MENU*

› *${prefix}video* : Mencari video dengan kata kunci
~> .video resah jadi luka

› *${prefix}getvideo* : Mengunduh video dari hasil pencarian video sebelumnya
~> balas list hasil pencarian video dengan .getvideo 1

› *${prefix}music* : Mencari musik dengan kata kunci
~> .musik resah jadi luka

› *${prefix}getmusic* : Mengunduh musik dari hasil pencarian musik sebelumnya
~> balas list hasil pencarian musik dengan .getmusik 1

› *${prefix}asupan* : Mencari asupan video dari server tiktok

› *${prefix}yt* : Mengunduh video dari Youtube
~> .yt www.youtube.com/xnxx

› *${prefix}ytmp3* : Mengunduh audio dari Youtube
~> .yt www.youtube.com/xnxx

› *${prefix}lagu* : Mencari lagu berdasarkan judul
~> .lagu resah jadi luka

› *${prefix}play* : Mencari lagu berdasarkan judul
~> .play resah jadi luka

› *${prefix}joox* : Mencari lagu berdasarkan judul
~> .joox resah jadi luka

› *${prefix}ig* : Mengunduh media dari instagram
~> .ig https://www.instagram.com/p/B5yrmkKBFID/

› *${prefix}ig2* : Mengunduh media dari instagram
~> .ig2 https://www.instagram.com/p/B5yrmkKBFID/

› *${prefix}tw* : Mengunduh media dari twitter
~> .tw https://twitter.com/i/status/1235404453227839488

› *${prefix}tw2* : Mengunduh media dari twitter
~> .tw https://twitter.com/i/status/1235404453227839488

› *${prefix}pin* : Mengunduh media dari pinterest
~> .pin https://pin.it/xnxx

› *${prefix}fb* : Mengunduh video dari facebook
~> .fb https://www.facebook.com/sri.margono12/videos/2819620074772184/

› *${prefix}fb2* : Mengunduh video dari facebook
~> .fb2 https://www.facebook.com/sri.margono12/videos/2819620074772184/

› *${prefix}tiktok* : Mengunduh video dari tiktok
~> .tiktok https://vt.tiktok.com/SSEusw/

› *${prefix}smule* : Mengunduh video dari smule
~> .smule https://smule.com/xnnx

› *${prefix}starmaker* : Mengunduh video dari starmaker
~> .starmaker https://starmaker.com/xnxx

› *${prefix}igstory* : Mengunduh story instagram
~> .igstory awreceh.id

› *${prefix}mediafire* : Mengunduh file dari mediafire
~> .mediafire http://www.mediafire.com/file/ic6msz661a11xxl/Acer_Aspire_M5-582_%2528Pegatron_JM50%2529.pdf


    *AUDIO MENU*

› *${prefix}tomp3* : convert video ke audio
~> kirim atau balas video yang akan di convert dengan .tomp3

› *${prefix}bass* : Menambah visualisasi bass pada audio
~> balas audio dengan .bass

› *${prefix}distord* : visualisasi audio ke maksimal
~> balas audio dengan .distord

› *${prefix}tts* : merubah text menjadi suara
~> .tts id admin bot ganteng banget

› *${prefix}setvn* : menyimpan suara ke database voice note
~> balas audio dengan .setvn nama vn 

› *${prefix}v* : mengeluarkan suara dari database voice note
~> .v nama vn

› *${prefix}listvn* : Melihat list dari voice note yang ada di database


    *TEXT MENU*

› *${prefix}cerpen* : menampilkan random cerita pendek

› *${prefix}puisi* : menampilkan random puisi

› *${prefix}kebalik* : membalikkan text
~> .kebalik admin bot ganteng

› *${prefix}creepyfact* : menampilkan random fakta mengerikan

› *${prefix}fakta* : menampilkan random fakta unik

› *${prefix}cersex* : menampilkan random cerita sex

› *${prefix}bacot* : menampilkan kata kata random

› *${prefix}bacotadd* : menambahkan kata kata ke database bacot
~> .bacotadd admin bot ganteng banget

› *${prefix}renungan* : menampilkan random renungan

› *${prefix}pantun* : menampilkan random pantun

› *${prefix}bucin* : menampilkan random kata kata bucin

› *${prefix}katabijak* : menampilkan random kata kata bijak

› *${prefix}katasenja* : menampilkan random kata senja

› *${prefix}motivasi* : menampilkan random kata - kata motivasi

› *${prefix}katafiersa* : menampilkan random kata - kata fiersa besari

› *${prefix}quotes* : menampilkan random quotes

› *${prefix}hilih* : merubah kalimat ke text hilih
~> .hilih aku janji gaakan ninggalin kamu

› *${prefix}alay* : merubah kalimat ke text alay
~> .alay pagi sayang

› *${prefix}chord* : mencari chrod gitar berdasarkan judul lagu
~> .chord resah jadi luka

› *${prefix}lirik* : mencari lirik lagu berdasarkan judul
~> .irik resah jadi luka

› *${prefix}zodiak* : menampilkan zodiak harian
~> .zodiak pisces

› *${prefix}zodiak2* : menampilkan zodiak mingguan
~> .zodiak2 pisces


    *IMAGE-MANIPULATION MENU*

› *${prefix}wall* : menampilkan random wallpaper

› *${prefix}toimg* : convert stiker ke gambar
~> .balas stiker degan .toimg

› *${prefix}textmaker* : menambahkan text ke dalam foto
~> kirim atau balas foto dengan .textmaker |ilwan|ganteng

› *${prefix}gambar* : mencari gambar berdasarkan nama
~> .gambar eimi fukada

› *${prefix}googleimage* : mencari gambar dari google
~> .googleimage |tante|5

› *${prefix}quotemaker* : membuat quotes ke dalam gambar
~> .quotemaker |admin bot ganteng|ilwan|nature

› *${prefix}quoteit* : membuat quotes ke dalam gambar
~> .quoteit admin bot ganteng | ilwan

› *${prefix}maps* : mencari peta lokasi berdasarkan nama
~> .maps kopang lombok tengah

› *${prefix}pokemon* : menampilakn gambar pokemon secara random
 
› *${prefix}kucing* : menampilkan gamabr kucing secara random
 
› *${prefix}anjing* : menampilkan gamabr anjing secara random

› *${prefix}memeindo* : menampilkan meme

› *${prefix}meme* : menampilkan meme

› *${prefix}qrcode* : membuat kode qr dari text
~> .qrcode admin bot ganteng banget

› *${prefix}qrread* : membaca kode qr
~> kirim kode qr dengan caption .qrread

› *${prefix}dadu* : menampilkan gamabr dadu secara random

› *${prefix}koin* : menampilkan gambar koin secara random
 
› *${prefix}cewe* : menampilkan penyegar timeline cewe
 
› *${prefix}cowo* : menampilkan penyegar timeline cowo

› *${prefix}infoGempa* : menampilkan informasi terjadinya gempa terbaru

› *${prefix}ssphone* : screenshot website dengan tampilan hp
~> .ssphone https://www.iluser.my.id

› *${prefix}sspc* : screenshot website dengan tapilan desktop
~> .sspc https://www.iluser.my.id

› *${prefix}springflow* : manipulasi foto dengan tema springflow
~> kirim gambar dengan caption .springflow

› *${prefix}watersplash * : menampilkan zodiak mingguan
~> .zodiak2 pisces

› *${prefix}cloudy* : manipulasi foto dengan teman cloudy
~> kirim gambar dengan caption .cloudy

› *${prefix}sketch* : manipulasi foto dengan tema sketch
~> kirim gambar dengan caption .sketch

› *${prefix}threats* : manipulasi foto dengan tema threats
~> kirim gambar dengan caption .threats

› *${prefix}glass* : manipulasi foto dengan tema glass
~> kirim gambar dengan caption .glass

› *${prefix}greyscale* : manipulasi foto dengn tema greyscale
~> kirim gambar dengan caption .greyscale

› *${prefix}invert* : manipulasi foto dengan tema invert
~> kirim gambar dengan caption .invert

› *${prefix}invertgrey* : manipulasi foto dengan tema invertgrey
~> kirim gambar dengan caption .invertgrey

› *${prefix}brightness* : manipulasi foto dengan tema brightness
~> kirim gambar dengan caption .brightness

› *${prefix}sepia* : manipulasi foto dengan tema sepia
~> kirim gambar dengan caption .sepia

› *${prefix}burik* : manipulasi foto dengan tema burik
~> kirim gambar dengan caption .burik

› *${prefix}blurfry* : manipulasi foto dengan tema blurfry
~> kirim gambar dengan caption .blurfry

› *${prefix}magik* : manipulasi foto dengn tema magik
~> kirim gambar dengan caption .magik

› *${prefix}captcha* : manipulasi foto dengan tema captcha
~> kirim gambar dengan caption .captcha

› *${prefix}kpop* : menampilkan gamabr kpop berdasarkan nama
~> .kpop bts



    *STALKING MENU*

› *${prefix}twtstalk* : stalking akun twitter
~> .twtstalk iluser_x

› *${prefix}tiktokstalk* : stalking akun tiktok
~> .tiktokstalk reemarmartin

› *${prefix}igstalk* : stalking akun instagram
~> .igstalk il.userr

› *${prefix}smulestalk* : stalking akun smule
~> .smulestalk user


    *CREAT MENU*

› *${prefix}kue* : membuat text menjadi gambar dengan dengan tema kue
~> .kue ilwan ganteng

› *${prefix}chalktext* : membuat text menjadi gambar dengan dengan tema chalktext
~> .chalktext ilwan ganteng

› *${prefix}wooden-sign* : membuat text menjadi gambar dengan dengan tema wooden-sign
~> .wooden-sign ilwan ganteng

› *${prefix}salju* : membuat text menjadi gambar dengan dengan tema salju
~> .salju ilwan|ganteng

› *${prefix}bioskoptext* : membuat text menjadi gambar dengan dengan tema bioskoptext
~> .bioskoptext ilwan|ganteng

› *${prefix}kalung* : membuat text menjadi gambar dengan dengan tema kalung
~> .kalung ilwan ganteng

› *${prefix}gelang* : membuat text menjadi gambar dengan dengan tema gelang
~> .gelang ilwan ganteng

› *${prefix}beach-sign* : membuat text menjadi gambar dengan dengan tema beach-sign
~> .beach-sign ilwan ganteng

› *${prefix}bordir2* : membuat text menjadi gambar dengan dengan tema bordir2
~> .bordir2 ilwan ganteng

› *${prefix}blood2* : membuat text menjadi gambar dengan dengan tema blood2
~> .blood2 ilwan ganteng

› *${prefix}window* : membuat text menjadi gambar dengan dengan tema window
~> .window ilwan ganteng

› *${prefix}snow-sign* : membuat text menjadi gambar dengan dengan tema snow-sign
~> .snow-sign ilwan ganteng

› *${prefix}kapal* : membuat text menjadi gambar dengan dengan tema kapal
~> .kapal ilwan ganteng

› *${prefix}pesawat* : membuat text menjadi gambar dengan dengan tema pesawat
~> .pesawat ilwan ganteng

› *${prefix}jalan* : membuat text menjadi gambar dengan dengan tema jalan
~> .jalan ilwan ganteng

› *${prefix}einstein* : membuat text menjadi gambar dengan dengan tema einstein
~> .einstein ilwan ganteng

› *${prefix}lipstick* : membuat text menjadi gambar dengan dengan tema lipstick
~> .lipstick ilwan ganteng

› *${prefix}typewriter* : membuat text menjadi gambar dengan dengan tema typewriter
~> .typewriter ilwan ganteng

› *${prefix}graffiti* : membuat text menjadi gambar dengan dengan tema graffiti
~> .graffiti ilwan ganteng

› *${prefix}graffiti2* : membuat text menjadi gambar dengan dengan tema graffiti2
~> .graffiti2 ilwan ganteng

› *${prefix}graffiti3* : membuat text menjadi gambar dengan dengan tema graffiti3
~> .graffiti3 ilwan ganteng

› *${prefix}tahta* : membuat text menjadi gambar dengan dengan tema tahta
~> .tahta ilwan ganteng

› *${prefix}goreng* : menggoreng gambar
~> kirim atau balas gambar dengan caption .goreng

› *${prefix}carbon* : membuat text menjadi gambar dengan dengan tema carbon
~> .carbon ilwan ganteng

› *${prefix}neon-sign* : membuat text menjadi gambar dengan dengan tema neon-sign
~> .neon-sign ilwan|ganteng

› *${prefix}karat* : membuat text menjadi gambar dengan dengan tema karat
~> .karat ilwan ganteng

› *${prefix}kayu* : membuat text menjadi gambar dengan dengan tema kayu
~> .kayu ilwan|ganteng

› *${prefix}tato* : membuat text menjadi gambar dengan dengan tema tato
~> .tato ilwan ganteng

› *${prefix}embun* : membuat text menjadi gambar dengan dengan tema embun
~> .tato ilwan ganteng

› *${prefix}trumptwt* : mengubah kalimat menjadi cuitan trump
~> .trumptwt ilwan ganteng

› *${prefix}silktext* : membuat text menjadi gambar dengan dengan tema silktext
~> .silktext ilwan ganteng

› *${prefix}mymind* : mengubah text menjadi change my mind
~> .mymind ilwan ganteng

› *${prefix}coffee* : membuat text menjadi gambar dengan dengan tema coffee
~> .coffee ilwan ganteng

› *${prefix}ukir* : membuat text menjadi gambar dengan dengan tema ukir
~> .ukir ilwan ganteng

› *${prefix}smoketext* : membuat text menjadi gambar dengan dengan tema smoketext
~> .smoketext ilwan ganteng

› *${prefix}kanna* : membuat text menjadi gambar dengan dengan tema kanna
~> .kanna ilwan ganteng

› *${prefix}sarah* : membuat fs dengan foto sarah violid
~> .sarah ilwan ganteng

› *${prefix}phcomment* : membuat komen pornhub
~> .phpcomment ilwan|gile mantep banget


    *OTHER MENU*

› *${prefix}resend* : mengirimkan ulang media yang pernah bot kirim sebelumnya
~> balas media bot dengan .resend

› *${prefix}film* : mencari link unduhan film berdasarkan judul
~> .film joker

› *${prefix}kadargay* : melihat kadar gay temanmu
~> .kadargay @tag

› *${prefix}aiquote* : generate random quote maker

› *${prefix}subreddit* : mencari media di subreddit
~> .subreddit burung

› *${prefix}artinama* : arti dari namamu
~> .artinama ilwan

› *${prefix}pasangan* : ramalan kamu dengan pasanganmu
~> .pasangan ilwan|belum ada

› *${prefix}nomorhoki* : melihat tingkat kehokian dari nomormu
~> .nomorhoki 083142xnxx

› *${prefix}shorturl* : berfungsi untuk memperpendek url
~> .shorturl https://www.iluser.my.id

› *${prefix}readmore* : membuat text baca selengkapnya
~> .readmore ilwan|ganteng

› *${prefix}imgcompress* : mengcompress gambar menjadi ukuran lebih kecil
~> kirim atau balas gambar dengan caption .imgcompress

› *${prefix}nickepep* : generator nick pri payer

› *${prefix}wasted* : membuat dengan tanda wasted
~> kirim atau  balas gamabr dengan caption .wasted

› *${prefix}gdrive* : bypass limit link googledrive
~> .gdrive https://drive.google.com/xnxx

› *${prefix}kiss* : ini ciuman bro
~> balas pesan user yang mau di cium dengan .kiss

› *${prefix}jail* : memenjarakan foto user
~> .jail @tag

› *${prefix}wame* : generate api ke nomormu

› *${prefix}imgtourl* : menjadikan foto sebagai url
~> kirim atau balas foto degan caption .imgtourl

› *${prefix}imgtopdf* : mengkonvert gamabr mejadi menjadi dokumen .pdf
~> kirim atau balas gambar dengan caption .imgtopdf

› *${prefix}topdf* : mengkonvert file office ke dokumen .pdf
~> balas file office dengan caption .topdf


    *GAME MENU*

› *${prefix}tod* : game truth - dare

› *${prefix}family100* : game kusi family100

› *${prefix}caklontong* : game kuis caklontong

› *${prefix}tebakgambar* : game tebak gambar


    *IN GROUP MENU*

› *${prefix}trash* : membuat meme sampah
~> .trash @tag

› *${prefix}hitler* : membuat meme hitler
~> .hitler @tag

› *${prefix}getpp* : mengambil foto profile target
~> .getpp @tag (kalo depresi ga respon)

› *${prefix}getsts* : mengambil status target
~> .getsts @tag

› *${prefix}slap* : menampr online
~> .slap @tag

› *${prefix}hug* : pelukan virtual
~> .hug @tag

› *${prefix}pat* : mengelus online
~> .pat @tag

› *${prefix}afk* : ini fitur afk tod. kalo nte afk terus ada yang ngetag, nti dikasi tau
~> .afk alasan

› *${prefix}groupinfo* : info dari grup


    *WIBU MENU*

› *${prefix}hnder* : hentai downloader
~> .hnder 123456

› *${prefix}randombkiss* : random gambar anime ciuman

› *${prefix}randomhug* : random gambar anime berpelukan

› *${prefix}randomcry* : random gambar anime nangis nih

› *${prefix}husbu* : random gambar husbu

› *${prefix}randomNekoNime * : random gambar nekonime

› *${prefix}randomanime* : random gambar anime

› *${prefix}lewds* : random gambar lewds

› *${prefix}fetish armpits* : random gambar fetish armpits

› *${prefix}fetish feets* : random gambar fetish feets

› *${prefix}fetish thighs* : random gambar fetish thighs

› *${prefix}fetish ass* : random gambar fetish ass

› *${prefix}fetish boobs* : random gambar fetish boobs

› *${prefix}fetish belly* : random gambar fetish belly

› *${prefix}fetish sideboobs* : random gambar fetish sideboobs

› *${prefix}fetish ahegao* : random gambar fetish ahegao

› *${prefix}loli* : random gambar loli

› *${prefix}malanime* : ini gw gatau buat apa. bukan wibu soalnya
~> .malanime nama anime

› *${prefix}wallanime* : random wallpaper anime

› *${prefix}wait* : what is that, fitur cari anime berdasarkan cuplikan video
~> kirim atau balas foto dengan caption .wait

› *${prefix}waifu* : random waifu


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
 => mengunci grup

 ${prefix}unlock 
 => membuka kunci grup

 ${prefix}bot off 
 => menonaktifkan bot di grup

 ${prefix}bot on 
 => mengaktifkan bot di dalam grup

 ${prefix}link 
 => mengambil link grup

 ${prefix}resetlink 
 => mereset link grup

 ${prefix}add *@tag* 
 => menambahkan target ke dalam grup

 ${prefix}kick *@tag / reply pesan user* 
 => mengeluarkan target dari grup

 ${prefix}promote *@tag / reply pesan user* 
 => menjadikan target sebagai admin

 ${prefix}demote *@tag / reply pesan user* 
 => menghapus jabatan target dari admin ke member biasa

  ${prefix}delete *reply pesan bot* 
 => menghapus pesan bot

 ${prefix}kickall [ owner group ] 
 => mengeluarkan semua member yang ada di dalam grup

  ${prefix}info-lock
 => Menguci info grup

  ${prefix}info-unlock
 => Membuka kunci pengeditan info grup

 ${prefix}tagall *_kata-kata_* 
 => mention semua member di dalam grup

 ${prefix}setgroupicon *send image* 
 => merubah profile grup

 ${prefix}adminList 
 => list admin

  ${prefix}antiporn enable
 => mengaktifkan fitur anti porno

   ${prefix}antiporn disable
 => menonaktifkan fitur anti porno

 ${prefix}antilink enable
 => mengaktifkan fitur anti link grup WhatsApp

  ${prefix}antilink disable
 => menonaktifkan fitur anti link grup WhatsApp

 ${prefix}autosticker enable
 => mengaktifkan fitur auto sticker

  ${prefix}autosticker disable
 => menonaktifkan fitur auto sticker

 ${prefix}warn
 => memberi peringatan

 ${prefix}addwelcome
 => Menambahkan list welcome di database

  ${prefix}welcome add _kalimat add_
 => mengcustom fitur Message add

  ${prefix}welcome kick _kalimat kick_
 => mengcustom fitur Message kick

  ${prefix}warn
 => memberi peringatan


 This bot made with ❤ by: *_ilwan_*`
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
${prefix}prem *@tag _number_ format* 
${prefix}delprem *@tag*
${prefix}setprefix *Prefix*
${prefix}bc *Message*
${prefix}cgc *Name*
${prefix}setgrouplimit *Number*
${prefix}setmemberlimit *Number*
${prefix}setlimituser *Number*
${prefix}mtcstart
${prefix}mtcstop
${prefix}exif text | text
${prefix}addasupan *user*
${prefix}listasupan
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

*SEPT 2020:*
First Release

*18 oct 2020:*
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
*13 feb 2021:*
[add] : totext, github, attp
[fix] : knowing bugs, cmd sticker support video
[rmv] : most create menu
*19 feb 2021:*
[add] : antiporn, edit info grup, magik, blur and other
[fix] : -
[rmv] : -
*24 feb 2021:*
[add] : disable feature
[fix] : some bugs
[rmv] : cantik, babi, ganteng, bisakah and more trash feature

*Dev by _@ilwan_ | github.com/iluser*`
}
exports.readme = readme()

function info( pushname ) {
    return `Hai ${pushname} 👋
Bot ini di modifikasi dan di kembangkan oleh ilwan

versi bot saat ini v6.0.1

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
    [ PREMIUM FITUR ]
    
1. Unlimited limit
2. Memasukkan bot ke grup
3. Akses seluruh fitur yang tersedia
4. Masa aktif 30 hari
5. Full support dari develper bot
6. Daftar pertama 15k/ bulan
7. Biaya perpanjang 10k/bulan

Menjadi user premium gaakan membuatmu jatuh miskin, dan kamu membantu creator bot untuk lebih mengembangkan bot ini ☺
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
