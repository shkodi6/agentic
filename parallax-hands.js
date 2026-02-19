(function () {
  var hands = document.getElementById('hands-parallax');
  if (!hands) return;

  var speed = 0.4; // parallax factor: image moves slower than scroll

  function updateParallax() {
    var rect = hands.parentElement.getBoundingClientRect();
    var viewportHeight = window.innerHeight;
    var elementCenter = rect.top + rect.height / 2;
    var viewportCenter = viewportHeight / 2;
    var offset = (viewportCenter - elementCenter) * speed;
    hands.style.transform = 'translate3d(0, ' + offset + 'px, 0)';
  }

  function onScroll() {
    requestAnimationFrame(updateParallax);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateParallax);
  updateParallax();
})();
