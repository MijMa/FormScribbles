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

export function Form({ defaultValues, children, onSubmit }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(
      "do stuff on submit, oh and here's data too: " + JSON.stringify(data)
    );
  };
}

type LabeledCheckBoxProps = {
  name: String,
  label: String,
}

export function LabeledCheckBox({ name, label }: LabeledCheckBoxProps) {
  return (
    <Controller
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

export function Switch({ name }) {
  return (
    <Controller
      name="heliumMix"
      control={control}
      //miten otetaan propseja statesta? ...field
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

export function TextFieldDisabled({
  registername,
  label,
  helpertext,
  defaultValue,
}) {
  return (
    <TextField
      {...register('coordinateW')}
      disabled
      id="filled-disabled"
      label="Latitude"
      defaultValue={defaultValues.coordinateW}
      variant="filled"
      margin="normal"
    />
  );
}

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
