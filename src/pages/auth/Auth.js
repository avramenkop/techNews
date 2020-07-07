import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import './Auth.css'


export default () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitHandler = (event) => {
    event.preventDefault()
    console.log('data', email, password)
    setIsSubmitted(true)
  }

  useEffect(() => {

    if(!isSubmitted) {
      return
    }

    fetch('https://conduit.productionready.io/api/users/login', {
      method: 'post',
      body: {
        user: {
          email: 'fafafa@gmail.com',
          password: '123'
        }
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setIsSubmitted(false)     //??????
      })
      .catch(error => {
        console.error(error);
        setIsSubmitted(false)     //??????
      })
  })

  return (
    <div className='auth'>
      <div className='container'>
        <div className="auth-wrapper">
          <h1 className='auth__title'>Login</h1>
          <form className='auth-form' onSubmit={submitHandler}>
            <div className='auth-form__field'>
              <input
                id='email'
                type='email'
                placeholder='Email'
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <label htmlFor="email"/>
            </div>
            <div className='auth-form__field'>
              <input
                id='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
              <label htmlFor="password"/>
            </div>
            <button
              className='auth-form__log-in'
              type='submit'
              disabled={isSubmitted}
            >
              Log in
            </button>
            <p>
              Not registered? &nbsp;
              <Link className='auth-form__register-link' to='/register'>Create account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}


