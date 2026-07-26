// --- 1. LÓGICA DEL CARRUSEL ---
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Cambia de imagen cada 5 segundos valor 5000 puse 60000 para que cambie cada 1 minuto
setInterval(nextSlide, 10000);

// --- 2. INTEGRACIÓN CON YOUTUBE API ---
let player;
const PLAYLIST_ID = 'PLRbPcUP8JIPw'; // Reemplazar con tu ID

// Cargar la API de YouTube
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-player', {
    height: '0',
    width: '0',
    playerVars: {
      'listType': 'playlist',
      'list': PLAYLIST_ID,
      'autoplay': 0,
      'controls': 0
    }
  });
}

// Botón de Play / Pausa
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (!player) return;

  if (!isPlaying) {
    player.playVideo();
    musicBtn.textContent = '⏸ Pausar Música';
    isPlaying = true;
  } else {
    player.pauseVideo();
    musicBtn.textContent = '🎵 Reanudar Música';
    isPlaying = false;
  }
});
