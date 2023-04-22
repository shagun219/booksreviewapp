var bookStore = require('../data_store/bookStore');
var userStore = require('../data_store/userStore');

function buildReviewStore() {
    let reviews = [
        {bookid: "B2",
         userid: "U2",
         reviews: ["anyone thinking of starup should read this!", "inspirational"]
        },
        {bookid: "H1",
         userid: "U1",
         reviews: ["Exceptional"]
        },
        {bookid: "F1",
         userid: "U1",
         reviews: ["Most sarcastic drama!"]
        },
        {bookid: "M1",
         userid: "U3",
         reviews: ["Want to read this one!"]
        }
        ];
    
    return {
        getAllReviewsForABook: bookId => reviews.filter(r => r.bookid === bookId)
                .map(fr => ({user: userStore.getUserById(fr.userid).name,
                        posts: fr.reviews })),
        getAllReviewsOfAUser: userId => reviews.filter(r => r.userid === userId)
                .map(fr => ({bookTitle : bookStore.getBookById(fr.bookid).title,
                    posts: fr.reviews }))
    }
}

const reviewStore = buildReviewStore();
module.exports = reviewStore;