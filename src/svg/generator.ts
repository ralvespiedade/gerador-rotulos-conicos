import type { ConeDevelopment } from "../models/ConeDevelopment.js"

export function generateSVG(development: ConeDevelopment): string {

  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
    >
      <circle
        cx= "250"
        cy= "250"
        r= "100"
      />
    </svg>
  `
} 

