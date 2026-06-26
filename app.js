// Constantes idênticas ao seu #define do C
const V_LUZ = 300.0;
const FATOR_V = 0.95;

function calcularAntena() {
    // Pega os valores da tela
    const freq = parseFloat(document.getElementById('freq').value);
    const fracao_onda = parseFloat(document.getElementById('fracao').value);
    
    // Elementos da tela para exibir a resposta
    const errorMsg = document.getElementById('error-msg');
    const resBox = document.getElementById('resultados-box');
    
    // Limpa mensagens anteriores
    errorMsg.innerText = "";
    resBox.style.display = "none";

    // Validação da frequência (Igual ao seu C: if (freq <= 0))
    if (isNaN(freq) || freq <= 0) {
        errorMsg.innerText = "Digite uma frequência válida";
        return;
    }

    // Validação da fração da onda
    if (isNaN(fracao_onda) || fracao_onda <= 0) {
        errorMsg.innerText = "Digite uma fração de onda válida";
        return;
    }

    // Passo 1: Calcula o comprimento de onda corrigido no metal
    const lambda = (V_LUZ * FATOR_V) / freq;

    // Passo 2: Aplica a fração da antena
    const tamAnt = lambda * fracao_onda;

    // Joga os resultados formatados na tela (toFixed substitui o %.3f do C)
    document.getElementById('res-lambda').innerText = lambda.toFixed(3);
    document.getElementById('res-tam').innerText = tamAnt.toFixed(3);
    document.getElementById('res-cm').innerText = (tamAnt * 100.0).toFixed(1);

    // Mostra o bloco de resultados
    resBox.style.display = "block";
}
