function changeGame(index) {
  const imagensPC = document.querySelectorAll('.banner-slider-pc img');
  const imagensMobile = document.querySelectorAll('.banner-slider img');
  const title = document.getElementById('titulo');
  const text = document.getElementById('texto');
  const jogoLogo = document.getElementById('jogo-logo');
  const banner = document.getElementById('banner');
  const ancoraBanner = document.getElementById('ancora');
  const trailerJogoPrevia = document.getElementById('trailer-jogo-preview');
  const trailerJogoGif = document.getElementById('trailer-jogo');

  // Definir caminhos das imagens ativadas
  const imagePaths = [
      'assets/banner/slider-ativo-diablo.png',
      'assets/banner/slider-ativo-hearthstone.png',
      'assets/banner/slider-ativo-wow.png',
      'assets/banner/slider-ativo-diablo3.png',
      'assets/banner/slider-ativo-starcraft.png'
  ];

  // Definir títulos correspondentes
  const titles = [
      'Retorne à escuridão com o game Diablo IV',
      'Novo pacote de expansão de Hearthstone',
      'Desbrave as Terras Sombrias em Shadowlands!',
      'Explore o reino sombrio de Diablo Immortal',
      'Prepare-se para a Épica Batalha de StarCraft 2!'
  ];

  // Definir textos correspondentes
  const texts = [
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
    'url(assets/banner/1293868.jpg)',
    'url(assets/banner/668795.jpg)'
  ];

  const textsAncora = [
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
    'assets/banner/video-preview-diablo3.png',
  ];

  const trailerJogos = [
    'url(assets/banner/diablo-animation.gif)',
    'url(assets/banner/hearthstone-animation.gif)',
    'url(assets/banner/wow-animation.gif)',
    'url(assets/banner/src_assets_img_diablo-animation.webm)'
  ];

  // Atualizar imagem ativada no banner-slider-pc
  imagensPC.forEach((image, i) => {
      if (i === index) {
          image.src = imagePaths[i];
          image.alt = titles[i];
      } else {
          image.src = image.src.replace('-ativo', ''); // Reverter para a imagem não ativada
          image.alt = image.getAttribute('data-value'); // Usar o atributo data-value como alt
      }
  });

  imagensMobile.forEach((image, i) => {
    if (i === index) {
        image.src = imagePaths[i];
        image.alt = titles[i];

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
  title.textContent = titles[index];
  text.textContent = texts[index];
  jogoLogo.src = logoJogos[index];
  banner.style.backgroundImage = backgroundBanner[index];
  ancoraBanner.textContent = textsAncora[index];
  trailerJogoPrevia.src = trailerJogosPrevia[index];
  trailerJogoGif.style.backgroundImage = trailerJogos[index];
}
