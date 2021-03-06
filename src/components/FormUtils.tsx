import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import React from 'react';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useStyles } from '../styles';
import { TextFieldModule } from './SmartFormComponents';

const defaultValues = {
  heliumMix: false,
  aknowledged: false,
  bearings: false,
  airshipStatus: '',
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
  const methods = useForm<FormValues>({
    defaultValues,
  });
  const classes = useStyles();
  const [state, setState] = React.useState({
    aknowledged: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(
      "do stuff on submit, oh and here's data too: " + JSON.stringify(data)
    );
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormControl margin="normal">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Box bgcolor="secondary.main" color="secondary.contrastText" p={1}>
              Helium mix:
            </Box>
            <Grid item className={classes.formItemSpacing}>
              Inoptimal
            </Grid>
            <Grid item>
              <Controller
                name="heliumMix"
                control={methods.control}
                render={({ field }) => <Switch {...field} />}
              />
            </Grid>
            <Grid item>Optimal</Grid>
          </Grid>

          <Controller
            control={methods.control}
            name="aknowledged"
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label="Aknowledged:"
                labelPlacement="start"
              />
            )}
          />

          <Controller
            control={methods.control}
            name="bearings"
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label="Bearings set:"
                labelPlacement="start"
              />
            )}
          />

          {/* No ni, tähän pykätään komponentti ja katotaan miten menee */}

          <TextFieldModule
            TextName="airshipStatus"
            TextLabel="airship status"
          />

          <Controller
            control={methods.control}
            name="airshipStatus"
            render={({ field }) => (
              <TextField
                {...field}
                label="Airship status"
                helperText="Ready?"
                variant="outlined"
                margin="normal"
              />
            )}
          />

          {methods.formState.errors.airshipStatus && (
            <span>This field is required</span>
          )}

          <Grid component="label" container alignItems="center" spacing={0}>
            <TextField
              {...methods.register('coordinateW')}
              disabled
              id="filled-disabled"
              label="Latitude"
              defaultValue={defaultValues.coordinateW}
              variant="filled"
              margin="normal"
            />
            <TextField
              className={classes.formItemSpacing}
              {...methods.register('coordinateS')}
              disabled
              id="filled-disabled"
              label="Longitude"
              defaultValue={defaultValues.coordinateS}
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
    </FormProvider>
  );
}
