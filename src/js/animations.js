/**
 * Glanz Systems - GSAP Motion & Interaction Engine
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  const activeSlide = document.querySelector('.swiper-slide-active') || document.querySelector('.swiper-slide');
  if (activeSlide) {
    animateSlideContent(activeSlide);
  }

  // Animate Expertise Section Header on scroll
  const expertiseHeader = document.querySelector('.expertise-header');
  if (expertiseHeader) {
    gsap.fromTo(
      expertiseHeader.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: expertiseHeader,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }

  // Animate Expertise Cards with subtle stagger
  const expertiseCards = document.querySelectorAll('.expertise-card');
  if (expertiseCards.length > 0) {
    gsap.fromTo(
      expertiseCards,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#services',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }
}

export function animateSlideContent(slideElement) {
  if (!slideElement) return;

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
