import { addDropdownBehavior } from './dropdown.js';
import { addCarouselBehavior } from './carousel.js';

addDropdownBehavior(document.querySelector('.dropdown-elem'), document.querySelector('.dropdown-list'));
// TODO: Test with multiples

addCarouselBehavior(document.querySelector('.carousel-container'), document.querySelector('.carousel-content'), {gap: 20, animationSpeed: 0.5, autoplayInterval: 3});
