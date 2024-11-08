import { useState, useEffect } from "react";
import { initialzeFormErrors } from "./helper/initializeFormErrors";
import { validateFormErrors } from "./helper/validateFormErrors";
import { extractFormValues } from "./helper/extractFormValues";
import { patchFormValues } from "./helper/patchFormValues";

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
