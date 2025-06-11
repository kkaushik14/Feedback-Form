document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    const response = await fetch(process.env.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, feedback }),
    });

    if (response.ok) {
      alert('Thank you for your feedback!');
      form.reset();
    } else {
      alert('There was an error submitting your feedback.');
    }
  });
});