import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<SVGElement>;

export const ActivityIcon = ({ ...all }: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...all}
  >
    <polyline points='22 12 18 12 15 21 9 3 6 12 2 12'></polyline>
  </svg>
);
