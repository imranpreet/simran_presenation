const slides = [...document.querySelectorAll('.slide')];
const dots = document.querySelector('#progressDots');
const currentSlide = document.querySelector('#currentSlide');
const totalSlides = document.querySelector('#totalSlides');
const prevButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');
const stage = document.querySelector('.stage');
const projectModal = document.querySelector('#projectModal');
const modalKicker = document.querySelector('#modalKicker');
const modalTitle = document.querySelector('#modalTitle');
const modalDescription = document.querySelector('#modalDescription');
const modalTechnologies = document.querySelector('#modalTechnologies');
let activeIndex = 0;
let isAnimating = false;

totalSlides.textContent = String(slides.length).padStart(2, '0');

const projectDetails = {
  zigga: {
    kicker: 'PROJECT 01 · ZIGGURATSS ARTWORK LLP',
    title: 'Zigga Web Experience',
    description: 'A responsive web experience built during my Full-Stack Developer internship at Zigguratss Artwork LLP. The project focused on reusable interfaces, polished user flows, API-connected screens, and practical frontend-to-backend integration.',
    technologies: ['React.js', 'JavaScript', 'JSX', 'HTML5', 'CSS3', 'Tailwind CSS', 'Custom CSS animations', 'React Hooks', 'Vite', 'Node.js and npm', 'Remote image resources', 'Responsive design', 'ESLint', 'VS Code']
  },
  product: {
    kicker: 'PROJECT 02 · PRODUCT EXPERIENCE',
    title: 'Zigga Product Page',
    description: 'This project is a modern product page built using React, designed to showcase a premium product with a clean and visually appealing interface. It includes product images, feature highlights, pricing details, call-to-action buttons, and responsive layouts with smooth animations.',
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'GSAP', 'React Router', 'Vite', 'Node.js and npm', 'Local assets/images', 'External resources', 'VS Code']
  },
  blog: {
    kicker: 'PROJECT 03 · ART BLOG',
    title: 'Final Blog',
    description: 'This project is a modern art blog website built using React, where users can explore different categories of art content, read blog articles, and view detailed article pages. It includes a visually appealing homepage, blog cards, category filters, and responsive design for a smooth browsing experience.',
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'React Router', 'GSAP', 'Node.js and npm', 'VS Code']
  },
  userpanel: {
    kicker: 'PROJECT 04 · USER PANEL',
    title: 'User Panel',
    description: 'This project is an interactive heritage and art marketplace built with React. It showcases artworks, artifacts, artists, exhibitions, galleries, featured collections, and bestseller products. Users can browse, wishlist, purchase, manage accounts, track orders, and explore analytics dashboards.',
    technologies: ['React.js', 'JavaScript', 'JSX', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'React Hooks', 'Recharts', 'Lucide React', 'Vite', 'API Integration', 'JWT Authentication', 'Node.js and npm', 'Responsive Design', 'ESLint', 'VS Code']
  },
  rotation: {
    kicker: 'PROJECT 05 · ROTATE INTERN TASK',
    title: 'Rotation',
    description: 'A modern product page built using React to showcase a premium product through a clean, responsive interface. It includes feature highlights, product visuals, pricing details, calls to action, and polished animations across desktop, tablet, and mobile screens.',
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'GSAP', 'React Router', 'Vite', 'Node.js and npm', 'Local assets/images', 'External resources', 'VS Code', 'Framer Motion', 'Tailwind CSS', 'Lucide React', 'Unsplash / remote images', 'Smooth animations', 'Responsive design']
  },
  qurated: {
    kicker: 'PROJECT 06 · ART CURATION PLATFORM',
    title: 'Qurated Artworks',
    description: 'A premium art curation and product showcase platform built with React. It features artist discovery, interactive product galleries with wall mockups, AR preview capabilities, elegant product details, cart functionality, and a sophisticated Dessine brand experience.',
    technologies: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'PostCSS', 'Autoprefixer', 'GSAP (GreenSock Animation Platform)', 'Framer Motion', 'Lenis (@studio-freight/lenis)', 'React Intersection Observer', 'Zustand', 'Lucide React', 'Vite', 'React Router', 'Node.js and npm', 'ESLint', 'Local Assets', 'Public Resources', 'Netlify & Vercel Configuration']
  },
  sanskriti: {
    kicker: 'BRAYNUPAI · SANSKRITI PROJECT',
    title: 'Sanskriti Heritage Marketplace',
    description: 'An interactive heritage and art marketplace built with React. Sanskriti brings artworks, artifacts, artists, exhibitions, galleries, featured collections, and bestseller products together in a visually engaging digital experience. Users can explore categories, view artist profiles, browse cultural artifacts, add products to a wishlist or cart, complete checkout, track purchases, manage addresses and profiles, and explore analytics dashboards. The live project uses smooth transitions, responsive layouts, modern UI patterns, and interactive motion across desktop, tablet, and mobile devices.',
    technologies: ['React.js', 'JavaScript ES6', 'JSX', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'React Hooks', 'Recharts', 'Lucide React', 'Vite', 'React Router DOM', 'Axios', 'API Integration', 'JWT Authentication', 'Firebase', 'Redux Toolkit', 'Zustand', 'Razorpay', 'React Hook Form', 'Headless UI', 'TypeScript', 'Node.js and npm', 'Responsive Design', 'ESLint', 'VS Code']
  }
};

const apjPageDetails = {
  home: {
    title: 'Home Page',
    description: 'Landing page of the institute with a hero section, courses, highlights, mission, testimonials, and clear call-to-action buttons.',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Swiper', 'React Router']
  },
  about: {
    title: 'About Page',
    description: 'Shows the institute background, vision, mission, values, faculty, and achievements in a structured educational experience.',
    technologies: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Motion effects']
  },
  admission: {
    title: 'Admission Page',
    description: 'Displays the admission process, eligibility criteria, courses offered, and important enrollment information for prospective students.',
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Form components', 'Reusable UI cards']
  },
  gallery: {
    title: 'Gallery Page',
    description: 'Displays institute photos, events, campus visuals, and media content in a structured and responsive gallery layout.',
    technologies: ['React.js', 'CSS Grid', 'Tailwind CSS', 'Swiper', 'Image-based UI components']
  },
  news: {
    title: 'News and Announcements Page',
    description: 'Shows the latest updates, notices, events, and important announcements in a clear card and list format.',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Reusable data cards', 'Axios']
  },
  login: {
    title: 'Admin Login Page',
    description: 'Login screen for admin users to securely access private management features.',
    technologies: ['React.js', 'React Router', 'Tailwind CSS', 'Axios', 'Form validation', 'Login UI components']
  },
  dashboard: {
    title: 'Admin Dashboard',
    description: 'Post-login overview page showing key stats, quick actions, and analytics before full admin navigation.',
    technologies: ['React.js', 'Recharts', 'Tailwind CSS', 'Axios', 'Dashboard cards', 'Responsive UI']
  },
  panel: {
    title: 'Admin Panel',
    description: 'Management section where admins can handle courses, announcements, queries, finance, and settings.',
    technologies: ['React.js', 'React Router', 'Tailwind CSS', 'JavaScript', 'Axios', 'Modular admin components']
  },
  'panel-two': {
    title: 'Admin Panel',
    description: 'Additional admin management view for organizing institute operations, content, and administrative workflows.',
    technologies: ['React.js', 'React Router', 'Tailwind CSS', 'JavaScript', 'Axios', 'Modular admin components']
  }
};

slides.forEach((slide, index) => {
  const dot = document.createElement('button');
  dot.className = 'progress-dot';
  dot.type = 'button';
  dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
  dot.addEventListener('click', () => goToSlide(index));
  dots.appendChild(dot);
});

function renderSlide(nextIndex, direction = 1) {
  if (isAnimating || nextIndex === activeIndex || nextIndex < 0 || nextIndex >= slides.length) return;
  isAnimating = true;
  const oldSlide = slides[activeIndex];
  const newSlide = slides[nextIndex];
  oldSlide.classList.remove('is-active');
  oldSlide.classList.add('was-active');
  newSlide.style.transformOrigin = direction > 0 ? 'left center' : 'right center';
  newSlide.classList.add('is-active');
  activeIndex = nextIndex;
  currentSlide.textContent = String(activeIndex + 1).padStart(2, '0');
  [...dots.children].forEach((dot, index) => dot.classList.toggle('is-active', index === activeIndex));
  window.setTimeout(() => {
    oldSlide.classList.remove('was-active');
    isAnimating = false;
  }, 760);
}

function goToSlide(index) {
  renderSlide(index, index > activeIndex ? 1 : -1);
}

function openProjectDetails(projectKey) {
  const project = projectDetails[projectKey];
  if (!project) return;
  modalKicker.textContent = project.kicker;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalTechnologies.replaceChildren(...project.technologies.map((technology) => {
    const tag = document.createElement('span');
    tag.textContent = technology;
    return tag;
  }));
  projectModal.hidden = false;
  document.body.classList.add('modal-open');
}

function openPageDetailsModal(pageKey) {
  const page = apjPageDetails[pageKey];
  if (!page) return;
  modalKicker.textContent = 'APJ INSTITUTE · PAGE DETAILS';
  modalTitle.textContent = page.title;
  modalDescription.textContent = page.description;
  modalTechnologies.replaceChildren(...page.technologies.map((technology) => {
    const tag = document.createElement('span');
    tag.textContent = technology;
    return tag;
  }));
  projectModal.hidden = false;
  document.body.classList.add('modal-open');
}

function closeProjectDetails() {
  projectModal.hidden = true;
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.project-card-detail').forEach((card) => {
  card.addEventListener('click', (event) => {
    if (event.target.closest('a')) return;
    event.stopPropagation();
    openProjectDetails(card.dataset.project);
  });
});
document.querySelectorAll('.apj-page-card').forEach((card) => {
  const openPageDetails = (event) => {
    event.stopPropagation();
    openPageDetailsModal(card.dataset.page);
  };
  card.addEventListener('click', openPageDetails);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openPageDetails(event);
    }
  });
});
document.querySelectorAll('.barnyup-preview').forEach((preview) => {
  const openPreviewDetails = (event) => {
    event.stopPropagation();
    openProjectDetails(preview.dataset.project);
  };
  preview.addEventListener('click', openPreviewDetails);
  preview.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openPreviewDetails(event);
    }
  });
});
projectModal.addEventListener('click', (event) => {
  if (event.target.closest('[data-modal-close]')) closeProjectDetails();
});

prevButton.addEventListener('click', () => renderSlide(activeIndex - 1, -1));
nextButton.addEventListener('click', () => renderSlide(activeIndex + 1, 1));
stage.addEventListener('click', (event) => {
  if (!event.target.closest('button, a, .project-card-detail')) renderSlide(activeIndex + 1, 1);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !projectModal.hidden) {
    closeProjectDetails();
    return;
  }
  if (!projectModal.hidden) return;
  if (event.key === 'ArrowRight' || event.key === ' ') renderSlide(activeIndex + 1, 1);
  if (event.key === 'ArrowLeft') renderSlide(activeIndex - 1, -1);
  if (event.key === 'Home') goToSlide(0);
  if (event.key === 'End') goToSlide(slides.length - 1);
});

[...dots.children][0].classList.add('is-active');
