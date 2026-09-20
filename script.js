document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Generar múltiples tarjetas de producto para simular la vista del wireframe
    const productGrid = document.getElementById('product-grid');
    const productCardTemplate = `
        <div class="product-card">
            <div class="product-image"></div>
            <div class="product-info">
                <h3>Collar Chunky Dorado</h3>
                <p class="price">$35.00 USD</p>
                <p class="desc">Cadena gruesa, eslabones grandes y un acabado elegante para cualquier ocasión.</p>
                <button class="add-to-cart">AGREGAR AL CARRITO</button>
            </div>
        </div>
    `;

    // Añadir 7 tarjetas más a la que ya existe en el HTML (8 en total)
    for (let i = 0; i < 7; i++) {
        productGrid.insertAdjacentHTML('beforeend', productCardTemplate);
    }

    // 2. Lógica para los botones de "Agregar al carrito"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productInfo = e.target.closest('.product-info');
            const productName = productInfo.querySelector('h3').innerText;
            alert(`¡Has agregado "${productName}" a tu carrito!`);
        });
    });

    // 3. Simular navegación en el menú de categorías
    const categoryLinks = document.querySelectorAll('.category-menu a');
    const sectionTitle = document.querySelector('.section-title');

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evita recargar la página
            const selectedCategory = e.target.innerText.toUpperCase();
            sectionTitle.innerText = `CATEGORÍA DESTACADA: ${selectedCategory}`;
        });
    });
});