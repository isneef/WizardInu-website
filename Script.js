console.log("Welcome to WizardInu!");

document.addEventListener("DOMContentLoaded", () => {
    const wizard = document.getElementById("wizard");
    const bitcoin = document.querySelector(".bitcoin");
    
    function animateWizard() {
        wizard.classList.add("moving");
    }
    
    function glowBitcoin() {
        bitcoin.classList.add("glowing");
    }
    
    setTimeout(animateWizard, 1000);
    setTimeout(glowBitcoin, 3000);

    // Adding interactive hover effects
    document.querySelector(".btn").addEventListener("mouseover", () => {
        document.querySelector(".btn").style.transform = "scale(1.2)";
    });
    document.querySelector(".btn").addEventListener("mouseleave", () => {
        document.querySelector(".btn").style.transform = "scale(1)";
    });
});
