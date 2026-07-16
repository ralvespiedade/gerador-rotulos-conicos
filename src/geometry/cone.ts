import type { TrunkDimensions } from "../models/TrunkDimensions.js"
import type { ConeDimensions } from "../models/ConeDimensions.js"

export function calculateCone(trunk: TrunkDimensions): ConeDimensions {
  
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
  

  //Aplica Pitágoras e acha a geratriz do tronco
  const trunkGeratrixSquared = (trunk.height**2)+(radiusDifference**2)
  
  const trunkGeratrix = Math.sqrt(trunkGeratrixSquared)
     
  //Aplica Pitágoras e acha hipotenusa que é a geratriz do cone
  const fullConeGeratrixSquared = (coneHeight**2)+(biggerRadius**2)
  
  const fullConeGeratrix = Math.sqrt(fullConeGeratrixSquared)
  
  
  return {
    height: coneHeight,
    radius: biggerRadius,
    geratrix: fullConeGeratrix,
    trunkGeratrix
  }
}
 

  

  
