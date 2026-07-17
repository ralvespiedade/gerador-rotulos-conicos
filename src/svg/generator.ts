import type { ConeDevelopment } from "../models/ConeDevelopment.js";

export function generateSVG(development: ConeDevelopment): string {
  // Convert values to primitive numbers
  const internalRadius = Number(development.internalRadius);
  const externalRadius = Number(development.externalRadius);
  const angle = Number(development.angle);

  // Convert angle from degrees to radians
  const angleRad = (angle * Math.PI) / 180;

  // Center the cone sector at the top
  const startAngle = -Math.PI / 2 - angleRad / 2;
  const endAngle = -Math.PI / 2 + angleRad / 2;

  const margin = 20;

  // SVG canvas size
  const size = externalRadius * 2 + margin * 2;

  const cx = size / 2;
  const cy = size / 2;

  // Convert polar coordinates to SVG coordinates
  function polarToCartesian(radius: number, angle: number) {
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  }

  // Calculate arc endpoints
  const outerStart = polarToCartesian(externalRadius, startAngle);
  const outerEnd = polarToCartesian(externalRadius, endAngle);

  const innerStart = polarToCartesian(internalRadius, startAngle);
  const innerEnd = polarToCartesian(internalRadius, endAngle);

  // SVG arc flag for angles larger than 180°
  const largeArcFlag = angle > 180 ? 1 : 0;

  return `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${size}"
    height="${size}"
    viewBox="0 0 ${size} ${size}"
  >
  
    <path
      d="M ${outerStart.x} ${outerStart.y}
      A ${externalRadius} ${externalRadius} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}"
      fill="none"
      stroke="black"
      stroke-width="2"
    />
  
    <path
      d="M ${innerStart.x} ${innerStart.y}
      A ${internalRadius} ${internalRadius} 0 ${largeArcFlag} 1 ${innerEnd.x} ${innerEnd.y}"
      fill="none"
      stroke="black"
      stroke-width="2"
    />
  
    <line
      x1="${outerStart.x}"
      y1="${outerStart.y}"
      x2="${innerStart.x}"
      y2="${innerStart.y}"
      stroke="black"
      stroke-width="2"
    />
  
    <line
      x1="${outerEnd.x}"
      y1="${outerEnd.y}"
      x2="${innerEnd.x}"
      y2="${innerEnd.y}"
      stroke="black"
      stroke-width="2"
    />
  
  </svg>
  `;
}
