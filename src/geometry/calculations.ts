import type { TrunkDimensions } from "../models/TrunkDimensions.js"
import type { ConeDimensions } from "../models/ConeDimensions.js"

export function calculateFullConeGeratrix(trunk: TrunkDimensions): ConeDimensions {
  
  //calcula o raio superior do tronco
  const topRadius = trunk.topDiameter / 2

  //calcula o raio inferior do tronco
  const bottomRadius = trunk.bottomDiameter / 2

  const biggerRadius = Math.max(topRadius, bottomRadius)
  
  const smallerRadius = Math.min(topRadius, bottomRadius)
  
  //calcula distancia entre o raios do tronco
  const radiusDifference = biggerRadius - smallerRadius

  if (radiusDifference === 0) {
      throw new Error(
          "O tronco deve possuir diâmetros diferentes."
      )
  }

    
  //regra de 3 para achar a altura do cone
  const coneHeight = trunk.height * biggerRadius / radiusDifference
  
  console.log(`trunk.height: ${trunk.height}`)
  console.log(`BiggerRadius: ${biggerRadius}`)
  console.log(`radiusDifference: ${radiusDifference}`)

  //Aplica Pitágoras e acha hipotenusa que é a geratriz do cone
  const fullConeGeratrixSquared = (coneHeight**2)+(biggerRadius**2)
  
  const fullConeGeratrix = Math.sqrt(fullConeGeratrixSquared)
  
  return {
    height: coneHeight,
    radius: biggerRadius,
    geratrix: fullConeGeratrix
  }
  
}
  

  
