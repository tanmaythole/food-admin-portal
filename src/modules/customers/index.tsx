import React, { useEffect, useMemo, useState } from "react";

import Input from "@src/components/input";
import Table from "@src/components/table";
import Typography from "@src/components/typography";

import {
  FILTER_ICON,
  SEARCH_ICON,
  THREE_DOTS_ICON,
} from "@src/constants/icons";
import { TCustomers } from "./type";

import styles from "./style.module.css";

const customerTableHeadings = [
  "ID",
  "Name",
  "Join Date",
  "Total Visit",
  "Purchased Items",
  "Total Spend",
];

const Customers: React.FC = () => {
  const [customersList, setCustomersList] = useState<TCustomers[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetch("/data/customers.json")
      .then((res) => res.json())
      .then((r: { status: string; data: TCustomers[] }) =>
        setCustomersList(r.data)
      );
  }, []);

  const filteredList = useMemo(() => {
    return customersList.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, customersList]);

  return (
    <div>
      <Typography variant="heading" className={styles.heading}>
        Customers
      </Typography>
      <div className="container">
        <div className={styles.custContainer}>
          <div className={styles.headingRow}>
            <span className={styles.inputWrapper}>
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search here..."
                leftIcon={<img src={SEARCH_ICON} />}
              />
            </span>
            <img src={FILTER_ICON} />
            <img src={THREE_DOTS_ICON} />
          </div>
          <Table headings={customerTableHeadings}>
            {filteredList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.joinDate}</td>
                <td>{item.totalVisit}</td>
                <td>{item.purchasedItems.join(";")}</td>
                <td>{item.totalSpend}</td>
              </tr>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
