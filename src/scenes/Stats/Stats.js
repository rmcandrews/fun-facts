import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

class Stats extends Component {

    render() {
        return (
            <div>
                <Typography 
                    variant="headline" 
                    align="center"
                    style={{marginBottom: '1rem'}}
                    noWrap>
                    Stats
                </Typography>
            </div>
        );
    }
}

export default Stats;