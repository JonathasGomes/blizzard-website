function changeGame(index) {
  const imagensPC = document.querySelectorAll('.banner-slider-pc img');
  const imagensMobile = document.querySelectorAll('.banner-slider img');
  const titulos = document.getElementById('titulo');
  const texto = document.getElementById('texto');
  const jogoLogo = document.getElementById('jogo-logo');
  const banner = document.getElementById('banner');
  const ancoraBanner = document.getElementById('ancora');
  const trailerJogoPrevia = document.getElementById('trailer-jogo-preview');
  const trailerJogoGif = document.getElementById('trailer-jogo');

  const sliderAtivo = [
      'assets/banner/slider-ativo-diablo.png',
      'assets/banner/slider-ativo-hearthstone.png',
      'assets/banner/slider-ativo-wow.png',
      'assets/banner/slider-ativo-diablo3.png',
      'assets/banner/slider-ativo-starcraft.png'
  ];

  const titulosBanner = [
      'Retorne à escuridão com o game Diablo IV',
      'Novo pacote de expansão de Hearthstone',
      'Desbrave as Terras Sombrias em Shadowlands!',
      'Explore o reino sombrio de Diablo Immortal',
      'Prepare-se para a Épica Batalha de StarCraft 2!'
  ];

  const textosBanner = [
      'O retorno de Lilith traz uma era de escuridão e sofrimento',
      'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
      'O que jaz além do mundo que você conhece?',
      'Enfrente males ancestrais e descubra o que aconteceu entre Diablo II e Diablo III',
      'Comande um exército em batalhas galácticas de tirar o fôlego'
  ];

  const logoJogos = [
    'assets/banner/logo-diablo.png',
    'assets/banner/logo-hearthstone.png',
    'assets/banner/logo-wow.png',
    'assets/banner/logo-diablo3.png',
    'assets/banner/logo-starcraft2.png'
  ];

  const backgroundBanner = [
    'url(assets/banner/banner-diablo.jpg)',
    'url(assets/banner/banner-hearthstone.jpg)',
    'url(assets/banner/banner-wow.jpg)',
    'url(assets/banner/banner-diablo-imortal.jpg)',
    'url(assets/banner/banner-starcraft2.jpg)'
  ];

  const textosBannerAncora = [
    'Jogue Agora',
    'Reserve agora na pré-venda',
    'Reserve agora na pré-venda',
    'Jogue Agora',
    'Jogue Agora'
  ];
  
  const trailerJogosPrevia = [
    'assets/banner/video-preview-diablo.png',
    'assets/banner/video-preview-hearthstone.png',
    'assets/banner/video-preview-wow.png',
    'assets/banner/video-preview-diablo3.jpg',
    'assets/banner/video-preview-starcraft2.jpg'
  ];

  const trailerJogos = [
    'url(assets/banner/diablo-animation.gif)',
    'url(assets/banner/hearthstone-animation.gif)',
    'url(assets/banner/wow-animation.gif)',
    'url(assets/banner/diablo-immortal-animation.gif)',
    'url(assets/banner/starcraft2-animation.gif)'
  ];

  // Atualizar imagem ativada no banner-slider-pc
  imagensPC.forEach((image, i) => {
      if (i === index) {
          image.src = sliderAtivo[i];
          image.alt = titulosBanner[i];
      } else {
          image.src = image.src.replace('-ativo', ''); // Reverter para a imagem não ativada
          image.alt = image.getAttribute('data-value'); // Usar o atributo data-value como alt
      }
  });

  imagensMobile.forEach((image, i) => {
    if (i === index) {
        image.src = sliderAtivo[i];
        image.alt = titulosBanner[i];

        if(i === 1 || i === 2) {
          banner.style.backgroundPosition = '66%';
        }
        else if (i === 4) {
          banner.style.backgroundPosition = '8%';
        }
        else {
          banner.style.backgroundPosition = '36%';
        }
        
    } else {
        image.src = image.src.replace('-ativo', ''); // Reverter para a imagem não ativada
        image.alt = image.getAttribute('data-value'); // Usar o atributo data-value como alt
    }
  });

  // Atualizar título e texto
  titulos.textContent = titulosBanner[index];
  texto.textContent = textosBanner[index];
  jogoLogo.src = logoJogos[index];
  banner.style.backgroundImage = backgroundBanner[index];
  ancoraBanner.textContent = textosBannerAncora[index];
  trailerJogoPrevia.src = trailerJogosPrevia[index];
  trailerJogoGif.style.backgroundImage = trailerJogos[index];

  AOS.refresh();
}

const cardGames = document.querySelectorAll('.card-game');

cardGames.forEach(cardGame => {
  const image = cardGame.querySelector('.card-game__capa-game');
  const video = cardGame.querySelector('.card-game__video');

  cardGame.addEventListener('mouseover', () => {
    image.style.display = 'none';
    video.style.display = 'block';

    // Iniciar a reprodução do vídeo
    video.play().catch(error => {
      console.log('Erro ao reproduzir o vídeo:', error);
    });
  });

  cardGame.addEventListener('mouseout', () => {
    image.style.display = 'block';
    video.style.display = 'none';
    video.pause();
  });

  video.addEventListener('ended', () => {
    video.currentTime = 0; // Reinicia o vídeo para o início
    video.play(); // Reproduz o vídeo novamente
  });
});
