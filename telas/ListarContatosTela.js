import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho';
import { Platform } from "react-native";
//import ContatoItem from './components/ContatoItem';

const ListarContatosTela = (props) => {

  const [contatos, setContatos] = useState ([]);
  const [contadorContatos, setContadorContatos] = useState (10);


  const removerContato = (KeyASerRemovida) => {
    setContatos(contatos => {
      return contatos.filter((contato) => {
        return contato.key !== KeyASerRemovida
      })
    })
  }

  return (
    <View style={estilos.telaPrincipalView}>
       <View>
      <FlatList 
        data={contatos}
        renderItem={
          contato => (
            <ContatoItem
              chave={contato.item.key} 
              contato={contato.item.value} 
              onDelete={removerContato}
            />
          )
        }
      />   
    </View>
    </View>
  )
}

ListarContatosTela.navigationOptions = (dadosNavegacao) => {
  return {
    headerTitle: "Lista de contatos",
    headerRight: 
      <HeaderButtons
        HeaderButtonComponent={BotaoCabecalho}
      >
      <Item 
        title="Adicionar"
        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
        onPress={() => dadosNavegacao.navigation.navigate('AdicionarContatos')}
      />
      </HeaderButtons>
  }
}

const estilos = StyleSheet.create({
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
});

export default ListarContatosTela;