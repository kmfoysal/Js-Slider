const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const dotNav = document.querySelector(".dot-nav");


let slideNumber = 1;
const length = images.length;

// Create Dot 
for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "dot";
  dotNav.appendChild(div);
}

const buttons = document.querySelectorAll(".dot");
buttons[0].style.backgroundColor = "yellow";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};


buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    slideNumber = i + 1;
    button.style.backgroundColor = "yellow";
  });
});


const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
};


const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};


const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  slideNumber = length;
};

const changeColor = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "yellow";
};

next.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
  changeColor();
});

prev.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
});