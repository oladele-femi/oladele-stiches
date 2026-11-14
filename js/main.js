document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }

  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const nextQuoteBtn = document.getElementById("nextQuoteBtn");
  const atelierQuote = document.getElementById("atelierQuote");

  if (nextQuoteBtn && atelierQuote) {
    const quotes = [
      "“Every stitch at Oladele Stitches is measured by hand for an effortless, confident drape.”",
      "“We blend heritage Nigerian adire and aso-oke textures with clean modern tailoring.”",
      "“Book a private fitting at least 3 weeks ahead for custom bridal and agbada commissions.”"
    ];
    let currentIndex = 0;

    nextQuoteBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % quotes.length;
      atelierQuote.textContent = quotes[currentIndex];
    });
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  if (filterButtons.length > 0 && productCards.length > 0) {
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        filterButtons.forEach(function (btn) {
          btn.classList.remove("active");
        });
        button.classList.add("active");

        const selectedCategory = button.getAttribute("data-category");

        productCards.forEach(function (card) {
          const cardCategory = card.getAttribute("data-category");
          if (selectedCategory === "all" || cardCategory === selectedCategory) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  const productModal = document.getElementById("productModal");
  const modalClose = document.getElementById("modalClose");
  const detailButtons = document.querySelectorAll(".view-detail-btn");

  if (productModal && detailButtons.length > 0) {
    detailButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.getElementById("modalTitle").textContent = btn.getAttribute("data-title");
        document.getElementById("modalCategory").textContent = btn.getAttribute("data-cat");
        document.getElementById("modalPrice").textContent = btn.getAttribute("data-price");
        document.getElementById("modalDesc").textContent = btn.getAttribute("data-desc");
        productModal.classList.add("open");
      });
    });

    if (modalClose) {
      modalClose.addEventListener("click", function () {
        productModal.classList.remove("open");
      });
    }

    productModal.addEventListener("click", function (event) {
      if (event.target === productModal) {
        productModal.classList.remove("open");
      }
    });
  }

  const bioButtons = document.querySelectorAll(".toggle-bio-btn");

  if (bioButtons.length > 0) {
    bioButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const bioParagraph = btn.previousElementSibling;
        if (bioParagraph.style.display === "none") {
          bioParagraph.style.display = "block";
          btn.textContent = "Hide Bio";
        } else {
          bioParagraph.style.display = "none";
          btn.textContent = "Read Bio";
        }
      });
    });
  }

  const countdownEl = document.getElementById("eventCountdown");

  if (countdownEl) {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 21);

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownEl.textContent = days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s";
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  const rsvpButtons = document.querySelectorAll(".rsvp-btn");
  if (rsvpButtons.length > 0) {
    rsvpButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (btn.classList.contains("btn-gold")) {
          btn.classList.remove("btn-gold");
          btn.classList.add("btn-primary");
          btn.textContent = "RSVP Now";
        } else {
          btn.classList.remove("btn-primary");
          btn.classList.add("btn-gold");
          btn.textContent = "RSVP Confirmed ✓";
        }
      });
    });
  }

  const appointmentForm = document.getElementById("appointmentForm");
  const formMessage = document.getElementById("formMessage");

  if (appointmentForm && formMessage) {
    appointmentForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const service = document.getElementById("serviceType").value;
      const date = document.getElementById("preferredDate").value;

      if (fullName === "" || email === "" || service === "" || date === "") {
        formMessage.className = "form-message error";
        formMessage.textContent = "Please fill in your name, email, service type, and preferred date.";
        return;
      }

      formMessage.className = "form-message success";
      formMessage.textContent =
        "Thank you, " + fullName + "! Your " + service + " request for " + date +
        " has been recorded. We will contact you at " + email + ".";
      appointmentForm.reset();
    });
  }

  const inspectDomBtn = document.getElementById("inspectDomBtn");
  const domStats = document.getElementById("domStats");

  if (inspectDomBtn && domStats) {
    inspectDomBtn.addEventListener("click", function () {
      const totalElements = document.querySelectorAll("*").length;
      const totalLinks = document.querySelectorAll("a").length;
      const totalHeadings = document.querySelectorAll("h1, h2, h3").length;

      domStats.textContent =
        "Live DOM Inspection: " + totalElements + " total HTML nodes | " +
        totalLinks + " anchor (<a>) links | " + totalHeadings + " heading elements on this page.";
    });
  }
});
