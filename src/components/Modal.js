import  ReactDOM  from "react-dom";
import "./Modal.css";
function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
    </div>,
    document.body
  );
}

export default Modal;
