import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

export const DownArrowIcon: React.FC<Props> = ({ ...all }) => {
  return (
    <svg
      width='18'
      height='10'
      viewBox='0 0 18 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...all}
    >
      <path
        d='M1 1L9 9L17 1'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
