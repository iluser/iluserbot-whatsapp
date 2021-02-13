const fetch = require('node-fetch');
const cheerio = require('cheerio') ;

exports.PinterestAPI = (link) => new Promise((resolve, reject) => {
    fetch(`https://www.expertsphp.com/download.php`, {
        method: 'POST',
        headers: {
          "Host": "expertsphp.com",
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "accept-encoding": "gzip, deflate, br",
  "accept-language": "en-US,en;q=0.9,id;q=0.8",
  "cache-control": "no-cache",
  "content-type": "application/x-www-form-urlencoded",
  "cookie": "__gads=ID=3697dad93bae4da4:T=1580919524:S=ALNI_Ma44TOXhKZ6MPWztrbzfkLX1dOMPw; _ga=GA1.2.1716160469.1580919524; _gid=GA1.2.178302361.1581095308; _gat_gtag_UA_120752274_1=1",
  "pragma": "no-cache",
  "referer": 'https://www.expertsphp.com/pinterest-photo-downloader.html',
  "sec-fetch-mode": "navigate",
  "sec-fetch-site": "same-origin",
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
  },
  body: new URLSearchParams(`url=${link}&submit=`)
    })
    .then(async res => {
        const result = {
            body: await res.text()
        };
        $ = cheerio.load(result.body);
        const re = $('table[class="table table-condensed table-striped table-bordered"] a').attr('href')
        resolve(re)
    })
    .catch(err => reject(err))
  });