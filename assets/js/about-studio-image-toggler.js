const checkbox = document.querySelector('.about-btn-container input[type="checkbox"]');
const studio = document.querySelector('.studio');

checkbox.addEventListener('change', () => {
if (checkbox.checked) {
    studio.classList.add('inner');
}
else {
    studio.classList.remove('inner');
}
});
