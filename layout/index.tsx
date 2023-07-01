import React from "react";
import AuthGuard from "@/core/AuthGuard";
import { AnimatePresence, motion } from "framer-motion";
interface IProps {
  children: React.ReactNode;
}
const Layout = (props: IProps) => {
  const { children } = props;
  return (
    <AuthGuard>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.3,
            },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </AuthGuard>
  );
};

export default Layout;
