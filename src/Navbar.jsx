import React, { createContext, useContext, useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar(){

    return(
        <h2>Sugar Rush
            <div className='home'>
                <Link to="/">Home | Carrinho</Link>
            </div>
        </h2>
    )
}
export default Navbar;
