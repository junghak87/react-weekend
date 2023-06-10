// reducer 정의 및 export 처리

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  loading: false,
  hasError: false,
};

// RTK 에서는 slice 객체를 생성하면, action creator, reducer를 자동으로 만들어줌.
// slice 생성

const postListSlice = createSlice({
  name: "postList",
  initialState,
  reducers: {
    // action creator를 만들어 주는 처리
    getPostsStart: (state, action) => {
      state.loading = true;
    },
    getPostsSuccess: (state, action) => {
      state.loading = false;
      state.hasError = false;
      state.posts = action.payload;
    },
    getPostsFailuer: (state, action) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

// action creator 다른 모듈에서 사용 가능하도록 export 처리
// createSlice 기능을 통해서 만들어진 actions creator 목록
export const { getPostsStart, getPostsSuccess, getPostsFailuer } = postListSlice.actions;

// reducer export 처리
export default postListSlice.reducer;

// Thunk 미들웨어서 호출할 dispatch 함수를 리턴
export const fetchPostList = () => {
  return async (dispatch) => {
    dispatch(getPostsStart()); // 포스트 목록 가져오기

    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

      dispatch(getPostsSuccess(response.data));
    } catch (error) {
      dispatch(getPostsFailuer());
    }
  };
};
