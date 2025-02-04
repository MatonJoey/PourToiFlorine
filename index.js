document.getElementById("messageState").addEventListener("change", function() {
    const messageElements = document.querySelectorAll(".message");
    const heartElements = document.querySelectorAll(".heart");
    const container = document.querySelector(".container");

    messageElements.forEach(el => {
        el.classList.remove("openNor", "closeNor");
    });

    if (this.checked) {
        messageElements.forEach(el => {
            el.classList.remove("closed", "no-anim");
            el.classList.add("openNor");
        });
        heartElements.forEach(el => {
            el.classList.remove("closeHer", "openedHer");
            el.classList.add("openHer");
        });
        container.style.transition = "background-color 3s";
        container.style.backgroundColor = "#f48fb1";
        console.log("Abrindo");
    } else {
        messageElements.forEach(el => {
            el.classList.remove("no-anim");
            el.classList.add("closeNor");
        });
        heartElements.forEach(el => {
            el.classList.remove("openHer", "openedHer");
            el.classList.add("closeHer");
        });
        container.style.transition = "background-color 2s";
        container.style.backgroundColor = "#fce4ec";
        console.log("fechando");
    }
});

const messageAnimationEndHandler = function() {
    console.log("Animation End");
    const messageElements = document.querySelectorAll(".message");
    if (messageElements[0].classList.contains("closeNor")) {
        messageElements.forEach(el => {
            el.classList.add("closed");
        });
    }
    messageElements.forEach(el => {
        el.classList.remove("openNor", "closeNor");
        el.classList.add("no-anim");
    });
};

const heartAnimationEndHandler = function() {
    console.log("Animation End");
    const heartElements = document.querySelectorAll(".heart");
    if (!heartElements[0].classList.contains("closeHer")) {
        heartElements.forEach(el => {
            el.classList.add("openedHer", "beating");
        });
    } else {
        heartElements.forEach(el => {
            el.classList.add("no-anim");
            el.classList.remove("beating");
        });
    }
    heartElements.forEach(el => {
        el.classList.remove("openHer", "closeHer");
    });
};

document.querySelectorAll(".message").forEach(el => {
    el.addEventListener('animationend', messageAnimationEndHandler);
});

document.querySelectorAll(".heart").forEach(el => {
    el.addEventListener('animationend', heartAnimationEndHandler);
});

