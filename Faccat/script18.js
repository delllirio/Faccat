// Apostila 2007 — exercício 22: salário com horas extras
// 22) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). 

let horas = Number(prompt("Horas trabalhadas no mês:"));
let valorHora = Number(prompt("Valor da hora normal:"));
let horasNormais = 40 * 4;
let salario;
if (horas > horasNormais) {
    salario = horasNormais * valorHora + (horas - horasNormais) * valorHora * 1.5;
} else {
    salario = horas * valorHora;
}
alert("Salário total: R$ " + salario);
