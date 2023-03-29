import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comment: {
    text:"",
    id:""
  }

  
}


export const _postcomment = createAsyncThunk(
  'post/comment',
  async (payload, thunkAPI) => {
    try {
      const {data}  = await axios.post(
        'http://localhost:3001/comment', payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) { }
  }
);

export const _getcomment = createAsyncThunk(
  'get/comment',
  async (payload, thunkAPI) => {
    try {
      const {data}  = await axios.get(
        'http://localhost:3001/comment', payload
      );
      console.log(data)
      return thunkAPI.fulfillWithValue(data);
    } catch (error) { }
  }
);

export const _deletecomment = createAsyncThunk(
  'delete/comment',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/comment/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);







export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers:{},
  extraReducers:{

    [_postcomment.fulfilled]: (state, action) => {
      state.comment = action.payload;
    },

    [_getcomment.fulfilled]: (state, action) => {
    state.comment = action.payload
    },

    [_deletecomment.fulfilled]: (state, action) => {
      state.comment = state.comment.filter((post) => post.id !== action.payload);
    },
}
})


export default commentSlice.reducer;