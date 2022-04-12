import React, {Component} from "react";
import {Link} from "react-router-dom";
import BookShelve from "./BookShelve";
import * as BooksAPI from '../BooksAPI'
import PropTypes from "prop-types";
import debounce from 'lodash.debounce';

class SearchDesk extends Component {
    constructor(props) {
        super(props);
        this.filterBooks = this.filterBooks.bind(this);
        this.emitFilterBookDebounced = debounce(this.emitChange, 100);
        this.state = {
            searchInput : '',
            searchResultList: []
        }
    };

    componentWillUnmount() {
        this.emitFilterBookDebounced.cancel();
    }

    static propTypes = {
        changeShelf: PropTypes.func.isRequired
    }

    filterBooks(e){
        this.emitFilterBookDebounced(e.target.value);
    }

    emitChange (query) {
        this.setState({searchInput :query});
        console.log(query);
        console.log(this.state.searchInput);

        if(query && query.length > 0){
            BooksAPI.search(query.trim())
                .then(apiSearchResult =>{
                    apiSearchResult.length > 0
                        ? this.setState({searchResultList : apiSearchResult})
                        : this.setState({searchResultList : []})
                }
            );
        }
        else {
            this.setState({searchResultList : []});
        }
    };

    render (){
        const {searchInput, searchResultList} = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search"></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               value={searchInput}
                               onChange={this.filterBooks}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BookShelve title='Result' bookList={searchResultList} changeShelf={this.props.changeShelf}/>
                </div>
            </div>
        )
    }
}

export default SearchDesk;
