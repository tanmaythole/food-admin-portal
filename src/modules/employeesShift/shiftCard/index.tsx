import React from "react";

import EmployeeCard from "./employeeCard";
import Typography from "@src/components/typography";

import { EmployeeShiftDetails } from "../types";
import { PENCIL_ICON, PLUS_ICON } from "@src/constants/icons";

import styles from "../style.module.css";

type Props = {
  title: string;
  shiftData: EmployeeShiftDetails[];
};

const ShiftCard: React.FC<Props> = ({ title, shiftData }) => {
  return (
    <div className={styles.shiftCard}>
      <div className={styles.shiftCardHeader}>
        <Typography variant="title">{title}</Typography>
        <span className={styles.shiftCardHeaderRight}>
          <img src={PENCIL_ICON} />
          <img src={PLUS_ICON} />
        </span>
      </div>
      <div className={styles.shiftCardContent}>
        {shiftData.map((item, index) => (
          <EmployeeCard key={item.name + index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ShiftCard;
