// include.js
function includeHTML() {
    const elements = document.querySelectorAll('[include-html]');
    elements.forEach(el => {
      const file = el.getAttribute("include-html");
      fetch(file)
        .then(response => {
          if (!response.ok) throw new Error(`Failed to load ${file}`);
          return response.text();
        })
        .then(data => {
          el.innerHTML = data;
          el.removeAttribute("include-html"); // Remove attribute after loading
          includeHTML(); // Recursively check for nested includes
        })
        .catch(error => {
          el.innerHTML = `<div style="color: red;">${error.message}</div>`;
        });
    });
  }
  