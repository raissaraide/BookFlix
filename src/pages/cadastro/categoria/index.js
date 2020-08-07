import React, {useState} from 'react';
import PageDefault from '../../../components/pageDefault';
import {Link} from 'react-router-dom';


function CadastroCategoria() {
const [categorias, setCategorias] = useState([]);

const valoresIniciais = {
  nome: '',
  descricao: '',
  cor: ''
}

const [valores, setValores] = useState(valoresIniciais);  

function setValor(chave, valor){
  setValores({
    ...valores,
    [chave]: valor
})
}


function handleChange(infos){
const {getAttribute, value} = infos.target;
setValor(
  getAttribute("nome"),
  value
)
}


return(
    <PageDefault>
        <h1>Página de Cadastro de Categoria: </h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
            infosDoEvento.preventDefault();
            setCategorias([
              ...categorias,
              valores
            ])
            setValores(valoresIniciais)
        }}>
          <div>

            <label>
                Nome da Categoria:  
                  <input type="text"
                  value={valores.nome}
                  name="nome"
                  onChange={handleChange}       
                  />    
            </label>
        </div>

        <div>
               <label>
                Descrição:  
                  <textarea
                  type="text"
                  value={valores.descricao}
                  name="descricao"
                  onChange={handleChange}      
                  />    
          </label>
        </div>

        <div>
            <label>
                Cor:  
                  <input 
                  type="color"
                  value={valores.cor}
                  name="cor"
                  onChange={handleChange} 
                  />    
          </label>
        </div>  


          <button>
            Cadastrar
          </button>
        </form>
        
       <ul>
          {categorias.map((categoria, indice) => {
              console.log(categorias)
              return(
                  <li key={`${categoria}${indice}`}>
                      {categoria.nome}
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