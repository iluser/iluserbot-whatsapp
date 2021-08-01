const fetch = require('node-fetch')
const axios = require('axios')
const fs = require('fs-extra')
const TikTokScraper = require('tiktok-scraper');
let setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
let { 
    vhtearkey
    } = setting


async function TiktokData(url) {
	const videoMeta = await TikTokScraper.getVideoMeta(url);
    return ({
		Status: 200,
		Judul: videoMeta.collector[0].text,
		Video_URL: {
			WithWM: videoMeta.collector[0].videoUrl,
			WithoutWM: videoMeta.collector[0].videoUrlNoWaterMark
		}
	});
}

const tiktokk = (url) => new Promise((resolve, reject) => {
    if (url === 'undefined') { reject('Urlnya mana om?.') }
    try {
		TiktokData(url).then(data => {
			resolve(data);
		});
    } catch (error) {
        reject({
			code:400,
			message: error
		});
    }
})

const facebook = async (url) => new Promise(async (resolve, reject) => {
    const api = `https://api.vhtear.com/fbdl?link=${url}&apikey=${vhtearkey}`
    axios.get(api).then(async(res) => {
        const st = res.data.result
        if(st.status === false){
            resolve(`Media Tidak Di Temukan`)
        }else{
            resolve(st)
        }
    }).catch(err => {
        console.log(err)
        resolve(`Maaf, Server Sedang Error`)
    })
})


exports.tiktokk = tiktokk;
exports.facebook = facebook;

