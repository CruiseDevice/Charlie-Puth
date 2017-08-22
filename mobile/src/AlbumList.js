import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import AlbumDetail from './AlbumDetail';
class AlbumList extends Component {
  state = {
    albums: []
  };
  componentWillMount() {
    // console.log('componentWillMount in Album LIist!!');
    fetch('http://192.168.43.5:3000/api/data')
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      this.setState({
        albums: responseData
      });
    });
  }
  renderAlbums(){
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }
  render(){
    console.log(this.state);
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
