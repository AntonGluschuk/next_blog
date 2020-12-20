import { Action, configureStore, Store } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import postsReducer from './posts/postsSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<any>>;

const store: Store = configureStore({
  reducer: rootReducer,
});

export default store;
