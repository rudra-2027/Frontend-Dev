const API_URL = 'https://fakestoreapi.com/products';

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.title;
    image.loading = 'lazy';

    const title = document.createElement('h3');
    title.textContent = product.title;

    const price = document.createElement('p');
    price.textContent = `$${product.price.toFixed(2)}`;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    
    return card;
}

async function fetchAndDisplayProducts() {
    const container = document.getElementById('product-container');
    const errorMessage = document.getElementById('error-message');
    container.innerHTML = '';
    errorMessage.style.display = 'none';

    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const products = await response.json();
        
        console.log('--- Product List (Console Output) ---');
        
        products.forEach(product => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price.toFixed(2)}`);
            console.log(`Image: ${product.image}`);

            
            const card = createProductCard(product);
            container.appendChild(card);
        });

    } catch (error) {
        console.error('Failed to fetch products:', error);
        errorMessage.textContent = 'Failed to load products. Please try again.';
        errorMessage.style.display = 'block';
    }
}

fetchAndDisplayProducts();