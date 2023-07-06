import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import InputType from "@/components/InputType";
import { IBankInfo, IPropsUserInfo } from "@/types";
import { useAddShareLove } from "@/hooks";
import { toast } from "react-toastify";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

interface IProps {
  data: IPropsUserInfo;
  isLoading: boolean;
}

function Form(props: IProps) {
  const { data, isLoading } = props;
  const mutation = useAddShareLove();

  const [listBank, setListBank] = useState<IBankInfo[]>([]);
  const [nama, setNama] = useState<string>("");
  const [bank, setBank] = useState<string>("");
  const [noRek, setNorek] = useState<string>("");
  const [noTlpn, setNoTlpn] = useState<string>("");
  const [giftLocation, setGiftLocation] = useState<string>("");
  const [isLoadingBtn, isSetLoadingBtn] = useState<boolean>(false);

  const addDataToListBank = useCallback(() => {
    const listBankTemp: IBankInfo[] = [];
    const payload: IBankInfo = {
      name: nama,
      bank_name: bank,
      rek_number: noRek,
      no_tlpn: noTlpn,
    };
    listBankTemp.push(...listBank, payload);
    setListBank(listBankTemp);
    setNama("");
    setBank("");
    setNorek("");
    setNoTlpn("");
  }, [
    listBank,
    nama,
    bank,
    noRek,
    noTlpn,
    setListBank,
    setNama,
    setBank,
    setNoTlpn,
    setNorek,
  ]);

  const removeDataFromList = useCallback(
    (rowSelect: string) => {
      const filterListBank = listBank.filter(
        (e: IBankInfo) => e.rek_number !== rowSelect
      );
      setListBank(filterListBank);
    },
    [listBank, setListBank]
  );

  const editDataFromList = useCallback(
    (rowSelect: string) => {
      const filterStoryList = listBank.find(
        (e: IBankInfo) => e.rek_number === rowSelect
      );
      setNama(filterStoryList?.name ?? "");
      setBank(filterStoryList?.bank_name ?? "");
      setNorek(filterStoryList?.rek_number ?? "");
      setNoTlpn(filterStoryList?.no_tlpn ?? "");
      removeDataFromList(rowSelect);
    },
    [listBank, setNama, setBank, setNorek, setNoTlpn, removeDataFromList]
  );

  const onSubmit = useCallback(() => {
    isSetLoadingBtn(true);
    try {
      mutation.mutate(
        {
          share_love: {
            list_bank: listBank,
            send_gift_location: giftLocation,
          },
        },
        {
          onSuccess(data) {
            if (data) {
              toast.success(data.data.message);
              isSetLoadingBtn(false);
            }
          },
          onError(err: any) {
            toast.error(err.response.data.message);
            isSetLoadingBtn(false);
          },
        }
      );
    } catch (error) {
      console.log("err.submit", error);
      isSetLoadingBtn(false);
    }
  }, [listBank, mutation, giftLocation, isSetLoadingBtn]);

  useEffect(() => {
    if (data && !isLoading) {
      setListBank(data.share_love.list_bank);
      setGiftLocation(data.share_love.send_gift_location);
    }
  }, [data, isLoading]);

  const renderMain = useMemo(() => {
    return (
      <>
        <form>
          <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-slate-400">
            Akun Bank
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-3/12">
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
            <div className="w-full px-4 lg:w-3/12">
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
            <div className="w-full px-4 lg:w-3/12">
              <InputType
                label="No.Rek"
                type="number"
                placeholder="0123129013"
                value={noRek}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNorek(e.target.value)
                }
              />
            </div>
            <div className="w-full px-4 lg:w-3/12">
              <InputType
                label="No.HP"
                type="number"
                placeholder="08222777888"
                value={noTlpn}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNoTlpn(e.target.value)
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

            {listBank.map((e: IBankInfo, idx: number) => (
              <div className="w-full px-4 mb-3 lg:w-3/12" key={idx}>
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg xl:mb-0">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative flex-1 flex-grow w-full max-w-full pr-4">
                        <h5 className="text-xs font-bold uppercase text-slate-400">
                          {e.bank_name}
                        </h5>
                        <span className="text-xl font-semibold text-slate-700">
                          {e.rek_number}
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-slate-400">{e.name}</p>
                    <p className="mt-1 text-xs text-slate-400">{e.no_tlpn}</p>
                  </div>
                  <div className="absolute right-2 top-2">
                    <div className="flex flex-row items-center gap-1">
                      <BiSolidMessageSquareEdit
                        className="cursor-pointer text-slate-700"
                        onClick={() => {
                          editDataFromList(e.rek_number);
                        }}
                      />
                      <AiFillCloseCircle
                        className="cursor-pointer text-slate-700"
                        onClick={() => {
                          removeDataFromList(e.rek_number);
                        }}
                      />
                    </div>
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
                value={giftLocation}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setGiftLocation(e.target.value)
                }
              />
            </div>
          </div>
          <hr className="mt-6 border-b-1 border-slate-300" />
          <div className="px-3 py-6 sm:mt-0">
            {isLoadingBtn ? (
              <div className="w-8 h-8 border-[6px] rounded-full border-slate-600 loader"></div>
            ) : (
              <button
                className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-slate-700 active:bg-slate-600 hover:shadow-md focus:outline-none sm:mr-2 disabled:bg-slate-400 disabled:text-slate-200 disabled:cursor-not-allowed"
                type="button"
                onClick={onSubmit}
                disabled={listBank.length === 0}
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </>
    );
  }, [
    listBank,
    nama,
    bank,
    noRek,
    giftLocation,
    noTlpn,
    isLoadingBtn,
    addDataToListBank,
    setNama,
    setBank,
    setNorek,
    setNoTlpn,
    setGiftLocation,
    removeDataFromList,
    editDataFromList,
    onSubmit,
  ]);
  return renderMain;
}

export default Form;
