const { default: got } = require('got/dist/source');
const fetch = require('node-fetch')
const request = require('request')
const emoji = require('emoji-regex')
const fs = require('fs-extra') 
const axios = require('axios')
const mime = require('mime')

const moment = require('moment-timezone')
const cheerio = require('cheerio')

const sarahfs = async (txtsarah) => new Promise((resolve, reject) => {
    fetchBase64(`https://rest.farzain.com/api/special/fansign/indo/viloid.php?apikey=ppqeuy&text=${txtsarah}`)
    .then((res) => {
        resolve(res)
    })
    .catch((err) => {
        reject(err)
    })
})

const liriklagu = async (lagu) => {
    const response = await fetch(`http://scrap.terhambar.com/lirik?word=${lagu}`)
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    const json = await response.json()
    if (json.status === true) return `Lirik Lagu ${lagu}\n\n${json.result.lirik}`
    return `[ Error ] Lirik Lagu ${lagu} tidak di temukan!`
}

 const fdci = async (wall) => new Promise((resolve, reject) => {
     fetchJson('http://api.fdci.se/rep.php?gambar=' + wall)
        .then((result) => {
            const andwall = Math.floor(Math.random() * 41)
            resolve(result[andwall])
        })
        .catch((err) => {
            reject(err)
        })
 })

const getStickerMaker = (link) => new Promise((resolve, reject) => {
    fetch('http://api.areltiyan.xyz/sticker_maker?text='+encodeURIComponent(link), {
        method: 'GET',
    })
    .then(async res => {
        const text = await res.json()

        resolve(text)
        
     })
    .catch(err => reject(err))
});

const quotemaker = async (quotes, author = 'EmditorBerkelas', type = 'random') => {
    var q = quotes.replace(/ /g, '%20').replace('\n','%5Cn')
    const response = await fetch(`https://terhambar.com/aw/qts/?kata=${q}&author=${author}&tipe=${type}`)
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`)
    const json = await response.json()
    if (json.status) {
        if (json.result !== '') {
            const base64 = await (require("./fetcher")).getBase64(json.result)
            return base64
        }
    }
}

const nulis = async (ngetik) => new Promise((resolve, reject) => {
    var nulisText = ngetik.replace(/ /g, '%20').replace('\n','%5Cn')
    fetchBase64(`https://api.vhtear.com/write?text=${nulisText}&apikey=Tobz2k19`, 'image/png')
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})
const emojiStrip = (string) => {
    return string.replace(emoji, '')
}
const fb = async (url) => {
    const response = await fetch(`http://scrap.terhambar.com/fb?link=${url}`)
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`)
    const json = await response.json()
    if (json.status === true) return {
        'capt': json.result.title, 'exts': '.mp4', 'url': json.result.linkVideo.sdQuality
    }
    return {
        'capt': '[ ERROR ] Not found!', 'exts': '.jpg', 'url': 'https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg'
    }
}

const ss = async(query) => {
    request({
        url: "https://api.apiflash.com/v1/urltoimage",
        encoding: "binary",
        qs: {
            //access_key: "936374c670b24c048b603fae2fe4b480",
            access_key: "5f8b76e73dae47349b1d414ed0e89acc",
            url: query
        }
    }, (error, response, body) => {
        if (error) {
            console.log(error);
        } else {
            fs.writeFile("./media/img/screenshot.jpeg", body, "binary", error => {
                console.log(error);
            })
        }
    })
}

const randomNimek = async (type) => {
    var url = 'https://api.computerfreaker.cf/v1/'
    switch(type) {
        case 'nsfw':
            const nsfw = await fetch(url + 'nsfwneko')
            if (!nsfw.ok) throw new Error(`unexpected response ${nsfw.statusText}`)
            const resultNsfw = await nsfw.json()
            return resultNsfw.url
            break
        case 'hentai':
            const hentai = await fetch(url + 'hentai')
            if (!hentai.ok) throw new Error(`unexpected response ${hentai.statusText}`)
            const resultHentai = await hentai.json()
            return resultHentai.url
            break
        case 'anime':
            let anime = await fetch(url + 'anime')
            if (!anime.ok) throw new Error(`unexpected response ${anime.statusText}`)
            const resultNime = await anime.json()
            return resultNime.url
            break
        case 'neko':
            let neko = await fetch(url + 'neko')
            if (!neko.ok) throw new Error(`unexpected response ${neko.statusText}`)
            const resultNeko = await neko.json()
            return resultNeko.url
            break
        case 'trap':
            let trap = await fetch(url + 'trap')
            if (!trap.ok) throw new Error(`unexpected response ${trap.statusText}`)
            const resultTrap = await trap.json()
            return resultTrap.url
            break
    }
}
const wall = async(query) => {
    var q = query.replace(/ /g, '+')
    const response = await fetch(`https://wall.alphacoders.com/api2.0/get.php?auth=3e7756c85df54b78f934a284c11abe4e&method=search&term=${q}`)
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`)
    const json = await response.json()
    console.log(json)
    if (json.success === true) {
        return json.wallpapers[0].url_image
    } else {
        return `https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg`
    }
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const jadwalTv = async (query) => {
    const res = await got.get(`https://docs-jojo.herokuapp.com/jadwaltv/${query}`).json()
    if (res.error) return res.error
    switch(query) {
        case 'antv':
            return `\t\t[ ANTV ]\n${res.join('\n')}`
            break
        case 'gtv':
            return `\t\t[ GTV ]\n${res.join('\n')}`
            break
        case 'indosiar':
            return `\t\t[ INDOSIAR ]\n${res.join('\n')}`
            break
        case 'inewstv':
            return `\t\t[ iNewsTV ]\n${res.join('\n')}`
            break
        case 'kompastv':
            return `\t\t[ KompasTV ]\n${res.join('\n')}`
            break
        case 'mnctv':
            return `\t\t[ MNCTV ]\n${res.join('\n')}`
            break
        case 'metrotv':
            return `\t\t[ MetroTV ]\n${res.join('\n')}`
            break
        case 'nettv':
            return `\t\t[ NetTV ]\n${res.join('\n')}`
            break
        case 'rcti':
            return `\t\t[ RCTI ]\n${res.join('\n')}`
            break
        case 'sctv':
            return `\t\t[ SCTV ]\n${res.join('\n')}`
            break
        case 'rtv':
            return `\t\t[ RTV ]\n${res.join('\n')}`
            break
        case 'trans7':
            return `\t\t[ Trans7 ]\n${res.join('\n')}`
            break
        case 'transtv':
            return `\t\t[ TransTV ]\n${res.join('\n')}`
            break
        default:
            return '[ ERROR ] Channel TV salah! silahkan cek list channel dengan mengetik perintah *.listChannel*'
            break
    }
}

const random = (subreddit) => new Promise((resolve, reject) => {
    const subreddits = ['dankmemes', 'wholesomeanimemes', 'wholesomememes', 'AdviceAnimals', 'MemeEconomy', 'memes', 'terriblefacebookmemes', 'teenagers', 'historymemes']
    const randSub = subreddits[Math.random() * subreddits.length | 0]
    console.log('looking for memes on ' + randSub)
    fetchJson('https://meme-api.herokuapp.com/gimme/' + randSub)
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})

const gasNulisFolio = (id) => new Promise((resolve, reject) => {
    fetch(`http://api.areltiyan.xyz/nulis_folio`, {
        method: 'POST',
        headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36",
            },
        body: new URLSearchParams(`text=${id}`)
    })
    .then(async res => {
        const result =  await res.json()
  
        resolve(result)
    })
    .catch(err => reject(err))
});

function getRandomText(id) {
    var raNdText = id[Math.floor(Math.random() * id.length)];
    return raNdText;
}

function genUniqueId(length)
{
        var text = "";
        var possible =
            "abcdefghijklmnopqrstuvwxyz1234567890";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
};

const generate = (text, nama, rand, param,base) => new Promise((resolve, reject) => {
    const boday =`base64=${base}&quote=${text}&nama=${nama}&file=${rand}&param=${param}`
    fetch(`http://api.areltiyan.xyz/quotemaker/index2.php`, {
        method: 'post', 
        body: new URLSearchParams(boday)
    })
    .then(async res => {
        const result = await res.text()

        resolve(result)
    })
    .catch(err => reject(err))
});
  
const gasNulis = (id) => new Promise((resolve, reject) => {
    fetch(`http://api.areltiyan.xyz/image_test`, {
        method: 'POST',
        headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36",
            },
            body: new URLSearchParams(`string=${id}`)
    })
    .then(async res => {
        const result =  await res.json()

        resolve(result)
    })
    .catch(err => reject(err))
});

const GetAccesToken = () => new Promise((resolve, reject) => {
    fetch(`https://api.twitter.com/oauth2/token`, {
        method: 'POST',
        headers: {
          "Host": "api.twitter.com",
          "authorization": "Basic U2plWFpLaThubElIdllSYTh0U2hvWXBhaDpzMkJjSU1PektIbU0zY0hDUzllVWhadVNCOXBFck04QktsVDhPeVlhd0FYdmpHWGNjVg==",
  "accept-encoding": "gzip",
  "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
  "content-length": 29,
  "user-agent": "TwitterAndroidSDK/3.1.1.9 Redmi Note 8/10 (Xiaomi;Redmi Note 8;Xiaomi;ginkgo)",
  },
  body: `grant_type=client_credentials`
    })
    .then(async res => {
        const result = {
            body: await res.json()
        };
  
        resolve(result.body)
    })
    .catch(err => reject(err))
  });
  
  const getGuestToken = (token) => new Promise((resolve, reject) => {
    fetch(`https://api.twitter.com/1.1/guest/activate.json`, {
        method: 'POST',
        headers: {
          "Host": "api.twitter.com",
          "authorization": "Bearer " + token,
  "accept-encoding": "gzip",
  "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
  "content-length": 0,
  "user-agent": "TwitterAndroidSDK/3.1.1.9 Redmi Note 8/10 (Xiaomi;Redmi Note 8;Xiaomi;ginkgo)",
  },
  body: `grant_type=client_credentials`
    })
    .then(async res => {
        const result = {
            body: await res.json()
        };
  
        resolve(result.body)
    })
    .catch(err => reject(err))
  });
  
  const getAktivate = (token, guestoken, post) => new Promise((resolve, reject) => {
    fetch(`https://api.twitter.com/1.1/statuses/show.json?tweet_mode=extended&include_cards=true&cards_platform=TwitterKit-13&id=${post}&trim_user=false&include_my_retweet=false&include_entities=false`, {
        method: 'GET',
        headers: {
          "Host": "api.twitter.com",
          "authorization": "Bearer " + token,
        "accept-encoding": "gzip",
        "x-guest-token": guestoken,
        "user-agent": "okhttp/3.8.0",
  },
    })
    .then(async res => {
        const result = {
            body: await res.json()
        };
  
        resolve(result.body)
    })
    .catch(err => reject(err))
  });

const processTime = (timestamp, now) => {
    // timestamp => timestamp when message was received
    return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}
  
function randNominal()
{
        var myArray = ["sunset","iceland","mountain","rain","sea", "tree", "sky", "nasa", "night"];
        var randomItem = ''
            while(true){
                randomItem = myArray[Math.floor(Math.random()*myArray.length)];
                
                return randomItem;
            }
};

const getToken = (id) => new Promise((resolve, reject) => {
    fetch(`https://mate09.y2mate.com/en24/analyze/ajax`, {
        method: 'POST',
        headers: {
            'Host': 'mate09.y2mate.com',
            'Connection': 'keep-alive',
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' ,
            'Origin': 'https://www.y2mate.com' ,
            'Referer': 'https://www.y2mate.com/en24',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors' ,
            'Sec-Fetch-Dest': 'empty' ,
            'Accept-Language': 'en-US,en;q=0.9',
        },
      body: `url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${id}&q_auto=0&ajax=1`
    })
    .then(async res => {
        const result = await res.json()
        $ = cheerio.load(result.result)
        const ress = {
          token: result.result.split(`k__id = "`)[1].split(`"`)[0],
          title: $('div[class="caption text-left"] b').text()
        }
        resolve(ress)
    })
    .catch(err => reject(err))
});

const startConvert = (id, token) => new Promise((resolve, reject) => {
    fetch(`https://mate12.y2mate.com/en24/convert`, {
        method: 'POST',
        headers: {
            'Host': 'mate12.y2mate.com',
            'Connection': 'keep-alive',
            'Accept': '*/*',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' ,
            'Origin': 'https://www.y2mate.com' ,
            'Referer': 'https://www.y2mate.com/en24',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors' ,
            'Sec-Fetch-Dest': 'empty' ,
            'Accept-Language': 'en-US,en;q=0.9',
        },
      body: `type=youtube&_id=${token}&v_id=${id}&mp3_type=320`
    })
    .then(async res => {
        const result = await res.json()
        $ = cheerio.load(result.result)
        const a = $(`div[class="form-group has-success has-feedback"] a`).attr('href')
        resolve(a)
    })
    .catch(err => reject(err))
  });
function base64Only(url) {
    return axios
      .get(url, {
        responseType: 'arraybuffer',
        headers: {
            "Connection":"keep-alive",
        },
        maxContentLength: "73400320"
      })
      .then(response => Buffer.from(response.data, 'binary').toString('base64'))
      .catch(err => err.toString())
}

function getBase64(url) {
    return axios
      .get(url, {
        responseType: 'arraybuffer',
        headers: {
            	"Connection":"keep-alive", 
        }, 
      })
      .then(response => "data:" + response.headers['content-type'] + ";base64," + Buffer.from(response.data, 'binary').toString('base64'))
      .catch(err => err.toString())
}

function base64MimeType(encoded) 
{
    var result = null;
  
    if (typeof encoded !== 'string') 
    {
      return result;
    }
  
    var mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
  
    if (mime && mime.length) 
    {
      result = mime[1];
    }
  
    return result;
}

module.exports = {
    base64MimeType,
    getBase64,
    startConvert,
    base64Only,
    getToken,
    wall,
    getStickerMaker,
    ss,
    jadwalTv,
    sleep,
    emojiStrip,
    fb,
    nulis,
    processTime,
    randomNimek,
    quotemaker,
    liriklagu,
    gasNulis,
    fdci,
    sarahfs,
    generate,
    genUniqueId,
    getRandomText,
    getGuestToken,
    GetAccesToken,
    getAktivate,
    gasNulisFolio,
    randNominal
}
