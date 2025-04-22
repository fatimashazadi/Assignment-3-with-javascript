document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile navigation menu
    const menuBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
      });
    }
  
    // Scroll to top button functionality
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
      window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('hidden', window.scrollY < 300);
      });
  
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    // Dark mode toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const body = document.body;
        body.classList.toggle('bg-white');
        body.classList.toggle('bg-gray-900');
        body.classList.toggle('text-gray-800');
        body.classList.toggle('text-white');
      });
    }
  
    // Search filter for recipes
    const searchInput = document.getElementById('searchInput');
    const recipes = document.querySelectorAll('.recipe');
  
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        recipes.forEach(recipe => {
          const title = recipe.querySelector('h3').textContent.toLowerCase();
          recipe.style.display = title.includes(query) ? 'block' : 'none';
        });
      });
    }
  
    // Recipe hover interaction (highlight border)
    recipes.forEach(recipe => {
      recipe.addEventListener('mouseenter', () => {
        recipe.classList.add('ring-2', 'ring-red-400');
      });
      recipe.addEventListener('mouseleave', () => {
        recipe.classList.remove('ring-2', 'ring-red-400');
      });
    });
  
    // Category highlight on click
    const categories = document.querySelectorAll('.category');
    categories.forEach(cat => {
      cat.addEventListener('click', () => {
        categories.forEach(c => c.classList.remove('border-red-400', 'bg-red-100'));
        cat.classList.add('border-red-400', 'bg-red-100');
      });
    });
  });
  