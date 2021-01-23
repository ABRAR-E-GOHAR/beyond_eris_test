
  
  const INIT_STATE = {
   show:true
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case 'Toggle_Sidebar':
        return {
          ...state,
         show:action.payload
        };
    
      default:
        return { ...state };
    }
  };
  