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

  var agentsTabs = document.querySelectorAll('.agents__tab');
  var agentsPanels = document.querySelectorAll('.agents__panel');
  if (agentsTabs.length && agentsPanels.length) {
    function switchAgentsTo(topic) {
      agentsTabs.forEach(function (t) {
        var isActive = t.getAttribute('data-tab') === topic;
        t.classList.toggle('is-active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      agentsPanels.forEach(function (p) {
        var match = p.getAttribute('data-topic') === topic;
        p.classList.toggle('is-visible', match);
        p.hidden = !match;
      });
    }
    agentsTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        switchAgentsTo(tab.getAttribute('data-tab'));
      });
    });
  }
})();
