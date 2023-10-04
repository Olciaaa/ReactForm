import React from 'react';
import { useFormContext } from 'react-hook-form';
import { isValid, findInputErrors } from './utils/formCheck';
import { FormHelperText, MenuItem, TextField } from '@mui/material';

const Dropdown = (props) => {
    const {label, id, values, validation} = props;
    const {
        register,
        formState: { errors },
      } = useFormContext()

    const inputError = findInputErrors(errors, label);
    const isInvalid = !isValid(inputError);

    return (
        <>
            <TextField 
                variant="standard"
                style={{ margin: "10px 0" }}
                id={id} 
                name={label} 
                label={label}
                error = {isInvalid}
                defaultValue={""}
                select
                {...register(label, validation)}
                >
                
                {values.map((value) => (
                    <MenuItem key = {value} value = {value}>{value}</MenuItem>
                ))}
            </TextField>
            {isInvalid && <FormHelperText style={{ margin: "10px 0" }} error>Nie spełnione kryteria</FormHelperText>}
        </>
    );
};

export default Dropdown;