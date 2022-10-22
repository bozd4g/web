import clx from "classnames";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

const Content = ({ children, className, innerClassName }: Props) => {
  return (
    <div className={clx("mx-auto max-w-2xl lg:max-w-5xl", className)}>
      <div className={clx("relative px-4 sm:px-8 lg:px-12", innerClassName)}>
        {children}
      </div>
    </div>
  );
};

export default Content;
