import clx from "classnames";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  as?: string;
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({
  as = "div",
  children,
  className,
  ...props
}: Props) => {
  const cls = "mx-auto max-w-2xl lg:max-w-5xl";

  return React.createElement(
    as,
    { className: clx(cls, className), ...props },
    children
  );
};

export default Content;
