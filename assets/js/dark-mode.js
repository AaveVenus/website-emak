const toggleSwitch = document.querySelector('#darkModeToggle');
toggleSwitch.addEventListener('change', function() {
  document.body.classList.toggle('dark-mode');
});
