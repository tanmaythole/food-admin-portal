import React, { useState } from "react";

import Typography from "@src/components/typography";
import Switch from "@src/components/switch";

import { CouponsData } from "./types";
import { THREE_DOTS_ICON } from "@src/constants/icons";

type Props = CouponsData & {
  index: number;
};

const CouponRow: React.FC<Props> = ({
  index,
  code,
  discount,
  startDate,
  endDate,
  isActivate,
}) => {
  const [isActive, setIsActive] = useState(isActivate);

  return (
    <tr>
      <td>
        <Typography>{index}</Typography>
      </td>
      <td>
        <Typography>{code}</Typography>
      </td>
      <td>
        <Typography>{discount}</Typography>
      </td>
      <td>
        <Typography>{startDate}</Typography>
      </td>
      <td>
        <Typography>{endDate}</Typography>
      </td>
      <td>
        <Typography>
          <Switch isChecked={isActive} onChange={setIsActive} />
        </Typography>
      </td>
      <td>
        <img src={THREE_DOTS_ICON} alt="More" />
      </td>
    </tr>
  );
};

export default CouponRow;
