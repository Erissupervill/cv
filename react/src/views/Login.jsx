import { Link } from 'react-router-dom';
import {useRef} from 'react';
import axiosClient from '../axios-client.js';

export default function Login() {
    const username = useRef();
    const password = useRef();

    
    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload={
            username: username.current.value,
            password: password.current.value
        }
        console.log(payload);
        axiosClient.post('/login',payload)
        .then(({data})=>{

        })
    }

    return (
        <>

            <div className="container">
                <form onSubmit={onSubmit}>
                    <h2>Log in</h2>

                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input ref={username} type="text" id="username" name="username" placeholder="Enter your username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input ref={password} type="password" id="password" name="password" placeholder="Enter your password" required />
                    </div>
                    <div className="form-group">
                        <button type="submit">Sign Up</button>
                        <span>Already have an account?<Link to="/signup"> Sign in</Link></span>
                    </div>
                </form>
            </div>


        </>
    )
}