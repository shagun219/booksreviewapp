var express = require('express');
var router = express.Router();
var bookStore = require('../data_store/bookStore');
var reviewStore = require('../data_store/reviewStore');
var ratingStore = require('../data_store/ratingsStore');

function filterUsingQueryParam(req, res) {
    let title = req.query.title;
    if(title && title !== "") {
        console.log("Fetching book with title " + title);
        res.json(bookStore.getBooksByCustomFilter("title", title));
        return;
    }
    
    let author = req.query.author;
    if(author && author !== "") {
        console.log("Fetching book with author " + author);
        res.json(bookStore.getBooksByCustomFilter("author", author));
        return;
    }

    let genre = req.query.genre;
    if(genre && genre !== "") {
        console.log("Fetching book with genre " + genre);
        res.json(bookStore.getBooksByCustomFilter("genre", genre));
        return;
    }

    res.status(404).json({
        "error" : "Unsupported query param"
    });
};

router.get('/', function(req, res, next) {
    if(req.query) {
        filterUsingQueryParam(req, res);
        return;
    }
    console.log("Fetching all books");
    res.json(bookStore.getBooks());
});
  

router.get('/:id', function(req, res, next) {
    console.log("Fetching book with id " + req.params.id);
    res.json(bookStore.getBookById(req.params.id));
});

router.get('/:id/reviews', function(req, res, next) {
    console.log("Fetching reviews for book " + req.params.id);
    let bookById = bookStore.getBookById(req.params.id);
    let bookByName = bookStore.getBooksByCustomFilter("title", req.params.id);
    if(!bookById && !bookByName) {
        console.log("Book not found");
        res.status(404)
                .json({"error": "Book not found"})
        return;
    }
    if(bookById) {
        console.log("book matched by id", JSON.stringify(bookById));
        res.json(reviewStore.getAllReviewsForABook(req.params.id));
        return;
    }
    if(bookByName) {
        console.log("book matched by name ", JSON.stringify(bookByName));
        res.json(reviewStore.getAllReviewsForABook(bookByName.id));
        return;
    }
    console.log("something went wrong")
});

router.get('/:id/rating', function(req, res, next) {
    console.log("Fetching rating for book " + req.params.id);
    let bookById = bookStore.getBookById(req.params.id);
    let bookByName = bookStore.getBooksByCustomFilter("title", req.params.id);
    if(!bookById && !bookByName) {
        res.status(404)
                .json({"error": "Book not found"})
    }
    if(bookById) {
        res.json(ratingStore.getRatingForABook(req.params.id));
    }
    if(bookByName) {
        res.json(ratingStore.getRatingForABook(bookByName.id));
    }
});

module.exports = router;