const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Dropdown toggle
const dropdownBtn = document.querySelector('.dropbtn');
const dropdownMenu = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle('show');
});


// Close dropdown if clicking outside
document.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && !dropdownBtn.contains(e.target)) {
    dropdownMenu.classList.remove('show');
  }
});
