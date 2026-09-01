import type { ConeDevelopment } from "../models/ConeDevelopment.js"
import type { Point } from "../models/Point.js"
import { polarToCartesian } from "../geometry/polarToCartesian.js"

const SVG_MARGIN = 10
const STROKE_WIDTH = 0.5

export function generateSVG(development: ConeDevelopment): string {
  validateDevelopment(development)

  const size = development.externalRadius * 2 + SVG_MARGIN * 2
  const center: Point = {
    x: size / 2,
    y: size / 2
  }
  const startAngle = 90 - development.angle / 2
  const endAngle = 90 + development.angle / 2
  const outerStart = polarToCartesian(center, development.externalRadius, startAngle)
  const outerEnd = polarToCartesian(center, development.externalRadius, endAngle)
  const innerStart = polarToCartesian(center, development.internalRadius, startAngle)
  const innerEnd = polarToCartesian(center, development.internalRadius, endAngle)
  const largeArcFlag = development.angle > 180 ? 1 : 0

  return `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${size}mm"
    height="${size}mm"
    viewBox="0 0 ${size} ${size}"
  >
    <path
      d="M ${innerStart.x} ${innerStart.y}
         L ${outerStart.x} ${outerStart.y}
         A ${development.externalRadius} ${development.externalRadius} 0 ${largeArcFlag} 0 ${outerEnd.x} ${outerEnd.y}
         L ${innerEnd.x} ${innerEnd.y}
         A ${development.internalRadius} ${development.internalRadius} 0 ${largeArcFlag} 1 ${innerStart.x} ${innerStart.y}
         Z"
      stroke="blue"
      stroke-width="${STROKE_WIDTH}"
      fill="none"
    />
  </svg>
  `
}

function validateDevelopment(development: ConeDevelopment): void {
  const { internalRadius, externalRadius, angle } = development

  if (![internalRadius, externalRadius, angle].every(Number.isFinite)) {
    throw new RangeError("Development values must be finite numbers")
  }
  if (internalRadius < 0 || externalRadius <= internalRadius) {
    throw new RangeError("The external radius must be greater than the internal radius")
  }
  if (angle <= 0 || angle >= 360) {
    throw new RangeError("The development angle must be between 0 and 360 degrees")
  }
}
