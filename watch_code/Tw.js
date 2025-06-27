setInterval(()=> {
  let date = new Date()
  //for seconds
  let s = date.getSeconds()
  let seconds = (6*s)-360
  let sec = document.querySelector(".seconds")
  sec.style.transform = `rotate(${seconds}deg)`
  //for minutes
  let m = date.getMinutes()
  let minutes = (6*m)-360
  let min = document.querySelector(".minutes")
  min.style.transform = `rotate(${minutes}deg)`
  //for hours
  let h = date.getHours()
  let hours = ((30*h)-360) + (-(-minutes-360)/12)
  let hour = document.querySelector(".hours")
  hour.style.transform = `rotate(${hours}deg)`
  //1. date and time
  let days = date.getDay()
  let today = date.getDate()
  let datetime = document.querySelector(".date")
  /*
  let day = days
  if (day == 1) {
    datetime.innerHTML = MON &nbsp${today}
  } else if (day == 2) {
    datetime.innerHTML = TUE &nbsp${today}
  } else if (day == 3) {
    datetime.innerHTML = WED &nbsp${today}
  } else if (day == 4) {
    datetime.innerHTML = THU &nbsp${today}
  } else if (day == 5) {
    datetime.innerHTML = FRI &nbsp${today}
  } else if (day == 6) {
    datetime.innerHTML = SAT &nbsp${today}
  } else {
    datetime.innerHTML = SUN &nbsp${today}
    datetime.style.color = "red"
  }
  */
  //2. date and time
  let dayarr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  datetime.innerHTML = `${dayarr[days]} ${today}`
  if (days == 0) {
    datetime.style.color = "red"
    datetime.style.borderColor = "red"
  }
}, 800)