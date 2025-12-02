export function addCarouselBehavior(carouselContainer, carouselContent, options={gap}) {
  carouselContent.style.gap = `${options.gap}px`;
  carouselContent.style.transition = 'translate 0.5s ease';

  let slideIndex = 0;
  let distanceMoved = 0;

  const slides = Array.from(carouselContent.children);

  function prev() {
    if (slideIndex === 0) return;
    const slideRect = slides[slideIndex].getBoundingClientRect();
    const spaceToMove = slideRect.width + options.gap;
    distanceMoved += spaceToMove;
    carouselContent.style.translate = `${distanceMoved}px`;
    slideIndex--;
  }

  function next() {
    if (slideIndex === slides.length-1) return;
    const slideRect = slides[slideIndex].getBoundingClientRect();
    const spaceToMove = slideRect.width + options.gap;
    distanceMoved -= spaceToMove;
    carouselContent.style.translate = `${distanceMoved}px`;
    slideIndex++;
  }

  // next();  // Dev
  // setInterval(next, 5000);

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
}
