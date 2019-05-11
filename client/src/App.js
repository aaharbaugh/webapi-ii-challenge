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
        {this.state.posts.map(post => 
          <div>{post.id} <strong>{post.title}</strong> {post.contents}</div>
        )}
      </div>
    );

  }
}

export default App;
