document.addEventListener("DOMContentLoaded", () => {
  
  // 1. DATA BANK: Add or remove project blocks here freely. The tracking circles adjust themselves!
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
      rating: "Execution: 10/10 - Zero frame lag on viewport scroll actions.", // FIXED: Added missing comma right here!
      projectUrl: "/coding-bootcamp-landing"
    }
  ];

  let currentSlideIndex = 0;

  // UI Placeholders
  const topicElement = document.querySelector(".project-topic h2");
  const mainPicImg = document.querySelector(".main-formal-pic img");
  const subPicImages = document.querySelectorAll(".sub-pic-row img");
  const textDetailsParagraphs = document.querySelectorAll(".project-details p");
  const arrowButtons = document.querySelectorAll(".arrow-btn");
  const dotsContainer = document.querySelector(".nav-dots");

  // ==========================================
  // DYNAMIC CIRCLE GENERATOR ENGINE
  // ==========================================
  function generateTrackingCircles() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = ""; 

    portfolioData.forEach((_, index) => {
      const dotSpan = document.createElement("span");
      dotSpan.classList.add("dot");
      if (index === 0) dotSpan.classList.add("active"); 

      dotSpan.addEventListener("click", () => {
        currentSlideIndex = index;
        updatePortfolioDisplay(currentSlideIndex);
      });

      dotsContainer.appendChild(dotSpan);
    });
  }

  // ==========================================
  // CONTENT SLIDE DISPLAY SYNC ENGINE
  // ==========================================
  function updatePortfolioDisplay(index) {
    const project = portfolioData[index];

    if (topicElement) topicElement.textContent = project.topic;

    if (mainPicImg) mainPicImg.src = project.mainFormalPic;
    if (subPicImages[0]) subPicImages[0].src = project.subPic1;
    if (subPicImages[1]) subPicImages[1].src = project.subPic2;

    if (textDetailsParagraphs.length >= 4) {
      textDetailsParagraphs[0].innerHTML = `<strong>What are the topic:</strong> ${project.topic}`;
      textDetailsParagraphs[1].innerHTML = `<strong>Why im there:</strong> ${project.whyImThere}`;
      textDetailsParagraphs[2].innerHTML = `<strong>Few skills:</strong> ${project.skills}`;
      textDetailsParagraphs[3].innerHTML = `<strong>How would i rate:</strong> ${project.rating}`;
    }

    const allGeneratedDots = document.querySelectorAll(".nav-dots .dot");
    allGeneratedDots.forEach((dot, dotIndex) => {
      if (dotIndex === index) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  // Arrow buttons tracking system triggers (< and >)
  arrowButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.textContent === ">") {
        currentSlideIndex = (currentSlideIndex + 1) % portfolioData.length;
      } else {
        currentSlideIndex = (currentSlideIndex - 1 + portfolioData.length) % portfolioData.length;
      }
      updatePortfolioDisplay(currentSlideIndex);
    });
  });

  // ==========================================
  // SHOW MORE DYNAMIC REDIRECT CONTROLLER
  // ==========================================
  // FIXED: Moved this block safely inside the main DOMContentLoaded initialization loop scope
  const showMoreButton = document.querySelector(".show-more-btn");

  if (showMoreButton) {
    showMoreButton.addEventListener("click", () => {
      const currentProject = portfolioData[currentSlideIndex];

      if (currentProject && currentProject.projectUrl) {
        window.location.href = currentProject.projectUrl;
      } else {
        console.warn("No custom projectUrl link defined for this portfolio item.");
      }
    });
  }

  // Initialization Run Sequence on desktop browser refresh
  generateTrackingCircles();
  updatePortfolioDisplay(currentSlideIndex);
});
