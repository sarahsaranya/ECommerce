// Array of background image URLs for the carousel
const images = [
     'c.jpg',
    'poster.jpeg',  // Replace these with actual image filenames
    'c2.jpg',
    'c3.jpg',
    'c6.jpg',
    'c.jpg'
  ];
  
  let currentIndex = 0;
  let interval;
  
  // Function to show a specific slide based on index
  function showSlide(index) {
    const background = document.getElementById('carousel-background');
    currentIndex = index;
    background.style.backgroundImage = `url(${images[currentIndex]})`;
    updateDots();
  }
  
  // Function to update the active dot
  function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  
  // Function to go to the next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }
  
  // Start automatic carousel with interval of 5 seconds
  interval = setInterval(nextSlide, 3000);
  
  // Function to handle dot clicks
  function currentSlide(index) {
    clearInterval(interval);  // Stop auto-slide on user interaction
    showSlide(index);
    interval = setInterval(nextSlide, 5000);  // Resume auto-slide after interaction
  }
  
  // Reveal collections section when the user scrolls past the carousel
  window.onscroll = function() {
    const collectionsSection = document.getElementById('collections-section');
    
    // Check if the user has scrolled beyond 80% of the viewport height
    if (window.scrollY > window.innerHeight * 0.8) {
      collectionsSection.style.display = 'block';  // Show the collections section
      collectionsSection.style.opacity = 1;  // Make it fully visible
    }
  };
  
  // Load the first image on page load
  window.onload = function() {
    showSlide(0);
  };
  