// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

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
              <button onClick={()=> adicionarItemPedidos(produto)}>Selecionar</button>
              </div>
              )
            }
        </div>
    );
}
