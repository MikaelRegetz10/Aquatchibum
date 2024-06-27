document.addEventListener('DOMContentLoaded', function () {
    const navbarItems = document.querySelectorAll('.navbar-item');

    navbarItems.forEach(item => {
        item.addEventListener('click', function () {
            navbarItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
