//   navbar function
$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(Window).scrollTop() > 30) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }
  });
});





$(document).ready(function() {
  // Hamburger Menu Toggle
  $('.fa-bars').click(function() {
    $(this).toggleClass('fa-times');
    $('.navbar ul').toggleClass('active');
  });

  // Login Form Submission
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('error-message');

  // Default credentials
  const defaultUsername = 'Admin';
  const defaultPassword = 'Password123';

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent default form submission
      
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      console.log('Entered:', { username, password }); // Debug

      if (username === defaultUsername && password === defaultPassword) {
        console.log('Login successful, redirecting to index.html');
        window.location.href = 'index.html'; // Redirect to index.html
      } else {
        console.log('Login failed');
        if (errorMessage) {
          errorMessage.style.display = 'block'; // Show error message
        }
      }
    });
  }
});