import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import STATICBOOKS from './staticBooks'
import ListShelf from './ListShelf'


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

  render() {
    return (
      <div className="App">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books">
          <div className="list-books-content">
            <div>
              <ListShelf books={STATICBOOKS} bookshelf="currentlyReading" shelfDisplayName="Currently Reading"/>
              <ListShelf books={STATICBOOKS} bookshelf="wantToRead" shelfDisplayName="Want To Read"/>
              <ListShelf books={STATICBOOKS} bookshelf="read" shelfDisplayName="Read"/>
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
