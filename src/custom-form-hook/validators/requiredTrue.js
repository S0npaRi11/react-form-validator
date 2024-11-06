/**
 * Validates the input value against boolean value true. Useful when validating checkboxes. 
 */

export function requiredTrue(){
    return function(name, value){
        if(value !== true){
            return {
                message: `${name} has to be true`,
                name: 'requiredTrue',
                isValid: false
            }
        }else{
            return {
                message: '',
                name: 'requiredTrue',
                isValid: true
            }
        }
    }
}