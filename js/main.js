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


/*PORTFOLIO INITIALIZATION*/
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

/*ACTIVITIES INITIALIZATION*/
document.addEventListener("DOMContentLoaded", () => {

  const activitiesData = [
    {
      title: "CS Event Framework Workshop",
      word1: "Workshop Mini",
      word2: "Observed modern system configurations and collaborated inside groups to map out UI design flows.",
      mainPic: "images/Desktop/post 3/gambar bersama TUAN2.jpg",
      myViewUrl: "/activities-case-1",
      fb: "https://facebook.com", ig: "https://instagram.com", tiktok: "https://tiktok.com",
      x: "https://x.com", threads: "https://threads.net", linkedin: "https://linkedin.com", telegram: "https://t.me", youtube: "https://youtube.com"
    },
    {
      title: "Software Engineering Internship",
      word1: "Internship 2025",
      word2: "Spent 3 months debugging front-end viewport scripts and tracking deployment pipelines.",
      mainPic: "images/Desktop/post 2/the project.jpg",
      myViewUrl: "/activities-case-2",
      fb: "https://facebook.com", ig: "https://instagram.com", tiktok: "https://tiktok.com",
      x: "https://x.com", threads: "https://threads.net", linkedin: "https://linkedin.com", telegram: "https://t.me", youtube: "https://youtube.com"
    },
    {
      title: "Regional Hackathon Bracket",
      word1: "Hackathon Entry",
      word2: "Formed a team of 3 developers to configure structural database layers under a 48-hour limit.",
      mainPic: "images/Desktop/post 1/website.jpg",
      myViewUrl: "/activities-case-3",
      fb: "https://facebook.com", ig: "https://instagram.com", tiktok: "https://tiktok.com",
      x: "https://x.com", threads: "https://threads.net", linkedin: "https://linkedin.com", telegram: "https://t.me", youtube: "https://youtube.com"
    }
  ];

  let activeIndex = 0;

  const topicTitle = document.querySelector(".activity-topic h2");
  const leftImg = document.querySelector(".left-pic img");
  const centerImg = document.querySelector(".center-pic img");
  const rightImg = document.querySelector(".right-pic img");
  
  const word1Paragraph = document.getElementById("activity-word-1");
  const word2Paragraph = document.getElementById("activity-word-2");
  const myViewLink = document.getElementById("activity-my-view");
  
  const dotsContainer = document.querySelector(".activity-dots");
  const prevBtn = document.querySelector(".prev-activity");
  const nextBtn = document.querySelector(".next-activity");

  // UNIFIED DISPLAY REPLACEMENT ENGINE (Handles image, text, dots and social updates at once)
  function syncActivitiesDisplay() {
    const total = activitiesData.length;
    const current = activitiesData[activeIndex];
    if (!current) return;

    const leftIndex = (activeIndex - 1 + total) % total;
    const rightIndex = (activeIndex + 1) % total;

    if (topicTitle) topicTitle.textContent = current.title;

    if (leftImg) leftImg.src = activitiesData[leftIndex].mainPic;
    if (centerImg) centerImg.src = current.mainPic;
    if (rightImg) rightImg.src = activitiesData[rightIndex].mainPic;

    if (word1Paragraph) word1Paragraph.textContent = current.word1;
    if (word2Paragraph) word2Paragraph.innerHTML = `<strong>Description:</strong> ${current.word2}`;
    
    // Inject Social Media Links Dynamically
    if (document.getElementById("link-facebook")) document.getElementById("link-facebook").href = current.fb;
    if (document.getElementById("link-instagram")) document.getElementById("link-instagram").href = current.ig;
    if (document.getElementById("link-tiktok")) document.getElementById("link-tiktok").href = current.tiktok;
    if (document.getElementById("link-x")) document.getElementById("link-x").href = current.x;
    if (document.getElementById("link-threads")) document.getElementById("link-threads").href = current.threads;
    if (document.getElementById("link-linkedin")) document.getElementById("link-linkedin").href = current.linkedin;
    if (document.getElementById("link-telegram")) document.getElementById("link-telegram").href = current.telegram;
    if (document.getElementById("link-youtube")) document.getElementById("link-youtube").href = current.youtube;
    const liveMyViewLink = document.getElementById("activity-my-view");
    
    if (liveMyViewLink) {
      liveMyViewLink.href = current.myViewUrl;
    }

    // Highlighting Active Dot States
    const dots = document.querySelectorAll(".activity-dots .dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === activeIndex);
    });
  }

  function initDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = "";
    activitiesData.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot"); 
      if (i === activeIndex) dot.classList.add("active");
      
      dot.addEventListener("click", () => {
        activeIndex = i;
        syncActivitiesDisplay();
      });
      dotsContainer.appendChild(dot);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      activeIndex = (activeIndex + 1) % activitiesData.length;
      syncActivitiesDisplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      activeIndex = (activeIndex - 1 + activitiesData.length) % activitiesData.length;
      syncActivitiesDisplay();
    });
  }

  initDots();
  syncActivitiesDisplay();
});

/*TIMELINE INITIALIZATION*/
document.addEventListener("DOMContentLoaded", () => {

  // 1. DATA BANK MATRIX: Setup chronological data profiles here cleanly
  const timelineData = [
    {
      year: "2026",
      synopsis: "Advanced System Engineering Foundations & Core Portfolio Frameworks",
      biodata: "Computer Science Specialization Hub, Cyberjaya Campus Network.",
      achievement: "Perfected high-performance vanilla layout scripts. Completed full architecture map for responsive deployment states."
    },
    {
      year: "2025",
      synopsis: "Corporate Lifecycle Deployment & Full-Stack Implementation Training",
      biodata: "Enterprise Application Development Core, Tech Labs Internship Station.",
      achievement: "Built end-to-end checkout engines. Optimized query responses cutting database connection lag cycles cleanly down by 35%."
    },
    {
      year: "2024",
      synopsis: "Algorithmic Development Roots & Visual Layout Ideation Foundations",
      biodata: "Software Engineering Principles Group, Academic Engineering Cluster.",
      achievement: "Competed in Regional Hackathon Sprint brackets. Mastered absolute coordination positioning and typography system fundamentals."
    }
  ];

  const rail = document.querySelector(".zipline-rail");
  const displayContainer = document.querySelector(".timeline-content-display");

  // 2. GENERATE TIMELINE COMPONENT NODES
  function initTimeline() {
    if (!rail || !displayContainer) return;

    rail.innerHTML = "";
    displayContainer.innerHTML = "";

    timelineData.forEach((item, index) => {
      // Build top clip node button
      const clipNode = document.createElement("div");
      clipNode.classList.add("timeline-clip-node");
      if (index === 0) clipNode.classList.add("active");
      clipNode.setAttribute("data-index", index);
      clipNode.textContent = item.year;

      // Build bottom panel information envelope
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("timeline-card");
      if (index === 0) cardDiv.classList.add("active");

      cardDiv.innerHTML = `
        <div class="synopsis-title-box">
          <h3>Synopsis: ${item.synopsis}</h3>
        </div>
        <div class="timeline-grid">
          <div class="biodata-box">
            <h4>Biodata of Place</h4>
            <p>${item.biodata}</p>
          </div>
          <div class="achievement-box">
            <h4>My Achievement</h4>
            <p>${item.achievement}</p>
          </div>
        </div>
      `;

      rail.appendChild(clipNode);
      displayContainer.appendChild(cardDiv);

      // Node selection click interaction
      clipNode.addEventListener("click", () => {
        switchTimelineActiveState(index);
      });
    });
  }

  // 3. SWITCH DATA VISIBILITY ENVELOPES
  function switchTimelineActiveState(targetIndex) {
    const nodes = document.querySelectorAll(".timeline-clip-node");
    const cards = document.querySelectorAll(".timeline-card");

    nodes.forEach((node, i) => {
      node.classList.toggle("active", i === targetIndex);
    });

    cards.forEach((card, i) => {
      if (i === targetIndex) {
        card.style.display = "flex";
        // Let display register block layout before applying transition pop
        setTimeout(() => card.classList.add("active"), 10);
      } else {
        card.classList.remove("active");
        card.style.display = "none";
      }
    });
  }

  // 4. MOUSE HORIZONTAL DRAG CONTROLLERS
  let isDragging = false;
  let startX;
  let scrollLeft = 0;
  const trackWrapper = document.querySelector(".zipline-track-wrapper");

  if (trackWrapper) {
    trackWrapper.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX - rail.offsetLeft;
    });

    trackWrapper.addEventListener("mouseleave", () => { isDragging = false; });
    trackWrapper.addEventListener("mouseup", () => { isDragging = false; });

    trackWrapper.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - rail.offsetLeft;
      const walk = (x - startX) * 0.5; // Drag dampener speed calculation variable

      // Cycle nodes step triggers based on drag distance thresholds
      if (walk > 50) {
        triggerSiblingSlide("prev");
        isDragging = false;
      } else if (walk < -50) {
        triggerSiblingSlide("next");
        isDragging = false;
      }
    });
  }

  function triggerSiblingSlide(direction) {
    const activeNode = document.querySelector(".timeline-clip-node.active");
    if (!activeNode) return;
    
    let currentIndex = parseInt(activeNode.getAttribute("data-index"));
    if (direction === "next" && currentIndex < timelineData.length - 1) {
      switchTimelineActiveState(currentIndex + 1);
    } else if (direction === "prev" && currentIndex > 0) {
      switchTimelineActiveState(currentIndex - 1);
    }
  }

  initTimeline();
});


/*CONTACT AND STATUS INDICATORS */
document.addEventListener("DOMContentLoaded", () => {

  // ==========================================================================
  // CONFIGURATION MANIFEST: Set your real-time status choice here!
  // Options: "available" (Green), "busy" (Cherry Red), or "pending" (Amber Yellow)
  // ==========================================================================
  const currentStatusState = "available"; 

  // Object mapping definitions to inject matching textual strings and states
  const statusProfiles = {
    available: {
      className: "state-available",
      hiredWord: "I am currently available! Let's build your next digital experience together.",
      labelText: "Available for Internships / Roles"
    },
    busy: {
      className: "state-busy",
      hiredWord: "Currently managing active contracts, but my inbox is always open for future plans.",
      labelText: "Status: Fully Booked / Busy"
    },
    pending: {
      className: "state-pending",
      hiredWord: "Reviewing ongoing proposals. Available strictly for freelance collaboration slots.",
      labelText: "Status: Limited Availability"
    }
  };

  const statusPanel = document.querySelector(".status-panel");
  const hiredWordHeading = document.querySelector(".hired-word");
  const statusLabel = document.querySelector(".status-label-text");

  // State processor engine function
  function deployStatusDashboard() {
    if (!statusPanel || !hiredWordHeading || !statusLabel) return;

    // Fetch matching layout data object criteria
    const activeProfile = statusProfiles[currentStatusState] || statusProfiles.available;

    // Flush old states and inject theme classification class rule
    statusPanel.className = "status-panel " + activeProfile.className;

    // Inject matching text values dynamically
    hiredWordHeading.textContent = activeProfile.hiredWord;
    statusLabel.textContent = activeProfile.labelText;
  }

  deployStatusDashboard();
});
