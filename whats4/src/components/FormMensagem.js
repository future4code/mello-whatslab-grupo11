import React from "react";
import styled from "styled-components";

const BoxPai = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxMensagem = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100vh;
  width: 45vw;
  border: 1px solid black;
  background-color: #e5ddd5;
`;

const DivMensagem = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-bottom: 10px;
`;

const ListaMensagem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 25px;
  padding-bottom: 25px;
`;

const InputUsuario = styled.input`
  height: 5vh;
  width: 7vw;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  font-size: 16px;
`;

const InputMensagem = styled.input`
  width: 28vw;
  height: 5vh;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  font-size: 16px;
`;

const Botao = styled.button`
  font-size: 16px;
  font-weight: bold;
  min-width: 6vw;
  height: 5.2vh;
  border-radius: 5px;
  border: none;
  background-color: white;
`;

const TextoBold = styled.span`
  font-weight: bold;
`;

const MensagemRecebida = styled.div`
  text-align: left;
  background-color: white;
  border-radius: 5px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 7.5vh;
  padding: 10px;
  min-width: 7vw;
  margin-bottom: 2vh;
`;

export class Input extends React.Component {
  state = {
    mensagens: [
      {
        usuario: "",
        mensagem: "",
      },
    ],

    valorInputUsuario: "",
    valorInputMensagem: "",
  };

  adicionaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
    };

    const novasMensagens = [...this.state.mensagens, novaMensagem];

    this.setState({
      mensagens: novasMensagens,
    });
    this.setState({
      valorInputMensagem: "",
    });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  aoApertarEnter = (event) => {
    if (event.key === "Enter") {
      return this.adicionaMensagem();
    }
  };

  // APAGA
  removeMensagem = (mensagemParaRemover) => {
    const novaListaDeMensagens = this.state.mensagens.filter((dado) => {
      return dado.usuario !== mensagemParaRemover;
    });

    this.setState({
      mensagens: novaListaDeMensagens,
    });
  };

  // CONFIRMAÇÃO
  confirmacaoRemoveMensagem = () => {
    let confirmacaoApagaMensagem = window.confirm(
      "Você deseja apagar a mensagem?"
    );

    if (confirmacaoApagaMensagem === true) {
      this.removeMensagem(this.state.mensagens.usuario);
    }
  };

  render() {
    const listaDeMensagens = this.state.mensagens.map((dado) => {
      return (
        <MensagemRecebida>
          <TextoBold>{dado.usuario}</TextoBold>
          {dado.mensagem}
        </MensagemRecebida>
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
              onKeyPress={this.aoApertarEnter}
            />
            <Botao onClick={this.adicionaMensagem}>Enviar</Botao>
          </DivMensagem>
          <ListaMensagem onDoubleClick={this.confirmacaoRemoveMensagem}>
            {listaDeMensagens}
          </ListaMensagem>
        </BoxMensagem>
      </BoxPai>
    );
  }
}

export default Input;
