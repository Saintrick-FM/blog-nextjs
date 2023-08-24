import getUserData from "./githubRequests/getUserData";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

const userSlice = createSlice({
  name: "user",
  initialState: {
    github_username: null,
    github_userData: null,
  },

  reducers: {
    setGithubUsername: (state, action) => {
      state.github_username = action.payload;
      return state;
    },
    setGithubUserData: (state, action) => {
      state.github_userData = action.payload;
      return state;
    },
    setDisConnectUser: (state, action) => {
      sessionStorage.removeItem("github_username");
      state.github_userData = null;
      return state;
    },
  },
});

export const { setGithubUsername, setDisConnectUser, setGithubUserData } =
  userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

// Async action to fetch user data from GitHub API
export const fetchGithubUserData = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const githubUsername = state.user.github_username;
    const response = await fetch(
      `https://api.github.com/users/${githubUsername}`
    );
    if (response.ok) {
      const userData = await response.json();
      dispatch(setGithubUserData(userData));
    } else {
      console.error("Failed to fetch user data");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
