let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
let ano_atual = 2026;

let ano_nascimento = ano_atual - idade;
let resposta_1 = "Olá " + nome + ", você nasceu em " + ano_nascimento + ".";

document.getElementById("resposta1").innerHTML = resposta_1;
