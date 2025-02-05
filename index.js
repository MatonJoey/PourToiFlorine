let heartInterval;

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
        document.getElementById("messageState").checked = true;
        heartInterval = setInterval(createSmallHeart, 150);
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
        document.getElementById("messageState").checked = false;
        clearInterval(heartInterval);
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

function createSmallHeart() {
    const smallHeart = document.createElement("img");
    smallHeart.src = "https://upload.wikimedia.org/wikipedia/commons/4/42/Love_Heart_SVG.svg"; // URL du cœur
    smallHeart.classList.add("small-heart");
    
    // Positionner le cœur aléatoirement
    const x = Math.random() * 100; // Position horizontale
    const y = Math.random() * 100; // Position verticale
    smallHeart.style.left = `${x}vw`;
    smallHeart.style.top = `${y}vh`;
    
    document.querySelector(".small-heart-container").appendChild(smallHeart);
    
    // Animation d'apparition et de disparition
    setTimeout(() => {
        smallHeart.style.opacity = 0; // Faire disparaître le cœur
    }, 100); // Délai avant de commencer à disparaître

    // Supprimer le cœur après l'animation
    setTimeout(() => {
        smallHeart.remove();
    }, 2000); // Temps total avant de supprimer le cœur
}

