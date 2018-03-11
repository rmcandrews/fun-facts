import React from 'react';
import { Link } from 'react-router-dom'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import FactIcon from 'material-ui-icons/LightbulbOutline';
import StatsIcon from 'material-ui-icons/TrendingUp';
import FactCheckIcon from 'material-ui-icons/Spellcheck';
import TrainingIcon from 'material-ui-icons/FitnessCenter';

export const mailFolderListItems = (
  <div>
    <ListItem component={Link} to="/facts" button>
      <ListItemIcon>
        <FactIcon />
      </ListItemIcon>
      <ListItemText primary="Facts"/>
    </ListItem>
    <ListItem component={Link} to="/stats" button>
      <ListItemIcon>
        <StatsIcon />
      </ListItemIcon>
      <ListItemText primary="Stats"/>
    </ListItem>
    <ListItem component={Link} to="/fact-checker" button>
      <ListItemIcon>
        <FactCheckIcon />
      </ListItemIcon>
      <ListItemText primary="Fact Check"/>
    </ListItem>
    <ListItem component={Link} to="/nlp-training" button>
      <ListItemIcon>
        <TrainingIcon />
      </ListItemIcon>
      <ListItemText primary="NLP Training"/>
    </ListItem>
  </div>
);