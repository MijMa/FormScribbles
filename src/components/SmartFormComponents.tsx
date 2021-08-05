import {
  Button,
  Checkbox,
  FormControlLabel,
  Switch,
  TextField,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { DatePickerProps } from 'material-ui';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type LabeledCheckBoxProps = {
  name: string,
  label: string
}

export function LabeledCheckBox( {name, label} : DatePickerProps, {control} ) {
  return (
    <Controller
    //control on liitäntä formiin itseensä. Tietää mitä submittaa jne
      control={control}
      name={name}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox {...field} />}
          label={label}
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
