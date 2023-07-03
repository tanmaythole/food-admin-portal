import React from "react";

import styles from "./style.module.css";

type Props = {
  isChecked: boolean;
  onChange: (value: boolean) => void;
};

const Switch: React.FC<Props> = ({ isChecked, onChange }) => {
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange(!isChecked)}
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export default Switch;
