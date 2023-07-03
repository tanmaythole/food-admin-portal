import React, { useEffect, useMemo, useState } from "react";

import Button from "@src/components/button";
import CouponRow from "./couponRow";
import Input from "@src/components/input";
import Table from "@src/components/table";
import Typography from "@src/components/typography";

import {
  FILTER_ICON,
  SEARCH_ICON,
  THREE_DOTS_ICON,
} from "@src/constants/icons";
import { CouponsData } from "./types";

import styles from "./style.module.css";

const tableHeadings = [
  "ID",
  "Code",
  "Discount",
  "Start Date",
  "End Date",
  "Activate",
  "",
];

const Coupon: React.FC = () => {
  const [coupons, setCoupons] = useState<CouponsData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetch("/data/coupons.json")
      .then((res) => res.json())
      .then((r) => setCoupons(r.data));
  }, []);

  const filteredCoupons = useMemo(() => {
    return coupons.filter((cpn) =>
      cpn.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [coupons, searchQuery]);

  return (
    <div>
      <div className={styles.couponsHeading}>
        <Typography variant="heading">Coupon</Typography>
        <Button label="Create New" />
      </div>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <span className={styles.inputWrapper}>
            <Input
              placeholder="Search Here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<img src={SEARCH_ICON} />}
            />
          </span>
          <img src={FILTER_ICON} alt="Filter" />
          <img src={THREE_DOTS_ICON} alt="More" />
        </div>
        <Table headings={tableHeadings}>
          {filteredCoupons.map((cpn, index) => (
            <CouponRow key={cpn.code} index={index + 1} {...cpn} />
          ))}
        </Table>
      </div>
    </div>
  );
};

export default Coupon;
