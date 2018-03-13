import React, { Component } from 'react';
import axios from 'axios';
import TrainingPoint from './components/TrainingPoint/TrainingPoint';
import Loader from 'components/Loader';
import Typography from 'material-ui/Typography';

class NLPTraining extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            error: undefined,
            data: []
        };
    }

    removeChild = (id) => {
        let newData = this.state.data.filter((el) => {
            return el.id !== id;
        });
        this.setState({data: newData});
    }

    componentWillMount() {
        axios.get('https://morning-refuge-54817.herokuapp.com/api/trainingData?approved=false')
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
            content = this.state.data.map((data) => <TrainingPoint key={data.id} data={data} remove={this.removeChild}/>);
        }

        return (
            <div>
                <Typography 
                    variant="headline" 
                    align="center"
                    style={{marginBottom: '1rem'}}
                    noWrap>
                    NLP Training
                </Typography>
                {content}
            </div>
        );
    }
}

export default NLPTraining;