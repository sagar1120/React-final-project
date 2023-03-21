const initialState = {

    loggedIn: false,
};


const MainReducer = (previousState = initialState, action) => {

    if(action.type === 'SET_LOGGED') {

       return {...previousState, loggedIn: !previousState.loggedIn};
    }

    return {...previousState}
  }


export default MainReducer;

