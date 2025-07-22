import React, { useState } from 'react'
import Header from '../components/Header'

function Order() {
  // Price map for each item
  const priceMap = {
    chapati: 10,
    makka: 15,
    tandul: 12,
    jowar: 14,
    bajra: 13,
    nachni: 16,
  };

  // State for selected item and quantity
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Calculate total amount
  const totalAmount = selectedItem && priceMap[selectedItem]
    ? priceMap[selectedItem] * quantity
    : 0;
  return (
    <>
    <div className='bg-[#f7eddf]'>
    <Header/>
    <div className="min-h-screen w-screen bg-[#f7eddf] flex flex-col items-center justify-center px-4 py-6">
      
      <h2 className="text-4xl logo font-extrabold text-black">Order Here</h2>
      <p className="text-lg mb-6 marat">ऑर्डर करा</p>

      <form
        action="https://formspree.io/f/yourFormId"
        method="POST"
        className="w-full  space-y-4 md:px-40"
      >
        <div>
          <label className="block mb-1">Name :</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1">Phone No :</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div>
  <label htmlFor="item" className="block mb-1">Item :</label>
  <select
    name="item"
    id="item"
    className="w-full border rounded-md px-3 py-2"
    required
    value={selectedItem}
    onChange={e => setSelectedItem(e.target.value)}
  >
    <option value="">--Choose an item--</option>
    <option value="chapati"> Chapati ( गहू ) - ₹10</option>
    <option value="makka">Makyachi Bhakri (मका) - ₹15</option>
    <option value="tandul">Tandulachi Bhakri (तांदूळ) - ₹12</option>
    <option value="jowar">Jowarichi Bhakri (ज्वारी) - ₹14</option>
    <option value="bajra">Bajrichi Bhakri (बाजरी) - ₹13</option>
    <option value="nachni">Nachnichi Bhakri (नाचणी) - ₹16</option>
  </select>
</div>

        <div>
          <label className="block mb-1">Quantity :</label>
          <input
            type="number"
            name="quantity"
            required
            min="1"
            className="w-full border rounded-md px-3 py-2"
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
          />
        </div>

        <div>
          <label className="block mb-1">Address :</label>
          <textarea
            name="address"
            required
            rows="4"
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div className="text-right font-semibold text-lg">
          Total amount : ₹{totalAmount}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white font-bold py-2 rounded-md hover:bg-gray-800"
        >
          ORDER
        </button>
      </form>

      <p className="text-center mt-6 text-sm text-gray-800 max-w-md">
        Welcome to My Delhi, the home of Delhi-cious Indian street food. Our fun, vibrant, and eclectic restaurant serves up authen
      </p>
    </div>
    </div>
    </>
  )
}

export default Order