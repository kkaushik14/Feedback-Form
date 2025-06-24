// public/navbar.js
// Handles navbar login/logout/email display for all pages

document.addEventListener('DOMContentLoaded', async function () {
  const nav = document.getElementById('navbar-links') || document.querySelector('nav .space-x-6');
  if (!nav) return;
  // Check login status
  const res = await fetch('/api/auth/me');
  const data = await res.json();
  nav.innerHTML = '';
  if (data.email) {
    nav.innerHTML = `
      <span class="text-slate-200 font-medium">${data.email}</span>
      <button id="logout-btn" class="ml-4 text-red-400 hover:text-red-300 font-semibold underline">Logout</button>
      <a href="review.html" class="ml-4 text-slate-200 hover:text-slate-400 font-medium transition">Review Page</a>
    `;
    document.getElementById('logout-btn').onclick = async function () {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = 'index.html';
    };
  } else {
    nav.innerHTML = `
      <a href="index.html" class="text-slate-200 hover:text-slate-400 font-medium transition rounded bg-blue-600 px-4 py-2 shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">Login</a>
      <a href="review.html" class="ml-4 text-slate-200 hover:text-slate-400 font-medium transition">Review Page</a>
    `;
  }
});
