/**
 * An empty validator that always returns true
 */

export function empty(){
    // eslint-disable-next-line no-unused-vars
    return function(name, value){
        return {
            message: '',
            name: '',
            isValid: true
        }
    }
}