/**
 * Returns false if the input value is less than the specified limit, otherwise true
 * @param {number} number 
 */

export function min(number){
    return function(name, value){
        if(typeof +value === 'number'){
            if(!value || +value < number){
                return {
                    message: `${name} value can't be less than ${number}`,
                    name:'min',
                    isValid: false
                }
            }else{
                return {
                    message: '',
                    name: 'min',
                    isValid: true
                }
            }
        }else{
            // console.error('Min validator requires value to be a number')
            throw new Error('Min validator requires value to be a number')
        }
    }
}