import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LoginModal({ isOpen, onClose, onLogin }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(form).catch(() => setError("Login failed"));
  };

  const isFormValid = form.email.trim() !== "" && form.password.trim() !== "";

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isFormValid}
    >
      <label className="modal__label">
        Email
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
        Password
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
      {error && <span className="modal__error">{error}</span>}
    </ModalWithForm>
  );
}
