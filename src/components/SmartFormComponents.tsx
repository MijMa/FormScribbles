import {
  Checkbox,
  FormControlLabel,
  Switch,
  TextField,
} from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type LabeledCheckBoxProps = {
  name: string;
  label: string;
};

export function LabeledCheckBox({ name, label }: LabeledCheckBoxProps) {
  const { control } = useFormContext();

  return (
    <Controller
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

type SwitchProps = {
  SwitchName: string;
  //label: string;
};

//Tälle voisi ehkä antaa label-otsikon parametrina
export function SwitchModule({ SwitchName }: SwitchProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={SwitchName}
      control={control}
      render={({ field }) => <Switch {...field} />}
    />
  );
}

type TextFieldProps = {
  TextName: string;
  TextLabel: String;
};

export function TextFieldModule(
  { TextName, TextLabel }: TextFieldProps,
  { ...rest }
) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={TextName}
      render={({ field }) => (
        <TextField
          {...field}
          {...rest}
          label={TextLabel}
          helperText="Ready?"
          variant="outlined"
          margin="normal"
        />
      )}
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
