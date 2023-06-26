const ONE_SECOND_IN_MS = 1000

const timer = () => {
  for (var i = 1; i <= 10; i++) {
    (function (num) {
      setTimeout(() => {
        console.log(num);
      }, num * ONE_SECOND_IN_MS);
    })(i);
  }
}

timer();
