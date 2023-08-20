import React, { useCallback, useEffect, useMemo, useState } from "react";
import InputType from "@/components/InputType";
import { useAddCountdown } from "@/hooks";
import { IFormCountdown, IPropsUserInfo } from "@/types";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import TextArea from "@/components/TextArea";
import DatePicker from "react-datepicker";
interface IProps {
  data: IPropsUserInfo;
  isLoading: boolean;
}

function Form(props: IProps) {
  const { data, isLoading } = props;

  const [startResepsiDate, setStartResepsiDate] = useState(new Date());
  const [endResepsiDate, setEndResepsiDate] = useState(new Date());
  const [startAkadDate, setStartAkadDate] = useState(new Date());
  const [endAkadDate, setEndAkadDate] = useState(new Date());

  const mutation = useAddCountdown();

  const [isLoadingBtn, isSetLoadingBtn] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm<IFormCountdown>();

  const onSubmit = useCallback(
    (data: IFormCountdown) => {
      isSetLoadingBtn(true);
      try {
        data.countdown.akad.startAkadDate = startAkadDate;
        data.countdown.akad.endAkadDate = endAkadDate;
        data.countdown.resepsi.startResepsiDate = startResepsiDate;
        data.countdown.resepsi.endResepsiDate = endResepsiDate;
        data.countdown.live_streaming_status =
          data.countdown.link_live_streaming === undefined ? false : true;
        data.countdown.date = data.countdown.akad.date;
        mutation.mutate(
          {
            ...data,
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
        isSetLoadingBtn(false);
        console.log("err.submit", error);
      }
    },
    [startAkadDate, endAkadDate, startResepsiDate, endResepsiDate, mutation]
  );

  useEffect(() => {
    if (data && !isLoading) {
      setValue("countdown.desc", data.countdown.desc);
      setValue("countdown.akad.location", data.countdown.akad.location);
      setValue("countdown.akad.date", data.countdown.akad.date);
      setValue(
        "countdown.akad.location_name",
        data.countdown.akad.location_name
      );
      setValue(
        "countdown.akad.location_link",
        data.countdown.akad.location_link
      );
      setValue("countdown.resepsi.location", data.countdown.resepsi.location);
      setValue("countdown.resepsi.date", data.countdown.resepsi.date);
      setValue(
        "countdown.resepsi.location_name",
        data.countdown.resepsi.location_name
      );
      setValue(
        "countdown.resepsi.location_link",
        data.countdown.resepsi.location_link
      );
      setValue(
        "countdown.link_live_streaming",
        data.countdown.link_live_streaming
      );
    }
  }, [data, isLoading, setValue]);

  const renderMain = useMemo(() => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-slate-400">
          Section Desc
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-12/12">
            <TextArea
              label="Deskripsi"
              placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, animi! Magni, voluptatibus? Architecto excepturi dignissimos natus tenetur iusto, delectus quia."
              rows={4}
              {...register("countdown.desc")}
            />
          </div>
        </div>

        <hr className="mt-6 border-b-1 border-slate-300" />
        <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-slate-400">
          Akad
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Nama Lokasi"
              type="text"
              placeholder="Gedung Serba Guna"
              {...register("countdown.akad.location")}
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="relative w-full mb-3">
              <label
                className="block mb-2 text-xs font-bold uppercase text-slate-600"
                htmlFor="grid-password"
              >
                Tanggal Acara
              </label>
              <div className="flex gap-2">
                <DatePicker
                  className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
                  selected={startAkadDate}
                  onChange={(date: any) => {
                    setStartAkadDate(date);
                    setEndAkadDate(date);
                  }}
                  timeInputLabel="Time:"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  showTimeInput
                />
                <DatePicker
                  className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
                  selected={endAkadDate}
                  onChange={(date: any) => setEndAkadDate(date)}
                  timeInputLabel="Time:"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  showTimeInput
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-12/12">
            <InputType
              label="Alamat"
              placeholder="Letjen S. Parman No.kav.28, Tj. Duren Sel., Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470"
              type="text"
              {...register("countdown.akad.location_name")}
            />
          </div>
          <div className="w-full px-4 lg:w-12/12">
            <InputType
              label="Link Google Maps"
              placeholder="https://goo.gl/maps/MoZmXx66SWVP4QAq8"
              type="text"
              {...register("countdown.akad.location_link")}
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
              type="text"
              placeholder="Gedung Serba Guna"
              {...register("countdown.resepsi.location")}
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="relative w-full mb-3">
              <label
                className="block mb-2 text-xs font-bold uppercase text-slate-600"
                htmlFor="grid-password"
              >
                Tanggal Acara
              </label>
              <div className="flex gap-2">
                <DatePicker
                  className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
                  selected={startResepsiDate}
                  onChange={(date: any) => {
                    setStartResepsiDate(date);
                    setEndResepsiDate(date);
                  }}
                  timeInputLabel="Time:"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  showTimeInput
                />
                <DatePicker
                  className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
                  selected={endResepsiDate}
                  onChange={(date: any) => setEndResepsiDate(date)}
                  timeInputLabel="Time:"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  showTimeInput
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-12/12">
            <InputType
              label="Alamat"
              placeholder="Letjen S. Parman No.kav.28, Tj. Duren Sel., Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470"
              type="text"
              {...register("countdown.resepsi.location_name")}
            />
          </div>
          <div className="w-full px-4 lg:w-12/12">
            <InputType
              label="Link Google Maps"
              placeholder="https://goo.gl/maps/MoZmXx66SWVP4QAq8"
              type="text"
              {...register("countdown.resepsi.location_link")}
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
              {...register("countdown.link_live_streaming")}
            />
          </div>
        </div>

        <hr className="mt-6 border-b-1 border-slate-300" />
        <div className="px-3 py-6 sm:mt-0">
          {isLoadingBtn ? (
            <div className="w-8 h-8 border-[6px] rounded-full border-slate-600 loader"></div>
          ) : (
            <button
              className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-slate-700 active:bg-slate-600 hover:shadow-md focus:outline-none sm:mr-2"
              type="submit"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    );
  }, [onSubmit, handleSubmit, isLoadingBtn, register]);
  return renderMain;
}

export default Form;
