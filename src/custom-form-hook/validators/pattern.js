/**
 * Validates the input value against given RegEx pattern.
 * @param {RegExp} regExPattern 
 */

export function pattern(regExPattern){
    return function(name, value){
        if(!regExPattern.test(value)){
            return {
                message: `${name} is not in the specified pattern`,
                isValid: false,
                name: 'pattern'
            }
        }
        return {
            isValid: true,
            name: 'pattern',
            message: ''
        }
    }
}