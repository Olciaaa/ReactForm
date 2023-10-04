import React from 'react';
import { useFormContext } from 'react-hook-form';
import { isValid, findInputErrors } from './utils/formCheck';
import InputError from './InputError';

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
            <label>
                {label}

                <select id={id} name={label} {...register(label, validation)}>
                    {values.map((value) => (
                        <option key = {value} value = {value}>{value}</option>
                    ))}
                </select>

                {isInvalid && (
                    <InputError
                        message={"Nie spełnione kryteria"}
                        key={"Nie spełnione kryteria"}
                    />
                )}
            </label>
        </>
    );
};

export default Dropdown;