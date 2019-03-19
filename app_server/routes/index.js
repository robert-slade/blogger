var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');
var ctrlBlog = require('../controllers/blog');

/* Set up routes to pages. */
router.get('/', ctrlHome.home);
router.get('/blogsList', ctrlBlog.blogsList);
router.get('/blogAdd', ctrlBlog.blogAdd);
router.get('/blogEdit', ctrlBlog.blogEdit);
router.get('/blogDelete', ctrlBlog.blogDelete);

module.exports = router;
