class SliderClip {
  constructor(el) {
    this.el = el;
    this.Slides = Array.from(this.el.querySelectorAll("li"));
    this.Nav = Array.from(this.el.querySelectorAll("nav a"));
    this.totalSlides = this.Slides.length;
    this.current = 0;
    this.autoPlay = true;
    this.timeTrans = 4000;
    this.IndexElements = [];

    for (let i = 0; i < this.totalSlides; i++) {
      this.IndexElements.push(i);
    }

    this.setCurret();
    this.initEvents();
  }
  setCurret() {
    this.Slides[this.current].classList.add("current");
    this.Nav[this.current].classList.add("current_dot");
  }
  initEvents() {
    const self = this;

    this.Nav.forEach((dot) => {
      dot.addEventListener("click", (ele) => {
        ele.preventDefault();
        this.changeSlide(this.Nav.indexOf(dot));
      });
    });

    this.el.addEventListener("mouseenter", () => (self.autoPlay = false));
    this.el.addEventListener("mouseleave", () => (self.autoPlay = true));

    setInterval(function () {
      if (self.autoPlay) {
        self.current =
          self.current < self.Slides.length - 1 ? self.current + 1 : 0;
        self.changeSlide(self.current);
      }
    }, this.timeTrans);
  }
  changeSlide(index) {
    this.Nav.forEach((allDot) => allDot.classList.remove("current_dot"));

    this.Slides.forEach((allSlides) =>
      allSlides.classList.remove("prev", "current")
    );
    const getAllPrev = (value) => value < index;
    const prevElements = this.IndexElements.filter(getAllPrev);

    prevElements.forEach((indexPrevEle) =>
      this.Slides[indexPrevEle].classList.add("prev")
    );

    this.Slides[index].classList.add("current");
    this.Nav[index].classList.add("current_dot");
  }
}
async function carregarPresentes() {
  const gridContainer = document.querySelector(".prendas-grid");

  if (!gridContainer) {
    return;
  }

  try {
    const response = await fetch('prendas.json');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const presentes = await response.json();

    let htmlParaInserir = "";
    presentes.forEach(prenda => {
      htmlParaInserir += `
        <div class="prenda-item">
          <img src="${prenda.imagem}" alt="${prenda.nome}">
          <h4>${prenda.nome}</h4>
          <a href="${prenda.url}" target="_blank">Ver na ${prenda.loja}</a>
        </div>
      `;
    });

    gridContainer.innerHTML = htmlParaInserir;

  } catch (error) {
    console.error("Erro ao carregar o ficheiro de presentes:", error);
    gridContainer.innerHTML = "<p>Não foi possível carregar a lista de presentes. Tente novamente mais tarde.</p>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".slider")) {
    const slider = new SliderClip(document.querySelector(".slider"));
  }
  
  carregarPresentes();

  const sections = document.querySelectorAll(".page-section");
  const navLinks = document.querySelectorAll(".navbar-link");
  let currentSectionIndex = 0;
  let isScrolling = false;
  const scrollCooldown = 1000;

  function navigateToSection(index) {
    if (index < 0 || index >= sections.length) return;

    currentSectionIndex = index;

    sections.forEach((section, i) => {
      section.classList.toggle("section-active", i === index);
    });

    navLinks.forEach((link, i) => {
      link.classList.toggle("active-link", i === index);
    });
  }

  navigateToSection(0);

  navLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (isScrolling) return; 
      navigateToSection(index);
    });
  });

  window.addEventListener('wheel', (event) => {
    if (window.innerWidth <= 1024) {
      return;
    }
    
    if (isScrolling) return;

    const direction = event.deltaY > 0 ? 'down' : 'up';
    let nextIndex = currentSectionIndex;

    if (direction === 'down') {
      nextIndex++;
    } else {
      nextIndex--;
    }

    if (nextIndex >= 0 && nextIndex < sections.length) {
      isScrolling = true;
      navigateToSection(nextIndex);
      setTimeout(() => {
        isScrolling = false;
      }, scrollCooldown);
    }
  });
});