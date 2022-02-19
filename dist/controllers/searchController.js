"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const pet_1 = require("../models/pet");
const createMenuObject_1 = require("../helpers/createMenuObject");
exports.search = ((req, res) => {
    let query = req.query.q;
    let list = pet_1.Pet.getFromName(query);
    if (!query) {
        res.redirect('/');
        return;
    }
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)(''),
        list,
        query
    });
});
