// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.createElement('div');
mobileMenu.className = 'nav-mobile-menu';

[['index.html','Home'],['interior.html','Interior Design'],['ugc.html','UGC'],['contact.html','Contact']].forEach(([href, text]) => {
  const a = document.createElement('a');
  a.href = href; a.textContent = text;
  mobileMenu.appendChild(a);
});

document.body.appendChild(mobileMenu);

if (toggle) {
  toggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    toggle.textContent = open ? '✕' : '☰';
    document.body.style.overflow = open ? 'hidden' : '';
  });
}

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    if (toggle) toggle.textContent = '☰';
    document.body.style.overflow = '';
  });
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .p-card, .ugc-stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
