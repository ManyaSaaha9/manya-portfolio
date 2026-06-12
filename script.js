/**
 * Bingi Manya Sahasra - Portfolio Logic & Animations
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. AI Network Constellation Particles Background
  // ==========================================
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');

  let particles = [];
  const particleCount = 65;
  const connectionDistance = 110;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(56, 189, 248, 0.6)';
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Draw connection lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animateParticles);
  }

  initParticles();
  animateParticles();


  // ==========================================
  // 2. Mobile Navigation Toggle & Hamburger Menu
  // ==========================================
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile drawer when clicking links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });


  // ==========================================
  // 3. Sticky Navigation & Scroll Spy Highlights
  // ==========================================
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section');
  const scrollTopBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Toggle Sticky Header styling
    if (scrollPos > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Toggle Scroll to Top Button
    if (scrollPos > 400) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
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
  // 4. Scroll Reveal Animations (IntersectionObserver)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Trigger skill bars animations when Skills section is revealed
        if (entry.target.id === 'skills') {
          animateSkillBars();
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  function animateSkillBars() {
    skillBars.forEach(bar => {
      const targetPercent = bar.getAttribute('data-percent');
      bar.style.width = targetPercent;
    });
  }


  // ==========================================
  // 5. Interactive Skill Categories Filter
  // ==========================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const categoryCards = document.querySelectorAll('.skill-category-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle button states
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      // Filter skills cards
      categoryCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === category) {
          card.style.display = 'block';
          // Force small reflow to trigger ease-in animation
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });


  // ==========================================
  // 6. Interactive Contact Form & Custom Toast
  // ==========================================
  const contactForm = document.getElementById('portfolio-contact-form');
  const toast = document.getElementById('toast-message');
  const toastTitle = document.getElementById('toast-title');
  const toastBody = document.getElementById('toast-body');

  function triggerToast(success, title, msg) {
    toastTitle.innerText = title;
    toastBody.innerText = msg;
    
    const icon = toast.querySelector('i');
    if (success) {
      toast.style.borderLeftColor = 'var(--accent)';
      icon.className = 'fa-solid fa-circle-check';
      icon.style.color = 'var(--accent)';
    } else {
      toast.style.borderLeftColor = '#EF4444';
      icon.className = 'fa-solid fa-triangle-exclamation';
      icon.style.color = '#EF4444';
    }

    toast.classList.add('show');
    
    // Hide toast after 4.5 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');

    // Input Validation check
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

    // Process submission successfully by redirecting to email client via mailto
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

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }


  // ==========================================
  // 7. Scroll To Top Operation
  // ==========================================
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ==========================================
  // 8. Resume Manager Dialog & LocalStorage File Upload
  // ==========================================
  const openSettingsBtn = document.getElementById('open-settings-btn');
  const footerSettingsBtn = document.getElementById('footer-settings-btn');
  const settingsModal = document.getElementById('settings-modal');
  const closeSettingsBtn = document.getElementById('close-settings-btn');
  const modalCancelBtn = document.getElementById('modal-cancel-btn');
  const uploadZone = document.getElementById('upload-zone');
  const fileInput = document.getElementById('resume-file-input');
  const deleteResumeBtn = document.getElementById('delete-resume-btn');
  const statusFilename = document.getElementById('status-filename');
  const statusMeta = document.getElementById('status-meta');
  const statusIcon = document.getElementById('status-icon');
  const testDownloadBtn = document.getElementById('modal-download-test-btn');
  const resumeDownloadLinks = document.querySelectorAll('a[download]');

  const defaultResumePath = 'assets/docs/bingi_manya_sahasra_resume.pdf';
  const defaultResumeName = 'Bingi_Manya_Sahasra_Resume.pdf';

  function openModal() {
    settingsModal.classList.add('show');
    settingsModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    updateStatusCard();
  }

  function closeModal() {
    settingsModal.classList.remove('show');
    settingsModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openSettingsBtn.addEventListener('click', openModal);
  footerSettingsBtn.addEventListener('click', openModal);
  closeSettingsBtn.addEventListener('click', closeModal);
  modalCancelBtn.addEventListener('click', closeModal);

  settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
      closeModal();
    }
  });

  uploadZone.addEventListener('click', () => fileInput.click());
  
  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
  });

  uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('dragover');
  });

  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  });

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  function handleFile(file) {
    if (file.type !== 'application/pdf') {
      triggerToast(false, 'Invalid File', 'Only PDF files are supported.');
      return;
    }

    const maxSize = 3 * 1024 * 1024; // 3MB limit
    if (file.size > maxSize) {
      triggerToast(false, 'File Too Large', 'Please upload a PDF under 3MB to fit local browser storage.');
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const base64Data = e.target.result;
        const uploadDate = new Date().toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        const resumeMetadata = {
          name: file.name,
          size: file.size,
          date: uploadDate,
          data: base64Data
        };

        localStorage.setItem('manya_custom_resume', JSON.stringify(resumeMetadata));
        applyCustomResume(resumeMetadata);
        triggerToast(true, 'Resume Uploaded!', 'Your custom resume is active and ready for download.');
      } catch (err) {
        triggerToast(false, 'Upload Failed', 'Error reading and saving the PDF file. Please try again.');
        console.error(err);
      }
    };
    reader.readAsDataURL(file);
  }

  function applyCustomResume(metadata) {
    resumeDownloadLinks.forEach(link => {
      link.href = metadata.data;
      link.download = metadata.name || defaultResumeName;
    });
    updateStatusCard();
  }

  function restoreDefaultResume() {
    localStorage.removeItem('manya_custom_resume');
    resumeDownloadLinks.forEach(link => {
      link.href = defaultResumePath;
      link.download = defaultResumeName;
    });
    updateStatusCard();
    triggerToast(true, 'System Reverted', 'Reverted back to the default fallback resume.');
  }

  deleteResumeBtn.addEventListener('click', restoreDefaultResume);

  function updateStatusCard() {
    const stored = localStorage.getItem('manya_custom_resume');
    if (stored) {
      try {
        const metadata = JSON.parse(stored);
        statusFilename.innerText = metadata.name;
        statusMeta.innerText = `Size: ${formatBytes(metadata.size)} | Uploaded: ${metadata.date}`;
        statusIcon.className = 'status-icon-box success';
        statusIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        deleteResumeBtn.style.display = 'flex';
      } catch (err) {
        restoreDefaultResume();
      }
    } else {
      statusFilename.innerText = 'Default System Resume';
      statusMeta.innerText = 'Built-in static fallback PDF';
      statusIcon.className = 'status-icon-box fallback';
      statusIcon.innerHTML = '<i class="fa-solid fa-circle-info"></i>';
      deleteResumeBtn.style.display = 'none';
    }
  }

  function initResumeManager() {
    const stored = localStorage.getItem('manya_custom_resume');
    if (stored) {
      try {
        const metadata = JSON.parse(stored);
        applyCustomResume(metadata);
      } catch (err) {
        localStorage.removeItem('manya_custom_resume');
      }
    }
  }

  initResumeManager();

});

