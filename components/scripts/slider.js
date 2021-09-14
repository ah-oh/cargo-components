export function loadSlider() {
  sliderOptions = { dist: 0, padding: 150 };
  elems = document.querySelectorAll(".carousel");
  instances = M.Carousel.init(elems, sliderOptions);

  elemSlider = document.querySelector(".carousel");
  instanceSlider = M.Carousel.getInstance(elemSlider);

  document.getElementById("next").addEventListener("click", function () {
    instanceSlider.next();
  });

  document.getElementById("previous").addEventListener("click", function () {
    instanceSlider.prev();
  });
}
