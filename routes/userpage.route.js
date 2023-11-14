const express = require('express');
const router = express.Router();

const userPageController = require('../controllers/UserPageController');

router.get('/', userPageController.index);
module.exports = router;