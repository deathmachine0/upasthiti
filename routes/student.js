let express = require('express');
let router = express.Router();
let db = require('../model/profile/operations');
/* GET home page. */
router.get('/login', function(req, res, next) {
    let data = req.body.data;
    let obj = {
        username : data.username,
        password : data.password,
        class : data.class,
        batch : data.batch
        };
    db.student_signin(obj).then(obj=>{
        "use strict";
        res.send(JSON.stringify(obj));
    },obj=>{
        "use strict";
        res.send(JSON.stringify(obj));
    }).catch(err=>{console.log(err)});

});

module.exports = router;
