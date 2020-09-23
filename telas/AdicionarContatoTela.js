import React, { useState } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import ContatoInput from '../components/ContatoInput';


const AdicionarContatosTela = (props) => {
  
  const [contatos, setContatos] = useState ([]);
  const [contadorContatos, setContadorContatos] = useState (10);
  
  //console.log(contatos)

  const adicionarContato = (contato) => {
    setContatos ((contatos) => {
      setContadorContatos (contadorContatos + 2);
      return [{key: contadorContatos.toString(), value:contato}, ...contatos]
    });
  }

  return (
    <View style={estilos.telaPrincipalView}>
      <ContatoInput onAdicionarContato={adicionarContato}></ContatoInput>
    </View>
  )
}

const estilos = StyleSheet.create({
  telaPrincipalView: {
    padding: 50,
    flex:1,
    backgroundColor: '#f0f0f7'
  }
});

export default AdicionarContatosTela;