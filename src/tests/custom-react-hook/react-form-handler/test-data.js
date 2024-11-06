export const requiredValidator = (name, value) => ({
    name: "required",
    isValid: value.trim() !== "",
    message: `${name} is required`
})

export const minLengthValidator = (name, value, minLength = 3) => ({
    name: "minLength",
    isValid: value.length >= minLength,
    message: `${name} must be at least ${minLength} characters`,
});

// export function requiredValidator(){
//     return function(name, value){
//         return {
//             name: "required",
//             isValid: value.trim() !== "",
//             message: `${name} is required`
//         }
//     }
// }

// export function minLengthValidator(length = 3){
//     return function(name, value){
//         return {     
//             name: "minLength",
//             isValid: value.length >= length,
//             message: `${name} must be at least ${length} characters`,
//         }
//     }
// }

export const sampleFormStructure = {
    username: {
        value: "",
        validators: [requiredValidator, minLengthValidator],
    },
    email: {
        value: "",
        validators: [requiredValidator],
    },
};