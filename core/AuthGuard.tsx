import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { IState } from "@/types/iState";
import { Spinner } from "@/components";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const authRedux = useSelector((state: IState) => state.isLogin);

  useEffect(() => {
    if (!authRedux) {
      const timer = setTimeout(() => {
        router.replace("/login");
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [router.route]);

  if (!authRedux) {
    return <Spinner />;
  }

  return <>{children}</>;
}
