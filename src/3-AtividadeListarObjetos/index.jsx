// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.


import {useState} from "react";

export default function Home() {

    const [listaProdutos, setProdutos] = useState([
        {id: 1, nome: 'Nike', preco: 'R$200,00'},
        {id: 2, nome: 'Olympikus', preco: 'R$300,00'},
        {id: 3, nome: 'Adidas', preco: 'R$400,00'}
    ]);

    return (
        <div>
            <h1>Tênis Esportivos</h1>
            {
              listaProdutos.map((produtos) =>
              <div key={produtos.id}> 
              <p>{produtos.nome}</p>
              <p>{produtos.preco}</p>
              </div>
              )
            }
        </div>
    );
}
