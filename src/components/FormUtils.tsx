import React from 'react';
import {
  Box, 
  Typography, 
  Grid, 
  TextField, 
  FormControlLabel,
  Checkbox, 
  FormControl, 
  Switch
} from '@material-ui/core';


export default function FormUtils() {
  
  const [state, setState] = React.useState({
    checkedA: false,
  })
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

    return (

      <div>
        <FormControl>
          <Grid component="label" container alignItems="center" spacing={1}>
          <Box bgcolor="secondary.main" color="secondary.contrastText" p={1}>
                            Helium mix:
            </Box>
            <Grid item>Inoptimal</Grid>
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            <Grid item>Optimal</Grid>
          </Grid>
          <FormControlLabel
            value=""
            control={<Checkbox color="primary" />}
            label="Aknowledged:"
            labelPlacement="start"
          />
          <FormControlLabel
            value=""
            control={<Checkbox color="primary" />}
            label="Bearings:"
            labelPlacement="start"
          />
          
          <TextField 
            label="Airship" 
            helperText="Ready?" 
            variant="outlined"
          />

          <Grid component="label" container alignItems="center" spacing={0}>
            <TextField
              disabled
              id="filled-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="filled"
            />
            <TextField
              disabled
              id="filled-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="filled"
            />
          </Grid>
        </FormControl>
      

        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
                            primary.main
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box bgcolor="secondary.main" color="secondary.contrastText" p={2}>
              secondary.main
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box bgcolor="error.main" color="error.contrastText" p={2}>
                           error.main
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box bgcolor="warning.main" color="warning.contrastText" p={2}>
                           warning.main
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box bgcolor="info.main" color="info.contrastText" p={2}>
                       info.main
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box bgcolor="success.main" color="success.contrastText" p={2}>
                          success.main
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box bgcolor="text.primary" color="background.paper" p={2}>
                         text.primary
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box bgcolor="text.secondary" color="background.paper" p={2}>
                           text.secondary
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box bgcolor="text.disabled" color="background.paper" p={2}>
                            text.disabled
            </Box>
          </Grid>
        </Grid>
      </div>
  );
}