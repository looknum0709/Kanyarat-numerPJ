const express = require('express');
const router = express.Router();
const math = require('mathjs');

router.get('/fixapi', (req, res) => {
    res.send('testget');
});

router.post('/fixapi', (req, res) => {
    console.log('Hello')
    var x = parseFloat(req.body.x);
    var check = parseFloat(0.000000);
    const code = math.compile(req.body.equation);
    var result1 = [];
    var i = 1;
    //console.log("xi" xi);
    do {
        let scope = { x: x };
        var xn = code.evaluate(scope)
        check = math.abs((xn - x) / xn) * 100
        x = xn;
        result1.push({
            'iteration': i,
            'x': x,
            'Error': check
        });
        i++;
    } while (check > 0.000001 && i < 100);

    res.json({
        result: result1
    })

});

module.exports = router;