import React from 'react'
import Header from '../components/Header'

function Order() {
  const totalAmount = 100;
  return (
    <>
    <div className='bg-[#f7eddf]'>
    <Header/>
    <div className="min-h-screen w-screen bg-[#f7eddf] flex flex-col items-center justify-center px-4 py-6">
      
      <h1 className="text-4xl font-extrabold text-black">Order Here</h1>
      <p className="text-lg mb-6">ऑर्डर करा</p>

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
  >
    <option value="">--Choose an item--</option>
    <option value="chapati"> Chapati ( गहू )</option>
    <option value="makka">Makyachi Bhakri (मका)</option>
    <option value="tandul">Tandulachi Bhakri (तांदूळ)</option>
    <option value="jowar">Jowarichi Bhakri (ज्वारी)</option>
    <option value="bajra">Bajrichi Bhakri (बाजरी)</option>
    <option value="nachni">Nachnichi Bhakri (नाचणी)</option>
    

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
          Total amount : {totalAmount}
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