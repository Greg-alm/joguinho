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
switch(classe){
        case "guerreiro":
            if(arma.toLowerCase()==="espada" && dado>5){
                resultado += "<span class='sucesso'> SUCESSO: Você apunhalou o monstro com sua espada.</span>"
            }else if(dado>15){
                resultado += "<span class='sucesso'> VITÓRIA: Você espancou o inimigo até a morte.</span>"
            }else{
                resultado += "<span class='derrota'> DERROTA: Você falhou Guerreiro, com a sua morte os monstros dizimaram a humanidade</span>"
            }
            break;

        case "mago":
            if(arma.toLowerCase()==="cajado" && dado>8){
                resultado += "<span class='sucesso'> SUCESSO: Você lançou um feitiço no monstro.</span>"
            }else if(dado>20){
                resultado += "<span class='sucesso'> VITÓRIA: A sorte está do seu lado. Você venceu mesmo sem seus feitiços.</span>"
            }else{
                resultado += "<span class='derrota'> DERROTA: Você falhou miserávelmente. Resoltando em sua morte.</span>"
            }
            break;
    }
}
