import React from "react";

export interface ILocationIconProps {
  className?: string;
}

const LocationIcon: React.FC<ILocationIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1c2.387 0 4.676.993 6.364 2.762C20.052 5.53 21 7.928 21 10.429c0 4.505-2.902 8.652-8.598 12.449a.726.726 0 0 1-.804 0C5.902 19.08 3 14.934 3 10.428c0-2.5.948-4.898 2.636-6.666C7.324 1.993 9.613 1 12 1Zm0 6.286c-.796 0-1.559.33-2.121.92A3.22 3.22 0 0 0 9 10.43c0 .833.316 1.633.879 2.222.562.59 1.325.92 2.121.92s1.559-.33 2.121-.92A3.22 3.22 0 0 0 15 10.429a3.22 3.22 0 0 0-.879-2.223A2.933 2.933 0 0 0 12 7.286Z"
        fill="#F59E0B"
      />
    </svg>
  );
};

export default LocationIcon;
