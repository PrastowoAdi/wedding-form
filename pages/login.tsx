import { actions } from "@/store/authReducer";
import { useRouter } from "next/router";
import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onSubmitLogin = useCallback(() => {
    dispatch(actions.authLogin());
    router.replace("/");
  }, [dispatch, router]);

  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-wrap">
        <div className="w-full mb-12 xl:mb-0">
          <button type="button" className="bg-black" onClick={onSubmitLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }, [onSubmitLogin]);
  return renderMain;
};

export default LoginPage;
