const data = require("../models/user.model");
const db = require('../db');
const bodyparser = require('body-parser');

exports.renderjoinform = (req, res) => {
    res.render("join/joinform", {layout: './join/joinformlayout'});
};

exports.rendersurvey = (req, res) => {
    res.render("join/survey", {layout:'./join/surveylayout'});
};

exports.rendersurveysecond = (req, res) => {
    res.render("join/surveysecond", {layout:'./join/surveylayout'});
}

exports.rendersurveythird = (req, res) => {
    res.render("join/surveythird", {layout:'./join/surveylayout'});
}

exports.renderjoinsweatee = (req, res) => {
    res.render("join/joinsweatee", {layout: './join/joinformlayout'});
};

exports.renderjoinsweator = (req, res) => {
    res.render("join/joinsweator", {layout: './join/joinformlayout'});
};

exports.rendersurveysweator = (req, res) =>{
    res.render("join/surveysweator", {layout: './join/surveylayout'});
}

exports.rendersweatorprofile = (req, res) =>{
    res.render("join/sweatorprofile_add", {layout: './join/sweatorprofile_layout.ejs'});
}

exports.renderaddclassplan = (req, res) => {
    res.render("join/sweatorclassplan", {layout: './join/sweatorclassplan_layout.ejs'});
}

exports.rendercareerupload = (req, res) => {
    res.render("join/careerupload", {layout: './join/sweatorprofile_layout.ejs'});
}

exports.renderwelcome = (req, res) => {
    res.render("join/welcomesweator", {layout: './join/sweatorprofile_layout.ejs'});
}