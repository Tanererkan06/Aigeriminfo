module.exports = app => {
  const dbConfig = require("../config/db.config.js");
  const oracledb = require('oracledb');
  const fs = require('fs');
  oracledb.fetchAsString = [oracledb.CLOB];



  /* const dbConfig = {
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    connectString: dbConfig.ConnectString,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }; */

  /*
  HASTA RANDEVULARI NG_HIS_PASRANDEVU
  */


  //SELECT id,Tarih,ru_baslik,ru_haber,ru_resim,kz_baslik,kz_haber,kz_resim FROM ng_haberler
  async function haberler(req, res) {
    let users = new Array();

    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];

        return connection.execute("SELECT id,Tarih,ru_baslik,ru_haber,ru_resim,kz_baslik,kz_haber,kz_resim FROM ng_haberler");

      })
      .then((result) => {
        result.rows.forEach((elemento) => {
          let user = new Object();

          user.id = elemento[0];
          user.tarih = elemento[1];
          user.rubaslik = elemento[2];
          user.ruhaber = elemento[3];
          const buff = Buffer.from(elemento[4], 'utf-8');
          const base64 = buff.toString('base64');
          user.ruresim = base64;
          user.kzbaslik = elemento[5];
          user.kzhaber = elemento[6];
          const kzres = Buffer.from(elemento[4], 'utf-8');
          const kzresbase64 = kzres.toString('base64');
          user.kzresim = kzresbase64;
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
  //Select DBKOD,DBAD from NG_HIS_LNKDBS
  //HastaneSecimi
  async function HastaneSecimi(req, res) {
    let users = new Array();

    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
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
  //PoliklinikSecimi
  //select profs,isim,kiosk from ng_his_kabuzman where kiosk='X' order by isim
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
  //select KABINET,ISIM,SINIFI from ng_his_glzr WHERE PROFS='UZ259' and SINIFI='P'
  //UzmanlikSecimi
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

  //DoktorSecimi
  //select doktor_id,soy||' '||ad||' '||baba vr,profs from ng_his_vrtkmad where PROFS='UZ260' and servis_id ='13001' and doktor_id is not null GROUP BY soy,ad,baba,profs,doktor_id  order by soy,ad
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
  //UygunTarihSecimi
  //select * from  ng_his_vractakvim
  //

  //tamamı 
  /*
  select ng_his_vractakvim.datar, 'прием' d  ,ng_his_vractakvim.bassaat,ng_his_vractakvim.bitsaat,ng_his_vractakvim.servis_id ,ng_his_glzr.isim,NG_HIS_PRSRSMM.RESIM,NG_HIS_PRSRSMM.VRAC_ID,NG_HIS_PRSRSMM.PERBILGI,
NG_HIS_RPSL.IMYA , NG_HIS_RPSL.FAMILYA ,  NG_HIS_RPSL.OCEST
from  NG_HIS_PRSRSMM ,NG_HIS_RPSL,ng_his_glzr,ng_his_vractakvim
WHERE  NG_HIS_PRSRSMM.VRAC_ID=NG_HIS_RPSL.KULLAN AND  NG_HIS_RPSL.PKULL  IS NULL
and
ng_his_vractakvim.doktor_id='DR534'  and ng_his_vractakvim.servis_id=ng_his_glzr.kabinet and ng_his_vractakvim.datar>=to_char(sysdate,'dd/mm/yyyy') and ng_his_vractakvim.servis_id in (select kabinet from ng_his_glzr where sinifi <>'S')
  
  */
  async function UygunTarihSecimi(req, res) {
    let users = new Array();

    connection = await oracledb.getConnection({
      user: dbConfig.USER,
      password: dbConfig.PASSWORD,
      connectString: dbConfig.ConnectString
    })
      .then((c) => {
        connection = c;
        oracledb.fetchAsBuffer = [oracledb.BLOB];
        return connection.execute("select ng_his_vractakvim.datar, 'прием' d  ,ng_his_vractakvim.bassaat,ng_his_vractakvim.bitsaat,ng_his_vractakvim.servis_id ,ng_his_glzr.isim from ng_his_glzr,ng_his_vractakvim  where ng_his_vractakvim.doktor_id=:doktor_id  and ng_his_vractakvim.servis_id=ng_his_glzr.kabinet and ng_his_vractakvim.datar>=to_char(sysdate,'dd/mm/yyyy') and ng_his_vractakvim.servis_id in (select kabinet from ng_his_glzr where sinifi <>'S')", {

          doktor_id: req.body.doktor_id
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
  //UygunSaatSecimi
  //select * from  ng_his_vractakvim
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
          and ROWNUM <= 15 ORDER BY NG_HIS_PRSRSMM.VRAC_ID ASC  `);

      })
      .then((result) => {




        result.rows.forEach((elemento) => {

          let user = new Object();

          user.vracid = elemento[0];
          // user.resim = elemento[1];
          const buff = Buffer.from(elemento[1], 'utf-8');
          const base64 = buff.toString('base64');

          data = base64.replace(/^data:image\/png;base64,/, '');

          fs.writeFile(path.resolve(__dirname, '../public/tmp/' + user.vracid + '.png'), base64, 'base64', function (err) {
            if (err) throw err;
          });
         //app.use('/tmp', express.static('tmp'));
          user.resim = __dirname+'/public/tmp/'+user.vracid+'.png';
          user.perbilgi = elemento[2];
          user.imya = elemento[8];
          user.familiya = elemento[9];
          user.ocest = elemento[21];
          user.zvanye = elemento[66];




          // user.familiyass = //elemento[5];
          /*  
          
         ; */

          users.push(user);
          console.log(user)
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



  app.get('/haberler', function (req, res) {
    haberler(req, res);
  })

  app.get('/HastaneSecimi', function (req, res) {
    HastaneSecimi(req, res);
  })

  //PoliklinikSecimi
  /*
  ’P’  POLIKLINIK (HEM POLIKNIK VE DOKTOR SECILECEK)
       =’R’  RADYOLOJI  (HEM POLIKNIK VE DOKTOR SECILECEK)
       =’L’   LABORATUVAR (SADECE POLIKNIK SECILECEK DOKTORA YOK)
   
  */
  app.get('/PoliklinikSecimi', function (req, res) {
    PoliklinikSecimi(req, res);
  })

  app.get('/UzmanlikSecimi', function (req, res) {
    UzmanlikSecimi(req, res);
  })

  app.get('/DoktorSecimi', function (req, res) {
    DoktorSecimi(req, res);
  })


  //UZ024
  app.get('/UygunTarihSecimi', function (req, res) {
    UygunTarihSecimi(req, res);
  })

  app.get('/UygunTarihSecimi', function (req, res) {
    UygunSaatSecimi(req, res);
  })

  app.get('/DoktorBilgi', function (req, res) {
    DoktorBilgi(req, res);
  })


};