let navbar = document.getElementById('navbar')!;
let button = document.getElementById('button-navbar')!;
let cross = document.getElementById('cross-svg')!;
let hamburger = document.getElementById('hamburger-svg')!;

let isNavbarButtonChecked = false;

let onClickNavbarButton = () => {
  if (isNavbarButtonChecked) {
    // Navbar
    navbar.style.visibility = 'hidden';
    navbar.style.opacity = '0';

    // Cross
    cross.style.visibility = 'hidden';
    cross.style.opacity = '0';

    // Hamburger
    hamburger.style.visibility = 'visible';
    hamburger.style.opacity = '1';

    isNavbarButtonChecked = false;
  } else {
    // Navbar
    navbar.style.visibility = 'visible';
    navbar.style.opacity = '1';

    // Cross
    cross.style.visibility = 'visible';
    cross.style.opacity = '1';

    // Hamburger
    hamburger.style.visibility = 'hidden';
    hamburger.style.opacity = '0';

    isNavbarButtonChecked = true;
  }
};

button.addEventListener('click', onClickNavbarButton);
