var express = require('express');
var router = express.Router();
var userStore = require('../data_store/userStore');
var reviewStore = require('../data_store/reviewStore');
var ratingStore = require('../data_store/ratingsStore');

router.get('/', function(req, res, next) {
  if(!req.query || !req.query.email) {
      res.status(401)
         .json({"error": "Access to users not permitted"}) 
  }
  let user = userStore.getUserByEmail(req.query.email);
  if(!user) {
    res.status(404)
    .json({"error": "Resource not found"}) 
  }
  else {
    res.json(user)
  }
});

router.get('/:id', function(req, res, next) {
  res.json(userStore.getUserById(req.params.id))
});

router.get('/:id/reviews', function(req, res, next) {
  res.json(reviewStore.getAllReviewsOfAUser(req.params.id))
});

router.get('/:id/ratings', function(req, res, next) {
  res.json(ratingStore.getAllRatingsOfAUser(req.params.id))
});

module.exports = router;