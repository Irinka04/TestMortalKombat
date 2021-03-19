$(document).ready(function () {
  //1. удалили лишнее   
  //2. поменяли #myBlock на #app
  //3. зададим путь до видео
  $('#app').vide({
    mp4: './video/video.mp4',
    webm: './video/video.webm',
    ogv: './video/video.ogv',
    // путь для постера 
    poster: './img/cover-image.jpg'
  });
});