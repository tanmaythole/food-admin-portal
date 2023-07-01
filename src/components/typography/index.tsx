import React, { PropsWithChildren } from "react";

import "./style.css";

type Props = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "heading" | "title" | "text" | "small";
  };

const Typography: React.FC<Props> = ({
  children,
  variant = "text",
  className,
  ...props
}) => {
  return (
    <div className={`typography-${variant} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Typography;
