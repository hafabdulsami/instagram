import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SiMessenger } from 'react-icons/si';
import './headerSection.css';
//import { isExist, LogOut, isFriend, addFriend, updated, mutualFriend } from '../../../../Firebase';
//import { update } from 'firebase/firestore'


const HeaderSection = (props) => {

  return (
    <headersection>

        <div className="sub-header">
          <div className="name1">
            Instagram
          </div>
          <div className="messenger">
            <SiMessenger size={25} />
          </div>
        </div>


    </headersection>
  )
}

export default HeaderSection