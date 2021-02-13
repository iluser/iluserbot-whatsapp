const cheerio = require('cheerio') ;
const fetch = require('node-fetch') ;

exports.getZodiakToday = function(zodiak)
{
    return new Promise((resolve, reject) => {
    fetch(`https://www.fimela.com/zodiak/${zodiak}`, {
        method: 'GET',
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
    },
        })
        .then(async res => {
            const result = await res.text()
            $ = cheerio.load(result)
            const fruits = [];
            $('div[class="zodiak--content__content"]').each(function(i, elem) {
                fruits[i] = $(this).text();
            });
            const linkpreview = $('a[class="zodiac__random__link"] img').attr('src')
            const result2 = {
                img: linkpreview,
                umum: fruits[0],
                love: 'Single: ' + fruits[1].split('Single: ')[1].split('.')[0] + '\n' + 'Couple: ' + fruits[1].split('Couple: ')[1].split('.')[0],
                keuangan: fruits[2],
            }
            resolve(result2)
        })
        .catch(err => reject(err))
    });
}