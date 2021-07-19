const body = document.body;

const theme = localStorage.getItem('theme');
const toggle = <HTMLInputElement>document.getElementById('toggle-dark-mode');

let isThemeLight = theme === 'light'; // default theme is dark
if (isThemeLight) { 
  body.classList.replace('dark', 'light');
} else {
  toggle.checked = true;
}

const changeThemeColor = () => {
  if (isThemeLight) {
    localStorage.setItem('theme', 'dark');
    body.classList.replace('light', 'dark');
    toggle.checked = true;
    isThemeLight = false;
  } else {
    localStorage.setItem('theme', 'light');
    body.classList.replace('dark', 'light');
    toggle.checked = false;
    isThemeLight = true;
  }
};

toggle.addEventListener('click', changeThemeColor);
