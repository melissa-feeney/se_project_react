import "./ModalWithForm.css";
import modalCloseBtn from "../../assets/modal-close-btn.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  onClose,
  isOpen,
  onSubmit,
  isDisabled,
  additionalText,
  switchButton,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={modalCloseBtn}
            className="modal__close-btn"
            alt="modal close button"
          ></img>
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__button-container">
            <button
              type="submit"
              className="modal__submit"
              disabled={isDisabled}
            >
              {buttonText}
            </button>
            {switchButton}
            {additionalText && (
              <span className="modal__additional-text">{additionalText}</span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
