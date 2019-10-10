function onSubmit() {
  const win = window.open("", "wnd", "width=680, height=300")

  win.document.write('<html><head><link rel="stylesheet" type="text/css" href="./css/newStyles.css"></head><body>');

  const form = getFormData()
  const age = timePassed(form.year, form.month, form.day)

  const date = new Date()
  const hour = date.getHours()
  const min = date.getMinutes()
  const hours = 24 - hour
  const mins = 60 - min

  const hundread = untilHundread(age.year, form.month, form.day, hours, mins)

  win.document.body.innerHTML = `<h2> Вітаємо :) </h2>
  <p class="fio">${form.firstName} ${form.lastName} ${form.patronymic}</p>
  <br/>
  <span>Ваша дата народження: ${form.day}/${form.month}/${form.year}</span>
  <br/>
  <span>З дня народження пройшло: ${age.year} років ${age.month} місяців ${age.day} днів ${hour} годин ${min} хвилин.</span>
  <br/>
  ${hundread}  
  <br/>
  <input class="button" type='button' onclick='window.close()' value='Закрити вікно'></input>`
}

function timePassed(year, month, day, hour) {
  const years = 2019 - year
  const months = 10 - month
  const days = getDaysInMonth(10, 2019) - day

  return {
    year: years,
    month: months,
    day: days,
  }
}

function untilHundread(year, month, day, hours, mins) {
  const years = 100 - year
  const months = 12 - month
  const days = getDaysInMonth(month, year) - day
  return `<span>До святкування 100 річчя залишилось: ${years} років ${months} місяців ${days} днів ${hours} годин ${mins} хвилин.</span>`
}

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate()
}

function getFormData() {
  return {
    firstName: document.form.lastName.value,
    lastName: document.form.firstName.value,
    patronymic: document.form.patronymic.value,
    day: parseInt(document.form.day.value),
    month: parseInt(document.form.month.value),
    year: parseInt(document.form.year.value),
  }
}
