import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <main className="container mx-auto px-4 py-12 flex-grow">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to FarmFresh AI
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with local farmers, enjoy fresh produce, and discover AI-personalized subscription boxes — fresh from the farm, straight to your door.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/marketplace"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-lg"
            >
              Discover Marketplace
            </a>
            <a
              href="/subscription"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-lg"
            >
              Get Your Subscription
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Support Local Farmers</h3>
            <p className="text-gray-600">
              List your produce, connect directly with buyers, and gain insights with our analytics dashboard.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Fresh for Consumers</h3>
            <p className="text-gray-600">
              Shop local produce or subscribe for curated boxes tailored to your preferences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Powered by AI</h3>
            <p className="text-gray-600">
              Enjoy personalized recommendations and smart planning for farmers and buyers alike.
            </p>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose FarmFresh AI?</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We’re passionate about connecting communities with fresh, sustainable produce. Our AI makes it easy to find the best local options, while farmers benefit from direct sales and data-driven insights.
          </p>
        </section>
      </main>

      
    </div>
  );
};

export default HomePage;
