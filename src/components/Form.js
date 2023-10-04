import React, { useState } from 'react';
import Input from './Input';
import { useForm } from "react-hook-form";
import { FormProvider } from 'react-hook-form';
import Dropdown from './Dropdown';
import getAge from './utils/ageCalculation';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';

const Form = (props) => {
    const methods = useForm()
    const [submitActive, setSubmitActive] = useState(false);

    const onSubmit = methods.handleSubmit(data => {
        alert('success');
    })

    const requiredValidation = {
        required: {
            value: true,
            message: 'To pole jest wymagane',
        }
    }

    const dropdownValidation = {
        validate: () => !(methods.getValues("Kontynent") === "Europa" && methods.getValues("Nazwisko").length < 2)
    }

    const dateValidation = {
        onChange: (e) => {
            let date_provided = new Date(e.target.value);
            setSubmitActive( date_provided > new Date());
            props.changeFontSize(getAge(date_provided) > 60);
        }
    }

    return (
        <>
            <FormProvider {...methods}>
            <FormControl
                style = {{width: "400px"}}
                margin="normal"
                onSubmit={e => e.preventDefault()}
                noValidate
                className="container"
            >
                <Input label="Imię"
                           type="text"
                           id="firstname"
                           placeholder="Wpisz swoje imię..."
                           validation={requiredValidation}
                           ></Input>
                <Input label="Nazwisko"
                           type="text"
                           id="surname"
                           placeholder="Wpisz swoje nazwisko..."
                           ></Input>

                <Input label="Data urodzenia"
                           type="date"
                           id="date"
                           validation={dateValidation}
                           ></Input>
                <Dropdown label="Kontynent"
                            values = {["Afryka", "Ameryka Południowa", "Ameryka Północna", "Antarktyda", "Australia",
                                "Azja", "Europa"]}
                           id="continent"
                           validation={dropdownValidation}
                           ></Dropdown>
                <Button variant="outlined" onClick={onSubmit} disabled={submitActive}>Wyślij</Button>
            </FormControl>
            </FormProvider>
        </>
    );
};

export default Form;