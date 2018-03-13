import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

class Facts extends Component {

    render() {
        return (
            <Typography 
                variant="headline" 
                align="center"
                style={{marginBottom: '1rem'}}
                noWrap>
                Facts
            </Typography>
        );
    }
}

export default Facts;