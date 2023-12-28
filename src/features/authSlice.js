import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  userTokenInfo: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    addUserInfo(state, action) {
      state.userInfo = action.payload;
    },

    addUserTokenInfo(state, action) {
      state.userTokenInfo = action.payload;
    },

    addUserAuthentication(state, action) {
      state.isAuthenticated = action.payload;
    },

    addUserDetails(state, action) {
      state.userDetails = action.payload;
    },

    addUserToken(state, action) {
      state.userToken = action.payload;
    },
    clearAuthStore(state, action) {
      state = {
        userDetails: {},
        userToken: null,
        ...initialState,
      }
    }
  },
});

export const { addUserInfo, addUserTokenInfo, addUserAuthentication, addUserDetails, addUserToken, clearAuthStore } = authSlice.actions;

export const selectUserInfo = (state) => state.authentication.userInfo;
export const selectUserTokenInfo = (state) => state.authentication.userTokenInfo;
export const selectUserAuthentication = (state) => state.authentication.isAuthenticated;

export const selectUserDetails = (state) => state.authentication.userDetails;
export const selectUserToken = (state) => state.authentication.userToken;

export default authSlice.reducer;