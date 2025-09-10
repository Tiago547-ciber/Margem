
function Calcular() {
    let tela = document.getElementById("tela");
    let vendaAtual = document.getElementById("ano-1").value;
    let margemAtual = document.getElementById("margemAtual").value;
    let desconto = document.getElementById("desconto").value;
    let vendaSemLucro = Number(vendaAtual)-(Number(vendaAtual)*(Number(margemAtual)/100));
    let lucro = Number(vendaAtual) - Number(vendaSemLucro);
    let margemFinal = (Number(lucro) - Number(desconto)) * 100 / vendaAtual;
    tela.innerHTML = "";
    let formatado = margemFinal.toFixed(2);
    tela.append(formatado);
}
