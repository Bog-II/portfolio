const message = (window as any).variables.messageConsole || 'Nice Try!';

const displayConsole = (color: string, backgroundColor: string) => {
  console.clear();
  console.log(
    `%c ${message}`,
    `
    color: ${color};
    background-color: ${backgroundColor};
    border-radius: 8px;
    padding: 6px;
    font-weight: normal;
    font-family: roobert;
    font-variation-settings: 'wght' 500;
    font-size: 18px;
    `
  );
};

const body = document.body;
const theme = localStorage.getItem('theme');
const toggle = <HTMLInputElement>document.getElementById('toggle-dark-mode');

let isThemeLight = theme === 'light'; // default theme is dark
if (isThemeLight) {
  body.classList.replace('dark', 'light');
  displayConsole('#0015ef', '#fff');
} else {
  toggle.checked = true;
  displayConsole('#cab6ff', '#000');
}

const changeThemeColor = () => {
  if (isThemeLight) {
    localStorage.setItem('theme', 'dark');
    body.classList.replace('light', 'dark');
    toggle.checked = true;
    isThemeLight = false;
    displayConsole('#cab6ff', '#000');
  } else {
    localStorage.setItem('theme', 'light');
    body.classList.replace('dark', 'light');
    toggle.checked = false;
    isThemeLight = true;
    displayConsole('#0015ef', '#fff');
  }
};

toggle.addEventListener('click', changeThemeColor);
