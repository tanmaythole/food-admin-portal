import React from "react";

import Typography from "@src/components/typography";

import { EmployeeShiftDetails } from "../types";
import { THREE_DOTS_ICON, USER_ICON } from "@src/constants/icons";

import styles from "../style.module.css";

const EmployeeCard: React.FC<EmployeeShiftDetails> = ({
  name,
  image,
  role,
  color,
  bgColor,
  chipType,
}) => {
  const chipStyle = {
    color: color ? color : "#333333",
    backgroundColor: bgColor ? bgColor : "transparent",
    border: chipType === "outline" ? `1px solid ${color}`: "None",
    borderRadius: 4,
  };

  return (
    <div className={styles.employeeCard}>
      <div className={styles.employeeCardUserContent}>
        <img
          src={image ? image : USER_ICON}
          width={64}
          height={64}
          alt={name}
        />
        <span className={styles.employeeCardContent}>
          <Typography variant="title">{name}</Typography>
          <span className={styles.employeeCardUserContent}>
            <Typography variant="small" className={styles.chip} style={chipStyle}>
              {role}
            </Typography>
            <Typography variant="text" className={styles.detailsBtn}>Details</Typography>
          </span>
        </span>
      </div>
      <img src={THREE_DOTS_ICON} />
    </div>
  );
};

export default EmployeeCard;
