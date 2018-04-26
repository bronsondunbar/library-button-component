import React from 'react';
import classNames from 'classnames';

import './style.css';

const ButtonComponent = ({ buttonCategory, buttonSize, buttonSymbol, buttonText, handleClick, handleHoverOver, handleHoverExit }) => {

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
        onClick={!handleClick ? null  : (event) => handleClick(event)}
        onMouseEnter={!handleHoverOver ? null : (event) => handleHoverOver(event)}
        onMouseLeave={!handleHoverExit ? null : (event) => handleHoverExit(event)} >
          <i className={buttonSymbol}></i> {!buttonText ? "Button" : buttonText}
      </button>
    </div>
  )
}

export default ButtonComponent;