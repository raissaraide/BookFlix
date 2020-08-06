import React, {useState} from 'react';
import PageDefault from '../../../components/pageDefault';
import {Link} from 'react-router-dom';


function CadastroCategoria() {
const [categorias, setCategorias] = useState(['Teste']);
const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');  




return(
    <PageDefault>
        <h1>Página de Cadastro de Categoria: {nomeDaCategoria}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
            infosDoEvento.preventDefault();
            console.log('Você tentou enviar o forme né?')
            setCategorias([
              ...categorias,
              nomeDaCategoria
            ])
        }}>
          <label>
                Nome da Categoria:  
                  <input type="text" value={nomeDaCategoria}
                   onChange={ function funcaoHandler(infos){
                    setNomeDaCategoria(infos.target.value)
                  }}       
                  />    
          </label>
          <button>
            Cadastrar
          </button>
        </form>

       <ul>
          {categorias.map((categoria, indice) => {
              return(
                  <li key={`${categoria}${indice}`}>
                      {categoria}
                  </li>
              )
          })}
      </ul>



       <Link to="/">
          Ir para home
      </Link>
    </PageDefault>
  
  )


}

export default CadastroCategoria;