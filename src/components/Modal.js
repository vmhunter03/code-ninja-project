import ReactDOM from "react-dom";
import "./Modal.css";
function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: "#ff4500",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
