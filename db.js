var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bot"
});

module.exports = {
  cek_disable : (id, fitur) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM fitur WHERE groupid='"+id+"' and command='"+fitur+"'";
    db.query(sql, function (err, result) {
        if (err) {
          return reject(err);
        }
        resolve(result);
    });
  }),
  disable : (id, fitur) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO fitur (id, groupid, command, ket) VALUES (null, '"+id+"', '"+fitur+"', 'disable')";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  enable : (id, fitur) => new Promise((resolve, reject) => {
    let sql = "DELETE FROM fitur WHERE groupid='"+id+"' and command='"+fitur+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  cek_onoff : (id) => new Promise ((resolve, reject) => {
    let sql = "SELECT * FROM onoff WHERE groupid='"+id+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  off : (id) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO onoff (id, groupid, ket) VALUES (null, '"+id+"', 'off')";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    })
  }),
  on : (id) => new Promise((resolve, reject) => {
    let sql = "DELETE FROM onoff WHERE groupid='"+id+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  add_bacot : (kata) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO bacot (id, kata) VALUES (null, '"+kata+"')";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  cek_bacot : (kata) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM bacot WHERE kata='"+kata+"'";
    db.query(sql, function(err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  bacot : () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM bacot ORDER BY rand() LIMIT 1";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result[0].kata);
    });
  }),
  bacot_no : (no) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM bacot WHERE id='"+no+"' ORDER BY rand() LIMIT 1";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result[0])
    })
  }),
  count_bacot : () => new Promise((resolve, reject) => {
    let sql = "SELECT COUNT(kata) FROM bacot";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result[0]['COUNT(kata)']);
    });
  }),
  ptl : (status) => new Promise((resolve, reject) => {
    let sql = "UPDATE mode SET status='"+status+"' WHERE mode='ptl'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    })
  }),
  cek_ptl : () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM mode WHERE mode='ptl' and status='on'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    })
  }),
  nutrisi : (status) => new Promise((resolve, reject) => {
    let sql = "UPDATE mode SET status='"+status+"' WHERE mode='nutrisi'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    })
  }),
  cek_nutrisi : () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM mode WHERE mode='nutrisi' and status='on'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    })
  }),
  onBadword : (groupid) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO gc_badword (id, groupid, status) VALUES (NULL, '"+groupid+"', 'on')";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  offBadword : (groupid) => new Promise((resolve, reject) => {
    let sql = "DELETE FROM gc_badword WHERE groupid='"+groupid+"' and status='on'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  cek_gcBadword : (groupid) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM gc_badword WHERE groupid='"+groupid+"' and status='on'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  cekBadword : (kata) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM badword WHERE kata='"+kata+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  addBw : (kata) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO badword (kata) VALUES ('"+kata+"')";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  cekWlcmGroup : (groupid) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM msg_welcome WHERE groupid='"+groupid+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  addWelcome : (groupid) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO msg_welcome (id, groupid, status) VALUES (NULL, '"+groupid+"', 'on')";
    db.query(sql, function (err,result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  updateWelcome : (groupid, status) => new Promise((resolve, reject) => {
    let sql = "UPDATE msg_welcome SET status='"+status+"' WHERE groupid='"+groupid+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  get_groupid : () => new Promise((resolve, reject) => {
    let sql = "SELECT groupid FROM msg_welcome WHERE status='on'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      const get = result;
      let list = [];
      for (var i = 0; i < get.length; i++) {
        list.push(get[i].groupid);
      }
      resolve(list)
    });
  }),
  msg_add : (groupid) => new Promise((resolve, reject) => {
    let sql = "SELECT msg_add FROM msg_welcome WHERE groupid='"+groupid+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result[0]);
    });
  }),
  update_msg_add : (groupid, msg) => new Promise((resolve,reject) => {
    let sql = "UPDATE msg_welcome SET msg_add='"+msg+"' WHERE groupid='"+groupid+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  msg_kick : (groupid) => new Promise((resolve, reject) => {
    let sql = "SELECT msg_kick FROM msg_welcome WHERE groupid='"+groupid+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result[0]);
    });
  }),
  update_msg_kick : (groupid, msg) => new Promise((resolve,reject) => {
    let sql = "UPDATE msg_welcome SET msg_kick='"+msg+"' WHERE groupid='"+groupid+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  warn : (groupid, member) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM warn WHERE groupid='"+groupid+"' and member='"+member+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result[0]);
    });
  }),
  add_warn : (groupid, member) => new Promise((resolve,reject) => {
    let sql = "INSERT INTO warn (groupid, member, jumlah) VALUES ('"+groupid+"', '"+member+"', '1')";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  update_warn : (groupid, member) => new Promise((resolve,reject) => {
    let sql = "UPDATE warn SET jumlah=jumlah+1 WHERE groupid='"+groupid+"' and member='"+member+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  del_warn : (groupid, member) => new Promise((resolve, reject) => {
    let sql = "DELETE FROM warn WHERE groupid='"+groupid+"' and member='"+member+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  setRule : (groupid, rule) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO gc_rules (groupid, rules) VALUES ('"+groupid+"', '"+rule+"')";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  updateRule : (groupid, rule) => new Promise((resolve, reject) => {
    let sql = "UPDATE gc_rules SET rules='"+rule+"' WHERE groupid='"+groupid+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  delRule : (groupid) => new Promise((resolve, reject) => {
    let sql = "DELETE FROM gc_rules WHERE groupid='"+groupid+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  cekRule : (groupid) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM gc_rules WHERE groupid='"+groupid+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  warn_badword : (groupid, member) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM warn_badword WHERE groupid='"+groupid+"' and member='"+member+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result[0]);
    });
  }),
  add_warn_badword : (groupid, member) => new Promise((resolve,reject) => {
    let sql = "INSERT INTO warn_badword (groupid, member, jumlah) VALUES ('"+groupid+"', '"+member+"', '2')";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  update_warn_badword : (groupid, member) => new Promise((resolve,reject) => {
    let sql = "UPDATE warn_badword SET jumlah=jumlah+1 WHERE groupid='"+groupid+"' and member='"+member+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  del_warn_badword : (groupid, member) => new Promise((resolve, reject) => {
    let sql = "DELETE FROM warn_badword WHERE groupid='"+groupid+"' and member='"+member+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  regis_ica : (user, umur, jk) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO user_ica (user, umur, jk) VALUES ('"+user+"', '"+umur+"', '"+jk+"')";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  }),
  cek_user_ica : (nomor) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM user_ica WHERE user='"+nomor+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result[0]);
    });
  }),
  cekRoom : (user, jk) => new Promise((resolve, reject) => {
    if (jk == 'L') {
      let sql = "SELECT * FROM obrolan_ica WHERE laki='"+user+"'";
      db.query(sql, function(err, result) {
        if (err) {
          return reject(err);
        }
        resolve(result[0])
      })
    }else if (jk == 'P') {
      let sql = "SELECT * FROM obrolan_ica WHERE perempuan='"+user+"'";
      db.query(sql, function(err, result) {
        if (err) {
          return reject(err);
        }
        resolve(result[0])
      })
    }
  }),
  obrolan : (user) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM obrolan_ica WHERE laki='"+user+"' or perempuan='"+user+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result[0]);
    });
  }),
  cekStatus_null : (tb) => new Promise((resolve, reject) => {
    let sql = `SELECT * FROM obrolan_ica WHERE ${tb}='' ORDER BY rand() LIMIT 1`;
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result[0]);
    })
  }),
  insert_laki : (user) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO obrolan_ica (laki) VALUES ('"+user+"')";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result[0]);
    });
  }),
  insert_perempuan : (user) => new Promise((resolve, reject) => {
    let sql = "INSERT INTO obrolan_ica (perempuan) VALUES ('"+user+"')";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result[0]);
    });
  }),
  update_laki : (user, target, time) => new Promise((resolve, reject) => {
    let sql = "UPDATE obrolan_ica SET laki='"+user+"', time='"+time+"' WHERE perempuan='"+target+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result[0]);
    });
  }),
  update_perempuan : (user, target, time) => new Promise((resolve, reject) => {
    let sql = "UPDATE obrolan_ica SET perempuan='"+user+"', time='"+time+"' WHERE laki='"+target+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result[0]);
    });
  }),
  putus_obrolan : (user) => new Promise((resolve, reject) => {
    let sql = "DELETE FROM obrolan_ica WHERE laki='"+user+"' or perempuan='"+user+"'";
    db.query(sql, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result)
    });
  }),
  obrolan_time: (user) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM obrolan_ica WHERE laki='"+user+"' or perempuan='"+user+"'";
    db.query(sql, function(err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result[0].time)
    })
  })
}