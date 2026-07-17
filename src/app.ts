import type { TrunkDimensions } from "./models/TrunkDimensions.js"
import { calculateCone } from "./geometry/cone.js"
import { calculateDevelopment } from "./geometry/development.js"
import { generateSVG } from "./svg/generator.js" 
import { writeFileSync } from "node:fs"

const trunk: TrunkDimensions = {
  topDiameter: 35.5,
  bottomDiameter: 32,
  height: 35,
}

const cone = calculateCone(trunk)

const development = calculateDevelopment(cone)

console.log('=================================')
console.log()
console.log('    RKP3D Cone Label Generator    ')
console.log()
console.log('=================================')
console.log()
console.log('Input')
console.log()
console.log(`Top Diameter...... ${trunk.topDiameter.toFixed(2)}mm`)
console.log(`Bottom Diameter... ${trunk.bottomDiameter.toFixed(2)}mm`)
console.log(`Height............ ${trunk.height.toFixed(2)}mm`)
console.log()
console.log('Trunk Development or "Planificação do Balde"')
console.log()
console.log(`Inner Radius...... ${development.internalRadius.toFixed(2)}mm`)
console.log(`Outer Radius...... ${development.externalRadius.toFixed(2)}mm`)
console.log(`Angle............. ${development.angle.toFixed(2)}°`)

const svg = generateSVG(development)

writeFileSync(
  "./output/label.svg",
  svg
)