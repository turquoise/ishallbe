import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';
//import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Menu from 'material-ui/svg-icons/navigation/menu';
import './assets/css/index.css';
import logo from  './assets/images/euroart.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const styles = {
  img: {
    cursor: 'pointer',
    margin: '5px',
    width: '40px'
  },
  a: {
    textDecoration: 'none',
    color: 'black'
  }
}

const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
    color: 'white',
    textColor: 'black'
  },
});

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  }
  
  handleClose = () => {
    this.setState({
      open: false
    });
  }
  
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar
          iconElementLeft={<FlatButton
            icon={<Menu />} 
            onClick={this.handleToggle}
          />}
          iconElementRight={
            <Link to="/about/">
              <img style={styles.img} src={logo} alt="Logo" />
            </Link>
          }    
        />
        
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>
            <Link style={styles.a}  to="/">Home</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link style={styles.a} to="/page-2/">Go to page 2</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link style={styles.a}  to="/about/">About EuroArt</Link>
          </MenuItem>
        </Drawer>
      </div>
      </MuiThemeProvider>
    )
  }
}
  

export default Nav;