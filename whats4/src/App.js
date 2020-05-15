import React from 'react';
import styled from 'styled-components';

const BoxPai = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const BoxMensagem = styled.div`
display: flex;
flex-direction: column-reverse;
height: 100vh;
width: 45vw;
border: 1px solid black;
`
const DivMensagem = styled.div`
display:flex;
justify-content: center;
align-items: flex-end;
`

const ListaMensagem = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
padding-left: 25px;
padding-bottom: 25px;
`

const InputUsuario = styled.input`
width:7vw;
`

const InputMensagem = styled.input`
width: 34vw;
`

const Botao = styled.button`
width: 4vw;
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
    <BoxPai>
      <BoxMensagem>
        <DivMensagem>
          <InputUsuario
          value={this.state.valorInputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={"Usuário"}
          />
          <InputMensagem
          value={this.state.valorInputMensagem}
          onChange={this.onChangeInputMensagem}
          placeholder={"Mensagem"}
          />
          <Botao onClick={this.adicionaMensagem}>Enviar</Botao>
        </DivMensagem>
          <ListaMensagem>{listaDeMensagens}</ListaMensagem>
      </BoxMensagem>
    </BoxPai>
    );
  }
}

export default Input