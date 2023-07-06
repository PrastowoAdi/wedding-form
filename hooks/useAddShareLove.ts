import { useMutation } from "@tanstack/react-query";
import * as services from "@/services";
import { IFormShareLove } from "@/types";

const useAddShareLove = () => {
  const data = useMutation(async (payload: IFormShareLove) => {
    return await services.userAddShareLove(payload);
  });
  return data;
};

export default useAddShareLove;
