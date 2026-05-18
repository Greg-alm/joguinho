function lutar(){
    const classe = document.getElementById('classe').value;
    const arma = document.getElementById('arma').value.trim();
    const log = document.getElementById('log');

    if(!arma){
        log.innerHTML="voce esqueceu e equipar uma arma, seu ANIMAL";
        return;
    }


    const dado = Math.floor(Math.random()*20)+1;
    let reultado = `DADO:${dado} |  ${classe} com ${arma}`;
}