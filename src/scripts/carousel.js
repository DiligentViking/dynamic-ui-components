export function addCarouselBehavior(carouselContainer, carouselContent, options={gap}) {
  carouselContent.style.gap = `${options.gap}px`;
  carouselContent.style.transition = 'translate 1s ease';

  let slideIndex = 0;
  let distanceMoved = 0;

  const slides = carouselContent.children;

  function next() {
    const slideRect = slides[slideIndex].getBoundingClientRect();
    const spaceToMove = slideRect.width + options.gap;
    distanceMoved += spaceToMove;
    carouselContent.style.translate = `-${distanceMoved}px`;
    slideIndex++;
  }

  next();  // Dev
  setInterval(next, 5000);
}
