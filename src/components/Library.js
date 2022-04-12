import React from 'react'
import BookShelve from "./BookShelve";
import {Link} from "react-router-dom";

class Library extends React.Component {
    render() {
        const {books, changeShelf} = this.props;

        const CURRENTLY_READING = 'currentlyReading';
        const WANT_TO_READ = 'wantToRead';
        const READ = 'read';

        function filterList(shelfName) {
            return (books.filter(book => book.shelf === shelfName));
        };

        function getShelfTitle(shelfName) {
            switch (shelfName){
                case CURRENTLY_READING:
                    return 'Currently Reading';
                case WANT_TO_READ:
                    return 'Want to read';
                case READ:
                    return 'Read';
            }
            return 'All';
        };

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                        <BookShelve title={getShelfTitle(CURRENTLY_READING)} bookList={filterList(CURRENTLY_READING)} changeShelf={changeShelf}/>
                        <BookShelve title={getShelfTitle(WANT_TO_READ)} bookList={filterList(WANT_TO_READ)} changeShelf={changeShelf}/>
                        <BookShelve title={getShelfTitle(READ)} bookList={filterList(READ)} changeShelf={changeShelf}/>
                </div>
                <div className="open-search">
                    <Link to="/search"/>
                </div>
            </div>
        );
    }
}

export default Library;