import React, { useMemo } from "react";

import { FormShareLove, Navbar, Sidebar } from "@/components";
import AuthGuard from "@/core/AuthGuard";
import { NextPage } from "next";

const MainComponent: NextPage = () => {
  return <FormShareLove />;
};

export default MainComponent;
