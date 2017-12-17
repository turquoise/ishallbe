import React from 'react';
import axios from 'axios';
import Link from 'gatsby-link';
import Iframe from 'react-iframe';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Container from '../components/Container';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator} from 'react-material-ui-form-validator';
import {brown500, grey900} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Gradient from '../layouts/Gradient';
import '../layouts/index.css';

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey900,
    borderColor: brown500,
    primary1Color: brown500,
    accent1Color: brown500,
  }
});

const style = {
  height: '100%',
  width: '100%',
  margin: 5,
  textAlign: 'left',
  display: 'inline-block',
  backgroundColor: 'white',
  container: {
    marginTop: '20px',
    marginLeft: '20px',
  },
  address: {
    marginTop: '100px',
  },
  map: {
    marginTop: '40px',
  },
  
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });

  }

  handleSubmit(event) {
        event.preventDefault();
        const { formData } = this.state;
        console.log('formData ', formData);
        this.setState({
          submitted: true
        })
        axios.post('https://formspree.io/monica.gosschalk@btinternet.com', {

            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,

        })
        .then( (response) => {
          this.setState({
            submitted: false,
            formData: {
              name: '',
              email: '',
              subject: '',
              message: '',
            }
          })
        })
        .catch( (error) => {
          console.log(error);
          form.reset();
        })
        
    }

  render() {
    const { formData, submitted } = this.state;
    return (
      <div>
        <Gradient />
      <MuiThemeProvider muiTheme={muiTheme}>
      <Container>
      <Paper style={style} zDepth={4}>
      <Grid>
        <Row>
        <Col xs={12} sm={12} md={5} lg={5}>

        <h1 className="myheading"  style={style.container}>Contact EuroArt</h1>
        <ValidatorForm style={style.container}
              ref="form"
              id="form"
              onSubmit={this.handleSubmit}
          >

              <TextValidator
                  floatingLabelText="Name"
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  value={formData.name}
                  validators={['required']}
                  errorMessages={['this field is required']}
              />
              <br />
              <TextValidator
                  floatingLabelText="Email"
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  value={formData.email}
                  validators={['required', 'isEmail']}
                  errorMessages={['this field is required']}
              />
              <br />
              <TextValidator
                  floatingLabelText="Subject"
                  onChange={this.handleChange}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  validators={['required']}
                  errorMessages={['this field is required']}
              />
              <br />
              <TextValidator
                  floatingLabelText="Message"
                  onChange={this.handleChange}
                  type="text"
                  name="message"
                  multiLine={true}
                  rows={2}
                  value={formData.message}
                  validators={['required']}
                  errorMessages={['this field is required']}
              />
              <br />
              <FlatButton
                  type="submit"
                  fullWidth={true}
                  label={
                      (submitted && 'Your form is submitted!')
                      || (!submitted && 'Submit')
                  }
                  disabled={submitted}
              />
          </ValidatorForm>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
          <div style={style.map}>
          <Iframe url="https://www.google.com/maps/embed/v1/place?key=AIzaSyC9Qf5Vq-yWq5WU4XcZ3cyYG-f2UtHP7OA&q=Bath+BA2+4DG&zoom=14"
            width="380px"
            height="380px"
            display="initial"
            position="relative" />
            </div>
          
          </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6} >
              <div style={style.container} >
                <p>3 Bridge Lock Mews</p>
                <p>Pultney Road</p>
                <p>Bath, BA2 4DG</p>
              </div>
              
            </Col>
            <Col  xs={6} sm={6} md={6} lg={6} >
              <div  >
                <p><span>Email: </span> euroart1@btinternet.com</p>
                <p><span>Mobile: </span>07768876874 </p>
              </div>
            </Col>
          </Row>
          </Grid>

        </Paper>
      </Container>
      </MuiThemeProvider>
      </div>

    )
  }
}

export default Contact
