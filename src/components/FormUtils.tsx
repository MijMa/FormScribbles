import React from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Box, 
  Typography, 
  Grid, 
  TextField, 
  FormControlLabel,
  Checkbox, 
  FormControl, 
  Switch,
  Button,
  FormHelperText,
  FormGroup,
  FormLabel,
} from '@material-ui/core';
import { useStyles } from '../styles';
import { Send } from '@material-ui/icons';

const defaultValues = {
  heliumMix: false,
  aknowledged: false,
  bearings: false,
  airshipStatus: "",
  coordinateW: "N: 40° 41' 21.2892''",
  coordinateS: "W: 74° 2' 40.2072''",
};

type FormValues = {
  heliumMix: boolean;
  aknowledged: boolean;
  bearings: boolean;
  airshipStatus: String;
  coordinateW: String;
  coordinateS: String;
};

export default function FormUtils() {

  const { register, handleSubmit, control, formState: {errors} } = useForm<FormValues>();
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log("do stuff on submit, oh and here's data too: " + data)
    //Data on JSON-muodossa mutta miksi switcheistä ei tule dataa ja miksi defaulttidataa ei oteta?
    console.log("do stuff on submit, oh and here's data too: " + JSON.stringify(data))
  }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl margin="normal">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Box bgcolor="secondary.main" color="secondary.contrastText" p={1}>
              Helium mix:
            </Box>
            <Grid item className={classes.formItemSpacing}>Inoptimal</Grid>
            <Grid item>
              <Controller
                name="heliumMix"
                control={control}
                render={({ field }) => <Switch {...field} />}
                defaultValue={false}
              />
            </Grid>
            <Grid item>Optimal</Grid>
          </Grid>
          <FormControlLabel
            control={
              <Checkbox
              /*registering is enough to get the empty string but it's not what we want */
              {...register("aknowledged")}
              defaultValue="false"
              />
            }
            label="uncontrolled:"
            labelPlacement="start"
          />

          <FormControlLabel
            {...register("bearings")}
            control={<Checkbox color="primary" />}
            label="Bearings set:"
            labelPlacement="start"
          />
          
          <TextField 
            {...register("airshipStatus")}
            label="Airship status" 
            helperText="Ready?" 
            variant="outlined"
            margin="normal"
          />
          {errors.airshipStatus && <span>This field is required</span>}

          <Grid component="label" container alignItems="center" spacing={0}>
            <TextField
              {...register("coordinateW")}
              disabled
              id="filled-disabled"
              label="Latitude"
              defaultValue="N: 40° 41' 21.2892''"
              variant="filled"
              margin="normal"
            />
            <TextField className={classes.formItemSpacing}
              {...register("coordinateS")}
              disabled
              id="filled-disabled"
              label="Longitude"
              defaultValue="W: 74° 2' 40.2072''"
              variant="filled"
              margin="normal"
            />
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Send />}
          >
            Send
          </Button>
        </FormControl>
      </form>
  );
}