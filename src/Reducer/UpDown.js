


const status = {
    initialNumber:0,
    initialState:0,
    initialStatus:0
};

const changetheNumber = (state=status,action)=>{

    switch(action.type){
       case "Increment": return{
         ...state,
         initialNumber: state.initialNumber  + action.payload
        };
       case "Decrement":
         return {
            ...state,
         initialNumber: state.initialNumber  - action.payload
        };

        case "Up" : return {
            ...state,
         initialState: state.initialState  +  action.payload

        }

        case "Down" : return {
            ...state,
         initialState: state.initialState  -  action.payload

        }

        case "IncreaseUp" : return {
            ...state,
         initialStatus: state.initialStatus  +  action.payload

        }

        case "DecreaseUp" : return {
            ...state,
         initialStatus: state.initialStatus  -  action.payload

        }

        default: return status;
    
}
};



// const initialNumber = 0;

// const changetheValue = (state=initialNumber,action)=>{

//     switch(action.type){
//        case "Up": return state+1;
//        case "Down": return state-1;
//        default: return state;
//     }
// }


// const initialStatus = 0;

// const changetheStatus = (state=initialStatus,action)=>{

//     switch(action.type){
//        case "IncreaseUp": return state+1;
//        case "DecreaseUp": return state-1;
//        default: return state;
//     }
// }

export  {changetheNumber};

