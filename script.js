const resim = document.querySelector('.app-ltr-7wh13m');
const cizgi = document.querySelector('.app-ltr-5qxxfg');

if (resim && cizgi) {
    // 1. Resmi çizginin altına taşı
    cizgi.after(resim);
    
    // 2. Resmin üstüne ve altına boşluk ekle (Sağ ve sol 0 kalır)
    resim.style.margin = '15px 0'; 
}

