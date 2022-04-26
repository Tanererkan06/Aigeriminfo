const { stringify } = require("querystring");

module.exports = app => {
  const dbConfig = require("../config/db.config.js");
  const oracledb = require('oracledb');

  oracledb.fetchAsString = [oracledb.CLOB];
  //my.public.ip:1521/service-name  uzaktan baglanmak ister



  // SELECT ISIM,ALT_RAN,UST_RAN FROM NG_HIS_GLZR
  //select * from ng_his_ransaat t
  //SELECT * FROM ng_his_kabuzman

  /*
  select NG_HIS_PASRANDEVU.RANDEVU_ID as RANDEVU_ID,
      NG_HIS_PASRANDEVU.DATAR as DATAR,
      NG_HIS_PASRANDEVU.RANDEVU_SAATI as RANDEVU_SAATI,
      ng_his_glzr.isim kab,
      ng_his_rpsl.familya||' '||ng_his_rpsl.imya  VR 
  from NG_HIS_PASRANDEVU,ng_his_rpsl,ng_his_glzr 
  where hasta_id=:p1_var and iptal is null and ran_ok is null and
  ng_his_rpsl.kullan(+)=NG_HIS_PASRANDEVU.doktor_id and 
  ng_his_glzr.kabinet=NG_HIS_PASRANDEVU.kabinet_id AND 
  NG_HIS_PASRANDEVU.DATAR>to_char(sysdate-5,'dd/mm/yyyy')
  order by NG_HIS_PASRANDEVU.DATAR,NG_HIS_PASRANDEVU.RANDEVU_SAATI
  
  */


  async function tetkikfiyat(req, res) {
    let users = new Array();
    var fs = require('fs');
    const express = require('express');
    const app = express();
    app.use(express.static('public'));
    var path = require('path');
    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        return connection.execute("select t.uslugu,t.isim,t.sena from ng_his_prdkt t");
      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();

          user.hizmetid = elemento[0];
          user.hizmet = elemento[1];
          user.fiyat = elemento[2] + " Tenge";

          users.push(user);


        });
        res.status(200).json(users);

      }).then(() => {
        if (connection) {
          connection.close();
        }
      }).catch((error) => {
        res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };

  async function degerler(req, res) {
    let users = new Array();
    let deger = req.body.deger;
    var fs = require('fs');
    const express = require('express');
    const app = express();
    app.use(express.static('public'));
    var path = require('path');

    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        return connection.execute("select "+deger+" from ng_his_ransaat");
      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();

          user.deger = elemento[0];
          

          users.push(user);


        });
        res.status(200).json(users);





      }).then(() => {
        if (connection) {
          connection.close();
        }
      }).catch((error) => {
        res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };

  async function nitelik(req, res) {
    let users = new Array();
    var fs = require('fs');
    const express = require('express');
    const app = express();
    app.use(express.static('public'));
    var path = require('path');

    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        return connection.execute("SELECT * FROM ng_nitelik");
      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();

          user.uzman = elemento[0];
          user.hastalar = elemento[1];
          user.klinik = elemento[2];
          user.uzmanlik = elemento[2];

          users.push(user);


        });
        res.status(200).json(users);





      }).then(() => {
        if (connection) {
          connection.close();
        }
      }).catch((error) => {
        res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };
  


  


  async function haberler(req, res) {
    let users = new Array();
    var fs = require('fs');
    const express = require('express');
    const app = express();
    app.use(express.static('public'));
    var path = require('path');
    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        return connection.execute("SELECT * FROM ng_haberler");
      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();

          user.id = elemento[0];
          user.tarih = elemento[1];
          user.rubaslik = elemento[2];
          user.ruhaber = elemento[3];
          //const buff = Buffer.from(elemento[4], 'utf-8');
          // const base64 = buff.toString('base64');
          user.resimru = '/tmp/haber/' + "ru" + user.id + '.png';
          //  user.ruresim = base64;
          user.kzbaslik = elemento[5];
          user.kzhaber = elemento[6];
          //const kzres = Buffer.from(elemento[7], 'utf-8');
          // const kzresbase64 = kzres.toString('base64');
          // user.kzresim = kzresbase64;
          user.resim = '/tmp/haber/' + "kz" + user.id + '.png';

          user.tur = elemento[8];
          user.aktif = elemento[9];
          users.push(user);


        });
        res.status(200).json(users);

        result.rows.forEach((elemento) => {
          let user = new Object();
          user.id = elemento[0];

          const buffs = Buffer.from(elemento[4], 'utf-8');
          const base64s = buffs.toString('base64');
          data = base64s.replace(/^data:image\/png;base64,/, '');

          fs.writeFile(path.resolve(__dirname, '../public/tmp/haber/' + "ru" + user.id + '.png'), data, 'base64', function (err) {
            if (err) throw err;
          });


          const buffskz = Buffer.from(elemento[7], 'utf-8');
          const base64kz = buffskz.toString('base64');
          datakz = base64kz.replace(/^data:image\/png;base64,/, '');

          fs.writeFile(path.resolve(__dirname, '../public/tmp/haber/' + "kz" + user.id + '.png'), datakz, 'base64', function (err) {
            if (err) throw err;
          });


        });



      }).then(() => {
        if (connection) {
          connection.close();
        }
      }).catch((error) => {
        res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };
  async function Slider(req, res) {
    let users = new Array();
    var fs = require('fs');
    const express = require('express');
    const app = express();
    app.use(express.static('public'));
    var path = require('path');
    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        return connection.execute("SELECT * FROM ng_slider");
      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();

          user.title = elemento[0];
          user.title1 = elemento[1];

          //const buff = Buffer.from(elemento[4], 'utf-8');
          // const base64 = buff.toString('base64');
          user.image = '/tmp/slider/' + "ru" + user.title + '.png';
          //  user.ruresim = base64;
          user.kzbaslik = elemento[5];
          user.kzhaber = elemento[6];
          //const kzres = Buffer.from(elemento[7], 'utf-8');
          // const kzresbase64 = kzres.toString('base64');
          // user.kzresim = kzresbase64;
          user.image1 = '/tmp/slider/' + "kz" + user.title1 + '.png';

          user.tur = elemento[8];
          user.aktif = elemento[9];
          users.push(user);


        });
        res.status(200).json(users);

        result.rows.forEach((elemento) => {
          let user = new Object();
          user.id = elemento[1];

          const buffs = Buffer.from(elemento[2], 'utf-8');
          const base64s = buffs.toString('base64');
          data = base64s.replace(/^data:image\/png;base64,/, '');

          fs.writeFile(path.resolve(__dirname, '../public/tmp/slider/' + "ru" + user.id + '.png'), data, 'base64', function (err) {
            if (err) throw err;
          });


          const buffskz = Buffer.from(elemento[3], 'utf-8');
          const base64kz = buffskz.toString('base64');
          datakz = base64kz.replace(/^data:image\/png;base64,/, '');

          fs.writeFile(path.resolve(__dirname, '../public/tmp/slider/' + "kz" + user.id + '.png'), datakz, 'base64', function (err) {
            if (err) throw err;
          });


        });



      }).then(() => {
        if (connection) {
          connection.close();
        }
      }).catch((error) => {
        res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };
  async function HastaneSecimi(req, res) {
    let users = new Array();

    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString

      /*
      module.exports = {
        user          : "hr",
        password      : process.env.NODE_ORACLEDB_PASSWORD,
        connectString : "localhost/XEPDB1"  farklı hastanelere baglanmak için burayı değişdir
      };
      
      */

    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        return connection.execute("SELECT SIRA,DBKOD,DBAD from NG_HIS_LNKDBS");
        //NG_HIS_GLZR

      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();
          user.sira = elemento[0];
          user.dbkod = elemento[1];
          user.dbad = elemento[2];


          users.push(user);
        });

        res.status(200).json(users);
      }).then(() => {
        if (connection) {
          connection.close();
        }
      }).catch((error) => {
        //  res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };
  async function PoliklinikSecimi(req, res) {
    let users = new Array();

    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        return connection.execute("select profs,isim,aciklama from ng_his_kabuzman where kiosk='X' order by isim");

      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();

          user.profs = elemento[0];
          user.isim = elemento[1];
          user.aciklama = elemento[2];

          users.push(user);
        });

        res.status(200).json(users);
      }).then(() => {
        if (connection) {
          connection.close();
        }
      }).catch((error) => {
        //  res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };
  async function UzmanlikSecimi(req, res) {
    let users = new Array();

    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        return connection.execute("select KABINET,ISIM,SINIFI,PROFS from ng_his_glzr WHERE PROFS=:PROFS AND SINIFI=:SINIFI", {

          PROFS: req.body.PROFS,
          SINIFI: req.body.SINIFI
        });
      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();
          user.kabinet = elemento[0];
          user.isim = elemento[1];
          user.sinifi = elemento[2];
          user.profs = elemento[3];
          users.push(user);
        });

        res.status(200).json(users);
      }).then(() => {
        if (connection) {
          connection.close();
        }
      }).catch((error) => {
        res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };
  async function Kategoriler(req, res) {
    let users = new Array();
    var fs = require('fs');
    const express = require('express');
    const app = express();
    app.use(express.static('public'));
    var path = require('path');
    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        return connection.execute("select t.*, t.rowid from ng_his_kabuzman t  where kiosk='X' order by isim");
      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();

          user.id = elemento[0];
          user.isim = elemento[1];
          user.aciklama = elemento[5];
          //const buff = Buffer.from(elemento[4], 'utf-8');
          // const base64 = buff.toString('base64');
          user.resimru = '/tmp/kategoriler/' + user.id + '.png';
          //  user.ruresim = base64; 
          //const kzres = Buffer.from(elemento[7], 'utf-8');
          // const kzresbase64 = kzres.toString('base64');
          // user.kzresim = kzresbase64;

          users.push(user);
        });
        res.status(200).json(users);

        result.rows.forEach((elemento) => {
          let user = new Object();
          user.id = elemento[0];

          const buffskz = Buffer.from(elemento[18], 'utf-8');
          const base64kz = buffskz.toString('base64');
          datakz = base64kz.replace(/^data:image\/png;base64,/, '');

          fs.writeFile(path.resolve(__dirname, '../public/tmp/kategoriler/' + user.id + '.png'), datakz, 'base64', function (err) {
            if (err) throw err;
          });


        });



      }).then(() => {
        if (connection) {
          connection.close();
        }
      }).catch((error) => {
        res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };
  async function DoktorSecimi(req, res) {
    let users = new Array();

    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        return connection.execute("select doktor_id,soy||' '||ad||' '||baba vr,profs from ng_his_vrtkmad where PROFS=:PROFS and servis_id =:servis_id and doktor_id is not null GROUP BY soy,ad,baba,profs,doktor_id  order by soy,ad", {

          PROFS: req.body.PROFS,
          servis_id: req.body.servis_id
        });
      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();
          user.doktor_id = elemento[0];
          user.adisoyadi = elemento[1];
          user.profs = elemento[2];
          user.isim = elemento[3];



          users.push(user);
        });

        res.status(200).json(users);
      }).then(() => {
        if (connection) {
          connection.close();
        }
      }).catch((error) => {
        //  res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };
  async function hastarandevularitakip(req, res) {
    let users = new Array();

    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        return connection.execute("select * From NG_HIS_PASRANDEVU", {


        });
      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();
          /*  user.Tarih = elemento[0];
           user.durumu = elemento[1];
           user.baslangic = elemento[2];
           user.bitis = elemento[3];
           user.bitisaa = elemento[4]; */


          console.log(users)
          users.push(user);
        });

        res.status(200).json(users);
      }).then(() => {
        if (connection) {
          connection.close();
        }
      }).catch((error) => {
        res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };
  async function hastakayit(req, res) {
    let users = new Array();

    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        return connection.execute(" ", {


        });
      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();
          /*  user.Tarih = elemento[0];
           user.durumu = elemento[1];
           user.baslangic = elemento[2];
           user.bitis = elemento[3]; */



          users.push(user);
        });

        res.status(200).json(users);
      }).then(() => {
        if (connection) {
          connection.close();
        }
      }).catch((error) => {
        //  res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };

  
  async function aralikal(req, res) {
     let users = new Array();
    let deger;
    var fs = require('fs');
    const express = require('express');
    const app = express();
    app.use(express.static('public'));
    var path = require('path');
    PROFS = req.body.PROFS;
    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        // ////SELECT * FROM ng_his_kabuzman INNER JOIN NG_HIS_GLZR ON ng_his_kabuzman.profs=NG_HIS_GLZR.profs 
        return connection.execute("SELECT Aralik FROM ng_his_kabuzman WHERE PROFS=:PROFS",{PROFS});
      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();

          user.deger = elemento[0]; 
        deger=elemento[0]; 

          users.push(user);


        });

        console.log(deger);
 

        console.log(stringify(deger));

        

        res.status(200).json(users);
 


      }).then(() => {
        if (connection) {
          connection.close();
        }
      }).catch((error) => {
        res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };

 
  async function DoktorUygunTarihveSaatSecimi(req, res) {
    let users = new Array();

    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];

        return connection.execute("select ng_his_vractakvim.datar,'прием' d  ,ng_his_vractakvim.bassaat,ng_his_vractakvim.bitsaat,ng_his_vractakvim.servis_id ,ng_his_glzr.isim from ng_his_glzr,ng_his_vractakvim   where ng_his_vractakvim.doktor_id=:doktor_id  and   ng_his_vractakvim.servis_id=ng_his_glzr.kabinet and  ng_his_vractakvim.datar>=to_char(sysdate,'dd/mm/yyyy') and ng_his_glzr.kabinet=ng_his_vractakvim.servis_id  and ng_his_vractakvim.servis_id=:servis_id and ng_his_vractakvim.servis_id in (select kabinet from ng_his_glzr where sinifi <>'S')", {

          servis_id: req.body.servis_id,
          doktor_id: req.body.doktor_id
        });

      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();
          user.Datar = elemento[0];
          user.D = elemento[1];
          user.Basssat = elemento[2];
          user.bitissaati = elemento[3];
          user.servisid = elemento[4];
          user.servis = elemento[5];

          users.push(user);
        });

        res.status(200).json(users);
        console.log(users)
      }).then(() => {
        if (connection) {
          connection.close();
        }
      }).catch((error) => {
        //  res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };
  async function UygunSaatSecimi(req, res) {
    let users = new Array();

    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        return connection.execute("SELECT * FROM ng_his_kabuzman WHERE PROFS=:PROFS", {

          PROFS: req.body.PROFS
        });
      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();
          user.Tarih = elemento[0];
          user.durumu = elemento[1];
          user.baslangic = elemento[2];
          user.bitis = elemento[3];



          users.push(user);
        });

        res.status(200).json(users);
      }).then(() => {
        if (connection) {
          connection.close();
        }
      }).catch((error) => {
        //  res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };
  async function DoktorBilgi(req, res) {
    let users = new Array();
    var fs = require('fs');
    const express = require('express');
    const app = express();
    app.use(express.static('public'));
    var path = require('path');
    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        //  oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
        const myoffset = 0;       // do not skip any rows (start at row 1)
        const mymaxnumrows = 20;  // get 20 rows
        return connection.execute(`
        select   *  from   NG_HIS_PRSRSMM ,NG_HIS_RPSL  WHERE 
         NG_HIS_PRSRSMM.VRAC_ID=NG_HIS_RPSL.KULLAN AND  NG_HIS_RPSL.PKULL  IS NULL 
          and ROWNUM <= 15 ORDER BY NG_HIS_PRSRSMM.VRAC_ID ASC`);

      })
      .then((result) => {

        result.rows.forEach((elemento) => {

          let user = new Object();

          user.vracid = elemento[0];
          user.perbilgi = elemento[2];
          user.imya = elemento[8];
          user.familiya = elemento[9];
          user.ocest = elemento[21];
          user.zvanye = elemento[66];
          user.resim = '/tmp/' + user.vracid + '.png';

          users.push(user);

        });

        res.status(200).json(users);

        result.rows.forEach((elemento) => {
          let user = new Object();
          user.vracid = elemento[0];
          user.resim = elemento[1];
          const buffs = Buffer.from(elemento[1], 'utf-8');
          const base64s = buffs.toString('base64');
          data = base64s.replace(/^data:image\/png;base64,/, '');

          fs.writeFile(path.resolve(__dirname, '../public/tmp/' + user.vracid + '.png'), data, 'base64', function (err) {
            if (err) throw err;
          });
        });

      }).then(() => {
        if (connection) {

          connection.close();
        }
      }).catch((error) => {
        res.status(500).json({ message: error.message || "Some error occurred!" });
      });
  };
  app.get('/hastakayit', function (req, res) {
    hastakayit(req, res);
  })
  app.get('/aralikal', function (req, res) {
    aralikal(req, res);
  })
  app.get('/haberler', function (req, res) {
    haberler(req, res);
  })
  app.get('/HastaneSecimi', function (req, res) {
    HastaneSecimi(req, res);
  })
  app.get('/PoliklinikSecimi', function (req, res) {
    PoliklinikSecimi(req, res);
  })
  app.get('/UzmanlikSecimi', function (req, res) {
    UzmanlikSecimi(req, res);
  })
  app.get('/DoktorSecimi', function (req, res) {
    DoktorSecimi(req, res);
  })
  app.get('/degerler', function (req, res) {
    degerler(req, res);
  })
  app.get('/DoktorUygunTarihveSaatSecimi', function (req, res) {
    DoktorUygunTarihveSaatSecimi(req, res);
  })
  app.get('/UygunSaatSecimi', function (req, res) {
    UygunSaatSecimi(req, res);
  })
  app.get('/DoktorBilgi', function (req, res) {
    DoktorBilgi(req, res);
  })
  app.get('/Kategoriler', function (req, res) {
    Kategoriler(req, res);
  })
  app.get('/Slider', function (req, res) {
    Slider(req, res);
  })
  app.get('/nitelik', function (req, res) {
    nitelik(req, res);
  })
  app.get('/tetkikfiyat', function (req, res) {
    tetkikfiyat(req, res);
  })
  app.post('/hastakayit', function (req, res) {
    hastakayit(req, res);
  })

  app.get('/hastarandevularitakip', function (req, res) {
    hastarandevularitakip(req, res);
  })
};