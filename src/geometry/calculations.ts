import type { ConeDimensions } from "../models/ConeDimensions.js"



export function calculateGeratriz(cone: ConeDimensions): number {
  
  //calcular o raio superior
  const topRadius = cone.topDiameter / 2

  //calcular o raio inferior
  const bottomRadius = cone.bottomDiameter / 2
  
  //calculando distancia entre o raios
  const radiusDifference = topRadius - bottomRadius

  //A soma do quadrado dos catetos é igual ao quadrado da hipotenusa. Caramba! Voltei no tempo aplicando Pitágoras
  const quadradoHipotenusa = (cone.height**2)+(radiusDifference**2)

  const hipotenusa = Math.sqrt(quadradoHipotenusa)
  
  return hipotenusa
  
}
