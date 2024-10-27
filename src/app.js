const banner = document.getElementById("banner");
const items = document.querySelectorAll(".move-item");

banner.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const { width, height } = banner.getBoundingClientRect();

  // Normalize the mouse coordinates to a -1 to 1 range
  const moveX = (clientX / width) * 2 - 1;
  const moveY = (clientY / height) * 2 - 1;

  // Move items based on the mouse position
  items.forEach((item, index) => {
    const speed = (index + 1) * 5; // Control speed for each item
    const x = moveX * speed;
    const y = moveY * speed;

    item.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Reset items on mouse leave
banner.addEventListener("mouseleave", () => {
  items.forEach((item) => {
    item.style.transform = "translate(0, 0)";
  });
});

// Banner animated JavaScript to trigger animations on scroll
const bannerAnimatedSection = document.getElementById(
  "banner-animated-section"
);
const banner_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes when the section is in view
        bannerAnimatedSection.children[0].classList.add("animate-from-left");
        bannerAnimatedSection.children[1].classList.add("animate-from-right");
        bannerAnimatedSection.classList.remove("opacity-0");
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the section is visible
);

banner_observer.observe(bannerAnimatedSection);

// Banner animated JavaScript to trigger animations on scroll
const seoAnimatedSection = document.getElementById("seo-animated-section");
const seo_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes when the section is in view
        seoAnimatedSection.children[0].classList.add("animate-from-left");
        seoAnimatedSection.children[1].classList.add("animate-from-right");
        seoAnimatedSection.classList.remove("opacity-0");
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the section is visible
);

seo_observer.observe(seoAnimatedSection);

// Blog animated JavaScript to trigger animations on scroll
const blogAnimatedSection = document.getElementById("blog-animated-section");
const blog_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes when the section is in view
        blogAnimatedSection.children[0].classList.add("animate-from-left");
        blogAnimatedSection.children[1].classList.add("animate-from-right");
        blogAnimatedSection.classList.remove("opacity-0");
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the section is visible
);

blog_observer.observe(blogAnimatedSection);

// Function to add animation class when section is in the viewport
const observer_card = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-slide-in-left");
    }
  });
});

// Target all the cards for animation
const cards = document.querySelectorAll(".card");
cards.forEach((card) => observer_card.observe(card));

//** */ Mastery Function to add animation class when section is in the viewport
const mastery_card = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-slide-in-right");
    }
  });
});

// Target all the cards for animation
const masteryCards = document.querySelectorAll(".mastery-card");
masteryCards.forEach((card) => mastery_card.observe(card));

/** Pricing Plan animation */
//** */ Mastery Function to add animation class when section is in the viewport
const pricing_card = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-slide-in-top");
    }
  });
});

// Target all the cards for animation
const pricingCards = document.querySelectorAll(".pricing-card");
pricingCards.forEach((card) => pricing_card.observe(card));
