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

    // Wallet Connection Simulation
    function connectWallet() {
        alert("🧙‍♂️ Wizard powers activated! Wallet connection coming soon!");
    }

    document.querySelector("button").addEventListener("click", connectWallet);
});
