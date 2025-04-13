import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    const data = await response.json()
    if (response.ok) {
      localStorage.setItem('token', data.token)
      navigate('/')
    } else {
      setError(data.error)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <input type="text" placeholder="Username" className="w-full mb-3 px-3 py-2 border rounded" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full mb-3 px-3 py-2 border rounded" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="w-full bg-blue-500 text-white px-3 py-2 rounded">Login</button>
      </form>
    </div>
  )
}
export default Login
