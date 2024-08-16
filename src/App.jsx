import { useState } from 'react'
import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import AddRecipe from './pages/AddRecipe/AddRecipe'
import ViewAllRecipes from './pages/ViewAllRecipes/ViewAllRecipes'
import ViewRecipe from './pages/ViewOneRecipe/ViewRecipe'
import DeleteRecipe from './pages/DeleteRecipe/DeleteRecipe'
import EditRecipe from './pages/EditRecipe/EditRecipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="app">
      <BrowserRouter>
          <Header />

          <div className="app__main-wrapper">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add' element={<AddRecipe />} />
                <Route path='/view' element={<ViewAllRecipes />} />
                <Route path="/view/:id"  element={<ViewRecipe />} />
                <Route path='/edit/:id' element={<EditRecipe />} />
                <Route path='/delete/:id' element={<DeleteRecipe />} />
              </Routes>
          </div>
          
          <Footer />
        </BrowserRouter>
     </div>
    </>
  )
}

export default App
