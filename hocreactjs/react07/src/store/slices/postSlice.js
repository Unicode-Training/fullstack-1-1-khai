import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const LIMIT = 20;
export const postSlice = createSlice({
  name: "posts",
  initialState: {
    postList: [],
    isLoading: true,
    error: null,
    limit: LIMIT,
    loadMoreStatus: "idle",
    postTotal: 0,
  },
  reducers: {
    loadMore: (state) => {
      state.limit += LIMIT;
      state.loadMoreStatus = "pending";
    },
  },
  extraReducers: (builder) => {
    //Gán giá trị từ middleware vào state
    // builder.addCase(fetchPosts.pending, (state) => {
    //   state.isLoading = true;
    // });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.postList = action.payload.data;
      state.isLoading = false;
      state.loadMoreStatus = "idle";
      state.postTotal = action.payload.total;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});
export const { loadMore } = postSlice.actions;
//Middleware
// export const fetchPosts = () => {
//   return async (dispatch) => {
//     //dispatch: Hàm dùng để dispatch lên reducer
//     //getState: Hàm trả về tất cả state của store
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts`
//       );
//       if (!response.ok) {
//         throw new Error();
//       }
//       const data = await response.json();
//       dispatch(postSlice.actions.fetchPosts(data));
//     } catch {
//       dispatch(postSlice.actions.setError("Đã có lỗi khi gọi api"));
//     }
//   };
// };

export const fetchPosts = createAsyncThunk(
  "fetchPosts",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const limit = state.posts.limit;
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      if (!response.ok) {
        throw new Error();
      }
      const total = response.headers.get("x-total-count");

      const data = await response.json();
      return { data, total };
    } catch {
      return rejectWithValue("Đã có lỗi khi gọi api");
    }
  }
);

//Trạng thái createAsyncThunk --> Giống trạng thái Promise
// - pending
// - fulfilled
// - rejected
