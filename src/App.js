import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header/>
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//       </div>
//     );
//   }
// }


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
          {/* {!isLoading ? (
            images.map(images => {
              const { image_type } = images;
              <div> <img src={images.largeImageURL} /> </div>
              return (
                  <p>{image_type}</p>
                 
              );
            })
        ) : (
            <p>Loading...</p>
          )} */}
          {images.map(img => 
           <img src={img.largeImageURL} />

            )}

        </div>
      </React.Fragment>
    )
  }
}

export default App;