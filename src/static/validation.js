// Validate Login Form
function validateLogin(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    let errorMessage = document.getElementById("login-error");

    if (!email.includes("@") || email.length < 5) {
        errorMessage.innerText = "Please enter a valid email.";
        return false;
    }

    if (password.length < 6) {
        errorMessage.innerText = "Password must be at least 6 characters.";
        return false;
    }

    errorMessage.innerText = ""; // Clear errors
    event.target.submit(); // Submit if valid
}

// Validate Register Form
function validateRegister(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById("register-email").value;
    let password = document.getElementById("register-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let errorMessage = document.getElementById("register-error");

    if (!email.includes("@") || email.length < 5) {
        errorMessage.innerText = "Please enter a valid email.";
        return false;
    }

    if (password.length < 6) {
        errorMessage.innerText = "Password must be at least 6 characters.";
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.innerText = "Passwords do not match.";
        return false;
    }

    errorMessage.innerText = ""; // Clear errors
    event.target.submit(); // Submit if valid
}
// Validate Forgot Password Form
function validateForgotPassword(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById("forgot-email").value;
    let errorMessage = document.getElementById("forgot-error");

    if (!email.includes("@") || email.length < 5) {
        errorMessage.innerText = "Please enter a valid email.";
        return false;
    }

    errorMessage.innerText = ""; // Clear errors
    event.target.submit(); // Submit if valid
}