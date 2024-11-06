/**
 * Returns false if input value is falsy, otherwise true.
 */

export function required(){
    return function(name, value){
        if(!value){
            return {
                message: `${name} is a required field`,
                isValid: false,
                name: 'required'
            }
        }

        return {
            isValid: true,
            name: 'required',
            message: ''
        }
    }
}