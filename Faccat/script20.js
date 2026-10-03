// Apostila 2007 — exercício 24: salário e comissão progressiva
// 24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total. 

let salarioFixo = Number(prompt("Salário fixo:"));
let vendas = Number(prompt("Valor total das vendas:"));
let comissao;
if (vendas <= 1500) {
    comissao = vendas * 0.03;
} else {
    comissao = 1500 * 0.03 + (vendas - 1500) * 0.05;
}
alert("Salário total: R$ " + (salarioFixo + comissao));
