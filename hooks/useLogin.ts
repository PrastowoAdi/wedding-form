import { useMutation } from "@tanstack/react-query";
import * as services from "@/services";
import { IPropsLogin } from "@/types";

const useLogin = () => {
  const data = useMutation(async (payload: IPropsLogin) => {
    return await services.login(payload);
  });
  return data;
};

export default useLogin;
