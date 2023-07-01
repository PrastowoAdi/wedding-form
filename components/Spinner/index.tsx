import React, { useMemo } from "react";

function Spinner() {
  const renderMain = useMemo(() => {
    return (
      <div className="flex flex-row items-center justify-center w-full h-screen gap-4">
        <div className="w-10 h-10 border-[6px] rounded-full border-slate-600 loader"></div>
        <h1 className="text-lg font-semibold uppercase text-slate-700">
          Divory Form Wedding
        </h1>
      </div>
    );
  }, []);
  return renderMain;
}

export default Spinner;
