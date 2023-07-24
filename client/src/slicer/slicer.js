import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginState : false,
    userName : 'dummy_Name',
    totalPost : 0,
};

export const slicer = createSlice({
    name : 'BLOG_SLICER',
    initialState,
    reducers : {
        setLoginState(state , action){
            state.loginState = !state.loginState;
        },
        setUserName(state , action){
            state.userName = action.payload;
        },
    }
});

export const { setLoginState , setUserName } = slicer.actions;
export default slicer.reducer;