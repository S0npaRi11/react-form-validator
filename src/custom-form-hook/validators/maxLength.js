/**
 * Returns false when length property of input value is greater than specified limit, otherwise true.
 * @param {number} length 
 */

export function maxLength(length){
    if(typeof length !== 'number'){
        // console.error('maxLength requires number as an input')
        throw new Error('maxLength requires number as an input')
    }

    return function(name, value){
        if(!Object.prototype.hasOwnProperty.call(value, "length")){
            // console.error('maxLength validator only works with types that have numeric length property')
            throw new Error('maxLength validator only works with types that have numeric length property')
        }
        if(value.length > length){
            return {
                message: `${name} value can't be of length greater than ${length}`,
                name: 'maxLength',
                isValid: false
            }
        }else{
            return {
                message: '',
                name: 'maxLength',
                isValid: true
            }
        }
    }
}