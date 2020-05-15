import React from 'react';
import styled from 'styled-components';

const BoxMensagem = styled.div`
display: flex;
flex-direction: column-reverse;
height: 100vh;
width: 80vw;
border: 1px solid black;
`
const DivMensagem = styled.div`
display:flex;
justify-content: center;
align-items: flex-end;
color: blue;
`

const ListaMensagem = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
color: blue;
`

class Input extends React.Component {
  state = {
    mensagens : [
      {
        usuario: "João",
        mensagem: "Bom dia!"
      }
    ],

    valorInputUsuario: "",
    valorInputMensagem: ""
  };
  
  adicionaMensagem = () => {
    const novaMensagem = {
       usuario: this.state.valorInputUsuario,
       mensagem: this.state.valorInputMensagem
      };
      
      const novasMensagens = [...this.state.mensagens, novaMensagem];
      
      this.setState({
        mensagens: novasMensagens
      });
      this.setState({
        valorInputMensagem: ""
      })
    }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value});
  };
  
  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value});
  };
  
  render() {
    const listaDeMensagens = this.state.mensagens.map (mensagem => {
      return (
      <p>{mensagem.usuario}: {mensagem.mensagem}</p>
  );
  });
  
  return (
    <BoxMensagem>
      <DivMensagem>
        <input
        value={this.state.valorInputUsuario}
        onChange={this.onChangeInputUsuario}
        placeholder={"Usuário"}
        />
        <input
        value={this.state.valorInputMensagem}
        onChange={this.onChangeInputMensagem}
        placeholder={"Mensagem"}
        />
        <button onClick={this.adicionaMensagem}>Enviar</button>
      </DivMensagem>
        <ListaMensagem>{listaDeMensagens}</ListaMensagem>
    </BoxMensagem>
    );
  }
}

export default Input