import { FormShareLove } from "@/components";
import React, { useMemo } from "react";

const FormShareLovePage = () => {
  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-wrap">
        <div className="w-full mb-12 xl:mb-0">
          <FormShareLove />
        </div>
      </div>
    );
  }, []);
  return renderMain;
};

export default FormShareLovePage;
