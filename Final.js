// Actividad Final
let numero
let i
let sumaPares
let s

// 1 y 2

function declaracionDeNumero(){

numero = 0

while(numero <= 0){
    numero = parseInt(prompt('ingrese un numero entero positivo'))
    if(numero <= 0){
        console.log('el numero ingresado no es valido')
    }
}
}

// 3
function numerosPares(){
console.log (`numeros pares de 1 hasta ${numero} :`)
for (let p = 1; p <= numero; p++){
if(p % 2 == 0)
console.log(p)
}
}

// 4

function numerosImpares(){
console.log(`numeros impares desde 1 hasta ${numero} :`)
i = 1
while (i <= numero) {
    if (i % 2 != 0) {
        console.log(i)
    }
    i++
}
}

//5

function sumaPar(){
sumaPares = 0
s = 0
do {
    if (s % 2 == 0) {
        sumaPares = sumaPares + s
    }
    s++
} while (s <= numero);


console.log(`la suma de los numeros pares del 1 hasta ${numero} es: ${sumaPares} `)
}

function general (){
    declaracionDeNumero()
    numerosPares()
    numerosImpares()
    sumaPar()
}



general()


