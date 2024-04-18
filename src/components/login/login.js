import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../features/auth/authSlice';
import Main from '../main/main';
import styles from './login.module.css'

function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [active, setActive] = useState(false);
    const data = useSelector(state => state.auth);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const handleSubmit = (e) => {
        setActive(true);
        e.preventDefault();
        if(password.length >= 8) {
            alert('Password must be at least 8 characters short');
            return;
        }
        dispatch(setCredentials({ user: username, token: 'jwt-token' })); 
        setUsername('');
        setPassword('');
      };

    const handleName = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    if(isAuthenticated) {
        return <Main />
    }

    return (
        <div className={styles.loginContainer}>
            <div>
                <div>
                    <h1>Login/Register</h1>
                </div>
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <input type="text" placeholder="Username" value={username} onChange={handleName} required/>
                    <input type="password" placeholder="Password" value={password} onChange={handlePassword} required/>
                </form>
                <div className={styles.btn}> 
                    <button>Cancel</button>
                    <button onClick={handleSubmit}>Log In</button>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default Login;
