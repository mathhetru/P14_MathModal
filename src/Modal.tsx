import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
// import { useRef } from "react";
// import viteLogo from '/vite.svg'
import "./Modal.css";

function Modal(props: {
  isOpen: boolean;
  header: boolean;
  headerTitle: string;
  footer: boolean;
  buttonFooter: string;
}) {
  const addHeader = () => {
    return !props.header ? null : (
      <header className="m-modal-header">
        <p>{props.headerTitle}</p>
        <span role="button" className="m-modal-button-close">
          <FontAwesomeIcon icon={faCircleXmark} />
        </span>
      </header>
    );
  };

  const addFooter = () => {
    return !props.footer ? null : (
      <footer className="m-modal-footer">
        <button>{props.buttonFooter}</button>
      </footer>
    );
  };

  return !props.isOpen ? null : (
    <dialog aria-hidden={props.isOpen} className="m-modal">
      <div className="m-modal-content">
        {addHeader()}
        <section className="m-modal-main">
          <p>Employee Created!</p>
        </section>
        {addFooter()}
      </div>
    </dialog>
  );
}

export default Modal;
