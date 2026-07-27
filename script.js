document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const togglePassword = document.getElementById('togglePassword');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const errorAlert = document.getElementById('errorAlert');
  const loginCard = document.getElementById('loginCard');
  const dashboardView = document.getElementById('dashboardView');
  const logoutBtn = document.getElementById('logoutBtn');

  // Toggle Password Visibility
  togglePassword.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    togglePassword.textContent = isPassword ? 'Hide' : 'Show';
  });

  // Client-Side Validation & Form Submission
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset error states
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    errorAlert.style.display = 'none';

    // Simple Email Check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.style.display = 'block';
      isValid = false;
    }

    // Simple Password Check
    if (passwordInput.value.length < 6) {
      passwordError.style.display = 'block';
      isValid = false;
    }

    if (!isValid) return;

    // Static Mock Authentication Check
    if (emailInput.value === 'admin@system.com' && passwordInput.value === 'password123') {
      loginCard.classList.add('hidden');
      dashboardView.classList.remove('hidden');
    } else {
      errorAlert.style.display = 'block';
    }
  });

  // Logout reset
  logoutBtn.addEventListener('click', () => {
    dashboardView.classList.add('hidden');
    loginCard.classList.remove('hidden');
    loginForm.reset();
  });
});