const name = document.getElementById('name');
const type = document.getElementById('type');
const time = document.getElementById('time');
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

// button.addEventListener('click', function (event) {

// });
