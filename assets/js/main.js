const progress = document.querySelector("#progress");
const progressText = document.querySelector("#progressText");
const progressFill = document.querySelector(".progress-fill");
const loader = document.querySelector(".loader");

let value = 0;

const loading = setInterval(() => {
    value += Math.floor(Math.random() * 3) + 1;

    if (value >= 100) {
        value = 100;
        clearInterval(loading);

        setTimeout(() => {
            loader.classList.add("loaded");
        }, 500);
    }

    progress.textContent = value;
    progressText.textContent = `${value}%`;
    progressFill.style.width = `${value}%`;
}, 80);
