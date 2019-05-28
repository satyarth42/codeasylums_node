const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.send("User's Home").status(200);
});

router.post('/',function(req,res){
    console.log(req.body);
    res.json(req.body).status(200);
});

module.exports = router;