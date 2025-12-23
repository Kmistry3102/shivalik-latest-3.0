import { apiRequest } from "@/api/request";

export const fetchKnowledgeListApi = (page: number) => {
  return apiRequest({
    method: "GET",
    url: `/knowledges/get-list?page=${page}&knowledgeType=Website`,
  });
};