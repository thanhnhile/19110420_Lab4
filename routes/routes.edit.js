const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers.posts');

router.get('/:id', controllers.editPost);
router.post('/:id', controllers.editPost);

module.exports = router;