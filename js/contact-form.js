/* contact-form.js
 * Front-end validation + simulated submit (no real backend).
 * On submit: validates fields, shows a toast, and offers a mailto: fallback.
 */
(function () {
  'use strict';

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
  function isNonEmpty(v) { return v && v.trim().length > 0; }

  function setError(input, message) {
    const wrap = input.closest('.rwt-input') || input.closest('.rwt-textarea');
    if (!wrap) return;
    if (message) {
      wrap.classList.add('rwt-input--error');
      const err = wrap.querySelector('.rwt-input__error');
      if (err) err.textContent = message;
    } else {
      wrap.classList.remove('rwt-input--error');
      const err = wrap.querySelector('.rwt-input__error');
      if (err) err.textContent = '';
    }
  }

  function buildMailto(form) {
    const data = new FormData(form);
    const subject = encodeURIComponent('[ruiyusmart.com] ' + (data.get('topic') || 'Enquiry'));
    const body = encodeURIComponent(
      'Name: ' + (data.get('name') || '') + '\n' +
      'Email: ' + (data.get('email') || '') + '\n' +
      'Company: ' + (data.get('company') || '') + '\n' +
      'Topic: ' + (data.get('topic') || '') + '\n\n' +
      (data.get('message') || '')
    );
    return 'mailto:support@ruiyusmart.com?subject=' + subject + '&body=' + body;
  }

  function showToast(message, type) {
    const t = document.createElement('div');
    t.className = 'rwt-toast rwt-toast--' + (type || 'success');
    t.setAttribute('role', 'status');
    t.setAttribute('aria-live', 'polite');
    t.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span>${message}</span>`;
    Object.assign(t.style, {
      position: 'fixed', bottom: '24px', right: '24px',
      maxWidth: '420px', zIndex: '100'
    });
    document.body.appendChild(t);
    window.setTimeout(function () { t.remove(); }, 6000);
  }

  function initForm(form) {
    // Inject hidden error slots if missing.
    $$('.rwt-input__field, .rwt-textarea__field', form).forEach(function (input) {
      const wrap = input.closest('.rwt-input') || input.closest('.rwt-textarea');
      if (!wrap || wrap.querySelector('.rwt-input__error')) return;
      const err = document.createElement('span');
      err.className = 'rwt-input__error';
      err.setAttribute('role', 'alert');
      wrap.appendChild(err);
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let ok = true;
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const topic = form.querySelector('[name="topic"]');
      const message = form.querySelector('[name="message"]');
      const consent = form.querySelector('[name="consent"]');

      if (!isNonEmpty(name && name.value)) { setError(name, 'Please enter your name.'); ok = false; } else { setError(name, ''); }
      if (!isEmail(email && email.value)) { setError(email, 'Please enter a valid email.'); ok = false; } else { setError(email, ''); }
      if (!isNonEmpty(topic && topic.value)) { setError(topic, 'Please select a topic.'); ok = false; } else { setError(topic, ''); }
      if (!isNonEmpty(message && message.value)) { setError(message, 'Please tell us how we can help.'); ok = false; } else { setError(message, ''); }
      if (consent && !consent.checked) { ok = false; showToast('Please confirm you agree to the Privacy Policy.', 'error'); }

      if (!ok) {
        const firstError = form.querySelector('.rwt-input--error .rwt-input__field, .rwt-input--error .rwt-textarea__field');
        if (firstError) firstError.focus();
        return;
      }

      // Simulated submit: no backend; show success + offer mailto: fallback.
      const btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

      window.setTimeout(function () {
        showToast('Message prepared. Your email client will open to send it to our support team.', 'success');
        if (btn) { btn.disabled = false; btn.textContent = 'Send message'; }
        // Open the user's mail client as the actual transport (mailto:).
        window.location.href = buildMailto(form);
        form.reset();
      }, 600);
    });

    // Live-clear error on input.
    $$('.rwt-input__field, .rwt-textarea__field', form).forEach(function (input) {
      input.addEventListener('input', function () { setError(input, ''); });
      input.addEventListener('change', function () { setError(input, ''); });
    });
  }

  function init() {
    $$('.rwt-contact-form').forEach(initForm);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
