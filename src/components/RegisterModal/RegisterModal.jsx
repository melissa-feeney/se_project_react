import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function RegisterModal({ isOpen, onClose, onRegister }) {
  const [form, setForm] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(form).catch((err) => setError("Registration failed"));
  };

  const isFormValid =
    form.email.trim() !== "" &&
    form.password.trim() !== "" &&
    form.name.trim() !== "";

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Next"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isFormValid}
      additionalText="or Log in"
    >
      <label className="modal__label">
        Email*
        <input
          name="email"
          type="email"
          className="modal__input"
          placeholder="Email"
          required
          onChange={handleChange}
          value={form.email}
        />
      </label>
      <label className="modal__label">
        Password*
        <input
          name="password"
          type="password"
          className="modal__input"
          placeholder="Password"
          required
          onChange={handleChange}
          value={form.password}
        />
      </label>
      <label className="modal__label">
        Name
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
        Avatar URL
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
