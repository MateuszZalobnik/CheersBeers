import * as React from "react"
import { SVGProps } from "react"
export const CloseSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="#D9D9D9"
    stroke="#D9D9D9"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm3.707 12.293a1 1 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 12 8.293 9.707a1 1 0 0 1 1.414-1.414L12 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414L13.414 12Z" />
  </svg>
)
