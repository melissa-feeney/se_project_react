import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LoginModal({
  isOpen,
  onClose,
  onLogin,
  onSwitchToRegister,
}) {
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
      switchButton={
        <span
          className="modal__switch-text"
          onClick={() => {
            console.log("Switch to register clicked!");
            onSwitchToRegister();
          }}
          style={{
            color: isFormValid ? "#000" : "rgba(0, 0, 0, 0.3)",
            cursor: "pointer",
          }}
        >
          or Sign Up
        </span>
      }
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
