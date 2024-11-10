let listaDeNumerosSorteados = [];
let limiteNumero = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function mostrarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemsagemInicial() {
    mostrarTextoNaTela('h1', 'jogo do numero');
    mostrarTextoNaTela('p', 'Escolha um Numero entre 1 e 10');
}

exibirMensagemsagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        mostrarTextoNaTela ('h1', 'acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        mostrarTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            mostrarTextoNaTela('p', 'O numero secreto e menor');
        } else {
            mostrarTextoNaTela('p', 'o numero secreto e maior');
        }
        tentativas++;
        limparCampo ();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *limiteNumero+ 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == limiteNumero) {
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemsagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}
