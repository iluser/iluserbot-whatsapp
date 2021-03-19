const fs = require('fs-extra')
//const sleep = require('./lib/functions')

  module.exports = welcome = async (iluser, change) => {
    try{
      const info = await iluser.getChatById(change.chat)
      console.log(`${change.action} => ${info.name}`);
      if (change.action == 'add') {
        const msg = await getDB.msg_add(change.chat);
        const who = change.who;
        var target = who.match(/\d+/g);
        // let user = [];
        // for (var i = 0; i < who.length; i++) {
        //   var nomer = who[i].match(/\d+/g);
        //   user += `@${nomer},`;
        // }
        if (msg == undefined) {
          iluser.sendText(change.chat, `Selamat datang di *${info.name}*, Silahkan untuk memperkenalkan diri.`);
        }else if (msg.msg_add.length == 0) {
          iluser.sendText(change.chat, `Selamat datang di *${info.name}*, Silahkan untuk memperkenalkan diri.`);
        }else{
          const get_db = decodeURIComponent(msg.msg_add);
          // const nama = get_db.split('{nama}').join(`@${target}`);
          // const pesan = nama.split('{grup}').join(info.name);
          // console.log(pesan);
          iluser.sendText(change.chat, get_db);
        }
      }else if (change.action == 'remove') {
        const msg = await getDB.msg_kick(change.chat);
        const who = change.who;
        var target = who.match(/\d+/g);
        if (msg == undefined) {
          iluser.sendTextWithMentions(change.chat, `@${target} telah keluar dari grub`);
        }else if (msg.msg_kick.length == 0) {
          iluser.sendTextWithMentions(change.chat, `@${target} telah keluar dari grub`);
        }else{
          const get_db = decodeURIComponent(msg.msg_kick);
          // const nama = get_db.split('{nama}').join(`@${target}`);
          // const pesan = nama.split('{grup}').join(info.name);
          // console.log(pesan);
          iluser.sendText(change.chat, get_db);
        }
      }
    }catch(err){console.log(err)}
  }