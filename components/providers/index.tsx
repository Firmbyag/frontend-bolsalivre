"use client";
import { AppProgressBar } from "next-nprogress-bar";
import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

const LayoutProviders = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {children}
      <AppProgressBar height="6px" color="#001F3D" shallowRouting />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  );
};

export default LayoutProviders;
