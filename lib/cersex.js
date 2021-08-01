const axios = require("axios");
const cheerio = require("cheerio");

var gData;

axios.get('http://162.213.249.120/').then((response) => {
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
    console.log($('.post-content').text().replace(/“/g, '').replace(/  /g, ' ').replace("                                                     ", ''));
  })
});