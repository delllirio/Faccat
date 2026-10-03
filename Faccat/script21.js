// Apostila 2007 — exercício 25: saldo atual
// 25) Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 

let conta = prompt("Número da conta:");
let saldo = Number(prompt("Saldo:"));
let debito = Number(prompt("Débito:"));
let credito = Number(prompt("Crédito:"));
let saldoAtual = saldo - debito + credito;
if (saldoAtual >= 0) {
    alert("Conta: " + conta + "\nSaldo atual: " + saldoAtual + "\nSaldo Positivo");
} else {
    alert("Conta: " + conta + "\nSaldo atual: " + saldoAtual + "\nSaldo Negativo");
}
