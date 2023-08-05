
// Leadership Section using Slick Carousel ---------------------------------------------------------->
$(document).ready(function() {
  console.log("Carousel initialization script is running!");
  $('.slider').slick({
    centerMode: true,
    slidesToShow: 6, // Show 6 slides at a time by default
    infinite: true, // Enable infinite looping
    autoplay: true, // Autoplay the slider
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
    prevArrow: '<i class="fas fa-chevron-left prev-carousel"></i>',
    nextArrow: '<i class="fas fa-chevron-right next-carousel"></i>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1010,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Enable navigation with arrow keys
  $(document).on('keydown', function(e) {
    if (e.keyCode === 37) {
      // Left arrow key
      $('.slider').slick('slickPrev');
    } else if (e.keyCode === 39) {
      // Right arrow key
      $('.slider').slick('slickNext');
    }
  });
});



// Header section ---------------------------------------------------------------------------->
$(document).ready(function() {

  // Highlight the current section in the navigation bar
  var sections = $("section");
  var navigation_links = $("#nav-wrap a");

  sections.waypoint({
    handler: function(event, direction) {
      var active_section;

      active_section = $(this);
      if (direction === "up") active_section = active_section.prev();

      var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");
    },
    offset: '35%'
  });

  // Make sure that #header-background-image height is equal to the browser height.
  $('header').css({ 'height': $(window).height() });
  $(window).on('resize', function() {
    $('header').css({ 'height': $(window).height() });
    $('body').css({ 'width': $(window).width() });
  });

  // Fade In/Out Primary Navigation
  $(window).on('scroll', function() {
    var h = $('header').height();
    var y = $(window).scrollTop();
    var nav = $('#nav-wrap');

    if ((y > h * 0.20) && (y < h) && ($(window).outerWidth() > 768)) {
      nav.fadeOut('fast');
    } else {
      if (y < h * 0.20) {
        nav.removeClass('opaque').fadeIn('fast');
      } else {
        nav.addClass('opaque').fadeIn('fast');
      }
    }
  });

  // Add any other custom JavaScript code related to the header here

});



//
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links on all pages
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    const headerOffset = document.querySelector("header").offsetHeight;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  // Custom scrolling effect
  const sections = document.querySelectorAll("section");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    sections.forEach((section) => {
      if (isElementInViewport(section)) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  handleScroll(); // Check on initial page load

  window.addEventListener("scroll", handleScroll);

  // Smooth scroll to top button
  const scrollToTopButton = document.getElementById("scrollToTop");

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Change navigation bar color on scroll
  const navBar = document.querySelector("nav");

  function changeNavBarColor() {
    if (window.pageYOffset > homeSection.offsetHeight * 0.5) {
      navBar.classList.add("scrolled");
    } else {
      navBar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", changeNavBarColor);

  // Fade-in animation for elements on scroll
  const projects = document.querySelectorAll(".project");

  function fadeInProjects() {
    projects.forEach((project) => {
      const projectTop = project.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (projectTop < screenHeight * 0.9) {
        project.classList.add("fade-in");
      }
    });
  }

  window.addEventListener("scroll", fadeInProjects);

  // Progress bar animation
  const progressBar = document.querySelector(".progress-bar");
  const totalHeight = document.body.scrollHeight - window.innerHeight;

  function updateProgressBar() {
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = `${progress}%`;
  }

  window.addEventListener("scroll", updateProgressBar);

  // Image gallery with lightbox effect
  const galleryImages = document.querySelectorAll(".gallery-image");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  const closeButton = document.querySelector(".close-button");

  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      lightbox.style.display = "flex";
      const imageSrc = image.getAttribute("src");
      lightboxImage.setAttribute("src", imageSrc);
    });
  });

  closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});

// Parallax Effect
const homeSection = document.getElementById("home");

window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;
  homeSection.style.backgroundPositionY = scrollPosition * 0.7 + "px";
});

// Add Open Project functionality
const projectDetailsButtons = document.querySelectorAll(".details-button");
const projectLinks = [
  // Add project URLs here corresponding to each button
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
];

projectDetailsButtons.forEach((button, index) => {
  button.addEventListener("mouseover", () => {
    button.textContent = "Open Project";
    button.href = projectLinks[index];
  });

  button.addEventListener("mouseout", () => {
    button.textContent = "Details";
    button.removeAttribute("href");
  });
});


// JavaScript for Progress Bar
const progressBar = document.querySelector(".progress-bar");
const scrollIndicator = () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY;
  const progress = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${progress}%`;
};

window.addEventListener("scroll", scrollIndicator);

// JavaScript for Lightbox (Resume Section)
const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeButton = document.querySelector(".close-button");

const openLightbox = (imageSrc) => {
  lightboxImage.src = imageSrc;
  lightbox.style.display = "block";
};

const closeLightbox = () => {
  lightbox.style.display = "none";
};

galleryImages.forEach((image) => {
  image.addEventListener("click", () => openLightbox(image.src));
});

closeButton.addEventListener("click", closeLightbox);


// JavaScript to show/hide the lightbox on click
const leadershipCards = document.querySelectorAll('.leadership-card');

leadershipCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});






