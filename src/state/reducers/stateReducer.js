 
const reducer = (state=0,action) => {
    if(action.type === 'logout'){
        return action.User;
    }
    else if(action.type === 'login'){
        return action.User
    }
    else{
        return state
    }
}

export default reducer
