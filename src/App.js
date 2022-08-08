import React, {Component} from 'react';
import './styles/app.css';
import Header from './views/header'
import Search from './views/search'
import Button from './views/button'
import Card from './views/card'
import CardModal from './views/cardModal'

import axios from 'axios'

class App extends Component {
  state = {
    cards: [],
    openNewCard: false
  }
  constructor(){
    super();
    this.showHideNewCardModal = this.showHideNewCardModal.bind(this);
  }

  showHideNewCardModal = () => {
    this.setState({openNewCard: !this.state.openNewCard})
  }

  componentDidMount(){
    axios.get('https://localhost:44389/cards').then((response) => {
      const cards = response.data
      this.setState({cards})
    })
  }

  render(){
    return (
      <div className="app">
        <Header></Header>
        <Search></Search>
        <div className="page-title">
          <span>Resultado da busca</span>
          <Button classButton="new-card-button" handleClick={() => {
            this.showHideNewCardModal()
          }}>Novo Card</Button>
        </div>
        <div className='cards-container'>
          {
            this.state.cards.map(card => (
              <Card key={card.CardId} cName={card.name} cStatus={card.status} cPhoto={card.photo}></Card>
            ))
            }
        </div>
        {this.state.openNewCard && (
        <CardModal cardIsOpen={this.state.openNewCard}  onCloseClick={this.showHideNewCardModal} />
      )}
      </div>
    )
  }
}

export default App;
