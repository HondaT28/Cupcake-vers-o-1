import React, { createContext, useContext, useState} from 'react'
import { cupcakeContext } from './contexts/cupcakeContext';
import cupcakeLogo from './assets/cupcake_desconto.svg'
import botao from './assets/botão.svg'

function Comprar(){
    const {cupcake, setCupcake} = useContext(cupcakeContext)
    return(
        <>
            <div className='retangulo_compra'>
                <div className='cupcake_compra'>
                    <img src={cupcakeLogo}></img>
                    <h5>{cupcake.nome}</h5>
                </div>
                <div className='preco'>R${cupcake.preco}</div>
            </div>            
            <div className='retangulo_descricao'>
                <div>{cupcake.descricao}</div>
                <div className='quantidade'>
                <label>Quantidade</label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>28</option>
                    </select>
                </div>
                <button>
                    <img src={botao} className='botao2'></img>
                </button>
            </div>
        </>
    )

}

export default Comprar;
