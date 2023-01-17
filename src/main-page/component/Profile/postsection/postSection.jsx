import React from 'react'
import './postsection.css'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { FaRegBookmark } from 'react-icons/fa'
import { BsThreeDots } from "react-icons/bs"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
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
                            <div className="spac"></div>
                            <div className="like">
                                <FormControlLabel
                                    control={<Checkbox icon={<AiOutlineHeart color='white' size={25} />}
                                        checkedIcon={<AiFillHeart size={25} />}
                                        name="checkedH" size='medium' style={{ backgroundColor: 'transparent' }} />}
                                /></div>
                            <div className="comment">
                                <FormControlLabel
                                    control={<Checkbox icon={<FaRegComment color='white' size={20} />}
                                        checkedIcon={<FaRegComment color='white' size={20} />}
                                        size='medium' style={{ backgroundColor: 'transparent' }} disableRipple />}
                                />
                            </div>
                            <div className="send">
                                <FormControlLabel
                                    control={<Checkbox icon={<FiSend color='white' size={20} />}
                                        checkedIcon={<FiSend color='white' size={20} />}
                                        size='medium' style={{ backgroundColor: 'transparent' }} disableRipple />}
                                /></div>
                        </div>
                        <div className="right-actionpart">
                            <div className="save">
                                <FaRegBookmark size={20} /></div>
                        </div>
                    </div>
                    <div className="extra">
                        <div className="total-like">100 likes</div>
                        <div className="discription">id emoji</div>
                        <div className="total-comment color-change">view all 'total comment' comment</div>
                        <div className="time color-change">0000</div>
                    </div>
                </div>
            </div>
        </postsection>
    )
}

export default postSection