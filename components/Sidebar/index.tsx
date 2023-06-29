import React, { useMemo } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import SidebarMenu from "./SidebarMenu";
import UserDropdown from "../Dropdowns/UserDropdown";

function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  const renderMain = useMemo(() => {
    return (
      <nav className="sidebar">
        <div className="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
          {/* Toggler */}
          <button
            className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded cursor-pointer md:hidden"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <FaBars />
          </button>
          {/* Brand */}
          <Link href="/" legacyBehavior>
            <a
              href="#pablo"
              className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-slate-900 whitespace-nowrap"
            >
              Divory | Wedding Form
            </a>
          </Link>

          {/* Divider */}
          <hr className="my-4 md:min-w-full" />

          {/* User
          <ul className="flex flex-wrap items-center list-none md:hidden">
            <li className="relative inline-block">
              <UserDropdown />
            </li>
          </ul> */}

          {/* Collapse */}
          <SidebarMenu
            collapseShow={collapseShow}
            setCollapseShow={(val: string) => setCollapseShow(val)}
          />
        </div>
      </nav>
    );
  }, [collapseShow]);
  return renderMain;
}

export default Sidebar;
