import React, { useCallback, useEffect, useMemo, useState } from "react";
import InputType from "@/components/InputType";
import TextArea from "@/components/TextArea";
import { IFormBrideGroom, IListBrideGroom, IPropsUserInfo } from "@/types";
import { useAddBrideGroom } from "@/hooks";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IProps {
  data: IPropsUserInfo;
  isLoading: boolean;
}

function Form(props: IProps) {
  const { data, isLoading } = props;

  const mutation = useAddBrideGroom();
  const [isLoadingBtn, isSetLoadingBtn] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm<IFormBrideGroom>();

  const onSubmit = useCallback(
    (data: IFormBrideGroom) => {
      isSetLoadingBtn(true);
      try {
        data.bride_and_groom.groom.desc =
          data.bride_and_groom.groom.father_name +
          " - " +
          data.bride_and_groom.groom.mother_name;
        data.bride_and_groom.bride.desc =
          data.bride_and_groom.bride.father_name +
          " - " +
          data.bride_and_groom.bride.mother_name;
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
    [mutation, isSetLoadingBtn]
  );

  useEffect(() => {
    if (data && !isLoading) {
      setValue("bride_and_groom.desc", data.bride_and_groom.desc);
      setValue("bride_and_groom.groom.name", data.bride_and_groom.groom.name);
      setValue(
        "bride_and_groom.groom.fullname",
        data.bride_and_groom.groom.fullname
      );
      setValue(
        "bride_and_groom.groom.father_name",
        data.bride_and_groom.groom.father_name
      );
      setValue(
        "bride_and_groom.groom.mother_name",
        data.bride_and_groom.groom.mother_name
      );
      setValue(
        "bride_and_groom.groom.location",
        data.bride_and_groom.groom.location
      );
      setValue("bride_and_groom.bride.name", data.bride_and_groom.bride.name);
      setValue(
        "bride_and_groom.bride.fullname",
        data.bride_and_groom.bride.fullname
      );
      setValue(
        "bride_and_groom.bride.father_name",
        data.bride_and_groom.bride.father_name
      );
      setValue(
        "bride_and_groom.bride.mother_name",
        data.bride_and_groom.bride.mother_name
      );
      setValue(
        "bride_and_groom.bride.location",
        data.bride_and_groom.bride.location
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
              {...register("bride_and_groom.desc")}
            />
          </div>
        </div>
        <hr className="mt-6 border-b-1 border-slate-300" />
        <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-slate-400">
          Pengantin Pria
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Nama Panggilan"
              placeholder="Naruto"
              type="text"
              {...register("bride_and_groom.groom.name")}
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Nama Lengkap"
              placeholder="Dr.Uzumaki Naruto"
              type="text"
              {...register("bride_and_groom.groom.fullname")}
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Nama Ayah"
              placeholder="Sasuke"
              type="text"
              {...register("bride_and_groom.groom.father_name")}
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Nama Ibu"
              placeholder="Hinata"
              type="text"
              {...register("bride_and_groom.groom.mother_name")}
            />
          </div>
          <div className="w-full px-4 lg:w-12/12">
            <InputType
              label="Alamat"
              placeholder="Bekasi, Indonesia"
              type="text"
              {...register("bride_and_groom.groom.location")}
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
              {...register("bride_and_groom.bride.name")}
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Nama Lengkap"
              placeholder="Dr.Uzumaki Naruto"
              type="text"
              {...register("bride_and_groom.bride.fullname")}
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Nama Ayah"
              placeholder="Sasuke"
              type="text"
              {...register("bride_and_groom.bride.father_name")}
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Nama Ibu"
              placeholder="Hinata"
              type="text"
              {...register("bride_and_groom.bride.mother_name")}
            />
          </div>
          <div className="w-full px-4 lg:w-12/12">
            <InputType
              label="Alamat"
              placeholder="Bekasi, Indonesia"
              type="text"
              {...register("bride_and_groom.bride.location")}
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
  }, [isLoadingBtn, handleSubmit, onSubmit, register]);
  return renderMain;
}

export default Form;
