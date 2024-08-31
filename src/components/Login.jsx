import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        const user = JSON.parse(localStorage.getItem('user')) //convert JSON String back to object.

        //matching the signup data to login data
        if (user && user.email === email && user.password === password) {
            alert(`Welcome Back ${user.name}`)
        } else {
            alert("You are not registered yet!!")
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="Email" placeholder='Email' value={email} onChange={(change) => setEmail(change.target.value)} />
            <input type="Password" placeholder='Password' value={password} onChange={(change) => setPassword(change.target.value)} />
            <button className='loginbtn' onClick={handleLogin}>Log In</button>
        </div>
    )
}

export default Login