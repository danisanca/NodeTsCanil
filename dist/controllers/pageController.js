"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.dogs = exports.cats = exports.home = void 0;
const createMenuObject_1 = require("../helpers/createMenuObject");
const pet_1 = require("../models/pet");
exports.home = ((req, res) => {
    let list = pet_1.Pet.getAll();
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('all'),
        banner: {
            title: 'Todos os Animais',
            background: 'allanimals.jpg'
        },
        list
    });
});
exports.cats = ((req, res) => {
    let list = pet_1.Pet.getFromType('cat');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
});
exports.dogs = ((req, res) => {
    let list = pet_1.Pet.getFromType('dog');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
});
exports.fishes = ((req, res) => {
    let list = pet_1.Pet.getFromType('fish');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
});
