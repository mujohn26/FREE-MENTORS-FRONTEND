export const LOGIN_SUCESS= 'LOGIN';
export const LOGIN_ERROR='ERROR_LOGIN'



import axios from 'axios';


  export const loginUser =  ({email,password}) => async(dispatch)=> {
    dispatch({ type: "LOADING", payload: true });
      try {
        const response= await axios.post('https://freementor26.herokuapp.com/api/v2/auth/signin',{email,password});

const token = response.data.data.token;
localStorage.setItem('token', token);

              dispatch(loginSuccess(response.data.message));
              dispatch({ type: "LOADING", payload: false });
        
      } catch (error) {    
        const errorMessage = error.response.data.error;
        dispatch(loginError(errorMessage));
        dispatch({ type: "LOADING", payload: false });
      }
};



export function loginSuccess(data){  
  
    return{
        type: LOGIN_SUCESS,
        payload:data
    }
}
export function loginError(error){  
  
    return{
        type: LOGIN_ERROR,
        payload:error
    }
}
export function deleteError(){  
  
    return{
        type: LOGIN_ERROR,
        payload:''
    }
}
