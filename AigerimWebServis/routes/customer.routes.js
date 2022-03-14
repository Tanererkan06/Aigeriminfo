module.exports = app => {
  const dbConfig = require("../config/db.config.js");
  const oracledb = require('oracledb');


  async function haberler(req, res) {
    try {
      connection = await oracledb.getConnection({
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        connectString: dbConfig.ConnectString
      });

      let query = 'SELECT id,Tarih,ru_baslik,ru_haber,ru_resim,kz_baslik,kz_haber,kz_resim FROM ng_haberler';
      result = await connection.execute(query);

    } catch (err) {
      return res.send(err.message);
    } finally {
      if (connection) {
        try {
          await connection.close();
          console.log('close connection success');
        } catch (err) {
          console.error(err.message);
        }
      }
      if (result.rows.length == 0) {
        //query return zero employees
        return res.send('query send no rows');
      } else {
        //send all employees
        return res.send(result.rows);
      }

    }
  }

  async function HastaneSecimi(req, res) {
    try {
      connection = await oracledb.getConnection({
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        connectString: dbConfig.ConnectString
      });

      let query = 'Select DBKOD,DBAD from NG_HIS_LNKDBS';
      result = await connection.execute(query);

    } catch (err) {
      return res.send(err.message);
    } finally {
      if (connection) {
        try {
          await connection.close();
          console.log('close connection success');
        } catch (err) {
          console.error(err.message);
        }
      }
      if (result.rows.length == 0) {
        //query return zero employees
        return res.send('query send no rows');
      } else {
        //send all employees
        return res.send(result.rows);
      }

    }
  }

  async function PoliklinikSecimi(req, res) {
    try {
      connection = await oracledb.getConnection({
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        connectString: dbConfig.ConnectString
      });

      let query = "select profs,isim,kiosk from ng_his_kabuzman where kiosk='X' order by isim";
      result = await connection.execute(query);

    } catch (err) {
      return res.send(err.message);
    } finally {
      if (connection) {
        try {
          // await connection.close();
          //  console.log('close connection success');
        } catch (err) {
          console.error(err.message);
        }
      }
      if (result.rows.length == 0) {
        return res.send('query send no rows');
      } else {
        return res.send(result.rows);
      }

    }
  }
  // 
  // test - uzmanlik id 
  //69042
  //Взрослый Офтальмология
  async function UzmanlikSecimi(req, res) {
    try {
      connection = await oracledb.getConnection({
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        connectString: dbConfig.ConnectString
      });

      let query = "select KABINET,ISIM,SINIFI from ng_his_glzr WHERE PROFS='UZ259' and SINIFI='P' ";
      result = await connection.execute(query);

    } catch (err) {
      return res.send(err.message);
    } finally {
      if (connection) {
        try {
          // await connection.close();
          //  console.log('close connection success');
        } catch (err) {
          console.error(err.message);
        }
      }
      if (result.rows.length == 0) {
        return res.send('query send no rows');
      } else {
        return res.send(result.rows);
      }

    }
  }
  /*
    [
          "DR534",
          "Закелова Наталья Юрьевна",
          "UZ260"
      ]
  */
  async function DoktorSecimi(req, res) {
    try {
      connection = await oracledb.getConnection({
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        connectString: dbConfig.ConnectString
      });

      let query = "select doktor_id,soy||' '||ad||' '||baba vr,profs from ng_his_vrtkmad where PROFS='UZ260' and servis_id ='13001' and doktor_id is not null GROUP BY soy,ad,baba,profs,doktor_id  order by soy,ad";
      result = await connection.execute(query);

    } catch (err) {
      return res.send(err.message);
    } finally {
      if (connection) {
        try {
          // await connection.close();
          //  console.log('close connection success');
        } catch (err) {
          console.error(err.message);
        }
      }
      if (result.rows.length == 0) {
        return res.send('query send no rows');
      } else {
        return res.send(result.rows);
      }

    }
  }
  //UygunTarihSecimi
  async function UygunTarihSecimi(req, res) {
    try {
      connection = await oracledb.getConnection({
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        connectString: dbConfig.ConnectString
      });
      //
      let query = "select * from  ng_his_vractakvim ";
      result = await connection.execute(query);

    } catch (err) {
      return res.send(err.message);
    } finally {
      if (connection) {
        try {
          // await connection.close();
          //  console.log('close connection success');
        } catch (err) {
          console.error(err.message);
        }
      }
      if (result.rows.length == 0) {
        return res.send('query send no rows');
      } else {
        return res.send(result.rows);
      }

    }
  }
  async function UygunSaatSecimi(id, req, res) {
    try {
      connection = await oracledb.getConnection({
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        connectString: dbConfig.ConnectString
      });
      //
      let query = "select * from  ng_his_vractakvim ";
      result = await connection.execute(query);

    } catch (err) {
      return res.send(err.message);
    } finally {
      if (connection) {
        try {
          // await connection.close();
          //  console.log('close connection success');
        } catch (err) {
          console.error(err.message);
        }
      }
      if (result.rows.length == 0) {
        return res.send('query send no rows');
      } else {
        return res.send(result.rows);
      }

    }
  }
 
  async function DoktorBilgi(req, res) {


    let connection;
    let user = new Object();
    oracledb.getConnection({
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        connectString: dbConfig.ConnectString
      })


    .then((c) => {
        connection = c;
        return connection.execute("Select NG_HIS_PRSRSMM.RESIM,NG_HIS_PRSRSMM.VRAC_ID,NG_HIS_PRSRSMM.PERBILGI,NG_HIS_RPSL.IMYA , NG_HIS_RPSL.FAMILYA ,  NG_HIS_RPSL.OCEST from  NG_HIS_PRSRSMM INNER JOIN NG_HIS_RPSL ON NG_HIS_PRSRSMM.VRAC_ID=NG_HIS_RPSL.KULLAN ");
    })
    .then((result) => {
        result.rows.forEach((elemento) => {
            user.resim = elemento[0];
            user.vrcid= elemento[1];
            user.perbilgi= elemento[2];
            user.imya= elemento[3];
            user.familya= elemento[4];
            user.ocest= elemento[5];
        });
        res.status(200).json(user);
    }).then(()=>{
        if(connection){
            connection.close();
        }
    }).catch((error)=>{
        res.status(500).json({ message: error.message || "Some error occurred!" });
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