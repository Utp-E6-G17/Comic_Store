const express = require("express");

const comicController = require('../controllers/comicController');

const router = express.Router();



router.get('/comics', comicController.getAllComics);
router.get('/users',comicController.getAllusers);
module.exports = router;