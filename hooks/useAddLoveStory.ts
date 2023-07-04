import { useMutation } from "@tanstack/react-query";
import * as services from "@/services";
import { IFormLoveStory } from "@/types";

const useAddLoveStory = () => {
  const data = useMutation(async (payload: IFormLoveStory) => {
    return await services.userAddLoveStory(payload);
  });
  return data;
};

export default useAddLoveStory;
