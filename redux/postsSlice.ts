import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../redux/store';
import { getPosts } from '../pages/api/api';
import { PostResponseType } from '../pages/api/types';

// interface IPost {
//   id: number;
//   title: string;
//   body: string;
// }

interface IPostsState {
  posts: PostResponseType[];
}

const initialState: IPostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPosts(state, action: PayloadAction<PostResponseType[]>) {
      state.posts = action.payload;
    },
  },
});

export const { loadPosts } = postsSlice.actions;

export default postsSlice.reducer;

export const fetchPosts = (): AppThunk => async (dispatch) => {
  try {
    const posts = await getPosts();
    const loadedPosts = posts.data.content.map((post) => post);
    dispatch(loadPosts(loadedPosts));
  } catch (e) {
    console.log(e);
  }
};
