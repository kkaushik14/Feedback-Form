// public/auth.js
// Handles login/signup logic and redirects

document.addEventListener('DOMContentLoaded', function () {
  // Login form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        window.location.href = 'form.html';
      } else {
        showNotification(data.error || 'Login failed', 'error');
      }
    });
  }

  // Signup form (modal)
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      const confirm = document.getElementById('signup-confirm').value;
      if (password !== confirm) {
        showNotification('Passwords do not match', 'error');
        return;
      }
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        showNotification('Registered successfully!', 'success');
        document.getElementById('signup-modal').classList.add('hidden');
        signupForm.reset();
      } else {
        showNotification(data.error || 'Signup failed', 'error');
      }
    });
  }
});
