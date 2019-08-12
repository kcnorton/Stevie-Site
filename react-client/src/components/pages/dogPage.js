import React, { Component } from 'react';
import DogList from './dogList.js';

class DogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breed/retriever/golden/images/random/50').then((results) => results.json()).then((data) => {this.setState({ dogs: data.message })
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="dogs">
        
          <h1>Friends & Family</h1>

          <p>This page is connected to the Dog API in order to display a page of Stevie's friends and family. Refresh for new faces. Enjoy!</p>

          <DogList dogs={this.state.dogs} />
        

        </div>
      </div>
    )
  }
}

export default DogPage;