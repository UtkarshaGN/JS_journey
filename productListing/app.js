
//
// Product Listing Page

let getproductList = async () => {
    try {
        // Fetch data from API
        let response = await fetch("https://dummyjson.com/products");
        let finalData = await response.json();

        // Get products array
        let products = finalData.products;

        // Select container
        let productDiv = document.querySelector(".products-grid");

        let cardItem = "";

        // Loop through products
        products.forEach((obj) => {
            let { title, description, price, thumbnail } = obj;

            cardItem += `
            <div class="product-card">
                <div class="product-image">
                    <img src="${thumbnail}" width="100%">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${title}</h3>
                    <p class="product-description">${description}</p>
                    
                    <div class="product-footer">
                        <span class="product-price">$${price}</span>
                        <button class="btn-add">Add to Cart</button>
                    </div>
                </div>
            </div>`;
        });

        // Display on UI
        productDiv.innerHTML = cardItem;

    } catch (error) {
        console.log("Error:", error);
    }
};

// Call function
getproductList();