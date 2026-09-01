import type { Point } from "../models/Point.js";
import { angleToRadianConverter } from "../utils/angleToRadian.js";

export function polarToCartesian(center: Point, radius: number, angle: number ): Point {
  
  const radianAngle = angleToRadianConverter(angle)

  const x = center.x + radius * Math.cos(radianAngle) //return X cordinate
  const y = center.y - radius * Math.sin(radianAngle) //return Y cordinate

  return {
    x,
    y
  }
}