document.addEventListener("DOMContentLoaded", () => {
  // Get the form and output div
  const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
  const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
  const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;

  // Handle form submission
  resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

        // Get the uploaded profile picture file
        const profilePictureFile = profilePictureInput.files![0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile):"";

    // Generate the resume output in HTML format
    const resumeHTML = `
      <h2>Resume</h2>
      <h3>Personal Information</h3>
      ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class = "profilePicture";>` : ""}
      <p><strong>Name:</strong><span id="edit-name" class="editable"> ${name} </span></p>
      <p><strong>Email:</strong><span id="edit-email" class="editable"> ${email} </span></p>
      <p><strong>Phone:</strong><span id="edit-phone" class="editable"> ${phone} </span></p>

      <h3>Education</h3>
      <p><span id="edit-education" class="editable">${education}</span></p>

      <h3>Experience</h3>
      <p><span id="edit-experience" class="editable">${experience}</span></p>

      <h3>Skills</h3>
      <p><span id="edit-skills" class="editable">${skills}</span></p>
    `;

    // Insert the generated resume into the output div
    resumeOutput.innerHTML = resumeHTML;
    
    // Make elements editable
    makeEditable();
  });

  // Function to make elements editable
  function makeEditable() {
    const editableElements = document.querySelectorAll(".editable");
    editableElements.forEach((element) => {
      element.setAttribute("contenteditable", "true");
    });
  }
});
