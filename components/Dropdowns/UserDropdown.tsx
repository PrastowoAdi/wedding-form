import { useEffect, useState } from "react";
import { createPopper } from "@popperjs/core";
import MenuItem from "./MenuItem";

const UserDropdown = () => {
  // dropdown props
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

  return (
    <>
      <a
        className="block cursor-pointer text-slate-500"
        id="button"
        onClick={() => {
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-10 h-10 text-sm text-white rounded-full bg-slate-200">
            <img
              alt="..."
              className="w-full align-middle border-none rounded-full shadow-lg"
              src="/assets/team-1-800x800.jpg"
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
      </div>
    </>
  );
};

export default UserDropdown;
