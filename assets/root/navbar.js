fetch('/assets/root/navbar.html')
  .then(response => response.text())
  .then(html => {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = html;
  });
