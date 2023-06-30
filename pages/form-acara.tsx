import { FormAcara } from "@/components";
import React, { useMemo } from "react";

const FormAcaraPage = () => {
  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-wrap">
        <div className="w-full mb-12 xl:mb-0">
          <FormAcara />
        </div>
      </div>
    );
  }, []);
  return renderMain;
};

export default FormAcaraPage;
