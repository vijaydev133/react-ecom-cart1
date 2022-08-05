import { createSlice } from "@reduxjs/toolkit";


const favSlice = createSlice({
    name : "fav",
    initialState : {
        FavArr : []
    },
    reducers : {
        addToFav : (state,action)=>{
            state.FavArr = action.payload
        },
        removeItem : (state,action)=>{
            state.FavArr = action.payload
        }
    }
})

export const {addToFav, removeItem} = favSlice.actions

export default favSlice.reducer