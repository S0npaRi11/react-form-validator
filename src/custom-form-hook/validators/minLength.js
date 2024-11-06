/**
 * Returns false if the input property of input is less than the specified limit, otherwise true.
 * @param {number} length 
 */

export function minLength(length){
    if(typeof length !== 'number'){
        // console.error('minLength requires number as an input')
        throw new Error('minLength requires number as an input')
    }

    return function(name, value){
        if(!value || !value.length){
            // console.error('minLength validator only works with types that have numeric length property')
            throw new Error('minLength validator only works with types that have numeric length property')
        }
        if(value.length < length){
            return {
                message: `${name} value has to be at least of length ${length}`,
                name: 'minLength',
                isValid: true
            }
        }else{
            return {
                message: '',
                name: 'minLength',
                isValid: true
            }
        }
    }
}