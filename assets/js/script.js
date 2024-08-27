function startImageSlideshow() {
  const images = ["assets/images/slider-1.jpeg", "assets/images/slider-2.jpeg", "assets/images/slider-3.jpeg"];
  let index = 0;

  function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("main").style.backgroundImage = `url(${images[index]})`;
  }

  setInterval(nextImage, 3000);
}

startImageSlideshow();
