import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

import './Login.css'

async function loginUser(value) {
    const res = await fetch(`https://retoolapi.dev/B13laa/getusers?user_id=${value.username}&password=${value.password}`)
    return await res.json()
}

function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [err, setErr] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        })
        if (token.length === 0) {
            setErr("no user found")
        } else {
            setToken(token[0]);
        }
    }

    return (
        <div className="login-wrapper">
            <div className='wrap'>

 
            {(err)? <h1>{ err }</h1> : <h1>Login</h1>}
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                    <input className='input' type="text" onChange={e => {
                        setErr("")
                        setUserName(e.target.value)
                    }} required />  
            </label>  
            <label>
                <p>Password</p>
                    <input className='input' type="password" onChange={e => {
                        setErr("")
                        setPassword(e.target.value)
                    }} required />  
            </label>
            <div>
                <button className='view' type="submit" >
                    Submit
                </button>
            </div>    
            </form>
            
            </div>
            </div>
  )
}

Login.prototype = {
    setToken: PropTypes.func.isRequired
}

export default Login