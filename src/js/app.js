const weekday = {
  0: 'Domingo',
  1: 'Segunda-feira',
  2: 'Terça-feira',
  3: 'Quarta-feira',
  4: 'Quinta-feira',
  5: 'Sexta-feira',
  6: 'Sábado-feira',
};

const date = new Date();

const day = document.getElementById('day');
const month = document.getElementById('month');

const time = document.getElementById('time');
const name = document.getElementById('name');
const morning = document.getElementById('morning');
const afternoon = document.getElementById('afternoon');

day.innerHTML = weekday[date.getDay()];
month.innerHTML += String(date.getMonth() + 1).padStart(2, '0');

// Next Appointment
name.innerHTML = 'Hester Malone';
time.innerHTML += '09:00';

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
}

schedules.forEach((schedule) => handleSchedule(schedule));
