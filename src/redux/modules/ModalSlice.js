import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  state: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers:{

    modalState:(state, action) => {
      state.state = action.payload
      console.log(action.payload)
    }
  }
}
)

export const { modalState} = modalSlice.actions;
export default modalSlice.reducer;