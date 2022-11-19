import React from 'react';
import './styles.css';

export default function Login(){
    return (
            <div className="login-container">
                <selection className="from">
                    <form>
                        <h1>Access your Account</h1>
                        <input placeholder='Username'/>
                        <input type="password" placeholder='Password'/>
                        <button className="button" type="submit">Login</button>
                    </form>
                </selection>
            </div>
    )
}