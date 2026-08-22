// --- COMPACT SLIDE DOWN MENU FOR DESKTOP ---
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a[href^='#']");

  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Stop the instant browser jump

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Look inside your existing link click function and update it to this:
if (targetSection) {
  targetSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
} else if (targetId === "#top-of-page") {
  // FIX: If the code cannot find a section, but the link is #top-of-page, force the window to the true top
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

    });
  });
});

// --- Keep your FAQ Accordion and Mobile Menu code below this line ---
