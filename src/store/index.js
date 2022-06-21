import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";

const init = {
  keyword: "",
  role: "",
  user: false,
  connected : true,
  addons: [],
  supplier:{},
  supplierAddon:{}
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case "SET_KEYWORD":
      return {
        ...state,
        keyword: action.payload
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      };
      case "SET_CONNECTED":
      return {
        ...state,
        connected: action.payload
      };
    case "SET_ROLE":
      return {
        ...state,
        role: action.payload
      };
      case "SUPPLIER_INFO":
        return {
          ...state,
          supplier: action.data
        };
        case "GET_ADDONS":
        return {
          ...state,
          addons: action.data
        };
        case "ADDON_INFO":
          return {
            ...state,
            supplierAddon: action.data
          };
    default:
      return state;
  }
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["supplier", "", "role"]
};

const persistedReducer = persistReducer(persistConfig, reducer);

const enhancers = [applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];

// if (environment === "dev") {
//   enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// }

const store = createStore(
  persistedReducer,
  undefined,
  compose(...enhancers)
);

const persistore = persistStore(store);

const StateProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={"Loading..."} persistor={persistore}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export { store, StateProvider };
