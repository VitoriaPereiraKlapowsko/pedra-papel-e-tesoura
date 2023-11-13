function jodadaComputador(jogada) {
    var numeroJogado = Math.floor(Math.random() * 3);
    if (numeroJogado == 0 && jogada == '1') {
        alert('Computador jogou Pedra');
        alert('Ops... Deu Empate');
    }
    if (numeroJogado == 0 && jogada == '2') {
        alert('Computador jogou Pedra');
        alert('Você ganhou!!!! Parabéns');
    }
    if (numeroJogado == 0 && jogada == '3') {
        alert('Computador jogou Pedra');
        alert('Vish você perdeu.... Tente novamente!');
    }
    if (numeroJogado == 1 && jogada == '1') {
        alert('Computador jogou Papel');
        alert('Vish você perdeu.... Tente novamente!');
    }
    if (numeroJogado == 1 && jogada == '2') {
        alert('Computador jogou Papel');
        alert('Ops... Deu Empate');
    }
    if (numeroJogado == 1 && jogada == '3') {
        alert('Computador jogou Papel');
        alert('Você ganhou!!!! Parabéns');
    }
    if (numeroJogado == 2 && jogada == '1') {
        alert('Computador jogou Tesoura');
        alert('Você ganhou!!!! Parabéns');
    }
    if (numeroJogado == 2 && jogada == '2') {
        alert('Computador jogou Tesoura');
        alert('Vish você perdeu.... Tente novamente!');
    }
    if (numeroJogado == 2 && jogada == '3') {
        alert('Computador jogou Tesoura');
        alert('Ops... Deu Empate');
    }
}

var jogadaDigitada = prompt(`1 - Pedra,  2 - Papel ou  3 - Tesoura`);
if (jogadaDigitada === '1' || jogadaDigitada === '2' || jogadaDigitada === '3') jodadaComputador(jogadaDigitada);


