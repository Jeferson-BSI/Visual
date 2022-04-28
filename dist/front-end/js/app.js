'use strict';

const day = document.getElementById('day');
const month = document.getElementById('month');
const time = document.getElementById('time');
const name = document.getElementById('name');
const dateInput = document.getElementById('date');
const today = document.getElementById('today');
const morning = document.getElementById('morning');
const afternoon = document.getElementById('afternoon');
const date = new Date();
const weekday = {
  0: 'Domingo',
  1: 'Segunda-feira',
  2: 'Terça-feira',
  3: 'Quarta-feira',
  4: 'Quinta-feira',
  5: 'Sexta-feira',
  6: 'Sábado-feira',
};

day.innerHTML = weekday[date.getDay()];
month.innerHTML += String(date.getDate()).padStart(2, '0');

const formatDate = (date) =>
  `${date.getDate()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getFullYear(),
  ).substring(2)}`;

function handleSchedule(schedule) {
  if (Number(schedule.time.split(':')[0]) < 12) {
    morning.innerHTML += `<div class="appointment">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style="fill: #ff9000"
                >
                  <path
                    d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"
                  ></path>
                </svg>
                ${schedule.time}
              </span>
              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/54998138?v=4"
                  alt="user Image"
                />
                <strong>${schedule.name}</strong>
              </div>
            </div>`;
    return;
  }

  afternoon.innerHTML += `<div class="appointment">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style="fill: #ff9000"
                >
                  <path
                    d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"
                  ></path>
                </svg>
                ${schedule.time}
              </span>
              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/54998138?v=4"
                  alt="user Image"
                />
                <strong>${schedule.name}</strong>
              </div>
            </div>`;
} // http://localhost:3333/schedules
// https://visual-web-1.herokuapp.com/schedules/?date=${data}

function handleRequest(data) {
  axios
    .get(`https://visual-web-1.herokuapp.com/schedules/?date=${data}`)
    .then(function (response) {
      const schedules = response.data;
      schedules.sort(function (a, b) {
        if (Number(a.time.split(':')[0]) < Number(b.time.split(':')[0])) {
          return -1;
        } else if (
          Number(a.time.split(':')[0]) == Number(b.time.split(':')[0])
        ) {
          if (Number(a.time.split(':')[1]) < Number(b.time.split(':')[1])) {
            return -1;
          }
        }

        return true;
      });
      const next = schedules.filter(function (schedule) {
        const hours = Number(schedule.time.split(':')[0]);
        const minutes = Number(schedule.time.split(':')[1]);

        if (hours == Number(date.getHours())) {
          return minutes > Number(date.getMinutes());
        }

        return hours > Number(date.getHours());
      });

      if (next.length) {
        nextSchedule(next[0]);
      } else {
        nextSchedule({
          name: '----------',
          time: '00:00',
        });
      }

      if (data == formatDate(date)) {
        today.classList.remove('today');
      } else {
        today.classList.add('today');
      }

      afternoon.innerHTML = '';
      morning.innerHTML = '';
      schedules.forEach((schedule) => handleSchedule(schedule));
    });
} // Next Appointment

function nextSchedule(schedule) {
  name.innerHTML = schedule.name;
  time.innerHTML = schedule.time;
}

handleRequest(formatDate(date));
const schedules = [
  {
    name: 'Charles Becker',
    time: '08:30',
    date: new Date(),
    type: 'barba',
  },
  {
    name: 'Brent Wilkins',
    time: '09:30',
    date: new Date(),
    type: 'barba',
  },
  {
    name: 'Lela Dixon',
    time: '10:30',
    date: new Date(),
    type: 'barba',
  },
  {
    name: 'Lucy Peterson',
    time: '14:30',
    date: new Date(),
    type: 'barba',
  },
  {
    name: 'Gabriel Horton',
    time: '13:30',
    date: new Date(),
    type: 'barba',
  },
  {
    name: 'Minerva Lopez',
    time: '15:30',
    date: new Date(),
    type: 'barba',
  },
];
const pickDate = flatpickr('#date', {
  locale: 'pt',
  minDate: 'today',
  maxDate: new Date().fp_incr(30),
  altInput: true,
  altFormat: 'j F, Y',
  dateFormat: 'd-m-y',
  inline: true,
  onChange: function (selectedDates, dateStr, instance) {
    handleRequest(dateInput.value, true);
  },
});
