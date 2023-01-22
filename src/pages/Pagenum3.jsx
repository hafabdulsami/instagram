import React, { useState } from 'react'
import Profile from '../main-page/component/Profile/headersection/HeaderSection'
import Story from '../main-page/component/Profile/storysection/storySection'
import Postsection from '../main-page/component/Profile/postsection/postSection'
import PropTypes from 'prop-types';
import { getStory } from '../Firebase'
import { getposts } from '../Firebase';
import Navbarr from '../main-page/component/Profile/navbar/navBar';
import Stories from 'react-insta-stories'
import m from '../main-page/assest/testdata.png'
import z from '../main-page/assest/wp5592301.jpg'
const Pagenum3 = () => {
    var arr = [];
    arr.push(m);
    arr.push(z); 
    const [usestory, usesetStory] = useState(getStory());
    const[usedisplay,usesetDisplay] = useState(false);
    const [usepost, usesetpost] = useState(getposts());
    
    const handleClick = event => {
        alert("hello");
        usesetDisplay(true);
    }

    return (
        <>
            <div className="screen">
                {usedisplay && <Stories
                stories={arr}
                onStoryEnd/>}
                <div className="upper-partn">
                    <Profile />
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
                    <Postsection reels="0" />
                </div>
                <div className="lower-partn">
                        <Navbarr />
                </div>
            </div>
        </>

    )
}

export default Pagenum3