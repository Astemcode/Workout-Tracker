const router  = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/index.html'));
});

router.get('/exercise', function(req,res){
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', function(req,res){
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});


module.exports = router;





// https://shrouded-beyond-51683.herokuapp.com/ 