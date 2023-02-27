let skip = document.querySelector('#skip');
let skor = document.querySelector('#skor');
let totalScore = document.querySelector('#totalScore');
let countdown = document.querySelector('#countdown');

let count = 0;
let scoreCount = 0;
let duration = 0;

let quizSet = document.querySelectorAll('.quiz-set');
let quizRow = document.querySelectorAll('.quiz-set .quiz-row input');

skip.addEventListener('click', function () {
  step();
  duration = 10;
});

quizRow.forEach(function (e) {
  e.addEventListener('click', function () {
    setTimeout(function () {
      step();
      duration = 10;
    }, 500);

    var valid = this.getAttribute('valid');
    if (valid == 'valid') {
      scoreCount += 20;
      skor.innerHTML = scoreCount;
      totalScore.innerHTML = scoreCount;
    } else {
      scoreCount -= 20;
      skor.innerHTML = scoreCount;
      totalScore.innerHTML = scoreCount;
    }
  });
});

function step() {
  count += 1;
  for (let i = 0; i < quizSet.length; i++) {
    quizSet[i].className = 'quiz-set';
  }

  quizSet[count].className = 'quiz-set active';
  if (count == 5) {
    skip.style.display = 'none';
    let div = document.querySelector('.quiz-footer');
    div.onclick = () => {
      location.reload();
    };
    let link = document.createElement('a');
    link.classList.add('btn1');
    link.innerHTML = 'Ulangi';
    div.appendChild(link);
    clearInterval(durationTime);
    countdown.innerHTML = 0;
  }
}

var durationTime = setInterval(function () {
  if (duration == 10) {
    duration = 0;
  }
  duration += 1;
  countdown.innerHTML = duration;
  if (countdown.innerHTML == '10') {
    step();
  }
}, 1000);
