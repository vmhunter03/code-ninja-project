import ReactDOM from "react-dom";
import "./Modal.css";
function Modal({ children, isSalesModal, handleClose }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: isSalesModal ? "#ff4500" : "#555",
          textAlign: "center",
        }}
      >
        {children}
        <button
            onClick={handleClose}
            className={isSalesModal ? "sales-btn" : ""}
          >
            <b>Click For More!</b>
          </button>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
