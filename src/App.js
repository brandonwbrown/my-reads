import React, { Component } from 'react'
import './App.css'
import ListShelf from './ListShelf'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class App extends Component {
  state = {
      showSearchPage: false,
      books: []
  }

/* The shelf status and the shelf display names aren't the same unfortunately*/
  shelves = {
    currentlyReading : ["Currently Reading", "currentlyReading"],
    wantToRead : ["Want To Read", "wantToRead"],
    read : ["Read", "read"]
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  onShelfChangeHandler = (book, shelf) => {
    if (shelf !== book.shelf) {
      let newState = this.state.books.filter((b) => (b.id !== book.id))
      let updatedBook = book
      updatedBook['shelf'] = shelf
      newState.push(updatedBook)
      BooksAPI.update(book, shelf)
        .then(this.setState({books: newState}))
    }
  };

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <div>
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books">
              <div className="list-books-content">
                <div>
                  {Object.keys(this.shelves).map((sh) =>
                    <ListShelf
                      key = {sh}
                      books={this.state.books}
                      bookshelf={this.shelves[sh][1]}
                      shelfname ={this.shelves[sh][0]}
                      onShelfChange={
                        (book, shelf) => this.onShelfChangeHandler(book, shelf)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className='open-search'>
              <Link to='/search'>Add a Book</Link>
            </div>
          </div>
        )} />
        <Route path='/search' render={({ history }) => (
          <Search
            books={this.state.books}
            onShelfChange={(book, shelf) => {
              this.onShelfChangeHandler(book, shelf)
              history.push('/')
            }}
          />
        )}/>
      </div>
    )
  };

}


export default App;
