//your JS code here. If required.
// Get references to the elements
const circles = document.querySelectorAll('.circle');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

// Set initial state
let currentStep = 1;
updateProgressBar();

// Function to update the progress bar based on current step
function updateProgressBar() {
    // Update the circles
    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Enable/Disable buttons
    prevButton.disabled = currentStep === 1;
    nextButton.disabled = currentStep === circles.length;
}

// Add event listeners to buttons
nextButton.addEventListener('click', () => {
    if (currentStep < circles.length) {
        currentStep++;
        updateProgressBar();
    }
});

prevButton.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        updateProgressBar();
    }
});
