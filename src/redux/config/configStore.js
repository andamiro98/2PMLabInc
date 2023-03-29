import { configureStore } from "@reduxjs/toolkit";
import modal from "../modules/ModalSlice";
import comment from "../modules/CommentSlice";
const store = configureStore ({
  reducer: {
    modal,
    comment
  }

})

export default store;