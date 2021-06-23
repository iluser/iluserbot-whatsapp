const fs = require('fs-extra')
const { re } = require('mathjs')
//const { prefix } = require('./lib/database/setting.json')
const { prefix } = require('../lib/database/setting.json')

function help( pushname ) {
    return `
    *SELAMAT DATANG ${pushname}*

Follow me on: github.com/iluser

==============================
*#rules* [ *RULES BOT!* ]
*${prefix}about* [ info bot ]
*${prefix}info* [ CHANGELOG BOT ]
*${prefix}snk* [ Syarat dan ketentuan ]
*${prefix}bug* _fitur yang bermasalah_
*${prefix}premfitur* [ fitur premium? ]
*${prefix}donasi* [ jika kamu ingin donasi ]
==============================

Use the translation if you don't understand the words.
${prefix}translate *code* _the text you don't understand._

[for code, type *${prefix}bahasa* to see a list of language codes]


*${prefix}join* = Memasukkan bot ke dalam grupmu


*${prefix}menu0* = TOOLS MANAGEMENT GROUP
› Tools untuk mengatur grup

*${prefix}menu1* = EDUCATION MENU
› Tempat nte cari ilmu

*${prefix}menu2* = STICKER CREATOR
› Tempat nte buat stiker

*${prefix}menu3* = TARCKING MENU
› Tempat nte ngetrck resi dll

*${prefix}menu4* = RELIGI MENU
› Tempat nte manen pahala

*${prefix}menu5* = DOWNLOADER
› Tempat nte unduh media dari sosmed

*${prefix}menu6* = INFORMATION
› Tempat nte cari cari informasi

*${prefix}menu7* = STALKING
› Tempat nte ngestalk sosmed mantan

*${prefix}menu8* = SEARCH MENU
› Tempat nte cari cari sesuatu

*${prefix}menu9* = TEXT-MENU
› Gatau mau jelasi apa, coba aja

*${prefix}menu10* = CREATE MENU
› Tempat nte jadi editor bergelas

*${prefix}menu11* = IMAGE-MANIPULATION
› Tempat nte jadi editor bergelas v2

*${prefix}menu12* = OTHER MENU
› Ini menu lainnya yang ada di bot

*${prefix}menu13* = IN-GROUP
› Menu yang hanya bisa digunakan di dalam grup

*${prefix}menu14* = GAME AREA
› Menu game

*${prefix}menu15* = ANIME
› Khusus wibu bau bawang ni ngab

*${prefix}menu16* = PORNO
› Tempat nte manen dosa

*${prefix}menu17* = AUDIO MENU
› Menu audio


This bot made with ❤ by: *_ilwan_*`
}
exports.help = help()

function menuadmin() {
    return `
`
}
exports.menuadmin = menuadmin()

function menu0() {
    return `
*TOOLS MANAGEMENT GROUP*

*${prefix}bot off* : menonaktifkan bot di grup

*${prefix}bot on* : mengaktifkan bot di dalam grup

*${prefix}lock* : mengunci grup

 *${prefix}unlock* : membuka kunci grup

 *${prefix}leave* : Mengeluarkan bot dari grup

 *${prefix}disable _command_* : Menonaktifkan suatu command di dalam grup
 › ${prefix}disable ${prefix}asupan

 *${prefix}enable _command_* : Mengaktifkan suatu command di dalam grup
 › ${prefix}enable ${prefix}asupan

*${prefix}link* : Mengambil link grup

 *${prefix}resetlink* : Mereset link grup

 *${prefix}warn* : Memberi peringatan kepada user 1-3x
 › ${prefix}warn @tag / balas pesan user

 *${prefix}delwarn* : Menghapus peringatan user
 › ${prefix}delwarn @tag / balas pesan user

 *${prefix}add* : Menambahkan target ke dalam grup
 › ${prefix}add 628xnxx / balas pesan user

 *${prefix}kick* : Mengeluarkan target dari grup
 › ${prefix}kick @tag / balas pesan user

 *${prefix}promote* : Menjadikan target sebagai admin
 › ${prefix}promote @tag / balas pesan user

 *${prefix}demote* : Menghapus jabatan target dari admin ke member biasa
 › ${prefix}demote @tag / balas pesan user

 *${prefix}delete* : Menghapus pesan dari bot
 › ${prefix}delete balas pesan user

 ${prefix}kickall [ owner group ] : mengeluarkan semua member yang ada di dalam grup

 *${prefix}info-lock* : Menguci pengeditan info grup agar hanya admin yang bisa mengubahnya

 *${prefix}info-unlock* : Membuka kunci pengeditan info grup, semua member dapat mengubahnya

 *${prefix}tagall* : Mention semua member di dalam grup
 › ${prefix}tagall Beban keluarga lagi apa?

 *${prefix}setgroupicon* : Merubah foto profile grup
 › Kirim atau balas gambar dengan *${prefix}setgroupicon*

 *${prefix}adminList* : melihat daftar admin

 *${prefix}antiporn* : Fitur untuk membatasi member yang meyebarkan link, foto dan video pornografi
 › ${prefix}antiporn enable = untuk mengaktifkan
 › ${prefix}antiporn disable = untuk menonaktifkan

 *${prefix}antilink* : Fitur untuk membatasi member yang meyebarkan link grup whatsapp
 › ${prefix}antilink enable = untuk mengaktifkan
 › ${prefix}antilink disable = untuk menonaktifkan

 *${prefix}addwelcome* : Mengaktifkan fitur welcome message

 *${prefix}welcome add/kick* : Mengcustom fitur penyambutan member baru
 › ${prefix}welcome add _kalimat add_ = Untuk pesan selamat datang.
 › ${prefix}welcome kick _kalimat kick_ = Untuk pesan keluar/dikeluarkan

 *${prefix}rules* : Menampilkan peraturan grup

 *${prefix}setrules* : Membuat peraturan grup
 › ${prefix}setrules _peraturannya_

 *${prefix}resetrules* : Menghapus peraturan yang ada di dalam grup


 *Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu0 = menu0()

function menu1() {
    return `
    *EDUCATION MENU*

*${prefix}brainly* : Mencari jawaban dari server brainly 
› ${prefix}brainly kanapa admin bot ganteng banget

*${prefix}nulis* : Menulis ke buku tulis
› ${prefix}nulis admin bot ganteng banget

*${prefix}nulis2* : Menulis ke buku tulis
› ${prefix}nulis2 admin bot ganteng banget

*${prefix}nulis3* : Menulis ke buku folio
› ${prefix}nulis3 admin bot ganteng banget

*${prefix}wiki* : Mencari artikel di website wikipedia
› ${prefix}wiki Indonesia

*${prefix}kbbi* : Mencari arti dari kalimat di kamus besar bahasa Indonesia
› ${prefix}kbbi ganteng

*${prefix}translate* : Menerjemahkan kalimat ke bahasa yang kamu tuju
› ${prefix}translate en admin bot ganteng banget

*${prefix}tr* : Menerjemahkan kalimat ke bahasa yang kamu tuju
› Balas pesan yang ingin di terjemahkan dengan *${prefix}tr* id

*${prefix}google* : Penelusuran di google
› ${prefix}gooogle admin bot ganteng banget

*${prefix}totext* : Mengconvert text yang di gambar menjadi tulisan
› Kirim gambar yang berisi text dengan captio ${prefix}totext

*${prefix}hitung* : Berfungsi sebagai kalkulator
› ${prefix}hitug 1 + 2 * 3 - 4 / 5


*Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu1 = menu1()

function menu2() {
    return `
    *STICKER CREATOR*

*${prefix}stiker* : Membuat stiker
› Kirim gambar atau video dengan caption ${prefix}stiker

*${prefix}emstik* : Membuat stiker dari emoji
› ${prefix}emstik 🙂

*${prefix}emostik* : Membuat stiker dari emoji
› ${prefix}emostik 🙂

*${prefix}sfire* : Membuat stiker di dalam neraka
› kirim gambar dengan caption ${prefix}sfire

*${prefix}sgif* : Membuat stiker
› Kirim video dengan caption ${prefix}stiker

*${prefix}ttp* : Membuat stiker dari text
› ${prefix}ttp admin bot ganteng

*${prefix}attp* : Membuat stiker animasi dari text
› ${prefix}attp admin bot ganteng

*${prefix}ttp2* : Membuat stiker dari text
› ${prefix}ttp2 admin bot ganteng

*${prefix}ttg* : Membuat stiker animasi dari text
› ${prefix}ttg admin bot ganteng

*${prefix}memesticker* : Mengkonvert foto langsung menjadi sticker dengan kata kata
› ${prefix}memesticker |admin | ganteng

*${prefix}findsticker* : Mencari sticker dengan kata kunci
› ${prefix}findsticker pentol

*${prefix}take* : Merubah watermark dari sticker
› balas sticker dengan ${prefix}take pack | author

*${prefix}takevid* : Merubah watermark dari animated sticker
› balas animated sticker dengan ${prefix}takevid | pack | author


*Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu2 = menu2()

function menu3() {
    return `
    *TRACKING MENU*

*${prefix}resi jne* : Menampilkan informasi tracking dari ekspedisi jne
› ${prefix}resi jne 123xnxx

*${prefix}resi pos* : Menampilkan informasi tracking dari ekspedisi pos
› ${prefix}resi pos 123xnxx

*${prefix}resi tiki* : Menampilkan informasi tracking dari ekspedisi tiki
› ${prefix}resi tiki 123xnxx

*${prefix}resi wahana* : Menampilkan informasi tracking dari ekspedisi wahana
› ${prefix}resi wahana 123xnxx

*${prefix}resi jnt* : Menampilkan informasi tracking dari ekspedisi jnt
› ${prefix}resi jnt 123xnxx

*${prefix}resi sicepat* : Menampilkan informasi tracking dari ekspedisi sicepat
› ${prefix}resi sicepat 123xnxx

*${prefix}resi pcp* : Menampilkan informasi tracking dari ekspedisi pcp
› ${prefix}resi pcp 123xnxx

*${prefix}resi jet* : Menampilkan informasi tracking dari ekspedisi jet
› ${prefix}resi jet 123xnxx

${prefix}resi dse* : Menampilkan informasi tracking dari ekspedisi dse
› ${prefix}resi dse 123xnxx

*${prefix}resi rpx* : Menampilkan informasi tracking dari ekspedisi rpx
› ${prefix}resi rpx 123xnxx

*${prefix}resi sap* : Menampilkan informasi tracking dari ekspedisi sap
› ${prefix}resi sap 123xnxx

*${prefix}resi first* : Menampilkan informasi tracking dari ekspedisi first
› ${prefix}resi first 123xnxx

*${prefix}resi ninja* : Menampilkan informasi tracking dari ekspedisi ninja
› ${prefix}resi ninja 123xnxx

*${prefix}resi lion* : Menampilkan informasi tracking dari ekspedisi lion
› ${prefix}resi lion 123xnxx

*${prefix}resi rex* : Menampilkan informasi tracking dari ekspedisi rex
› ${prefix}resi rex 123xnxx

*${prefix}resi idl* : Menampilkan informasi tracking dari ekspedisi idl
› ${prefix}resi idl 123xnxx

*${prefix}checkip* : Menampilkan informasi dari alamat ip yang di tracking
› ${prefix}checkip 127.0.xnxx

*${prefix}checkip2* : Menampilkan informasi dari alamat ip yang di tracking
› ${prefix}checkip2 127.0.xnxx

*${prefix}alamat* : Menampilkan informasi dari lokasi yang kamu ketikan
› ${prefix}alamat jln purbaya kopang

*${prefix}jarak* : Menampilkan informasi jarak antar kota
› ${prefix}jarak lombok | bali

*${prefix}ceklokasi* : Menampilkan informasi kasus dan zona corona di lokasimu
› kirim lokasi, kmudian balas dengan ${prefix}ceklokasi


*Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu3 = menu3()

function menu4() {
    return `
    *RELIGI MENU*

*${prefix}quran* : Menampilkan hasil dari alquran
› ${prefix}quran 1

*${prefix}jadwalshalat* : Menampilkan jadwal solat dari wilayah tujuan
› ${prefix}jadwalshalat mataram

*${prefix}tafsir* : Menampilkan hasil dari tafsir ayat 
› ${prefix}tafsir al-ikhlas 2

*${prefix}infosurah* : Menampilkan hasil dari informasi surah yang kamu maksud
› ${prefix}infosurah al-ikhlas

*${prefix}listsurah* : Menampilkan hasil dari list surah yang ada di alquran


*Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu4 = menu4()

function menu5() {
    return `
    *DOWNLOAD MENU*

*${prefix}video* : Mencari video dengan kata kunci
› ${prefix}video resah jadi luka

*${prefix}getvideo* : Mengunduh video dari hasil pencarian video sebelumnya
› balas list hasil pencarian video dengan ${prefix}getvideo 1

*${prefix}music* : Mencari musik dengan kata kunci
› ${prefix}musik resah jadi luka

*${prefix}getmusic* : Mengunduh musik dari hasil pencarian musik sebelumnya
› balas list hasil pencarian musik dengan ${prefix}getmusik 1

*${prefix}asupan* : Mencari video asupan dari server tiktok
› ${prefix}asupan = random asupan
› ${prefix}asupan nikkivelayo = pencarian asupan tertarget

*${prefix}yt* : Mengunduh video dari Youtube
› ${prefix}yt www.youtube.com/xnxx

*${prefix}ytmp3* : Mengunduh audio dari Youtube
› ${prefix}yt www.youtube.com/xnxx

*${prefix}lagu* : Mencari lagu berdasarkan judul
› ${prefix}lagu resah jadi luka

*${prefix}play* : Mencari lagu berdasarkan judul
› ${prefix}play resah jadi luka

*${prefix}play2* : Mencari lagu berdasarkan judul
› ${prefix}play2 resah jadi luka

*${prefix}joox* : Mencari lagu berdasarkan judul
› ${prefix}joox resah jadi luka

*${prefix}spotify* : Mencari lagu berdasarkan judul dari server spotify
› ${prefix}joox resah jadi luka

*${prefix}spdl* : Mengundh lagu dari url spotify
› ${prefix}spdl https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA

*${prefix}ig* : Mengunduh media dari instagram
› ${prefix}ig https://www.instagram.com/p/B5yrmkKBFID/

*${prefix}ig2* : Mengunduh media dari instagram
› ${prefix}ig2 https://www.instagram.com/p/B5yrmkKBFID/

*${prefix}tw* : Mengunduh media dari twitter
› ${prefix}tw https://twitter.com/i/status/1235404453227839488

*${prefix}tw2* : Mengunduh media dari twitter
› ${prefix}tw https://twitter.com/i/status/1235404453227839488

*${prefix}pin* : Mengunduh media dari pinterest
› ${prefix}pin https://pin.it/xnxx

*${prefix}fb* : Mengunduh video dari facebook
› ${prefix}fb https://www.facebook.com/sri.margono12/videos/2819620074772184/

*${prefix}fb2* : Mengunduh video dari facebook
› ${prefix}fb2 https://www.facebook.com/sri.margono12/videos/2819620074772184/

*${prefix}fb3* : Mengunduh video dari facebook
› ${prefix}fb3 https://www.facebook.com/sri.margono12/videos/2819620074772184/

*${prefix}tiktok* : Mengunduh video dari tiktok
› ${prefix}tiktok https://vt.tiktok.com/SSEusw/

*${prefix}tt* : Mengunduh video dari tiktok tanpa watermark
› ${prefix}tt https://vt.tiktok.com/SSEusw/

*${prefix}tt2* : Mengunduh video dari tiktok tanpa watermark
› ${prefix}tt2 https://vt.tiktok.com/SSEusw/

*${prefix}smule* : Mengunduh video dari smule
› ${prefix}smule https://smule.com/xnnx

*${prefix}starmaker* : Mengunduh video dari starmaker
› ${prefix}starmaker https://starmaker.com/xnxx

*${prefix}igstory* : Mengunduh story instagram [usernamenya aja tod]
› ${prefix}igstory awreceh.id

*${prefix}igs* : mengunduh story instagram
› ${prefix}igs awreceh.id (semua story, max 10)
› ${prefix}igs awreceh.id 14 (story ke-14)

*${prefix}mediafire* : Mengunduh file dari mediafire
› ${prefix}mediafire http://www.mediafire.com/file/ic6msz661a11xxl/Acer_Aspire_M5-582_%2528Pegatron_JM50%2529.pdf

*${prefix}apk* : Mengunduh aplikasi android
› ${prefix}apk facebook lite


*Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu5 = menu5()

function menu6() {
    return `
    *INFORMATION MENU*

*${prefix}heroml* : Menampilkan informasi hero mobile legend
› ${prefix}heroml vale

*${prefix}jadwalbola* : Menampilkan informasi jadwal pertandingan bola

*${prefix}waktu* : Menampilkan informasi waktu Indonesia

*${prefix}news* : Menampilkan informasi berita terbaru

*${prefix}covidindo* : Menampilkan informasi corona Indonesia

*${prefix}covid* : Menampilkan informasi corona dari negara yang kamu tuju
› ${prefix}covid india

*${prefix}infonomor* : Menampilkan informasi dari nomor hp target
› ${prefix}infonomor 6283142xnxx

*${prefix}kurs* : Menampilkan informasi perbandingan mata uang Indonesia dengan mata uang digital/global
› ${prefix}kurs usd|19


*Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu6 = menu6()

function menu7() {
    return `
    *STALKING MENU*

*${prefix}twtstalk* : stalking akun twitter
› ${prefix}twtstalk iluser_x

*${prefix}tiktokstalk* : stalking akun tiktok
› ${prefix}tiktokstalk reemarmartin

*${prefix}igstalk* : stalking akun instagram
› ${prefix}igstalk il.userr

*${prefix}smulestalk* : stalking akun smule
› ${prefix}smulestalk user


*Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu7 = menu7()

function menu8() {
    return `
    *SEARCH MENU*

*${prefix}playstore* : Menampilkan hasil pencarian di playstore
› ${prefix}playstore vitub

*${prefix}apkpure* : Menampilkan hasil pencarian di web apkpure
› ${prefix}apkpure vitub

*${prefix}shopee* : Mencari barang di shopee
› ${prefix}shopee masker anti jomblo

*${prefix}newlinesticker* : Menampilkan hasil pencarian stiker terbaru line

*${prefix}ytsearch* : Menampilkan hasil pencarian youtube
› ${prefix}youtube cara membobol nasa

*${prefix}yts* : Menampilkan hasil pencarian youtube
› ${prefix}yts cara membobol nasa

*${prefix}spek* : Menampilkan hasil dari spesifikasi ponsel yang kamu maksud
› ${prefix}spek j2 prime

*${prefix}motor* : Menampilkan hasil dari spesifikasi motor yang kamu maksud
› ${prefix}motor beat

*${prefix}mobil* : Menampilkan hasil dari spesifikasi mobilm yang kamu maksud
› ${prefix}mobil avanza

*${prefix}github* : Menampilkan hasil dari repositori github
› ${prefix}github iluser

*${prefix}resep* : Menampilkan hasil resep masakan
› ${prefix}resep nasi goreng

*${prefix}bioskop* : Menampilkan hasil dari pencarian bioskop di kota yang kamu maksud
› ${prefix}bioskop lombok

*${prefix}infoapk* : Informasi detail sebuah aplikasi
› ${prefix}infoapk com.termux


*Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu8 = menu8()

function menu9() {
    return `
    *TEXT MENU*

*${prefix}cerpen* : menampilkan random cerita pendek

*${prefix}puisi* : menampilkan random puisi

*${prefix}kebalik* : membalikkan text
› ${prefix}kebalik admin bot ganteng

*${prefix}creepyfact* : menampilkan random fakta mengerikan

*${prefix}fakta* : menampilkan random fakta unik

*${prefix}bacot* : menampilkan kata kata random

*${prefix}bacotadd* : menambahkan kata kata ke database bacot
› ${prefix}bacotadd admin bot ganteng banget

*${prefix}renungan* : menampilkan random renungan

*${prefix}pantun* : menampilkan random pantun

*${prefix}bucin* : menampilkan random kata kata bucin

*${prefix}katabijak* : menampilkan random kata kata bijak

*${prefix}katasenja* : menampilkan random kata senja

*${prefix}motivasi* : menampilkan random kata - kata motivasi

*${prefix}katafiersa* : menampilkan random kata - kata fiersa besari

*${prefix}quotes* : menampilkan random quotes

*${prefix}hilih* : merubah kalimat ke text hilih
› ${prefix}hilih aku janji gaakan ninggalin kamu

*${prefix}alay* : merubah kalimat ke text alay
› ${prefix}alay pagi sayang

*${prefix}chord* : mencari chrod gitar berdasarkan judul lagu
› ${prefix}chord resah jadi luka

*${prefix}lirik* : mencari lirik lagu berdasarkan judul
› ${prefix}irik resah jadi luka

*${prefix}lirik2* : mencari lirik lagu berdasarkan judul v2
› ${prefix}irik2 resah jadi luka

*${prefix}zodiak* : menampilkan zodiak harian
› ${prefix}zodiak pisces

*${prefix}zodiak2* : menampilkan zodiak mingguan
› ${prefix}zodiak2 pisces


*Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu9 = menu9()

function menu10() {
    return `
    *CREAT MENU*

*${prefix}kue* : membuat text menjadi gambar dengan dengan tema kue
› ${prefix}kue ilwan ganteng

*${prefix}chalktext* : membuat text menjadi gambar dengan dengan tema chalktext
› ${prefix}chalktext ilwan ganteng

*${prefix}wooden-sign* : membuat text menjadi gambar dengan dengan tema wooden-sign
› ${prefix}wooden-sign ilwan ganteng

*${prefix}salju* : membuat text menjadi gambar dengan dengan tema salju
› ${prefix}salju ilwan|ganteng

*${prefix}bioskoptext* : membuat text menjadi gambar dengan dengan tema bioskoptext
› ${prefix}bioskoptext ilwan|ganteng

*${prefix}kalung* : membuat text menjadi gambar dengan dengan tema kalung
› ${prefix}kalung ilwan ganteng

*${prefix}gelang* : membuat text menjadi gambar dengan dengan tema gelang
› ${prefix}gelang ilwan ganteng

*${prefix}beach-sign* : membuat text menjadi gambar dengan dengan tema beach-sign
› ${prefix}beach-sign ilwan ganteng

*${prefix}bordir2* : membuat text menjadi gambar dengan dengan tema bordir2
› ${prefix}bordir2 ilwan ganteng

*${prefix}blood2* : membuat text menjadi gambar dengan dengan tema blood2
› ${prefix}blood2 ilwan ganteng

*${prefix}window* : membuat text menjadi gambar dengan dengan tema window
› ${prefix}window ilwan ganteng

*${prefix}snow-sign* : membuat text menjadi gambar dengan dengan tema snow-sign
› ${prefix}snow-sign ilwan ganteng

*${prefix}kapal* : membuat text menjadi gambar dengan dengan tema kapal
› ${prefix}kapal ilwan ganteng

*${prefix}pesawat* : membuat text menjadi gambar dengan dengan tema pesawat
› ${prefix}pesawat ilwan ganteng

*${prefix}jalan* : membuat text menjadi gambar dengan dengan tema jalan
› ${prefix}jalan ilwan ganteng

*${prefix}einstein* : membuat text menjadi gambar dengan dengan tema einstein
› ${prefix}einstein ilwan ganteng

*${prefix}lipstick* : membuat text menjadi gambar dengan dengan tema lipstick
› ${prefix}lipstick ilwan ganteng

*${prefix}typewriter* : membuat text menjadi gambar dengan dengan tema typewriter
› ${prefix}typewriter ilwan ganteng

*${prefix}graffiti* : membuat text menjadi gambar dengan dengan tema graffiti
› ${prefix}graffiti ilwan ganteng

*${prefix}graffiti2* : membuat text menjadi gambar dengan dengan tema graffiti2
› ${prefix}graffiti2 ilwan ganteng

*${prefix}graffiti3* : membuat text menjadi gambar dengan dengan tema graffiti3
› ${prefix}graffiti3 ilwan ganteng

*${prefix}tahta* : membuat text menjadi gambar dengan dengan tema tahta
› ${prefix}tahta ilwan ganteng

*${prefix}goreng* : menggoreng gambar
› kirim atau balas gambar dengan caption *${prefix}goreng*

*${prefix}carbon* : membuat text menjadi gambar dengan dengan tema carbon
› ${prefix}carbon ilwan ganteng

*${prefix}neon-sign* : membuat text menjadi gambar dengan dengan tema neon-sign
› ${prefix}neon-sign ilwan|ganteng

*${prefix}karat* : membuat text menjadi gambar dengan dengan tema karat
› ${prefix}karat ilwan ganteng

*${prefix}kayu* : membuat text menjadi gambar dengan dengan tema kayu
› ${prefix}kayu ilwan|ganteng

*${prefix}tato* : membuat text menjadi gambar dengan dengan tema tato
› ${prefix}tato ilwan ganteng

*${prefix}embun* : membuat text menjadi gambar dengan dengan tema embun
› ${prefix}tato ilwan ganteng

*${prefix}trumptwt* : mengubah kalimat menjadi cuitan trump
› ${prefix}trumptwt ilwan ganteng

*${prefix}silktext* : membuat text menjadi gambar dengan dengan tema silktext
› ${prefix}silktext ilwan ganteng

*${prefix}mymind* : mengubah text menjadi change my mind
› ${prefix}mymind ilwan ganteng

*${prefix}coffee* : membuat text menjadi gambar dengan dengan tema coffee
› ${prefix}coffee ilwan ganteng

*${prefix}smoketext* : membuat text menjadi gambar dengan dengan tema smoketext
› ${prefix}smoketext ilwan ganteng

*${prefix}kanna* : membuat text menjadi gambar dengan dengan tema kanna
› ${prefix}kanna ilwan ganteng

*${prefix}sarah* : membuat fs dengan foto sarah violid
› ${prefix}sarah ilwan ganteng

*${prefix}phcomment* : membuat komen pornhub
› ${prefix}phpcomment ilwan|gile mantep banget


*Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu10 = menu10()

function menu11() {
    return `
    *IMAGE-MANIPULATION MENU*

*${prefix}wall* : menampilkan random wallpaper

*${prefix}toimg* : convert stiker ke gambar
› ${prefix}balas stiker degan ${prefix}toimg

*${prefix}textmaker* : menambahkan text ke dalam foto
› kirim atau balas foto dengan ${prefix}textmaker |ilwan|ganteng

*${prefix}gambar* : mencari gambar berdasarkan nama
› ${prefix}gambar eimi fukada

*${prefix}googleimage* : mencari gambar dari google
› ${prefix}googleimage |tante|5

*${prefix}quotemaker* : membuat quotes ke dalam gambar
› ${prefix}quotemaker |admin bot ganteng|ilwan|nature

*${prefix}quoteit* : membuat quotes ke dalam gambar
› ${prefix}quoteit admin bot ganteng | ilwan

*${prefix}maps* : mencari peta lokasi berdasarkan nama
› ${prefix}maps kopang lombok tengah

*${prefix}pokemon* : menampilakn gambar pokemon secara random
 
*${prefix}kucing* : menampilkan gamabr kucing secara random
 
*${prefix}anjing* : menampilkan gamabr anjing secara random

*${prefix}memeindo* : menampilkan meme

*${prefix}meme* : menampilkan meme

*${prefix}qrcode* : membuat kode qr dari text
› ${prefix}qrcode admin bot ganteng banget

*${prefix}qrread* : membaca kode qr
› kirim kode qr dengan caption ${prefix}qrread

*${prefix}dadu* : menampilkan gamabr dadu secara random

*${prefix}koin* : menampilkan gambar koin secara random
 
*${prefix}cewe* : menampilkan penyegar timeline cewe
 
*${prefix}cowo* : menampilkan penyegar timeline cowo

*${prefix}infoGempa* : menampilkan informasi terjadinya gempa terbaru

*${prefix}ssphone* : screenshot website dengan tampilan hp
› ${prefix}ssphone https://www.iluser.my.id

*${prefix}sspc* : screenshot website dengan tapilan desktop
› ${prefix}sspc https://www.iluser.my.id

*${prefix}springflow* : manipulasi foto dengan tema springflow
› kirim gambar dengan caption ${prefix}springflow

*${prefix}watersplash * : menampilkan zodiak mingguan
› ${prefix}zodiak2 pisces

*${prefix}cloudy* : manipulasi foto dengan teman cloudy
› kirim gambar dengan caption ${prefix}cloudy

*${prefix}sketch* : manipulasi foto dengan tema sketch
› kirim gambar dengan caption ${prefix}sketch

*${prefix}threats* : manipulasi foto dengan tema threats
› kirim gambar dengan caption ${prefix}threats

*${prefix}glass* : manipulasi foto dengan tema glass
› kirim gambar dengan caption ${prefix}glass

*${prefix}greyscale* : manipulasi foto dengn tema greyscale
› kirim gambar dengan caption ${prefix}greyscale

*${prefix}invert* : manipulasi foto dengan tema invert
› kirim gambar dengan caption ${prefix}invert

*${prefix}invertgrey* : manipulasi foto dengan tema invertgrey
› kirim gambar dengan caption ${prefix}invertgrey

*${prefix}brightness* : manipulasi foto dengan tema brightness
› kirim gambar dengan caption ${prefix}brightness

*${prefix}sepia* : manipulasi foto dengan tema sepia
› kirim gambar dengan caption ${prefix}sepia

*${prefix}burik* : manipulasi foto dengan tema burik
› kirim gambar dengan caption ${prefix}burik

*${prefix}blurfry* : manipulasi foto dengan tema blurfry
› kirim gambar dengan caption ${prefix}blurfry

*${prefix}magik* : manipulasi foto dengn tema magik
› kirim gambar dengan caption ${prefix}magik

*${prefix}captcha* : manipulasi foto dengan tema captcha
› kirim gambar dengan caption ${prefix}captcha


*Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu11 = menu11()

function menu12() {
    return `
    *OTHER MENU*

*${prefix}resend* : mengirimkan ulang media yang pernah bot kirim sebelumnya
› balas media bot dengan ${prefix}resend

*${prefix}film* : mencari link unduhan film berdasarkan judul
› ${prefix}film joker

*${prefix}kadargay* : melihat kadar gay temanmu
› ${prefix}kadargay @tag

*${prefix}aiquote* : generate random quote maker

*${prefix}subreddit* : mencari media di subreddit
› ${prefix}subreddit burung

*${prefix}artinama* : arti dari namamu
› ${prefix}artinama ilwan

*${prefix}pasangan* : ramalan kamu dengan pasanganmu
› ${prefix}pasangan ilwan|belum ada

*${prefix}nomorhoki* : melihat tingkat kehokian dari nomormu
› ${prefix}nomorhoki 083142xnxx

*${prefix}shorturl* : berfungsi untuk memperpendek url
› ${prefix}shorturl https://www.iluser.my.id

*${prefix}readmore* : membuat text baca selengkapnya
› ${prefix}readmore ilwan|ganteng

*${prefix}imgcompress* : mengcompress gambar menjadi ukuran lebih kecil
› kirim atau balas gambar dengan caption ${prefix}imgcompress

*${prefix}nickepep* : generator nick pri payer

*${prefix}wasted* : membuat dengan tanda wasted
› kirim atau  balas gamabr dengan caption ${prefix}wasted

*${prefix}gdrive* : bypass limit link googledrive
› ${prefix}gdrive https://drive.google.com/xnxx

*${prefix}kiss* : ini ciuman bro
› balas pesan user yang mau di cium dengan ${prefix}kiss

*${prefix}jail* : memenjarakan foto user
› ${prefix}jail @tag

*${prefix}wame* : generate api ke nomormu

*${prefix}imgtourl* : menjadikan foto sebagai url
› kirim atau balas foto degan caption ${prefix}imgtourl

*${prefix}imgtopdf* : mengkonvert gamabr mejadi menjadi dokumen .pdf
› kirim atau balas gambar dengan caption ${prefix}imgtopdf

*${prefix}topdf* : mengkonvert file office ke dokumen .pdf
› balas file office dengan caption ${prefix}topdf


*Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu12 = menu12()

function menu13() {
    return `
    *IN GROUP MENU*

*${prefix}trash* : membuat meme sampah
› ${prefix}trash @tag

*${prefix}hitler* : membuat meme hitler
› ${prefix}hitler @tag

*${prefix}getpp* : mengambil foto profile target
› ${prefix}getpp @tag (kalo depresi ga respon)

*${prefix}getsts* : mengambil status target
› ${prefix}getsts @tag

*${prefix}slap* : menampr online
› ${prefix}slap @tag

*${prefix}hug* : pelukan virtual
› ${prefix}hug @tag

*${prefix}pat* : mengelus online
› ${prefix}pat @tag

*${prefix}groupinfo* : info dari grup


*Dev by _@ilwan_ | github.com/iluser* `
}
exports.menu13 = menu13()

function menu14() {
    return `
    *GAME MENU*

*${prefix}tod* : game truth - dare

*${prefix}family100* : game kusi family100

*${prefix}caklontong* : game kuis caklontong

*${prefix}tebakgambar* : game tebak gambar


*Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu14 = menu14()

function menu15() {
    return `
    *WIBU MENU*

*${prefix}nhder* : hentai downloader
› ${prefix}nhder 123456

*${prefix}husbu* : random gambar husbu

*${prefix}randomNekoNime* : random gambar nekonime

*${prefix}randomanime* : random gambar anime

*${prefix}lewds* : random gambar lewds

*${prefix}fetish armpits* : random gambar fetish armpits

*${prefix}fetish feets* : random gambar fetish feets

*${prefix}fetish thighs* : random gambar fetish thighs

*${prefix}fetish ass* : random gambar fetish ass

*${prefix}fetish boobs* : random gambar fetish boobs

*${prefix}fetish belly* : random gambar fetish belly

*${prefix}fetish sideboobs* : random gambar fetish sideboobs

*${prefix}fetish ahegao* : random gambar fetish ahegao

*${prefix}loli* : random gambar loli

*${prefix}malanime* : ini gw gatau buat apa. bukan wibu soalnya
› ${prefix}malanime nama anime

*${prefix}wallanime* : random wallpaper anime

*${prefix}wait* : what is that, fitur cari anime berdasarkan cuplikan video
› kirim atau balas foto dengan caption ${prefix}wait

*${prefix}waifu* : random waifu


*Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu15 = menu15()

function menu16() {
    return `
    *18+ CONTENT*

 ${prefix}xnxx *_linknya_*
 ${prefix}hehe *_kata kunci_*
 ${prefix}xxx *kata kunci*
 ${prefix}getxxxx *kode / nomor urutan*
 ${prefix}xvideos *kata kunci*
 ${prefix}getxvideos *kode / nomor urutan*
 ${prefix}cersex : menampilkan random cerita sex


 *Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu16 = menu16()

function menu17() {
    return `
    *AUDIO MENU*

› ${prefix}tomp3 *reply video*
› ${prefix}bass *reply audio*
› ${prefix}distord *reply audio*
› ${prefix}tts *_code_ text*
› ${prefix}setvn *nama vn*
› ${prefix}v *nama vn*
› ${prefix}listvn


*Dev by _@ilwan_ | github.com/iluser*`
}
exports.menu17 = menu17()

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
${prefix}runtime
${prefix}shutdown
${prefix}addcmd

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

*SEPT 2020:* First Release

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
*11 jun 2021:*
[add] : chat with bot and more
[fix] : perbaikan bug dan beberapa fitur
[rmv] : -

*Dev by _@ilwan_ | github.com/iluser*`
}
exports.readme = readme()

function info( pushname ) {
    return `Hai ${pushname} 👋
Bot ini di modifikasi dan di kembangkan oleh ilwan

versi bot saat ini v11.0.1

Kamu bisa menemukan owner bot di:
https://www.instagram.com/il.userr

Semua info update bot akan di upload di:
t.me/iluser_BOT

Support us with subscribe
https://www.youtube.com/iluser
`
}
exports.info = info()

function snk() {
    return `Syarat dan Ketentuan *iluser_BOT*

1. Teks dan nama pengguna WhatsApp anda akan tersimpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline atau restart
3. Bot tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Bot tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error pada command silahkan langsung lapor dengan */bug* _laporannya_
`
}
exports.snk = snk()

function rules() {
    return `
    SIMPLE RULES
    
1. Nelpon / VC / Spamming = Block!
`
}
exports.rules = rules()

function premfitur() {
    return `
    [ FITUR PREMIUM ]
    
1. Unlimited limit tentunya
2. Bisa bawa bot ini masuk ke grup hanya dengan perintah *${[prefix]}join*
3. Akses seluruh fitur yang tersedia di menu
4. Masa premium 31 hari
5. Full support dari developer bot
6. Bulan pertama 15k
7. Biaya perpanjang 10k/bulan

Yok gan support bot ini menjadi lebih bagus dengan upgrade menjadi user premium. Kamu dapat melihat info pembayaran melalui command *${prefix}donasi*
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
