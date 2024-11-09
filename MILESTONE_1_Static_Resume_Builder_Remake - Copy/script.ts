// Toggle visibility for sections based on class names
const toggleSectionVisibility = (sectionClass: string) => {
    const section = document.querySelector(`.${sectionClass}`) as HTMLElement;
    if (section.style.display === "none") {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  };
  
  // Add event listeners to toggle buttons
  const initializeToggleButtons = () => {
    const skillsButton = document.getElementById("toggleSkills");
    const experienceButton = document.getElementById("toggleExperience");
    const educationButton = document.getElementById("toggleEducation");
    const languageButton = document.getElementById("toggleLanguage");
  
    skillsButton?.addEventListener("click", () => {
      toggleSectionVisibility("skills-section");
    });
  
    experienceButton?.addEventListener("click", () => {
      toggleSectionVisibility("work-experience-section");
    });
  
    educationButton?.addEventListener("click", () => {
      toggleSectionVisibility("education-section");
    });

    languageButton?.addEventListener("click", () => {
      toggleSectionVisibility("language-section");
    });
  };
  
  // Call the function to initialize event listeners
  initializeToggleButtons();
  