import React from "react";
import './App.css'

import Primeiro from './components/Primeiro'
//import CompParam from './components/ComParametro'
//import Filhos from './components/ComFilhos'

import Card from  './components/layout/Card.jsx'
import Produtos from './components/Repeticao'
import Par from './components/condicional'


export default (props)=>{

    return(   

        <div className="App">
            <Card titulo="Primeiro">
                <Primeiro/>
            </Card>

            <Card titulo="Segundo">
                Conteudos de boa 2
            </Card>

            <Card titulo="Repetição">
                <Produtos></Produtos>
            </Card>

            <Card titulo="Par - Impar">
                <Par numero = {10}></Par>
            </Card>

        </div>

       


    )
}