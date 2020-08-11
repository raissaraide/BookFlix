/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, valores, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    console.log('alo alo alo');
    const URL_TOP = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://techwomanflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Página de Cadastro de Categoria: </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);
        clearForm();
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
