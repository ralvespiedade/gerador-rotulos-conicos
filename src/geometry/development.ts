import type { ConeDevelopment } from "../models/ConeDevelopment.js"
import type { ConeDimensions } from "../models/ConeDimensions.js"

export function calculateDevelopment(cone: ConeDimensions): ConeDevelopment {
  

  //Partindo do vértice do cone
  const internalRadius = cone.geratrix - cone.trunkGeratrix

  
  const externalRadius = cone.geratrix
  const angle = cone.radius * 360 / cone.geratrix
  
  return {
    internalRadius,
    externalRadius,
    angle

  }
} 