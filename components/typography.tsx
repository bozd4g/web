import clx from "classnames";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<Props> = ({
  variant,
  children,
  className,
  ...props
}: Props) => {
  const classNames = {
    h1: "text-5xl font-bold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-large font-bold",
    p: "text-base",
  };

  return React.createElement(
    variant,
    { className: clx(classNames[variant], className), ...props },
    children
  );
};

export default Text;
