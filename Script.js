(function () {
  function place() {
    var src = document.querySelector('[data-mj="widget-curacao-license"]');
    var footer = document.querySelector('[data-mj="footer"]');
    if (!src || !footer) return;
    if (footer.querySelector('.license-clone')) return;

    var clone = src.cloneNode(true);
    clone.removeAttribute('data-mj');
    clone.className = 'license-clone';            // site class'larını sil
    var img = clone.querySelector('img');
    if (img) img.className = 'license-clone-img'; // img'in site class'ını sil
    footer.appendChild(clone);
  }

  place();
  new MutationObserver(place).observe(document.body, { childList: true, subtree: true });
})();
