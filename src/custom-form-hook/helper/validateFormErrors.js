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