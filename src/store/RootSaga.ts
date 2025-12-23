import { all } from "redux-saga/effects";
import { knowledgeSaga } from "@/features/articles/article.saga";

export default function* rootSaga() {
  yield all([knowledgeSaga()]);
}
