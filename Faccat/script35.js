// Apostila 2007 — exercício 39: operadores lógicos
// 39) Para A = V, B = V e C = F, qual o resultado da avaliação das seguintes expressões:
// a) (A e B) ou (A xou B)
// b) (A ou B) e (A e C)
// c) A ou C e B xou A e não B 

let a = true;
let b = true;
let c = false;
let resultadoA = (a && b) || (a !== b);
let resultadoB = (a || b) && (a && c);
let resultadoC = a || (c && b) !== (a && !b);
alert("a) " + resultadoA + "\nb) " + resultadoB + "\nc) " + resultadoC);
