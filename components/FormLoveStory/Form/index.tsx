import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { toast } from "react-toastify";

import InputType from "@/components/InputType";
import TextArea from "@/components/TextArea";

import { useAddLoveStory } from "@/hooks";
import { IPropsUserInfo } from "@/types";

interface StoryListType {
  title: string;
  date: string;
  story: string;
}

interface IProps {
  data: IPropsUserInfo;
  isLoading: boolean;
}

function Form(props: IProps) {
  const { data, isLoading } = props;

  const mutation = useAddLoveStory();

  const [storyList, setStoryList] = useState<StoryListType[]>([]);
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [story, setStory] = useState<string>("");
  const [isLoadingBtn, isSetLoadingBtn] = useState<boolean>(false);

  const addDataToListStory = useCallback(() => {
    const listStory = [];
    const payload = {
      title,
      date,
      story,
    };
    listStory.push(...storyList, payload);
    setStoryList(listStory);
    setTitle("");
    setDate("");
    setStory("");
  }, [
    title,
    date,
    story,
    storyList,
    setTitle,
    setDate,
    setStory,
    setStoryList,
  ]);

  const removeDataFromListStory = useCallback(
    (rowSelect: string) => {
      const filterStoryList = storyList.filter(
        (e: StoryListType) => e.title !== rowSelect
      );
      setStoryList(filterStoryList);
    },
    [storyList, setStoryList]
  );

  const editDataFromListStory = useCallback(
    (rowSelect: string) => {
      const filterStoryList = storyList.find(
        (e: StoryListType) => e.title === rowSelect
      );
      setTitle(filterStoryList?.title ?? "");
      setDate(filterStoryList?.date ?? "");
      setStory(filterStoryList?.story ?? "");
      removeDataFromListStory(rowSelect);
    },
    [storyList, setTitle, setDate, setStory, removeDataFromListStory]
  );

  const onSubmit = useCallback(() => {
    isSetLoadingBtn(true);
    try {
      mutation.mutate(
        {
          our_love_story: storyList,
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
  }, [storyList, mutation, isSetLoadingBtn]);

  useEffect(() => {
    if (data && !isLoading) {
      setStoryList(data?.our_love_story);
    }
  }, [data, isLoading]);

  const renderMain = useMemo(() => {
    return (
      <form>
        <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-slate-400">
          Love Story
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Title"
              placeholder="First Meet"
              type="text"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputType
              label="Date"
              placeholder="Oktober 2021"
              type="text"
              value={date}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDate(e.target.value)
              }
            />
          </div>
          <div className="w-full px-4 lg:w-12/12">
            <TextArea
              label="Our Love Story"
              placeholder=""
              rows={4}
              value={story}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setStory(e.target.value);
              }}
            />
          </div>
          <div className="w-full px-4 lg:w-12/12">
            <div className="py-6 sm:mt-0">
              <button
                className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-400 rounded shadow outline-none active:bg-blue-500 hover:shadow-md focus:outline-none sm:mr-2"
                type="button"
                onClick={addDataToListStory}
              >
                Tambah
              </button>
            </div>
          </div>

          {storyList.map((e: StoryListType, idx: number) => (
            <div className="w-full px-4 md:mb-3 lg:w-12/12" key={idx}>
              <div className="relative flex flex-col min-w-0 mb-3 break-words bg-white rounded shadow-lg md:mb-6 xl:mb-0">
                <div className="flex-auto p-4">
                  <div className="flex flex-wrap">
                    <div className="relative flex-1 flex-grow w-full max-w-full pr-4">
                      <h5 className="text-xs font-bold uppercase text-slate-400">
                        {e.title} - {e.date}
                      </h5>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-400">{e.story}</p>
                </div>
                <div className="absolute right-2 top-2">
                  <div className="flex flex-row items-center gap-1">
                    <BiSolidMessageSquareEdit
                      className="cursor-pointer text-slate-700"
                      onClick={() => {
                        editDataFromListStory(e.title);
                      }}
                    />
                    <AiFillCloseCircle
                      className="cursor-pointer text-slate-700"
                      onClick={() => {
                        removeDataFromListStory(e.title);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
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
              disabled={storyList.length === 0}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    );
  }, [
    isLoadingBtn,
    storyList,
    title,
    date,
    story,
    setTitle,
    setDate,
    setStory,
    addDataToListStory,
    editDataFromListStory,
    removeDataFromListStory,
    onSubmit,
  ]);
  return renderMain;
}

export default Form;
