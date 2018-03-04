import React from 'react'
import Link from 'gatsby-link'
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Container from '../components/Container';
import Gradient from '../layouts/Gradient';
import Trisha1 from  '../layouts/assets/images/trisha1.jpg';
import '../layouts/index.css';

const style = {
  height: '100%',
  width: '100%',
  margin: 5,
  textAlign: 'left',
  display: 'inline-block',
  backgroundColor: 'white',
  container: {
    marginTop: '20px',
    marginLeft: '30px',
    marginRight: '30px',
  },
  heading: {
    textAlign: 'center',
  },
  image: {
    display: 'block',
    margin: '0 auto',
    height: 'auto',
    width: '400px'
  }
};


const About = () => (
  <div>
    {/*<Gradient />*/}
  <Container>
    <Paper style={style} zDepth={4}>
    <Grid>
      <Row>
        <Col>
          <h1 className="myheading"  style={style.container}>About EuroArt Media</h1>
          <div style={style.container}>
            <p>
            Euroart (Media) Ltd is an independent television and film production company based in Bath making branded television content and popular films for an avid audience.
            </p>
          </div>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} >
        <div style={style.container}>
        <h2 className="myheading"   style={style.heading}>Trisha Clarke</h2>
        <img style={style.image} src={Trisha1} alt="Trisha Clarke" />
        <br />
        <p>
        After leaving school Trisha Clarke began dancing with The Royal Ballet Company and then moved onto study to become an actress at Studio 68.  Trisha has undertaken acting roles in film, television and theatre. She is a founder member of the London Translation and Interpreting Agency and speaks English, French, Italian, Russian and German. After obtaining a BA in Fine Art at Central St Martin’s she went onto study on a BBC News Course in Television Journalism.
        </p>
        <p>
        Trisha studied for a Post graduate MA in Media Production at the University of Strathclyde. Whilst there she also undertook a Script editing Course run by Scottish Screen in Glasgow.  Continuing with her work as a script editor she trained as a script mentor at FAMU in Prague. Trisha has enjoyed work as a director directing mainly documentary films which include: “Responses”; “Markus Wolfe - In From The Cold” and “The Vital Link”.
        </p>
        <p>
        Alongside her production work Trisha has also exhibited her paintings internationally. Her art work was chosen to exhibit in The Tate in St Ives along with Tacita Dean and in 2013 she collaborated on an installation project with Susanna Lacey at The Tate Modern, London.
        </p>
        <p>
        Trisha Clarke is currently working as a producer and her current projects include” I Shall Be”, “Teddy Tales “, “The Impotence Of Power” and “Hilde”.
        </p>
        <p>
        Trisha Clarke enjoys going to the theatre, watching films old and new and eating out in restaurants.
        </p>
        <p>
        Trisha also enjoys swimming and travelling.
        </p>

        </div>
      </Col>
      {/*<Col xs={12} sm={12} md={12} lg={12}>
        <div style={style.container} >
        <h2 className="myheading"  style={style.heading}>Natasha</h2>
        <img style={style.image} src="https://via.placeholder.com/150x150" alt="name 2" />
        <br />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at blandit ipsum, ac pretium lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>

        </div>
      </Col>*/}
    </Row>
    </Grid>

    </Paper>
  </Container>
  </div>
)

export default About
