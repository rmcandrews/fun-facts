import React from 'react';
import { withStyles } from 'material-ui/styles';

const delaySeconds = 0;

const styles = theme => ({
    root: {
        color: '#333',
        'text-align': 'center',
        'font-family': 'Consolas, Menlo, Monaco, monospace',
        'font-weight': 'bold',
        'font-size': '15vh',
        'letter-spacing': '-20px',
        'opacity': 0.7,
        'animation': 'spin 10s infinite linear',
        'animation-delay': delaySeconds + 's'
    },
    character: {
        display: 'inline-block',
        animation: 'pulse 1.0s alternate infinite ease-in-out',
        'animation-delay': delaySeconds + 's',
        '&:nth-child(odd)': {
            'padding-top': '100px',
            'animation-delay': delaySeconds + 1 + 's'
        },
        '&:nth-child(even)': {
            'padding-bottom': '100px'
        }
    },
    '@keyframes pulse': {
        to: {
            transform: 'scale(0.7)',
            opacity: 0.5
        }
    },
    '@keyframes spin': {
        from: {
            transform: 'rotate(0deg)'
        },
        to: {
            transform: 'rotate(360deg)'
        }
    }
});

const Loader = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <span className={classes.character}>¿</span><span className={classes.character}>?</span>
        </div>
    );
}

export default withStyles(styles, { withTheme: true })(Loader);