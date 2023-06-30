import Link from "next/link";
import React, { AnchorHTMLAttributes, useMemo } from "react";

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  title: string;
}

function MenuItem(props: IProps) {
  const { href, title, ...children } = props;
  const renderMain = useMemo(() => {
    return (
      <Link href={href} legacyBehavior>
        <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          {...children}
        >
          {title}
        </a>
      </Link>
    );
  }, [href, title, children]);
  return renderMain;
}

export default MenuItem;
