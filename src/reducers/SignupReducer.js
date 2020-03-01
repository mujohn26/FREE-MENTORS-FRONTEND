

const SignupReducer =(state={},action)=>{      
    switch (action.type) {
       case 'SIGNUP': 
       return{
           ...state,
           payload: action.payload
           
      }
      case 'ERROR_SIGNUP': 
      return{
          ...state,
          errorMessage: action.payload
          
     }
        case 'LOADING':
        return{
        ...state,
        isLoading:action.payload
        }
        default: return state
            

    }
}
export default  SignupReducer;