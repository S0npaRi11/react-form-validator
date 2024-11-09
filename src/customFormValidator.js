export function rangeValidator(rangeStart, rangeEnd){
    return function(name, value){
        if(value > rangeStart && value <= rangeEnd){
            return {
                name:'range',
                message: ``,
                isValid: true
            }
        }else{
            return {
                name:'range',
                message: `${name} is not in the specified range`,
                isValid: false
            }
        }
    }
}