import React, { useEffect, useState } from "react";

import SoldProduct from "./soldProduct";
import Typography from "@src/components/typography";

import { SoldItemsData } from "../types";

const ItemSold: React.FC = () => {
  const [soldItemsData, setSoldItemsData] = useState<SoldItemsData[]>([]);

  useEffect(() => {
    fetch("/data/soldItems.json")
      .then((res) => res.json())
      .then((r) => setSoldItemsData(r.data));
  }, []);

  return (
    <>
      <Typography variant="title">Item Sold</Typography>
      <div>
        {soldItemsData.map((item) => (
          <SoldProduct key={`${item.item}-${item.numOfItems}`} {...item} />
        ))}
      </div>
    </>
  );
};

export default ItemSold;
