export function extractFormValues(formValue){
    const values = {};
    for (let name in formValue) {
        values[name] = undefined || formValue[name].value;
    }
    return values;
}