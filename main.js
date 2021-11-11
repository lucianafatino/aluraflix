var listaFilmes = [
    "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_UY268_CR1,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"
  ];
  
  var listaNomeFilmes = [
    'Your Name',
    'Pride & Prejudice',
    'Captain America: The Winter Soldier',
    'Tangled',
    'Shrek 2',
    "How'ls Moving Castle"  
  ];
  
  var filmeEscolha = prompt('Escolha um Filme');
  if(filmeEscolha == 'Your Name'){
    document.write('<img src=' + listaFilmes[0] + '</img>');
  } else if (filmeEscolha == 'Pride & Prejudice'){
    document.write('<img src=' + listaFilmes[1] + '</img>')
  } else if(filmeEscolha == 'Captain America'){
    document.write('<img src=' + listaFilmes[2] + '</img>')
  } else if(filmeEscolha == 'Tangled'){
    document.write('<img src=' + listaFilmes[3] + '</img>')
  } else if(filmeEscolha == 'Shrek 2'){
    document.write('<img src=' + listaFilmes[4] + '</img>')
  } else if(filmeEscolha == 'Howls Moving Castle'){
    document.write('<img src=' + listaFilmes[5] + '</img>')
  } else{
    alert('Desculpe, não temos essa opção em nosso catálogo :(')
  }
  
  for(var i = 0; i < listaFilmes.length; i++){
    document.write('<img src='+ listaFilmes[i] + '</img>');
    document.write('<p>' + listaNomeFilmes[i] + '</p>')
  }
  
  
  