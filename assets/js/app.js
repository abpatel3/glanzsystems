/**
 * Glanz Systems - Main JavaScript (Standalone Plain JS / No Vite or Bundler Required)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Animate Slide Content helper function
  function animateSlideContent(slideElement) {
    if (!slideElement || !window.gsap) return;

    const eyebrow = slideElement.querySelector('.slide-eyebrow');
    const headline = slideElement.querySelector('.slide-headline');
    const text = slideElement.querySelector('.slide-text');
    const ctas = slideElement.querySelector('.slide-ctas');
    const trust = slideElement.querySelector('.slide-trust');
    const visual = slideElement.querySelector('.slide-visual');
    const techLabels = slideElement.querySelectorAll('.slide-tech-label');

    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.5 } });

    if (eyebrow) {
      tl.fromTo(eyebrow, { opacity: 0, y: 8 }, { opacity: 1, y: 0, delay: 0.05 });
    }

    if (headline) {
      tl.fromTo(headline, { opacity: 0, y: 12 }, { opacity: 1, y: 0 }, '-=0.3');
    }

    if (text) {
      tl.fromTo(text, { opacity: 0, y: 12 }, { opacity: 1, y: 0 }, '-=0.3');
    }

    if (ctas) {
      tl.fromTo(ctas, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=0.25');
    }

    if (trust) {
      tl.fromTo(trust, { opacity: 0 }, { opacity: 1, duration: 0.4 }, '-=0.2');
    }

    if (visual) {
      tl.fromTo(visual, { opacity: 0, scale: 0.985 }, { opacity: 1, scale: 1, duration: 0.6 }, '-=0.4');
    }

    if (techLabels.length > 0) {
      tl.fromTo(techLabels, { opacity: 0, y: 6 }, { opacity: 1, y: 0, stagger: 0.08 }, '-=0.3');
    }
  }

  // 3. Initialize Swiper for Hero Slider
  if (window.Swiper) {
    const heroSwiper = new Swiper('.hero-swiper', {
      loop: true,
      speed: 700,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.hero-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.hero-btn-next',
        prevEl: '.hero-btn-prev',
      },
      on: {
        slideChangeTransitionStart: function () {
          const activeSlide = this.slides[this.activeIndex];
          animateSlideContent(activeSlide);
        },
      },
    });

    // Trigger animation for initial active slide
    const initialSlide = document.querySelector('.swiper-slide-active') || document.querySelector('.swiper-slide');
    if (initialSlide) {
      animateSlideContent(initialSlide);
    }

    // Testimonials Carousel Swiper
    if (document.querySelector('.testimonials-swiper')) {
      new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: false,
        autoHeight: false,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        pagination: {
          el: '.testimonials-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.testimonials-btn-next',
          prevEl: '.testimonials-btn-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
        },
      });
    }
  }

  // 4. GSAP ScrollTrigger Animations
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    // Products Section Header & Showcase Container
    const productsHeader = document.querySelector('.products-header');
    if (productsHeader) {
      gsap.fromTo(
        productsHeader.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: productsHeader,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    const productShowcase = document.querySelector('.product-showcase-container');
    if (productShowcase) {
      gsap.fromTo(
        productShowcase,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: productShowcase,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // About Section Visual & Content Animation
    const aboutVisual = document.querySelector('.about-visual-col');
    const aboutContent = document.querySelector('.about-content-col');
    if (aboutVisual && aboutContent) {
      gsap.fromTo(
        aboutVisual,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        aboutContent.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Why Choose Us Section Animation
    const whyLeftCol = document.querySelector('.why-left-col');
    const whyReasonItems = document.querySelectorAll('.why-reason-item');
    if (whyLeftCol) {
      gsap.fromTo(
        whyLeftCol.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#why-choose-us',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (whyReasonItems.length > 0) {
      gsap.fromTo(
        whyReasonItems,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#why-choose-us',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Testimonials Section Animation
    const testimonialsHeader = document.querySelector('.testimonials-header');
    const testimonialsSwiperEl = document.querySelector('.testimonials-swiper');
    if (testimonialsHeader) {
      gsap.fromTo(
        testimonialsHeader.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#testimonials',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (testimonialsSwiperEl) {
      gsap.fromTo(
        testimonialsSwiperEl,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#testimonials',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Our Journey & Growth Section Animation
    const journeyHeader = document.querySelector('.journey-header');
    const journeyTimeline = document.querySelector('.journey-timeline-container');
    const journeyCapabilities = document.querySelector('.journey-capabilities');
    const timelineProgressBar = document.querySelector('.timeline-progress-bar');
    const timelineNodes = document.querySelectorAll('.timeline-node');
    const capabilityItems = document.querySelectorAll('.capability-item');

    if (journeyHeader) {
      gsap.fromTo(
        journeyHeader.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#journey',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (journeyTimeline) {
      if (timelineProgressBar) {
        gsap.fromTo(
          timelineProgressBar,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: journeyTimeline,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (timelineNodes.length > 0) {
        gsap.fromTo(
          timelineNodes,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: journeyTimeline,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }

    if (journeyCapabilities) {
      if (capabilityItems.length > 0) {
        gsap.fromTo(
          capabilityItems,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: journeyCapabilities,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }

    // Achievements & Counter Section Animation
    const achievementsHeader = document.querySelector('.achievements-header');
    const achievementsGrid = document.querySelector('.achievements-grid');
    const achievementItems = document.querySelectorAll('.achievement-item');
    const counterNumbers = document.querySelectorAll('.counter-number');

    if (achievementsHeader) {
      gsap.fromTo(
        achievementsHeader.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#achievements',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (achievementItems.length > 0) {
      gsap.fromTo(
        achievementItems,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#achievements',
            start: 'top 75%',
            toggleActions: 'play none none none',
            onEnter: () => {
              counterNumbers.forEach((el) => {
                const target = parseInt(el.getAttribute('data-target'), 10);
                if (isNaN(target)) return;
                const obj = { val: 0 };
                gsap.to(obj, {
                  val: target,
                  duration: target > 100 ? 1.4 : 0.9,
                  ease: 'power2.out',
                  onUpdate: () => {
                    el.textContent = Math.floor(obj.val).toString();
                  },
                });
              });
            },
          },
        }
      );
    }

    // Clients Section Header Animation
    const clientsHeader = document.querySelector('.clients-header');
    if (clientsHeader) {
      gsap.fromTo(
        clientsHeader.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#clients',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Final CTA Section Animation
    const ctaContent = document.querySelector('.cta-content');
    const ctaVisual = document.querySelector('.cta-visual');
    if (ctaContent) {
      gsap.fromTo(
        ctaContent.children,
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#cta',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
    if (ctaVisual) {
      gsap.fromTo(
        ctaVisual,
        { opacity: 0, scale: 0.94 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.65,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#cta',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }

  // 5. Interactive Product Categories Tab Controller
  const productData = {
    'control-panels': {
      title: 'Control Panels',
      eyebrow: 'Drive • PLC • MCC • PCC • APFC Panels',
      desc: 'Customized control panel solutions engineered for reliable and safe industrial operation. Built in Ahmedabad with modular busbar systems, certified switchgear, and complete pre-dispatch quality testing.',
      image: './assets/images/product-control-panels.jpg',
      alt: 'Glanz Systems Custom Electrical Control Panels — Drive, PLC, MCC, PCC, APFC',
      topBadge: 'DRIVE • PLC • MCC • PCC',
      bottomBadge: 'Ahmedabad In-House Manufacturing',
      features: [
        'Customized control panel design & fabrication',
        'Drive Panels, PLC Panels, MCC Panels, PCC Panels & APFC Panels',
        'Modular busbar systems & certified industrial switchgear',
        '100% In-house quality inspection & pre-dispatch testing',
        'Engineered for harsh industrial & continuous manufacturing environments'
      ]
    },
    'plc-hmi': {
      title: 'PLC & HMI Solutions',
      eyebrow: 'Automated Logic & Intelligent Operator Touchscreens',
      desc: 'Tailored PLC logic and intuitive touchscreen interfaces built to optimize machine workflows, enhance productivity, and enable real-time operator control.',
      image: './assets/images/product-plc-hmi.jpg',
      alt: 'Glanz Systems PLC and HMI Automation Solutions',
      topBadge: 'SIEMENS • ROCKWELL • DELTA',
      bottomBadge: 'Real-Time Operator Control',
      features: [
        'Customized PLC & HMI Solutions',
        'Real-Time Monitoring & Control',
        'User-Friendly Operator Interface',
        'Reliable Machine Automation',
        'Improved Productivity & Efficiency',
        'Easy System Integration'
      ]
    },
    'iot': {
      title: 'IoT (Industrial Internet of Things)',
      eyebrow: 'Smart Industrial Connectivity & Remote Telemetry',
      desc: 'End-to-end industrial IoT solutions providing secure edge-to-cloud data communication, continuous sensor tracking, and predictive maintenance capabilities.',
      image: './assets/images/product-iot.jpg',
      alt: 'Glanz Systems Industrial IoT and Smart Telemetry Gateways',
      topBadge: 'SMART CONNECTIVITY',
      bottomBadge: 'Secure Cloud Telemetry',
      features: [
        'Smart Industrial Connectivity',
        'Real-Time Data Monitoring',
        'Remote Equipment Monitoring',
        'Secure Data Communication',
        'Predictive Maintenance Support',
        'Improved Operational Efficiency'
      ]
    },
    'scada': {
      title: 'SCADA Systems',
      eyebrow: 'Supervisory Control & Centralized Plant Data',
      desc: 'Centralized supervisory control and data acquisition architectures designed for live plant mimic visualization, alarm logging, and comprehensive shift reporting.',
      image: './assets/images/product-scada.jpg',
      alt: 'Glanz Systems Industrial SCADA Systems and Live Plant Visualization',
      topBadge: 'SUPERVISORY CONTROL',
      bottomBadge: 'Centralized Monitoring',
      features: [
        'Real-Time Process Monitoring',
        'Centralized System Control',
        'Live Data Visualization',
        'Alarm & Event Management',
        'Data Logging & Reporting',
        'Improved Operational Efficiency'
      ]
    }
  };

  const productTabs = document.querySelectorAll('.product-tab-btn');
  const displayImage = document.getElementById('product-display-image');
  const displayEyebrow = document.getElementById('product-display-eyebrow');
  const displayTitle = document.getElementById('product-display-title');
  const displayDesc = document.getElementById('product-display-desc');
  const displayFeatures = document.getElementById('product-display-features');

  function updateProductCategory(categoryKey) {
    const data = productData[categoryKey];
    if (!data) return;

    // Update active tab styling
    productTabs.forEach(tab => {
      const isSelected = tab.getAttribute('data-category') === categoryKey;
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      if (isSelected) {
        tab.className = 'product-tab-btn px-4 sm:px-6 py-3 rounded-xl font-sans font-semibold text-sm transition-all duration-200 flex items-center gap-2.5 whitespace-nowrap bg-glanz-red text-white shadow-industrial-sm cursor-pointer';
        const icon = tab.querySelector('i');
        if (icon) icon.className = 'w-4 h-4 text-white';
      } else {
        tab.className = 'product-tab-btn px-4 sm:px-6 py-3 rounded-xl font-sans font-semibold text-sm transition-all duration-200 flex items-center gap-2.5 whitespace-nowrap bg-glanz-surface-gray text-glanz-charcoal-700 hover:bg-glanz-surface-muted hover:text-glanz-charcoal-950 border border-glanz-border cursor-pointer';
        const icon = tab.querySelector('i');
        if (icon) icon.className = 'w-4 h-4 text-glanz-red';
      }
    });

    // Animate content crossfade
    if (window.gsap) {
      gsap.to([displayImage, displayEyebrow, displayTitle, displayDesc, displayFeatures], {
        opacity: 0,
        duration: 0.15,
        ease: 'power1.out',
        onComplete: () => {
          // Update DOM Elements
          if (displayImage) {
            displayImage.src = data.image;
            displayImage.alt = data.alt;
          }
          if (displayEyebrow) displayEyebrow.textContent = data.eyebrow;
          if (displayTitle) displayTitle.textContent = data.title;
          if (displayDesc) displayDesc.textContent = data.desc;

          if (displayFeatures) {
            displayFeatures.innerHTML = data.features
              .map(feat => `
                <li class="flex items-start gap-2.5">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-glanz-red shrink-0 mt-0.5"></i>
                  <span>${feat}</span>
                </li>
              `)
              .join('');
            if (window.lucide) window.lucide.createIcons();
          }

          // Fade back in smoothly
          gsap.to([displayImage, displayEyebrow, displayTitle, displayDesc, displayFeatures], {
            opacity: 1,
            duration: 0.25,
            ease: 'power1.out'
          });
        }
      });
    } else {
      // Fallback without GSAP
      if (displayImage) {
        displayImage.src = data.image;
        displayImage.alt = data.alt;
      }
      if (displayBadgeTopText) displayBadgeTopText.textContent = data.topBadge;
      if (displayBadgeBottomText) displayBadgeBottomText.textContent = data.bottomBadge;
      if (displayEyebrow) displayEyebrow.textContent = data.eyebrow;
      if (displayTitle) displayTitle.textContent = data.title;
      if (displayDesc) displayDesc.textContent = data.desc;
      if (displayFeatures) {
        displayFeatures.innerHTML = data.features
          .map(feat => `
            <li class="flex items-start gap-2.5">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-glanz-red shrink-0 mt-0.5"></i>
              <span>${feat}</span>
            </li>
          `)
          .join('');
        if (window.lucide) window.lucide.createIcons();
      }
    }
  }

  productTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const categoryKey = tab.getAttribute('data-category');
      updateProductCategory(categoryKey);
    });
  });

  // 6. Sticky Header Scroll state
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-sm', 'bg-white/95', 'backdrop-blur-md');
        header.classList.remove('bg-white');
      } else {
        header.classList.remove('shadow-sm', 'bg-white/95', 'backdrop-blur-md');
        header.classList.add('bg-white');
      }
    });
  }

  // 7. Mobile Navigation Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (!mobileDrawer || !mobileOverlay) return;
    mobileDrawer.classList.remove('translate-x-full');
    mobileOverlay.classList.remove('opacity-0', 'pointer-events-none');
    mobileOverlay.classList.add('opacity-100', 'pointer-events-auto');
    document.body.classList.add('overflow-hidden');
  }

  function closeMobileMenu() {
    if (!mobileDrawer || !mobileOverlay) return;
    mobileDrawer.classList.add('translate-x-full');
    mobileOverlay.classList.add('opacity-0', 'pointer-events-none');
    mobileOverlay.classList.remove('opacity-100', 'pointer-events-auto');
    document.body.classList.remove('overflow-hidden');
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // Handle Escape key to close mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && !mobileDrawer.classList.contains('translate-x-full')) {
      closeMobileMenu();
    }
  });

  // 8. Clients Continuous Smooth Swiper Slider
  if (document.querySelector('.clients-swiper')) {
    new Swiper('.clients-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 24,
      loop: true,
      loopAdditionalSlides: 9,
      speed: 4000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      freeMode: {
        enabled: true,
        momentum: false,
      },
      allowTouchMove: true,
      grabCursor: true,
    });
  }

  // 9. Back to Top Button Controller
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});


