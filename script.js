window.onload = function() {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.style.display = 'block';
    welcomeMessage.textContent = 'Welcome to Shiva Shankar General Store! We are happy to serve you.';
}

const products = [
    { name: "Traditional Spices", price: 9.99, description: "Authentic Nepali spices for your cooking needs" },
    { name: "Rice Selection", price: 24.99, description: "Premium quality basmati and jasmine rice" },
    { name: "Tea Collection", price: 12.99, description: "Various traditional and herbal teas" },
    { name: "Organic Lentils", price: 8.99, description: "Various types of high-quality lentils" },
    { name: "Nepali Snacks", price: 6.99, description: "Traditional snacks and crackers" },
    { name: "Homemade Pickles", price: 7.99, description: "Traditional spicy and tangy pickles" },
    { name: "Fresh Flour", price: 5.99, description: "Various types of flour for cooking" },
    { name: "Instant Noodles", price: 4.99, description: "Popular instant noodles varieties" },
    { name: "Cooking Oils", price: 15.99, description: "Various cooking oils for daily use" },
    { name: "Dairy Products", price: 11.99, description: "Fresh dairy products and ghee" }
];

function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '';

    if (searchTerm.trim() === '') {
        resultsDiv.innerHTML = '<p class="error">Please enter a search term</p>';
        return;
    }

    const matchingProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );

    if (matchingProducts.length === 0) {
        resultsDiv.innerHTML = '<p class="no-results">No products found matching your search</p>';
        return;
    }

    const resultsList = document.createElement('div');
    resultsList.className = 'search-results-list';

    matchingProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'search-result-item';
        productDiv.innerHTML = `
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <p class="price">$${product.price}</p>
        `;
        resultsList.appendChild(productDiv);
    });

    resultsDiv.appendChild(resultsList);
}

function calculateDiscount() {
    const purchaseAmount = parseFloat(document.getElementById('purchase-amount').value);
    const resultDiv = document.getElementById('discount-result');

    if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
        resultDiv.innerHTML = 'Please enter a valid amount';
        resultDiv.className = 'show error';
        return;
    }

    let discountAmount = 0;
    let finalPrice = purchaseAmount;

    if (purchaseAmount > 50) {
        discountAmount = purchaseAmount * 0.10;
        finalPrice = purchaseAmount - discountAmount;
    }

    resultDiv.innerHTML = `
        <p>Purchase Amount: $${purchaseAmount.toFixed(2)}</p>
        ${discountAmount > 0 ? `<p>Discount Amount: $${discountAmount.toFixed(2)}</p>` : '<p>No discount applicable</p>'}
        <p class="final-price">Final Price: $${finalPrice.toFixed(2)}</p>
    `;
    resultDiv.className = 'show';
}