function submitForm() {
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    fetch('http://localhost:3000/submitForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show success or error message
        resetForm();  // Optional: Reset the form after submission
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function resetForm() {
    document.getElementById("contact-form").reset();
}
