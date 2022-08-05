import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        CartArr : [],
        qty : [0,1,1,1,1,1,1]
    },
    reducers : {
        addToCart : (state,action)=>{
            state.CartArr = action.payload
            state.qty = [0,1,1,1,1,1,1]
        },
        removeItem : (state,action)=>{
            state.CartArr = action.payload
        },
        qntyAdd : (state,action)=>{
            state.qty = action.payload
        },
        qntySub : (state,action)=>{
            state.qty = action.payload
        }
    }
})

export const {addToCart,removeItem, qntyAdd,qntySub} = cartSlice.actions

export default cartSlice.reducer