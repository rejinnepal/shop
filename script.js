window.onload = function() {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.style.display = 'block';
    welcomeMessage.textContent = 'Welcome to Shiva Shankar General Store! We are happy to serve you.';
}

const products = [
    { name: "Traditional Spices", description: "Authentic Nepali spices for your cooking needs" },
    { name: "Rice Selection", description: "Premium quality basmati and jasmine rice" },
    { name: "Tea Collection", description: "Various traditional and herbal teas" },
    { name: "Organic Lentils", description: "Various types of high-quality lentils" },
    { name: "Nepali Snacks", description: "Traditional snacks and crackers" },
    { name: "Homemade Pickles", description: "Traditional spicy and tangy pickles" },
    { name: "Fresh Flour", description: "Various types of flour for cooking" },
    { name: "Instant Noodles", description: "Popular instant noodles varieties" },
    { name: "Cooking Oils", description: "Various cooking oils for daily use" },
    { name: "Dairy Products", description: "Fresh dairy products and ghee" },
    { name: "Potato Chips", description: "Various flavors of fresh potato chips" },
    { name: "Cigarettes", description: "Different brands of cigarettes" },
    { name: "Fresh Eggs", description: "Farm fresh eggs" },
    { name: "Biscuits", description: "Wide variety of biscuits and cookies" },
    { name: "Soaps", description: "Bath and washing soaps" },
    { name: "Shampoo", description: "Various brands of shampoo" },
    { name: "Horlicks", description: "Nutritious health drink" },
    { name: "Hair Oil", description: "Different types of hair oils" },
    { name: "Fresh Corn", description: "Fresh sweet corn" },
    { name: "Fresh Potato", description: "Fresh potatoes from local farms" },
    { name: "Fresh Onions", description: "Fresh red and white onions" },
    { name: "Cold Drinks", description: "Various soft drinks and beverages" },
    { name: "Chocolates", description: "Wide range of chocolates and candies" },
    { name: "Soyabean", description: "High-quality soyabean" },
    { name: "Dry Fruits", description: "Assorted dry fruits and nuts" },
    { name: "Beaten Rice", description: "High quality beaten rice for quick snacks" },
    { name: "Puffed Rice", description: "Light and crispy puffed rice for snacks" },
    { name: "Toothbrush", description: "Various brands of toothbrushes" },
    { name: "Papad", description: "Traditional crispy papad" },
    { name: "Toothpaste", description: "Various brands of toothpaste" },
    { name: "Sour Sauce", description: "Traditional sour sauce for cooking" },
    { name: "Laundry Detergent", description: "Various brands of washing powder and detergents" }
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
        `;
        resultsList.appendChild(productDiv);
    });

    resultsDiv.appendChild(resultsList);
}