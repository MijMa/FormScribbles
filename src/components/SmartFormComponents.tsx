import {
  Button,
  Checkbox,
  FormControlLabel,
  Switch,
  TextField,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type LabeledCheckBoxProps = {
  name: String,
  label: String,
}

export function LabeledCheckBox({ name, label, control}) {
  return (
    <Controller
    //control on liitäntä formiin itseensä. Tietää mitä submittaa jne
      control={control}
      name={name}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox {...field} />}
          label="Aknowledged:"
          labelPlacement="start"
        />
      )}
    />
  );
}

export function Switch({ name, control }) {
  return (
    <Controller
      name="heliumMix"
      control={control}
      render={({ field }) => <Switch {...field} />}
    />
  );
}

export function TextField({ register, name, ...rest }) {
  return (
    <TextField
      {register(name)}
      {...rest}
    />
  );
}

//ehkä? ainakin voisi katsoa tyylisääntöjä
/*
export function Button({}) {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      className={classes.button}
      endIcon={<Send />}
    >
      Send
    </Button>
  );
}
*/
