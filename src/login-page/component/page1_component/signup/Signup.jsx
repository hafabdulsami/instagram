import React from "react"
import "./signup.css"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <signup>
      <div className="footer">
        <p>Don&apos;t you have an account? <Link to="/page2"><b>Signup</b></Link></p>
      </div>
    </signup>
  )
}

export default Signup
