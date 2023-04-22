var bookStore = require('../data_store/bookStore');

function buildRatingsStore() {
    let ratings = [
        {bookid: "H1",
         userid: "U1",
         stars: 5
        },
        {bookid: "H1",
         userid: "U2",
         stars: 4
        },
        {bookid: "F1",
         userid: "U3",
         stars: 5
        },
        {bookid: "F10",
         userid: "U2",
         stars: 2
        },
        {bookid: "F16",
         userid: "U4",
         stars: 3
        },
        {bookid: "SH1",
         userid: "U1",
         stars: 4
        },
        {bookid: "B1",
         userid: "U1",
         stars: 3
        },
        {bookid: "B2",
         userid: "U2",
         stars: 5
        }
        ];
    
        return {
        getRatingForABook: bookId => {
            let sum = 0;
            let numOfRatings = 0;
            for(const rating of ratings.filter(r => r.bookid === bookId)) {
                sum += rating.stars;
                numOfRatings++;
            }
            if(numOfRatings === 0) {
                return "Book not rated";
            }
            return {
                uniqueRatings : numOfRatings,
                overallRating: sum/numOfRatings            
            }
        },
        getAllRatingsOfAUser: userId => ratings.filter(r => r.userid === userId)
                .map(r => ({bookTitle : bookStore.getBookById(r.bookid).title,
                    rating: r.stars})),
    }
}

const ratingsStore = buildRatingsStore();
module.exports = ratingsStore;