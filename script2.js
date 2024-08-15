// Toggle dark mode
document.getElementById("toggleDarkMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Filter menu items based on category
function filterMenu(category) {
    var items = document.querySelectorAll(".menu-item");
    items.forEach(function (item) {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Search menu items
function searchMenu() {
    var query = document.getElementById("searchBar").value.toLowerCase();
    var items = document.querySelectorAll(".menu-item");
    items.forEach(function (item) {
        var itemName = item.querySelector("h3").innerText.toLowerCase();
        if (itemName.includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Handle newsletter subscription
document.getElementById("newsletterForm").addEventListener("submit", function (event) {
    event.preventDefault();
    window.open('https://example.com/newsletter', '_blank');
});

// Handle order submission
document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault();
    window.open('https://example.com/order-confirmation', '_blank');
});

// Handle testimonial navigation
var testimonials = document.querySelectorAll(".testimonial-item");
var currentTestimonial = 0;

document.querySelector(".testimonial-next").addEventListener("click", function () {
    testimonials[currentTestimonial].classList.remove("active");
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add("active");
});

document.querySelector(".testimonial-prev").addEventListener("click", function () {
    testimonials[currentTestimonial].classList.remove("active");
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    testimonials[currentTestimonial].classList.add("active");
});

// Handle Chat with Us button
document.getElementById("chatButton").addEventListener("click", function () {
    var chatWindow = document.getElementById("chatWindow");
    chatWindow.style.display = chatWindow.style.display === "none" ? "block" : "none";
});

// Handle sending a message in the chat window
document.getElementById("sendMessage").addEventListener("click", function () {
    var chatInput = document.getElementById("chatInput");
    var chatMessages = document.getElementById("chatMessages");
    if (chatInput.value.trim()) {
        chatMessages.innerHTML += "<p>User: " + chatInput.value + "</p>";
        chatInput.value = "";
    }
});

// Handle tracking form submission
document.getElementById("trackingForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Display a popup message for the tracking form
    showPopup('Tracking information not available. Please contact support.');
});

// Function to show popup messages
function showPopup(message) {
    alert(message);
}

document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Display a popup message upon form submission
    showPopup('Thank you for your order. We will contact you shortly.');
});

// Handle tracking form submission
document.getElementById("trackingForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Display a popup message for the tracking form
    showPopup('Tracking information is not available. Please try again later.');
});
document.querySelectorAll(".social-media a").forEach(function (icon) {
    icon.addEventListener("click", function (event) {
        event.preventDefault();
        var platform = event.currentTarget.getAttribute("data-platform");
        var url = '';
        switch (platform) {
            case 'facebook':
                url = 'https://www.facebook.com/yourpage';
                break;
            case 'twitter':
                url = 'https://www.twitter.com/yourprofile';
                break;
            case 'youtube':
                url = 'https://www.youtube.com/yourchannel';
                break;
            case 'instagram':
                url = 'https://www.instagram.com/yourprofile';
                break;
            default:
                break;
        }
        window.open(url, '_blank');
    });
});
