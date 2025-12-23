"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchKnowledgeRequest } from "@/features/articles/article.slice";

export const useArticleList = (page: number = 1) => {
  const dispatch = useAppDispatch();
  const { allArticleList, articleListLoading, articleListError } =
    useAppSelector((state) => state.knowledge);

  useEffect(() => {
    dispatch(fetchKnowledgeRequest({ page }));
  }, [dispatch, page]);

  const refetch = () => {
    dispatch(fetchKnowledgeRequest({ page }));
  };

  return {
    articles: allArticleList,
    loading: articleListLoading,
    error: articleListError,
    refetch,
  };
};
