let cart = [];

function addToCart(product, price, imgUrl) {
    cart.push({ product, price, imgUrl });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Keranjang Anda kosong.</p>";
        totalPrice.innerHTML = "Total: Rp 0";
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.imgUrl}" alt="${item.product}">
                <p>${item.product} - Rp ${item.price.toLocaleString()}</p>
                <button onclick="removeFromCart(${index})">Hapus</button>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalPrice.innerHTML = `Total: Rp ${total.toLocaleString()}`;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length > 0) {
        alert("Anda telah melanjutkan ke pembayaran!");
        cart = [];
        updateCart();
    } else {
        alert("Keranjang Anda kosong. Silakan tambahkan produk.");
    }
}

function submitContactForm(event) {
    event.preventDefault();
    const form = document.getElementById('contact-form');
    alert(`Pesan dari ${form.name.value} telah dikirim!`);
    form.reset();
}

function showPage(pageId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = (section.id === pageId) ? 'block' : 'none';
    });
}

// Default show home page
showPage('home');
