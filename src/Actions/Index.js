export const IncNumber = (number=1) => {
  return {
    type: "Increment",
    payload: number
  };
};
export const DecNumber = (number=1) => {
  return {
    type: "Decrement",
    payload: number
  };
};



export const UpNumber = (number=1) => {
  return {
    type: "Up",
    payload: number
  };
};
export const DownNumber = (number=1) => {
  return {
    type: "Down",
    payload: number
  };
};



export const IncreaseNumber = (number=1) => {
  return {
    type: "IncreaseUp",
    payload: number
  };
};
export const DecreaseNumber = (number=1) => {
  return {
    type: "DecreaseUp",
    payload: number
  };
};