/* animations.js
 * Scroll reveals, marquee, parallax, magnetic CTAs, scroll-progress,
 * mascot idle, kinetic type, image sequence.
 * Honors prefers-reduced-motion.
 * No build step. Vanilla ES2020.
 */
(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Scroll progress bar ----------------------------------- */
  function initScrollProgress() {
    const bar = document.querySelector('[data-scroll-progress]');
    if (!bar) return;
    let ticking = false;
    function update() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      document.documentElement.style.setProperty('--scroll-progress', String(p));
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  /* ---------- 2. Reveal on scroll (IntersectionObserver) --------------- */
  function initReveal() {
    const els = document.querySelectorAll('.rwt-reveal');
    if (!els.length) return;
    if (reduceMotion) {
      els.forEach(function (el) { el.classList.add('is-in-view'); });
      return;
    }
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-in-view'); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 3. Kinetic type (split chars) ---------------------------- */
  function initSplitText() {
    const targets = document.querySelectorAll('[data-split-text]');
    if (!targets.length) return;
    function split(el) {
      const text = el.textContent;
      el.textContent = '';
      const tokens = text.split(/(\s+)/);
      let charIndex = 0;
      tokens.forEach(function (tok) {
        if (/^\s+$/.test(tok)) {
          el.appendChild(document.createTextNode(tok));
        } else {
          [...tok].forEach(function (ch) {
            const wrap = document.createElement('span');
            wrap.className = 'rwt-split__char';
            wrap.style.transitionDelay = (charIndex * 24) + 'ms';
            wrap.textContent = ch;
            el.appendChild(wrap);
            charIndex++;
          });
        }
      });
    }
    if (reduceMotion) {
      targets.forEach(function (el) { el.classList.add('is-in-view'); });
      return;
    }
    targets.forEach(split);
    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) {
        el.querySelectorAll('.rwt-split__char').forEach(function (c) { c.classList.add('is-in-view'); });
      });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.rwt-split__char').forEach(function (c) { c.classList.add('is-in-view'); });
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 4. Magnetic CTAs ----------------------------------------- */
  function initMagnetic() {
    if (reduceMotion) return;
    const items = document.querySelectorAll('[data-magnetic]');
    items.forEach(function (el) {
      let raf = 0;
      let tx = 0, ty = 0, cx = 0, cy = 0;
      function lerp() {
        cx += (tx - cx) * 0.18;
        cy += (ty - cy) * 0.18;
        el.style.transform = 'translate3d(' + cx.toFixed(2) + 'px,' + cy.toFixed(2) + 'px,0)';
        if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) {
          raf = requestAnimationFrame(lerp);
        } else {
          raf = 0;
        }
      }
      el.addEventListener('mousemove', function (e) {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        const max = 8;
        tx = Math.max(-max, Math.min(max, x * 0.18));
        ty = Math.max(-max, Math.min(max, y * 0.18));
        if (!raf) raf = requestAnimationFrame(lerp);
      });
      el.addEventListener('mouseleave', function () {
        tx = 0; ty = 0;
        if (!raf) raf = requestAnimationFrame(lerp);
      });
    });
  }

  /* ---------- 5. Parallax ---------------------------------------------- */
  function initParallax() {
    if (reduceMotion) return;
    const items = document.querySelectorAll('[data-parallax]');
    if (!items.length) return;
    let ticking = false;
    function update() {
      const vh = window.innerHeight;
      items.forEach(function (el) {
        const speed = parseFloat(el.dataset.parallaxSpeed || '0.2');
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const center = r.top + r.height / 2;
        const offset = (center - vh / 2) * speed * -1;
        const clamped = Math.max(-200, Math.min(200, offset));
        el.style.transform = 'translate3d(0,' + clamped.toFixed(1) + 'px,0)';
      });
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  /* ---------- 6. Image sequence --------------------------------------- */
  function initImageSequence() {
    if (reduceMotion) {
      document.querySelectorAll('.rwt-image-sequence').forEach(function (el) {
        const mid = el.querySelectorAll('img')[Math.floor(el.querySelectorAll('img').length / 2)];
        if (mid) mid.classList.add('is-active');
      });
      return;
    }
    document.querySelectorAll('[data-image-sequence]').forEach(function (el) {
      const trigger = el.dataset.trigger || 'hover';
      const frames = Array.from(el.querySelectorAll('img'));
      if (!frames.length) return;
      let i = 0;
      function show(idx) {
        frames.forEach(function (f, k) { f.classList.toggle('is-active', k === idx); });
      }
      show(0);
      const interval = 110;
      let timer = 0;
      function start() {
        if (timer) return;
        timer = window.setInterval(function () {
          i = (i + 1) % frames.length;
          show(i);
        }, interval);
      }
      function stop() {
        if (timer) { clearInterval(timer); timer = 0; }
        if (trigger === 'hover') show(0);
      }
      if (trigger === 'hover') {
        el.addEventListener('mouseenter', start);
        el.addEventListener('mouseleave', stop);
        el.addEventListener('focusin', start);
        el.addEventListener('focusout', stop);
      } else {
        const io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) { if (e.isIntersecting) start(); else stop(); });
        }, { threshold: 0.3 });
        io.observe(el);
      }
    });
  }

  /* ---------- 7. Mascot idle (stagger different durations) ------------ */
  function initMascotStagger() {
    const mascots = document.querySelectorAll('[data-mascot="idle"]');
    mascots.forEach(function (el, i) {
      if (reduceMotion) { el.style.animation = 'none'; return; }
      el.style.animationDuration = (3.2 + (i % 5) * 0.18) + 's';
    });
  }

  /* ---------- 8. Marquee pause for in-view ----------------------------- */
  function initMarqueeReveal() {
    if (reduceMotion) return;
    const tracks = document.querySelectorAll('.rwt-marquee__track');
    tracks.forEach(function (t) {
      // ensure animation runs; aria-hidden duplicate set in HTML
    });
  }

  /* ---------- 9. Page curtain (optional, lightweight) ----------------- */
  function initCurtain() {
    // Lightweight curtain: gold sheen bar that scales across on page enter.
    // Uses CSS animation; this just ensures it runs once on load.
    if (reduceMotion) return;
    const c = document.createElement('div');
    c.setAttribute('aria-hidden', 'true');
    c.style.cssText = 'position:fixed;top:0;left:0;right:0;height:2px;background:var(--grad-gold-sheen);z-index:100;transform:scaleX(0);transform-origin:left center;animation:rwt-curtain-in 600ms var(--ease-in-out) 200ms forwards;pointer-events:none;';
    document.body.appendChild(c);
    window.setTimeout(function () { c.remove(); }, 1200);
  }

  /* ---------- init ----------------------------------------------------- */
  function init() {
    initScrollProgress();
    initReveal();
    initSplitText();
    initMagnetic();
    initParallax();
    initImageSequence();
    initMascotStagger();
    initMarqueeReveal();
    initCurtain();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
