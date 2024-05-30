const { Router } = require('express');


const router = Router();

router.get('/', (req, res) => {
  res.json("This is the user router");
});

module.exports = router;