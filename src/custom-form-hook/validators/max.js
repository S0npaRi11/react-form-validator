/**
 * Returns false if input value is greater than the specified limit, otherwise true. 
 * @param {number} number max limit
 */

export function max(number){
    return function(name, value){
        if(typeof +value === 'number'){
            if(!value || +value > number){
                return {
                    message: `${name} value can't be greater than ${number}`,
                    name:'max',
                    isValid: false
                }
            }else{
                return {
                    message: '',
                    name: 'max',
                    isValid: true
                }
            }
        }else{
            // console.error('Max validator requires value to be a number')
            throw new Error('Max validator requires value to be a number')
        }
    }
}