
// import './App.css'
import React from 'react'
import { useReactFormHandler } from './custom-form-hook/react-form-handler'
import { Validators } from './custom-form-hook/validators'
import { rangeValidator } from './customFormValidator'

function App() {

  const [form, handleForm, errors,patchValue] = useReactFormHandler({
    name: {
      validators: [Validators.required(), Validators.minLength(5)],
      value: ''
    },
    email:{},
    password: {
      validators:[Validators.pattern(/[A-Z]/)]
    },
    number: {
      value: 12,
      validators: [rangeValidator(5,10)]
    }
  })

  function handle(event){
    handleForm(event)
  }

  function submit(event){
    event.preventDefault()
  }

  function patchValues(event){
    event.preventDefault()
    patchValue({
      name: 'manish',
      email: 'manish@email.com',
      password: 'ABCD'
    })
  }

  return (
    <>
      React Form Handler Hook
      <form>
        <input type="text" name="name"  value={form().name || ''} onChange={handle} /> <br />
        {errors?.name && <span> {errors.name.required} </span>} <br />
        <input type="email" name="email" value={form().email || ''} onChange={handle} /> <br />
        <input type="password" name="password" value={form().password || ''} onChange={handle} /> <br />
        {errors?.password && <span> {errors.password.pattern} </span>} <br />
        <input type="number" name="number" value={form().number || 0} onChange={handle} />


        <button onClick={submit}> submit </button>
        <button onClick={patchValues}> Patch Values </button>

        Form Errors <br />
        {JSON.stringify(errors, null, 2)}
      </form>
    </>
  )
}

export default App
