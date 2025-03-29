// Sidebar functionality
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
    
    // Save state to localStorage
    localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
}

// Initialize sidebar state on page load
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const wasCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    
    if (wasCollapsed) {
        sidebar.classList.add('collapsed');
    }
    
    // Add active class to current page link
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

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
    newRow.innerHTML = `\
        <td>GHS ${amount}</td>\
        <td>${getInvestmentPlan(amount)}</td>\
        <td>${new Date().toLocaleDateString()}</td>\
        <td>✅ Completed</td>\
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
    if (updatesContainer) {
        // Example updates (In a real-world app, this would be fetched from a database)
        const farmUpdates = [
            {
                title: "New Chickens Arrived!",
                description: "We just received a new batch of 500 healthy chicks for our poultry expansion project.",
                date: "2025-03-29",
                type: "expansion"
            },
            {
                title: "Weekly Health Check Complete",
                description: "All chickens passed their weekly health inspection. Growth rates are above target.",
                date: "2025-03-28",
                type: "health"
            },
            {
                title: "Farm Infrastructure Update",
                description: "New automated feeding systems have been installed in Sections A and B.",
                date: "2025-03-27",
                type: "infrastructure"
            }
        ];

        // Render updates
        farmUpdates.forEach(update => {
            const updateElement = document.createElement('div');
            updateElement.className = `update-card ${update.type}`;
            updateElement.innerHTML = `
                <h3>${update.title}</h3>
                <p>${update.description}</p>
                <small>${new Date(update.date).toLocaleDateString()}</small>
            `;
            updatesContainer.appendChild(updateElement);
        });
    }
});