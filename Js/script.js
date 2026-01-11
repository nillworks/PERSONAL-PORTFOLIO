document.addEventListener('DOMContentLoaded', () => {
  function initMobileMenu() {
    const mobile_bars = document.querySelector('.mobile_ber'); // open button
    const navMenu = document.querySelector('.navigation_manu'); // menu
    const closeBtn = document.querySelector('.mobile_ber_close'); // close button

    if (!mobile_bars || !navMenu || !closeBtn) return;

    // Open menu
    mobile_bars.addEventListener('click', () => {
      navMenu.classList.add('open');
    });

    // Close menu
    closeBtn.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });

    // ✅ nav link ক্লিক করলে menu বন্ধ হবে
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // ✅ ফাংশন কল
  initMobileMenu();
});

// ===============================
// Scroll Control
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navigation_manu a');

  // ====== Navigation links scroll ======
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // ডিফল্ট লিংক থামানো

      const text = this.textContent.trim().toLowerCase();
      let targetId = '';

      if (text.includes('home')) targetId = 'hero_area';
      if (text.includes('portfolio')) targetId = 'portfolio_area';
      if (text.includes('about')) targetId = 'About_area';
      if (text.includes('testimonials')) targetId = 'Clients_testimonials_area';

      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ====== Contact buttons scroll ======
  const contactBtns = document.querySelectorAll('.btn-cta');
  contactBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const contactSection = document.getElementById('contact_form_area');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
