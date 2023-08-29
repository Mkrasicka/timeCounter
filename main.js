function Time() {
  let timeBox = document.getElementById('count-time');
  let startTime = 0;

  function countTime() {
    setInterval(function() {
      startTime++
      timeBox.textContent = startTime + " sekund";

    }, 1000);
  }

  return countTime
}

const checkTime = Time();
checkTime();
