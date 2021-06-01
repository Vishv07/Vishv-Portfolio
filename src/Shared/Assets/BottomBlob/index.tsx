import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

export const BottomBlob: React.FC<Props> = ({ ...all }) => {
  return (
    <svg
      width='2449'
      height='2197'
      viewBox='0 0 2449 2197'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...all}
    >
      <path
        d='M981.81 1854.54C763.764 1865.7 488.367 1779.03 351.165 1583.3C213.963 1387.57 214.383 1081.55 332.877 855.703C452.605 629.284 690.407 483.034 902.949 472.926C1114.26 463.39 1302.11 590.657 1536.26 652.984C1770.4 715.31 2051.41 713.93 2193.91 853.234C2338.21 993.2 2341.54 1274.99 2206.95 1427.35C2072.35 1579.71 1799.84 1602.64 1581.43 1667.94C1363.59 1734.47 1199.86 1843.38 981.81 1854.54Z'
        fill='#F2F4F8'
        fillOpacity='0.01'
      />
    </svg>
  );
};
