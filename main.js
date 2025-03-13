const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('flex');
    if (isOpen) {
        menu.classList.remove('flex', 'flex-col','top-0');
        menu.classList.add('hidden', '-top-full');
        menuIcon.classList.remove('bi-x');
        menuIcon.classList.add('bi-list');
    } else {
        menu.classList.remove('hidden', '-top-full');
        menu.classList.add('flex', 'flex-col','top-0');
        menuIcon.classList.remove('bi-list');
        menuIcon.classList.add('bi-x');
    }
});

menu.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('flex', 'flex-col','top-0');
        menu.classList.add('hidden', '-top-full');
        menuIcon.classList.remove('bi-x');
        menuIcon.classList.add('bi-list');
    })
})

// export default menuToggle;