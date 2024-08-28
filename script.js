document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show the thank you popup
    document.getElementById('thank-you-popup').classList.remove('hidden');

    // Clear the form fields (optional)
    document.getElementById('contact-form').reset();
});

document.getElementById('close-popup').addEventListener('click', function() {
    // Hide the thank you popup
    document.getElementById('thank-you-popup').classList.add('hidden');
});
