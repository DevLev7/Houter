import React from "react";

export interface IGreenCloudProps {
  className?: string;
}

const GreenCloud: React.FC<IGreenCloudProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="704"
      height="507"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity=".3" filter="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M314.209 181.001c-11.036 34.668-36.295 61.189-59.172 89.461-19.711 24.359-40.717 46.073-65.745 64.911-27.878 20.983-54.17 50.185-89.019 51.573-34.962 1.393-64.322-24.539-93.206-44.312-27.156-18.59-46.492-44.207-69.901-67.348-32.04-31.674-87.333-49.644-93.6-94.285-6.059-43.156 37.923-76.651 64.787-110.94 23.81-30.39 50.385-57.306 83.085-77.799C25.015-28.78 61.082-55.98 100.273-50.215c39.128 5.755 55.765 55.714 91.815 71.994 42.028 18.979 104.667-7.2 132.748 29.413 26.867 35.03 2.768 87.727-10.627 129.809Z"
          fill="#82F7FF"
        />
      </g>
      <g opacity=".3" filter="url(#b)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M561.209 96c-11.036 34.669-36.295 61.19-59.172 89.462-19.711 24.359-40.717 46.073-65.745 64.911-27.878 20.983-54.17 50.185-89.019 51.573-34.962 1.393-64.322-24.539-93.206-44.312-27.156-18.59-46.492-44.207-69.901-67.348-32.04-31.674-87.333-49.644-93.6-94.285-6.059-43.156 37.923-76.651 64.787-110.94 23.809-30.39 50.385-57.306 83.085-77.799 33.577-21.043 69.644-48.243 108.835-42.477 39.128 5.755 55.765 55.714 91.815 71.994 42.028 18.979 104.667-7.2 132.748 29.413C598.703 1.222 574.604 53.919 561.209 96Z"
          fill="#82FFD2"
        />
      </g>
      <defs>
        <filter
          id="a"
          x="-277"
          y="-171"
          width="734"
          height="678"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="60"
            result="effect1_foregroundBlur_4_17"
          />
        </filter>
        <filter
          id="b"
          x="-30"
          y="-256"
          width="734"
          height="678"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="60"
            result="effect1_foregroundBlur_4_17"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default GreenCloud;
