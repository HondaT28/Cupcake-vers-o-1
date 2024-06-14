import React, { createContext, useContext, useState} from 'react'
import botao from './assets/botão.svg'
import cupcakeLogo from './assets/cupcake_desconto.svg'
import { cupcakeContext } from './contexts/cupcakeContext'
import { Navigate, useNavigate } from 'react-router-dom'



function Home(){
    const navigate = useNavigate()
    const { cupcake, setCupcake } = useContext(cupcakeContext)

    const [formData, setFormData] = useState({
        nome:'',
        preco:'',
        descricao:''
    })
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        setCupcake((e)=>{
            return(
                {
                    nome: formData.nome,
                    preco: formData.preco,
                    descricao: formData.descricao
                }
            )
        });
        navigate("/comprar")                    
    }
    const handleChange = (e)=>{
        const {name, value}=e.target
        setFormData((prevFormData)=>{
            return({
                    ...prevFormData,
                    [name]: value

            })
        })
    }

    return(
        <>
            <h1>Welcome</h1>
            <h3>CRAVING SUGAR?</h3>
            <div className='cupcakes'>
                <div className='cupcake_desconto'>
                    <a className='desconto'>30%</a>
                    <img src={cupcakeLogo}></img>
                    <h4>Cupcake</h4>
                </div>
                <div className='cupcake_default'>
                    <img src={cupcakeLogo}></img>
                    <h4>Cupcake</h4>
                </div>
                <div className='cupcake_default'>
                    <img src={cupcakeLogo}></img>
                    <h4>Cupcake</h4>
                </div>
            </div>
            <div className='Create_new'>
            <form onSubmit={handleSubmit}>
                <a>
                    <label>Nome do Produto</label><br/>
                    <input 
                        type='text' 
                        placeholder='Nome do Produto' 
                        name='nome'
                        className='escrever'
                        onChange={handleChange}>
                    </input>
                </a>
                <a>
                    <label>Preço</label><br/>
                    <input 
                        type='text' 
                        placeholder='Preço' 
                        name='preco' 
                        className='escrever'
                        onChange={handleChange}>
                    </input>
                </a>
                <a>
                    <label>Descrição</label><br/>
                    <input 
                        type='text' 
                        placeholder='Descrição' 
                        name='descricao'
                        className='escrever'
                        onChange={handleChange}>
                    </input>
                </a>
                <button type="submit" onClick = {handleSubmit}>
                <img src={botao} className='botao1'></img>
                </button>
            </form> 
          </div>
        </>
    )
}

export default Home;
