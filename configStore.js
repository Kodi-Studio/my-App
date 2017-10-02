import {createStore, applyMiddleware  } from 'redux';


export function select(param){
    return { type:'SELECT_SUB' , param }
}

export function selectSub(param) {

    return param;

}


/// REDUX
export default store = createStore( (state={user:{login:'--', password:'' }} , action

    /// reducers

    /// preloadedSate

    /// middleware
   

    
) => {

    //return 'toto';
    //return state.user.login+ '--'+JSON.stringify(action)
    //return state.user.login;
   //console.log(action)
    switch (action.type) {
        case 'SELECT_SUB' :
            return selectSub(action.param);
            break;
    
        default:
            return 'zut';
            break;
    }
    
});


