import React, { useState } from "react"
import "./info.css"
import { writeUserData, gettotalnum } from "../../../../Firebase"
import { useNavigate } from "react-router-dom"
//import addNewDocument from '../../../../pages/Server'
//import {db} from '../../../../Firebase'
////import {uid} from 'uid';
//import {set,ref} from 'firebase/database' 
//import { initializeApp } from "firebase/app";


const Info = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    secondName: "",
    email: "",
    username: "",
    password: "",
  });


  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  }


  const loadData = async (e) => {
    e.preventDefault();
    var last = ""
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { firstName, secondName, email, username, password } = user
    if ((firstName && secondName && email && username && password) && (email.match(mailformat))) {
      var flag = writeUserData(firstName, secondName, email, username, password, "startt");
      flag.then((flag1) => {
        if (flag1) {
          navigate("/")
        }
        else {
          alert("the email already exist")
          var gett = gettotalnum();
          gett.then((count) => {
            last = count
            setUser({
              firstName: firstName,
              secondName: secondName,
              username: username,
              password: password,
              email: firstName + secondName + last,
            })
          })
        }
      }
      )
    }
    else {
      alert("Email is in wrong format");
    }
    //if (firstName && secondName && email && username && password) {
    //  const res = await fetch("https://insta-database-dca13-default-rtdb.firebaseio.com/data.json",
    //    {
    //      method: "POST",
    //      header: {
    //        "Content-Type": "application/json",
    //      },
    //      body: JSON.stringify({
    //        firstName,
    //        secondName,
    //        email,
    //        username,
    //        password,
    //      }),
    //    });
    //
    // if (res) {
    //   setUser({
    //     firstName: "",
    //     secondName: "",
    //     email: "",
    //     username: "",
    //     password: "",
    //   });
    // }
    //
    //}
    //else {
    //    alert("Fill all the column");
    //}
  };


  //Read


  return (
    <info>
      <div className="main-s">
        <form action="" method="POST">
          <div className="first row">
            <input type="text"
              className='name first'
              autoComplete='off'
              name='firstName'
              placeholder={props.mess[0]}
              value={user.firstName}
              onChange={getUserData}
            />
            <input type="text"
              className='name second'
              autoComplete='off'
              name='secondName'
              placeholder={props.mess[1]}
              value={user.secondName}
              onChange={getUserData}
            />
          </div>
          <div className="third row">
            <input type="email"
              className='email'
              autoComplete='off'
              name='email'
              placeholder={props.mess[2]}
              value={user.email}
              onChange={getUserData}
            />
          </div>
          <div className="fourth row">
            <input type="text"
              className='username'
              autoComplete='off'
              name='username'
              placeholder={props.mess[3]}
              value={user.username}
              onChange={getUserData}
            />
          </div>
          <div className="fifth row">
            <input type="text"
              className='password'
              autoComplete='off'
              name='password'
              placeholder={props.mess[4]}
              value={user.password}
              onChange={getUserData}
            />
          </div>
          <div className="button">
            <button className="row btn" placeholder={props.mess[5]} onClick={loadData}>Save</button>
          </div>
        </form>
      </div>
    </info>
  )
}

export default Info