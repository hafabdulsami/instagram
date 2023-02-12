// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get, update,} from "firebase/database";
//import { MdOutlineAlignHorizontalCenter } from "react-icons/md";
import testdata from "./main-page/assest/testdata.png"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8NvhDd6CSxjiPnI2TXorCCzaiCvv4rCo",
  authDomain: "insta-database-dca13.firebaseapp.com",
  databaseURL: "https://insta-database-dca13-default-rtdb.firebaseio.com",
  projectId: "insta-database-dca13",
  storageBucket: "insta-database-dca13.appspot.com",
  messagingSenderId: "38816031417",
  appId: "1:38816031417:web:58d52e6ebcc4aead663168"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const dbRef = ref(db);
var mainUser = null;

/*--------------------get id----------------------------*/
function getid(email) {
  var id = "";
  for (var m = 0; m < email.length; m++) {
    if (email[m] == ".") {
      break;
    }
    id = id + email[m];
  }
  return id
}

function writeUserData(firstName, secondName, email, username, password, startt) {
  let mypromise = new Promise(function (resolve) {
    var id = getid(email);
    var flag
    // const db = getDatabase();
    // const dbref = ref(getDatabase());

    get(child(dbRef, `users/${id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        //flag = true;
      }
      else {
        flag = true
        set(ref(db, "users/" + id), {
          username: username,
          email: email,
          firstName: firstName,
          friendList: startt,
          secondName: secondName,
          password: password,
        });
      }
      resolve(flag);
    }).catch((error) => {
      alert(error);
    });
  });

  return mypromise

  // var flag = false
  // if (check(id)) {
  //   set(ref(db, 'users/' + id), {
  //     username: username,
  //     email: email,
  //     firstName: firstName,
  //     secondName: secondName,
  //     password: password,
  //   });
  //   flag = true
  //   alert("its done my king")
  // }
  // else {
  //   alert("email already exist")
  // }
  // return flag
}

function check(email, password) {
  var id = getid(email);
  let mypromise = new Promise(function (resolve) {
    var flag = {
      status:false,
      User:null
    }
    //const dbRef = ref(getDatabase());

    get(child(dbRef, `users/${id}`)).then((snapshot) => {
      if (snapshot.exists() && snapshot.val().password == password) {
        mainUser = snapshot.val();
        flag.User = mainUser;
        //alert(mainUser.username);
        flag.status = true;
      }
      resolve(flag)
    }).catch((error) => {
      alert(error);
    });
  })
  return mypromise;
  //const starCountRef = ref(db, 'users/' + id );
  //onValue(starCountRef, (snapshot) => {
  //  const data = snapshot.val();
  //  alert(data.email+data.password+"snapchot");
  //  return data ;
}

function LogOut() {
  mainUser = null;
}

function isExist(name) {
  let mypromise = new Promise(function (resolve) {
    var flag = null;
    get(child(dbRef, "users")).then((snapshot) => {
      snapshot.forEach(childSnapshot => {
        if (childSnapshot.val().username == name) {
          flag = childSnapshot.val();
          //alert(flag);
        }
      });
      resolve(flag);
    });
  });
  return mypromise;
}

function gettotalnum() {

  let mypromise = new Promise(function (resolve) {
    var count = 0;
    get(child(dbRef, "users")).then((snapshot) => {
      snapshot.forEach(function () {
        count++
      });
      resolve(count);
    });
  });
  return mypromise;
}

function isFriend(object) {
  //alert(mainUser.friendList.includes(object.username))
  return mainUser.friendList.includes(object.username);
}

function addFriend(object) {
  let mypromise = new Promise(function (resolve) {
    //mainUser = get(child(db,`users/${id}`))
    var id = getid(mainUser.email);
    var obj_id = getid(object.email)
    //alert("fjnvjvv");
    var flag
    var record = getupadate(object, mainUser);
    var record1 = getupadate(mainUser, object);
    // const db = getDatabase();
    // const dbref = ref(getDatabase());
    get(child(dbRef, `users/${id}`)).then((snapshot) => {
      if (snapshot.exists() && obj_id.length != 0) {
        //mainUser = snapshot.val();
        //alert(record.friendList+"1");
        //alert(record1.friendList+"2");
        //alert(mainUser.friendList+"after ref")
        //remove(ref(db, `users/${id}`))
        // writeUserData(mainUser.firstName,mainUser.secondName,mainUser.email,mainUser.username,mainUser.password,record.data.)
        update(ref(db, "users/" + id), record);
        update(ref(db, "users/" + obj_id), record1);
        //alert(mainUser.friendList)
        //set(ref(db,'users/'+id),{
        // friendList:"ho ja bhai"
        //});
        flag = true;
      }
      else {
        //flag = true
      }
      resolve(flag);
    }).catch((error) => {
      alert(error);
    });
  });

  return mypromise
}

function updated(){
  let mypromise = new Promise(function(resolve){
    var id  = getid(mainUser);
    var flag = false;
    get(child(dbRef,"users/"+id)).then((snapshot)=>{
      if(snapshot.exists()){
        mainUser = snapshot.val();
        flag = true;
      }
      resolve(flag)
    })
  })
  return mypromise;
}

function getupadate(object, mainuser) {
  // var ID  = getid(mainuser);
  var arr = [].concat(mainuser.friendList);
  //arr.add(object.email);
  arr.push(object.email);
  if(mainUser.email != object.email )
  {
    mainUser.friendList.push(object.email);
  }
  //alert(mainUser.friendList+"after push")
  //mainUser.friendList.concat(arr);
  return {
    friendList: arr,
  }
}


function mutualFriend(object){
  let mypromise = new Promise(function(resolve){
    var arr =""
    //alert("find2")
    for( var n = 0 ; n< mainUser.friendList.length;n++){

      for(var z  = 0 ; z < object.friendList.length ;z++){
        if(mainUser.friendList[n] == object.friendList[z]){
          arr = arr +mainUser.friendList[n]+","
          //alert(arr);
          break;
        }
      }
    }
    //alert(arr);
    resolve(arr);
  })
  return mypromise;
}

function getStory(){
  var arr = [];
  var m = {
    name:"test1",
    img:"data:image/jpeg;base64,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",
    types:"best-friend",
    ids:"other"
  }
  var z = {
    name:"test2",
    img:"data:image/jpeg;base64,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",
    types:"friend",
    ids:"other"
  }
  var q = {
    name:"test3",
    img:"data:image/jpeg;base64,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",
    types:"friend",
    ids: "me"
  }
  arr.push(z);
  arr.push(m);
  arr.push(m);
  arr.push(m);
  arr.push(m);
  arr.push(m);
  arr.push(m);
  arr.push(q);

  return arr
}

function getposts(){
  var testpost = {
    userprofile:testdata,
    userprofilename:"sami",
    realpost:testdata,
    numoflike:"100",
    numofcomment:"100",
    description:"myName",
    time: "23days"
  }
  var arr = [];
  arr.push(testpost);
  arr.push(testpost);
  arr.push(testpost)
  return arr
}






export { writeUserData, check, gettotalnum, isExist, LogOut, isFriend, addFriend , updated, mutualFriend, getStory, getposts};