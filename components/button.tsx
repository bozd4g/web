import clx from "classnames";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, className, ...props }: Props) => {
  return React.createElement(
    "button",
    {
      className: clx("", className),
      ...props,
    },
    children
  );
};

export default Button;
