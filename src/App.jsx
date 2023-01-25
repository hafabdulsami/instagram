import React from "react"
import Page1 from "./pages/page1"
import Page2 from "./pages/page2"
import Pagenum3 from "./pages/Pagenum3"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
        
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Page1/>} />
        <Route path="page2" element = {<Page2/>}/>
        <Route path="Pagenum3" element = {<Pagenum3/>}/>
      </Routes>
    </BrowserRouter>
        
  )
}

export default App