import React from 'react'
import Link from 'gatsby-link'
import Paper from 'material-ui/Paper';
import Container from '../components/Container';
import Gradient from '../layouts/Gradient';
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

  }
};


const IShallBe = () => (
  <div>
    <Gradient />
  <Container>
    <Paper style={style} zDepth={4}>
    <h1 className="myheading"  style={style.container}>Synopsis of I Shall Be</h1>
    <div style={style.container}>
      <p>
      Regina came from a poor family, she grew up in one of the worst slums in Berlin but her intelligence and desire drove her to challenge tradition, to question why a woman could not be equal to man, to achieve what was believed to be impossible.
      </p>
      <p>
      The film follows Regina's struggle to be ordained as a Rabbi during the early to mid 1930s. Her quest to be ordained is set against the context of the rise of the Nazi party and the destruction of Weimar Germany. This adds a dark undercurrent to the story but also makes it equally enthralling.
      </p>
      <p>
      The viewer bears witness as Regina battles within her own community to be accepted for ordination, overcoming sexism and snobbery based on her gender and her upbringing. Regina also has a second battle to fight as she has to deal with the growing anti-Semitic prejudice within broader German society that will ultimately destroy her community.
      </p>
      <p>
      As Berlin's Jews are harassed and driven closer to the edge none of our central characters fully realise the danger that is enveloping them. The characters go about their lives, hoping that things will get better, that the madness will just go away. Only the audience is aware of the gathering storm and they hope against hope that Regina will survive.
      </p>
      <p>
      Regina herself is smart enough to see what is happening but she is no different than so many of her fellow German's, so focused is she on achieving her goals, she fails to realise the danger until it is too late.
      </p>
      <p>
      The film culminates with Regina Jonas being ordained as a rabbi against the odds, just as she triumphs the world she knows falls apart as Germany's Jews are driven by the Nazis to the brink of complete annihilation. This film does not pull any punches, it shows that even in moments of triumph our world can come crashing down.
      </p>
    </div>

    </Paper>
  </Container>
  </div>
)

export default IShallBe
