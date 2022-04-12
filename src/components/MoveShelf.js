import React from 'react';
import PropTypes from 'prop-types';

class MoveShelf extends React.Component {
    static propTypes = {
        book : PropTypes.object,
        bookList : PropTypes.array,
        changeShelf : PropTypes.func.isRequired
    }
    updateShelf = event => {
        this.props.changeShelf(this.props.book, event.target.value);
    }

    render() {
        const {book, bookList} = this.props
        let currentShelf = 'none';

        for(let theBook of bookList){
            if(theBook.id === book.id
                    && theBook.shelf){
                currentShelf = theBook.shelf;
                break;
            }
        }

        return (
            <div className="book-shelf-changer">
                <select onChange={this.updateShelf}
                        value={currentShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default MoveShelf;