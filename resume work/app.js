document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById("resume-form");
    var previewName = document.getElementById("preview-name");
    var previewEmail = document.getElementById("preview-email");
    var previewPhone = document.getElementById("preview-phone");
    var previewEducation = document.getElementById("preview-education");
    var previewExperience = document.getElementById("preview-experience");
    var previewSkills = document.getElementById("preview-skills");
    // Handle form submission
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        // Retrieve form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value.split(",").map(function (skill) { return skill.trim(); }).join(", ");
        // Update resume preview with form data
        previewName.textContent = name || "Full Name";
        previewEmail.textContent = email || "Email not provided";
        previewPhone.textContent = phone || "Phone not provided";
        previewEducation.textContent = education || "No education provided";
        previewExperience.textContent = experience || "No experience provided";
        previewSkills.textContent = skills || "No skills provided";
        // Optionally, reset the form
        resumeForm.reset();
    });
});
