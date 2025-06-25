document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (!form) return;
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // Check session before submitting
    const authRes = await fetch('/api/auth/me');
    const authData = await authRes.json();
    if (!authData.email) {
      showNotification('Session expired. Please login again.', 'error');
      setTimeout(() => { window.location.href = 'index.html'; }, 1500);
      return;
    }
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      showNotification('Feedback submitted!', 'success');
      form.reset();
      // Refill email if needed
      const emailInput = document.getElementById('email');
      if (emailInput && authData.email) {
        emailInput.value = authData.email;
        emailInput.readOnly = true;
      }
    } else {
      const err = await res.json();
      showNotification(err.message || 'Failed to submit feedback.', 'error');
    }
  });
});