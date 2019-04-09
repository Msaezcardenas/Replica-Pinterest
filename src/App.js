import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {

  state = {
    images: [],
    isLoading: true,
    errors: null,
    apikey: '12135320-1034cd4873eda400df781a37d',
  };

  componentDidMount() {
    axios
      .get("https://pixabay.com/api/?key=12135320-1034cd4873eda400df781a37d&q=cat&image_type=photo")
      // .then(response =>
      //   response.data.results.map(images => ({
      //     typeImages: `${images.image_type}`,
      //   }))
      // )
      .then(images => {
        this.setState({
          images: images.data.hits,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    console.log(this.state.images)
    const { isLoading, images } = this.state;
    return (
      <React.Fragment>
        <h2>Random User</h2>
        <div>

          <div className = "masonry" >
           {images.map(img => <div className = "item" > <img src={img.largeImageURL} /> </div>)}  
            </div>   

        </div>
      </React.Fragment>
    )
  }
}

export default App;