import React, { Fragment, useEffect, useMemo, useState } from "react";

import Card from "./components/card";
import Input from "@src/components/input";
import TabComponent from "@src/components/tabComponent";
import Typography from "@src/components/typography";

import { SEARCH_ICON } from "@src/constants/icons";
import { Orders } from "./types";

import styles from "./style.module.css";

const tabsHeadings = ["All", "Food", "Drinks", "Snacks", "Packages"];

const Dashboard: React.FC = () => {
  const [ordersData, setOrdersData] = useState<Orders>({});
  const [activeTab, setActiveTab] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetch("/data/orders.json")
      .then((res) => res.json())
      .then((r: { status: string; data: Orders }) => {
        setOrdersData(r.data);
      });
  }, []);

  const filterOrdersData = useMemo(() => {
    if (activeTab === 0) {
      return [];
    }

    const categoryData = ordersData[tabsHeadings[activeTab].toLowerCase()];
    if (searchQuery) {
      return categoryData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return categoryData;
  }, [ordersData, activeTab, searchQuery]);

  const renderCards = () => {
    if (activeTab === 0) {
      return Object.entries(ordersData).map(([heading, items]) => {
        const filteredItems = items.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return (
          Boolean(filteredItems.length) && (
            <Fragment key={heading}>
              <Typography variant="heading" className={styles.heading}>
                {heading}
              </Typography>
              <div className={styles.cardContainer}>
                {filteredItems.map((item) => (
                  <Card key={item.title} {...item} />
                ))}
              </div>
            </Fragment>
          )
        );
      });
    } else {
      return (
        <div className={styles.cardContainer}>
          {filterOrdersData.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className={styles.menu}>
        <Input
          placeholder="Search Here..."
          leftIcon={<img src={SEARCH_ICON} />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <TabComponent
        tabs={tabsHeadings}
        activeTab={activeTab}
        onChange={setActiveTab}
      >
        {renderCards()}
      </TabComponent>
    </div>
  );
};

export default Dashboard;
