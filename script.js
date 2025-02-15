
var dataCasamento = new Date("2024-12-22T18:00:00").getTime();

function atualizarCronometro() {
    // Data e hora atuais
    var agora = new Date().getTime();
    
   
    var diferenca = agora - dataCasamento;

    
    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    
    
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
   
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    
    
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    
    document.getElementById("dias").innerHTML = formatarNumero(dias);
    document.getElementById("horas").innerHTML = formatarNumero(horas);
    document.getElementById("minutos").innerHTML = formatarNumero(minutos);
    document.getElementById("segundos").innerHTML = formatarNumero(segundos);
}

function formatarNumero(num) {
    return num < 10 ? "0" + num : num;
}

setInterval(atualizarCronometro, 1000);