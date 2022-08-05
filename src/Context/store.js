import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import favSlice from "./favSlice"


export default configureStore({
    reducer : {
        cart : cartSlice,
        fav : favSlice
    }
})