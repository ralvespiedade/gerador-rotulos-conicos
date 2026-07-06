import type { ConeDimensions } from "./models/ConeDimensions.js"
import { calculateGeratriz } from "./geometry/calculations.js"

const meuBalde: ConeDimensions = {
  topDiameter: 35,
  bottomDiameter: 32,
  height: 35,
}

const geratriz = calculateGeratriz(meuBalde)

console.log(`Geratriz: ${geratriz}`)
