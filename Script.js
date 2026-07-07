const moveInterval = setInterval(() => {
    const banner = document.querySelector('section[data-mj="widget-fixed-image-banner"]');
    const footer = document.querySelector('div[data-mj="footer-content"]');

    if (banner && footer) {
        footer.after(banner);
        clearInterval(moveInterval); // Elementler taşındı, döngüyü güvenle kapat.
    }
}, 100); // Her 100 milisaniyede bir elementleri kontrol eder.
