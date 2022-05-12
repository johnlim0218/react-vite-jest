import { AnyAction, configureStore, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from '../redux/rootReducer';

const loggerMiddleware = (store: MiddlewareAPI<Dispatch, any>) => (next: Dispatch<AnyAction>) => (action: any) => {
  const result = next(action);
  return result;
};

const middlewares = [loggerMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(
        middlewares
      ),
  devTools: process.env.NODE_ENV !== 'production'
})

export type AppDispatch = typeof store.dispatch;

export default store;
