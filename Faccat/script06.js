// Apostila 2007 — exercício 10: custo final de um carro
// 10) O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor. 

let custoFabrica = Number(prompt("Custo de fábrica do carro:"));
let distribuidor = custoFabrica * 28 / 100;
let impostos = custoFabrica * 45 / 100;
let custoFinal = custoFabrica + distribuidor + impostos;
alert("Custo final: R$ " + custoFinal);
