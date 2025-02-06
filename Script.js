document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    function startCountdown() {
        const launchDate = new Date("2025-02-15T00:00:00").getTime();
        const countdownElement = document.getElementById("countdown");

        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = launchDate - now;

            if (timeLeft < 0) {
                countdownElement.innerHTML = "🚀 Launching Now!";
                clearInterval(interval);
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    startCountdown();

    // Wallet Connection with Animation
    function connectWallet() {
        const button = document.querySelector("button");
        button.innerHTML = "🔗 Connecting...";
        button.style.backgroundColor = "#6a0dad";
        setTimeout(() => {
            button.innerHTML = "✅ Connected!";
            button.style.backgroundColor = "#28a745";
            alert("🧙‍♂️ Wallet successfully connected!");
        }, 2000);
    }

    document.querySelector("button").addEventListener("click", connectWallet);

    // Animations
    const wizardImage = document.querySelector(".hero img");
    wizardImage.addEventListener("mouseover", function () {
        wizardImage.style.transform = "scale(1.1) rotate(5deg)";
        wizardImage.style.transition = "transform 0.3s ease-in-out";
    });

    wizardImage.addEventListener("mouseout", function () {
        wizardImage.style.transform = "scale(1) rotate(0deg)";
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
