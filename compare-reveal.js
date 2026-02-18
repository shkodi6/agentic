(function () {
  var tabs = document.querySelectorAll('.compare__tab');
  var panels = document.querySelectorAll('.compare__panel');
  if (tabs.length && panels.length) {
    function switchCompareTo(topic) {
      tabs.forEach(function (t) {
        var isActive = t.getAttribute('data-tab') === topic;
        t.classList.toggle('is-active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      panels.forEach(function (p) {
        var match = p.getAttribute('data-topic') === topic;
        p.classList.toggle('is-visible', match);
        p.hidden = !match;
      });
    }
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        switchCompareTo(tab.getAttribute('data-tab'));
      });
    });
  }

  var rolesTabs = document.querySelectorAll('.roles__tab');
  var rolesPanels = document.querySelectorAll('.roles__panel');
  if (rolesTabs.length && rolesPanels.length) {
    function switchRolesTo(topic) {
      rolesTabs.forEach(function (t) {
        var isActive = t.getAttribute('data-tab') === topic;
        t.classList.toggle('is-active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      rolesPanels.forEach(function (p) {
        var match = p.getAttribute('data-topic') === topic;
        p.classList.toggle('is-visible', match);
        p.hidden = !match;
      });
    }
    rolesTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        switchRolesTo(tab.getAttribute('data-tab'));
      });
    });
  }
})();
