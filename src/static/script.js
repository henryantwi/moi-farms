function toggleSidebar() {
    let sidebar = document.querySelector('.sidebar');
    let mainContent = document.querySelector('.main-content');
    
    // Toggle collapsed class
    sidebar.classList.toggle('collapsed');

    // Adjust main content margin when sidebar collapses
    if (sidebar.classList.contains('collapsed')) {
        mainContent.style.marginLeft = '70px';  // Smaller margin
    } else {
        mainContent.style.marginLeft = '250px'; // Default margin
    }
}

// Investment Growth Chart
const investmentCtx = document.getElementById('investmentChart').getContext('2d');
new Chart(investmentCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Investment Growth ($)',
            data: [1000, 1500, 2500, 4000, 5250],
            backgroundColor: 'rgba(0, 128, 0, 0.2)',
            borderColor: 'green',
            borderWidth: 2
        }]
    }
});

// Farm Productivity Chart
const farmCtx = document.getElementById('farmChart').getContext('2d');
new Chart(farmCtx, {
    type: 'bar',
    data: {
        labels: ['Farm A', 'Farm B', 'Farm C'],
        datasets: [{
            label: 'Productivity ()',
            data: [1,2,3],
            backgroundColor: ['#FFD700', '#006400', '#333333']
        }]
    }
});
function processInvestment() {
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (amount < 100) {
        alert("Minimum investment is GHS 100.");
        return;
    }

    // Placeholder for MTN MoMo Integration
    if (paymentMethod === "momo") {
        alert("Redirecting to MTN Mobile Money...");
        // Here, you can integrate MoMo API for payment processing.
    } else {
        alert("Redirecting to secure card payment...");
    }

    // Save investment details (Simulated)
    const investmentHistory = document.getElementById('investment-history');
    const newRow = investmentHistory.insertRow();
    newRow.innerHTML = `
        <td>GHS ${amount}</td>
        <td>${getInvestmentPlan(amount)}</td>
        <td>${new Date().toLocaleDateString()}</td>
        <td>✅ Completed</td>
    `;
}

// Determine Investment Plan Based on Amount
function getInvestmentPlan(amount) {
    if (amount < 600) return "Starter Plan";
    if (amount < 2500) return "Growth Plan";
    return "Premium Plan";
}
function enableEdit() {
    document.getElementById("name").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("phone").disabled = false;
    document.getElementById("password").disabled = false;
    document.getElementById("save-btn").disabled = false;
}

function saveProfile() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // Simulate saving data (this should be replaced with backend integration)
    document.getElementById("username").innerText = name;
    document.getElementById("user-email").innerText = email;

    alert("Profile updated successfully!");

    // Disable fields after saving
    document.getElementById("name").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("save-btn").disabled = true;
}
document.addEventListener("DOMContentLoaded", function() {
    const updatesContainer = document.getElementById("updates-container");

    // Example updates (In a real-world app, this would be fetched from a database)
    const farmUpdates = [
        {
            title: "New Chickens Arrived!",
            description: "We just received a new batch of 500 healthy chicks ready for growth!",
            image: "images/chickens.jpg",
            timestamp: "March 10, 2025 - 10:30 AM"
        },
        {
            title: "Harvesting Day!",
            description: "Our maize fields are ready for harvesting. Workers are busy collecting fresh produce.",
            image: "images/harvest.jpg",
            timestamp: "March 9, 2025 - 4:00 PM"
        },
        {
            title: "New Feed Supply",
            description: "Fresh feed has been stocked up to ensure proper nutrition for the poultry.",
            image: "images/feed.jpg",
            timestamp: "March 8, 2025 - 12:15 PM"
        }
    ];

    // Function to display updates
    function loadUpdates() {
        updatesContainer.innerHTML = ""; // Clear previous updates

        farmUpdates.forEach(update => {
            let updateCard = document.createElement("div");
            updateCard.classList.add("update-card");

            updateCard.innerHTML = `
                <img src="${update.image}" alt="${update.title}">
                <h3>${update.title}</h3>
                <p>${update.description}</p>
                <p class="update-time">📅 ${update.timestamp}</p>
            `;

            updatesContainer.appendChild(updateCard);
        });
    }

    loadUpdates();
});
document.getElementById("createAccount").addEventListener("click", function() {
    window.location.href = "register.html";
});

document.getElementById("forgotPassword").addEventListener("click", function() {
    window.location.href = "password.html";
});
document.addEventListener("DOMContentLoaded", function () {
    // Form Submission
    document.getElementById("support-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Get input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            document.getElementById("form-response").textContent = "✅ Your message has been sent!";
            this.reset();
        } else {
            document.getElementById("form-response").textContent = "⚠️ Please fill in all fields.";
        }
    });

    // FAQ Toggle
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});