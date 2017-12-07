import React from "react"
import { Grid, Row, Col } from 'react-flexbox-grid';

class IndexContainer extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            category: 'all'
        }
    }
    
    render() {
        
        console.log('this.props.children ', this.props);
        return (
            <div >
            <Grid>
                <Row>
                    <Col xs={10} sm={10} md={10} lg={10} >
                        { this.props.children }
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                        Categories
                    </Col>
                </Row>
                </Grid>
            </div>
            );

    }
    
}

export default IndexContainer;
