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