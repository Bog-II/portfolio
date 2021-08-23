const footer = document.getElementById('footer')!;

const currentYear = new Date().getFullYear().toString();
footer.innerText = `© ${currentYear}, Benoit Bogdan Sachart`;
