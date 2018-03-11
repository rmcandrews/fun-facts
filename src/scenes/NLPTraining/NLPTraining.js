import React, { Component } from 'react';
import axios from 'axios';
import TrainingPoint from './components/TrainingPoint/TrainingPoint';

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
        if(!this.state.loaded) return <div>Loading</div> 
        if(this.state.error) return <div>{this.state.error.toString()}</div>
        if(this.state.data.length === 0) return <div>Nothing to see right now</div>
        
        const listItems = this.state.data.map((data) =>
            <TrainingPoint key={data.id} data={data} remove={this.removeChild}/>
        );
        return (
            <div>
                {listItems}
            </div>
        );
    }
}

export default NLPTraining;