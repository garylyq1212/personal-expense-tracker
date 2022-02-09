const express = require('express');

const router = express.Router();

router.post('/add', (req, res) => {
    // console.log(req.body);

    res.json({ success: true, message: req.body.name });
});

module.exports = router;