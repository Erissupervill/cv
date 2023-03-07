import { Link } from 'react-router-dom';
import { useRef } from 'react';
import axiosClient from '../axios-client.js';
import { useStateContext } from '../contexts/ContextProvider.jsx';

function Signup() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const { setUser, updateToken } = useStateContext()


  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value
    }
    console.log(payload);
    axiosClient.post('/login', payload)
      .then(({ data }) => {
        setUser(data.user)
        updateToken(data.token)

      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      })
  }
  return (

    <>
      <div className="container">
        <form onSubmit={onSubmit}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input ref={username} type="text" id="username" name="username" placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input ref={email} type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input ref={password} type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input ref={confirmPassword} type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
          </div>
          <div className="form-group">
            <button type="submit">Sign Up</button>
            <span>Already a member? <Link to="/login"> Sign in here</Link></span>
          </div>
        </form>
      </div>

    </>

  );
}

export default Signup;