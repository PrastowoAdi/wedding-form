import React, { useCallback, useMemo, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import InputType from "@/components/InputType";

interface listBankType {
  nama: string;
  bank: string;
  noRek: string;
}

function Form() {
  const [listBank, setListBank] = useState<listBankType[]>([]);
  const [nama, setNama] = useState<string>("");
  const [bank, setBank] = useState<string>("");
  const [noRek, setNorek] = useState<string>("");

  const addDataToListBank = useCallback(() => {
    const listBankTemp = [];
    const payload = {
      nama,
      bank,
      noRek,
    };
    listBankTemp.push(...listBank, payload);
    setListBank(listBankTemp);
    setNama("");
    setBank("");
    setNorek("");
  }, [nama, bank, noRek, setListBank, setNama, setBank, setNorek]);

  const removeDataFromList = useCallback(
    (rowSelect: string) => {
      const filterListBank = listBank.filter(
        (e: listBankType) => e.noRek !== rowSelect
      );
      setListBank(filterListBank);
    },
    [listBank, setListBank]
  );

  const renderMain = useMemo(() => {
    return (
      <>
        <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-slate-400">
          Akun Bank
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-4/12">
            <InputType
              label="Nama Pemilik"
              type="text"
              placeholder="Naruto"
              value={nama}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNama(e.target.value)
              }
            />
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <InputType
              label="Nama Bank"
              type="text"
              placeholder="BCA"
              value={bank}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBank(e.target.value)
              }
            />
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <InputType
              label="No. Rek"
              type="number"
              placeholder="0123129013"
              value={noRek}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNorek(e.target.value)
              }
            />
          </div>
          <div className="w-full px-4 lg:w-12/12">
            <div className="py-6 sm:mt-0">
              <button
                className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-400 rounded shadow outline-none active:bg-blue-500 hover:shadow-md focus:outline-none sm:mr-2"
                type="button"
                onClick={addDataToListBank}
              >
                Tambah
              </button>
            </div>
          </div>

          {listBank.map((e: listBankType, idx: number) => (
            <div className="w-full px-4 mb-3 lg:w-3/12" key={idx}>
              <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap">
                    <div className="relative flex-1 flex-grow w-full max-w-full pr-4">
                      <h5 className="text-xs font-bold uppercase text-slate-400">
                        {e.bank}
                      </h5>
                      <span className="text-xl font-semibold text-slate-700">
                        {e.noRek}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-400">{e.nama}</p>
                </div>
                <div
                  className="absolute cursor-pointer right-2 top-2"
                  onClick={() => {
                    removeDataFromList(e.noRek);
                  }}
                >
                  <AiFillCloseCircle className="text-slate-700" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="mt-6 border-b-1 border-slate-300" />

        <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-slate-400">
          Send Gift
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-12/12">
            <InputType
              label="Alamat"
              placeholder="Letjen S. Parman No.kav.28, Tj. Duren Sel., Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470"
              type="text"
            />
          </div>
        </div>
      </>
    );
  }, [
    nama,
    bank,
    noRek,
    addDataToListBank,
    setNama,
    setBank,
    setNorek,
    removeDataFromList,
  ]);
  return renderMain;
}

export default Form;
