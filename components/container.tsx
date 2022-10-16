import clx from "classnames";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  as?: string;
  size?: "default" | "large";
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({
  as = "div",
  size = "default",
  children,
  className,
  ...props
}: Props) => {
  const sizes = {
    default: "max-w-screen-sm mx-auto px-6",
    large: "max-w-screen-xl mx-auto px-6",
  };

  return React.createElement(
    as,
    { className: clx(sizes[size], className), ...props },
    children
  );
};

export default Container;
