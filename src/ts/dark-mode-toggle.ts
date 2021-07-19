import '../style/components/dark-mode-toggle.scss';

const body = document.body;

const theme = localStorage.getItem('theme');
const toggle = <HTMLInputElement>document.getElementById('toggle-dark-mode');

const isThemeLight = theme === 'light';
if (isThemeLight) {
  body.classList.replace('dark', 'light');
}

const changeThemeColor = () => {
  //   if (isDarkTheme) {
  //     localStorage.setItem('theme', 'light');
  //     body.classList.replace('dark', 'light');
  //     toggle.checked = false;
  //     earth.material.map = earthDarkTexture;
  //     borderColor = 0x000000;
  //   } else {
  //     localStorage.setItem('theme', 'dark');
  //     body.classList.replace('light', 'dark');
  //     toggle.checked = true;
  //     earth.material.map = earthLightTexture;
  //     borderColor = 0xffffff;
  //   }
  //   t1.material.color.setHex(borderColor);
  //   t2.material.color.setHex(borderColor);
  //   isDarkTheme = !isDarkTheme;
};

toggle.addEventListener('click', changeThemeColor);
