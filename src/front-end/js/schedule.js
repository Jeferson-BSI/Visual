const bt = document.getElementById('agendar');
const name = document.getElementById('name');
const type = document.getElementById('type');
const time = document.getElementById('time');
const date = document.getElementById('date');
const tooltip = document.getElementById('tooltip');
const erro = document.getElementById('erro');

const h = new Date();

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
  time.classList.remove('inputError');
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
///http://localhost:3333/schedules'
// https://visual-web-1.herokuapp.com/schedules
// var url = 'http://localhost:3333/schedules/';
var url = 'https://visual-web-1.herokuapp.com/schedules/';

function handleRequest() {
  axios
    .post(url, {
      name: name.value,
      type: type.value,
      time: time.value,
      date: date.value,
    })
    .then(function (response) {
      tooltip.classList.add('tooltipVisible');
      const inputs = [name, time, date, type];

      inputs.forEach((input) => {
        input.value = '';
        input.classList.remove('inputError');
        input.classList.remove('valid');
      });
    });
}

bt.addEventListener('click', function (event) {
  event.preventDefault();

  if (name.value && name.value && time.value && date.value) {
    if (Number(date.value.split(':')[0]) == Number(h.getDate())) {
      if (Number(time.value.split(':')[0]) <= Number(h.getHours())) {
        time.classList.remove('valid');
        time.classList.add('inputError');
        tooltip.innerHTML = 'Horário Invalido';
        tooltip.classList.add('tooltipVisible');
        tooltip.classList.add('erro');

        setTimeout(function () {
          tooltip.classList.remove('tooltipVisible');
          tooltip.classList.remove('erro');
          tooltip.innerHTML = 'Success';
        }, 2000);
        return;
      }
    }
    handleRequest();
  } else {
    const inputs = [name, time, date, type];
    inputs.forEach((input) => {
      if (!input.value) {
        input.classList.add('inputError');
      }
    });
  }

  setTimeout(function () {
    tooltip.classList.remove('tooltipVisible');
  }, 2000);
});
