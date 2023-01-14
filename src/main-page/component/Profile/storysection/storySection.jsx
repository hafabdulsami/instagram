import React from 'react'
import './storySection.css'

const storySection = (props) => {
    return (
        <storysection>
                <div className="whole-story">
                    <div className="outer-circle">
                        <div className="inner-circle">
                            <img className='circle-profilepic' src={props.n.img} alt="hello"/>
                        </div>
                    </div>
                    <div className="story-name">
                        {props.n.name}
                    </div>
                </div>
        </storysection>
    )
}

export default storySection