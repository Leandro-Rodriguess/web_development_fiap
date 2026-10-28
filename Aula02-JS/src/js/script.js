//Declarações

let nome="Fiap";
const idade =30;
let altura=1.75;
let estudante= true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof altura);
console.log(typeof estudante);

// MÉTODOS DE EXIBIÇÃO

// alert("Bem-vindo ao Sistema");

// let nomeUsuario= prompt("Qual é o nome do Usuário")
// // `` ${} = concatenação
// console.log(`Olá, ${nomeUsuario}`)

// let desejaContinuar = confirm("Deseja Realmente Continuar?")
// console.log("Resposta",desejaContinuar)

//Operadores (Aritméticos, Comparação e Lógicos)

//Ariteméticos
let soma = 10 +5; 
console.log(soma)
let multiplicacao = 4 *2;
console.log(multiplicacao)
let subtracao = 10-5;
console.log(subtracao)
let resto= 10 % 3;
console.log(resto)
let divisao =5 / 3;
console.log(divisao)

//comparação

let a =10;
let b= "10";

// = (atribuir)
// == (compara o valor)
// === (compara o valor e o tipo da variavel)

console.log(a == b); //compara
console.log(a === b); //compara e valida
console.log( a > b); //maior
console.log( a >= b) //maior igual
console.log( a != b); //diferente
console.log( a < 10);
//OPERADOR AND && - AS DUAS OPERAÇÕES TEM QUE VERDADEIRAS
console.log(b < a && a > b);
//OPERADOR OR || - UMA DAS OPERAÇÕES TEM QUE SER VERDADEIRA
console.log( a>20 || b >= a);

let temIdade =18;
let habilitacao=true;

let dirigir = (temIdade >= 18) && habilitacao;
console.log("O Usuário pode Dirigir ?", dirigir);


//ESTRUTURA CONDICIONAL

//if
if(false){
    console.log("É VERDADEIRO")
}

//if/else
    
if(false){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}

// if / if else / else - encadeado

let nota = 7;

if (nota >= 8){
    console.log('Aprovado com sucesso')
}

else if(nota >= 6){
    console.log('Ficou de exame')
}
else{
    console.log('Reprovado') // encadeado e quando tem varias opções
}

//SWITCH  CASE

let diaSemana = "5"
switch(diaSemana){
    case 1:
        console.log('Segunda-feira')
        break;
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    default:
        console.log('Outro Dia')
}

// ternario encadeado

let notaUsuario = (nota >= 6)? 'aprovado': 'reprovado';
console.log(notaUsuario)


let idade_1 = 16;
let podePilotar = idade_1 >= 18 ? 'Pode pilotar': "Não pode Pilotar";
console.log(podePilotar)


let resultado = 20;

let jogador = resultado <= 20 ? 'Jogo Bom':
              resultado > 20 && resultado < 99 ? 'jogo Medio':
              resultado > 100 ? 'jogo Extraordinario': 'Extra';

console.log(jogador)

let nome1 = prompt('Qual o seu nome?: ')

let mensagem = nome1 ? `Olá, dev ${nome}`: 'Você não digitou';

console.log(mensagem)

//ESTRUTURA DE REPEICAO


// FOR

    //declaração      operação      incremento 
for(let numero = 0; numero <= 10; numero ++){
    console.log(`Contagem de numeros ${numero}`)
}





