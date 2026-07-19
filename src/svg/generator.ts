import type { ConeDevelopment } from "../models/ConeDevelopment.js"
import { angleToRadianConverter } from "../utils/angleToRadian.js"

export function generateSVG(development: ConeDevelopment): string {

  const startAngle = angleToRadianConverter(0)
  const endAngle = angleToRadianConverter(development.angle)
  
  const centerX = 450
  const centerY = 450
  
  const outerStartX = centerX + development.externalRadius * Math.cos(startAngle)
  const outerStartY = centerY - development.externalRadius * Math.sin(startAngle)
  const outerEndX = centerX + development.externalRadius * Math.cos(endAngle)
  const outerEndY = centerY - development.externalRadius * Math.sin(endAngle)
  
  const innerStartX = centerX + development.internalRadius * Math.cos(startAngle)
  const innerStartY = centerY - development.internalRadius * Math.sin(startAngle)
  const innerEndX = centerX + development.internalRadius * Math.cos(endAngle)
  const innerEndY = centerY - development.internalRadius * Math.sin(endAngle)
  
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="900"
      height="900"
    >
    <path 
      d="
        
        M ${innerStartX} ${innerStartY} 
        L ${outerStartX} ${outerStartY} 
        A
          ${development.externalRadius}
          ${development.externalRadius}
          0
          0
          1
          ${outerEndX}
          ${outerEndY}
        L ${innerEndX} ${innerEndY}
        A
          ${development.internalRadius}
          ${development.internalRadius}
          0
          0
          1
          ${innerStartX}
          ${innerStartY} 
      " 
      stroke="blue"
      stroke-width="2"
      fill="none"
    />
      
    </svg>
  `
} 

