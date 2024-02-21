import Book from "./Book";
import App from "../App.css";

const BookList = () =>{

    const books = [
         {
            title: "title One",
            author: "author One",
            genre: "Thriller",
            image: "imageURL",
        },
        {
            title: "title two",
            author: "author two",
            genre: "Crime",
            image: "imageURL",
        },

        {
            title: "title three",
            author: "author three",
            genre: "Romance",
            image: "imageURL",
        },

        {
            title: "title four",
            author: "author four",
            genre: "Anatomy",
            image: "imageURL",
        },

        {
            title: "title five ",
            author: "author five",
            genre: "Thriller",
            image: "imageURL",
        },
    ];

    return (x
        <div className="book-list">
            {books.map((book, index) => (
                <BookList
                key={index}
                title{book.title}
                author{book.author}
                genre{book.genre}
                cover{book.cover}
                />   
            ))}
            </div>
    );
    }
     
        


}

export default BookList;