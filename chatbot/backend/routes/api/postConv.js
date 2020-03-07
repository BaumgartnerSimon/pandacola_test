// postConv

var express = require('express');
var router = express.Router();
const Conversation = require('../../models/Conversation');

router.post('/postConv', async (req, res) => {
    console.log(req.body);
    const body = {
        conversation: req.body,
    };
    const newConv = new Conversation(body);
    newConv.save()
        .then(item => {
            console.log(item);
            res.send({
                code: 200,
                success: true,
                message : "Conversation saved successfully"
            });
        })
        .catch(err => {
            console.log(err);
            res.send({
                code: 400,
                success: false,
                message: 'Bad request'
            });
        });
});

module.exports = router;
