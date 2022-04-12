import React from 'react'
import Author from "./Author";
import MoveShelf from "./MoveShelf";
import PropTypes from "prop-types";
import defaultThumbnail from "../icons/defaultThumbnail.jpg";

class Book extends React.Component {
    static propTypes = {
        book : PropTypes.object,
        bookList : PropTypes.array,
        authors : PropTypes.array,
        changeShelf : PropTypes.func.isRequired
    }
    render() {
        const {book, bookList, authors = [], changeShelf} = this.props
        const thumbnail = book.imageLinks && book.imageLinks.smallThumbnail
                            ? book.imageLinks.smallThumbnail
                            : defaultThumbnail;

        const title = book.title ? book.title : 'No Title';

        const authorList = authors.map((author) =>
            <Author key={author.id} author={author}/>
        )

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193,
                            backgroundImage: `url(${thumbnail})` }}></div>
                            <MoveShelf key={book.id} book={book} bookList={bookList}
                                   changeShelf={changeShelf}/>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">
                        <ol className="books-grid">
                            {authorList.length ? authorList : <li></li>}
                        </ol>
                    </div>
                </div>
            </li>
        )
    }

}

export default Book;