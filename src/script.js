const productsContainer = document.querySelector('.product-row');

const products = [
  {
    name: 'Product 1',
    description: 'Description 1',
    imageUrl: 'https://assets.codepen.io/10596169/hipkicks-HcqA34-uWo4-unsplash__1_-removebg-preview.png'
  },
  {
    name: 'Product 2',
    description: 'Description 2',
    imageUrl: 'https://assets.codepen.io/10596169/mike-meyers-v8XaVfyo41Q-unsplash-removebg-preview.png'
  },
  {
    name: 'Product 3',
    description: 'Description 3',
    imageUrl: 'https://assets.codepen.io/10596169/pedro-barros-d03GRN5LKm0-unsplash__1_-removebg-preview.png'
  },
  {
    name: 'Product 4',
    description: 'Description 4',
    imageUrl: 'https://assets.codepen.io/10596169/shri-ZE2RoUG8Ue4-unsplash-removebg-preview.png'
  },
  {
    name: 'Product 5',
    description: 'Description 5',
    imageUrl: 'https://assets.codepen.io/10596169/H+PROJECT.png'
  },
  {
    name: 'Product 6',
    description: 'Description 6',
    imageUrl: 'https://assets.codepen.io/10596169/kiran-ck-cDrIiiptFqE-unsplash-removebg-preview_1.png'
  },
  {
    name: 'Product 7',
    description: 'Description 7',
    imageUrl: 'https://assets.codepen.io/10596169/kiran-ck-DQ9dW9v65Fc-unsplash-removebg-preview.png'
  },
  {
    name: 'Product 8',
    description: 'Description 8',
    imageUrl: 'https://assets.codepen.io/10596169/kiran-ck-iuEfQe4ozpo-unsplash-removebg-preview+%281%29.png'
  },
  {
    name: 'Product 9',
    description: 'Description 9',
    imageUrl: 'https://assets.codepen.io/10596169/cas-verrest-lGBtfnQvOoI-unsplash-removebg-preview.png'
  },
];

const productsPerRow = 3; // Number of products to display per row

let productRow;
for (let i = 0; i < products.length; i++) {
  if (i % productsPerRow === 0) {
    // Create a new product row at the start of each group of products
    productRow = document.createElement('div');
    productRow.classList.add('product-row');
    productsContainer.appendChild(productRow);
  }

  const product = products[i];

  const productDiv = document.createElement('div');
  productDiv.classList.add('product');

  const productImageDiv = document.createElement('div');
  productImageDiv.classList.add('product-image');

  const productImage = document.createElement('img');
  productImage.src = product.imageUrl;
  productImage.alt = 'product-image';

  const productOverlay = document.createElement('div');
  productOverlay.classList.add('product-overlay');

  productImageDiv.appendChild(productImage);
  productDiv.appendChild(productImageDiv);
  productDiv.appendChild(productOverlay);
  productRow.appendChild(productDiv);

  productDiv.addEventListener('click', () => {
    const productDetailsImage = document.querySelector('.product-details-image img');
    const productNameDetails = document.querySelector('.product-details-name');
    const productDescriptionDetails = document.querySelector('.product-details-description');

    productDetailsImage.src = product.imageUrl;
    productNameDetails.textContent = product.name;
    productDescriptionDetails.textContent = product.description;

    document.querySelector('.product-details-overlay').style.display = 'flex';
  });
}

const productDetailsOverlay = document.querySelector('.product-details-overlay');
const closeDetailsBtn = document.querySelector('.close-details');

productDetailsOverlay.addEventListener('click', (event) => {
  if (event.target === productDetailsOverlay) {
    productDetailsOverlay.style.display = 'none';
  }
});

closeDetailsBtn.addEventListener('click', () => {
  productDetailsOverlay.style.display = 'none';
});
