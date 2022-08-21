let value = document.querySelector(`#value`)
let decrease = document.querySelector(`.decrease`)
let increase = document.querySelector(`.increase`)
let reset = document.querySelector(`.reset`)
let btns = document.querySelectorAll(`.btn`)

reset.addEventListener(`click`, function () {
        Reset();
//         if (value.textContent > 0) {
//     value.style.color= `green`
// } else if (value.textContent < 0) {
//     value.style.color= `red`
// } else{
//     value.style.color = `black`
// }
    })

increase.addEventListener(`click`, function () {
    // value = value.textContent++
    value.textContent ++
    // value.style.color= `green`
//     if (value.textContent > 0) {
//     value.style.color= `green`
// } else if (value.textContent < 0) {
//     value.style.color= `red`
// } else{
//     value.style.color = `black`
// }
})
decrease.addEventListener(`click`, function () {
    // value = value.textContent--
    value.textContent--
//     if (value.textContent > 0) {
//     value.style.color= `green`
// } else if (value.textContent < 0) {
//     value.style.color= `red`
// } else{
//     value.style.color = `black`
// }
})

    function Reset() {
    value.textContent = 0
    // value.style.color = `black`
}

btns.forEach(function(btn){
    btn.addEventListener(`click`, function () {
    console.log(`hi`);
    if (value.textContent > 0) {
    value.style.color= `green`
} else if (value.textContent < 0) {
    value.style.color= `red`
} else{
    value.style.color = `black`
}
})
})
