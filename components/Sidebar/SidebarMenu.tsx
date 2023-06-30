import Link from "next/link";
import { useMemo } from "react";
import { IoMdClose } from "react-icons/io";
import MenuItem from "./MenuItem";

interface IProps {
  collapseShow: string;
  setCollapseShow: (val: string) => void;
}

function SidebarMenu(props: IProps) {
  const { collapseShow, setCollapseShow } = props;

  const renderMain = useMemo(() => {
    return (
      <div
        className={
          "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
          collapseShow
        }
      >
        {/* Collapse header */}
        <div className="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-slate-200">
          <div className="flex flex-wrap">
            <div className="w-6/12">
              <Link href="/" legacyBehavior>
                <a
                  href="#pablo"
                  className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-slate-900 whitespace-nowrap"
                >
                  Divory | Wedding Form
                </a>
              </Link>
            </div>
            <div className="flex justify-end w-6/12">
              <button
                type="button"
                className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded cursor-pointer md:hidden"
                onClick={() => setCollapseShow("hidden")}
              >
                <IoMdClose />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <ul className="flex flex-col list-none md:flex-col md:min-w-full">
          <MenuItem href="/" title="Dashboard" />
          <MenuItem href="/form-pengantin" title="Form Pengantin" />
          <MenuItem href="/form-acara" title="Form Acara" />
          <MenuItem href="/form-sharelove" title="Form Share Love" />
        </ul>
      </div>
    );
  }, [collapseShow, setCollapseShow]);
  return renderMain;
}

export default SidebarMenu;
