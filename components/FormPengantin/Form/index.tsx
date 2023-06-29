import React, { useMemo } from "react";
import InputType from "./InputType";

function Form() {
  const renderMain = useMemo(() => {
    return (
      <>
        <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-slate-400">
          Pengantin Pria
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Nama Panggilan"
              placeholder="Naruto"
              type="text"
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Nama Lengkap"
              placeholder="Dr.Uzumaki Naruto"
              type="text"
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputType label="Nama Ayah" placeholder="Sasuke" type="text" />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputType label="Nama Ibu" placeholder="Hinata" type="text" />
          </div>
          <div className="w-full px-4 lg:w-12/12">
            <InputType
              label="Alamat"
              placeholder="Bekasi, Indonesia"
              type="text"
            />
          </div>
        </div>

        <hr className="mt-6 border-b-1 border-slate-300" />

        <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-slate-400">
          Pengantin Wanita
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Nama Panggilan"
              placeholder="Naruto"
              type="text"
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Nama Lengkap"
              placeholder="Dr.Uzumaki Naruto"
              type="text"
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputType label="Nama Ayah" placeholder="Sasuke" type="text" />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputType label="Nama Ibu" placeholder="Hinata" type="text" />
          </div>
          <div className="w-full px-4 lg:w-12/12">
            <InputType
              label="Alamat"
              placeholder="Bekasi, Indonesia"
              type="text"
            />
          </div>
        </div>
        <hr className="mt-6 border-b-1 border-slate-300" />
      </>
    );
  }, []);
  return renderMain;
}

export default Form;
