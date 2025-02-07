// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // API endpoint for fetching products
    const apiUrl = "https://dummyjson.com/products";
    // Select the product grid container in the HTML
    const productsContainer = document.querySelector(".grid");
    // Fetch products from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const products = data.products; // Extract product array
            // Clear existing products
            productsContainer.innerHTML = "";
            // Loop through API products and display them
            products.forEach(product => {
                // Create a new div for each product
                const productElement = document.createElement("div");
                productElement.className = "product-card";
                // Add product content (image, title, description, and price)
                productElement.innerHTML = `
                    <img src="${product.thumbnail}" alt="${product.title}" />
                    <h2>${product.title}</h2>
                    <p>${product.description.substring(0, 100)}...</p>
                    <p class="price">$${product.price}</p>
                `;
                // Append the product element to the product grid container
                productsContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});