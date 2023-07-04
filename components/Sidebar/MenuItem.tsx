import { actions } from "@/store/authReducer";
import { Dispatch } from "@reduxjs/toolkit";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";

interface IProps {
  href: string;
  title: string;
}
function MenuItem(props: IProps) {
  const { title, href } = props;
  const dispatch = useDispatch();

  const router = useRouter();

  const renderMain = useMemo(() => {
    return (
      <li className="items-center">
        <Link href={href} legacyBehavior>
          <a
            className={`text-xs uppercase py-3 font-bold block ${
              router.pathname === href
                ? "text-sky-500 hover:text-sky-600"
                : "text-slate-700 hover:text-slate-500"
            }`}
            onClick={() => {
              dispatch(actions.authSetTitleNav(href));
            }}
          >
            <i
              className={`fas fa-tv mr-2 text-sm ${
                router.pathname === href ? "opacity-75" : "text-slate-300"
              }`}
            ></i>
            {title}
          </a>
        </Link>
      </li>
    );
  }, [title, href, router.pathname, dispatch]);
  return renderMain;
}

export default MenuItem;
