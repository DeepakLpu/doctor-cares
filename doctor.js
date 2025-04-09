// Basic form submission handling (for demo purposes)
$(document).ready(function() {
    $('.appointment-form').on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        alert('Form submitted! Payment processing would start here.');
        // Add actual payment gateway integration here (e.g., Stripe, PayPal)
    });

    // Hamburger menu toggle (if not already in your main.js)
    $('.fa-bars').click(function() {
        $('.navbar ul').slideToggle();
    });
});