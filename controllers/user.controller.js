const User = require('../models/user.model');
var bcrypt = require('bcrypt-nodejs');
const session = require('express-session');

exports.create = (req, res) =>{
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    const user = new User({
        user_id: req.body.user_id,
        password: req.body.password,
        nickname: req.body.nickname,
        sex: req.body.sex,
        phonenum: req.body.phonenum,
        provider: "email"
    });

    User.create(user, (err, data) => {
        if(err){
            if(err.kind === "member"){
                res.status(404).send({
                    message: "you are already member"
                });
            }
        }

        else{
            res.status(300).send({
                message: "register success"
            });
        }
        // else res.redirect('/join/survey');
    });
};

exports.findAll = (req, res) =>{
    User.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "user found"
          });
        else res.send(data);
      });
};

exports.findById = (req, res) =>{
    User.findById(req.params.userId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found user with id ${req.params.userId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving User with id " + req.params.userId
            });
          }
        } else res.send(data);
      });
};

exports.update = (req, res) =>{
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      User.updateById(
        req.params.userId,
        new User(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found user with id ${req.params.userId}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating user with id " + req.params.userId
              });
            }
          } else res.send(data);
        }
      );
};

exports.delete = (req, res) =>{
    User.remove(req.params.userId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found User with id ${req.params.userId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete User with id " + req.params.userId
            });
          }
        } else res.send({ message: `User was deleted successfully!` });
      });
};

exports.deleteAll = (req, res) =>{
    User.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Userrs."
          });
        else res.send({ message: `All Userss were deleted successfully!` });
      });
};