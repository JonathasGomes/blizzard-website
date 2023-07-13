function changeGame(index) {
  const images = document.querySelectorAll('.banner-slider-pc img');
  const title = document.getElementById('titulo');
  const text = document.getElementById('texto');
  const jogoLogo = document.getElementById('jogo-logo');
  const banner = document.getElementById('banner');
  const ancoraBanner = document.getElementById('ancora');
  const trailerJogoPreview = document.getElementById('trailer-jogo-preview');
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
      'Novo título do jogo Diablo 3',
      'Novo título do jogo Starcraft'
  ];

  // Definir textos correspondentes
  const texts = [
      'O retorno de Lilith traz uma era de escuridão e sofrimento',
      'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
      'O que jaz além do mundo que você conhece?',
      'Descrição do jogo Diablo 3',
      'Descrição do jogo Starcraft'
  ];

  const logoJogos = [
    'assets/banner/logo-diablo.png',
    'assets/banner/logo-hearthstone.png',
    'assets/banner/logo-wow.png'
  ];

  const backgroundBanner = [
    'url(assets/banner/banner-diablo.jpg)',
    'url(assets/banner/banner-hearthstone.jpg)',
    'url(assets/banner/banner-wow.jpg)',
  ];

  const textsAncora = [
    'Jogue Agora',
    'Reserve agora na pré-venda',
    'Reserve agora na pré-venda'
  ];
  
  const trailerJogosPreview = [
    'assets/banner/video-preview-diablo.png',
    'assets/banner/video-preview-hearthstone.png',
    'assets/banner/video-preview-wow.png',
  ];

  const trailerJogos = [
    'url(assets/banner/diablo-animation.gif)',
    'url(assets/banner/hearthstone-animation.gif)',
    'url(assets/banner/wow-animation.gif)'
  ];

  // Atualizar imagem ativada no banner-slider-pc
  images.forEach((image, i) => {
      if (i === index) {
          image.src = imagePaths[i];
          image.alt = titles[i];
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
  trailerJogoPreview.src = trailerJogosPreview[index];
  trailerJogoGif.style.backgroundImage = trailerJogos[index];
}
