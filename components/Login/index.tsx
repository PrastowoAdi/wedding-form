import { actions } from "@/store/authReducer";
import Image from "next/image";
import React, { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import InputType from "../InputType";

import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "@/hooks";
import { toast } from "react-toastify";

interface IFormInputs {
  username: string;
  password: string;
}

function Login() {
  const dispatch = useDispatch();
  const mutation = useLogin();
  const [loadingBtn, setLoadingBtn] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit = useCallback(
    (data: IFormInputs) => {
      setLoadingBtn(true);
      try {
        mutation.mutate(
          {
            ...data,
          },
          {
            onSuccess(data) {
              if (data) {
                dispatch(actions.authLogin(data?.data?.token));
                setLoadingBtn(false);
              }
            },
            onError(err: any) {
              toast.error(err.response.data.message);
              setLoadingBtn(false);
            },
          }
        );
      } catch (error) {
        setLoadingBtn(false);
        console.log("err.submit", error);
      }
    },
    [dispatch, mutation, setLoadingBtn]
  );

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
                    src="/assets/logo1.png"
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    control={control}
                    name="username"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur } }) => (
                      <InputType
                        label="Username"
                        type="text"
                        onBlur={onBlur}
                        onChange={onChange}
                      />
                    )}
                  />
                  {Boolean(errors.username) && (
                    <p className="mb-5 text-xs font-semibold text-rose-500">
                      username field is required!!!
                    </p>
                  )}
                  <Controller
                    control={control}
                    name="password"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur } }) => (
                      <InputType
                        label="Password"
                        type="password"
                        onBlur={onBlur}
                        onChange={onChange}
                      />
                    )}
                  />
                  {Boolean(errors.password) && (
                    <p className="mb-5 text-xs font-semibold text-rose-500">
                      password field is required!!!
                    </p>
                  )}
                  <div className="mt-6 text-center">
                    {loadingBtn ? (
                      <div className="w-8 h-8 border-[6px] rounded-full border-slate-600 loader mx-auto"></div>
                    ) : (
                      <button
                        className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-slate-800 active:bg-slate-600 hover:shadow-lg focus:outline-none"
                        type="submit"
                      >
                        Sign In
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }, [
    onSubmit,
    handleSubmit,
    control,
    errors.username,
    errors.password,
    loadingBtn,
  ]);
  return renderMain;
}

export default Login;
