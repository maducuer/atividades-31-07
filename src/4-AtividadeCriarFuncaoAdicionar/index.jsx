// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

import {useState} from "react";

export default function Home() {

    const [listaProdutos, setProdutos] = useState([
        {id: 1, nome: 'Nike', preco: 'R$200,00'},
        {id: 2, nome: 'Olympikus', preco: 'R$300,00'},
        {id: 3, nome: 'Adidas', preco: 'R$400,00'}
    ]);

const [listaPedidos, setListaPedidos] = useState([]);

const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos,objeto])
}

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
