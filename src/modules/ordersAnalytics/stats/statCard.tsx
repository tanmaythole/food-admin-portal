import React from "react";

import Typography from "@src/components/typography";

import { ARROW_DOWN_ICON, ARROW_UP_ICON } from "@src/constants/icons";
import { StatData } from "../types";

import styles from "../style.module.css";

const StatCard: React.FC<StatData> = ({
  title,
  count,
  isProfit,
  percentage,
}) => (
  <div className={styles.statCard}>
    <div className={styles.statcardRow}>
      <Typography variant="title">{title}</Typography>
      <img src={isProfit ? ARROW_UP_ICON : ARROW_DOWN_ICON} />
    </div>
    <div className={styles.statcardRow}>
      <Typography variant="title">{count}</Typography>
      <Typography
        variant="title"
        className={isProfit ? styles.success : styles.error}
      >
        {!isProfit && "-"}
        {percentage}%
      </Typography>
    </div>
  </div>
);

export default StatCard;
