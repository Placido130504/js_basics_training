function fetchProductsFromDatabase() {
  return new Promise((resolve, reject) => {
    // Toggle this to false to test the catch block / reject case
    const isServerAvailable = true; 

    setTimeout(() => {
      if (isServerAvailable) {
        const products = [
          { id: 1, name: 'Wireless Mouse', price: 799, stock: 12 },
          { id: 2, name: 'Mechanical Keyboard', price: 3499, stock: 0 },   // Out of stock
          { id: 3, name: 'USB-C Hub', price: 1299, stock: 5 },
          { id: 4, name: '4K Monitor', price: 24999, stock: 3 },
          { id: 5, name: 'HD Webcam', price: 4500, stock: 0 },             // Out of stock
          { id: 6, name: 'Gaming Headset', price: 5999, stock: 8 },
          { id: 7, name: 'Bluetooth Speaker', price: 2999, stock: 15 },
          { id: 8, name: '1TB External SSD', price: 8999, stock: 7 },
          { id: 9, name: 'Ergonomic Office Chair', price: 15499, stock: 2 },
          { id: 10, name: 'Laptop Stand', price: 1499, stock: 20 },
          { id: 11, name: 'HDMI Cable 2m', price: 499, stock: 0 },         // Out of stock
          { id: 12, name: 'RGB Mouse Pad', price: 999, stock: 11 },
          { id: 13, name: 'Desk Ring Light', price: 1999, stock: 4 },
          { id: 14, name: 'Wireless Charger', price: 1249, stock: 9 },
          { id: 15, name: 'Graphic Drawing Tablet', price: 7499, stock: 0 } // Out of stock
        ];
        resolve(products);
      } else {
        reject('Error: Unable to connect to the database server.');
      }
    }, 2000); // 2-second network delay simulation
  });
}

// Generates the inventory report using the fetched product data
async function generateInventoryReport() {
  try {
    // 1. Fetch the product list using await
    const products = await fetchProductsFromDatabase();

    // 2. Filter only the products that are currently in stock
    const inStockProducts = products.filter(product => product.stock > 0);

    // 3. Calculate total inventory value (price * stock) for in-stock items
    const totalInventoryValue = inStockProducts.reduce(
      (total, product) => total + (product.price * product.stock),
      0
    );

    // 4. Generate the final structured report object
    const report = {
      totalProducts: products.length,
      inStockCount: inStockProducts.length,
      totalInventoryValue: totalInventoryValue
    };

    // 5. Display the final report in the console
    console.log('Inventory Report:', report);

  } catch (error) {
    // Error handling block if the server promise rejects
    console.error('Failed to generate inventory report:', error);
  }
}

generateInventoryReport();
