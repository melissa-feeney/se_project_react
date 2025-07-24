import { useState, useContext, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditProfileModal({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [form, setForm] = useState({
    name: "",
    avatar: "",
  });
  const [error, setError] = useState("");

  // Pre-fill form with current user data when modal opens
  useEffect(() => {
    if (isOpen && currentUser) {
      setForm({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(form)
      .then(() => {
        onClose();
        setError("");
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to update profile");
      });
  };

  const isFormValid = form.name.trim() !== "";

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isFormValid}
    >
      <label className="modal__label">
        Name*
        <input
          name="name"
          type="text"
          className="modal__input"
          placeholder="Name"
          required
          onChange={handleChange}
          value={form.name}
        />
      </label>
      <label className="modal__label">
        Avatar
        <input
          name="avatar"
          type="url"
          className="modal__input"
          placeholder="Avatar URL"
          onChange={handleChange}
          value={form.avatar}
        />
      </label>
      {error && <span className="modal__error">{error}</span>}
    </ModalWithForm>
  );
}
