const bt = document.getElementById('agendar');
// var fullDate;
// var hour = [];

const pickDate = flatpickr('#date', {
  locale: 'pt',
  minDate: 'today',
  maxDate: new Date().fp_incr(30),
  altInput: true,
  altFormat: 'j F, Y',
  dateFormat: 'd-m-y',
});

const pickTime = flatpickr('#time', {
  locale: 'pt',
  enableTime: true,
  noCalendar: true,
  dateFormat: 'H:i',
  time_24hr: true,
});

bt.addEventListener('click', function (event) {
  // event.preventDefault();
  // pickDate.selectedDates.forEach(function (date) {
  //   fullDate = `${date.getMonth()} ${date.getDate()} ${date.getFullYear()}`;
  // });
});
