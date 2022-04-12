import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchDesk from "./components/SearchDesk";
import Library from "./components/Library";
import {Route, Routes} from 'react-router-dom'


class App extends React.Component {
    state = {
        loading: true,
        allBooks: [],
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    allBooks: books,
                    loading: false
                }));
            });
    }

    changeShelve = (book, newShelf) => {
        BooksAPI.update(book, newShelf)
                .then(res => {
                    book.shelf = newShelf;
                    this.setState(
                        oldState => ({
                            allBooks : oldState.allBooks
                                .filter(oldBook => oldBook.id !== book.id)
                                .concat(book)
                        })
                    );
                });
    };

    render() {
        const { loading, allBooks } = this.state;

        if(loading) {
            return (
                <div>
                    <p>Loading, please wait</p>
                </div>
            );
        };

        return (
            <div className="app">
                <Routes>
                    <Route exact path='/'
                           element={ <Library books={allBooks} changeShelf={this.changeShelve} />} />
                    <Route path='/search'
                           element={ <SearchDesk books={allBooks} changeShelf={this.changeShelve}/>} />
                </Routes>
            </div>
        );
    }
}

export default App;
