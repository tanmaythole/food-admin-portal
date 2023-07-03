import React, { useEffect, useState } from "react";

import Table from "@src/components/table";
import Typography from "@src/components/typography";

import { LatestOrdersData } from "../types";

const tableHeadings = ["No.", "Item", "Quantity", "Revenue", "Net Profit"];

const LatestOrders: React.FC = () => {
  const [ordersData, setOrdersData] = useState<LatestOrdersData[]>([]);

  useEffect(() => {
    fetch("/data/latestOrders.json")
      .then((res) => res.json())
      .then((r) => setOrdersData(r?.data));
  }, []);

  return (
    <>
      <Typography variant="title">Latest Orders</Typography>
      <Table headings={tableHeadings}>
        {ordersData.map((item, index) => (
          <tr key={index}>
            <td>
              <Typography>{index + 1}</Typography>
            </td>
            <td>
              <Typography>{item.item}</Typography>
            </td>
            <td>
              <Typography>{item.quantity}</Typography>
            </td>
            <td>
              <Typography>{item.revenue}</Typography>
            </td>
            <td>
              <Typography>{item.netProfit}</Typography>
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
};

export default LatestOrders;
