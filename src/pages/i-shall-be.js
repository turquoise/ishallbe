import React from 'react'
import Link from 'gatsby-link'
import Paper from 'material-ui/Paper';
import Container from '../components/Container';
import '../layouts/index.css';

const style = {
  height: '100%',
  width: '100%',
  margin: 5,
  textAlign: 'left',
  display: 'inline-block',
  backgroundColor: '#e5d7b2',
  container: {
    marginTop: '20px',
    marginLeft: '30px',
    marginRight: '30px',

  }
};


const IShallBe = () => (
  <Container>
    <Paper style={style} zDepth={1}>
    <h1 className="myheading"  style={style.container}>About I Shall Be</h1>
    <div style={style.container}>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at blandit ipsum, ac pretium lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent leo orci, efficitur a ex in, sollicitudin luctus odio. Pellentesque eget nulla massa. Pellentesque finibus varius blandit. Aenean ornare augue eu orci ultrices luctus. Sed luctus mi dui, et sagittis dui porttitor non. In congue sed orci ut tincidunt. Fusce arcu augue, iaculis eu sollicitudin nec, vestibulum at nulla. Aenean nec ultricies justo. Phasellus sed lacinia risus. Proin tincidunt facilisis urna, sit amet semper tellus tempor mattis. Curabitur ut luctus libero, id lacinia justo. Integer eget ipsum sit amet lorem pretium dignissim vitae vel justo. Aenean tristique ante eu augue dictum, sit amet rhoncus nisl consequat. Duis ac sodales nisi, molestie placerat elit.
        </p>
    </div>
    
    </Paper>
  </Container>
)

export default IShallBe
