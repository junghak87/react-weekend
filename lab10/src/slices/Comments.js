import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  loading: false,
  hasError: false,
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getCommentsStart: (state, action) => {
      state.loading = true;
    },
    getCommentsSueccess: (state, action) => {
      state.loading = false;
      state.hasError = false;
      state.comments = action.payload;
    },
    getCommentsFailure: (state, action) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

export const { getCommentsStart, getCommentsSueccess, getCommentsFailure } = commentSlice.actions;

export default commentSlice.reducer;

export const fetchComments = (postId) => {
  return async (dispatch) => {
    dispatch(getCommentsStart());

    try {
      let response = await axios.get(`https://jsonplaceholder.typicode.com/post/${postId}/comments`);

      dispatch(getCommentsSueccess(response.data));
    } catch (error) {
      dispatch(getCommentsFailure());
    }
  };
};
