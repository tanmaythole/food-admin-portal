import React, { PropsWithChildren } from "react";

import styles from "./style.module.css";
import Typography from "../typography";

type Props = PropsWithChildren & {
  tabs: string[];
  activeTab: number;
  onChange: (index: number) => void;
};

const TabComponent: React.FC<Props> = ({
  tabs,
  activeTab,
  onChange,
  children,
}) => {
  return (
    <>
      <ul className={styles.tabs}>
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;
          return (
            <li
              key={index}
              className={isActive ? styles.active : ""}
              onClick={() => onChange(index)}
            >
              <Typography variant={isActive ? "title" : "text"}>
                {tab}
              </Typography>
            </li>
          );
        })}
      </ul>
      <div className={styles.tabContainer}>{children}</div>
    </>
  );
};

export default TabComponent;
