import { combineReducers } from "@reduxjs/toolkit";
import knowledgeSlice from "@/features/articles/article.slice";

const rootReducer = combineReducers({
  knowledge: knowledgeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
