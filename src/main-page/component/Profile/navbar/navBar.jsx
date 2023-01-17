import React from 'react'
import './navbarr.css'
import { AiOutlineHome, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'
import { RiAddBoxLine } from 'react-icons/ri'
import { MdPersonOutline } from 'react-icons/md'

const navBar = () => {
  return (
    <navbar>
      <div className="navBar-box">
        <div className="navBar-ele">
          <div className="home-icons"><AiOutlineHome /></div>
          <div className="search-icons"><AiOutlineSearch /></div>
          <div className="add-icons"><RiAddBoxLine /></div>
          <div className="notification-icons"><AiOutlineHeart /></div>
          <div className="profilepage-icons"><MdPersonOutline /></div>
        </div>

      </div>
    </navbar>
  )
}

export default navBar