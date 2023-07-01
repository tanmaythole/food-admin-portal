import React, { PropsWithChildren } from "react";

import Typography from "../typography";

import styles from "./style.module.css";

type Props = PropsWithChildren & {
  headings: string[];
};

const Table: React.FC<Props> = ({ headings, children }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headings.map((th) => (
            <th key={th}>
              <Typography variant="title">{th}</Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
