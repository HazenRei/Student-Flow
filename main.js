// StudentFlow - Main JavaScript functionality

// Utility functions
function showMessage(message, type = 'info') {
  // Create a simple alert for now
  alert(message);
}

function redirectTo(url) {
  window.location.href = url;
}

// Navigation helpers
function goHome() {
  redirectTo('index.html');
}

function goToLogin() {
  redirectTo('login.html');
}

function goToRegister() {
  redirectTo('register.html');
}

function goToDashboard() {
  redirectTo('dashboard.html');
}

function goToStudents() {
  redirectTo('student.html');
}

function logout() {
  // Clear any session data if needed
  redirectTo('index.html');
}

// Form validation helpers
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

// Make functions globally available
window.StudentFlow = {
  showMessage,
  redirectTo,
  goHome,
  goToLogin,
  goToRegister,
  goToDashboard,
  goToStudents,
  logout,
  validateEmail,
  validatePassword
};