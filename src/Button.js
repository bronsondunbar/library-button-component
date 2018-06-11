import React from 'react';
import classNames from 'classnames';

import './style.css';

const ButtonComponent = ({ buttonCategory, buttonSize, buttonSymbol, buttonText, handleButtonClick, handleButtonHoverOver, handleButtonHoverExit }) => {

  let btnClass = classNames({
    btn: true,
    'btn-lg': buttonSize === "large",
    'btn-default': buttonCategory === "default" || buttonCategory == null,
    'btn-primary': buttonCategory === "primary",
    'btn-success': buttonCategory === "success",
    'btn-danger': buttonCategory === "danger",
    'btn-info': buttonCategory === "info"
  });

  return (
    <div>
      <button
        className={btnClass}
        onClick={!handleButtonClick ? null  : (event) => handleButtonClick(event)}
        onMouseEnter={!handleButtonHoverOver ? null : (event) => handleButtonHoverOver(event)}
        onMouseLeave={!handleButtonHoverExit ? null : (event) => handleButtonHoverExit(event)} >
          <i className={buttonSymbol}></i> {!buttonText ? "Button" : buttonText}
      </button>
    </div>
  )
}

export default ButtonComponent;