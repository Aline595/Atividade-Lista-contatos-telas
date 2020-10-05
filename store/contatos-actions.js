export const ADD_CONTATO = 'ADD_CONTATO';
export const LISTA_CONTATOS = 'LISTA_CONTATOS';

import { buscarContatos, inserirContato } from '../helpers/db';

export const addContato = (nomeContato, imagemURI, numeroContato) => {
  
}

export const listarContatos = () => {
  return async dispatch => {
    try{
      const resultadoDB = await buscarContatos();
      console.log(resultadoDB)
      dispatch({type: LISTA_CONTATOS, contatos: resultadoDB.rows._array ? resultadoDB.rows._array : []});
    }
    catch(err){
      console.log(err);
      throw err;
    }
  }
}

/*export const addContato = (nomeContato, numeroContato, imagemURI) => {
  return {
    type: ADD_CONTATO, dadosContato: {nomeContato: nomeContato, numeroContato: numeroContato,  imagemURI: imagemURI}
  }
}*/