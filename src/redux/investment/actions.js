import {DEPOSIT, WITHDRAW, RESET} from "./actionTYPES";

export const deposit = (value) => ({
    type: DEPOSIT,
    payload: value,
})

export const withdraw = (value)=> (
     {
    type: WITHDRAW,
    payload: value
}
)

export const reset = ()=>({
    type: RESET,
})