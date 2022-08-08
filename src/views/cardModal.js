import React, {Component} from 'react';
import '../styles/newCard.css';
import Button from './button'

import axios from 'axios'

import confirmButton from "../assets/icone_criar.png";
import closeButton from "../assets/close.svg";

class CardModal extends Component{
  state = {
    name: "",
    photo: File[0],
    photoData: "",
    clickedCreate: false
  }
  
  setCardModalOpen = e => {
    this.props.onCloseClick()
  }

  createCard = e => {
    debugger;
    if (this.state.name === "" && this.state.photo === null)  return alert("Preencha os campos para seguir");
    e.preventDefault();

    let card = {
      name: this.state.name,
      status: 'Created',
      base64: this.state.photoData
    }
    axios.post('https://localhost:44389/cards/create', card).then(response => {
      const cardResp = response.data
      this.setState({name: cardResp.name,photoData:cardResp.base64})
    })
    this.setCardModalOpen();
  }

  render(){
    return(
      <div className="modal-new">
        <div className="modal-container">
          <div className="modal-header">
            <img src={confirmButton} alt="Imagem de criação de cards" />
            <span>Criar Card</span>
            <Button classButton="btn-close-modal" handleClick={this.setCardModalOpen}>
              <img src={closeButton} alt="Fechar modal" />
            </Button>
          </div>
          <form onSubmit={this.createCard}>
            <label className="field-label" htmlFor="name">DIGITE UM NOME PARA O CARD</label>
            <input type="text" placeholder="Digite o título" name="name" maxLength={50} 
              onChange={(name) => 
              this.setState({name: name.target.value})}/>
            <label className="field-label" htmlFor="photo">INCLUA UMA IMAGEM PARA APARECER NO CARD</label>
            <label htmlFor="photo" className="file-label">
            {this.state.photo == null ? "Nenhum arquivo selecionado" : this.state.photo.name}
              <span className="label-button">Escolher arquivo</span>
            </label>
            <input type="file" id="photo" onChange={(photo) => 
                {
                  this.setState({
                      photo: photo.target.files[0],
                      photoData: URL.createObjectURL(photo.target.files[0])
                  })
                }}/>
            
            <div className="submit-button">
              {(this.state.clickedCreate) && 
              <div class="alert-required" role="alert">Favor preencher os campos</div>
              }

              <Button classButton='create-card-button' onKeyUp={() => this.setState({clickedCreate: true})} type="submit">Criar card</Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CardModal;
