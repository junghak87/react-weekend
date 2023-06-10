import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import postListReducer from "./slices/PostListSlice";
import postDetailsReducer from "./slices/PostDetailsSlice";
import commentListReducer from "./slices/Comments";

// RTK(Redux Toolkit)
const store = configureStore({
  reducer: {
    postList: postListReducer,
    postDetails: postDetailsReducer,
    comments: commentListReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
