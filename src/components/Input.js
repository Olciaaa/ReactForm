import React from 'react';
import { useFormContext } from 'react-hook-form';
import { isValid, findInputErrors } from './utils/formCheck';
import InputError from './InputError';

const TextInput = (props) => {
    const {label, type, id, placeholder, validation} = props;
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

                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    {...register(label, validation)}
                />

                {isInvalid && (
                    <InputError
                        message={inputError.error?.message}
                        key={inputError.error?.message}
                    />
                )}
            </label>
        </>
    );
};

export default TextInput;
