import React from "react";

import UserDropdown from "@/components/Dropdowns/UserDropdown";
import Link from "next/link";
import { useSelector } from "react-redux";
import { IState } from "@/types/iState";

export default function Navbar() {
  const navTitle = useSelector((state: IState) => state.nav);
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 z-10 flex items-center w-full p-4 bg-transparent md:flex-row md:flex-nowrap md:justify-start">
        <div className="flex flex-wrap items-center justify-between w-full px-4 mx-autp md:flex-nowrap md:px-10">
          {/* Brand */}
          <Link href="/" legacyBehavior>
            <a className="hidden text-sm font-semibold uppercase text-slate-500 lg:inline-block">
              {navTitle.title}
            </a>
          </Link>
          {/* User */}
          <ul className="flex-col items-center hidden list-none md:flex-row md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
