import React from 'react';
import { useFormContext } from 'react-hook-form';
import { isValid, findInputErrors } from './utils/formCheck';
import { TextField } from '@mui/material';

const TextInput = (props) => {
    const {label, type, id, placeholder, validation} = props;
    const {
        register,
        formState: { errors },
      } = useFormContext()

    const inputError = findInputErrors(errors, label);
    const isInvalid = !isValid(inputError);

    return (
        <TextField
            variant="standard"
            fullWidth
            style={{ margin: "10px 0" }}
            id={id}
            type={type}
            label={label}
            placeholder={placeholder}
            InputLabelProps={{ shrink: true }}
            helperText={inputError.error?.message}
            error = {isInvalid}
            {...register(label, validation)}
        />
    );
};

export default TextInput;
