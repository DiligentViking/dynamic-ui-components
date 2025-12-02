export function addCarouselBehavior(carouselContainer, carouselContent, options={gap, animationSpeed}) {
  carouselContent.style.gap = `${options.gap}px`;
  carouselContent.style.transition = `translate ${options.animationSpeed}s ease`;

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
  console.log(movePoints);

  function prev() {
    if (slideIndex === 0) return;
    slideIndex--;
    const placeToMoveTo = movePoints[slideIndex] * -1;
    carouselContent.style.translate = `${placeToMoveTo}px`;
  }

  function next() {
    if (slideIndex === movePoints.length-1) return;
    slideIndex++;
    const placeToMoveTo = movePoints[slideIndex] * -1;
    carouselContent.style.translate = `${placeToMoveTo}px`;
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


/*

0
-220
-440
-660
-880
-1100
-1320

*/
