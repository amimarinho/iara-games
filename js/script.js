console.log("JavaScript file loaded successfully!");

const toastLiveExample = document.getElementById("liveToast");

const forms = document.querySelectorAll(".needs-validation");

// Loop over them and prevent submission
Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});

// Initialize Bootstrap Carousel
const carouselElement = document.querySelector("#carouselExampleFade");
if (carouselElement) {
  try {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 3000, // Time in milliseconds
      pause: "hover", // Pause on mouse hover
    });
  } catch (e) {
    console.error("Error initializing carousel: ", e);
  }
}

// Add to Cart button functionality
const addToCartButtons = document.querySelectorAll(".btn-cart");

if (addToCartButtons.length > 0) {
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      // Added event parameter
      // Condition to check if it's truly an "add to cart" button
      if (
        button.querySelector("i.fa-cart-plus") ||
        button.textContent.includes("R$") ||
        button.textContent.toLowerCase().includes("adicionar ao carrinho")
      ) {
        // Prevent default if it's a link acting as a button, though actual buttons won't be affected.
        // This is more relevant if actual <a> tags have the .btn-cart class.
        // For <button> elements, this has no effect on their primary action but doesn't harm.
        event.preventDefault();

        const toastBootstrap =
          bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        console.log(toastBootstrap);

        toastBootstrap.show();
        // In a real application, you would add logic here to:
        // - Identify the item (e.g., using data attributes on the button)
      }
      // If the condition is false, the default action (e.g., navigation for an <a> tag) will proceed.
      // - Add the item to a shopping cart object or array
      // - Update a cart counter displayed on the page
      // - Potentially provide more sophisticated user feedback (e.g., a modal or toast notification)
    });
  });
}

// Search/Filter functionality for listing-games.html
const searchInput = document.getElementById("search");
const gameCards = document.querySelectorAll("li.card-list-item"); // Selects all relevant game cards

if (searchInput && gameCards.length > 0) {
  searchInput.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();

    gameCards.forEach((card) => {
      const titleElement = card.querySelector("h3");
      if (titleElement) {
        const title = titleElement.textContent.toLowerCase();
        if (title.includes(searchTerm)) {
          card.style.display = ""; // Show card
        } else {
          card.style.display = "none"; // Hide card
        }
      }
    });
  });
}
