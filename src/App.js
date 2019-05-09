import React, { Component } from 'react';
import axios from 'axios';
import NavComponent from './Components/Nav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from './Components/Modal';
import ImgPint from './Components/ImgPint';
import './Components/ImgPint'


class App extends Component {
  state = {

    images: [],
    isLoading: true,
    errors: null,
    apikey: '12135320-1034cd4873eda400df781a37d',
    page: 20,
    toShowing: false,
  };

  componentDidMount() {

    axios
     .get("https://pixabay.com/api/?key=12135320-1034cd4873eda400df781a37d&q=all&image_type=photo")


      .then(images => {
        this.setState({
          images: images.data.hits,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  fetchData = () => {
    let start = this.state.page + 20;
    this.setState({
      page: start

    })

    axios
      .get("https://pixabay.com/api/?key=12135320-1034cd4873eda400df781a37d&q=all&image_type=photo&page=" + (this.state.page / 20) + "&per_page=20")

      .then(images => {
        let arr = images.data.hits
        this.setState({
          images: arr.concat(this.state.images),
          isLoading: false
        });
        console.log(arr.concat(this.state.images));
      })
  }

  openModal = (i) => {
    this.setState({
      toShowing: i.url
    });
  }

  closeModal = () => {
    this.setState({
      toShowing: false
    });
  }

  getImage(){
  const showImage = this.state.images.map((img, i) =>{
    return (
      <ImgPint
      key={i}
      pushClick={this.openModal}
      url={img.previewURL}>
      </ImgPint>
    )
  })
  return showImage;
  }


  render() {
    return (
      <div>
      {this.state.toShowing && <Modal pushClick={this.closeModal} imgUrl={this.state.toShowing}></Modal>}

        <NavComponent />
    
        <div className="masonry">
        <InfiniteScroll 
        style={{overflow:'none'}}
          dataLength={this.state.images.length}
          next={this.fetchData}
          hasMore={true}
        >{this.state.images && this.getImage()}
        </InfiniteScroll>
      </div>
      </div>
      
    )
  }
}

export default App;
