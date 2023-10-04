import React from 'react';
import Input from './Input';
import { useForm } from "react-hook-form";
import { FormProvider } from 'react-hook-form';
import Dropdown from './Dropdown';

const Form = () => {
    const methods = useForm()

    const onSubmit = methods.handleSubmit(data => {
        console.log(data);
        //console.log(!(methods.getValues("Kontynent") === "Europa" && methods.getValues("Nazwisko").length < 2))
        alert('success');
    })

    const requiredValidation = {
        required: {
            value: true,
            message: 'To pole jest wymagane',
        }
        // validate: () => !(methods.getValues("kontynent") === "Europa" && methods.getValues("nazwisko").length < 2)
    }

    const dropdownValidation = {
        validate: () => !(methods.getValues("Kontynent") === "Europa" && methods.getValues("Nazwisko").length < 2)
    }

    return (
        <>
            <FormProvider {...methods}>
            <form
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
                           ></Input>
                <Dropdown label="Kontynent"
                            values = {["Afryka", "Ameryka Południowa", "Ameryka Północna", "Antarktyda", "Australia",
                                "Azja", "Europa"]}
                           id="continent"
                           validation={dropdownValidation}
                           ></Dropdown>
                <button onClick={onSubmit}>Wyślij</button>
            </form>
            </FormProvider>
        </>
    );
};

export default Form;