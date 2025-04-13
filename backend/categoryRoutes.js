const express = require('express');
const router = express.Router();
const { getCategories, addCategory } = require('./categoryController');
const authenticateToken = require('./authMiddleware');

router.get('/', authenticateToken, getCategories);
router.post('/', authenticateToken, addCategory);

module.exports = router;