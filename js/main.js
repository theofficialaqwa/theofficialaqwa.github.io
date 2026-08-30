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

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================================================
  // 1. DATA BANK ARRAY (Add, remove, or modify project objects freely here!)
  // ==========================================================================
  const portfolioData = [
    {
      topic: "School Event Management System", 
      mainFormalPic: "images/Desktop/post 1/website.jpg", 
      subPic1: "images/Desktop/post 1/poster.jpg",
      subPic2: "images/Desktop/post 1/coding.jpg",
      whyImThere: "Full-Stack Developer building an end-to-end checkout system.",
      skills: "Node.js, React, TailWind CSS, MongoDB",
      rating: "Execution: 8.5/10 - Fast 1.2s loading metrics achieved.",
      projectUrl: "/ecommerce-case-study"
    },
    {
      topic: "CODING BOOTCAMP LANDING PAGE",
      mainFormalPic: "images/Desktop/post 2/the project.jpg", 
      subPic1: "images/Desktop/post 2/team member.jpg",
      subPic2: "images/Desktop/post 2/presentation.jpeg",
      whyImThere: "Lead Visual Designer creating a modern digital presence.",
      skills: "Figma, Vector Illustration, Brand Strategy",
      rating: "Execution: 9/10 - Strong high-contrast typography scaling.",
      projectUrl: "/coding-bootcamp-landing"
    },
    {
      topic: "MAJLIS PERTAULIAHAN INTAKE 8 2026",
      mainFormalPic: "images/Desktop/post 3/gambar bersama TUAN2.jpg", 
      subPic1: "images/Desktop/post 3/gambar bersama intake 8 troll.jpg",
      subPic2: "images/Desktop/post 3/IMG_20260816_082400.jpg.jpeg",
      whyImThere: "UI Engineer perfecting single-page navigation frameworks.",
      skills: "HTML5, Vanilla CSS Grid, JavaScript Dom-Parsing",
      rating: "Execution: 10/10 - Zero frame lag on viewport scroll actions.",
      projectUrl: "/commissioning-ceremony"
    }
  ];

  let currentSlideIndex = 0;

  // ==========================================================================
  // 2. UI CONTAINER SELECTORS
  // ==========================================================================
  const topicElement = document.querySelector(".project-topic h2");
  const mainPicImg = document.querySelector(".main-formal-pic img");
  const subPicImages = document.querySelectorAll(".sub-pic-row img");
  const textDetailsParagraphs = document.querySelectorAll(".project-details p");
  const arrowButtons = document.querySelectorAll(".arrow-btn");
  const dotsContainer = document.querySelector(".nav-dots");
  const showMoreButton = document.querySelector(".show-more-btn");
  const navLinks = document.querySelectorAll(".navbar a[href^='#']");

  // ==========================================================================
  // 3. AUTOMATED CIRCLE GENERATOR ENGINE
  // ==========================================================================
  function generateTrackingCircles() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = ""; 

    portfolioData.forEach((_, index) => {
      const dotSpan = document.createElement("span");
      dotSpan.classList.add("dot");
      if (index === 0) dotSpan.classList.add("active"); 

      // Connect instant jump point capability
      dotSpan.addEventListener("click", () => {
        currentSlideIndex = index;
        updatePortfolioDisplay(currentSlideIndex);
      });

      dotsContainer.appendChild(dotSpan);
    });
  }

  // ==========================================================================
  // 4. DISPLAY SYNC RENDERING ENGINE
  // ==========================================================================
  function updatePortfolioDisplay(index) {
    const project = portfolioData[index];
    if (!project) return;

    // Swap text headers
    if (topicElement) topicElement.textContent = project.topic;

    // Swap images safely into your flipped layout configurations
    if (mainPicImg) mainPicImg.src = project.mainFormalPic;
    if (subPicImages[0]) subPicImages[0].src = project.subPic1;
    if (subPicImages[1]) subPicImages[1].src = project.subPic2;

    // Swap the 4 data description block row loops
    if (textDetailsParagraphs.length >= 4) {
      textDetailsParagraphs[0].innerHTML = `<strong>What are the topic:</strong> ${project.topic}`;
      textDetailsParagraphs[1].innerHTML = `<strong>Why im there:</strong> ${project.whyImThere}`;
      textDetailsParagraphs[2].innerHTML = `<strong>Few skills:</strong> ${project.skills}`;
      textDetailsParagraphs[3].innerHTML = `<strong>How would i rate:</strong> ${project.rating}`;
    }

    // Refresh dynamic lighting tracker dots
    const allGeneratedDots = document.querySelectorAll(".nav-dots .dot");
    allGeneratedDots.forEach((dot, dotIndex) => {
      if (dotIndex === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  // ==========================================================================
  // 5. INTERACTIVE EVENT HANDLERS
  // ==========================================================================
  
  // Left and Right Screen-Side Arrow Navigation Loop
  arrowButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("next-arrow") || btn.textContent === ">") {
        currentSlideIndex = (currentSlideIndex + 1) % portfolioData.length;
      } else {
        currentSlideIndex = (currentSlideIndex - 1 + portfolioData.length) % portfolioData.length;
      }
      updatePortfolioDisplay(currentSlideIndex);
    });
  });

  // Show More Independent A-Z URL File Redirect Controller
  if (showMoreButton) {
    showMoreButton.addEventListener("click", () => {
      const currentProject = portfolioData[currentSlideIndex];
      if (currentProject && currentProject.projectUrl) {
        window.location.href = currentProject.projectUrl;
      } else {
        console.warn("No valid projectUrl path string defined for this object layout.");
      }
    });
  }

  // FIX: Fixed sticky navigation link scroll handler (with true top override)
  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");

      if (targetId === "#top-of-page") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // ==========================================================================
  // 6. INITIALIZATION RUN SEQUENCE
  // ==========================================================================
  generateTrackingCircles();
  updatePortfolioDisplay(currentSlideIndex);
});

