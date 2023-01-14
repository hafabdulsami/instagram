import React , { useState }from 'react'
import Profile from '../main-page/component/Profile/headersection/HeaderSection'
import Story from '../main-page/component/Profile/storysection/storySection'
import Postsection from '../main-page/component/Profile/postsection/postSection'
import PropTypes from 'prop-types';
import {getStory} from '../Firebase'
import { getposts } from '../Firebase';
const Pagenum3 = () => {
    const [usestory, usesetStory] = useState(getStory());
    const [usepost,usesetpost] = useState(getposts());
    return (
        <div className="screen">
            <Profile/>
            <div className="story-section">
             {usestory.map(item => <Story n ={item} />) }
            </div>
            <Postsection reels = "0"/>
        </div>

    )
}

export default Pagenum3