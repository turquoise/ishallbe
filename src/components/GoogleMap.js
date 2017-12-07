import React from 'react'
import Link from 'gatsby-link'
import GoogleMapReact from 'google-map-react'
import Container from '../components/Container';

// api key 'AIzaSyD-oU-btZC66MPOfAo1Z_s08kd8g95SqaU'



const style = {
  map: {
    width: '400px',
    height: '400px',
    marginLeft: '60px',
    marginTop: '40px',
  }
}

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class GoogleMap extends React.Component {
  static defaultProps = {
    center: { lat: 51.37720, lng: -2.35166 },
    zoom: 12
  }
  render() {
    return (
      <div style={style.map}>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 40.7473310 }
            lng={ -73.8517440 }
            text={ 'EuroArt' }
          />
        </GoogleMapReact>
        
      </div>
    )
  }
}
  

export default GoogleMap