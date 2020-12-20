import { Action, configureStore, Store } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { MakeStore } from 'next-redux-wrapper';
import postsReducer from '../redux/postsSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
});

type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<any>>;

const store: Store = configureStore({
  reducer: rootReducer,
});

export default store;