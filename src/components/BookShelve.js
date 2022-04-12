import React from 'react'
import Book from "./Book";
import PropTypes from "prop-types";

class BookShelve extends React.Component {
    static propTypes = {
        title : PropTypes.string,
        book : PropTypes.object,
        bookList : PropTypes.array,
        changeShelf : PropTypes.func.isRequired
    }

    render() {
        const {title, bookList, changeShelf} = this.props

        const book = bookList.map((book) =>
            <Book key={book.id} book={book} bookList={bookList}
                  authors={book.authors} changeShelf={changeShelf}/>
        )

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {book}
                    </ol>
                </div>
            </div>

        )
    }
}

export default BookShelve;