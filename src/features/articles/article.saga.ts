import { call, put, takeLatest } from "redux-saga/effects";
import { fetchKnowledgeFailure, fetchKnowledgeRequest, fetchKnowledgeSuccess } from "./article.slice";
import { fetchKnowledgeListApi } from "./article.api";

function* fetchKnowledgeWorker(
  action: ReturnType<typeof fetchKnowledgeRequest>
): Generator<any, any, any> {
  try {
    const { page } = action.payload;
    const response = yield call(fetchKnowledgeListApi, page);
    const articles = response.result.knowledgeList
    yield put(fetchKnowledgeSuccess(articles));
  } catch (error: any) {
    yield put(fetchKnowledgeFailure(error.message));
  }
}

export function* knowledgeSaga() {
  yield takeLatest(fetchKnowledgeRequest.type, fetchKnowledgeWorker);
}
