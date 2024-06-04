document.getElementById('burger-menu').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('show');
});

document.querySelectorAll('.dropdown > a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle('show');
    });
});
