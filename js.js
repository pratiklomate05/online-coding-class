// JavaScript for the Online Course Admissions Website

document.addEventListener('DOMContentLoaded', () => {
    // Get the "Get Admission & Win Free Gifts" button from the header
    const headerCtaButton = document.getElementById('headerCtaButton');
    // Get the "Apply Now & Reserve Your Seat" button from the final section
    const applyNowButton = document.getElementById('applyNowButton');

    // Event listener for the "Get Admission & Win Free Gifts" button
    if (headerCtaButton) {
        headerCtaButton.addEventListener('click', () => {
            console.log('Header CTA button clicked!');
            // Display a simple alert for now. In a real application, you might
            // show a modal with more info about gifts or a quick contact form.
            alert("Congratulations! Get ready to win exciting gifts on admission. Our team will contact you shortly!");
        });
    }

    // Event listener for the "Apply Now & Reserve Your Seat" button
    if (applyNowButton) {
        applyNowButton.addEventListener('click', () => {
            console.log('Apply Now button clicked!');
            // This action will initiate a phone call to the specified number.
            window.location.href = 'tel:7020769615';
        });
    }
});
