document.addEventListener("DOMContentLoaded", () => {
    // Load images dynamically
    const wizardImg = new Image();
    wizardImg.src = "images/wizard-character.png";
    wizardImg.id = "walkingWizard";
    wizardImg.alt = "Walking Wizard";
    wizardImg.classList.add("wizard-animation");
    document.querySelector(".wizard-walk").appendChild(wizardImg);

    const coinImg = new Image();
    coinImg.src = "images/wizard-coin.png";
    coinImg.alt = "Wizard Inu Coin";
    coinImg.classList.add("rotate-in");
    document.querySelector(".hero").appendChild(coinImg);

    // Live price animation placeholder
    const livePrice = document.getElementById("livePrice");
    let priceIndex = 0;
    const priceAnimation = ["Loading.", "Loading..", "Loading...", "Almost there..."];
    setInterval(() => {
        livePrice.textContent = priceAnimation[priceIndex % priceAnimation.length];
        priceIndex++;
    }, 500);

    // Show info on $WIZ
    document.querySelector(".options button").addEventListener("click", () => {
        document.getElementById("infoWIZ").classList.toggle("hidden");
    });

    // Wizard walking animation with smooth effect
    let position = 0;
    function moveWizard() {
        if (position < window.innerWidth - 200) {
            position += 1.5;
            wizardImg.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(moveWizard);
        }
    }
    moveWizard();

    // Countdown timer for launch
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 7);
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("timer").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        if (distance > 0) {
            setTimeout(updateCountdown, 1000);
        } else {
            document.getElementById("timer").innerText = "Launch Time!";
        }
    }
    updateCountdown();

    // Floating magic particles background effect
    const particleContainer = document.createElement("div");
    particleContainer.classList.add("particle-container");
    document.body.appendChild(particleContainer);
    
    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("magic-particle");
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        particleContainer.appendChild(particle);
        setTimeout(() => {
            particle.remove();
        }, 5000);
    }
    setInterval(createParticle, 200);

    // Glowing effect for buttons
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.classList.add("glow-effect");
        });
        button.addEventListener("mouseout", () => {
            button.classList.remove("glow-effect");
        });
    });

    // Smooth scroll for better UX
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
