import App from "../App.css";

const Book = (props) => {

    const {"title", "author", "genre", "cover"} = props;

    return (
        <div className="bookCard">
          <p>title:{props.title}</p>
          <p>author:{author}</p>
          <p>genre: {genre}</p>
          <img src={cover}  alt="book cover"/>
        </div>
    );
}


export default Book;