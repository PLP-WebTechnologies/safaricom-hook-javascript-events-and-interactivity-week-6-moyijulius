   // Toggle background color
   function toggleBackgroundColor() {
    const body = document.body;
    body.style.backgroundColor = body.style.backgroundColor === 'lightblue' ? '#f0f4f8' : 'lightblue';
}

// Update text size based on slider
function updateTextSize() {
    const sliderValue = document.getElementById('textSizeSlider').value;
    document.getElementById('sliderValue').textContent = `${sliderValue}px`;
    document.getElementById('dynamicText').style.fontSize = `${sliderValue}px`;
}

// Open modal
function openModal() {
    document.getElementById('modal').style.display = 'flex';  // Use flex to display the modal
}

// Close modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';  // Hide the modal
}

// Form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    let valid = true;

    // Name validation
    if (name.length < 3) {
        errorMessages.innerHTML += 'Name must be at least 3 characters long.<br>';
        valid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        errorMessages.innerHTML += 'Please enter a valid email address.<br>';
        valid = false;
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!password.match(passwordPattern)) {
        errorMessages.innerHTML += 'Password must be at least 8 characters, including 1 uppercase letter and 1 number.<br>';
        valid = false;
    }

    return valid;
}

// Display custom message based on dropdown selection
function showCustomMessage() {
    const selectedOption = document.getElementById('dropdown').value;
    const message = `You selected: ${selectedOption}`;
    document.getElementById('dropdownMessage').textContent = message;
}