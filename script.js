// Minimal site JS: mobile nav toggle and small helpers
document.addEventListener('DOMContentLoaded', function () {
  // mobile nav toggle
  var navToggle = document.getElementById('nav-toggle');
  var primaryNav = document.getElementById('primary-navigation');
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      primaryNav.setAttribute('aria-visible', String(!expanded));
    });
  }

  // footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
