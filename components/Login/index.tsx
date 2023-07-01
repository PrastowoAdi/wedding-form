import { actions } from "@/store/authReducer";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import InputType from "../InputType";

import { motion } from "framer-motion";
function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmitLogin = useCallback(() => {
    dispatch(actions.authLogin());
    router.replace("/");
  }, [dispatch, router]);

  const renderMain = useMemo(() => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.3,
            duration: 0.3,
          },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.3 },
        }}
        className="container h-full px-4 mx-auto"
      >
        <div className="flex items-center content-center justify-center h-full">
          <div className="w-full px-4 lg:w-4/12">
            <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-slate-200">
              <div className="px-6 py-6 mb-0 rounded-t">
                <div className="w-1/4 mx-auto mb-3 md:w-1/5">
                  <Image
                    src="/assets/logo.png"
                    width={500}
                    height={500}
                    alt="logo"
                  />
                </div>
                <div className="text-center btn-wrapper">
                  <h6 className="text-lg font-bold uppercase text-slate-600">
                    Divory Wedding Form
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-slate-300" />
              </div>
              <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <form>
                  <InputType
                    label="Username"
                    type="text"
                    placeholder="Username"
                  />
                  <InputType
                    label="Password"
                    type="password"
                    placeholder="Password"
                  />
                  <div className="mt-6 text-center">
                    <button
                      className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-slate-800 active:bg-slate-600 hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={onSubmitLogin}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }, [onSubmitLogin]);
  return renderMain;
}

export default Login;
