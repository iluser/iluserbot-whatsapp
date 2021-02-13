const fetch = require('node-fetch');

const getCookies = () => new Promise(async (resolve, reject) => {
    fetch(`http://api.areltiyan.site/bot_wa/ig_cookies.txt`, {
        method: 'GET',
        headers:{
           "user-agent": `Instagram 22.0.0.15.68 Android (23/6.0.1; 640dpi; 1440x2560; samsung; SM-G935F; hero2lte; samsungexynos8890; en_US) `
        }
    }).then(async res => {
        resolve(await res.text())
    })
    .catch(err => reject(err))
  });
  
exports.StartScrape = (link) => new Promise(async(resolve, reject) => {
    const cookies = await getCookies()
      fetch(`${link}`, {
        method: 'GET', 
        headers: {
            "Host": "www.instagram.com",
            "cookie": cookies,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36", 
            "Accept-Encoding": "gzip, deflate, br", 
            "accept-language": "en-US,en;q=0.9,id;q=0.8",
            "pragma": "no-cache",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
    }, 
    })
    .then(async res => {
        const result = {
            body: await res.json(),
            msg: true
        };
        
        resolve(result)
    })
    .catch(err => {
      const result = {
          msg: 'error'
      };
  
      resolve(result)
    })
});

exports.parseUrlInstagram = getUrl => {
    return getUrl.split('?')[0] + '?__a=1';
};