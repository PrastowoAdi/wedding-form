import { FormLoveStory, Navbar, Sidebar } from "@/components";
import AuthGuard from "@/core/AuthGuard";
import React, { useMemo } from "react";

const FormLoveStoryPage = () => {
  const renderMain = useMemo(() => {
    return (
      <AuthGuard>
        <Sidebar />
        <div className="relative md:ml-64 bg-slate-600">
          <Navbar />
          <div
            id="main-content"
            className="absolute w-full px-4 mx-auto md:px-10 top-10 md:top-20"
          >
            <div className="flex flex-wrap">
              <div className="w-full mb-12 xl:mb-0">
                <FormLoveStory />
              </div>
            </div>
          </div>
        </div>
      </AuthGuard>
    );
  }, []);
  return renderMain;
};

export default FormLoveStoryPage;
