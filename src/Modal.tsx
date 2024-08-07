import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import "./Modal.css";

function Modal(props: {
  isOpen?: boolean;
  hasHeader?: boolean;
  headerTitle?: string;
  mainContent?: string;
  hasFooter?: boolean;
  buttonFooter?: string;
  onClose?: () => void;
}) {
  const isOpen = useRef<boolean | undefined>(true);
  const hasHeader = useRef<boolean | undefined>(true);
  const headerTitle = useRef<string | undefined>("");
  const mainContent = useRef<string | undefined>("");
  const buttonFooter = useRef<string | undefined>("");

  isOpen.current = props.isOpen === undefined ? true : props.isOpen;
  hasHeader.current = props.hasHeader === undefined ? true : props.hasHeader;
  headerTitle.current =
    props.headerTitle === undefined ? "" : props.headerTitle;
  mainContent.current =
    props.mainContent === undefined ? "Employee created!" : props.mainContent;
  buttonFooter.current =
    props.buttonFooter === undefined ? "Close" : props.buttonFooter;

  const addHeader = () => {
    return !hasHeader.current ? null : (
      <header className="m-modal-header">
        <p className="m-modal-header__text">{headerTitle.current}</p>
        <button
          role="button"
          className="m-modal-header__button"
          onClick={props.onClose}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </header>
    );
  };

  const addFooter = () => {
    return !props.hasFooter ? null : (
      <footer className="m-modal-footer">
        <button
          role="button"
          className="m-modal-footer__button"
          onClick={props.onClose}
        >
          {buttonFooter.current}
        </button>
      </footer>
    );
  };

  return !isOpen.current ? null : (
    <dialog aria-hidden={isOpen.current} className="m-modal">
      <div className="m-modal-content">
        {addHeader()}
        <section className="m-modal-main">
          <p className="m-modal-main__text">{mainContent.current}</p>
        </section>
        {addFooter()}
      </div>
    </dialog>
  );
}

export default Modal;
