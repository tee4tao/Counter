let value = document.querySelector(`#value`);
let decrease = document.querySelector(`.decrease`);
let increase = document.querySelector(`.increase`);
let reset = document.querySelector(`.reset`);
let btns = document.querySelectorAll(`.btn`);

reset.addEventListener(`click`, () => {
  Reset();
});

increase.addEventListener(`click`, () => {
  value.textContent++;
});
decrease.addEventListener(`click`, () => {
  value.textContent--;
});

Reset = () => {
  value.textContent = 0;
};

btns.forEach(function (btn) {
  btn.addEventListener(`click`, () => {
    if (value.textContent > 0) {
      value.style.color = `green`;
    } else if (value.textContent < 0) {
      value.style.color = `red`;
    } else {
      value.style.color = `black`;
    }
  });
});
