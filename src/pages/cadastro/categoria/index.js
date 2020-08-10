/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    // const {getAttribute, value} = infos.target;
    setValor(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>Página de Cadastro de Categoria: </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);
        setValores(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          value={valores.nome}
          name="nome"
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          value={valores.descricao}
          name="descricao"
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          value={valores.cor}
          name="cor"
          onChange={handleChange}
        />

        {/* <div>
            <label>
                Cor:
                  <input
                  type="color"
                  value={valores.cor}
                  name="cor"
                  onChange={handleChange}
                  />
          </label>
        </div>   */}

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          // console.log(categorias);
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          );
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>

  );
}

export default CadastroCategoria;
