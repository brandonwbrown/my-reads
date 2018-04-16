import React, { Component } from 'react'
import './App.css'
//import STATICBOOKS from './staticBooks'
import ListShelf from './ListShelf'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class App extends Component {
  state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      showSearchPage: false,
      books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
        console.log(JSON.stringify(books))
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
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-content">
              <div>
                <ListShelf
                  books={this.state.books}
                  bookshelf="currentlyReading"
                  shelfname ="Currently Reading"
                  onShelfChange={
                    (book, shelf) => this.onShelfChangeHandler(book, shelf)}/>
                <ListShelf
                  books={this.state.books}
                  bookshelf="wantToRead"
                  shelfname="Want To Read"
                  onShelfChange={
                    (book, shelf) => this.onShelfChangeHandler(book, shelf)}/>
                <ListShelf
                  books={this.state.books}
                  bookshelf="read"
                  shelfname="Read"
                  onShelfChange={
                    (book, shelf) => this.onShelfChangeHandler(book, shelf)}/>
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
