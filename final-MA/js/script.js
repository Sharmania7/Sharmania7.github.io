const slides = document.querySelectorAll(".mySlides");

// Set the current slide index to 0.
let currentSlideIndex = 0;

// Display the current slide and hide all other slides.
function showSlide(slideIndex) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

// Update the slide index when the user clicks the next or previous buttons.
function plusSlides(n) {
  currentSlideIndex += n;

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  showSlide(currentSlideIndex);
}

// Display the first slide when the page loads.
showSlide(currentSlideIndex);

function callPhoneNumber(phoneNumber) {
  window.location.href = 'tel:' + phoneNumber;
}



// Initialize orders array

let orders = [];

function updateOrderDetails() {
    const mainCourses = document.getElementById("mainCourses").value;
    const specialties = document.getElementById("specialties").value;
    const tandoori = document.getElementById("tandoori").value;
    const ricenaan = document.getElementById("ricenaan").value;
    const quantity = document.getElementById("quantity").value;

    const newOrder = {
        mainCourses,
        specialties,
        tandoori,
        ricenaan,
        quantity,
    };

    orders.push(newOrder);
}

function displayOrderSummary() {
    const orderSummaryElement = document.getElementById("orderSummary");
    orderSummaryElement.innerHTML = "";

    orders.forEach((order, index) => {
        const orderDiv = document.createElement("div");
        orderDiv.textContent = `Order ${index + 1}:`;

        for (const key in order) {
            if (order[key] !== "none" && order[key] !== "") {
                const item = document.createElement("div");
                item.textContent = `${key}: ${order[key]}`;
                orderDiv.appendChild(item);
            }
        }

        orderDiv.appendChild(document.createElement("br"));

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeOrder(index));
        orderDiv.appendChild(removeButton);

        orderSummaryElement.appendChild(orderDiv);
    });

    calculateTotalPrice();
}

function calculateTotalPrice() {
    let totalPrice = 0;

    orders.forEach(order => {
        for (const key in order) {
            if (key !== "quantity" && order[key] !== "none" && order[key] !== "") {
                const itemPrice = parseFloat(document.getElementById(key).options[document.getElementById(key).selectedIndex].getAttribute("data-price"));
                const subtotal = itemPrice * order.quantity;
                totalPrice += subtotal;
            }
        }
    });

    const tax = 0.1 * totalPrice;
    totalPrice += tax;

    document.getElementById('total').innerText = '$' + totalPrice.toFixed(2);
}

function removeOrder(index) {
    orders.splice(index, 1);
    displayOrderSummary();

    if (orders.length === 0) {
        document.getElementById('total').innerText = '$0.00';
    }
}

function addToOrder() {
    updateOrderDetails();
    displayOrderSummary();
}

function isIssaquah(orderType) {
    return orderType.toLowerCase() === 'takeout';
}

function handleOrderTypeChange() {
    const orderType = document.getElementById('orderType').value;
    const addressInput = document.getElementById('addressInput');

    if (isIssaquah(orderType)) {
        addressInput.style.display = 'block';
    } else {
        addressInput.style.display = 'none';
    }
}

function checkDeliveryAddress() {
    const address = document.getElementById('address').value;
    const orderType = document.getElementById('orderType').value;
    const deliveryMessage = document.getElementById('deliveryMessage');

    if (isIssaquah(orderType) && !address.toLowerCase().includes('issaquah')) {
        deliveryMessage.innerText = 'Sorry, we can\'t deliver to you!';
    } else {
        deliveryMessage.innerText = '';
       
    }
}

document.getElementById('orderType').addEventListener('change', handleOrderTypeChange);

displayOrderSummary();


