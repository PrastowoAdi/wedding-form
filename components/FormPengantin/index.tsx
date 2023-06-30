import React, { useMemo } from "react";
import Form from "./Form";

function FormPengantin() {
  const renderMain = useMemo(() => {
    return (
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-slate-100">
        <div className="px-6 py-6 mb-0 bg-white rounded-t">
          <div className="flex justify-between text-center">
            <h6 className="text-xl font-bold text-slate-700">
              Informasi Pengantin
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
          <form>
            <Form />
            <hr className="mt-6 border-b-1 border-slate-300" />
            <div className="px-3 py-6 sm:mt-0">
              <button
                className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-slate-700 active:bg-slate-600 hover:shadow-md focus:outline-none sm:mr-2"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }, []);
  return renderMain;
}

export default FormPengantin;