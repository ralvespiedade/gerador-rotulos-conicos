import type { TrunkDimensions } from "./models/TrunkDimensions.js"
import { calculateFullConeGeratrix } from "./geometry/calculations.js"

const meuBalde: TrunkDimensions = {
  topDiameter: 35.5,
  bottomDiameter: 32,
  height: 35,
}

const cone = calculateFullConeGeratrix(meuBalde)

console.log(`A altura do cone é: ${cone.height}`)
