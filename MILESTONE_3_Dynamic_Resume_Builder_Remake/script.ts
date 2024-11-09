document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resumeForm') as HTMLFormElement;
  const workExperienceContainer = document.getElementById('workExperienceContainer') as HTMLElement;
  const addExperienceBtn = document.getElementById('addExperienceBtn') as HTMLButtonElement;
  const skillsContainer = document.getElementById('skillsContainer') as HTMLElement;
  const addSkillBtn = document.getElementById('addSkillBtn') as HTMLButtonElement;
  const educationContainer = document.getElementById('educationContainer') as HTMLElement;
  const addEducationBtn = document.getElementById('addEducationBtn') as HTMLButtonElement;
  const referenceContainer = document.getElementById('referenceContainer') as HTMLElement;
  const addReferenceBtn = document.getElementById('addReferenceBtn') as HTMLButtonElement;
  const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
  const profilePictureImg = document.getElementById('cvProfilePicture') as HTMLImageElement;
  const cv = document.getElementById('cv') as HTMLElement;
  const cvmaindiv = document.getElementById('cvMainDiv') as HTMLElement;


  // Handle adding more work experience fields
  addExperienceBtn.addEventListener('click', () => {
    const newExperience = document.createElement('div');
    newExperience.classList.add('work-experience-section');
    newExperience.innerHTML = `
      <label for="startDate">Start Date:</label>
      <input type="date" name="startDate[]" required />

      <label for="endDate">End Date:</label>
      <input type="date" name="endDate[]" required />

      <label for="jobPosition">Job Position:</label>
      <input type="text" name="jobPosition[]" required />

      <label for="companyName">Company Name:</label>
      <input type="text" name="companyName[]" required />
    `;
    workExperienceContainer.appendChild(newExperience);
  });

  // Handle adding more skills fields
  addSkillBtn.addEventListener('click', () => {
    const newSkill = document.createElement('div');
    newSkill.classList.add('skill-section');
    newSkill.innerHTML = `
      <label for="softwareSkills">Skill:</label>
      <input type="text" name="softwareSkills[]" required />
    `;
    skillsContainer.appendChild(newSkill);
  });

  // Handle adding more education fields
  addEducationBtn.addEventListener('click', () => {
    const newEducation = document.createElement('div');
    newEducation.classList.add('education-section');
    newEducation.innerHTML = `
      <label for="educationInstitution">Institution:</label>
      <input type="text" name="educationInstitution[]" style ="width: 100px;" required />

      <label for="educationDegree">Degree:</label>
      <input type="text" name="educationDegree[]" style ="width: 100px;" required />

      <label for="educationYear">Year:</label>
      <input type="text" name="educationYear[]" style ="width: 100px;" required />
    `;
    educationContainer.appendChild(newEducation);
  });

  // Handle adding more reference fields
  addReferenceBtn.addEventListener('click', () => {
    const newReference = document.createElement('div');
    newReference.classList.add('reference-section');
    newReference.innerHTML = `
      <label for="referenceName">Name:</label>
      <input type="text" name="referenceName[]" required />

      <label for="referenceContact">Contact:</label>
      <input type="text" name="referenceContact[]" required />
    `;
    referenceContainer.appendChild(newReference);
  });

  // Handle form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Form data
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const website = (document.getElementById('website') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const proTitle = (document.getElementById('title') as HTMLInputElement).value;
    const about_me = (document.getElementById('aboutme') as HTMLInputElement).value;
    
    // Education
    const educationInstitutions = document.getElementsByName('educationInstitution[]') as NodeListOf<HTMLInputElement>;
    const educationDegrees = document.getElementsByName('educationDegree[]') as NodeListOf<HTMLInputElement>;
    const educationYears = document.getElementsByName('educationYear[]') as NodeListOf<HTMLInputElement>;

    // Reference
    const referenceNames = document.getElementsByName('referenceName[]') as NodeListOf<HTMLInputElement>;
    const referenceContacts = document.getElementsByName('referenceContact[]') as NodeListOf<HTMLInputElement>;

    // Skills
    const softwareSkills = document.getElementsByName('softwareSkills[]') as NodeListOf<HTMLInputElement>;

    // Handle profile picture preview
    if (profilePictureInput.files && profilePictureInput.files[0]) {
      const file = profilePictureInput.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        profilePictureImg.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }

    // Update CV fields
    (document.getElementById('cvPhone') as HTMLElement).innerText = phone;
    (document.getElementById('cvEmail') as HTMLElement).innerText = email;
    (document.getElementById('cvWebsite') as HTMLElement).innerText = website;
    (document.getElementById('cvAddress') as HTMLElement).innerText = address;
    (document.getElementById('cvName') as HTMLElement).innerText = name;
    (document.getElementById('cvProfessionalTitle') as HTMLElement).innerText = proTitle;
    (document.getElementById('cvAboutMe') as HTMLElement).innerText = about_me;

    // Clear existing sections
    const cvReferenceSection = document.getElementById('cvReference') as HTMLElement;
    cvReferenceSection.innerHTML = '';

    // Clear existing sections
  const cvEducationSection = document.getElementById('cvEducation') as HTMLElement;
  cvEducationSection.innerHTML = '';  // Clear any previous entries

  // Add all education entries
  educationInstitutions.forEach((institution, index) => {
    const degree = educationDegrees[index].value;
    const year = educationYears[index].value;

    // Create a div for each education entry
    const educationDiv = document.createElement('div');
    educationDiv.classList.add('educationDiv');

    // Add institution as a heading (h4)
    const institutionHeading = document.createElement('h4');
    institutionHeading.innerText = institution.value;  // Institution name in heading
    educationDiv.appendChild(institutionHeading);

    // Add degree as a paragraph (p)
    const degreeParagraph = document.createElement('p');
    degreeParagraph.innerText = degree;  // Degree in paragraph
    educationDiv.appendChild(degreeParagraph);

    // Add year as another paragraph (p)
    const yearParagraph = document.createElement('p');
    yearParagraph.innerText = year;  // Year in paragraph
    educationDiv.appendChild(yearParagraph);

    // Append the div to the CV education section
    cvEducationSection.appendChild(educationDiv);
    educationDiv.classList.add('space');
  });

    // Add all references
    referenceNames.forEach((name, index) => {
      const contact = referenceContacts[index].value;

      const referenceDiv = document.createElement('div');
      referenceDiv.classList.add('referenceDiv');
      referenceDiv.innerHTML = `
        <p><strong>${name.value}</strong></p>
        <p>${contact}</p>
        <br />
      `;
      cvReferenceSection.appendChild(referenceDiv);
    });

    // Clear existing work experience in CV
    const cvWorkExperienceSection = document.querySelector('.work-experience') as HTMLElement;
    cvWorkExperienceSection.innerHTML = ''; // Clear previous content

    // Add all work experience
    const startDates = document.getElementsByName('startDate[]') as NodeListOf<HTMLInputElement>;
    const endDates = document.getElementsByName('endDate[]') as NodeListOf<HTMLInputElement>;
    const jobPositions = document.getElementsByName('jobPosition[]') as NodeListOf<HTMLInputElement>;
    const companyNames = document.getElementsByName('companyName[]') as NodeListOf<HTMLInputElement>;

    startDates.forEach((startDate, index) => {
      const endDate = endDates[index].value;
      const jobPosition = jobPositions[index].value;
      const companyName = companyNames[index].value;

      const workExpDiv = document.createElement('div');
      workExpDiv.classList.add('workExpDiv1');
      workExpDiv.innerHTML = `
        <p style="width: 30%;">${startDate.value}</p>
        <p style="width: 30%;">${endDate}</p>
        <div style="width: 100%;">
          <h5>${jobPosition}<br /><span>${companyName}</span></h5>
        </div>
        <br>
      `;
      cvWorkExperienceSection.appendChild(workExpDiv);
    });

    // Clear existing skills in CV
    const cvSkillsSection = document.getElementById('cvSkills') as HTMLElement;
    cvSkillsSection.innerHTML = ''; // Clear previous content

    // Add all skills
    softwareSkills.forEach((skill) => {
      const skillItem = document.createElement('li');
      skillItem.innerText = skill.value;
      cvSkillsSection.appendChild(skillItem);

      cv.classList.remove('none');
      cvmaindiv.classList.add('none');

    });
  });
});
