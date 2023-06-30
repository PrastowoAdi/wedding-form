import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { IState } from "@/types/iState";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const authRedux = useSelector((state: IState) => state.isLogin);

  useEffect(() => {
    if (!authRedux) {
      router.replace("/login");
    }
  }, [router.route]);

  if (!authRedux) {
    return "halo";
  }

  return <>{children}</>;
}
