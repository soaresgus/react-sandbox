import { forwardRef, useImperativeHandle, useState } from "react";

export interface ModalHandles {
  openModal(): void;
}

export const Modal = forwardRef<ModalHandles>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useImperativeHandle(
    ref,
    () => {
      return {
        openModal
      };
    },
    []
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <h1>Super modal incrível!</h1>
      <button className="button" onClick={closeModal}>
        Fechar modal
      </button>
    </div>
  );
});
