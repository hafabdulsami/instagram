import React, { useState } from "react"
import Profile from "../main-page/component/Profile/headersection/HeaderSection"
import Story from "../main-page/component/Profile/storysection/storySection"
import Postsection from "../main-page/component/Profile/postsection/postSection"

import { getStory } from "../Firebase"
//import { getposts } from "../Firebase";
import Navbarr from "../main-page/component/Profile/navbar/navBar";
import Stories from "react-insta-stories"
import m from "../main-page/assest/testdata.png"
import z from "../main-page/assest/wp5592301.jpg"
import testdata from "../main-page/assest/testdata.png"

const Pagenum3 = () => {
  var arr = [];
  arr.push(m);
  arr.push(z); 
  const [usestory,usesetstory] = useState(getStory());
  const[usedisplay,usesetDisplay] = useState(false);
  //const [usepost, usesetpost] = useState(getposts());
    
  const handleClick = () => {
    usesetDisplay(true);
  }

  const handleFalse = () => {
    usesetDisplay(false);
  }

  var testpost = {
    userprofile:testdata,
    userprofilename:"sami",
    realpost:testdata,
    numoflike:"100",
    numofcomment:"100",
    description:"myName",
    time: "23days"
  }


  return (
    <>
      <div className="screen">
        {usedisplay && <Stories
          stories={arr}
          onAllStoriesEnd= {handleFalse}
          width = "inherit"/>}
        <div className="upper-partn">
          <Profile header = "Instagram"/>
          <div className="story-section">
            {usestory.map((item, index ) =>{
              return(
                <Story
                  n = {item} 
                  key ={index}
                  onClick = {handleClick}/>
              )
            })}
          </div>
          <Postsection post ={testpost} />
        </div>
        <div className="lower-partn">
          <Navbarr />
        </div>
      </div>
    </>

  )
}

export default Pagenum3