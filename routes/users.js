var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({ message: "hello"});
});

module.exports = router;
