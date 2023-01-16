import { useRef } from "react";
import { Modal, ModalHandles } from "./Modal";

export function UseImperativeHandleHook() {
  const modalRef = useRef<ModalHandles>(null);

  function openModal() {
    modalRef.current?.openModal();
  }

  return (
    <div>
      <button className="button" onClick={openModal}>
        Abrir modal
      </button>

      <Modal ref={modalRef} />
    </div>
  );
}
