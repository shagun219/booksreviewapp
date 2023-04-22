function datastore () {
    let books = [
        {id: "H1",
         title: "Sapiens : A Breif History of Humankind",
         author: "Yuval Novah Harari",
         genre: "History",
         fiction: false,
        },
        {id: "B1",
         title: "Zero to One",
         author: "Peter Theil",
         genre: "Business",
         fiction: false,
        },
        {id: "B2",
         title: "Delivering Happiness",
         author: "Tony Hsieh",
         genre: "Business",
         fiction: false,
        },
        {id: "SH1",
         title: "Who Moved My Cheese",
         author: "Tony Hsieh",
         genre: "Spencer Johnson",
         fiction: false,
        },
        {id: "F1",
         title: "Pride and Prejudice",
         author: "Jane Austed",
         genre: "Romance",
         fiction: true,
        },
        {id: "F2",
         title: "Harry Potter and the Philospher's Stone",
         author: "J K Rowling",
         genre: "Adventure",
         fiction: true,
        },
        {id: "F2",
         title: "Harry Potter and the Philospher's Stone",
         author: "J K Rowling",
         genre: "Adventure",
         fiction: true,
        },
        {id: "F3",
         title: "Harry Potter - Chamber of Secrets",
         author: "J K Rowling",
         genre: "Adventure",
         fiction: true,
        },
        {id: "F4",
         title: "Harry Potter - Prisoner of Azkaban",
         author: "J K Rowling",
         genre: "Adventure",
         fiction: true,
        },
        {id: "F5",
         title: "Harry Potter and the Goblet of Fire",
         author: "J K Rowling",
         genre: "Adventure",
         fiction: true,
        },
        {id: "F6",
         title: "Harry Potter and the Order of Phoeinx",
         author: "J K Rowling",
         genre: "Adventure",
         fiction: true,
        },
        {id: "F7",
         title: "Harry Potter - Half Blood Prince",
         author: "J K Rowling",
         genre: "Adventure",
         fiction: true,
        },
        {id: "F8",
         title: "Harry Potter and the Deathly Hallows",
         author: "J K Rowling",
         genre: "Adventure",
         fiction: true,
        },
        {id: "F9",
         title: "To Kill a Mockingbird",
         author: "Harper Lee",
         genre: "Satire",
         fiction: true,
        },
        {id: "F10",
         title: "Go set a Watchman",
         author: "Harper Lee",
         genre: "Satire",
         fiction: true,
        },
        {id: "M1",
         title: "Psychology of Money",
         author: "Morgan Housel",
         genre: "Finance",
         fiction: false,
        },
        {id: "F11",
         title: "Sherlock Holmes",
         author: "Sir Arthur Conan Doyle",
         genre: "Detective",
         fiction: true,
        },
        {id: "F12",
         title: "Immortals of Meluha",
         author: "Amish Tripathi",
         genre: "Mythology",
         fiction: true,
        },
        {id: "F13",
         title: "The Secret of the Nagas",
         author: "Amish Tripathi",
         genre: "Mythology",
         fiction: true,
        },
        {id: "F14",
         title: "The Oath of the Vayuputras",
         author: "Amish Tripathi",
         genre: "Mythology",
         fiction: true,
        },
        {id: "F15",
         title: "Scion of Ishavaku",
         author: "Amish Tripathi",
         genre: "Mythology",
         fiction: true,
        },
        {id: "F16",
         title: "Sita the Warrior",
         author: "Amish Tripathi",
         genre: "Mythology",
         fiction: true,
        },
        {id: "F17",
         title: "Raavan Enemy of Aryavrat",
         author: "Amish Tripathi",
         genre: "Mythology",
         fiction: true,
        },
        {id: "F18",
         title: "War of Lanka",
         author: "Amish Tripathi",
         genre: "Mythology",
         fiction: true,
        }
        ];
    let users = [
        {id: "U1",
         name: "Shagun",
         email: "shagun@gmail.com"
        },
        {id: "U2",
         name: "Komal",
         email: "komal@hotmail.com"
        },
        {id: "U3",
         name: "Rishabh",
         email: "rishabh@gmail.com"
        },
        {id: "U4",
         name: "Yash",
         email: "yash@gmail.com"
        }
        ];
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
        getBookById: id => books.find(b => b.id === id),
        getBooksByCustomFilter: (filterName, filterValue) => books.filter(b => b[filterName] ===  filterValue),
        
        getUserById: id => users.find(u => u.id === id),
        getUsersByCustomFilter: (filterName, filterValue) => users.filter(u => u[filterName] ===  filterValue), 

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
                .map(r => ({bookTitle : getBookById(r.bookid).bookTitle,
                    rating: r.stars})),
        
        getAllReviewsForABook: bookId => reviews.filter(r => r.bookid === bookId)
                .map(fr => ({user: getUserById(fr.userid).name,
                        posts: fr.reviews })),
        getAllReviewsOfAUser: userId => reviews.filter(r => r.userid === userId)
                .map(fr => ({bookTitle : getBookById(fr.bookid).title,
                    posts: fr.reviews }))
    }
}

let inMemDB = datastore();
export default inMemDB;