// Rebuilt WizardInu Website Script.js

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

    // Real Wallet Connection
    async function connectWallet() {
        if (typeof window.ethereum !== "undefined") {
            try {
                const accounts = await ethereum.request({ method: "eth_requestAccounts" });
                document.getElementById("wallet-status").innerText = `✅ Connected: ${accounts[0].slice(0, 6)}...`;
            } catch (error) {
                alert("🛑 Wallet connection failed!");
            }
        } else {
            alert("❌ MetaMask not detected! Please install it to connect.");
        }
    }

    document.getElementById("connect-wallet").addEventListener("click", connectWallet);

    // Live Price Tracker
    async function fetchPrice() {
        try {
            const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=wizardinu&vs_currencies=usd");
            const data = await response.json();
            document.getElementById("price").innerHTML = `🔥 $${data.wizardinu.usd} USD`;
        } catch (error) {
            document.getElementById("price").innerHTML = "⚠️ Price unavailable";
        }
    }

    setInterval(fetchPrice, 60000); // Update price every minute
    fetchPrice();

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
