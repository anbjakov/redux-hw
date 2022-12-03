import {DEPOSIT,WITHDRAW,RESET} from "./actionTYPES";

const intitialState = {
    amount: 0,
    error:""
}

const reducer = (state=intitialState,action) =>{
    switch (action.type) {
        case DEPOSIT:{
            console.log(action.payload)
            return {
                ...state,
                amount: state.amount+action.payload,
                error: ""
            }
        }
        case WITHDRAW:{
           if (state.amount===0) return {
                ...state,
                error: "You don't have enough money"
            };
            return {
                ...state, amount: state.amount-action.payload
            }
        }
        case RESET:{
            return intitialState
        }
         default:{
            return intitialState
        }
    }
}
export default reducer;
