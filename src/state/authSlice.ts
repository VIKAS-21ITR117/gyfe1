import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  postId: string;
  imgPost?: string;
  imgRecentPost?: string;
  title: string;
  writeAt: string;
  theme: string;
  content: string;
  details?: string;
}

export interface AuthState {
  user: null | string;
  token: null | string;
  posts: Post[];
}

const initialState: AuthState = {
  user: null,
  token: null,
  posts: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (
      state: { user: any; token: any; },
      action: PayloadAction<{ user: string; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state: { user: any; token: any; }) => {
      state.user = null;
      state.token = null;
    },
    setPosts: (state: { posts: any; }, action: { payload: { posts: any; }; }) => {
      state.posts = action.payload.posts;
    },
  },
});

export const { setLogin, setLogout, setPosts } = authSlice.actions;

export default authSlice.reducer;
