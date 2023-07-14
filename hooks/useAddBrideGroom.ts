import { useMutation } from "@tanstack/react-query";
import * as services from "@/services";
import { IFormBrideGroom } from "@/types";

const useAddBrideGroom = () => {
  const data = useMutation(async (payload: IFormBrideGroom) => {
    return await services.useAddBrideGroom(payload);
  });
  return data;
};

export default useAddBrideGroom;
