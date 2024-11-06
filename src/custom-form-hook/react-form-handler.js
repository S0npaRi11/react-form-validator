import { useState, useEffect } from "react";

export function initialzeFormErrors(formStructure){
    const errors = {};
    for (let name in formStructure) {
        if (formStructure[name].validators) {
            formStructure[name].validators.forEach(validatorFn => {
                const result = validatorFn(name, formStructure[name].value);
                if (!result.isValid) {
                    errors[name] = {
                        ...errors[name],
                        [result.name]: result.message,
                    };
                }
            });
        }
    }
    return errors;
}

export function validateFormErrors(name, value, validators, currentErrors){
    let updatedErrors = { ...currentErrors };
    
    if (validators) {
        let allValid = true;
        validators.forEach(validationFn => {
            const result = validationFn(name, value);
            if (!result.isValid) {
                updatedErrors[name] = {
                    ...updatedErrors[name],
                    [result.name]: result.message,
                };
                allValid = false

            } else if (updatedErrors[name]) {
                // eslint-disable-next-line no-unused-vars
                const { [result.name]: _, ...remainingErrors } = updatedErrors[name];
                updatedErrors[name] = remainingErrors;
            }
        });

        if(allValid){
            delete updatedErrors[name]
        }
    }

    return updatedErrors;
}

export function extractFormValues(formValue){
    const values = {};
    for (let name in formValue) {
        values[name] = undefined || formValue[name].value;
    }
    return values;
}

export function patchFormValues(formValue, patchObject){
    const updatedForm = { ...formValue };
    for (let name in patchObject) {
        if (updatedForm[name]) {
            updatedForm[name] = { ...updatedForm[name], value: patchObject[name] };
        }
    }
    return updatedForm;
}

export function useReactFormHandler(
    formStructure
){
    const [formValue, setFormValue] = useState(formStructure)
    const [errors, setErrors] = useState(() => initialzeFormErrors(formStructure))

    function handleForm(event){
        const {name, value} = event.target
    
        setFormValue(prevForm => ({
            ...prevForm,
            [name]: {...prevForm[name], value}
        }))
    }

    function patchValue(patchObject) {
        const updatedForm = patchFormValues(formValue, patchObject);
        setFormValue(updatedForm);

        // validations for patched values
        let updatedErrors = {...errors}
        for (let name in patchObject) {
            updatedErrors = validateFormErrors(name, patchObject[name], formValue[name].validators, updatedErrors);
        }
        setErrors(updatedErrors)
    }

    function form(){
        return extractFormValues(formValue)
    }

    useEffect(() => {
        let updatedErrors = { ...errors };
        for (let name in formValue) {
            updatedErrors = validateFormErrors(name, formValue[name].value, formValue[name].validators, updatedErrors);
        }
        setErrors(updatedErrors);
    }, [formValue]);

    return [form, handleForm, errors, patchValue]
}
