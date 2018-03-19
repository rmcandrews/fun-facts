import React, { Component } from 'react';
import axios from 'axios';
import PossibleFact from './components/PossibleFact';
import Loader from 'components/Loader';
import Typography from 'material-ui/Typography';

class FactChecker extends Component {

  constructor(props) {
    super(props);
    this.state = {
        loaded: false,
        error: undefined,
        data: []
    };
  }

  componentWillMount() {
    axios.get('https://morning-refuge-54817.herokuapp.com/api/facts?approved=false')
        .then((response) => {
            this.setState({loaded: true, data: response.data});
        })
        .catch((error) => {
            this.setState({loaded: true, error});
        });
  }

  render() {
    let content;
    if(!this.state.loaded) {
        content = <div><Loader/></div>;
    } else if(this.state.error) {
        content = <Typography variant="subheading" align="center" color="error">Something bad happened</Typography>;
    } else if(this.state.data.length === 0) {
        content = <Typography variant="subheading" align="center" color="textSecondary">Nothing to see right now</Typography>;
    } else {
        content = this.state.data.map((data) => <PossibleFact key={data.id} data={data}/>);
    }
    return (
        <div>
            <Typography 
                variant="headline" 
                align="center"
                style={{marginBottom: '1rem'}}
                noWrap>
                Fact Checker
            </Typography>
            {content}
      </div>
    );
  }
}

export default FactChecker;