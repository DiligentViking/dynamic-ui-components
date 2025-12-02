export function addDropdownBehavior(dropdownElem, dropdownList) {
  dropdownList.style.position = 'absolute';
  const elemPosition = dropdownElem.getBoundingClientRect();
  dropdownList.style.left = `${elemPosition.left}px`;

  dropdownList.classList.add('hide-dropdown-list');

  window.addEventListener('click', (e) => {
    switch (e.target) {
      case dropdownElem:
        dropdownList.classList.toggle('hide-dropdown-list');
        break;
      case dropdownList:
        break;
      default:
        if (dropdownList.contains(e.target)) break;
        dropdownList.classList.add('hide-dropdown-list');
        break;
    }
  });
}
