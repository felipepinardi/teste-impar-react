import '../styles/card.css';

import Button from './button'
import CardModal from './cardModal'
import DeleteCardModal from './deleteCardModal'

import EditBtn from "../assets/Icon-edit.png";
import RemoveBtn from "../assets/Icon-trash.svg";
import DefaultImage from "../assets/photo.svg";

const Card = ({cName, cStatus, cPhoto, key}) =>  (
    <div className="card" key={key}>
        <div className="card-photo">
        <img src={DefaultImage} alt="Foto do Card" />
        </div>

        <div className="card-name">
            <span className="card-name-span">{cName}</span>
        </div>
        <div className="button-container">
        <div className="button-wrapper">
            <img src={RemoveBtn} alt="Excluir Card" />
            <Button classButton="card-delete" handleClick={() => {
                //TODO REMOVE
            }}>
            Excluir
            </Button>
        </div>
        <div className="button-wrapper">
            <img src={EditBtn} alt="Editar Card" />
            <Button classButton="card-edit" handleClick={() => {
                //TODO EDIT
            }}>
            Editar
            </Button>
        </div>
        </div>

  </div>
  )

export default Card;
