// Animate elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = () => {
    const elements = document.querySelectorAll('section, .project-card');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial state
  const sections = document.querySelectorAll('section');
  const projectCards = document.querySelectorAll('.project-card');
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });
  
  projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';
  });

  // Animate on scroll
  window.addEventListener('scroll', animateElements);
  // Trigger once on load
  animateElements();
  
  // Animate skill bars
  const animateSkillBars = () => {
    const skillsSection = document.querySelector('section:nth-of-type(2)');
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (isInViewport(skillsSection)) {
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
      window.removeEventListener('scroll', animateSkillBars);
    }
  };

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };

  window.addEventListener('scroll', animateSkillBars);
  animateSkillBars();

  // Back to top button visibility
  const backToTopButton = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
});

// Smooth scrolling for navigation
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: 'smooth'
    });
  }
}
