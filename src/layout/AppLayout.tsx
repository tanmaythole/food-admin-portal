import React from "react";
import { Outlet } from "react-router-dom";

import Header from "@src/components/header";
import Sidebar from "@src/components/sidebar";

import styles from "./style.module.css";

const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AppLayout;
