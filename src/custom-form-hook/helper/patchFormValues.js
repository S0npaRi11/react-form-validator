export function patchFormValues(formValue, patchObject){
    const updatedForm = { ...formValue };
    for (let name in patchObject) {
        if (updatedForm[name]) {
            updatedForm[name] = { ...updatedForm[name], value: patchObject[name] };
        }
    }
    return updatedForm;
}