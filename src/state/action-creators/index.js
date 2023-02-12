import check from "../../Firebase/check";
export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: "logout",
      User: null,
    });
  };
};

export const login = (email, password) => {
  var promise = check(email, password);
  promise.then((flag) => {
    if (flag.status == true) {
      return (dispatch) => {
        dispatch({
          type: "login",
          User: flag.User,
        });
      };
    } else {
      return(dispatch) =>{
        dispatch({
          type:"login",
          User:null
        })
      }
    }
  });
};
