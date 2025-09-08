'use client'

import { useCart } from "@/context/CartContext";
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function CartSidebar() {
  const { items, removeItem, clearCart } = useCart();
  const [open, setOpen] = useState(false)

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-5 right-5 bg-white text-blue-800 px-4 py-2 rounded shadow-lg z-50"
      >
        Cart ({items.length})
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform z-50 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Items */}
        <div className="p-4 flex flex-col gap-4 overflow-y-auto h-[calc(100%-140px)]">
          {items.length === 0 && <p className="text-gray-500">Cart is empty</p>}
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600">{item.quantity} × ₹{item.price}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <p className="font-semibold mb-3">Total: ₹{total}</p>
          <button
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mb-2"
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Checkout
          </button>
        </div>
      </div>
    </>
  )
}
