import { useEffect, useState } from 'react'

const Dashboard = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    
    setCategories([
      { id: 1, name: 'Men Clothes', itemCount: 20, imageUrl: '/images/men.jpg' },
      { id: 2, name: 'Women Clothes', itemCount: 15, imageUrl: '/images/women.jpg' },
      { id: 3, name: 'Accessories', itemCount: 10, imageUrl: '/images/accessories.jpg' },
      // Add more as needed
    ])
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e293b] text-white flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-8">fastcart</h1>
        <nav className="space-y-2">
          {['Dashboard', 'Orders', 'Products', 'Categories', 'Coupons', 'Users'].map(item => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2 rounded hover:bg-[#334155] transition"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="mt-auto space-y-2 pt-4 border-t border-gray-700">
          <a href="#" className="block px-4 py-2 rounded hover:bg-[#334155]">Settings</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-[#334155]">Logout</a>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            + Add Category
          </button>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <div
              key={category.id}
              className="relative bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-gray-500">{category.itemCount} items</p>
              </div>
              <button className="absolute top-3 right-3 bg-white text-blue-600 px-2 py-1 rounded shadow hover:bg-blue-100 text-sm">
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard

