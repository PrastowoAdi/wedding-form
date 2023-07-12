import React, { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Form from "./Form";
import { useGetUserInfo } from "@/hooks";

function FormAcara() {
  const userInfo = useGetUserInfo();
  const { data, isLoading } = userInfo;

  const renderMain = useMemo(() => {
    return (
      <AnimatePresence>
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
          className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-slate-100"
        >
          <div className="px-6 py-6 mb-0 bg-white rounded-t">
            <div className="flex justify-between text-center">
              <h6 className="text-xl font-bold text-slate-700">
                Informasi Akad/Resepsi
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
            <Form data={data} isLoading={isLoading} />
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }, [data, isLoading]);
  return renderMain;
}

export default FormAcara;
