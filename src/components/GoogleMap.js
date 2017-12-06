import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import Link from 'gatsby-link'
import Container from '../components/Container';

// https://www.npmjs.com/package/google-maps-react
const styles = {
  width: '400px',
  height: '400px',
  marginLeft: '30px'
}


export class MapContainer extends React.Component {

  render() {
    return (
      <Container>
      <Map
        google={this.props.google}
        style={styles}
        zoom={15}
        initialCenter={{ lat: 51.37720, lng: -2.35166}}>

      <Marker
        title={'EuroArt Media'}
        name={'EuroArt'}
        position={{ lat: 51.37720, lng: -2.35166 }} />

      
    </Map>
    

      </Container>
    )
  }
}



export default GoogleApiWrapper({
  apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')
})(MapContainer)
