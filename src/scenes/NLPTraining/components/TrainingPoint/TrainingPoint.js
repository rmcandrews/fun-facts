import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from 'material-ui/styles';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Input from 'material-ui/Input';
import ApproveIcon from 'material-ui-icons/Check';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';
import SaveIcon from 'material-ui-icons/Save';

const styles = theme => ({
    root: {
      'margin-bottom': '1rem',
      padding: '1rem',
      display: 'flex'
    },
    information: {
        order: 1,
        'flex-grow': 0,
        'flex-shrink': 0,
        'flex-basis': '60%'
    },
    controls: {
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        order: 2,
        'flex-grow': 0,
        'flex-shrink': 0,
        'flex-basis': '40%',
        'padding-left': '1rem',
    },
    divider: {
        margin: '1rem 0'
    },
    buttons: {
        'text-align': 'center'
    },
    button: {
        margin: 0,
    },
    editButton: {
        float: 'right'
    }
});

class TrainingPoint extends Component {

    constructor(props) {
        super(props);
        this.state = {
            approved: props.data.approved,
            subject: props.data.subject,
            editMode: false
        };
    }

    startEditing = () => {
        this.setState({editMode: true});
    }

    stopEditing = () => {
        this.setState({editMode: false});
    }

    approve = () => {
        axios.post(`https://morning-refuge-54817.herokuapp.com/api/trainingData/${this.props.data.id}`,
            {  
                subject: this.state.subject,
                approved: true
            })
            .then(response => this.props.remove(this.props.data.id))
    }

    delete = () => {
        axios.delete(`https://morning-refuge-54817.herokuapp.com/api/trainingData/${this.props.data.id}`)
            .then(response => this.props.remove(this.props.data.id))
    }

    setSubject = (event) => {
        this.setState({ subject: event.target.value });
    }

    render() {
        const { classes } = this.props;
        let subject;
        if(this.state.editMode) {
            subject = (
                <span style={{ marginTop: '-1rem', marginBottom: '-0.9rem', display: 'inline-block', width: '100%' }}>
                    <Input style={{width: '70%'}} onChange={this.setSubject} value={this.state.subject}/>
                    <IconButton aria-label="save" onClick={this.stopEditing}><SaveIcon/></IconButton>
                </span>
            )
        } else {
            subject = (
                <Typography color="textSecondary">
                    {this.state.subject}
                </Typography>
            )
        }
        return (
            <Card className={classes.root}>
                <div className={classes.information}>
                    <Typography>{this.props.data.comment}</Typography>
                    <Divider className={classes.divider}/>
                    {subject}
                    <Divider className={classes.divider}/>
                    <Typography>{this.props.data.subreddit}</Typography>
                </div>
                <div className={classes.controls}>
                    <div className={classes.buttons}>
                        <IconButton 
                            className={classes.button} aria-label="Approve"
                            onClick={this.approve}
                            >
                            <ApproveIcon />
                        </IconButton>
                        <IconButton 
                            className={classes.button} aria-label="Edit"
                            onClick={this.startEditing}
                            >
                            <EditIcon />
                        </IconButton>
                        <IconButton 
                            className={classes.button} aria-label="Delete"
                            onClick={this.delete}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(TrainingPoint);