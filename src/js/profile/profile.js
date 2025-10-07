document.addEventListener("DOMContentLoaded", () => {
  fetch("/src/views/layout/sidebar.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("sidebar-container").innerHTML = html;
    });  

  fetch("/src/views/employee/profile.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("profile").innerHTML = html;
    });
});