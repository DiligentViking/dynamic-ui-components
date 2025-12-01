export function addDropdownBehavior(dropdownElem, dropdownList) {
  dropdownList.style.position = 'absolute';
  const elemPosition = dropdownElem.getBoundingClientRect();
  dropdownList.style.left = `${elemPosition.left}px`;

  dropdownList.style.visibility = 'hidden';

  window.addEventListener('click', (e) => {
    switch (e.target) {
      case dropdownElem:
        dropdownList.style.visibility =
          (dropdownList.style.visibility === 'hidden')
          ? 'visible'
          : 'hidden';
        break;
      case dropdownList:
        break;
      default:
        if (dropdownList.contains(e.target)) break;
        dropdownList.style.visibility = 'hidden';
        break;
    }
  });
}
