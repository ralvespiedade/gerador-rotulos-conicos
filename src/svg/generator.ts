import type { ConeDevelopment } from "../models/ConeDevelopment.js"
import type { Point } from "../models/Point.js"
import { angleToRadianConverter } from "../utils/angleToRadian.js"
import { polarToCartesian } from "../utils/polarToCartesian.js"

export function generateSVG(development: ConeDevelopment): string {
  
  const startAngle = angleToRadianConverter(0)
  const endAngle = angleToRadianConverter(development.angle)
  
  const centerX = 450
  const centerY = 450
  
  const center: Point = {
    x: 450,
    y: 450
  }

  const outerStart = polarToCartesian(center, development.externalRadius, 0)
  const outerEnd = polarToCartesian(center, development.externalRadius, development.angle)
  const innerStart = polarToCartesian(center, development.internalRadius, 0)
  const innerEnd = polarToCartesian(center, development.internalRadius, development.angle)
  
  const outerStartX = centerX + development.externalRadius * Math.cos(startAngle)
  const outerStartY = centerY - development.externalRadius * Math.sin(startAngle)
  const outerEndX = centerX + development.externalRadius * Math.cos(endAngle)
  const outerEndY = centerY - development.externalRadius * Math.sin(endAngle)
  
  const innerStartX = centerX + development.internalRadius * Math.cos(startAngle)
  const innerStartY = centerY - development.internalRadius * Math.sin(startAngle)
  const innerEndX = centerX + development.internalRadius * Math.cos(endAngle)
  const innerEndY = centerY - development.internalRadius * Math.sin(endAngle)
  
  //testes:
  console.log() 
  console.log(`Comparando código antigo com o polarToCartesian`)
  console.log(`              Resultado Anterior         Resultado Refatoração`)
  console.log(`outerStart---(${outerStartX.toFixed(4)}, ${outerStartY.toFixed(4)})- - - - (${outerStart.x.toFixed(4)}, ${outerStart.y.toFixed(4)})`)
  console.log(`outerEnd-----(${outerEndX.toFixed(4)}, ${outerEndY.toFixed(4)})- - - - (${outerEnd.x.toFixed(4)}, ${outerEnd.y.toFixed(4)})`)
  console.log(`innerStart---(${innerStartX.toFixed(4)}, ${innerStartY.toFixed(4)})- - - - (${innerStart.x.toFixed(4)}, ${innerStart.y.toFixed(4)})`)
  console.log(`innerEnd-----(${innerEndX.toFixed(4)}, ${innerEndY.toFixed(4)})- - - - (${innerEnd.x.toFixed(4)}, ${innerEnd.y.toFixed(4)})`)
  console.log()
  console.log('======> Debug de Valores de outerEnd e innerEnd <======')
  console.log(`outerEndX - Centro: ${centerX}, Radius: ${development.externalRadius} e angle: ${endAngle}`)
  console.log(`outerEnd.x - Centro: ${center.x}, Radius: ${development.externalRadius} e angle: ${angleToRadianConverter(development.angle)}`)
  
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