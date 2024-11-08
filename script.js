const themeToggle = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

// Check and set the initial theme based on user preference or default to light mode
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
const isDarkTheme = savedTheme === "dark";

// Set the initial icon visibility based on the saved theme
lightIcon.style.display = isDarkTheme ? 'none' : 'block';
darkIcon.style.display = isDarkTheme ? 'block' : 'none';

// Function to toggle between light and dark themes
function toggleTheme() {
  // Toggle class on the body to apply dark theme styles
  document.body.classList.toggle('dark-theme');
  const isDarkTheme = document.body.classList.contains('dark-theme');

  // Toggle the theme attribute on the document element
  const newTheme = isDarkTheme ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);

  // Save the new theme preference to localStorage
  localStorage.setItem("theme", newTheme);

  // Update icon visibility based on the new theme
  lightIcon.style.display = isDarkTheme ? 'none' : 'block';
  darkIcon.style.display = isDarkTheme ? 'block' : 'none';
}

// Set initial theme on the body based on the saved preference
if (isDarkTheme) {
  document.body.classList.add('dark-theme');
}

// Add event listener to the toggle button
themeToggle.addEventListener('click', toggleTheme);
