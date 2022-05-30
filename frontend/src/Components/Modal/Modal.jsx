import "./Modal.css";

export default function Modal(props) {
  return (
    <div className="Modal">
      <div className="modal__img">
        <img src={props.image} alt="Profile" />
      </div>
      <a href="http://localhost:5000/logout">Logout</a>
    </div>
  );
}
