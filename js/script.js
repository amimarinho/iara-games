console.log("JavaScript file loaded successfully!");

const registrationForm = document.getElementById('registrationForm');

if (registrationForm) {
  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formFeedback = document.getElementById('formFeedback');

    // Clear general form feedback message on new submission attempt
    if (formFeedback) {
      formFeedback.textContent = '';
      formFeedback.style.color = ''; // Reset color
    }

    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'O nome não pode estar vazio.';
      isValid = false;
    } else {
      nameError.textContent = '';
    }

    // Validate email
    if (!isValidEmail(emailInput.value)) {
      emailError.textContent = 'Por favor, insira um email válido.';
      isValid = false;
    } else {
      emailError.textContent = '';
    }

    // Validate password
    if (passwordInput.value.length < 6) {
      passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
      isValid = false;
    } else {
      passwordError.textContent = '';
    }

    if (isValid) {
      // Clear individual error messages
      nameError.textContent = '';
      emailError.textContent = '';
      passwordError.textContent = '';

      if (formFeedback) {
        formFeedback.textContent = 'Cadastro realizado com sucesso!';
        formFeedback.style.color = 'green';
      }
      console.log('Form submitted successfully!'); // Keep console log for now or remove if redundant
      registrationForm.reset();
    } else {
      // Ensure formFeedback is clear if there are individual errors
      if (formFeedback) {
        formFeedback.textContent = '';
      }
    }
  });
}

function isValidEmail(email) {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Initialize Bootstrap Carousel
const carouselElement = document.querySelector('#carouselExampleFade');
if (carouselElement) {
  try {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 3000, // Time in milliseconds
      pause: 'hover' // Pause on mouse hover
    });
  } catch (e) {
    console.error("Error initializing carousel: ", e);
  }
}

// Add to Cart button functionality
const addToCartButtons = document.querySelectorAll('.btn-cart');

if (addToCartButtons.length > 0) {
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) { // Added event parameter
      // Condition to check if it's truly an "add to cart" button
      if (button.querySelector('i.fa-cart-plus') || button.textContent.includes('R$') || button.textContent.toLowerCase().includes('adicionar ao carrinho')) {
        // Prevent default if it's a link acting as a button, though actual buttons won't be affected.
        // This is more relevant if actual <a> tags have the .btn-cart class.
        // For <button> elements, this has no effect on their primary action but doesn't harm.
        event.preventDefault();
        alert('Adicionado ao carrinho!');
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
const searchInput = document.getElementById('search');
const gameCards = document.querySelectorAll('li.card-list-item'); // Selects all relevant game cards

if (searchInput && gameCards.length > 0) {
  searchInput.addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();

    gameCards.forEach(card => {
      const titleElement = card.querySelector('h3');
      if (titleElement) {
        const title = titleElement.textContent.toLowerCase();
        if (title.includes(searchTerm)) {
          card.style.display = ''; // Show card
        } else {
          card.style.display = 'none'; // Hide card
        }
      }
    });
  });
}
