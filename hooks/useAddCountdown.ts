import { useMutation } from "@tanstack/react-query";
import * as services from "@/services";
import { IFormCountdown } from "@/types";

const useAddCountdown = () => {
  const data = useMutation(async (payload: IFormCountdown) => {
    return await services.useAddCountdown(payload);
  });
  return data;
};

export default useAddCountdown;
