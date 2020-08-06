const sql = require('../db');
const bcrypt = require('bcrypt-nodejs');
const express = require('express');

const User = function(customer){
    this.user_id = customer.user_id;
    this.password = bcrypt.hashSync(customer.password, bcrypt.genSaltSync(10));
    this.nickname = customer.nickname;
    this.sex = customer.sex;
    this.phonenum = customer.phonenum;
    this.provider = "email";
};

User.create = (newUser, result) => {
    
    sql.query("select * from user_db where user_id = ?", newUser.user_id, (err, res)=>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(!res.length)
        {
            console.log("hello");
            sql.query("insert into user_db set ?", newUser, (err, res)=>{
                if(err){
                    console.log("error: ", err);
                    result(err, null);
                    return;
                }

                console.log("created customer: ", {user_id: res.insertId, ...newUser});
                result(null, {user_id: res.insertId, ...newUser});
            });
        }

        if(res.length)
        {
            console.log("you are already member");
            result({kind: "member"}, null);
        }
    });
}


    User.findById = (userId, result) => {
        sql.query(`SELECT * FROM user_db WHERE user_id = '${userId}'`, (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(err, null);
              return;
            }
        
            if (res.length) {
              console.log("found customer: ", res[0]);
              result(null, res[0]);
              return;
            }
        
            // not found Customer with the id
            result({ kind: "not_found" }, null);
          });
    };

User.getAll = result => {
    sql.query("select * from user_db", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("users: ", res);
        result(null, res);
    })
};

User.updateById = (id, user, result) => {
    sql.query(
        "update user_db set eamil =?, name=?, active=?, where id=?",
        [user.email, user.name, user.active, id],
        (err, res) => {
            if(err){
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if(res.affectedRows ==0){
                result({kind: "not_found"}, null);
                return;
            }

            console.log("updated user: ", {id: id, ...user});
            result(null, {id: id, ...user});
        }
    );
};

User.remove = (id, result) => {
    sql.query("delete form user_db where id =?", id, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
          }
      
          console.log("deleted user with id: ", id);
          result(null, res);
    });
}

  
module.exports = User;