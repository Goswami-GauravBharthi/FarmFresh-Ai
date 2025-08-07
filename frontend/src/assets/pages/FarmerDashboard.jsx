
import React, { useState } from 'react';

const Marketplace = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');

  const products = [
    {
      id: 1,
      farmer_id: 'F001',
      name: 'Organic Apples',
      description: 'Crisp, juicy apples grown organically in sunny orchards.',
      price_per_unit: 3.99,
      quantity: 50,
      unit: 'lb',
      image: 'https://via.placeholder.com/150?text=Apples',
      created_at: '2025-08-01',
    },
    {
      id: 2,
      farmer_id: 'F002',
      name: 'Fresh Carrots',
      description: 'Sweet, crunchy carrots harvested fresh from the field.',
      price_per_unit: 2.49,
      quantity: 100,
      unit: 'lb',
      image: 'https://via.placeholder.com/150?text=Carrots',
      created_at: '2025-08-03',
    },
    {
      id: 3,
      farmer_id: 'F003',
      name: 'Free-Range Eggs',
      description: 'Farm-fresh eggs from happy, free-range hens.',
      price_per_unit: 5.99,
      quantity: 30,
      unit: 'dozen',
      image: 'https://via.placeholder.com/150?text=Eggs',
      created_at: '2025-08-02',
    },
    {
      id: 4,
      farmer_id: 'F004',
      name: 'Blueberries',
      description: 'Plump, sweet blueberries picked at peak ripeness.',
      price_per_unit: 4.99,
      quantity: 20,
      unit: 'pint',
      image: 'https://via.placeholder.com/150?text=Blueberries',
      created_at: '2025-08-04',
    },
    {
      id: 5,
      farmer_id: 'F002',
      name: 'Heirloom Tomatoes',
      description: 'Flavorful tomatoes with vibrant colors, grown organically.',
      price_per_unit: 4.49,
      quantity: 40,
      unit: 'lb',
      image: 'https://via.placeholder.com/150?text=Tomatoes',
      created_at: '2025-08-05',
    },
  ];

 

  const locations = {
    F001: 'Bhavnagar',
    F002: 'Mahuva',
    F003: 'Rajkot',
  };

  const getProductType = (product) => {
    if (product.name.includes('Apple') || product.name.includes('Blueberries')) return 'Fruit';
    if (product.name.includes('Carrot') || product.name.includes('Tomato')) return 'Vegetable';
    if (product.name.includes('Egg')) return 'Dairy';
    return 'Other';
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || getProductType(product) === filterType;
    const matchesLocation = filterLocation === 'all' || locations[product.farmer_id] === filterLocation;
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Fresh Produce</h2>
          <p className="text-gray-600 mb-6">Discover local fruits, vegetables, and more from farmers near you.</p>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search for produce or descriptions..."
              className="border border-gray-300 rounded-lg p-3 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-green-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="Fruit">Fruit</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Dairy">Dairy</option>
              <option value="Other">Other</option>
            </select>
            <select
              className="border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
            >
              <option value="all">All Locations</option>
              <option value="Bhavnagar">Bhavnagar</option>
              <option value="Mahuva">Mahuva</option>
              <option value="Rajkot">Rajkot</option>
            </select>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-600 col-span-full text-center">No products match your search or filters.</p>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="text-gray-600">{product.price_per_unit.toFixed(2)} / {product.unit}</p>
                <p className="text-sm text-gray-500">Available: {product.quantity} {product.unit}</p>
                <button
                  className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-full"
                  onClick={() => alert(`Added ${product.name} to basket`)}
                >
                  Add to Basket
                </button>
              </div>
            ))
          )}
        </section>
      </main>

    </div>
  );
};

export default Marketplace;



