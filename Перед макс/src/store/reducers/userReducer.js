import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../API/userApi";
import { getSongs, setSongs } from "./songsReducer";

const initialState = {
  id: null,
  email: null,
  displayName: null,
  photoURL: null,
  token: null,

  loading: false,
  error: null,
  init: false,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.token = payload.accessToken;
      state.photoURL = payload.photoURL;
    },
    removeUser: (state) => {
      state.email = null;
      state.displayName = null;
      state.token = null;
      state.photoURL = null;
    },
    changeLoading: (state, { payload }) => {
      state.loading = payload;
    },

    setInit: (state) => {
      state.init = true;
    },
  },

  productReleaseUpdatingError: (state, action) => {
    state.updating = "failed";
    state.error = action.payload.error;
  },
});

const { actions, reducer } = userReducer;

export const {
  productReleaseUpdatingError,
  setUser,
  removeUser,
  changeLoading,
  setInit,
} = actions;

export default reducer;

// Thunk

export const initialize = () => async (dispatch) => {
  try {
    const user = await userApi.refresh();
    dispatch(setUser(user));
    dispatch(getSongs());
  } catch (e) {
    dispatch(setInit());
  }
};

export const registration = (form) => async (dispatch) => {
  dispatch(changeLoading(true));
  const user = await userApi.registration(form);
  dispatch(setUser(user));
  dispatch(getSongs());
  dispatch(changeLoading(false));
};

export const login = (form) => async (dispatch) => {
  dispatch(changeLoading(true));
  const user = await userApi.login(form);
  dispatch(setUser(user));
  dispatch(getSongs());
  dispatch(changeLoading(false));
};

export const logout = () => async (dispatch) => {
  const user = await userApi.logout();
  dispatch(removeUser());
  dispatch(setSongs([]));
};
