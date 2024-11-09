document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var workExperienceContainer = document.getElementById('workExperienceContainer');
    var addExperienceBtn = document.getElementById('addExperienceBtn');
    var skillsContainer = document.getElementById('skillsContainer');
    var addSkillBtn = document.getElementById('addSkillBtn');
    var educationContainer = document.getElementById('educationContainer');
    var addEducationBtn = document.getElementById('addEducationBtn');
    var referenceContainer = document.getElementById('referenceContainer');
    var addReferenceBtn = document.getElementById('addReferenceBtn');
    var profilePictureInput = document.getElementById('profilePicture');
    var profilePictureImg = document.getElementById('cvProfilePicture');
    var cv = document.getElementById('cv');
    var cvmaindiv = document.getElementById('cvMainDiv');
    // Handle adding more work experience fields
    addExperienceBtn.addEventListener('click', function () {
        var newExperience = document.createElement('div');
        newExperience.classList.add('work-experience-section');
        newExperience.innerHTML = "\n      <label for=\"startDate\">Start Date:</label>\n      <input type=\"date\" name=\"startDate[]\" required />\n\n      <label for=\"endDate\">End Date:</label>\n      <input type=\"date\" name=\"endDate[]\" required />\n\n      <label for=\"jobPosition\">Job Position:</label>\n      <input type=\"text\" name=\"jobPosition[]\" required />\n\n      <label for=\"companyName\">Company Name:</label>\n      <input type=\"text\" name=\"companyName[]\" required />\n    ";
        workExperienceContainer.appendChild(newExperience);
    });
    // Handle adding more skills fields
    addSkillBtn.addEventListener('click', function () {
        var newSkill = document.createElement('div');
        newSkill.classList.add('skill-section');
        newSkill.innerHTML = "\n      <label for=\"softwareSkills\">Skill:</label>\n      <input type=\"text\" name=\"softwareSkills[]\" required />\n    ";
        skillsContainer.appendChild(newSkill);
    });
    // Handle adding more education fields
    addEducationBtn.addEventListener('click', function () {
        var newEducation = document.createElement('div');
        newEducation.classList.add('education-section');
        newEducation.innerHTML = "\n      <label for=\"educationInstitution\">Institution:</label>\n      <input type=\"text\" name=\"educationInstitution[]\" style =\"width: 100px;\" required />\n\n      <label for=\"educationDegree\">Degree:</label>\n      <input type=\"text\" name=\"educationDegree[]\" style =\"width: 100px;\" required />\n\n      <label for=\"educationYear\">Year:</label>\n      <input type=\"text\" name=\"educationYear[]\" style =\"width: 100px;\" required />\n    ";
        educationContainer.appendChild(newEducation);
    });
    // Handle adding more reference fields
    addReferenceBtn.addEventListener('click', function () {
        var newReference = document.createElement('div');
        newReference.classList.add('reference-section');
        newReference.innerHTML = "\n      <label for=\"referenceName\">Name:</label>\n      <input type=\"text\" name=\"referenceName[]\" required />\n\n      <label for=\"referenceContact\">Contact:</label>\n      <input type=\"text\" name=\"referenceContact[]\" required />\n    ";
        referenceContainer.appendChild(newReference);
    });
    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Form data
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var website = document.getElementById('website').value;
        var address = document.getElementById('address').value;
        var name = document.getElementById('name').value;
        var proTitle = document.getElementById('title').value;
        var about_me = document.getElementById('aboutme').value;
        // Education
        var educationInstitutions = document.getElementsByName('educationInstitution[]');
        var educationDegrees = document.getElementsByName('educationDegree[]');
        var educationYears = document.getElementsByName('educationYear[]');
        // Reference
        var referenceNames = document.getElementsByName('referenceName[]');
        var referenceContacts = document.getElementsByName('referenceContact[]');
        // Skills
        var softwareSkills = document.getElementsByName('softwareSkills[]');
        // Handle profile picture preview
        if (profilePictureInput.files && profilePictureInput.files[0]) {
            var file = profilePictureInput.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                profilePictureImg.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(file);
        }
        // Update CV fields
        document.getElementById('cvPhone').innerText = phone;
        document.getElementById('cvEmail').innerText = email;
        document.getElementById('cvWebsite').innerText = website;
        document.getElementById('cvAddress').innerText = address;
        document.getElementById('cvName').innerText = name;
        document.getElementById('cvProfessionalTitle').innerText = proTitle;
        document.getElementById('cvAboutMe').innerText = about_me;
        // Clear existing sections
        var cvReferenceSection = document.getElementById('cvReference');
        cvReferenceSection.innerHTML = '';
        // Clear existing sections
        var cvEducationSection = document.getElementById('cvEducation');
        cvEducationSection.innerHTML = ''; // Clear any previous entries
        // Add all education entries
        educationInstitutions.forEach(function (institution, index) {
            var degree = educationDegrees[index].value;
            var year = educationYears[index].value;
            // Create a div for each education entry
            var educationDiv = document.createElement('div');
            educationDiv.classList.add('educationDiv');
            // Add institution as a heading (h4)
            var institutionHeading = document.createElement('h4');
            institutionHeading.innerText = institution.value; // Institution name in heading
            educationDiv.appendChild(institutionHeading);
            // Add degree as a paragraph (p)
            var degreeParagraph = document.createElement('p');
            degreeParagraph.innerText = degree; // Degree in paragraph
            educationDiv.appendChild(degreeParagraph);
            // Add year as another paragraph (p)
            var yearParagraph = document.createElement('p');
            yearParagraph.innerText = year; // Year in paragraph
            educationDiv.appendChild(yearParagraph);
            // Append the div to the CV education section
            cvEducationSection.appendChild(educationDiv);
            educationDiv.classList.add('space');
        });
        // Add all references
        referenceNames.forEach(function (name, index) {
            var contact = referenceContacts[index].value;
            var referenceDiv = document.createElement('div');
            referenceDiv.classList.add('referenceDiv');
            referenceDiv.innerHTML = "\n        <p><strong>".concat(name.value, "</strong></p>\n        <p>").concat(contact, "</p>\n        <br />\n      ");
            cvReferenceSection.appendChild(referenceDiv);
        });
        // Clear existing work experience in CV
        var cvWorkExperienceSection = document.querySelector('.work-experience');
        cvWorkExperienceSection.innerHTML = ''; // Clear previous content
        // Add all work experience
        var startDates = document.getElementsByName('startDate[]');
        var endDates = document.getElementsByName('endDate[]');
        var jobPositions = document.getElementsByName('jobPosition[]');
        var companyNames = document.getElementsByName('companyName[]');
        startDates.forEach(function (startDate, index) {
            var endDate = endDates[index].value;
            var jobPosition = jobPositions[index].value;
            var companyName = companyNames[index].value;
            var workExpDiv = document.createElement('div');
            workExpDiv.classList.add('workExpDiv1');
            workExpDiv.innerHTML = "\n        <p style=\"width: 30%;\">".concat(startDate.value, "</p>\n        <p style=\"width: 30%;\">").concat(endDate, "</p>\n        <div style=\"width: 100%;\">\n          <h5>").concat(jobPosition, "<br /><span>").concat(companyName, "</span></h5>\n        </div>\n        <br>\n      ");
            cvWorkExperienceSection.appendChild(workExpDiv);
        });
        // Clear existing skills in CV
        var cvSkillsSection = document.getElementById('cvSkills');
        cvSkillsSection.innerHTML = ''; // Clear previous content
        // Add all skills
        softwareSkills.forEach(function (skill) {
            var skillItem = document.createElement('li');
            skillItem.innerText = skill.value;
            cvSkillsSection.appendChild(skillItem);
            cv.classList.remove('none');
            cvmaindiv.classList.add('none');
        });
    });
});
