const accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {    
    // Toggle active state for the clicked accordion
    const isActive = this.classList.contains("active");
    
    for (let accordion of accordions) {
      accordion.classList.remove("active"); // Remove active state from all buttons
    }
    
    const allPanels = document.getElementsByClassName("panel");
    for (let panel of allPanels) {
      panel.classList.remove("show"); // Hide all panels
    }
    
    // Then open the clicked panel if it wasn't already open
    if (!isActive) {
      this.classList.add("active");
      this.nextElementSibling.classList.add("show");
    }
  });
}