import React from "react";
import "./ConfirmationModal.css";

function ConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;
  return (
    <div className="modal modal_opened">
      <div className="modal__content">
        <p className="modal__text">
          Are you sure you want to delete this item?
          <span className="modal__line">This action is irreversible.</span>
        </p>
        <div className="modal__actions">
          <button className="modal__button-delete" onClick={onConfirm}>
            Yes, delete item
          </button>
          <button className="modal__button-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
