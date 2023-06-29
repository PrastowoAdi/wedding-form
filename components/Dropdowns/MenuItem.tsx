import Link from "next/link";
import React, { useMemo } from "react";

interface IProps {
  href: string;
  title: string;
}

function MenuItem(props: IProps) {
  const { href, title } = props;
  const renderMain = useMemo(() => {
    return (
      <Link href={href} legacyBehavior>
        <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
        >
          {title}
        </a>
      </Link>
    );
  }, [href, title]);
  return renderMain;
}

export default MenuItem;
