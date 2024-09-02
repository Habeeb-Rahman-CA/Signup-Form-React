import React, { useState } from 'react'


function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigned, setIsSigned] = useState(false)

    //store the data into the local storage
    const handleSignup = () => {
        const user = { name, email, password }
        localStorage.setItem('user', JSON.stringify(user)) //convert the object into JSON string to store Local storage
        alert("Registration successful")
        setIsSigned(true)
        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            <h2>Sign Up</h2>
            {/* OnChange activate the value of an input changes */}
            <input type="text" placeholder='Name' value={name} onChange={(change) => setName(change.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={(change) => setEmail(change.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(change) => setPassword(change.target.value)} />

            <div className='inline'>
                <button className='signbtn' onClick={handleSignup}>Sign Up</button>
                {isSigned && (
                    <span className='message' style={{display: 'flex'}}>Signed</span>
                )}
                
            </div>

        </div>
    )
}
export default Signup