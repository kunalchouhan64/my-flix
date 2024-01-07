import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            // Like if we want to add the user, so this is the reducer function will return the action.payload and our initial state will become the user ka action.payload it is as simple as that.
            return action.payload
        },
        removeUser: (state, action) => {
            // Like if we want to remove the user...so this reducer function will make our initial state null with returning the null, like we have never had user. 
            return null
        }
    }
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer;