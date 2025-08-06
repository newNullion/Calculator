const button = document.getElementById('dropdownButton');
const menu = document.getElementById('dropdownMenu');

button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});