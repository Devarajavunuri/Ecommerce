import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function SignupPage() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <form className="signup-form">
        <label className="signup-label">Name:</label>
        <input type="text" className="signup-input" placeholder="Enter your name" />
        <br />
        <label className="signup-label">Email:</label>
        <input type="email" className="signup-input" placeholder="Enter your email" />
        <br />
        <label className="signup-label">Password:</label>
        <input type="password" className="signup-input" placeholder="Enter your password" />
        <br/>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p className="signup-footer">Already have an account? <a href="/SigninPage">Sign In</a></p>
    </div>
    </>
  )
}

export default SignupPage
