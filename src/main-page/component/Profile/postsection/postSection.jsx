import React from 'react'
import './postsection.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { FaRegBookmark } from 'react-icons/fa'
import { BsThreeDots } from "react-icons/bs"
import testdata from '../../../assest/testdata.png'
import testdata1 from '../../../assest/wp5592301.jpg'

const postSection = (props) => {
    return (
        <postsection>
            <div className="single-post">
                <div className="top-part">
                    <div className="lefttop-section">
                        <div className="postowner-p"><img src={testdata} className="owner-pic" alt="M" /></div>
                        <div className="postowner-n">sami</div>
                    </div>
                    <div className="righttop-section">
                        <div className="different-action"><BsThreeDots /></div>
                    </div>
                </div>
                <div className="img-part"><img src={testdata} alt="post" className="actual-post" /></div>
                <div className="lower-part">
                    <div className="action-part">
                        <div className="left-actionpart">
                            <div className="like"><AiOutlineHeart /></div>
                            <div className="comment"><FaRegComment /></div>
                            <div className="send"><FiSend /></div>
                        </div>
                        <div className="right-actionpart">
                            <div className="save"><FaRegBookmark /></div>
                        </div>
                    </div>
                    <div className="total-like">100 likes</div>
                    <div className="discription">id emoji</div>
                    <div className="total-comment">view all 'total comment' comment</div>
                    <div className="add-comment">
                        <div className="id-ownerpic">
                            <img src="" alt="m" />
                        </div>
                        <div className="add-comment">

                        </div>
                    </div>
                    <div className="time"></div>
                </div>
            </div>
        </postsection>
    )
}

export default postSection