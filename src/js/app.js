/**
 * Glanz Systems - Main Application
 */
import { createIcons, icons } from 'lucide';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { initAnimations, animateSlideContent } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  createIcons({ icons });

  // Initialize Swiper for Hero Slider
  const heroSwiper = new Swiper('.hero-swiper', {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
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

  // Initialize GSAP Animations on first load
  initAnimations();

  // Sticky Header Scroll state
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-sm', 'bg-white/95', 'backdrop-blur-md');
      header.classList.remove('bg-white');
    } else {
      header.classList.remove('shadow-sm', 'bg-white/95', 'backdrop-blur-md');
      header.classList.add('bg-white');
    }
  });

  // Mobile Navigation Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileDrawer.classList.remove('translate-x-full');
    mobileOverlay.classList.remove('opacity-0', 'pointer-events-none');
    mobileOverlay.classList.add('opacity-100', 'pointer-events-auto');
    document.body.classList.add('overflow-hidden');
  }

  function closeMobileMenu() {
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
    if (e.key === 'Escape' && !mobileDrawer.classList.contains('translate-x-full')) {
      closeMobileMenu();
    }
  });
});
