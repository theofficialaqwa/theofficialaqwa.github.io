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
  const portfolioData = [
    {
      topic: "Marketing E-Commerce Project", 
      mainFormalPic: "images/Desktop/Portfolio/post 1 - School Project/website.jpg", 
      subPic1: "images/Desktop/Portfolio/post 1 - School Project/poster.jpg",
      subPic2: "images/Desktop/Portfolio/post 1 - School Project/coding.jpg",
      whyImThere: "Full-Stack Developer building an end-to-end checkout system.",
      skills: "Node.js, React, TailWind CSS, MongoDB",
      rating: "Execution: 8.5/10 - Fast 1.2s loading metrics achieved.",
      projectUrl: "/marketing-ecommerce-project"
    },
    {
      topic: "Parking Bluetooth Application",
      mainFormalPic: "images/Desktop/Portfolio/post 2 - Parking System/the prototype.jpeg", 
      subPic1: "images/Desktop/Portfolio/post 2 - Parking System/arduino.jpeg",
      subPic2: "images/Desktop/Portfolio/post 2 - Parking System/solo group.jpeg",
      whyImThere: "Lead Visual Designer creating a modern digital presence.",
      skills: "Figma, Vector Illustration, Brand Strategy",
      rating: "Execution: 9/10 - Strong high-contrast typography scaling.",
      projectUrl: "/parking-bluetooth-application"
    },
    {
      topic: "Hotel Booking Platform",
      mainFormalPic: "images/Desktop/Portfolio/post 3 - Hotel Booking System/the project.jpg", 
      subPic1: "images/Desktop/Portfolio/post 3 - Hotel Booking System/team member.jpg",
      subPic2: "images/Desktop/Portfolio/post 3 - Hotel Booking System/presentation.jpeg",
      whyImThere: "Lead Visual Designer creating a modern digital presence.",
      skills: "Figma, Vector Illustration, Brand Strategy",
      rating: "Execution: 9/10 - Strong high-contrast typography scaling.",
      projectUrl: "/hotel-booking-platform"
    },
    {
      topic: "Hotel Management System",
      mainFormalPic: "images/Desktop/Portfolio/post 4 - Hotel Management System/Presentation.png", 
      subPic1: "images/Desktop/Portfolio/post 4 - Hotel Management System/team member.jpeg",
      subPic2: "images/Desktop/Portfolio/post 4 - Hotel Management System/the data.png",
      whyImThere: "Lead Visual Designer creating a modern digital presence.",
      skills: "Figma, Vector Illustration, Brand Strategy",
      rating: "Execution: 9/10 - Strong high-contrast typography scaling.",
      projectUrl: "/hotel-management-system"
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

/* ==========================================================================
   4. MODULE 4: INTERACTIVE RESUME TIMELINE PROCESSOR (REMAKER ENGINE)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DYNAMIC REPOSITORY DATA BANK MANIFEST
    const timelineData = [
        { 
          type: 'education', 
          duration: 'Sept, 2025 - Present', 
          sortDate: '2025-09',
          name: 'Master of Computer Science Thesis', 
          details: 'Focusing on advanced client-side framework deployment rules, micro-interactions code performance optimization, and responsive design systems patterns.' 
        },
        { 
          type: 'education', 
          duration: 'Jan, 2025 - June, 2025', 
          sortDate: '2025-01',
          name: 'Advanced UI/UX Specialization Track', 
          details: 'Mastered absolute spatial workspace coordinate grid logic, vector graphics mapping structures, and visual communication accessibility design rules.' 
        },
        { 
          type: 'experience', 
          duration: 'June, 2024 - Dec, 2024', 
          sortDate: '2024-06',
          name: 'Junior Full-Stack Web Developer Internship', 
          details: 'Collaborated alongside backend server infrastructure engineers. Participated in database pipeline connection speed audits, reducing page query response cycles cleanly.' 
        },
        { 
          type: 'education', 
          duration: 'Sept, 2020 - May, 2024', 
          sortDate: '2020-09',
          name: 'University Bachelor Degree Program', 
          details: 'Completed data structures, algorithmic complexity matrices, and standard object-oriented programming foundations with high distinction metrics.' 
        }
    ];

    const cardsStackContainer = document.querySelector(".timeline-cards-stack");
    
    // Hooks directly onto your radio inputs named 'timeline-filter' inside index.html
    const filterRadios = document.querySelectorAll('input[name="timeline-filter"]');

    if (!cardsStackContainer) return;

    // Chronological sorting controller: arrays items from newest down to oldest perfectly
    const sortedTimelineData = [...timelineData].sort((a, b) => {
        return new Date(b.sortDate) - new Date(a.sortDate);
    });

    // 2. TIMELINE CARDS AUTOMATED GENERATOR
    function deployTimelineWorkspace() {
        cardsStackContainer.innerHTML = ""; // Clear old nodes to completely avoid frozen interfaces

        sortedTimelineData.forEach(item => {
            const itemRow = document.createElement("div");
            itemRow.className = "timeline-item-row";
            itemRow.setAttribute("data-category", item.type); 

            itemRow.innerHTML = `
                <div class="timeline-clickable-card">
                    <div class="timeline-card-top-row">
                        <div class="card-year-badge"><p>${item.duration}</p></div>
                        <div class="card-top-white-slice"></div>
                    </div>
                    <div class="card-headline-name">
                        <h3>${item.name}</h3>
                    </div>
                </div>
                <div class="timeline-hidden-details">
                    <p>${item.details}</p>
                </div>
            `;

            // Dropdown click listener handling top-to-bottom transparency reveal actions
            const clickableCard = itemRow.querySelector(".timeline-clickable-card");
            clickableCard.addEventListener("click", () => {
                const isOpen = itemRow.classList.contains("expanded");
                
                // Reset other expanded rows cleanly before launching a new dropdown
                document.querySelectorAll(".timeline-item-row.expanded").forEach(row => {
                    row.classList.remove("expanded");
                });

                if (!isOpen) {
                    itemRow.classList.add("expanded");
                }
            });

            cardsStackContainer.appendChild(itemRow);
        });
    }

    // ==========================================================================
    // 3. REMADE: DYNAMIC ACTIVE BUTTON & RADIO CATEGORY SWITCHER
    // ==========================================================================
    if (filterRadios.length > 0) {
        filterRadios.forEach(radio => {
            radio.addEventListener("change", (e) => {
                
                // --- A. ACTIVE BUTTON INDICATOR SWITCHER ---
                // Removes the active text color/circles from your old selection blocks safely
                const allFilterLabels = document.querySelectorAll(".timeline-filters .filter-btn");
                allFilterLabels.forEach(label => label.classList.remove("active"));
                
                // Finds the specific label wrapping around the checked radio button and activates it
                const activeLabel = e.target.closest(".filter-btn");
                if (activeLabel) {
                    activeLabel.classList.add("active");
                }

                // --- B. CATEGORY FILTER LOGIC ---
                // Strip case capitalizations to run calculations accurately without crashing
                const filterValue = e.target.value.toLowerCase().trim();
                const allRows = document.querySelectorAll(".timeline-item-row");

                allRows.forEach(row => {
                    const category = row.getAttribute("data-category").toLowerCase().trim();
                    
                    if (filterValue === "all" || category === filterValue) {
                        row.classList.remove("is-hidden"); // Instantly uncovers matching milestones
                    } else {
                        row.classList.add("is-hidden");    // Hides non-matching categories instantly
                        row.classList.remove("expanded"); 
                    }
                });
            });
        });
    }

    deployTimelineWorkspace();
});


/* ==========================================================================
   5. MODULE 5: CONTACT STATUS THEME CONTROLLER ENGINE
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================================================
  // CONFIGURATION VALUE: Set your availability status condition right here!
  // Options: 
  //   - "working"   (Changes light to GREEN + edits label text lines)
  //   - "available" (Changes light to CHERRY RED + edits label text lines)
  // ==========================================================================
  const currentWorkCondition = "available"; 

  const statusDashboardProfiles = {
    working: {
      themeClass: "job-state-working",
      headlineWord: "Currently engaged on core application engineering sprints, but feel free to network!",
      labelText: "Status: Currently Working / Occupied"
    },
    available: {
      themeClass: "job-state-available",
      headlineWord: "I am actively available for new opportunities! Let's build your next app together.",
      labelText: "Status: Not Working / Available for Roles"
    }
  };

  // DOM Layout Component Query Anchors
  const statusContainerBox = document.querySelector(".status-card");
  const hiredWordHeadingLine = document.querySelector(".hired-word-text");
  const liveStatusTextLabel = document.querySelector(".status-label-text");

  function processLiveStatusDashboard() {
    if (!statusContainerBox || !hiredWordHeadingLine || !liveStatusTextLabel) return;

    // Fetch matching data options profiles
    const selectedState = statusDashboardProfiles[currentWorkCondition] || statusDashboardProfiles.available;

    // Injects class status rule configurations cleanly
    statusContainerBox.className = "contact-card status-card " + selectedState.themeClass;

    // Replace text headings with explicit string assets dynamically inside the card rows loops
    hiredWordHeadingLine.textContent = selectedState.headlineWord;
    liveStatusTextLabel.textContent = selectedState.labelText;
  }

  processLiveStatusDashboard();
});