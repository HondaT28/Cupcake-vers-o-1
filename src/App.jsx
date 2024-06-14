import React, { createContext, useContext, useState} from 'react'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import './App.css'
import Comprar from './comprar_produto.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { cupcakeContext } from './contexts/cupcakeContext.jsx'

function App() {
  const ProductList = [];
  const Cupcake = {nome:"cup", preco:"15", descricao:"cake"}
  const [cupcake, setCupcake] = useState(Cupcake)

  return (
    <>
      <Router>
        <cupcakeContext.Provider value={{ cupcake, setCupcake}}>
        <div>
          <Navbar />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/comprar"element={<Comprar/> }></Route>
            </Routes>
          </div>
        </div>
        </cupcakeContext.Provider>
      </Router>
    </>
  )
}

export default App
