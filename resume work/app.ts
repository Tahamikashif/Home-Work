document.addEventListener("DOMContentLoaded", () => {
    const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
    const previewName = document.getElementById("preview-name") as HTMLElement;
    const previewEmail = document.getElementById("preview-email") as HTMLElement;
    const previewPhone = document.getElementById("preview-phone") as HTMLElement;
    const previewEducation = document.getElementById("preview-education") as HTMLElement;
    const previewExperience = document.getElementById("preview-experience") as HTMLElement;
    const previewSkills = document.getElementById("preview-skills") as HTMLElement;

    // Handle form submission
    resumeForm.addEventListener("submit", (event: Event) => {
        event.preventDefault();  // Prevent the form from submitting and refreshing the page

        // Retrieve form values
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",").map(skill => skill.trim()).join(", ");

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