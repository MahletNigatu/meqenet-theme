(function(){
  function initGallery(root){
    var track = root.querySelector('[data-track]');
    var dots  = Array.prototype.slice.call(root.querySelectorAll('[data-dot]'));
    var count = parseInt(root.getAttribute('data-count'), 10) || 1;
    var note  = root.querySelector('[data-note]');
    var i = 0;
    function paint(){
      track.style.transform = 'translateX(' + (-100 * i) + '%)';
      dots.forEach(function(d, n){ d.setAttribute('aria-current', n === i ? 'true' : 'false'); });
      if (note) note.textContent = (i + 1) + ' of ' + count;
    }
    function go(n){ i = (n + count) % count; paint(); }
    var prev = root.querySelector('[data-prev]');
    var next = root.querySelector('[data-next]');
    if (prev) prev.addEventListener('click', function(){ go(i - 1); });
    if (next) next.addEventListener('click', function(){ go(i + 1); });
    dots.forEach(function(d, n){ d.addEventListener('click', function(){ go(n); }); });
    root.addEventListener('keydown', function(e){
      if (e.key === 'ArrowLeft') go(i - 1);
      if (e.key === 'ArrowRight') go(i + 1);
    });
    root.addEventListener('gallery:show', function(e){
      var idx = e.detail && e.detail.index;
      if (typeof idx === 'number' && idx >= 0) go(idx);
    });
    paint();
  }

  function initVariants(form){
    var data = JSON.parse(form.querySelector('[data-variants]').textContent);
    var idField = form.querySelector('[data-variant-id]');
    var priceEl = form.querySelector('[data-price]');
    var btn = form.querySelector('[data-add]');
    var btnLabel = form.querySelector('[data-add-label]');
    var skuEl = form.querySelector('[data-sku]');
    var groups = Array.prototype.slice.call(form.querySelectorAll('[data-option-index]'));
    var gallery = document.querySelector('[data-gallery]');

    function chosen(){
      return groups.map(function(g){
        var on = g.querySelector('[aria-pressed="true"]');
        return on ? on.getAttribute('data-value') : null;
      });
    }

    function match(sel){
      return data.find(function(v){
        return sel.every(function(val, n){ return val === null || v.options[n] === val; });
      });
    }

    function paint(){
      var sel = chosen();
      var v = match(sel);
      groups.forEach(function(g){
        var label = g.querySelector('[data-option-current]');
        var on = g.querySelector('[aria-pressed="true"]');
        if (label && on) label.textContent = on.getAttribute('data-value');
      });
      if (!v){
        btn.disabled = true;
        if (btnLabel) btnLabel.textContent = 'Unavailable';
        return;
      }
      idField.value = v.id;
      if (priceEl) priceEl.textContent = v.price;
      if (skuEl) skuEl.textContent = v.sku || v.title;
      btn.disabled = !v.available;
      if (btnLabel) btnLabel.textContent = v.available ? 'Add to cart \u2014 ' + v.title : 'Sold out';
      if (gallery && typeof v.image_index === 'number' && v.image_index >= 0){
        gallery.dispatchEvent(new CustomEvent('gallery:show', { detail: { index: v.image_index } }));
      }
    }

    groups.forEach(function(g){
      g.addEventListener('click', function(e){
        var b = e.target.closest('[data-value]');
        if (!b || !g.contains(b)) return;
        g.querySelectorAll('[data-value]').forEach(function(o){
          o.setAttribute('aria-pressed', o === b ? 'true' : 'false');
        });
        paint();
      });
    });

    var qty = form.querySelector('[data-qty]');
    if (qty){
      form.querySelectorAll('[data-qty-step]').forEach(function(b){
        b.addEventListener('click', function(){
          var step = parseInt(b.getAttribute('data-qty-step'), 10);
          qty.value = Math.max(1, (parseInt(qty.value, 10) || 1) + step);
          form.querySelector('[data-qty-view]').textContent = qty.value;
        });
      });
    }
    paint();
  }

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('[data-gallery]').forEach(initGallery);
    document.querySelectorAll('[data-product-form]').forEach(initVariants);
  });
  document.addEventListener('shopify:section:load', function(){
    document.querySelectorAll('[data-gallery]').forEach(initGallery);
    document.querySelectorAll('[data-product-form]').forEach(initVariants);
  });
})();
