import React from "react";
import produtos from '../data/produtos';

export default (props)=>{

    /*let novaLista = produtos.map((item) =>{
       // console.log(item);
       return {nome: item,idade:30};

    })    

    novaLista.map((i)=>{
        console.log(i.idade);
    })
    

    let listaProdutos = produtos.map((itens)=>{       
        //console.log(itens);       
        console.log(itens.nome+' - '+itens.preco);
    })

    */

    function getProdutosListItem(){
        return produtos.map(prod =>{
            return <li key={prod.id}>
                    {prod.id} - {prod.nome} => R$ {prod.preco}  
                   </li>
        })

    }

    return(
       
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}