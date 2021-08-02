// clock

const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes'),
      seconds = document.getElementById('clock-seconds')

const clock = () =>{
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6

    hour.style.transform = `rotateZ(${hh + mm /12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock,1000)

// clock date and time
const textHour = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-minutes'),
      textAmPm = document.getElementById('text-ampm'),
      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month'),
      dateYear = document.getElementById('date-year')

const clockText = () =>{
    let date = new Date()

    let hh = date.getHours(),
    ampm,
    mm = date.getMinutes(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear()
   

// change hour from 24 to 12 hour and establish weather it is Am or Pm
    if(hh >= 12){
      hh = hh - 12
      ampm = 'PM'
    }else{
      ampm = 'AM'
    }
// we detect when it's 0 AM and transform to 12 AM
   if(hh == 0){hh = 12}

// show a zero before hours
   if(hh < 10){hh = `0${hh}`}

// show time
   textHour.innerHTML = `${hh}:` 

// show a zero before the minutes
   if(mm < 10){mm = `0${mm}`}

// show minutes
   textMinutes.innerHTML = mm

// show am or pm
   textAmPm.innerHTML = ampm

// we get the months of the year and show it
   let months =['jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// we show the day, the month and the year
   dateDay.innerHTML = day
   dateMonth.innerHTML = `${months[month]},`
   dateYear.innerHTML = year
}

setInterval(clockText, 1000)

// dark/light theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// copyRight
const year = new Date().getFullYear();
const yearText = document.querySelector('.year');
yearText.innerHTML = year;