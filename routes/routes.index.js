const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers.posts');

router.get('', controllers.getAll);
router.get('/:id', controllers.getPostById);
router.post('/:id/addComment', controllers.addCommentToPost);
module.exports = router;