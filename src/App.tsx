import { Box, Typography } from '@material-ui/core';
import React from 'react';
import 'regenerator-runtime/runtime';
import Drawer from './components/Drawer';
import FormUtils from './components/FormUtils'
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { theme, useStyles } from './styles';

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Drawer/>
        <Box className={classes.main} p={2}>
          <Typography variant="h3">Engineer report form #35168 on kirov condition</Typography>
          <FormUtils/>
        </Box>
      </div>
    </Router>
  );
}
