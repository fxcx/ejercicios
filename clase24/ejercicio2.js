const TIMER_ONE_SECOND = 1000

const timer = () => {
  for (var i = 1; i <= 10; i++) {
    (function (num) {
      setTimeout(() => {
        console.log(num);
      }, num * TIMER_ONE_SECOND);
    })(i);
  }
}

timer();
