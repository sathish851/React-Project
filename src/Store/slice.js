import {createSlice}  from '@reduxjs/toolkit';

const authSlice = createSlice({
    name:'auth',
    
    initialState:{
        isLoggedIn: false,
        user_id:0
    },

    reducers:{
        login(state , u_id){
            state.isLoggedIn = true;
            state.user_id = u_id;
        },
        logout(state){
            state.isLoggedIn = false;
            state.user_id = 0;
        }
    }
})


export const{login,logout} = authSlice.actions;
export default authSlice;