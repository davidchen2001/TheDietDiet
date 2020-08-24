import React from "react";
import './Button.css';

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

const COLOR = ["primary", "blue", "red", "green"];

const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonColor}) => {
    //Checks if Button has a buttonStyle --> Ensures it uses that style - If not - it just uses the regular style 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;
    return (
        <button className = {`btn${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick = {onClick} type = {type}>{children}</button>
    )
};

export default Button;