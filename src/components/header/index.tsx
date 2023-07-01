import React from "react";

import Typography from "../typography";

import { NOTIFICATION_ICON, USER_ICON } from "@src/constants/icons";

import styles from "./style.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <span>
        <Typography variant="heading">Dazzie</Typography>
      </span>
      <span>
        <img src={NOTIFICATION_ICON} width={28} />
        <span className={styles.profile}>
          <img src={USER_ICON} width={40} />
          <span>
            <Typography variant="title">Tanmay</Typography>
            <Typography variant="small">Cashier</Typography>
          </span>
        </span>
      </span>
    </header>
  );
};

export default Header;
