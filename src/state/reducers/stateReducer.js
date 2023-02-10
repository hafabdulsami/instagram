const reducer = (state=0,action) => {
    if(action.type === 'logout'){
        return null;
    }
    else if(action.type === 'login'){
        return 'abdulsami'
    }
    else{
        return state
    }
}

export default reducer
