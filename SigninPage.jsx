import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignupPage from './SignupPage'

function SigninPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="signin-container">
      <h2 className="signin-heading">Sign In</h2>
      <form className="signin-form">
        <label className="signin-label">Email:</label>
        <input type="email" className="signin-input" placeholder="Enter your email" />
        <br/>
        <label className="signin-label">Password:</label>
        <input type="password" className="signin-input" placeholder="Enter your password" />
        <br/>
        <button type="submit" className="signin-button">Sign In</button>
      </form>
      <p className="signin-footer">Don't have an account? <a href="./SignupPage.jsx">Sign Up</a></p>
    </div>
    </>
  )
}

export default SigninPage
