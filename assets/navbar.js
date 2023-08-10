fetch('/assets/navbar.html')
  .then(response => response.text())
  .then(html => {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = html;
  });
