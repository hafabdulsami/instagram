import React from "react"
import Header from "../login-page/component/page1_component/header/Header"
import Info from "../login-page/component/page2_component/info/Info"

const page2 = () => {
  
  return (
    <>
      <Header/>
      <Info mess ={["First Name","Second Name","Email","User Name" , "Password" , "save" ]}/>
    </>
  )
}

export default page2