import React from "react";
import "./InputHandler.css";

const InputHandler = ({ onSelectButtonClick, city, setCity }) => {

  const onSubmitButton = (e) => {
    e.preventDefault();
    onSelectButtonClick();
  };
  return (
    <div className="InputHandlerMain">
      <h1>Välj stad...</h1>
      <div className="InputHandlerSecondary">
        <form onSubmit={onSubmitButton}>
          <input
            placeholder=""
            onSubmit={onSelectButtonClick}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Sök</button>
        </form>
      </div>
    </div>
  );
};

export default InputHandler;
