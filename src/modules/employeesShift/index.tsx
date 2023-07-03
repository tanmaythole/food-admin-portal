import React, { useEffect, useState } from "react";

import Button from "@src/components/button";
import ShiftCard from "./shiftCard";
import Typography from "@src/components/typography";

import { EmployeeShiftResponse } from "./types";

import styles from "./style.module.css";

const EmployeesShift: React.FC = () => {
  const [shiftData, setShiftData] = useState<EmployeeShiftResponse>([]);

  useEffect(() => {
    fetch("/data/employeeShift.json")
      .then((res) => res.json())
      .then((r) => setShiftData(r.data));
  }, []);

  return (
    <div>
      <div className={styles.employeesHeading}>
        <Typography variant="heading">Employee Shift</Typography>
        <Button label="Create New" />
      </div>
      <div>
        {shiftData.map((shift, index) => (
          <ShiftCard key={index} title={shift.title} shiftData={shift.data} />
        ))}
      </div>
    </div>
  );
};

export default EmployeesShift;
