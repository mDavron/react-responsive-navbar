import React from 'react'
import './Button.css'

const STYLES = [
    "btn--primary",
    "btn--outline"
]
const SIZES = [
    "btn--medium",
    "btn--large"
]

const Button = ({
    children,
    onClick,
    type,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : STYLES[0];
    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}>
            {children}
        </button>
    )
}

export default Button