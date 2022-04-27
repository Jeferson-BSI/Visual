const bt = document.getElementById('agendar');
const name = document.getElementById('name');
const type = document.getElementById('type');
const time = document.getElementById('time');
const date = document.getElementById('date');

const button = document.getElementById('agendar');

function validation(value) {
  if (!value.value) {
    value.classList.add('inputError');
    return;
  }

  value.classList.remove('inputError');
}

name.addEventListener('focus', function (event) {
  validation(name);
});

type.addEventListener('focus', function (event) {
  validation(type);
});

time.addEventListener('focus', function (event) {
  time.classList.add('valid');
});

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
function handleRequest() {
  axios
    .post('http://localhost:3333/schedules', {
      name: name.value,
      type: type.value,
      time: time.value,
      date: date.value,
    })
    .then(function (response) {
      console.log(response);
      // do whatever you want if console is [object object] then stringify the response
    });
}

bt.addEventListener('click', function (event) {
  event.preventDefault();
  alert(name.value, type.value, time.value, date.value);
  handleRequest();
});
