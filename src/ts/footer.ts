const footer = document.getElementById('footer')!;

const currentYear = new Date().getFullYear();
footer.innerText = '© ' + currentYear.toString() + ' Benoit Sachart';
