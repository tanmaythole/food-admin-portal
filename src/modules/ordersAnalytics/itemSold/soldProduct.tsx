import React from "react";

import Typography from "@src/components/typography";

import { SoldItemsData } from "../types";

import styles from "../style.module.css";

const SoldProduct: React.FC<SoldItemsData> = ({ item, image, numOfItems }) => {
  return (
    <div className={styles.soldItemCard}>
      <div className={styles.soldItemCardLeft}>
        <img src={image} width={64} height={64} />
        <Typography variant="title">{item}</Typography>
      </div>
      <Typography className="itemsCount">{numOfItems} Items</Typography>
    </div>
  );
};

export default SoldProduct;
