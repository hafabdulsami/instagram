import React from 'react'
import './storySection.css'

const storySection = (props) => {
    const m  = 'b-f';
    const z  = 'b'
    return (
        <storysection>
                <div className="whole-story" onClick={props.onClick} >
                    <div className="outer-circle" id={props.n.types}>
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