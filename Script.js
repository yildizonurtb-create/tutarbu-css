// 1. Taşınacak olan banner elementini seçiyoruz
const banner = document.querySelector('section[data-mj="widget-fixed-image-banner"]');

// 2. Altına eklenecek olan footer içerik alanını seçiyoruz
const footerContent = document.querySelector('div[data-mj="footer-content"]');

// 3. Eğer her iki element de sayfada mevcutsa, banner'ı footer'ın hemen altına taşıyoruz
if (banner && footerContent) {
    footerContent.after(banner);
}
