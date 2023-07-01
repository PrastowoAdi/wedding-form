import { Login } from "@/components";
import React, { useMemo } from "react";
import { AnimatePresence } from "framer-motion";
const LoginPage = () => {
  const renderMain = useMemo(() => {
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
  }, []);
  return renderMain;
};

export default LoginPage;

LoginPage.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};
