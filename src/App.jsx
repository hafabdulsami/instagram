import React from 'react'
import Header from './login-page/component/header/Header'
import Login from './login-page/component/loginn/Loginn'

const App = () => {
    return (
        <>
            <Header/>
            <Login mess1 = "Phone number,username, or email" mess2 ="Password"/>
        </>
    )
}

export default App