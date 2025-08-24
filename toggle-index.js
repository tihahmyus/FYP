function toggleMenu() {
  console.log("Hamburger menu clicked!"); // Debugging line
  const menu = document.querySelector('.mobile-menu');
  if (menu) {
    console.log("Menu element found:", menu); // Debugging line
    menu.classList.toggle('active'); // Toggle visibility of mobile menu
    console.log("Menu class list:", menu.classList); // Debugging line
  } else {
    console.error("Menu element not found!");
  }
}
