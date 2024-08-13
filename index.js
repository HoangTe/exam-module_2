document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.product-item');
    const mainImage = document.getElementById('main-image');
    const secondaryImage = document.getElementById('secondary-image');
    const tertiaryImage = document.getElementById('tertiary-image');

    productItems.forEach(item => {
        item.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            updateImages(theme);
            
            // Thêm class 'active' cho item được chọn và xóa khỏi các item khác
            productItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    function updateImages(theme) {
        mainImage.src = `./img/${theme}/${theme[0]}1.jpg`;
        mainImage.alt = `Main ${theme} image`;

        secondaryImage.src = `./img/${theme}/${theme[0]}2.jpg`;
        secondaryImage.alt = `Secondary ${theme} image`;

        tertiaryImage.src = `./img/${theme}/${theme[0]}3.jpg`;
        tertiaryImage.alt = `Tertiary ${theme} image`;
    }
});