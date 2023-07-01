import React from "react";
import AuthGuard from "@/core/AuthGuard";

interface IProps {
  children: React.ReactNode;
}
const Layout = (props: IProps) => {
  const { children } = props;
  return <AuthGuard>{children}</AuthGuard>;
};

export default Layout;
