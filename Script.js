(function () {
  function tasiResmi() {
    const resim = document.querySelector('.app-ltr-7wh13m');
    const cizgi = document.querySelector('.app-ltr-5qxxfg');

    if (resim && cizgi && resim.previousElementSibling !== cizgi) {
      cizgi.after(resim);
      resim.style.margin = '15px 0';
    }
  }

  tasiResmi();

  const bannerObserver = new MutationObserver(tasiResmi);
  bannerObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
