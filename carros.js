//codigo carros
let xCarros = [520, 520 ,520, 520, 520 ,520];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2 , 2.5, 4, 3, 3.5, 7];
let comprimentoCarros = 50;
let alturaCarros = 40;

//mostra imagem carros
function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i ++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
}

//movimento carros
function movimentaCarro(){
    for (let i = 0; i < imagemCarros.length; i ++){
    xCarros[i] -= velocidadeCarros[i]
  }
}

  function voltaPosicaoInicialDoCarro(){
      for (let i = 0; i < imagemCarros.length; i ++){
      if (passouTodaATela(xCarros[i])){
          xCarros[i] = 600
    }
  } 
}

function passouTodaATela(xCarros){
    return xCarros < -50
}



