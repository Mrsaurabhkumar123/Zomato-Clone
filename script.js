// Add hover animation for header links
const menuLinks = document.querySelectorAll("header ul li a");
menuLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#ffffff";
    });

    link.addEventListener("mouseout", () => {
        link.style.color = "";
    });
});

// Typing effect for the main description text
const descriptionText = "Discover the best food & drinks in Patna";
let charIndex = 0;
const descriptionElement = document.querySelector("main p");

function typeText() {
    if (charIndex < descriptionText.length) {
        descriptionElement.textContent += descriptionText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Typing speed
    }
}

// Initialize typing effect
descriptionElement.textContent = ""; // Clear text initially
typeText();

// Add interactive focus effect to the search input
const searchInput = document.querySelector("main input");
searchInput.addEventListener("focus", () => {
    searchInput.style.boxShadow = "0 6px 15px rgba(255, 77, 77, 0.5)";
});

searchInput.addEventListener("blur", () => {
    searchInput.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
});

// Add smooth scroll to the top when clicking the logo
const logo = document.querySelector("header .logo img");
logo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
