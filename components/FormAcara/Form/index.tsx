import React, { useMemo } from "react";
import InputType from "@/components/InputType";

function Form() {
  const renderMain = useMemo(() => {
    return (
      <>
        <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-slate-400">
          Akad
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Nama Lokasi"
              placeholder="Gedung Serbaguna Jakarta"
              type="text"
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Tanggal Acara"
              placeholder="20/01/2023, 05:00-08:00"
              type="text"
            />
          </div>
          <div className="w-full px-4 lg:w-12/12">
            <InputType
              label="Alamat"
              placeholder="Letjen S. Parman No.kav.28, Tj. Duren Sel., Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470"
              type="text"
            />
          </div>
        </div>

        <hr className="mt-6 border-b-1 border-slate-300" />

        <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-slate-400">
          Resepsi
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Nama Lokasi"
              placeholder="Gedung Serbaguna Jakarta"
              type="text"
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Tanggal Acara"
              placeholder="20/01/2023, 05:00-08:00"
              type="text"
            />
          </div>
          <div className="w-full px-4 lg:w-12/12">
            <InputType
              label="Alamat"
              placeholder="Letjen S. Parman No.kav.28, Tj. Duren Sel., Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470"
              type="text"
            />
          </div>
        </div>
        <hr className="mt-6 border-b-1 border-slate-300" />

        <div className="flex flex-wrap">
          <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-slate-400">
            Live Streaming
          </h6>
          <div className="w-full px-4 lg:w-12/12">
            <InputType
              label="Link"
              placeholder="https://www.youtube.com/"
              type="text"
            />
          </div>
        </div>
      </>
    );
  }, []);
  return renderMain;
}

export default Form;
