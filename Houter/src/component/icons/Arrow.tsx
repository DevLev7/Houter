import React from "react";

export interface IArrowIconProps {
  className?: string;
}

const ArrowIcon: React.FC<IArrowIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.993 5.002a.988.988 0 0 0-.879.532 1.002 1.002 0 0 0 .116 1.104l4.442 5.348-4.284 5.358a1 1 0 0 0 .15 1.407.99.99 0 0 0 1.142.12.993.993 0 0 0 .305-.27l4.79-5.986a1.001 1.001 0 0 0 0-1.267L10.815 5.36a.993.993 0 0 0-.823-.36Z"
        fill="#fff"
      />
    </svg>
  );
};

export default ArrowIcon;
