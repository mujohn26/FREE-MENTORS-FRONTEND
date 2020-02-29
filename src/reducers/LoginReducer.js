

const LoginReducer =(state={},action)=>{      
console.log('reducern type:',action.type);

          
    switch (action.type) {
       case 'LOGIN': 
       return{
           ...state,
           payload: action.payload
           
      }
      case 'ERROR_LOGIN': 
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
export default  LoginReducer;