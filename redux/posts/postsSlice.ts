import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts } from '../../pages/api/api';
import { IPost, IPostMeta, LoadingStatusEnum } from './types';

export interface IPostsPayload {
  posts: IPost[];
  meta: IPostMeta;
}

export interface IPostsState {
  allPosts: IPostsPayload;
}

const initialState: IPostsState = {
  allPosts: {
    posts: [],
    meta: {
      loading: LoadingStatusEnum.idle,
      error: null,
    },
  },
};

export const fetchPosts = createAsyncThunk('posts/loadPosts', async () => {
  const {
    data: { content: fetchedPosts },
  } = await getPosts();

  console.log(fetchedPosts);

  return fetchedPosts;
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPosts(state, action: PayloadAction<IPostsPayload>) {
      state.allPosts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.allPosts.meta.loading = LoadingStatusEnum.pending;
    });
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.allPosts.meta.loading = LoadingStatusEnum.succeeded;

      state.allPosts.posts = payload;
    });
    builder.addCase(fetchPosts.rejected, (state, { error }) => {
      if (error.message) {
        state.allPosts.meta.error = error.message;
      }
      state.allPosts.meta.loading = LoadingStatusEnum.failed;
    });
  },
});

export const { loadPosts } = postsSlice.actions;

export default postsSlice.reducer;
