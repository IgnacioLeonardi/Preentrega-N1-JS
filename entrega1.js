let salirMenu = false
let volverAtras = false
let total = 0
let cantidad = 0

do {
   volverAtras = false
   let cambioDivisa1 = parseInt(prompt(`Ingrese que divisa desea convertir:
    1 - Pesos
    2 - Dolares
    3 - Euros
    4 - Reales
    0 - Salir`))
   switch (cambioDivisa1) {
      case 1:
         //Convierte de pesos a otra moneda usando la función cambio.
         do {
            window.alert("A seleccionado Pesos.")
            let cambioDivisa2 = parseInt(prompt(`Ingrese a que divisa desea convertir: 
            1 - Dolar
            2 - Euro
            3 - Reales
            0 - Volver atras`))

            switch (cambioDivisa2) {
               case 1:
                  window.alert("Usted va a convertir de Pesos a Dolares.")
                  cantidad = parseInt(prompt(`Ingrese la cantidad que desea convertir`))
                  while (isNaN(cantidad)) {
                     cantidad = parseInt(prompt(`Atencion!! Ingrese la cantidad que desea convertir en numeros:`))
                  }
                  total = cambio(cantidad, 260, 2)
                  console.log(`El cambio es: ${total.toFixed(2)} Dolares.`)
                  volverAtras = true
                  break
               case 2:
                  window.alert("Usted va a convertir de Pesos a Euros.")
                  cantidad = parseInt(prompt(`Ingrese la cantidad que desea convertir`))
                  while (isNaN(cantidad)) {
                     cantidad = parseInt(prompt(`Atencion!! Ingrese la cantidad que desea convertir en numeros:`))
                  }
                  total = cambio(cantidad, 270, 2)
                  console.log(`El cambio es: ${total.toFixed(2)} Euros.`)
                  volverAtras = true
                  break
               case 3:
                  window.alert("Usted va a convertir de Pesos a Reales.")
                  cantidad = parseInt(prompt(`Ingrese la cantidad que desea convertir`))
                  while (isNaN(cantidad)) {
                     cantidad = parseInt(prompt(`Atencion!! Ingrese la cantidad que desea convertir en numeros:`))
                  }
                  total = cambio(cantidad, 53.30, 2)
                  console.log(`El cambio es: ${total.toFixed(2)} Reales.`)
                  volverAtras = true
                  break
               case 0:
                  volverAtras = true
                  break
               default:
                  window.alert("Opción no válida, ingrese alguna presente en el menu")
                  break
            }
         } while (!volverAtras)
         break
      case 2:
         //Convierte dolares a otra moneda usando la función cambio.
         do {
            window.alert("A seleccionado Dolares.")
            let cambioDivisa2 = parseInt(prompt(`Ingrese a que divisa desea convertir: 
            1 - Pesos
            2 - Euro
            3 - Reales
            0 - Volver atras`))

            switch (cambioDivisa2) {
               case 1:
                  window.alert("Usted va a convertir de Dolares a Pesos.")
                  cantidad = parseInt(prompt(`Ingrese la cantidad que desea convertir`))
                  while (isNaN(cantidad)) {
                     cantidad = parseInt(prompt(`Atencion!! Ingrese la cantidad que desea convertir en numeros:`))
                  }
                  total = cambio(cantidad, 260, 1)
                  console.log(`El cambio es: ${total.toFixed(2)} Pesos.`)
                  volverAtras = true
                  break
               case 2:
                  window.alert("Usted va a convertir de Dolares a Euros.")
                  cantidad = parseInt(prompt(`Ingrese la cantidad que desea convertir`))
                  while (isNaN(cantidad)) {
                     cantidad = parseInt(prompt(`Atencion!! Ingrese la cantidad que desea convertir en numeros:`))
                  }
                  total = cambio(cantidad, 0.93, 1)
                  console.log(`El cambio es: ${total.toFixed(2)} Euros.`)
                  volverAtras = true
                  break
               case 3:
                  window.alert("Usted va a convertir de Dolares a Reales.")
                  cantidad = parseInt(prompt(`Ingrese la cantidad que desea convertir`))
                  while (isNaN(cantidad)) {
                     cantidad = parseInt(prompt(`Atencion!! Ingrese la cantidad que desea convertir en numeros:`))
                  }
                  total = cambio(cantidad, 4.93, 1)
                  console.log(`El cambio es: ${total.toFixed(2)} Reales.`)
                  volverAtras = true
                  break
               case 0:
                  volverAtras = true
                  break
               default:
                  window.alert("Opción no válida, ingrese alguna presente en el menu")
                  break
            }
         } while (!volverAtras)
         break
      case 3:
         //Convierte euros a otra moneda usando la función cambio.
         do {
            window.alert("A seleccionado Euros.")
            let cambioDivisa2 = parseInt(prompt(`Ingrese a que divisa desea convertir: 
            1 - Pesos
            2 - Dolares
            3 - Reales
            0 - Volver atras`))

            switch (cambioDivisa2) {
               case 1:
                  window.alert("Usted va a convertir de Euros a Pesos.")
                  cantidad = parseInt(prompt(`Ingrese la cantidad que desea convertir`))
                  while (isNaN(cantidad)) {
                     cantidad = parseInt(prompt(`Atencion!! Ingrese la cantidad que desea convertir en numeros:`))
                  }
                  total = cambio(cantidad, 270, 1)
                  console.log(`El cambio es: ${total.toFixed(2)} Pesos.`)
                  volverAtras = true
                  break
               case 2:
                  window.alert("Usted va a convertir de Euros a Dolares.")
                  cantidad = parseInt(prompt(`Ingrese la cantidad que desea convertir`))
                  while (isNaN(cantidad)) {
                     cantidad = parseInt(prompt(`Atencion!! Ingrese la cantidad que desea convertir en numeros:`))
                  }
                  total = cambio(cantidad, 1.07, 1)
                  console.log(`El cambio es: ${total.toFixed(2)} Dolares.`)
                  volverAtras = true
                  break
               case 3:
                  window.alert("Usted va a convertir de Euros a Reales.")
                  cantidad = parseInt(prompt(`Ingrese la cantidad que desea convertir`))
                  while (isNaN(cantidad)) {
                     cantidad = parseInt(prompt(`Atencion!! Ingrese la cantidad que desea convertir en numeros:`))
                  }
                  total = cambio(cantidad, 5.28, 1)
                  console.log(`El cambio es: ${total.toFixed(2)} Reales.`)
                  volverAtras = true
                  break
               case 0:
                  volverAtras = true
                  break
               default:
                  window.alert("Opción no válida, ingrese alguna presente en el menu")
                  break
            }
         } while (!volverAtras)
         break
      case 4:
         //Convierte reales a otra moneda usando la función cambio.
         do {
            window.alert("A seleccionado Reales.")
            let cambioDivisa2 = parseInt(prompt(`Ingrese a que divisa desea convertir: 
            1 - Pesos
            2 - Dolares
            3 - Euros
            0 - Volver atras`))

            switch (cambioDivisa2) {
               case 1:
                  window.alert("Usted va a convertir de Reales a Pesos.")
                  cantidad = parseInt(prompt(`Ingrese la cantidad que desea convertir`))
                  while (isNaN(cantidad)) {
                     cantidad = parseInt(prompt(`Atencion!! Ingrese la cantidad que desea convertir en numeros:`))
                  }
                  total = cambio(cantidad, 49.21, 1)
                  console.log(`El cambio es: ${total.toFixed(2)} Pesos.`)
                  volverAtras = true
                  break
               case 2:
                  window.alert("Usted va a convertir de Reales a Dolares.")
                  cantidad = parseInt(prompt(`Ingrese la cantidad que desea convertir`))
                  while (isNaN(cantidad)) {
                     cantidad = parseInt(prompt(`Atencion!! Ingrese la cantidad que desea convertir en numeros:`))
                  }
                  total = cambio(cantidad, 0.20, 1)
                  console.log(`El cambio es: ${total.toFixed(2)} Dolares.`)
                  volverAtras = true
                  break
               case 3:
                  window.alert("Usted va a convertir de Reales a Euros.")
                  cantidad = parseInt(prompt(`Ingrese la cantidad que desea convertir`))
                  while (isNaN(cantidad)) {
                     cantidad = parseInt(prompt(`Atencion!! Ingrese la cantidad que desea convertir en numeros:`))
                  }
                  total = cambio(cantidad, 0.19, 1)
                  console.log(`El cambio es: ${total.toFixed(2)} Euros.`)
                  volverAtras = true
                  break
               case 0:
                  volverAtras = true
                  break
               default:
                  window.alert("Opción no válida, ingrese alguna presente en el menu")
                  break
            }
         } while (!volverAtras)
         break
      case 0:
         console.log(`Gracias por utilizar nuestra app. Saludos!`)
         salirMenu = true
         break
      default:
         window.alert("Opción no válida, ingrese alguna presente en el menu")
         break
   }
} while (!salirMenu)
//Funcion de calculo de cambio con retorno
function cambio(divisa1, divisa2, operacion) {
   switch (operacion) {
      case 1:
         total = divisa1 * divisa2
         return total
      case 2:
         total = divisa1 / divisa2
         return total
   }
}