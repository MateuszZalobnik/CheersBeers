import * as React from 'react';
import { SVGProps } from 'react';
export const ReloadIconSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#D9D9D9"
    stroke="#D9D9D9"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <title>{'Reload'}</title>
    <g fill="none" fillRule="evenodd" stroke="none">
      <path d="M0 0h24v24H0z" />
      <path
        stroke="#D9D9D9"
        strokeLinecap="round"
        strokeWidth={2}
        d="M4 13a8 8 0 1 0 3.755-6.782"
      />
      <path
        stroke="#D9D9D9"
        strokeLinecap="round"
        strokeWidth={2}
        d="m9.238 1.898-1.74 3.941a1 1 0 0 0 .512 1.319l3.94 1.74"
      />
    </g>
  </svg>
);
