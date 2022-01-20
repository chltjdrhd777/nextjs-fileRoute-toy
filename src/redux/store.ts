import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "redux/reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  // user reducer만 localstorage에 저장
  whitelist: ["user"],
};

const PersistReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: PersistReducer,
  middleware: (getdefaultMiddleware) => getdefaultMiddleware({ serializableCheck: false }),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const selectUser = (state: AppState) => state.user;

export default store;
