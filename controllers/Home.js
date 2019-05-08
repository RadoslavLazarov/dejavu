const express = require('express');
const { getMainCategories, getPageMeta } = require('../models/db');

const router = express.Router();

router.get('/', async (req, res) => {
  const pageMeta = await getPageMeta('home');
  const mainCategories = await getMainCategories();

  res.render('home', {
    pageMeta,
    mainCategories,
  });
});

module.exports = router;
