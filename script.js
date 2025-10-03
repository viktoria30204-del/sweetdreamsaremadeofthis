
// Smooth scroll to top
document.addEventListener("DOMContentLoaded", function() {
    const toTopBtn = document.createElement("button");
    toTopBtn.innerText = "⬆";
    toTopBtn.style.position = "fixed";
    toTopBtn.style.bottom = "20px";
    toTopBtn.style.right = "20px";
    toTopBtn.style.background = "linear-gradient(45deg, #ff6ec4, #7873f5)";
    toTopBtn.style.color = "white";
    toTopBtn.style.border = "none";
    toTopBtn.style.padding = "10px 15px";
    toTopBtn.style.borderRadius = "50%";
    toTopBtn.style.cursor = "pointer";
    toTopBtn.style.display = "none";
    document.body.appendChild(toTopBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            toTopBtn.style.display = "block";
        } else {
            toTopBtn.style.display = "none";
        }
    });

    toTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
