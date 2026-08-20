document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener('click', function(event) {
        event.preventDefault();
    });

});

const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });

});