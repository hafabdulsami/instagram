import React, { useState } from "react"
import "./loginn.css"
import { BsEye } from "react-icons/bs"
import { AiFillFacebook } from "react-icons/ai"
import {check, gettotalnum} from "../../../../Firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreator } from "../../../../state"
//import { getDatabase, ref, set, onValue, child, get } from 'firebase/database';

const Loginn = (props) => {
  const Owner = useSelector(state => state.Owner)
  const dispatch = useDispatch()
  
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "", 
  });
  let name, value;
  const logIn = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  }

  function send(e) {
    e.preventDefault();
    console.log(Owner);
    //  const { email, password } = user;
    // var promise = check(email, password);
    // promise.then((flag)=>{
    //   if(flag == true){
    //     // console.log("page change");
    //     navigate("pagenum3")
    //   }
    //   else{
    //     // console.log("nhi chla")
    //   }
    // });
  }
  function test(){
    var gett = gettotalnum();
    gett.then(()=>{
      //alert(count);
    })
  }
  
  return (
    <loginn>
      <div className="login">
        <div className='input email'>
          <input type="text" placeholder={props.mess1} autoComplete="off" value={user.firstName}
            onChange={logIn} name='email' />
        </div>
        <div className='input password'>
          <input type="text" className='field' placeholder={props.mess2} autoComplete="off" name='password'
            value={user.password}
            onChange={logIn} />
          <button className='btn1' onClick={test}><BsEye color='white' /></button>
        </div>
        <div className="button">
          <button className='input btn' onClick={send}> Log In</button>
        </div>
        <div className="button">
          <h2 className='title'>OR</h2>
        </div>
        <div className="button">
          <p className='facebook'><AiFillFacebook />  Log in with Facebook</p>
        </div>
      </div>
    </loginn>
  )
}

export default Loginn