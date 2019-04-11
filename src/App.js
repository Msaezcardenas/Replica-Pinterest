import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NavComponent from './Components/nav';


class App extends Component {

  state = {
    images: [],
    errors: null,
    apikey: '12135320-1034cd4873eda400df781a37d',
  };

  componentDidMount() {
    axios
      .get("https://pixabay.com/api/?key=12135320-1034cd4873eda400df781a37d&q=all&image_type=photo")

      .then(images => {
        this.setState({
          images: images.data.hits
        });
      })
      .catch(error => this.setState({ error}));
  }

  render() {
    const { images } = this.state;
    return (

      <div>

        <NavComponent/>

          <div className = "masonry" >
           {images.map(img => <div className = "item" > <img src={img.largeImageURL} /> </div>)}  
          </div>   

      </div>
    )
  }
}

export default App;