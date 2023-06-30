import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Navbar, Sidebar } from "@/components";
import { IState } from "@/types/iState";

export default function Layout({ children }: { children: React.ReactNode }) {
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

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-600">
        <Navbar />
        <div
          id="main-content"
          className="absolute w-full px-4 mx-auto md:px-10 top-10 md:top-20"
        >
          {children}
        </div>
      </div>
    </>
  );
}
