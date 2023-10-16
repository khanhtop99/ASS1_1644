var express = require('express');
var router = express.Router();

const CarsModel = require('../models/CarModel');


router.get('/add', function (req, res, next) {
    res.render('car/add');
});

router.post('/add', async (req, res) => {
    var car = req.body;
    await CarsModel.create(car);
    res.redirect('/cars/list');
})



router.get('/', async (req, res) => {
    let data = await CarsModel.find();
    res.render('car/index', { data: data });

})
router.get('/list', async function (req, res, next) {
    let data = await CarsModel.find();
    res.render('car/list', { data: data });
});

router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await CarsModel.findByIdAndDelete(id);
    res.redirect('/cars/list');
})


router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var car = await CarsModel.findById(id);
    res.render('car/edit', { car: car })
})

router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var car = req.body;
    await CarsModel.findByIdAndUpdate(id, car);
    res.redirect('/cars/list');
})

module.exports = router;
