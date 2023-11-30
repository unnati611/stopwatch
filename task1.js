// let arr = [8,9,7,4,10,11,3,6,1]
// // arr.sort(function(a,b){return a-b})
// // console.log(arr)
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (max<arr[i]) {
//         max = arr[i];
//     }

// }
// console.log(max)
// let min=arr[0]
// for (let i = 0; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];

//   }
// }
// console.log(min)

// function minvar(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//       if (min > arr[i]) {
//         min = arr[i];
//       }
//     }
//     console.log(min);
//     return min;
// }
// let minvalue =minvar(arr)
// console.log(minvalue)

// function maxvar(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   console.log(max);
//   return max;
// }

// let maxvalue = maxvar(arr);
// console.log(maxvalue);
// let index = 0;
// function findnumber(a, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === a) {
//       console.log(i);
//       index++;
//     }
//   }
//   return index;
// }
// let arr = [2, 4, 7, 5, 6, 8, 43, 1, 46, 0];
// let arr2 = [2, 4, 7, 5, 6, 8, 47, 47, 47, 0];
// let numberfind = findnumber(47, arr2);
// console.log(numberfind);

setInterval(watch, 1000);
function watch() {
  let date = new Date();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.getDay();
  let cdate = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let am_pm = "AM";

  if (hours >= 12) {
    if (hours > 12) {
      hours -= 12;
      am_pm = "PM";
    } else if (hours === 0) {
      am_pm = "AM";
      hours = 12;
    }
  }
  hours = hours < 10 ? "0" + hours : hours;
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = "Time:" + hours + ":" + minute + ":" + seconds + am_pm;
  let today = "Date:" + cdate + "/" + month + "/" + year;
  //   console.log(month);
  //   console.log(cdate);
  //   console.log(year);
  //   //   console.log(time);
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = today;
}
watch();
let timeinterval;
let second = 0;
let minute = 0;
let hour = 0;
function start() {
  timeinterval = setInterval(() => {
    second++;
    if (second >= 60) {
      second = 0;
      minute++;
      if (minute >= 60) {
        minute = 0;
        hour++;
      }
    }
    console.log(second + ":" + minute + ":" + hour);
    document.getElementById("countseconds").innerHTML = second + " : ";
    document.getElementById("countminutes").innerHTML = minute + " : ";
    document.getElementById("counthours").innerHTML = hour;
  }, 1000);
}

function stop() {
  clearInterval(timeinterval);
  document.getElementById("countseconds").innerHTML = second + " : ";
  document.getElementById("countminutes").innerHTML = minute + " : ";
  document.getElementById("counthours").innerHTML = hour;
}
function reset() {
  clearInterval(timeinterval);
  second = 0;
  minute = 0;
  hour = 0;
  document.getElementById("countseconds").innerHTML = "0" + " : ";
  document.getElementById("countminutes").innerHTML = "0" + " : ";
  document.getElementById("counthours").innerHTML = "0";
}
