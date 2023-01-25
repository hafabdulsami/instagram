import React from "react"
import Header from "../login-page/component/page1_component/header/Header"
import Login from "../login-page/component/page1_component/loginn/Login"
import Signup from "../login-page/component/page1_component/signup/Signup"

const page1 = () => {
  return (
    <>
      <Header/>
      <Login mess1 = "Phone number,username, or email" mess2 ="Password"/>
      <Signup/>
    </>
  )
}

export default page1