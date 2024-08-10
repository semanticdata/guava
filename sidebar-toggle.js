document.addEventListener("DOMContentLoaded", function () {
  var sidebarCollapse = document.getElementById("sidebarCollapse");
  var body = document.body;

  function toggleIcon() {
    var collapseIcon = sidebarCollapse.querySelector("#collapseIcon");
    var isSmallScreen = window.innerWidth < 768;
    if (isSmallScreen) {
      collapseIcon.classList.add("fa-arrow-right");
      collapseIcon.classList.remove("fa-arrow-left");
    } else {
      collapseIcon.classList.add("fa-arrow-left");
      collapseIcon.classList.remove("fa-arrow-right");
    }
  }
  // Initial check
  toggleIcon();
  sidebarCollapse.addEventListener("click", function () {
    body.classList.toggle("sided");
    // Toggle icon when sidebarCollapse is clicked
    var collapseIcon = sidebarCollapse.querySelector("#collapseIcon");
    collapseIcon.classList.toggle("fa-arrow-left");
    collapseIcon.classList.toggle("fa-arrow-right");
  });
  // Listen for window resize to swap the classes
  window.addEventListener("resize", toggleIcon);
});
