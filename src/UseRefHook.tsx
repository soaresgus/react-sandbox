import { FormEvent, useRef } from "react";
import { Input } from "./Input";

export function UseRefHook() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const termsRef = useRef({ value: false });

  function handleGetFocus() {
    nameInputRef.current?.focus();
  }

  function handleToggleTerms() {
    termsRef.current.value = !termsRef.current.value;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(
      nameInputRef.current?.value,
      termsRef.current.value,
      emailInputRef.current?.value
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="useRef">
        <input
          ref={nameInputRef}
          type="text"
          className="input"
          placeholder="Your name"
        />

        <Input label="Email" ref={emailInputRef} />

        <button className="button" type="button" onClick={handleGetFocus}>
          Realizar foco
        </button>

        <button className="button" type="button" onClick={handleToggleTerms}>
          Aceitar termos
        </button>

        <button className="button" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
}
