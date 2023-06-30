import { useEffect, useMemo, useState } from "react";
import { createPopper } from "@popperjs/core";
import MenuItem from "./MenuItem";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { actions } from "@/store/authReducer";
import { useRouter } from "next/router";

const UserDropdown = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const openDropdownPopover = () => {
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  useEffect(() => {
    const div: any = document.querySelector("#main-content");
    const button: any = document.querySelector("#button");
    const tooltip: any = document.querySelector("#tooltip");
    createPopper(button, tooltip, {
      placement: "bottom-start",
    });

    div.addEventListener("click", function () {
      closeDropdownPopover();
    });
  }, [dropdownPopoverShow]);

  const renderMain = useMemo(() => {
    return (
      <>
        <a
          className="block cursor-pointer text-slate-500"
          id="button"
          onClick={() => {
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          <div className="flex items-center">
            <span className="inline-flex items-center justify-center w-10 h-10 text-sm text-white rounded-full bg-slate-200">
              <Image
                alt="..."
                className="w-full align-middle border-none rounded-full shadow-lg"
                src="/assets/team-1-800x800.jpg"
                width={500}
                height={500}
              />
            </span>
          </div>
        </a>
        <div
          id="tooltip"
          className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
          }
        >
          <MenuItem href="/" title="Action" />
          <MenuItem
            title="Logout"
            onClick={() => {
              dispatch(actions.authLogout());
              router.replace("/login");
            }}
          />
        </div>
      </>
    );
  }, [dispatch, dropdownPopoverShow, router]);
  return renderMain;
};

export default UserDropdown;
