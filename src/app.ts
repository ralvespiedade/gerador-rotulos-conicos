import type { ConeDimensions } from "./models/ConeDimensions.js"
import { calculateGeratriz } from "./geometry/calculations.js"

const meuBalde: ConeDimensions = {
  topDiameter: 35,
  bottomDiameter: 32,
  height: 35,
}

const geratriz: number = calculateGeratriz(35,2)

const mensagem:string = "Estou gostando muito desse aprendizado, amigão!"


console.log(mensagem)
console.log(meuBalde)
console.log(`A geratriz do seu balde é ${geratriz}.`)