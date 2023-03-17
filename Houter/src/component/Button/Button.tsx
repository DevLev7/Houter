import cn from "@/utils/cn";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "./Button.module.scss";

interface IButtonProp {
  children: ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  type?: "button" | "submit";
  role?: "button" | "link";
  target?: null | "self" | "blank";
  href?: string;
  className?: string;
}

const ROLE_TO_TAG = {
  button: "button",
  link: "a",
};

const Button: React.FC<IButtonProp> = ({
  children,
  onClick,
  type = "button",
  role = "button",
  target,
  href,
  className,
}) => {
  const htmlTag = ROLE_TO_TAG[role];

  return React.createElement(
    htmlTag,
    {
      onClick,
      className: cn(styles.button, className),
      type,
      role,
      href,
      target,
    },
    children
  );
};

export default Button;
