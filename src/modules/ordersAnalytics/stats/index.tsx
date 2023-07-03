import React, { useEffect, useState } from "react";

import StatCard from "./statCard";

import styles from "../style.module.css";

import { StatData } from "../types";

const OrderStats: React.FC = () => {
  const [statsData, setStatsData] = useState<StatData[]>([]);

  useEffect(() => {
    fetch("/data/stats.json")
      .then((res) => res.json())
      .then((r) => setStatsData(r.data));
  }, []);

  return (
    <div className={styles.statCards}>
      {statsData.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};

export default OrderStats;
