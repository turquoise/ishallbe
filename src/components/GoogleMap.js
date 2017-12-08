import React from 'react'
import Link from 'gatsby-link'
import GoogleMapReact from 'google-map-react'
import Container from '../components/Container';

// api key 'AIzaSyD-oU-btZC66MPOfAo1Z_s08kd8g95SqaU'
// apiKey={'AIzaSyD-oU-btZC66MPOfAo1Z_s08kd8g95SqaU'}


const style = {
  map: {
    width: '400px',
    height: '400px',
    marginLeft: '60px',
    marginTop: '40px',
  },
  place: {
    width: '80px',
    padding: '10px',
    border: '1px solid brown',
    background: '#e5d7b2',
    color: 'black',
    fontSize: '16px',
  }
}

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'brown', background: '#e5d7b2',
    height: 25, width: 50, top: -20, left: -30,    
  }}>
    {text}
  </div>
);

class GoogleMap extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     center: {
  //       lat: 51.37720,
  //       lng: -2.35166
  //     },
  //     zoom: 12
  //   }
  // }
  static defaultProps = {
    center: { lat: 51.37720, lng: -2.35166 },
    zoom: 14
  }
  render() {
    return (
      <div style={style.map}>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent 
          lat={51.37720} 
          lng={-2.35166} 
          text={'EuroArt'} 
        />
          
          
        </GoogleMapReact>
        
      </div>
    )
  }
}
  

export default GoogleMap