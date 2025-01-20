
const contractors = [
    { name: "John Doe", experience: 5, rating: 4.5 },
    { name: "Jane Smith", experience: 8, rating: 4.8 },
    { name: "Alex Johnson", experience: 3, rating: 4.1 }
];

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Function to search contractors
function searchContractors() {
    const searchTerm = document.getElementById('searchContractors').value.toLowerCase();
    const contractorList = document.getElementById('contractorList');
    contractorList.innerHTML = '';

    const filteredContractors = contractors.filter(contractor => 
        contractor.name.toLowerCase().includes(searchTerm)
    );

    if (filteredContractors.length > 0) {
        filteredContractors.forEach(contractor => {
            contractorList.innerHTML += `<li>${contractor.name} - Experience: ${contractor.experience} years, Rating: ${contractor.rating}</li>`;

        });
    } else {
        contractorList.innerHTML = '<li>No contractors found.</li>';
    }
}

// Function to add product
function addProduct(event) {
    event.preventDefault();
    const cropName = document.getElementById('cropName').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const productList = document.getElementById('productList');

    const cropImage = document.getElementById('cropImage').files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        productList.innerHTML += `
            <div>
                <img src="${e.target.result}" alt="${cropName}" style="width: 100px; height: 100px;"/>
                <p>Crop: ${cropName}, Quantity: ${quantity} tons, Price: $${price}/ton</p>
            </div>
        `;
    }
    
    if (cropImage) {
        reader.readAsDataURL(cropImage);
    }

    document.getElementById('productForm').reset();
}

// Function to list products in the marketplace
function listProducts() {
    const marketplaceList = document.getElementById('marketplaceList');
    marketplaceList.innerHTML = document.getElementById('productList').innerHTML;
}

// Chart.js for Sales Trend Chart
const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sales',
            data: [1200, 1900, 3000, 5000, 2300],
            borderColor: 'rgba(58, 156, 53, 1)',
            fill: false,
            tension: 0.1
        }]
    },
    options: {
        responsive: true
    }
});