// import { createStore, applyMiddleware } from "redux"
// import createSagaMiddleware from 'redux-saga'

// import reducer from "./redux/reducer"
// import mySaga from "./redux/saga"

// function configureStore() {
//   const sagaMiddleware = createSagaMiddleware()
//   return {
//     ...createStore(reducer, undefined, applyMiddleware(sagaMiddleware)),
//     runSaga: sagaMiddleware.run
//   }
// }
// const store = configureStore()

// store.runSaga(mySaga)

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

// export default store

import { configureStore } from "@reduxjs/toolkit";
import counter, { ICouterStateType } from "./reduxToolkit/slice";
import counter2 from "./reduxToolkit/slice";
import { combineReducers } from "redux";

interface ReducerStateType {
  readonly counter: ICouterStateType;
  readonly counter2: ICouterStateType;
}

const rootReducer = combineReducers<ReducerStateType>({
  counter,
  counter2,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
