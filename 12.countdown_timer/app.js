// 현재 날짜에서 1월 1일까지 카운트다운 
// let countdownDate = new Date('01 January 2024 00:00')

// 10초 뒤에 카운트 끝남.
let countdownDate = new Date().setSeconds(new Date().getSeconds() + 10)

let timerInterval
const daysElem = document.querySelector('#days')
const hoursElem = document.querySelector('#hours')
const minutesElem = document.querySelector('#minutes')
const secondsElem = document.querySelector('#seconds')
const timerEndContent = document.querySelector('#content')

const formatTime = (time, string) => {
  return `<span>${time} </span>${string}` 
}

const startCountdown = () => {
  const now = new Date().getTime()
  const countdown = new Date(countdownDate).getTime()

  const difference = (countdown - now) / 1000

  if (difference < 1) {
    endCountdown()
  }

  let days = Math.floor(difference / (60 * 60 * 24))
  let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60))
  let minutes = Math.floor((difference % (60 * 60)) / 60)
	let seconds = Math.floor(difference % 60)

  daysElem.innerHTML = formatTime(days, "일")
  hoursElem.innerHTML = formatTime(hours, "시간")
  minutesElem.innerHTML = formatTime(minutes, "분")
  secondsElem.innerHTML = formatTime(seconds, "초")
}

const endCountdown = () => {
  clearInterval(timerInterval)
  timerEndContent.classList.add('visible')
}

window.addEventListener('DOMContentLoaded', () => {
  startCountdown()
  timerInterval = setInterval(startCountdown, 1000)
})