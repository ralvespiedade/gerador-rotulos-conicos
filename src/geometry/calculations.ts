


export function calculateGeratriz(altura:number, diferencaRaios:number): number {
  
  //A soma do quadrado dos catetos é igual ao quadrado da hipotenusa. Caramba! Voltei no tempo!
  const quadradoHipotenusa = (altura**2)+(diferencaRaios**2)

  const hipotenusa = Math.sqrt(quadradoHipotenusa)

  console.log(`A geratriz é ${hipotenusa}. :D`)
  
  return hipotenusa
  
}

