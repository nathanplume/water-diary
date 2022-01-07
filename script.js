const smallCups = document.querySelectorAll('.cup-small');
const litres = document.querySelector('#litres');
const percentage = document.querySelector('#percentage');
const remained = document.querySelector('#remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => {
    highlightCups(idx);
  });
});

const highlightCups = (idx) => {
  // decreases small cups when clicked on a full cup
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }

  //   fills small cup
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
};

// big cup function
// can't call function at the beginning of doc with arrow function - initialization error
function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    litres.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
