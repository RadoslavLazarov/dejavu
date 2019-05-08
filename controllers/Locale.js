const express = require('express');

const router = express.Router();

router.get('/:lang', async (req, res) => {
  res.cookie('ulang', req.params.lang, { maxAge: 900000, httpOnly: true });
  res.redirect('back');
});

module.exports = router;
