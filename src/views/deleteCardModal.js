import '../styles/card.css';

import Button from './button'
import EditBtn from "../assets/Icon-edit.png";
import RemoveBtn from "../assets/Icon-trash.svg";
import DefaultImage from "../assets/photo.svg";

const DeleteCard = ({key,}) =>  (
    <div className="card" key={key}>
        <div className="card-photo">
        <img src={DefaultImage} alt="Foto do Card" />
        </div>

        <div className="card-name">
            <span className="card-name-span"></span>
        </div>
        <div className="button-container">
        <div className="button-wrapper">
            <img src="" alt="Excluir Card" />
            <Button classButton="card-delete" handleClick={() => {
                //TODO REMOVE
            }}>
            Excluir
            </Button>
        </div>
        </div>

  </div>
  )

export default DeleteCard;
