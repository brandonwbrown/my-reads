import React, { Component } from 'react';
import './App.css';
import STATICBOOKS from './staticBooks'
import ListShelf from './ListShelf'
import * as BooksAPI from './BooksAPI'


class App extends Component {
  state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      showSearchPage: false,
      books: STATICBOOKS
  }

  onShelfChangeHandler = (book, event) => {
     const newShelf = event.target.value;
     if (newShelf !== book.bookshelf) {
       console.log(newShelf)
       this.state.books.filter((b) => (b.book === book)).map((b) =>(
         this.setState({b: newShelf})
       ))
     }
  };

  render() {
    return (
      <div className="App">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books">
          <div className="list-books-content">
            <div>
              <ListShelf
                books={this.state.books}
                bookshelf="Currently Reading"
                onShelfChange={this.onShelfChangeHandler}/>
              <ListShelf
                books={this.state.books}
                bookshelf="Want To Read"
                onShelfChange={this.onShelfChangeHandler}/>
              <ListShelf
                books={this.state.books}
                bookshelf="Read"
                onShelfChange={this.onShelfChangeHandler}/>
          </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default App;
