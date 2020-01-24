var express = require('express');
var router = express.Router();

var Kalkulator = require('../models/KalkulatorSchema');

/* GET ALL DATA */
router.get('/cetak', async (req, res) => {
  try {
    const result = await Kalkulator.find();
    res.json(result);
  } catch (err) {
    res.status(400).send(err)
  }
});

// Action Cetak
router.post('/hitung', async (req, res) => {
  // const { hasil } = req.body;
  // console.log(req.body);

  let errors = [];

  console.log(reg.body)

  const newKalkulator = new Kalkulator({
    angka1: req.body.angka1,
    angka2: req.body.angka2,
    operator: req.body.operator,
    hasil: req.body.hasil
  });

  try {
    const result = await newKalkulator.save();
    res.json(result)
  } catch (err) {
    res.status(400).send(err);
  }

  // if (!hasil) {
  //   errors.push("Silahkan masukan data yang benar");
  //   console.log("Silahkan masukan data yang benar");
  // } else {
  //   Kalkulator.findByOne({ hasil: hasil }).then(
  //     kalkulator => {
  //       const newKalkulator = new Kalkulator({
  //         hasil
  //       })
  //       newKalkulator.save().then(kalkulator => {
  //         console.log("Selamat hitungan anda berhasil")
  //       }).catch(err => console.log(err));
  //     }
  //   )
  // }
});

module.exports = router;
