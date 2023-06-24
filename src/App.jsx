import { useState } from 'react'
import axios from 'axios'

function App() {
  const [input, setInput] = useState({
    first_name: '',
    last_name: '',
    email: ''
  })

  const handleInputOnChange = e => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios('http://localhost:8080/api/users', {
        method: 'POST',
        data: JSON.stringify(input),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <>
      <div>
        <h1>Registrar un nuevo usuario</h1>
        <form onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input name="first_name" value={input.first_name} onChange={handleInputOnChange} />
          <br />
          <label>Apellido: </label>
          <input name="last_name" value={input.last_name} onChange={handleInputOnChange} />
          <br />
          <label>Email: </label>
          <input name="email" value={input.email} onChange={handleInputOnChange} />
          <br />
          <input type="submit" />
        </form>
      </div>
    </>
  )
}

export default App
