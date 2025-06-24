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
        alert(data.error || 'Login failed');
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
        alert('Passwords do not match');
        return;
      }
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        alert('Registered successfully!');
        document.getElementById('signup-modal').classList.add('hidden');
        signupForm.reset();
      } else {
        alert(data.error || 'Signup failed');
      }
    });
  }
});
