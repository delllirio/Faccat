// Apostila 2007 — exercício 21: duração de partida de xadrez
// 21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. 

let inicio = Number(prompt("Hora de início (0 a 23):"));
let fim = Number(prompt("Hora de fim (0 a 23):"));
let duracao;
if (fim > inicio) {
    duracao = fim - inicio;
} else {
    duracao = 24 - inicio + fim;
}
alert("Duração do jogo: " + duracao + " hora(s)");
