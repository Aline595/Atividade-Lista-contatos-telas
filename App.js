import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';
import ContatosNaigator from './navegacao/ContatosNaigator';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import contatosReducer from './store/contatos-reducer';

const rootReducer = combineReducers({
  contatos: contatosReducer
})
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
/*
  const [contatos, setContatos] = useState ([]);
  const [contadorContatos, setContadorContatos] = useState (10);

  const adicionarContato = (contato) => {
    setContatos ((contatos) => {
      setContadorContatos (contadorContatos + 2);
      return [{key: contadorContatos.toString(), value:contato}, ...contatos]
    });
  }

  const removerContato = (KeyASerRemovida) => {
    setContatos(contatos => {
      return contatos.filter((contato) => {
        return contato.key !== KeyASerRemovida
      })
    })
  }
*/
  return (
    <Provider store = {store}>
      <ContatosNaigator />
    </Provider>
  );
}

/*const estilos = StyleSheet.create({
  entradaView: {
    marginBottom: 8

  },
  itemNaListaView: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  },
  lembreteTextInput: { 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 8, 
    textAlign: 'center' 
  },
  telaPrincipalView: {
    padding: 50,
    flex:1,
    backgroundColor: '#f0f0f7'
  }
});*/