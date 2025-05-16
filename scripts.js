document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // مدة الحركة بالميلي ثانية
        easing: 'ease-in-out', // نوع الحركة
    });

    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('يرجى ملء جميع الحقول.');
        } else {
            alert('تم إرسال الرسالة بنجاح!');
            contactForm.reset();
        }
    });

    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', toggleMenu);
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}
