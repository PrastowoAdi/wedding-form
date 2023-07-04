import { useQuery } from "@tanstack/react-query";
import * as services from "@/services";

const useGetUserInfo = () => {
  const data = useQuery(
    ["user-info"], // format brand-table-data it namaModule-table-listData
    async () => {
      const { data: axiosData } = await services.userInfo();
      return axiosData.data;
    }
  );
  return data;
};

export default useGetUserInfo;
