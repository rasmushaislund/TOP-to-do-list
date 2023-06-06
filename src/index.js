// START //

import './style.css';
import './index.html';

const datePickerImg = document.querySelector('.date-pick-icon');
const dateInput = document.querySelector('.task-date');
const deadlinePara = document.querySelector('.deadline-para');

datePickerImg.addEventListener('click', () => {
  try {
    dateInput.showPicker();
  } catch (error) {
    window.alert(error);
  }
});

dateInput.addEventListener('input', () => {
  let getDeadline = dateInput.value;
  console.log(getDeadline);
  deadlinePara.textContent = getDeadline;
  // Add regEx to convert date to desired format (e.g. 'June 12 2023')
});
