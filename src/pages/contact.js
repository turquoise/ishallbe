import React from 'react';
import Link from 'gatsby-link';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Container from '../components/Container';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator} from 'react-material-ui-form-validator';

const style = {
  height: '100%',
  width: '100%',
  margin: 5,
  textAlign: 'left',
  display: 'inline-block',
  backgroundColor: '#e5d7b2',
  container: {
    marginTop: '20px',
    marginLeft: '20px',

  }
};



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
        fetch('https://formspree.io/monica.gosschalk@btinternet.com', {
          method: 'POST',
          body: formData,
        })
        this.setState({
          submitted: false,
          formData: {
            name: '',
            email: '',
            subject: '',
            message: '',
          }
        })
    }

  render() {
    const { formData, submitted } = this.state;
    return (
      <Container>
      <Paper style={style} zDepth={1}>
        <h1 style={style.container}>Contact EuroArt</h1>
        <ValidatorForm style={style.container}
              ref="form"
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
              <RaisedButton
                  type="submit"
                  label={
                      (submitted && 'Your form is submitted!')
                      || (!submitted && 'Submit')
                  }
                  disabled={submitted}
              />
          </ValidatorForm>

        </Paper>
      </Container>

    )
  }
}

export default Contact
