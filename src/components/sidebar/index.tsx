import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./style.module.css";
import {
  CHART_STATISTICS_ICON,
  COUPON_ICON,
  CUSTOMERS_ICON,
  MENU_ICON,
  PACKAGE_ICON,
  SETTINGS_ICON,
  USER_ICON,
} from "@src/constants/icons";

const sidebarTopConfig = [
  { name: "Dashboard", icon: MENU_ICON, path: "/" },
  { name: "Orders", icon: CHART_STATISTICS_ICON, path: "/orders" },
  { name: "Customers", icon: CUSTOMERS_ICON, path: "/customers" },
  { name: "Package", icon: PACKAGE_ICON, path: "/package" },
  { name: "Coupons", icon: COUPON_ICON, path: "/coupons" },
  { name: "Employees", icon: USER_ICON, path: "/employees" },
  { name: "Settings", icon: SETTINGS_ICON, path: "/settings" },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  return (
    <aside>
      <ul className={styles.sidebar_container}>
        {sidebarTopConfig.map((item) => {
          const isActive = item.path === location.pathname;
          return (
            <li key={item.path}>
              <Link to={item.path}>
                <img
                  src={item.icon}
                  width={24}
                  className={`${styles.sidebarIcon} ${
                    isActive && styles.active
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
