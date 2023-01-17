const initialState = 0;

const changetheNumber = (state=initialState,action)=>{

    switch(action.type){
       case "Increment": return state+1;
       case "Decrement": return state-1;
       default: return state;
    }
}



const initialNumber = 0;

const changetheValue = (state=initialNumber,action)=>{

    switch(action.type){
       case "Up": return state+1;
       case "Down": return state-1;
       default: return state;
    }
}


const initialStatus = 0;

const changetheStatus = (state=initialStatus,action)=>{

    switch(action.type){
       case "IncreaseUp": return state+1;
       case "DecreaseUp": return state-1;
       default: return state;
    }
}

export  {changetheNumber,changetheValue,changetheStatus};

