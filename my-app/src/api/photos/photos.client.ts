import { apiRequest } from "../Api";
import { Photo } from "./photos";

export const getPhotos = async () => {
  return apiRequest<{}, Photo[]>({
    url: "photos",
    method: "GET",
  }).then((res) => res.data);
};
