let totalPontos = 0;

for (let i = 1; i <= 6; i++) {
    let resultado = prompt(`Digite o resultado da partida ${i} (G para vitória, P para derrota):`).trim().toUpperCase();

    if (resultado === "G") {
        totalPontos += 3;
    } else if (resultado === "P") {
        totalPontos += 
