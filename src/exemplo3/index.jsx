import { useEffect, useState } from "react";

export default function App() {
  
  const [Usuario,setUsuario] = useState([]);

  useEffect(() => { 

    const  buscarUsuario = async () => {
        const resposta = await fetch('https://fakestoreapi.com/products');
        const dados = await resposta.json();
         setUsuario(dados);
    }
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {lista.map(produto => (
          <li key={produto.userId}>
            <h2>{produto.id}</h2>
            <p>{produto.title}</p>
          </li>

        ))
            //complete o código
        }
      </ul>
    </>
  );
}
