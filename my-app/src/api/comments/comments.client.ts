import { apiRequest } from "../Api";
import { Comment } from "./comments";

export const getComments = async () => {
  return apiRequest<{}, Comment[]>({
    url: "comments",
    method: "GET",
  }).then((res) => res.data);
};
