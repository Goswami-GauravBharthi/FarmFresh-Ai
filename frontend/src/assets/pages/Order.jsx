import React from 'react';

function OrderConfirmation() {
  // Mock order data
  const order = {
    _id: 'ORD123456',
    user: 'U001',
    items: [
      { product: 'P001', quantity: 2, priceAtPurchase: 3.99 },
      { product: 'P002', quantity: 1, priceAtPurchase: 5.99 }
    ],
    totalAmount: 13.97,
    deliveryAddress: {
      street: '123 Main St',
      city: 'Springfield',
      state: 'CA',
      zip: '90210'
    },
    deliveryDate: '2025-08-10',
    status: 'confirmed',
    paymentStatus: 'paid',
    paymentMethod: 'Credit Card',
    isSubscriptionOrder: false,
    subscriptionBox: null,
    farmer: 'F001'
  };

  const users = { U001: 'Jane Doe' };
  const products = {
    P001: { name: 'Organic Apples', unit: 'lb' },
    P002: { name: 'Free-Range Eggs', unit: 'dozen' }
  };
  const farmers = { F001: 'Green Valley Farm' };

  const formattedAddress = `${order.deliveryAddress.street}, ${order.deliveryAddress.city}, ${order.deliveryAddress.state} ${order.deliveryAddress.zip}`;
  const formattedDate = new Date(order.deliveryDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
     

      {/* Main */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        {/* Order Confirmation Message */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Confirmation</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your order, {users[order.user]}! Your order has been successfully placed.
          </p>
        </section>

        {/* Order Details */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600"><strong>Order ID:</strong> {order._id}</p>
              <p className="text-gray-600"><strong>Farmer:</strong> {farmers[order.farmer]}</p>
              <p className="text-gray-600"><strong>Delivery Address:</strong> {formattedAddress}</p>
              <p className="text-gray-600"><strong>Delivery Date:</strong> {formattedDate}</p>
            </div>
            <div>
              <p className="text-gray-600">
                <strong>Order Status:</strong>
                <span className={`ml-2 px-2 py-1 rounded text-sm ${
                  order.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                  order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </p>
              <p className="text-gray-600">
                <strong>Payment Status:</strong>
                <span className={`ml-2 px-2 py-1 rounded text-sm ${
                  order.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
                  order.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                </span>
              </p>
              <p className="text-gray-600"><strong>Payment Method:</strong> {order.paymentMethod}</p>
              <p className="text-gray-600"><strong>Order Type:</strong> {order.isSubscriptionOrder ? 'Subscription' : 'One-Time'}</p>
              {order.isSubscriptionOrder && order.subscriptionBox && (
                <p className="text-gray-600"><strong>Subscription Box:</strong> {order.subscriptionBox}</p>
              )}
            </div>
          </div>
        </section>

        {/* Order Items */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Items</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-600 border-b">
                  <th className="py-2 pr-4">Product</th>
                  <th className="py-2 pr-4">Quantity</th>
                  <th className="py-2 pr-4">Price</th>
                  <th className="py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 pr-4">{products[item.product].name}</td>
                    <td className="py-2 pr-4">{item.quantity} {products[item.product].unit}</td>
                    <td className="py-2 pr-4">${item.priceAtPurchase.toFixed(2)} / {products[item.product].unit}</td>
                    <td className="py-2">${(item.quantity * item.priceAtPurchase).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-lg font-semibold text-gray-800 mt-4 text-right">
            Total Amount: ${order.totalAmount.toFixed(2)}
          </p>
        </section>

        {/* Continue Shopping Button */}
        <div className="mt-8 text-center">
          <a
            href="/marketplace"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-lg"
          >
            Continue Shopping
          </a>
        </div>
      </main>


    </div>
  );
}

export default OrderConfirmation;
