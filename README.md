# React Form State Handler

`react-form-state-handler` is a react package that is crated to manage and validate form state easily. It simplifies the process of adding validation rules, pre-defined and custom and displying validation errors. It shifts all the form control from the JSX to the hook itself, making the JSX code leaner and more readable. 

## Installation

```
npm install react-form-state-handler
```

## Usage

The `useReactFormHandler` hook provides a simple way to manage form state and validation. You define your form fields and validation rules using the provided `Validators`, and the hook handles the rest, including updating form values and managing validation errors.

```
import { useReactFormHandler, Validators } from 'react-form-state-handler';
```

### Example: Creating a Form with Validation

```javascript
import { useReactFormHandler, Validators } from 'react-form-state-handler';

function App() {
  const [form, handleForm, errors, patchValue] = useReactFormHandler({
    name: {
      value: '',
      validators: [Validators.required(), Validators.minLength(5)],
    },
    email: {
      value: '',
      validators: [Validators.required(), Validators.email()],
    },
    password: {
      value: '',
      validators: [Validators.required(), Validators.pattern(/[A-Z]/)],
    },
  });

  function handle(event) {
    handleForm(event);
  }

  function submit(event) {
    event.preventDefault();
    console.log(form()); // Submit form values
  }

  return (
    <form>
      <div>
        <label htmlFor="name"> Name </label>
        <input type="text" name="name" value={form().name || ''} onChange={handle} /> <br />
        {errors?.name?.required && <span className="error"> {errors?.name?.required} </span>} <br />
        {errors?.name?.minLength && <span className="error"> {errors?.name?.minLength} </span>}
      </div>

      <div>
        <label htmlFor="email"> Email </label>
        <input type="text" name="email" value={form().email || ''} onChange={handle} /> <br />
        {errors?.email?.required && <span className="error"> {errors?.email?.required} </span>} <br />
        {errors?.email?.email && <span className="error"> {errors?.email?.email} </span>}
      </div>

      <div>
        <label htmlFor="password"> Password </label>
        <input type="text" name="password" value={form().password || ''} onChange={handle} /> <br />
        {errors?.password?.required && <span className="error"> {errors?.password?.required} </span>} <br />
        {errors?.password?.pattern && <span className="error"> {errors?.password?.pattern} </span>}
      </div>

      <div>
        <button onClick={submit} disabled={JSON.stringify(errors) !== "{}"}> Submit </button>
      </div>
    </form>
  );
}

export default App;

```


#### Explaination

* **Setup Form Fields** : In `useReactFormHandler`, define each field with an initial `value` and an array of `validators`:
* `Validators.required()`: Ensures the field is not empty.
* `Validators.minLength(n)`: Ensures the field’s length is at least `n`.
* `Validators.email()`: Validates an email format.
* `Validators.pattern(regex)`: Validates that the field matches a regular expression pattern.
* **Handling Form Changes** : Use `handleForm` to update the form's state based on user input.
* **Submitting Form Data** : The `form()` function returns an object containing all current form values, which you can submit or process.
* **Displaying Errors** : Each field's error messages are available in the `errors` object, allowing you to display validation feedback.
* **Conditional Submit Button** : The submit button is disabled when there are validation errors, ensuring that only valid data can be submitted.

### Validators

Following validators are available:

* `Validators.required()`: Checks if the field is filled.
* `Validators.minLength(length)`: Checks if the field's length is at least the specified `length`.
* `Validators.maxLength(length)`: Ensures the field’s length is not greater than `length`.
* `Validators.email()`: Validates email format.
* `Validators.pattern(regex)`: Validates the field against a custom regex pattern.
* `Validators.min(value)`: Ensures the field's value is at least `value`.
* `Validators.max(value)`: Ensures the field's value is no more than `value`.
* `Validators.requiredTrue()`: Checks if a checkbox is checked or not.

You can also create custom validators and use them to validate input fields seamlessly.

For creating a custom validator, you'll create a function which returns a function with name and value arguments. Here, name is the form field name and value is the value of that form field. This function will return an object based on the condition that'll determine the validation logic.

#### Example

```javascript
export function customvalidator(rangeStart, rangeEnd){
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
```


Here, the return objected object has to have 3 properties:

1. `isValid` flag: which tells the hook of the validation is passed or not.
2. `name` attribute: This attribute will show up in `error` when this validation fails.
3. `message` attribute: This is the message you'll see in `errors` when the validation fails.

after that, you can mention this validator in the same manner in validators array for the required form field.

```javascript
const [form, handleForm, errors,patchValue] = useReactFormHandler({
    ...
    number: {
      value: 12,
      validators: [customValidator(5,10)]
    },
    ...
  })
```


## API Reference

**`useReactFormHandler(formStructure)`**

**Parameters** : `formStructure` - An object representing the form's initial structure, values, and validators.

**Returns** : `[form, handleForm, errors, patchValue]`

* `form`: A function that returns the current form values.
* `handleForm`: A function to update form values on change.
* `errors`: An object containing validation error messages for each field.
* `patchValue`: A function to update specific form fields programmatically.


Feel free to fork and modify this hook to your requirements or if you can add any new features to it.
