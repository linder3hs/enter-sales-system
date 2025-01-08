const productForm = document.getElementById("productForm");
const productList = document.getElementById("productList");

// array de productos
const products = [];

productForm.addEventListener("submit", (e) => {
  // Evitar que el navegador recargue la página
  e.preventDefault();

  // DOM
  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  const productStock = document.getElementById("productStock").value;

  const newProduct = new Product(productName, productPrice, productStock);
  products.push(newProduct);

  const productRow = document.createElement("tr");
  productRow.innerHTML = `
      <td>${productName}</td>
      <td>${productPrice}</td>
      <td>${productStock}</td>
      <td>
        <button class="btn btn-sm btn-warning update-stock">Actualizar Stock</button>
      </td>
    `;

  productList.appendChild(productRow);

  productForm.reset();
});

productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("update-stock")) {
    const row = e.target.closest("tr");
    const stockCell = row.children[2];
    const newStock = prompt("Ingrese el nuevo stock:", stockCell.textContent);
    if (newStock !== null) {
      stockCell.textContent = newStock;
    }
  }
});

clientForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const clientName = document.getElementById("clientName").value;
  const clientEmail = document.getElementById("clientEmail").value;

  const clientRow = document.createElement("tr");
  clientRow.innerHTML = `
      <td>${clientName}</td>
      <td>${clientEmail}</td>
      <td>
        <button class="btn btn-sm btn-warning update-email">Actualizar Email</button>
      </td>
    `;

  clientList.appendChild(clientRow);

  clientForm.reset();
});

clientList.addEventListener("click", (e) => {
  if (e.target.classList.contains("update-email")) {
    const row = e.target.closest("tr");
    const emailCell = row.children[1];
    const newEmail = prompt("Ingrese el nuevo email:", emailCell.textContent);
    if (newEmail !== null) {
      emailCell.textContent = newEmail;
    }
  }
});
