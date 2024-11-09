// Toggle visibility for sections based on class names
var toggleSectionVisibility = function (sectionClass) {
    var section = document.querySelector(".".concat(sectionClass));
    if (section.style.display === "none") {
        section.style.display = "block";
    }
    else {
        section.style.display = "none";
    }
};
// Add event listeners to toggle buttons
var initializeToggleButtons = function () {
    var skillsButton = document.getElementById("toggleSkills");
    var experienceButton = document.getElementById("toggleExperience");
    var educationButton = document.getElementById("toggleEducation");
    var languageButton = document.getElementById("toggleLanguage");
    skillsButton === null || skillsButton === void 0 ? void 0 : skillsButton.addEventListener("click", function () {
        toggleSectionVisibility("skills-section");
    });
    experienceButton === null || experienceButton === void 0 ? void 0 : experienceButton.addEventListener("click", function () {
        toggleSectionVisibility("work-experience-section");
    });
    educationButton === null || educationButton === void 0 ? void 0 : educationButton.addEventListener("click", function () {
        toggleSectionVisibility("education-section");
    });
    languageButton === null || languageButton === void 0 ? void 0 : languageButton.addEventListener("click", function () {
        toggleSectionVisibility("language-section");
    });
};
// Call the function to initialize event listeners
initializeToggleButtons();
