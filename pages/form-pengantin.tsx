import { FormPengantin } from "@/components";
import React, { useMemo } from "react";

const FormPengantinPage = () => {
  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-wrap">
        <div className="w-full mb-12 xl:mb-0">
          <FormPengantin />
        </div>
      </div>
    );
  }, []);
  return renderMain;
};

export default FormPengantinPage;
