/* Shah Hardik And Co. — site behaviour (no libraries, no tracking) */
(function () {
  'use strict';

  /* ---- Firm contact settings: edit here if numbers/emails change ---- */
  var WHATSAPP_NUMBER = '919076008063';          // country code + number, digits only
  var EMAIL_ADDRESS = 'shahhardikandco@gmail.com';

  var header = document.querySelector('.site-header');
  var nav = document.getElementById('site-nav');
  var toggle = document.querySelector('.nav-toggle');

  /* ---- Mobile menu ---- */
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    toggle.querySelector('use').setAttribute('href', open ? '#i-x' : '#i-menu');
  }
  toggle.addEventListener('click', function () {
    setMenu(!nav.classList.contains('is-open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); toggle.focus(); }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1080 && nav.classList.contains('is-open')) setMenu(false);
  });

  /* ---- Header shadow on scroll ---- */
  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Active nav link (scroll-spy) ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
  var sections = links.map(function (l) { return document.querySelector(l.getAttribute('href')); }).filter(Boolean);
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) {
            var on = l.getAttribute('href') === '#' + entry.target.id;
            l.classList.toggle('is-active', on);
            if (on) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---- Subtle reveal on scroll ---- */
  var revealEls = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reduce) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---- Footer year ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Enquiry form: composes a WhatsApp or email message (no server needed) ---- */
  var form = document.getElementById('enquiry-form');
  if (!form) return;
  var status = form.querySelector('.form-status');
  var channel = 'whatsapp';
  form.querySelectorAll('button[data-channel]').forEach(function (btn) {
    btn.addEventListener('click', function () { channel = btn.getAttribute('data-channel'); });
  });

  function setError(input, msg) {
    var field = input.closest('.field');
    field.classList.toggle('has-error', !!msg);
    field.querySelector('.field__error').textContent = msg || '';
    if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
  }

  function validate() {
    var ok = true, first = null;
    var name = form.elements.name, email = form.elements.email, message = form.elements.message;
    [name, email, message].forEach(function (i) { setError(i, ''); });
    if (!name.value.trim()) { setError(name, 'Please enter your name.'); ok = false; first = first || name; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { setError(email, 'Please enter a valid email address.'); ok = false; first = first || email; }
    if (message.value.trim().length < 10) { setError(message, 'Please add a short description (at least 10 characters).'); ok = false; first = first || message; }
    if (first) first.focus();
    return ok;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) { status.textContent = ''; return; }
    var f = form.elements;
    var lines = [
      'Website enquiry: ' + f.service.value,
      '',
      'Name: ' + f.name.value.trim(),
      f.company.value.trim() ? 'Company: ' + f.company.value.trim() : null,
      'Email: ' + f.email.value.trim(),
      f.phone.value.trim() ? 'Phone: ' + f.phone.value.trim() : null,
      'Country: ' + f.country.value,
      '',
      f.message.value.trim()
    ].filter(function (l) { return l !== null; });
    var text = lines.join('\n');

    if (channel === 'email') {
      var subject = 'Website enquiry: ' + f.service.value + ' (' + f.name.value.trim() + ')';
      window.location.href = 'mailto:' + EMAIL_ADDRESS + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(text);
      status.textContent = 'Your email app should open with the message ready. If it does not, please write to ' + EMAIL_ADDRESS + '.';
    } else {
      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);
      var win = window.open(url, '_blank');
      if (win) { try { win.opener = null; } catch (err) {} } else { window.location.href = url; }
      status.textContent = 'WhatsApp should open with your message ready. Press send in WhatsApp to complete the enquiry.';
    }
  });
})();
