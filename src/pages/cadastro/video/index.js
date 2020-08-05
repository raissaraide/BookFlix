import React from 'react';
import PageDefault from '../../../components/pageDefault';
import {Link} from 'react-router-dom';


function CadastroVideo() {
  return(
    <PageDefault>
        <h1>Página de Cadastro de Video</h1>
       <Link to="/cadastro/categoria">
          Cadastro Categoria
      </Link>
    </PageDefault>
  
  )


}

export default CadastroVideo;