/**
 * Bingi Manya Sahasra - Portfolio Logic (Devert Theme)
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Light / Dark Mode Toggle (Devert Style)
  // ==========================================
  const themeToggle = document.getElementById('theme-toggle');
  
  // Initialize theme from storage or default to light (like careers.devert.in)
  const savedTheme = localStorage.getItem('devert-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dv-dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dv-dark');
      const isDark = document.body.classList.contains('dv-dark');
      localStorage.setItem('devert-theme', isDark ? 'dark' : 'light');
    });
  }


  // ==========================================
  // 2. Mobile Navigation Toggle
  // ==========================================
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.devert-nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    // Close drawer when clicking any link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
      });
    });
  }


  // ==========================================
  // 3. Scroll Spy & Sticky Header Highlight
  // ==========================================
  const sections = document.querySelectorAll('section');
  const scrollTopBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Toggle Scroll to Top Button
    if (scrollTopBtn) {
      if (scrollPos > 400) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    }

    // Dynamic Scroll-Spy active highlights
    let currentSection = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = sec.getAttribute('id');
      }
    });

    if (currentSection) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }
  });


  // ==========================================
  // 4. Skills Category Interactive Filtering
  // ==========================================
  const filterButtons = document.querySelectorAll('.dv-filter-pill');
  const skillCards = document.querySelectorAll('.dv-skill-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle button active states
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === category) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translate(0, 0)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translate(0, 10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });


  // ==========================================
  // 5. Contact Form Submission & Toast
  // ==========================================
  const contactForm = document.getElementById('portfolio-contact-form');
  const toast = document.getElementById('toast-message');
  const toastTitle = document.getElementById('toast-title');
  const toastBody = document.getElementById('toast-body');

  function triggerToast(success, title, msg) {
    if (!toast) return;
    toastTitle.innerText = title;
    toastBody.innerText = msg;

    const icon = toast.querySelector('i');
    if (success) {
      toast.style.borderColor = 'var(--dv-lime)';
      if (icon) {
        icon.className = 'fa-solid fa-circle-check';
        icon.style.color = 'var(--dv-lime)';
      }
    } else {
      toast.style.borderColor = '#EF4444';
      if (icon) {
        icon.className = 'fa-solid fa-triangle-exclamation';
        icon.style.color = '#EF4444';
      }
    }

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      let isValid = true;
      let errorMessage = '';

      if (!nameInput.value.trim()) {
        isValid = false;
        errorMessage = 'Please input your Full Name.';
      } else if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
        isValid = false;
        errorMessage = 'Please input a valid Email Address.';
      } else if (!subjectInput.value.trim()) {
        isValid = false;
        errorMessage = 'Please specify a Subject for your message.';
      } else if (!messageInput.value.trim()) {
        isValid = false;
        errorMessage = 'Please write a message content.';
      }

      if (!isValid) {
        triggerToast(false, 'Validation Error', errorMessage);
        return;
      }

      const mailtoEmail = 'sahasramanya9@gmail.com';
      const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${nameInput.value}: ${subjectInput.value}`);
      const mailtoBody = encodeURIComponent(
        `Hi Sahasra,\n\n` +
        `You received a message via your portfolio contact form:\n\n` +
        `Name: ${nameInput.value}\n` +
        `Email: ${emailInput.value}\n\n` +
        `Message:\n${messageInput.value}`
      );

      triggerToast(true, 'Opening Mail Client...', `Thanks ${nameInput.value.split(' ')[0]}, redirecting you to email sahasramanya9@gmail.com...`);

      setTimeout(() => {
        window.location.href = `mailto:${mailtoEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
        contactForm.reset();
      }, 1500);
    });
  }

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }


  // ==========================================
  // 6. Scroll To Top Button
  // ==========================================
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
