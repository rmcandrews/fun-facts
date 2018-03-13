import React, { Component } from 'react';
import Typography from 'material-ui/Typography';

class FactChecker extends Component {
  render() {
    return (
      <div>
        <Typography 
          variant="headline" 
          align="center"
          style={{marginBottom: '1rem'}}
          noWrap>
          Fact Checker
        </Typography>
      </div>
    );
  }
}

export default FactChecker;