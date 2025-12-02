export function addCarouselBehavior(carouselContainer, carouselContent, options={gap, animationSpeed}) {
  // Customization //

  carouselContent.style.gap = `${options.gap}px`;
  carouselContent.style.transition = `translate ${options.animationSpeed}s ease`;

  // Movement Calculations //

  let slideIndex = 0;

  const slides = Array.from(carouselContent.children);
  const movePoints = [0];
  let acc = 0;
  for (const slide of slides) {
    const slideRect = slide.getBoundingClientRect();
    const spaceToMove = slideRect.width + options.gap;
    acc += spaceToMove;
    movePoints.push(acc);
  }
  movePoints.pop();

  function moveSlideToPoint() {
    const placeToMoveTo = movePoints[slideIndex] * -1;
    carouselContent.style.translate = `${placeToMoveTo}px`;
    highlightCurrentNavdot();
  }

  function prev() {
    if (slideIndex === 0) return;
    slideIndex--;
    moveSlideToPoint();
  }

  function next() {
    if (slideIndex === movePoints.length-1) return;
    slideIndex++;
    moveSlideToPoint();
  }

  // Next/Prev Buttons //

  const carouselIncrementButtons = document.createElement('div');
  carouselIncrementButtons.classList.add('carousel-increment-buttons');

  const carouselPrev = document.createElement('button');
  carouselPrev.classList.add('carousel-prev');
  carouselPrev.textContent = '<';

  const carouselNext = document.createElement('button');
  carouselNext.classList.add('carousel-next');
  carouselNext.textContent = '>';

  carouselIncrementButtons.append(carouselPrev, carouselNext);
  carouselContainer.append(carouselIncrementButtons);

  carouselPrev.onclick = prev;
  carouselNext.onclick = next;

  // Navigation Dots //

  const carouselNavigationDots = document.createElement('div');
  carouselNavigationDots.classList.add('carousel-navigation-dots');

  for (let x = 0; x < movePoints.length; x++) {
    const navDot = document.createElement('button');
    navDot.classList.add('carousel-navdot');
    navDot.dataset.slideindex = x;

    carouselNavigationDots.appendChild(navDot);
  }

  carouselContainer.appendChild(carouselNavigationDots);

  carouselNavigationDots.addEventListener('click', (e) => {
    if (e.target.classList.contains('carousel-navdot')) {
      slideIndex = +e.target.dataset.slideindex;
      moveSlideToPoint();
    }
  });

  highlightCurrentNavdot();

  function highlightCurrentNavdot() {
    carouselNavigationDots.querySelector('.carousel-navdot.current-slide')?.classList.remove('current-slide');
    carouselNavigationDots.querySelector(`.carousel-navdot[data-slideindex="${slideIndex}"]`).classList.add('current-slide');
  }
}
