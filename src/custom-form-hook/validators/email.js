/**
 * A Validator for email values. Input email is validated against the regex mentioned here.
 * https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
 */

export function email(){
    //regex taken from https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
    // eslint-disable-next-line no-useless-escape
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    return function(name, value){
        if(!EMAIL_REGEX.test(value)){
            return {
                message: `${name} is not a valid email`,
                name: 'email',
                isValid: false
            }
        }else{
            return {
                message: '',
                name: 'email',
                isValid: true
            }
        }
    }

}