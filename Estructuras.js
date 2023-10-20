function separaNumeros() {
  // numerosEnteros = []
  // PARA CADA parametro recibido en la funcion:
  // SI parametro ES entero
  // numerosEnteros.push(parametro)

  // return numerosENterosd
  arguments
  var numerosEnteros = [];

  for (var i = 0; i < arguments.length; i++) {
    let valor = arguments[i];
    if (Number.isInteger(valor)) {
      numerosEnteros.push(valor);

    }
return numerosEnteros;

  }
}

console.log(separaNumeros("Hola"));
console.log(separaNumeros("Hola", "Adios"));
console.log(separaNumeros("Hola", "Adios", 123));
console.log(separaNumeros("Hola", "Adios", undefined, 222222, new Date()));
