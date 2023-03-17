import cn from "@/utils/cn";
import React, { memo } from "react";
import s from "./Text.module.scss";

export interface iTextProps {
  children: React.ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?:
    | "white"
    | "blue"
    | "orange"
    | "gray"
    | "light"
    | "text-grey"
    | "lilac"
    | "light-lilac";
  weight?: "400" | "500" | "600" | "700";
  style?: "h1" | "h2" | "h3" | "p";
  size?: keyof typeof TEXT_SIZE_TO_CLASSNAME;
  className?: string;
}

const TEXT_STYLE_TO_CLASSNAME = {
  h1: s.h1,
  h2: s.h2,
  h3: s.h3,
  p: s.root,
};

const TEXT_SIZE_TO_CLASSNAME = {
  xs: s.sizeXs,
  xs_mini: s.sizeXsMini,
  sm: s.sizeSm,
  md: s.sizeMd,
  lg: s.sizeLg,
};

const Text: React.FC<iTextProps> = ({
  children,
  tag = "p",
  color,
  weight,
  style = "p",
  className,
  size,
}) => {
  return React.createElement(
    tag,
    {
      className: cn(
        TEXT_STYLE_TO_CLASSNAME[style],
        color && s[color],
        weight && s[`weight${weight}`],
        size && TEXT_SIZE_TO_CLASSNAME[size],
        className
      ),
    },
    children
  );
};

export default memo(Text);
