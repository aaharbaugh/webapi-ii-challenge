import React, { Component } from 'react';

import axios from 'axios';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
}

componentDidMount(){

  console.log('egun')
  axios.get("http://localhost:4000/api/posts")
       .then(response => this.setState({ posts: response.data }))
       .catch(error => console.log(error))

}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>  
        </header>
      </div>
    );

  }
}

export default App;
