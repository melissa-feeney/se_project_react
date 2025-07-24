import { useContext } from "react";
import "./ItemModal.css";
import itemModalCloseBtn from "../../assets/itemCard-close-btn.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ onClose, card, isOpen, onDelete }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser?._id;

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={itemModalCloseBtn}
            className="modal__close-btn"
            alt="modal close button"
          ></img>
        </button>
        <img
          src={card.link || card.imageUrl}
          alt="card image"
          className="modal__image"
        />
        <div className="modal__footer">
          <div className="modal__caption-row">
            <h2 className="modal__caption">{card.name}</h2>
            {isOwn && (
              <button
                className="modal__delete"
                type="button"
                onClick={() => onDelete(card._id)}
              >
                Delete item
              </button>
            )}
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
