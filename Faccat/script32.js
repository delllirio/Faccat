// Apostila 2007 — exercício 36: idades de dois homens e duas mulheres
// 36) Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha. 

let homem1 = Number(prompt("Idade do primeiro homem:"));
let homem2 = Number(prompt("Idade do segundo homem:"));
let mulher1 = Number(prompt("Idade da primeira mulher:"));
let mulher2 = Number(prompt("Idade da segunda mulher:"));
let homemMaisVelho;
let homemMaisNovo;
let mulherMaisVelha;
let mulherMaisNova;
if (homem1 > homem2) {
    homemMaisVelho = homem1;
    homemMaisNovo = homem2;
} else {
    homemMaisVelho = homem2;
    homemMaisNovo = homem1;
}
if (mulher1 > mulher2) {
    mulherMaisVelha = mulher1;
    mulherMaisNova = mulher2;
} else {
    mulherMaisVelha = mulher2;
    mulherMaisNova = mulher1;
}
alert("Soma do homem mais velho com a mulher mais nova: " + (homemMaisVelho + mulherMaisNova) +
    "\nProduto do homem mais novo com a mulher mais velha: " + (homemMaisNovo * mulherMaisVelha));
