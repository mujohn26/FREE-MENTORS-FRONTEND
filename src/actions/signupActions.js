export const SIGNUP_SUCESS= 'SIGNUP';
export const SIGNUP_ERROR='ERROR_SIGNUP'



import axios from 'axios';


  export const signup =  ({firstName,lastName,email,password,address,bio,occupation,expertise}) => async(dispatch)=> {
    dispatch({ type: "LOADING", payload: true });
      try {
        const response= await axios.post('https://freementor26.herokuapp.com/api/v2/auth/signup',{firstName,lastName,email,password,address,bio,occupation,expertise});

              dispatch(signupSuccess(response.data.message));
              dispatch({ type: "LOADING", payload: false });
        
      } catch (error) {    

        const errorMessage = error.response.data.error;

        
        dispatch(signupError(errorMessage));
        dispatch({ type: "LOADING", payload: false });
      }
};



export function signupSuccess(data){  
  
    return{
        type: SIGNUP_SUCESS,
        payload:data
    }
}
export function signupError(error){  
  
    return{
        type: SIGNUP_ERROR,
        payload:error
    }
}
export function deleteError(){  
  
    return{
        type: SIGNUP_ERROR,
        payload:''
    }
}
