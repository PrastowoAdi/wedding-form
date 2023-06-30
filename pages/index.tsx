import { Navbar, Sidebar } from "@/components";
import AuthGuard from "@/core/AuthGuard";
import { NextPage } from "next";

const MainComponent: NextPage = () => {
  return (
    <AuthGuard>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-600">
        <Navbar />
        <div
          id="main-content"
          className="absolute w-full px-4 mx-auto md:px-10 top-10 md:top-20"
        >
          <div className=""></div>
        </div>
      </div>
    </AuthGuard>
  );
};

export default MainComponent;
