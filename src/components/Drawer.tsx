import {
    Divider,
    Drawer as MuiDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
  } from '@material-ui/core';
  import BarChartIcon from '@material-ui/icons/BarChart';
  import FolderSharedIcon from '@material-ui/icons/FolderShared';
  import React from 'react';
  import { Link } from 'react-router-dom';
  import logo from '../assets/logo_fi.png';
  import { useStyles } from '../styles';
  
  export default function Drawer() {
    const classes = useStyles();
  
    return (
      <MuiDrawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}>
          <img src={logo} height={85} />
        </div>
        <Divider />
        <List>
          <ListItem button component={Link} to="/projektit">
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText>Projektit</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/otokset">
            <ListItemIcon>
              <FolderSharedIcon />
            </ListItemIcon>
            <ListItemText>Otosten hallinta</ListItemText>
          </ListItem>
        </List>
      </MuiDrawer>
    );
  }
  