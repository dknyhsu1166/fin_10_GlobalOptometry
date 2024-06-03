import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    login: {
        hasLogin: false,
        hasAccount: false,
    }
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        gotoSignIn: (state) => {
            state.login.hasLogin = false;
            state.login.hasAccount = false;
        },
        gotoSignUp: (state) => {
            state.login.hasLogin = false;
            state.login.hasAccount = true;
        },
        setLogin: (state, action) => {
            state.login.hasLogin = true;
        },
        setLogout: (state) => {
            state.login.hasLogin = false;
        }
    },
});

export const selectHasLogin = (state) => state.account.login.hasLogin;
export const selectHasAccount = (state) => state.account.login.hasAccount;

export const { setLogin, setLogout, gotoSignIn, gotoSignUp } = accountSlice.actions;
export default accountSlice.reducer;
