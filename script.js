console.log("Hello world !!!")

let nome = "Ricardo"
console.log(nome)

for (let n = 0; n <= 50; n += 5) {
    console.log(n)
}

nome = "Ricardo"
let sobrenome = "Tavares"
console.log(`Meu nome é ${nome} ${sobrenome}`)

let time = "corinto"
console.log(time.toUpperCase(time))
console.log(time.toLocaleLowerCase(time))

let saudacao = "  Hello World  "
nova = saudacao.trim()
console.log(nova)

let ola = "Olá Ricardo"
novo = ola.replace("Ricardo", "Ricardão")
console.log(novo)

let str = " cocada "
console.log(str.length)

let frase = "Eu sou filho de Deus"
console.log(frase.includes("Eu"))

let x = 10
let y = 20
let soma = x + y
let produto = x * y
let media = (x + y) / 2
let potencia1 = x ** 2
console.log(soma)
console.log(produto)
console.log(media)
console.log(potencia1)
let peso = 90
let altura = 1.8
let IMC = peso / (altura ** 2)
console.log(IMC)

let medida1 = 300
let metro = (medida1 / 100)
console.log(`A medida de ${medida1} centímetros em metros é ${metro} metros.`)

let medida2 = 180
let minuto = medida2 / 60
console.log(`O tempo de ${medida2} segundos em minutos é ${minuto} minutos. `)

let numero=30
let resultado2= numero%2
if (resultado2===0) {
    console.log("Esse número Par.")
}else{
console.log("Número ímpar")
}

let ano = 2020;
console.log((ano % 100)); 

let ano2=2024
if (ano2%4==0 && ano2%100!=0 || ano2%400==0) {
    console.log("Ano Bissexto")
}else{
console.log("Não é ano bissexto.")
}

let n1=30
let n2=40
let mdc=(n1%2==0 && n2%2==0)
console.log(mdc)

let n=17
let divisor=0
for (let index = 1; index <=n; index++) {
    if (n%index==0) {
        divisor++
    }
    ;
    }
    if (divisor==2) {
        console.log("número primo")
    }else{
    console.log("não é primo")
    }

    let a =" o vasco vai ser rebaixado"
    console.log(a.split("_"))

    