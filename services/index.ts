import * as utils from "@/utils";

import {
  IFormCountdown,
  IFormLoveStory,
  IFormShareLove,
  IPropsLogin,
} from "@/types";

export const login = async (params: IPropsLogin) => {
  return await utils.HttpClient.post("/api/login", params);
};

export const userInfo = async () => {
  return await utils.HttpClient.get("/api/wedding/user");
};

export const userAddLoveStory = async (params: IFormLoveStory) => {
  return await utils.HttpClient.put("/api/wedding/user-love-story", params);
};

export const userAddShareLove = async (params: IFormShareLove) => {
  return await utils.HttpClient.put("/api/wedding/user-share-love", params);
};

export const useAddCountdown = async (params: IFormCountdown) => {
  return await utils.HttpClient.put("/api/wedding/user-countdown", params);
};
