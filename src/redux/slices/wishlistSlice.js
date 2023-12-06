import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name : "wishlist",
    initialState:[],
    reducers:{
        addTowishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishList:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addTowishlist,removeFromWishList} = wishlistSlice.actions
export default wishlistSlice.reducer