import { useState } from 'react'
import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import AddRecipe from './pages/AddRecipe/AddRecipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddRecipe />} />
          </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
