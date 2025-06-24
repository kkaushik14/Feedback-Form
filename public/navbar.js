document.addEventListener('DOMContentLoaded', async function () {
  const desktopNav = document.getElementById('navbar-links');
  const mobileLinks = document.getElementById('mobile-links');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!desktopNav || !mobileLinks) return;

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  try {
    const res = await fetch('/api/auth/me');
    const data = await res.json();

    const desktopItems = [];
    const mobileItems = [];

    if (data.email) {
      desktopItems.push(
        `<span class="filter-btn px-6 py-2 rounded-full glass text-teal-400 font-bold uppercase tracking-wide shadow focus:outline-none transition">${data.email}</span>`,
        `<a href="review.html" class="text-slate-200 hover:text-slate-400 font-medium transition">Review Page</a>`,
        `<a href="recommendation.html" class="text-slate-200 hover:text-slate-400 font-medium transition">Movie Recommendations</a>`,
        `<button id="logout-btn" class="text-red-400 hover:text-red-300 font-semibold">Logout</button>`
      );

      mobileItems.push(
        `<span class="filter-btn px-6 py-2 rounded-full glass text-teal-400 font-bold uppercase tracking-wide shadow focus:outline-none transition">${data.email}</span>`,
        `<a href="review.html" class="text-slate-200 hover:text-slate-400 font-medium transition">Review Page</a>`,
        `<a href="recommendation.html" class="text-slate-200 hover:text-slate-400 font-medium transition">Movie Recommendations</a>`,
        `<button id="mobile-logout-btn" class="text-red-400 hover:text-red-300 font-semibold text-left">Logout</button>`
      );
    } else {
      desktopItems.push(
        `<a href="index.html" class="text-slate-200 hover:text-slate-400 font-medium transition rounded bg-blue-600 px-4 py-2 shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">Login</a>`,
        `<a href="review.html" class="text-slate-200 hover:text-slate-400 font-medium transition">Review Page</a>`,
        `<a href="recommendation.html" class="text-slate-200 hover:text-slate-400 font-medium transition">Movie Recommendations</a>`
      );

      mobileItems.push(...desktopItems);
    }

    desktopNav.innerHTML = desktopItems.join('');
    mobileLinks.innerHTML = mobileItems.join('');

    document.getElementById('logout-btn')?.addEventListener('click', async () => {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = 'index.html';
    });

    document.getElementById('mobile-logout-btn')?.addEventListener('click', async () => {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = 'index.html';
    });
  } catch (error) {
    desktopNav.innerHTML = `<a href="index.html" class="text-slate-200 font-medium">Login</a>`;
    mobileLinks.innerHTML = `<a href="index.html" class="text-slate-200 font-medium">Login</a>`;
  }
});