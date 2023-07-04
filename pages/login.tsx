import { Login, Spinner } from "@/components";
import React, { useEffect, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "@/types/iState";
import { useRouter } from "next/router";
import { actions } from "@/store/authReducer";
const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const authRedux = useSelector((state: IState) => state.isLogin);

  useEffect(() => {
    if (authRedux) {
      const timer = setTimeout(() => {
        router.replace("/");
        dispatch(actions.authSetTitleNav("Dashboard"));
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [router, authRedux, dispatch]);

  if (authRedux) {
    return <Spinner />;
  }

  return (
    <>
      <main>
        <section className="relative w-full h-full min-h-screen pt-36">
          <div
            className="absolute top-0 w-full h-full bg-no-repeat bg-slate-800 bg-full"
            style={{
              backgroundImage: "url('/assets/bg-login.webp')",
            }}
          ></div>
          <AnimatePresence>
            <Login />
          </AnimatePresence>
        </section>
      </main>
    </>
  );
};

export default LoginPage;

LoginPage.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};
