import React from "react";

import ItemSold from "./itemSold";
import LatestOrders from "./latestOrders";
import OrderStats from "./stats";

import styles from "./style.module.css";

const OredrsAnalytics: React.FC = () => {
  return (
    <div>
      <OrderStats />
      <div className={styles.mainContainer}>
        <div className={styles.containerCard}>
          <LatestOrders />
        </div>
        <div className={styles.containerCard}>
          <ItemSold />
        </div>
      </div>
    </div>
  );
};

export default OredrsAnalytics;
