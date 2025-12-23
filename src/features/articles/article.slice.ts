import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KnowledgeState } from "./article.types";

const initialState: KnowledgeState = {
  allArticleList: [],
  articleListLoading: false,
  articleListError: null,
};

const knowledgeSlice = createSlice({
  name: "knowledge",
  initialState,
  reducers: {
    fetchKnowledgeRequest(state, _action: PayloadAction<{ page: number }>) {
      state.articleListLoading = true;
      state.articleListError = null;
    },
    fetchKnowledgeSuccess(state, action: PayloadAction<any[]>) {
      state.articleListLoading = false;
      state.allArticleList = action.payload;
    },
    fetchKnowledgeFailure(state, action: PayloadAction<string>) {
      state.articleListLoading = false;
      state.articleListError = action.payload;
    },
  },
});

export const {
  fetchKnowledgeRequest,
  fetchKnowledgeSuccess,
  fetchKnowledgeFailure,
} = knowledgeSlice.actions;

export default knowledgeSlice.reducer;
